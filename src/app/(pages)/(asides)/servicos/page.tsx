import "@/style/pages/servicos.css";

export default function Page() {
  return (
    <section className="section">
      <div className="d-flex position-absolute">
        <a
          href="/login"
          className="botao_imagem d-flex align-items-center gap-2"
        >
          <img src="/login/favicon2.png" />
          <p className="botao_login m-0 fs-4">Login no Portal</p>
        </a>
      </div>
      <div className="content-container">
        <h2 className="titulo">Serviços oferecidos</h2>
        <div>
          <div className="sessao_1">
            <div>
              <img src="/servico/servico_extensao_curso.jpg" />
            </div>
            <h3>Inscrição em Cursos de Extensão</h3>
            <p>
              Escolhendo esta opção você poderá ter acesso à oferta atual de
              cursos de extensão, bem como realizar a sua inscrição nos cursos
              desejados. Caso você já possua senha neste Portal de Serviços,
              efetue o login para realizar o processo de inscrição de forma mais
              simples.{" "}
            </p>
          </div>
          <div className="sessao_2">
            <div>
              <img src="/servico/servicos_processos.jpg" />
            </div>
            <h3>Processos Acadêmicos</h3>
            <p>
              Esta opção permite ao público externo ou aos alunos inativos darem
              entrada nos processos disponibilizados pela instituição, tais como
              portadores de diploma e transferência externa. As solicitações
              disponíveis para os alunos só podem ser acessadas a partir do
              login no portal.
            </p>
          </div>
          <div className="sessao_3">
            <div>
              <img src="/servico/servico_boleto.jpg" />
            </div>
            <h3>Boleto avulso</h3>
            <p>
              Com esta opção você poderá ter acesso ao boleto de uma ou mais
              parcelas, informando apenas a sua Matrícula e o seu CPF, sem
              precisar informar a senha do Portal Magister. Este boleto pode ser
              impresso e pago na Tesouraria ou através da rede bancária de sua
              preferência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
