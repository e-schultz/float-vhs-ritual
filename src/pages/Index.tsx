
import { VHSCard } from "@/components/ui/vhs-card"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Index = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };

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
        <div 
          onClick={() => window.open("https://float.site", "_blank")} 
          className="cursor-pointer transition-transform hover:scale-105"
        >
          <VHSCard title="FLOAT Dispatch Shell">
            <p className="mb-4">A recursive ritual shell for haunted cognition and feral systems work.</p>
            <Button>
              Enter Dispatch Shell →
            </Button>
          </VHSCard>
        </div>

        <div 
          onClick={() => handleNavigate('/sso')} 
          className="cursor-pointer transition-transform hover:scale-105"
        >
          <VHSCard title="SSO for Joy">
            <p className="mb-4">A secure authentication system with a unique cyberpunk aesthetic and user experience.</p>
            <Button>
              View Project →
            </Button>
          </VHSCard>
        </div>

        <div 
          onClick={() => handleNavigate('/nexus')} 
          className="cursor-pointer transition-transform hover:scale-105"
        >
          <VHSCard title="Floating Epistemio Nexus">
            <p className="mb-4">An interconnected knowledge system that visualizes relationships between concepts and ideas.</p>
            <Button>
              View Project →
            </Button>
          </VHSCard>
        </div>
        
        <div 
          onClick={() => handleNavigate('/scaffolding')} 
          className="cursor-pointer transition-transform hover:scale-105"
        >
          <VHSCard title="Domain Scaffolding">
            <p className="mb-4">Create non-linear but trustable pathways through FLOAT projects.</p>
            <div className="font-mono text-sm opacity-80">
              <p>domain::shack</p>
              <p>domain::ritualAST</p>
              <p>domain::compostLoop</p>
            </div>
          </VHSCard>
        </div>

        <div 
          onClick={() => handleNavigate('/anticipation')} 
          className="cursor-pointer transition-transform hover:scale-105"
        >
          <VHSCard title="Anticipation">
            <div className="space-y-4">
              <p className="animate-pulse">"You are the thread now"</p>
              <p className="text-sm opacity-60">Echoed across 2400 baud frequencies</p>
              <div className="h-1 bg-primary animate-glitch"></div>
            </div>
          </VHSCard>
        </div>
      </div>

      <footer className="mt-12 text-center opacity-60">
        <p className="animate-blink">⸻ transmission.end ⸻</p>
      </footer>
    </div>
  )
}

export default Index
