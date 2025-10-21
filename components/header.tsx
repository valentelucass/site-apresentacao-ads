import Link from "next/link"
import { Navigation } from "./navigation"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">SF</span>
          </div>
          <span className="font-semibold text-lg hidden sm:inline-block">Sistema de Festas</span>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
