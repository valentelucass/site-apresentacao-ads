import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ADO2Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">ADO 2 - Diagrama de Casos de Uso</h1>
            <p className="text-xl text-muted-foreground">Centro Universitário Senac - Santo Amaro</p>
          </div>

          {/* Sumário */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Sumário</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>
                  <a href="#introducao" className="hover:text-primary">
                    Introdução
                  </a>
                </li>
                <li>
                  <a href="#atores" className="hover:text-primary">
                    Atores do Sistema
                  </a>
                </li>
                <li>
                  <a href="#casos-uso" className="hover:text-primary">
                    Detalhamento dos Casos de Uso
                  </a>
                </li>
                <li>
                  <a href="#relacoes" className="hover:text-primary">
                    Relações Notáveis
                  </a>
                </li>
                <li>
                  <a href="#diagrama" className="hover:text-primary">
                    Diagrama de Casos de Uso
                  </a>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* 1. Introdução */}
          <section id="introducao" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Introdução</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Este trabalho documenta em detalhes o Diagrama de Casos de Uso para o "Sistema de Gerenciamento de
                Festas", conforme solicitado na Atividade Discente Orientada 2 pelo professor Marcelo Marcula. O
                objetivo é apresentar uma modelagem clara dos requisitos funcionais do sistema, definindo os atores
                envolvidos, suas interações e os processos fundamentais da plataforma. A modelagem serve como um pilar
                para o entendimento do escopo do projeto e para as futuras etapas de desenvolvimento.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 2. Atores do Sistema */}
          <section id="atores" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. Atores do Sistema</h2>
            <p className="text-muted-foreground mb-6">
              Os atores são entidades que interagem com o sistema. Foram identificados os seguintes:
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gerente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    É o usuário administrador da plataforma de gerenciamento de festas. Suas responsabilidades incluem a
                    gestão completa dos recursos do sistema, como o cadastro de festas, salões, serviços e
                    profissionais, além da alocação de recursos, emissão de relatórios e controle de permissões.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cônjuges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Representam os clientes finais do sistema. Eles utilizam a plataforma para personalizar sua festa,
                    selecionar serviços, gerenciar listas de convidados e presentes, além de realizar a aprovação de
                    orçamentos e efetuar pagamentos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Serviço de E-mail (Ator Externo)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema externo responsável por todas as comunicações via e-mail, como o envio do código de acesso
                    da festa, orçamentos e o compartilhamento da lista de presentes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operadora de Cartões (Ator Externo)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema externo que funciona como gateway de pagamento, processando de forma segura as transações
                    financeiras realizadas com cartão de crédito.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impressora (Ator Externo)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Representa o hardware utilizado para gerar documentos físicos, como relatórios gerenciais e
                    etiquetas de mala direta para os convidados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 3. Detalhamento dos Casos de Uso */}
          <section id="casos-uso" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. Detalhamento dos Casos de Uso</h2>
            <p className="text-muted-foreground mb-6">
              A seguir são descritas as funcionalidades centrais do sistema, o ator que as inicia e suas principais
              características.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC01: Cadastrar Festa</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Gerente
                </p>
                <p className="text-muted-foreground">
                  O Gerente inicia o registro de um novo evento, inserindo informações primárias dos cônjuges e a data
                  da celebração para criar a festa no sistema.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC02: Enviar Código da Festa</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> N/A (É uma consequência do UC01)
                </p>
                <p className="text-muted-foreground">
                  De forma automática, após o cadastro da festa, o sistema envia um código de acesso único ao e-mail dos
                  cônjuges.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC03: Cadastrar Cônjuges</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Gerente
                </p>
                <p className="text-muted-foreground">
                  O Gerente realiza o cadastro completo dos dados pessoais e de contato dos cônjuges, vinculando-os ao
                  evento correspondente.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC04: Autenticar Cônjuges</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Cônjuges
                </p>
                <p className="text-muted-foreground">
                  Os cônjuges utilizam o código da festa e uma senha para acessar a área restrita do sistema.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC05: Cadastrar Salões, Serviços e Profissionais</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Gerente
                </p>
                <p className="text-muted-foreground">
                  O Gerente alimenta o sistema com o catálogo de opções disponíveis para as festas, incluindo salões,
                  serviços (buffet, decoração, etc.) e profissionais parceiros.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC06: Alocar Profissionais</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Gerente
                </p>
                <p className="text-muted-foreground">
                  O Gerente associa profissionais específicos aos serviços que serão prestados em uma determinada festa.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC07: Configurar Festa</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Cônjuges
                </p>
                <p className="text-muted-foreground">
                  Os cônjuges selecionam o salão, os serviços e os profissionais que desejam contratar para o seu
                  evento.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC08: Gerar e Enviar Orçamento</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Cônjuges
                </p>
                <p className="text-muted-foreground">
                  Após a configuração da festa, os cônjuges solicitam que o sistema gere um orçamento detalhado, que é
                  enviado automaticamente para seu e-mail.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC09: Aceitar Orçamento e Efetuar Pagamento</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Cônjuges
                </p>
                <p className="text-muted-foreground">
                  Os cônjuges aprovam a proposta de orçamento e realizam o pagamento online por meio da plataforma.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC10: Cadastrar Lista de Convidados</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Cônjuges
                </p>
                <p className="text-muted-foreground">
                  Os cônjuges criam e gerenciam a lista de convidados. A funcionalidade permite gerar uma mala direta
                  para impressão.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC11: Cadastrar Lista de Presentes</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Cônjuges
                </p>
                <p className="text-muted-foreground">
                  Os cônjuges montam uma lista de sugestões de presentes, que pode ser compartilhada por e-mail com os
                  convidados.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC12: Emitir Relatório Gerencial</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Gerente
                </p>
                <p className="text-muted-foreground">
                  O Gerente extrai relatórios consolidados do sistema, como relatórios de vendas e desempenho, com a
                  opção de impressão.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">UC13: CRUD com Permissões</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Ator Principal:</strong> Gerente
                </p>
                <p className="text-muted-foreground">
                  Funcionalidade geral de administração que permite ao Gerente criar, ler, atualizar e excluir (CRUD) os
                  dados do sistema, de acordo com seu nível de acesso.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 4. Relações Notáveis */}
          <section id="relacoes" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Relações Notáveis</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">4.1. Relação de Inclusão (&lt;&lt;include&gt;&gt;)</h3>
                <p className="text-muted-foreground mb-3">
                  A relação <code className="bg-muted px-2 py-1 rounded">&lt;&lt;include&gt;&gt;</code> define que uma
                  funcionalidade é parte obrigatória de outra. No sistema, a principal ocorrência é:
                </p>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      <strong>Cadastrar Festa → Enviar Código da Festa:</strong> O envio do código de acesso é uma etapa
                      indispensável e automática que ocorre sempre que uma nova festa é cadastrada.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4.2. Relação de Extensão (&lt;&lt;extend&gt;&gt;)</h3>
                <p className="text-muted-foreground mb-3">
                  A relação <code className="bg-muted px-2 py-1 rounded">&lt;&lt;extend&gt;&gt;</code> modela fluxos
                  alternativos ou de exceção. Casos de uso de extensão não são obrigatórios e ocorrem sob certas
                  condições:
                </p>
                <div className="space-y-3">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">
                        <strong>Falha na autorização de pagamento (Extensão)</strong> estende Aceitar Orçamento e
                        Efetuar Pagamento: Este fluxo é acionado se a operadora de cartões recusar a transação, tratando
                        o erro.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">
                        <strong>Falha no envio de e-mail (Extensão)</strong> estende Enviar Código da Festa, Gerar e
                        Enviar Orçamento e Cadastrar Lista de Presentes: Trata as situações em que o serviço de e-mail
                        não consegue realizar o envio.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4.3. Associações com Atores Externos</h3>
                <p className="text-muted-foreground mb-3">
                  Para interagir com entidades fora do sistema, são definidas as seguintes associações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    O caso de uso <strong>Aceitar Orçamento e Efetuar Pagamento</strong> associa-se à Operadora de
                    Cartões.
                  </li>
                  <li>
                    Os casos de uso <strong>Cadastrar Lista de Convidados</strong> e{" "}
                    <strong>Emitir Relatório Gerencial</strong> associam-se à Impressora.
                  </li>
                  <li>
                    Os casos de uso <strong>Enviar Código da Festa</strong>, <strong>Gerar e Enviar Orçamento</strong> e{" "}
                    <strong>Cadastrar Lista de Presentes</strong> associam-se ao Serviço de E-mail.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 5. Diagrama de Casos de Uso */}
          <section id="diagrama" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Diagrama de Casos de Uso</h2>
            <p className="text-muted-foreground mb-6">
              O diagrama a seguir representa visualmente os atores, os casos de uso e suas interações, conforme
              detalhado neste documento.
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <div className="flex justify-center items-center">
                    <img
                      src="/diagrama-casos-de-uso.png" // coloque o caminho da sua imagem
                      alt="Diagrama de Casos de Uso"
                      className="rounded-lg shadow-md border"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    O diagrama completo está disponível no documento original em PDF.
                  </p>

                  {/* Botão de download */}
                  <div className="mt-6">
                    <a
                      href="/ADO2.pdf"
                      download
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-md hover:bg-primary/90 transition-colors"
                    >
                      📄 Baixar Casos de Uso em PDF
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>


          <Separator className="my-8" />

          {/* Finalização */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Finalização</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este trabalho foi desenvolvido com base nos conteúdos da disciplina Análise e Desenvolvimento de
                Sistemas do Centro Universitário Senac – Santo Amaro, sob orientação do professor Marcelo Marcula. O
                objetivo foi representar de forma clara e organizada o Diagrama de Casos de Uso do Sistema de
                Gerenciamento de Festas, aplicando os conceitos estudados em modelagem UML.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O diagrama foi criado a partir dos requisitos previamente definidos, utilizando o Lucidchart para a
                modelagem e a IA apenas como apoio na revisão e padronização textual para uma leitura mais fluída.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A elaboração deste material contribuiu para o aprimoramento das habilidades de análise de requisitos e
                documentação de sistemas, reforçando a importância da modelagem visual como etapa essencial no
                desenvolvimento de software.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
