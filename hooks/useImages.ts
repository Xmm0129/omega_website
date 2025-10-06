'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase, BUCKET_NAME } from '@/lib/supabase'

export interface ImageItem {
  id: string
  name: string
  url: string
  created_at: string
  size: number
}

export interface UseImagesReturn {
  images: ImageItem[]
  loading: boolean
  error: string | null
  uploadImage: (file: File) => Promise<string | null>
  deleteImage: (id: string) => Promise<boolean>
  refreshImages: () => Promise<void>
}

export function useImages(): UseImagesReturn {
  const [images, setImages] = useState<ImageItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 获取所有图片
  const fetchImages = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .list('', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'created_at', order: 'desc' }
        })

      if (error) {
        if (error.message.includes('Bucket not found')) {
          throw new Error('Storage bucket 未找到，请在 Supabase 中创建 "images" bucket')
        }
        throw error
      }

      // 转换数据格式并获取公开URL
      const imageItems: ImageItem[] = await Promise.all(
        (data || []).map(async (file) => {
          const { data: { publicUrl } } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(file.name)

          return {
            id: file.id || file.name,
            name: file.name,
            url: publicUrl,
            created_at: file.created_at || new Date().toISOString(),
            size: file.metadata?.size || 0
          }
        })
      )

      setImages(imageItems)
    } catch (err: any) {
      console.error('获取图片列表失败:', err)
      setError(err.message || '获取图片失败')
    } finally {
      setLoading(false)
    }
  }, [])

  // 上传图片
  const uploadImage = useCallback(async (file: File): Promise<string | null> => {
    try {
      setError(null)

      // 生成唯一文件名
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      
      // 上传文件
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(fileName, file)

      if (error) {
        if (error.message.includes('Bucket not found')) {
          throw new Error('Storage bucket 未找到，请在 Supabase 中创建 "images" bucket')
        }
        throw error
      }

      // 获取公开URL
      const { data: { publicUrl } } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(fileName)

      // 创建新的图片项
      const newImage: ImageItem = {
        id: data.path,
        name: fileName,
        url: publicUrl,
        created_at: new Date().toISOString(),
        size: file.size
      }

      // 添加到列表顶部
      setImages(prev => [newImage, ...prev])

      return publicUrl
    } catch (err: any) {
      console.error('上传图片失败:', err)
      setError(err.message || '上传失败')
      return null
    }
  }, [])

  // 删除图片
  const deleteImage = useCallback(async (id: string): Promise<boolean> => {
    try {
      setError(null)

      const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .remove([id])

      if (error) {
        throw error
      }

      // 从列表中移除
      setImages(prev => prev.filter(img => img.id !== id))
      return true
    } catch (err: any) {
      console.error('删除图片失败:', err)
      setError(err.message || '删除失败')
      return false
    }
  }, [])

  // 刷新图片列表
  const refreshImages = useCallback(async () => {
    await fetchImages()
  }, [fetchImages])

  // 组件挂载时获取图片
  useEffect(() => {
    fetchImages()
  }, [fetchImages])

  return {
    images,
    loading,
    error,
    uploadImage,
    deleteImage,
    refreshImages
  }
}
