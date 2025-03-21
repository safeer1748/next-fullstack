import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Database, Mail, Code, Palette, Lock } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex justify-center items-center max-w-[100rem] mx-auto bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1 text-sm rounded-full">
              Powerful & Modern
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Supercharge Your Productivity
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-6 mt-2">
              A beautifully designed todo app built with modern technologies to help you stay organized and focused.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 items-center w-full max-w-3xl mx-auto mb-6">
            <TechBadge name="Next.js" icon={<Code className="h-4 w-4 mr-2" />} />
            <TechBadge name="Tailwind CSS" icon={<Palette className="h-4 w-4 mr-2" />} />
            <TechBadge name="shadcn/ui" icon={<Palette className="h-4 w-4 mr-2" />} />
            <TechBadge name="Clerk" icon={<Lock className="h-4 w-4 mr-2" />} />
            <TechBadge name="Resend" icon={<Mail className="h-4 w-4 mr-2" />} />
            <TechBadge name="Drizzle" icon={<Database className="h-4 w-4 mr-2" />} />
            <TechBadge name="Neon" icon={<Database className="h-4 w-4 mr-2" />} />
          </div>

          <Button asChild size="lg">
            <Link href="/sign-up">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function TechBadge({ name, icon }: { name: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center bg-muted px-4 py-2 rounded-full text-sm font-medium">
      {icon}
      {name}
    </div>
  )
}

