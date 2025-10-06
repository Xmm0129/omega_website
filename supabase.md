# 欧米伽网站图片上传功能计划

## 📋 项目概述
为欧米伽的个人网站添加图片上传功能，使用 Supabase Storage 存储图片，并在相册板块中展示。

## 🎯 功能需求
- 用户点击按钮选择图片
- 上传图片到 Supabase Storage (bucket: images)
- 显示上传成功信息
- 在相册板块中展示所有已上传的图片
- 使用现有的 CircularGallery 动效组件

## 📦 技术栈
- **前端**: Next.js + React
- **存储**: Supabase Storage
- **UI**: Tailwind CSS
- **动效**: 现有的 CircularGallery 组件

## 🚀 实施步骤

### 第一步：安装 Supabase 依赖
```bash
npm install @supabase/supabase-js
```

### 第二步：配置 Supabase 环境变量
创建 `.env.local` 文件：
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 第三步：创建 Supabase 客户端配置
创建 `lib/supabase.ts` 文件，配置 Supabase 客户端。

### 第四步：创建图片上传组件
创建 `components/ImageUpload.tsx` 组件：
- 文件选择按钮
- 上传进度显示
- 成功/错误消息提示
- 简单的拖拽上传功能

### 第五步：创建图片管理 Hook
创建 `hooks/useImages.ts` 自定义 Hook：
- 获取所有图片列表
- 上传新图片
- 删除图片（可选）
- 加载状态管理

### 第六步：修改相册板块
更新 `app/page.tsx` 中的相册部分：
- 集成图片上传组件
- 从 Supabase 获取图片数据
- 动态更新 CircularGallery 组件

### 第七步：优化用户体验
- 添加上传进度条
- 图片预览功能
- 错误处理和重试机制
- 响应式设计优化

## 📁 文件结构
```
omega_website/
├── lib/
│   └── supabase.ts          # Supabase 客户端配置
├── hooks/
│   └── useImages.ts         # 图片管理 Hook
├── components/
│   ├── ImageUpload.tsx      # 图片上传组件
│   └── CircularGallery.tsx  # 现有动效组件
├── app/
│   └── page.tsx             # 主页（相册板块）
└── .env.local               # 环境变量
```

## 🎨 UI 设计
- **上传区域**: 简洁的拖拽区域 + 选择按钮
- **进度显示**: 简单的进度条
- **消息提示**: Toast 通知或内联消息
- **相册展示**: 保持现有的 CircularGallery 动效

## 🔧 配置要求
1. **Supabase 项目设置**:
   - 创建 Storage bucket 名称为 "images"
   - 设置公开访问权限
   - 配置 CORS 策略

2. **环境变量**:
   - 获取 Supabase URL 和 Anon Key
   - 配置到 `.env.local` 文件

## 📱 功能特性
- ✅ 支持常见图片格式 (JPG, PNG, GIF, WebP)
- ✅ 文件大小限制 (建议 5MB)
- ✅ 图片压缩和优化
- ✅ 实时预览
- ✅ 批量上传（可选）
- ✅ 错误处理和重试

## 🚦 开发优先级
1. **高优先级**: 基础上传功能 + 相册展示
2. **中优先级**: 进度显示 + 错误处理
3. **低优先级**: 拖拽上传 + 批量操作

## 📝 注意事项
- 保持功能简单，避免过度复杂化
- 确保图片上传的安全性
- 考虑存储成本和带宽使用
- 保持与现有设计风格一致
- 确保移动端兼容性

## 🎯 预期效果
用户可以通过简单的界面上传图片，上传成功后图片会自动出现在相册的 3D 圆形画廊中，提供流畅的视觉体验。
