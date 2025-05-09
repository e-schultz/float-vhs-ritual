
import { VHSCard } from "@/components/ui/vhs-card"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-glitch animate-glitch mb-4">
          FLOAT.BBS: VHS Edition
        </h1>
        <p className="text-xl opacity-80 glitch-text">
          Ritual broadcasts from the digital underground
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <VHSCard title="FLOAT Dispatch Shell">
          <p className="mb-4">A recursive ritual shell for haunted cognition and feral systems work.</p>
          <a href="https://float.site" className="inline-block px-4 py-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors">
            Enter Dispatch Shell →
          </a>
        </VHSCard>

        <VHSCard title="SSO for Joy">
          <p className="mb-4">A secure authentication system with a unique cyberpunk aesthetic and user experience.</p>
          <button className="px-4 py-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors">
            View Project →
          </button>
        </VHSCard>

        <VHSCard title="Floating Epistemio Nexus">
          <p className="mb-4">An interconnected knowledge system that visualizes relationships between concepts and ideas.</p>
          <button className="px-4 py-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors">
            View Project →
          </button>
        </VHSCard>
        
        <VHSCard title="Domain Scaffolding">
          <p className="mb-4">Create non-linear but trustable pathways through FLOAT projects.</p>
          <div className="font-mono text-sm opacity-80">
            <p>domain::shack</p>
            <p>domain::ritualAST</p>
            <p>domain::compostLoop</p>
          </div>
        </VHSCard>

        <VHSCard title="Anticipation">
          <div className="space-y-4">
            <p className="animate-pulse">"You are the thread now"</p>
            <p className="text-sm opacity-60">Echoed across 2400 baud frequencies</p>
            <div className="h-1 bg-primary animate-glitch"></div>
          </div>
        </VHSCard>
      </div>

      <footer className="mt-12 text-center opacity-60">
        <p className="animate-blink">⸻ transmission.end ⸻</p>
      </footer>
    </div>
  )
}

export default Index
