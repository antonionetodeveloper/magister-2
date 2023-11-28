import "@/style/components/layout/header.css";

const Header = ({ hideOptions }: { hideOptions?: boolean }) => {
  return (
    <header className="style-header">
      <a href="/" className="logo">
        <img src="/login/Magistergif 3.gif" />
        <div className="letterlogo">
          <p className="titulo">Magister</p>
          <p className="subtitulo">Portal de serviços da UNIT</p>
        </div>
      </a>
      {hideOptions ? null :
        <>
          <IconSection />
          <div className="perfil">
            <div className="foto">
              <img src="/login/chay.jpg" />
            </div>
            <div className="info">
              <p>Chay Suede</p>
              <p>Matricula: 1231132482</p>
              <div className="d-flex justify-content-between pr-2">
                <a href="#">Perfil</a>
                <a href="/login">Sair</a>
              </div>
            </div>
          </div>
        </>
      }
    </header>
  );
};

// Podreria fazer um fetch, mas nesse caso, 
// necessitaria receber imagens, então não é viável usar o mocko
const IconSection = async () => {
  return (
    <div className="bar-nav">
      <div className="icone">
        <img src="/login/ico1.png" />
        <p className="hidetext">Innovation Center</p>
      </div>
      <div className="barra"></div>
      <div className="icone">
        <img src="/login/ico2.png" />
        <p className="hidetext">Carreiras</p>
      </div>
      <div className="barra"></div>
      <div className="icone">
        <img src="/login/ico3.png" />
        <p className="hidetext">Google Education</p>
      </div>
      <div className="barra"></div>
      <div className="icone">
        <img src="/login/ico4.png" />
        <p className="hidetext">Matrícula</p>
      </div>
      <div className="barra"></div>
      <div className="icone">
        <img src="/login/ico5.png" />
        <p className="hidetext">Ativar WiFi</p>
      </div>
    </div>
  )
}

export default Header;