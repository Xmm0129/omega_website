export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  )
}
