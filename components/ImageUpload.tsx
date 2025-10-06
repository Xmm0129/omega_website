'use client'

import { useState, useRef, useCallback } from 'react'
import { supabase, BUCKET_NAME } from '@/lib/supabase'

interface ImageUploadProps {
  onUploadSuccess?: (imageUrl: string) => void
  onUploadError?: (error: string) => void
}

export default function ImageUpload({ onUploadSuccess, onUploadError }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 显示消息
  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage(text)
    setMessageType(type)
    setTimeout(() => {
      setMessage('')
      setMessageType('')
    }, 3000)
  }

  // 上传图片到 Supabase Storage
  const uploadImage = async (file: File) => {
    try {
      setIsUploading(true)
      setUploadProgress(0)
      setMessage('')

      // 模拟上传进度
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return prev
          }
          return prev + Math.random() * 20
        })
      }, 200)

      // 生成唯一文件名
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      
      // 上传文件
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(fileName, file)

      if (error) {
        throw error
      }

      // 获取公开 URL
      const { data: { publicUrl } } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(fileName)

      clearInterval(progressInterval)
      setUploadProgress(100)
      
      // 延迟显示成功消息
      setTimeout(() => {
        showMessage('图片上传成功！🎉', 'success')
      }, 500)
      
      // 通知父组件
      if (onUploadSuccess) {
        onUploadSuccess(publicUrl)
      }

    } catch (error: any) {
      console.error('上传错误:', error)
      showMessage(`上传失败: ${error.message}`, 'error')
      
      // 通知父组件
      if (onUploadError) {
        onUploadError(error.message)
      }
    } finally {
      setTimeout(() => {
        setIsUploading(false)
        setUploadProgress(0)
        // 清理预览URL
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
          setPreviewUrl(null)
        }
      }, 1000)
    }
  }

  // 处理文件选择
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // 检查文件类型
      if (!file.type.startsWith('image/')) {
        showMessage('请选择图片文件！', 'error')
        return
      }

      // 检查文件大小 (5MB 限制)
      if (file.size > 5 * 1024 * 1024) {
        showMessage('图片大小不能超过 5MB！', 'error')
        return
      }

      // 创建预览URL
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)

      uploadImage(file)
    }
  }

  // 处理拖拽
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      // 检查文件类型
      if (!file.type.startsWith('image/')) {
        showMessage('请拖拽图片文件！', 'error')
        return
      }

      // 检查文件大小
      if (file.size > 5 * 1024 * 1024) {
        showMessage('图片大小不能超过 5MB！', 'error')
        return
      }

      // 创建预览URL
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)

      uploadImage(file)
    }
  }

  // 点击上传区域
  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 上传区域 */}
      <div
        className={`
          border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300
          ${isUploading 
            ? 'border-cyan-400 bg-cyan-400/10 scale-105' 
            : 'border-gray-400 hover:border-cyan-400 hover:bg-cyan-400/5 hover:scale-102'
          }
        `}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          disabled={isUploading}
        />
        
        {isUploading ? (
          <div className="space-y-4">
            {previewUrl ? (
              <div className="relative">
                <img 
                  src={previewUrl} 
                  alt="预览" 
                  className="w-32 h-32 object-cover rounded-lg mx-auto"
                />
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <div className="text-4xl">📤</div>
                </div>
              </div>
            ) : (
              <div className="text-4xl">📤</div>
            )}
            <p className="text-cyan-400 font-medium">正在上传...</p>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-cyan-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">{Math.round(uploadProgress)}%</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-6xl">📷</div>
            <div>
              <p className="text-lg font-medium text-white mb-2">
                点击或拖拽上传图片
              </p>
              <p className="text-sm text-gray-400">
                支持 JPG、PNG、GIF、WebP 格式，最大 5MB
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 消息提示 */}
      {message && (
        <div className={`
          mt-4 p-3 rounded-lg text-center font-medium
          ${messageType === 'success' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }
        `}>
          {message}
        </div>
      )}
    </div>
  )
}
