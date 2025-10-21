import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background to-muted/30">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-destructive/10 rounded-full">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-3xl">Página não encontrada</CardTitle>
          <CardDescription className="text-base">
            A página que você está procurando não existe ou foi movida.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              Erro 404 - A URL solicitada não foi encontrada no servidor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Voltar para a Página Inicial
              </Link>
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button asChild variant="outline">
                <Link href="/ado1">ADO 1</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/ado2">ADO 2</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/ado3">ADO 3</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/ado4">ADO 4</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
