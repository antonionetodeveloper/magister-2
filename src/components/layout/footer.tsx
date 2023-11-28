import "src/style/components/layout/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <CampusInfo />
      <div className="bottom-bar text-center">
        <div className="m-0">
          <hr />
          <p>&copy; 2023 Magister - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const CampusInfo = async () => {
  const response = await fetch("https://magister-2.free.mockoapp.net/teste1");
  const campusInfo = await response.json();

  return (
    <div className="campus-container">
      {campusInfo.map((campus: any) => (
        <div key={campus.id} className="campus-card">
          <h5>{campus.campus}</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-body-secondary">{campus.endereco}</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-body-secondary">{campus.CEP}</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-body-secondary">{campus.telefone}</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-body-secondary">{campus.cidade}</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;

