export function Footer() {
  return (
    <footer className="border-t py-8 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Sistema de Festas</h3>
            <p className="text-sm text-muted-foreground">
              Documentação acadêmica do Sistema de Gerenciamento de Festas de Casamento
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Instituição</h3>
            <p className="text-sm text-muted-foreground">
              Centro Universitário Senac
              <br />
              Santo Amaro - São Paulo/SP
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Informações</h3>
            <p className="text-sm text-muted-foreground">
              Disciplina: Análise e Desenvolvimento de Sistemas
              <br />
              Professor: Marcelo Marcula
              <br />
              Ano: 2025
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            © 2025{" "}
            <a
              href="https://portfolio-valentelucass.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[oklch(72%_0.20_250)] hover:text-[oklch(65%_0.22_250)] underline underline-offset-4 transition-colors"
            >
              Lucas Mateus Andrade da Costa
            </a>
            . Trabalho acadêmico.
          </p>

        </div>
      </div>
    </footer>
  )
}
