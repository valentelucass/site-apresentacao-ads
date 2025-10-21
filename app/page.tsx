import Link from "next/link"
import { FileText, Users, Database, Boxes } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sistema de Gerenciamento de Festas</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Documentação completa do projeto desenvolvido para a disciplina de Análise e Desenvolvimento de Sistemas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/ado1">Explorar Documentação</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#sobre">Sobre o Projeto</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cards de Navegação */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Documentação do Sistema</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>ADO 1 - Casos de Uso</CardTitle>
                  </div>
                  <CardDescription>
                    Diagrama de Casos de Uso detalhando atores, funcionalidades e interações do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ado1">Ver Casos de Uso</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>ADO 2 - Requisitos</CardTitle>
                  </div>
                  <CardDescription>
                    Requisitos funcionais e não funcionais, modelo de dados e casos de uso detalhados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ado2">Ver Requisitos</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>ADO 3 - Modelo de Dados</CardTitle>
                  </div>
                  <CardDescription>
                    Diagrama Entidade-Relacionamento e estrutura completa do banco de dados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ado3">Ver Modelo de Dados</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Boxes className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>ADO 4 - Diagrama de Classes</CardTitle>
                  </div>
                  <CardDescription>
                    Estrutura de classes, atributos, métodos e relacionamentos do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ado4">Ver Diagrama de Classes</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sobre o Projeto */}
        <section id="sobre" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Sobre o Projeto</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Este projeto documenta o desenvolvimento de um{" "}
                <strong>Sistema de Gerenciamento de Festas de Casamento</strong>, criado como parte das atividades da
                disciplina de Análise e Desenvolvimento de Sistemas do Centro Universitário Senac - Santo Amaro.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                O sistema foi projetado para facilitar a organização de casamentos, oferecendo ferramentas para
                gerenciar convidados, fornecedores, orçamentos e listas de presentes, tudo em uma plataforma integrada.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-2">Informações Acadêmicas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong>Curso:</strong> Análise e Desenvolvimento de Sistemas
                    </li>
                    <li>
                      <strong>Aluno:</strong> Lucas Mateus Andrade da Costa
                    </li>
                    <li>
                      <strong>Professor:</strong> Marcelo Marcula
                    </li>
                    <li>
                      <strong>Ano:</strong> 2025
                    </li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-2">Tecnologias Utilizadas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>UML - Unified Modeling Language</li>
                    <li>Lucidchart - Diagramação</li>
                    <li>MySQL Workbench - Modelagem de Dados</li>
                    <li>Next.js - Apresentação Web</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
