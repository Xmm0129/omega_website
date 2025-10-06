import GlassIcons from '@/components/GlassIcons';

export default function TestGlass() {
  const iconItems = [
    {
      label: '关于我',
      icon: '🐱',
      color: 'blue',
    },
    {
      label: '我的冒险',
      icon: '🗺️',
      color: 'purple',
    },
    {
      label: '我的玩具',
      icon: '🧶',
      color: 'green',
    },
    {
      label: '我的宣言',
      icon: '📜',
      color: 'orange',
    },
    {
      label: '找欧米伽',
      icon: '🐾',
      color: 'indigo',
    },
    {
      label: '首页',
      icon: '🏠',
      color: 'red',
    },
  ];

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl text-primary font-handwriting text-center mb-12">
          玻璃态图标效果演示
        </h1>
        <GlassIcons items={iconItems} />
      </div>
    </div>
  );
}
