export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Markdown Note</h1>
        <p className="text-lg text-gray-600 mb-8">
          一个简单而优雅的 Markdown 笔记应用
        </p>
        <div className="flex gap-4 justify-center">
          <div className="p-4 bg-blue-100 rounded-lg">
            <h2 className="font-semibold text-blue-700">实时预览</h2>
            <p className="text-sm text-blue-600">编辑时即时预览</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <h2 className="font-semibold text-green-700">简洁设计</h2>
            <p className="text-sm text-green-600">专注于内容创作</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <h2 className="font-semibold text-purple-700">现代技术</h2>
            <p className="text-sm text-purple-600">Next.js + TypeScript</p>
          </div>
        </div>
      </div>
    </main>
  );
}
