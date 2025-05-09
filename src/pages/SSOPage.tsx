
const SSOPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-glitch animate-glitch mb-4">
          SSO for Joy
        </h1>
        <p className="text-lg opacity-80 glitch-text">
          A secure authentication system with cyberpunk aesthetics
        </p>
      </header>
      
      <div className="max-w-3xl mx-auto">
        <div className="vhs-container p-6 border border-primary">
          <p className="mb-4">This secure authentication system combines robust identity verification with a unique cyberpunk user experience.</p>
          
          <div className="space-y-4 font-mono text-sm">
            <p className="animate-pulse">SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span></p>
            <p>AUTH PROTOCOL: <span className="opacity-80">SPECTRAL.ID</span></p>
            <p>ENCRYPTION: <span className="opacity-80">QUANTUM-RESISTANT</span></p>
          </div>
          
          <div className="mt-8">
            <a href="/" className="inline-block px-4 py-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors">
              ← Back to Transmission
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SSOPage
