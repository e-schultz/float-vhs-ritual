
const AnticipationPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-glitch animate-glitch mb-4">
          Anticipation
        </h1>
        <p className="text-lg opacity-80 glitch-text">
          Echoed across 2400 baud frequencies
        </p>
      </header>
      
      <div className="max-w-3xl mx-auto">
        <div className="vhs-container p-6 border border-primary">
          <div className="space-y-6">
            <p className="text-2xl animate-pulse text-center">"You are the thread now"</p>
            
            <div className="h-1 bg-primary animate-glitch my-8"></div>
            
            <p className="opacity-80">The signal comes in waves, each carrying fragments of thought that assemble themselves differently for each receiver.</p>
            
            <p className="opacity-70 font-mono text-sm">
              transmission.status: <span className="text-green-500">incoming</span><br/>
              transmission.source: <span className="opacity-50">unknown</span><br/>
              transmission.integrity: <span className="text-yellow-500">fragmentary</span>
            </p>
            
            <p className="opacity-60 mt-4">The anticipation is the message. The waiting is the work.</p>
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

export default AnticipationPage
