
const NexusPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-glitch animate-glitch mb-4">
          Floating Epistemio Nexus
        </h1>
        <p className="text-lg opacity-80 glitch-text">
          Interconnected knowledge visualization system
        </p>
      </header>
      
      <div className="max-w-3xl mx-auto">
        <div className="vhs-container p-6 border border-primary">
          <p className="mb-4">An interconnected knowledge system that visualizes relationships between concepts and ideas in a dynamic, spatial interface.</p>
          
          <div className="grid grid-cols-3 gap-4 my-6">
            <div className="border border-primary p-3 text-center animate-pulse">concept::ritual</div>
            <div className="border border-primary p-3 text-center">concept::ecology</div>
            <div className="border border-primary p-3 text-center animate-pulse">concept::systems</div>
          </div>
          
          <p className="text-sm opacity-80 mb-6">The nexus allows for non-hierarchical exploration of knowledge structures and relationship mapping.</p>
          
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

export default NexusPage
