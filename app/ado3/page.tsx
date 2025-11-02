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
                  href="/ADO3.xlsx"
                  download
                  className="text-sm font-medium bg-primary text-primary-foreground px-3 py-1 rounded-xl shadow-sm hover:bg-primary/90 transition-all"
                >
                  Baixar Excel
                </a>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Esta seção apresenta a estrutura completa de classes do Sistema de Gerenciamento de Festas, detalhando
                  atributos, operações e relacionamentos entre as entidades. O modelo foi desenvolvido seguindo os
                  princípios da orientação a objetos com base nos requisitos (ADO1) e casos de uso (ADO2).
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
                        <div className="whitespace-normal">id, codigo, data, estado</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">cadastrarFesta(), cancelarFesta(), consultarFesta()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">2 Cônjuges, 1 Configuração, 1 ListaConvidados, 1 ListaPresentes, 1 Pagamento</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Conjuge</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, nome, cpf, endereco, telefone, email, senha</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">autenticar(), atualizarDados()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Participa de 1 Festa, pode visualizar Configuração, Listas e Orçamento</div>
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
                        <div className="whitespace-normal">Gerencia Festa, Cônjuge, Salão, Serviço e Profissional</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>ConfiguracaoFesta</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, data_criacao</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">adicionarServico(), removerServico(), adicionarProfissional(), removerProfissional(), selecionarSalao(), gerarOrcamento()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">1 Festa, 1 Salao, N Serviços, N Profissionais, 1 Orçamento</div>
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
                        <div className="whitespace-normal">N ConfiguracoesFesta</div>
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
                        <div className="whitespace-normal">N ConfiguracoesFesta, N Profissionais</div>
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
                        <div className="whitespace-normal">N Serviços, N ConfiguracoesFesta</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Orcamento</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, itens, valor_total, data_envio, status</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">gerarOrcamento(), enviarOrcamento(), atualizarStatus()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">1 ConfiguracaoFesta</div>
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
                        <div className="whitespace-normal">1 Festa, usa OperadoraCartoes</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>ListaConvidados</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">adicionarConvidado(), removerConvidado(), gerarMalaDireta()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">1 Festa, contém N Convidados</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Convidado</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, nome, endereco, telefone, email</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">—</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Pertence a 1 Festa</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>ListaPresentes</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">adicionarPresente(), removerPresente(), enviarLista()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">1 Festa, contém N Presentes</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Presente</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">id, nome_presente, loja, valor</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">—</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Pertence a 1 Festa</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>ServicoEmail (externo)</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">—</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">enviarEmail()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Usado por Festa, Orcamento, ListaPresentes, Pagamento</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>OperadoraCartoes (externo)</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">—</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">autorizarPagamento()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Usado por Pagamento</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Impressora (externo)</TableCell>
                      <TableCell>
                        <div className="whitespace-normal">—</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">imprimir()</div>
                      </TableCell>
                      <TableCell>
                        <div className="whitespace-normal">Usado por ListaConvidados e Gerente (relatórios)</div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption>Resumo corrigido baseado nos requisitos ADO1 e casos de uso ADO2</TableCaption>
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
                        id, codigo, data, estado
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
                        <li>2 Cônjuges</li>
                        <li>1 Configuração</li>
                        <li>1 ListaConvidados</li>
                        <li>1 ListaPresentes</li>
                        <li>1 Pagamento</li>
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
                        autenticar(), atualizarDados()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Participa de 1 Festa</li>
                        <li>pode visualizar Configuração, Listas e Orçamento</li>
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
                        Gerencia Festa, Cônjuge, Salão, Serviço e Profissional
                      </p>
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
                        id, data_criacao
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">
                        adicionarServico(), removerServico(), adicionarProfissional(), removerProfissional(),
                        selecionarSalao(), gerarOrcamento()
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>1 Festa</li>
                        <li>1 Salao</li>
                        <li>N Serviços</li>
                        <li>N Profissionais</li>
                        <li>1 Orçamento</li>
                      </ul>
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
                      <p className="text-muted-foreground">N ConfiguracoesFesta</p>
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
                        <li>N ConfiguracoesFesta</li>
                        <li>N Profissionais</li>
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
                        <li>N Serviços</li>
                        <li>N ConfiguracoesFesta</li>
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
                        id, itens, valor_total, data_envio, status
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
                      <p className="text-muted-foreground">1 ConfiguracaoFesta</p>
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
                        <li>1 Festa</li>
                        <li>usa OperadoraCartoes</li>
                      </ul>
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
                        <li>1 Festa</li>
                        <li>contém N Convidados</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Convidado */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Convidado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">id, nome, endereco, telefone, email</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">—</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <p className="text-muted-foreground">Pertence a 1 Festa</p>
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
                        <li>1 Festa</li>
                        <li>contém N Presentes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Presente */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Classe: Presente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atributos:</h4>
                      <p className="text-muted-foreground font-mono text-sm">id, nome_presente, loja, valor</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operações:</h4>
                      <p className="text-muted-foreground font-mono text-sm">—</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relacionamentos:</h4>
                      <p className="text-muted-foreground">Pertence a 1 Festa</p>
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
