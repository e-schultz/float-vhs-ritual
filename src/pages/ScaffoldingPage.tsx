
const ScaffoldingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-glitch animate-glitch mb-4">
          Domain Scaffolding
        </h1>
        <p className="text-lg opacity-80 glitch-text">
          Trustable pathways through FLOAT projects
        </p>
      </header>
      
      <div className="max-w-3xl mx-auto">
        <div className="vhs-container p-6 border border-primary">
          <p className="mb-4">Create non-linear but trustable pathways through FLOAT projects with domain-specific scaffolding systems.</p>
          
          <div className="font-mono text-sm space-y-3 my-6">
            <div className="p-2 border-l-4 border-primary pl-3">
              <p className="font-bold">domain::shack</p>
              <p className="opacity-70">Temporary structures for idea exploration</p>
            </div>
            <div className="p-2 border-l-4 border-primary pl-3">
              <p className="font-bold">domain::ritualAST</p>
              <p className="opacity-70">Abstract syntax trees for ritual processes</p>
            </div>
            <div className="p-2 border-l-4 border-primary pl-3">
              <p className="font-bold">domain::compostLoop</p>
              <p className="opacity-70">Cyclic information decomposition and reuse</p>
            </div>
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

export default ScaffoldingPage
