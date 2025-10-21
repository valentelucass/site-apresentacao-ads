import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ADO4Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">ADO 4 - Diagrama de Classes</h1>
            <p className="text-xl text-muted-foreground">Sistema de Gestão de Festas de Casamento</p>
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
                  <a href="#detalhamento" className="hover:text-primary">
                    Detalhamento das Classes e Relacionamentos
                  </a>
                </li>
                <li>
                  <a href="#sistemas-externos" className="hover:text-primary">
                    Sistemas Externos
                  </a>
                </li>
                <li>
                  <a href="#diagrama" className="hover:text-primary">
                    Estrutura Visual do Diagrama de Classes
                  </a>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* 1. Introdução */}
          <section id="introducao" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Introdução</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este documento apresenta o Diagrama de Classes do Sistema de Gestão de Festas de Casamento, desenvolvido
                como parte da Atividade Discente Orientada 4 (ADO4). O diagrama tem como objetivo representar a
                estrutura estática do sistema, descrevendo as principais classes, seus atributos, métodos e os
                relacionamentos entre elas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A modelagem foi elaborada com base na tabela de classes definida na ADO3, servindo como base estrutural
                para o desenvolvimento do software e para a compreensão da lógica de funcionamento do sistema.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 2. Detalhamento das Classes */}
          <section id="detalhamento" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. Detalhamento das Classes e Relacionamentos</h2>
            <p className="text-muted-foreground mb-6">
              A seguir, são descritas todas as classes que compõem o sistema, com suas respectivas responsabilidades e
              conexões.
            </p>

            <div className="space-y-6">
              {/* Gerente */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Gerente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">id, nome, login, senha, permissao</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      cadastrarFesta(), cadastrarConjuge(), cadastrarSalao(), cadastrarServico(),
                      cadastrarProfissional(), alocarProfissional(), emitirRelatorio()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Mantém associações com as classes que administra, sendo o responsável por gerenciar os principais
                      cadastros do sistema.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Festa */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Festa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">id, codigo, data, estado</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      cadastrarFesta(), cancelarFesta(), consultarFesta(), encerrarConfiguracao()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Está associada a dois Cônjuges</li>
                      <li>Pode possuir várias Configurações de Festa</li>
                      <li>Está vinculada a um único Pagamento</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cônjuge */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Cônjuge</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">id, nome, cpf, endereco, telefone, email, senha</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      autenticar(), atualizarDados(), criarConfiguracaoFesta(), aceitarOrcamento()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Está associado a uma Festa</li>
                      <li>Pode criar múltiplas Listas de Convidados e Listas de Presentes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Salão */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Salão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">
                      id, nome, endereco, horarios_disponiveis, valor_hora, contato
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      cadastrarSalao(), atualizarDados(), removerSalao(), consultarDisponibilidade()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      É um componente da Configuração da Festa, indicando o local do evento.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Serviço */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Serviço</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">id, nome, tipo, valor</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      cadastrarServico(), atualizarServico(), removerServico()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Possui uma relação N:N com Configuração de Festa, permitindo que um serviço possa estar presente
                      em várias festas, e cada festa conte com diversos serviços.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Profissional */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Profissional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">
                      id, nome, especialidade, telefone, dias_disponiveis, valor_hora
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      cadastrarProfissional(), atualizarProfissional(), alocarServico(), removerProfissional()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Possui uma relação N:N com Configuração de Festa, o que permite que um profissional atue em
                      diferentes eventos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Configuração de Festa */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Configuração de Festa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">
                      id, id_festa, id_salao, listaServicos, listaProfissionais, data_criacao
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      adicionarServico(), removerServico(), adicionarProfissional(), calcularOrcamento()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Está vinculada a uma Festa</li>
                      <li>Relaciona-se com vários Serviços e Profissionais</li>
                      <li>Gera um Orçamento associado</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Orçamento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Orçamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">
                      id, id_festa, id_configuracao, itens, valor_total, data_envio, status
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      gerarOrcamento(), enviarOrcamento(), atualizarStatus()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Deriva de uma Configuração de Festa e depende do Serviço de E-mail para ser enviado aos cônjuges.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Pagamento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Pagamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">id, id_festa, valor, data, status, operadora_id</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      efetuarPagamento(), confirmarPagamento(), enviarComprovante()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Associado a uma Festa, utilizando o sistema externo Operadora de Cartões para processar as
                      transações.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de Convidados */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Lista de Convidados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">id, id_festa, nome, endereco, telefone, email</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      adicionarConvidado(), removerConvidado(), gerarMalaDireta()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Criada pelo Cônjuge e utiliza a Impressora para gerar as malas diretas dos convites.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de Presentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Lista de Presentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Atributos:</p>
                    <p className="text-muted-foreground text-sm">id, id_festa, nome_presente, loja, valor</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">
                      adicionarPresente(), removerPresente(), enviarLista()
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Criada pelo Cônjuge e compartilhada via Serviço de E-mail.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 3. Sistemas Externos */}
          <section id="sistemas-externos" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. Sistemas Externos (Representados como Classes)</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Operadora de Cartões</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">autorizarPagamento(), confirmarTransacao()</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Interage diretamente com a classe Pagamento para validação e confirmação das transações.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Serviço de E-mail</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">enviarEmail()</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Utilizado pelas classes Orçamento e Lista de Presentes para envio de informações aos usuários.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Impressora</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Operações:</p>
                    <p className="text-muted-foreground text-sm">imprimirMalaDireta(), imprimirRelatorio()</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Relacionamentos:</p>
                    <p className="text-muted-foreground text-sm">
                      Utilizada pelas classes Lista de Convidados e Gerente para a geração de relatórios e materiais
                      impressos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 4. Diagrama Visual */}
          <section id="diagrama" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Estrutura Visual do Diagrama de Classes</h2>
            <p className="text-muted-foreground mb-6">
              O diagrama a seguir representa a estrutura geral do sistema, destacando as classes, seus atributos,
              métodos e os diferentes tipos de relacionamentos (associação, composição e dependência) entre elas.
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <div className="flex justify-center items-center">
                    <img
                      src="/diagrama-de-classes.png"
                      alt="Diagrama de Classes"
                      className="rounded-lg shadow-md border"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    O diagrama completo está disponível no documento original em PDF.
                  </p>

                  {/* Botão de download do PDF */}
                  <div className="mt-6">
                    <a
                      href="/ADO4.pdf"
                      download
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-md hover:bg-primary/90 transition-colors"
                    >
                      📄 Baixar Diagrama de Classes em PDF
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
