
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface VHSCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children: React.ReactNode
}

export function VHSCard({ title, children, className, ...props }: VHSCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden border border-primary bg-card",
        className
      )} 
      {...props}
    >
      {title && (
        <CardHeader className="border-b border-primary">
          <h3 className="text-lg font-glitch animate-glitch">{title}</h3>
        </CardHeader>
      )}
      <CardContent className="p-6">
        <div className="vhs-container">
          {children}
        </div>
      </CardContent>
    </Card>
  )
}
