import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ADO3Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">ADO 3 - Modelo de Dados e Classes</h1>
            <p className="text-xl text-muted-foreground">Estrutura de Dados do Sistema de Gerenciamento de Festas</p>
          </div>

                    {/* Introdução */}
          <section className="mb-12 relative">
            <Card>
              <CardHeader className="flex justify-between items-center">
                <CardTitle>Sobre o Modelo de Dados</CardTitle>
                <a
                  href="/ADO3.pdf"
                  download
                  className="text-sm font-medium bg-primary text-primary-foreground px-3 py-1 rounded-xl shadow-sm hover:bg-primary/90 transition-all"
                >
                  Baixar PDF
                </a>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Esta seção apresenta a estrutura completa de classes do Sistema de Gerenciamento de Festas, detalhando
                  atributos, operações e relacionamentos entre as entidades. O modelo foi desenvolvido seguindo os
                  princípios da orientação a objetos e serve como base para a implementação do sistema.
                </p>
              </CardContent>
            </Card>
          </section>
          
          {/* Tabela Resumo (início) */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Tabela Resumo de Classes e Relacionamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="[&_th]:text-sm">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Classe</TableHead>
                      <TableHead>Atributos</TableHead>
                      <TableHead>Operações</TableHead>
                      <TableHead>Relacionamentos</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Festa</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, codigo, data, estado (ativa/cancelada)</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">cadastrarFesta(), cancelarFesta(), consultarFesta()</div>
                      </TableCell>
                      <TableCell>
                        <ul className="whitespace-normal list-disc pl-4 space-y-1">
                          <li>Conjuge (1 para 2)</li>
                          <li>ConfiguracaoFesta (1 para N)</li>
                          <li>Orcamento (1 para N, via Configuração)</li>
                          <li>ListaConvidados (1 para 1)</li>
                          <li>Lista Presentes (1 para 0..1)</li>
                          <li>Pagamento (1 para 1)</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Conjuge</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, nome, cpf, endereco, telefone, email, senha</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">autenticar(), atualizarDados(), criarConfiguracaoFesta(), aceitarOrcamento(), efetuarPagamento()</div>
                      </TableCell>
                      <TableCell>
                        <ul className="whitespace-normal list-disc pl-4 space-y-1">
                          <li>Festa (N para 1)</li>
                          <li>ConfiguracaoFesta (1 para N)</li>
                          <li>Lista Convidados (1 para 1)</li>
                          <li>Lista Presentes (1 para 1)</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Gerente</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, nome, login, senha, permissao</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">cadastrarFesta(), cadastrarConjuge(), cadastrarSalao(), cadastrarServico(), cadastrarProfissional(), alocarProfissional(), emitirRelatorio()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Gerencia as classes: Festa, Conjuge, Salao, Servico, Profissional</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Salao</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, nome, endereco, horarios_disponiveis, valor_hora, contato</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">cadastrarSalao(), atualizarDados(), removerSalao(), consultarDisponibilidade()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">ConfiguracaoFesta (1 para N)</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Servico</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, nome, tipo, valor</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">cadastrarServico(), atualizarServico(), removerServico()</div>
                      </TableCell>
                      <TableCell>
                        <ul className="whitespace-normal list-disc pl-4 space-y-1">
                          <li>Profissional (N para M)</li>
                          <li>ConfiguracaoFesta (N para M)</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Profissional</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, nome, especialidade, telefone, dias_disponiveis, valor_hora</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">cadastrarProfissional(), atualizarProfissional(), removerProfissional()</div>
                      </TableCell>
                      <TableCell>
                        <ul className="whitespace-normal list-disc pl-4 space-y-1">
                          <li>Servico (N para M)</li>
                          <li>ConfiguracaoFesta (N para M)</li>
                          <li>Regra: apenas um serviço por festa</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>ConfiguracaoFesta</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, data_criacao, listaServicos, listaProfissionais</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">adicionarServico(), removerServico(), adicionarProfissional(), removerProfissional(), selecionarSalao(), calcularOrcamento()</div>
                      </TableCell>
                      <TableCell>
                        <ul className="whitespace-normal list-disc pl-4 space-y-1">
                          <li>Festa (N para 1)</li>
                          <li>Salao (1 para 1)</li>
                          <li>Servico (N para M)</li>
                          <li>Profissional (N para M)</li>
                          <li>Orcamento (1 para 1)</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Orcamento</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, itens, valor_total, data_envio, status (Aguardando, Aceito, Pago)</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">gerarOrcamento(), enviarOrcamento(), atualizarStatus()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">ConfiguracaoFesta (1 para 1)</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Lista Convidados</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">adicionarConvidado(), removerConvidado(), gerarMalaDireta()</div>
                      </TableCell>
                      <TableCell>
                        <ul className="whitespace-normal list-disc pl-4 space-y-1">
                          <li>Festa (1 para 1)</li>
                          <li>Contém múltiplos Convidados</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Lista Presentes</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">adicionarPresente(), removerPresente(), enviarLista()</div>
                      </TableCell>
                      <TableCell>
                        <ul className="whitespace-normal list-disc pl-4 space-y-1">
                          <li>Festa (1 para 1)</li>
                          <li>Contém múltiplos Presentes</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Pagamento</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, valor, data, status</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">efetuarPagamento(), confirmarPagamento(), enviarComprovante()</div>
                      </TableCell>
                      <TableCell>
                        <ul className="whitespace-normal list-disc pl-4 space-y-1">
                          <li>Festa (1 para 1)</li>
                          <li>OperadoraCartoes (Interface Externa)</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>ServicoEmail (Externo)</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">N/A</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">enviarEmail()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Utilizado por: Festa, Orcamento, Lista Presentes, Pagamento</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>OperadoraCartoes (Externo)</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">N/A</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">autorizarPagamento()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Utilizado por: Pagamento</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Impressora (Externo)</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">N/A</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">imprimir()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Utilizado por: Lista Convidados, Gerente (relatórios)</div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption>Resumo inicial baseado no conteúdo da ADO3</TableCaption>
                </Table>
              </CardContent>
            </Card>
          </section>


          <Separator className="my-8" />

          {/* Tabela de Classes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Estrutura de Classes do Sistema</h2>

            <div className="space-y-8">
              {/* Festa */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Festa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        id, codigo, data, estado (ativa/cancelada)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        cadastrarFesta(), cancelarFesta(), consultarFesta()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Conjuge (1 para 2)</li>
                        <li>ConfiguracaoFesta (1 para N)</li>
                        <li>Orcamento (1 para N, via Configuração)</li>
                        <li>ListaConvidados (1 para 1)</li>
                        <li>ListaPresentes (1 para 0..1)</li>
                        <li>Pagamento (1 para 1)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conjuge */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Cônjuge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        id, nome, cpf, endereco, telefone, email, senha
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        autenticar(), atualizarDados(), criarConfiguracaoFesta(), aceitarOrcamento(), efetuarPagamento()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Festa (N para 1)</li>
                        <li>ConfiguracaoFesta (1 para N)</li>
                        <li>ListaConvidados (1 para 1)</li>
                        <li>ListaPresentes (1 para 1)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gerente */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Gerente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">id, nome, login, senha, permissao</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        cadastrarFesta(), cadastrarConjuge(), cadastrarSalao(), cadastrarServico(),
                        cadastrarProfissional(), alocarProfissional(), emitirRelatorio()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <p className="text-muted-foreground">
                        Gerencia as classes: Festa, Conjuge, Salao, Servico, Profissional
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salao */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Salão</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        id, nome, endereco, horarios_disponiveis, valor_hora, contato
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        cadastrarSalao(), atualizarDados(), removerSalao(), consultarDisponibilidade()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <p className="text-muted-foreground">ConfiguracaoFesta (1 para N)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Servico */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Serviço</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">id, nome, tipo, valor</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        cadastrarServico(), atualizarServico(), removerServico()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Profissional (N para M)</li>
                        <li>ConfiguracaoFesta (N para M)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Profissional */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Profissional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        id, nome, especialidade, telefone, dias_disponiveis, valor_hora
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        cadastrarProfissional(), atualizarProfissional(), removerProfissional()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Servico (N para M)</li>
                        <li>ConfiguracaoFesta (N para M)</li>
                        <li>Regra: apenas um serviço por festa</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ConfiguracaoFesta */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: ConfiguraçãoFesta</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        id, data_criacao, listaServicos, listaProfissionais
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        adicionarServico(), removerServico(), adicionarProfissional(), removerProfissional(),
                        selecionarSalao(), calcularOrcamento()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Festa (N para 1)</li>
                        <li>Salao (1 para 1)</li>
                        <li>Servico (N para M)</li>
                        <li>Profissional (N para M)</li>
                        <li>Orcamento (1 para 1)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Orcamento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Orçamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        id, itens, valor_total, data_envio, status (Aguardando, Aceito, Pago)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        gerarOrcamento(), enviarOrcamento(), atualizarStatus()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <p className="text-muted-foreground">ConfiguracaoFesta (1 para 1)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ListaConvidados */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: ListaConvidados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">id</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        adicionarConvidado(), removerConvidado(), gerarMalaDireta()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Festa (1 para 1)</li>
                        <li>Contém múltiplos Convidados (não modelado como classe separada)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ListaPresentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: ListaPresentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">id</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        adicionarPresente(), removerPresente(), enviarLista()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Festa (1 para 1)</li>
                        <li>Contém múltiplos Presentes (não modelado como classe separada)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pagamento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Pagamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">id, valor, data, status</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        efetuarPagamento(), confirmarPagamento(), enviarComprovante()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Festa (1 para 1)</li>
                        <li>OperadoraCartoes (Interface Externa)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Classes Externas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Classes Externas (Interfaces)</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>ServicoEmail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Operações:</p>
                    <p className="text-muted-foreground font-mono text-sm">enviarEmail()</p>
                    <p className="text-sm font-semibold mt-3">Utilizado por:</p>
                    <p className="text-muted-foreground text-sm">Festa, Orcamento, ListaPresentes, Pagamento</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>OperadoraCartoes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Operações:</p>
                    <p className="text-muted-foreground font-mono text-sm">autorizarPagamento()</p>
                    <p className="text-sm font-semibold mt-3">Utilizado por:</p>
                    <p className="text-muted-foreground text-sm">Pagamento</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impressora</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Operações:</p>
                    <p className="text-muted-foreground font-mono text-sm">imprimir()</p>
                    <p className="text-sm font-semibold mt-3">Utilizado por:</p>
                    <p className="text-muted-foreground text-sm">ListaConvidados, Gerente (relatórios)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
