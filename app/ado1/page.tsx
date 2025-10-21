import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function ADO1Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">ADO 1 - Requisitos do Sistema</h1>
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
                  <a href="#escopo" className="hover:text-primary">
                    Escopo do Trabalho
                  </a>
                </li>
                <li>
                  <a href="#atores" className="hover:text-primary">
                    Atores
                  </a>
                </li>
                <li>
                  <a href="#requisitos-funcionais" className="hover:text-primary">
                    Requisitos Funcionais (RF)
                  </a>
                </li>
                <li>
                  <a href="#requisitos-nao-funcionais" className="hover:text-primary">
                    Requisitos Não Funcionais (RNF)
                  </a>
                </li>
                <li>
                  <a href="#modelo-dados" className="hover:text-primary">
                    Modelo de Dados
                  </a>
                </li>
                <li>
                  <a href="#der" className="hover:text-primary">
                    Diagrama Entidade-Relacionamento (DER)
                  </a>
                </li>
                <li>
                  <a href="#casos-uso-detalhados" className="hover:text-primary">
                    Casos de Uso Detalhados
                  </a>
                </li>
                <li>
                  <a href="#checklist" className="hover:text-primary">
                    Checklist Final
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
                Para organizar um casamento é bem complicado. São diversas listas gigantescas de convidados,
                fornecedores para contratar, orçamentos que não fecham, presentes para coordenar. É muita coisa
                acontecendo ao mesmo tempo que acaba ficando muito difícil.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este trabalho vai documentar e descreve um sistema que junta tudo isso num lugar só. A proposta é dar
                aos noivos as ferramentas certas para cadastrar o evento, gerenciar convidados e presentes, comparar
                orçamentos e manter todo mundo informado através de e-mails automáticos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O objetivo aqui é claro: menos estresse com burocracia e mais tempo para aproveitar os preparativos.
                Este material vai guiar o time de desenvolvimento, design e testes para que a gente construa algo que
                realmente funcione e ajude as pessoas nessa fase tão importante.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 2. Escopo do Trabalho */}
          <section id="escopo" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. Escopo do Trabalho</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Inclui</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Definição dos requisitos funcionais e não funcionais</li>
                    <li>✓ Identificação e descrição dos atores envolvidos</li>
                    <li>✓ Apresentação de modelo de dados simplificado (ERD)</li>
                    <li>✓ Detalhamento de três casos de uso principais</li>
                    <li>✓ Recomendações de implementação</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Fora do Escopo</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✗ Controle de entrega física de presentes</li>
                    <li>✗ Integrações com terminais POS reais</li>
                    <li>✗ Funcionalidades de logística e transporte</li>
                    <li>✗ Gestão pós-evento</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 3. Atores */}
          <section id="atores" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. Atores</h2>

            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Gerente
                    <Badge>Interno</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Usuário administrativo responsável por cadastrar e gerenciar festas, salões, serviços e
                    profissionais. Também tem acesso a relatórios e controle de orçamentos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Cônjuges
                    <Badge>Interno</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dois usuários vinculados a uma mesma festa, identificados por um código único. Cada um possui senha
                    individual e pode acessar o sistema para configurar a festa, escolher salões, serviços e gerenciar
                    convidados e presentes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Profissional
                    <Badge>Interno</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Prestador de serviço (como garçom, músico, decorador) cadastrado no sistema, com informações sobre
                    especialidade, disponibilidade e valor por hora.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Serviço de E-mail
                    <Badge variant="secondary">Externo</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema terceirizado (SMTP) utilizado para o envio automático de códigos de acesso, orçamentos e
                    listas de presentes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Operadora de Cartões
                    <Badge variant="secondary">Externo</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Serviço externo responsável pelo processamento e autorização de pagamentos com cartão.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Impressora
                    <Badge variant="secondary">Externo</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dispositivo físico utilizado para a geração e impressão de malas diretas e relatórios
                    administrativos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 4. Requisitos Funcionais */}
          <section id="requisitos-funcionais" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Requisitos Funcionais (RF)</h2>
            <p className="text-muted-foreground mb-6">
              Os requisitos funcionais descrevem as funcionalidades que o sistema deve oferecer para atender às
              necessidades dos usuários e dos processos de negócio.
            </p>

            <div className="space-y-3">
              {[
                {
                  id: "RF001",
                  title: "Cadastrar festa de casamento",
                  actor: "Gerente",
                  desc: "O gerente deve cadastrar uma nova festa, informando os nomes dos cônjuges, a data do evento e o número do cartão. O sistema deve gerar um código único para identificação da festa.",
                },
                {
                  id: "RF002",
                  title: "Enviar código do casamento por e-mail",
                  actor: "Sistema / Serviço de E-mail",
                  desc: "Após o cadastro da festa, o sistema deve enviar automaticamente o código gerado por e-mail para ambos os cônjuges.",
                },
                {
                  id: "RF003",
                  title: "Cadastrar dados dos cônjuges",
                  actor: "Gerente",
                  desc: "O sistema deve permitir o cadastro dos dados pessoais dos cônjuges, incluindo nome, CPF, endereço, telefone e e-mail.",
                },
                {
                  id: "RF004",
                  title: "Autenticação por código e senha individual",
                  actor: "Cônjuges",
                  desc: "Os cônjuges devem realizar login utilizando o código da festa e suas respectivas senhas individuais.",
                },
                {
                  id: "RF005",
                  title: "Cadastrar salões",
                  actor: "Gerente",
                  desc: "O gerente deve cadastrar salões disponíveis, informando nome, endereço, horários disponíveis, valor por hora e dados de contato.",
                },
                {
                  id: "RF006",
                  title: "Cadastrar serviços",
                  actor: "Gerente",
                  desc: "O sistema deve permitir o cadastro de serviços, especificando nome, tipo e valor.",
                },
                {
                  id: "RF007",
                  title: "Cadastrar profissionais",
                  actor: "Gerente",
                  desc: "O gerente deve cadastrar profissionais com suas especialidades, telefones, disponibilidade e valores por hora.",
                },
                {
                  id: "RF008",
                  title: "Configurar festa",
                  actor: "Cônjuges",
                  desc: "Os cônjuges devem poder configurar sua festa, escolhendo o salão e os serviços desejados.",
                },
                {
                  id: "RF009",
                  title: "Gerar e enviar orçamento",
                  actor: "Cônjuges, Sistema",
                  desc: "Ao encerrar a configuração, o sistema deve gerar um orçamento detalhado com todos os itens e valores, enviando-o por e-mail.",
                },
                {
                  id: "RF010",
                  title: "Aceitar orçamento e efetuar pagamento",
                  actor: "Cônjuges, Operadora",
                  desc: "Os cônjuges devem poder aceitar o orçamento e realizar o pagamento através de integração com operadora de cartões.",
                },
                {
                  id: "RF011",
                  title: "Cadastrar lista de convidados",
                  actor: "Cônjuges",
                  desc: "O sistema deve permitir o cadastro da lista de convidados e a geração de uma mala direta pronta para impressão.",
                },
                {
                  id: "RF012",
                  title: "Cadastrar lista de presentes",
                  actor: "Cônjuges",
                  desc: "Os cônjuges devem poder criar uma lista de presentes, que será enviada por e-mail para os convidados.",
                },
                {
                  id: "RF013",
                  title: "Emitir relatório gerencial",
                  actor: "Gerente",
                  desc: "O sistema deve gerar relatórios de vendas por período, com opção de exibição na tela e impressão.",
                },
                {
                  id: "RF014",
                  title: "CRUD completo com permissões",
                  actor: "Gerente, Sistema",
                  desc: "O sistema deve permitir operações de criação, leitura, atualização e exclusão (CRUD) para todos os cadastros.",
                },
              ].map((req) => (
                <Card key={req.id}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3">
                      <Badge variant="outline">{req.id}</Badge>
                      {req.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Ator(es):</strong> {req.actor}
                    </p>
                    <p className="text-muted-foreground">{req.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          {/* 5. Requisitos Não Funcionais */}
          <section id="requisitos-nao-funcionais" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Requisitos Não Funcionais (RNF)</h2>
            <p className="text-muted-foreground mb-6">
              Os requisitos não funcionais definem as qualidades e restrições que o sistema deve atender para garantir
              segurança, desempenho, disponibilidade e conformidade com normas legais.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O sistema deve utilizar criptografia para armazenamento de senhas e aplicar técnicas de tokenização
                    para dados de cartão, garantindo que nenhum número seja armazenado em formato legível.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As operações principais do tipo CRUD devem ter tempo de resposta máximo de até 2 segundos,
                    assegurando uma boa experiência de uso e eficiência do sistema.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Disponibilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O sistema deve manter um índice mínimo de 99% de disponibilidade (uptime) durante as etapas críticas
                    de configuração e pagamento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usabilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A interface deve ser web responsiva, adaptando-se a diferentes dispositivos. Os e-mails gerados
                    devem possuir conteúdo legível e organizado.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Devem ser realizados backups automáticos diários, com retenção mínima de 30 dias, para garantir a
                    integridade e recuperação dos dados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conformidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O sistema deve seguir as diretrizes da Lei Geral de Proteção de Dados (LGPD) no tratamento de
                    informações pessoais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 6. Modelo de Dados */}
          <section id="modelo-dados" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Modelo de Dados</h2>
            <p className="text-muted-foreground mb-6">
              O modelo de dados define as principais entidades do sistema e seus atributos essenciais, representando a
              estrutura lógica necessária para armazenar e gerenciar as informações.
            </p>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2 font-mono text-sm">
                  <p>
                    • <strong>Festa</strong> (id, codigo, data, id_conjuge1, id_conjuge2, id_cartao, estado)
                  </p>
                  <p>
                    • <strong>Conjuge</strong> (id, nome, cpf, endereco, telefone, email, senha)
                  </p>
                  <p>
                    • <strong>Gerente</strong> (id, nome, login, senha, permissao)
                  </p>
                  <p>
                    • <strong>Salao</strong> (id, nome, endereco, horarios_disponiveis, valor_hora, contato)
                  </p>
                  <p>
                    • <strong>Servico</strong> (id, nome, tipo, valor)
                  </p>
                  <p>
                    • <strong>Profissional</strong> (id, nome, especialidade, telefone, dias_disponiveis, valor_hora)
                  </p>
                  <p>
                    • <strong>Orcamento</strong> (id, id_festa, itens, valor_total, data_envio, status)
                  </p>
                  <p>
                    • <strong>Convidado</strong> (id, id_festa, nome, endereco, telefone, email)
                  </p>
                  <p>
                    • <strong>Presente</strong> (id, id_festa, nome_presente, loja, valor)
                  </p>
                  <p>
                    • <strong>Pagamento</strong> (id, id_festa, valor, data, status, operadora_id)
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          {/* 7. DER */}
          <section id="der" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Diagrama Entidade-Relacionamento (DER)</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <div className="flex justify-center items-center">
                    <img
                      src="/der.png" // substitua pelo caminho da sua imagem
                      alt="Diagrama Entidade-Relacionamento (DER)"
                      className="rounded-lg shadow-md border"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    O DER completo gerado pelo MySQL Workbench está disponível no documento original.
                  </p>

                  {/* Botão de download do PDF */}
                  <div className="mt-6">
                    <a
                      href="/ADO1.pdf"
                      download
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-md hover:bg-primary/90 transition-colors"
                    >
                      📄 Baixar DER em PDF
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>



          <Separator className="my-8" />

          {/* 8. Casos de Uso Detalhados */}
          <section id="casos-uso-detalhados" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. Casos de Uso Detalhados</h2>

            <div className="space-y-8">
              {/* Caso de Uso 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Caso de Uso 1: Cadastrar Festa (RF001)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Ator(es):</p>
                    <p className="text-muted-foreground">Gerente</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Pré-condição:</p>
                    <p className="text-muted-foreground">O gerente deve estar autenticado no sistema.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fluxo principal:</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>O gerente abre o formulário de cadastro de festa.</li>
                      <li>Insere os nomes dos cônjuges, a data da festa e os dados do cartão.</li>
                      <li>O sistema valida as informações e gera um código único para a festa.</li>
                      <li>O sistema envia o código por e-mail para ambos os cônjuges.</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fluxos alternativos:</p>
                    <p className="text-muted-foreground">
                      • Falha no envio do e-mail: o sistema registra o erro e permite o reenvio posterior.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Critério de aceitação:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>A festa deve ser cadastrada com código único.</li>
                      <li>O e-mail com o código deve ser enviado com sucesso para ambos os cônjuges.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Caso de Uso 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Caso de Uso 2: Configurar Festa e Gerar Orçamento (RF008 e RF009)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Atores:</p>
                    <p className="text-muted-foreground">Cônjuges</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Pré-condição:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>A festa deve estar cadastrada.</li>
                      <li>O cônjuge deve estar autenticado com o código da festa e sua senha.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fluxo principal:</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>O cônjuge acessa a área de configuração da festa.</li>
                      <li>Seleciona o salão e os serviços desejados.</li>
                      <li>Adiciona e atribui profissionais aos serviços escolhidos.</li>
                      <li>Clica em Encerrar Configuração.</li>
                      <li>O sistema gera o orçamento detalhado e envia por e-mail para ambos os cônjuges.</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fluxos alternativos:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Serviço ou profissional indisponível: o sistema notifica e permite substituição.</li>
                      <li>Falha no envio de e-mail: o sistema registra o erro e permite reenvio posterior.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Critério de aceitação:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>O orçamento deve conter todos os itens e valores detalhados.</li>
                      <li>O e-mail com o orçamento deve ser enviado e registrado com sucesso.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Caso de Uso 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>Caso de Uso 3: Aceitar Orçamento e Efetuar Pagamento (RF010)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Atores:</p>
                    <p className="text-muted-foreground">Cônjuges, Operadora de Cartões (externa)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Pré-condição:</p>
                    <p className="text-muted-foreground">
                      O orçamento deve ter sido enviado e estar no estado "Aguardando aceitação".
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fluxo principal:</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>O cônjuge acessa o orçamento e clica em Aceitar Orçamento.</li>
                      <li>O sistema solicita a confirmação do pagamento.</li>
                      <li>O sistema envia os dados do pagamento à operadora de cartões.</li>
                      <li>A operadora autoriza a transação.</li>
                      <li>O sistema registra o pagamento e atualiza o status do orçamento para "Pago".</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fluxos alternativos:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Autorização recusada: o sistema notifica o usuário e permite nova tentativa.</li>
                      <li>Falha de rede: o sistema informa o erro e sugere tentar novamente mais tarde.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Critério de aceitação:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>O pagamento deve ser autorizado pela operadora.</li>
                      <li>O status do orçamento deve ser atualizado corretamente.</li>
                      <li>O recibo de pagamento deve ser gerado e enviado aos cônjuges por e-mail.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* 9. Checklist Final */}
          <section id="checklist" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. Checklist Final Antes da Submissão</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-muted-foreground">Requisitos enumerados com RF IDs e atores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-muted-foreground">Pelo menos 3 casos de uso detalhados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-muted-foreground">ERD simplificado presente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-muted-foreground">Requisitos não funcionais e critérios de aceitação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-muted-foreground">Decisão sobre tokenização de cartão documentada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-8" />

          {/* Referências */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Referências</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                A construção deste trabalho foi baseada em conteúdos apresentados nas aulas da disciplina Análise e
                Desenvolvimento de Sistemas do Centro Universitário Senac – Santo Amaro, além de pesquisas
                complementares sobre documentação de requisitos e modelagem de sistemas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Todo o material foi elaborado seguindo as boas práticas da engenharia de software, priorizando clareza,
                coerência e organização dos requisitos funcionais, não funcionais e casos de uso. Durante o processo,
                foram utilizadas ferramentas de apoio à escrita e formatação, além de inteligências artificiais para
                revisão linguística e padronização dos termos técnicos.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
