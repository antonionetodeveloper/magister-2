import "@/style/pages/login.css";

export default function Login() {
  return (
    <main>
      <div className="container-fluid" >
        <div className="row " style={{ height: "100vh", backgroundColor: '#007AC5' }}>
          <form className="form-container col-md-5 bg-white rounded d-flex flex-column align-items-center justify-content-center align-items-center h-100 rounded-end-5" >
            <div className="d-flex align-items-center w-50 gap-3">
              <img src="/login/Magistergif 2.gif" alt="logo do magister" className="w-25" />
              <h1 className="w-75 m-0" style={{ fontStyle: 'italic', color: '#666' }}>Magister</h1>
            </div>
            <div className="text-center" style={{ color: '#999' }}>
              <p>Bem vindo ao portal Magister.<br />   Preencha os campos abaixo para prosseguir.</p>
            </div>
            <div className="d-flex flex-column gap-2 my-3">
              <input type="text" className="rounded-2 py-1 px-4" placeholder="Matricula" style={{ backgroundColor: '#DDEBF7', border: "1px solid #aaa" }} />
              <input type="password" className="rounded-2 py-1 px-4" placeholder="Senha" style={{ backgroundColor: '#DDEBF7', border: "1px solid #aaa" }} />
            </div>
            <a href="/" className="entrar" style={{ backgroundColor: '#0D6EFD', color: '#fff', borderRadius: '5px', padding: '5px 20px', fontSize: '16px', border: 'none', 'textDecoration': 'none' }}>
              Entrar
            </a>
          </form>
          <div className="aside-container col-md-7 p-0" style={{ backgroundImage: `url('/login/background-login.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }} >
            <div className="h-100 w-100 d-flex justify-content-center align-items-center" style={{ background: '#007AC5', opacity: 0.9 }}>
              <img src="/login/logo-tiradentes-white.png" alt="Logo" className="logo-tiradentes w-25" />
              <div className="position-absolute bottom-0 mb-4 d-flex justify-content-center m-auto gap-3">
                <img src="/login/marca_centro_universitario_tiradentes-white.png" alt="Imagem 1" className="img-small w-25" />
                <img src="/login/marca_universidade_tiradentes-white.png" alt="Imagem 1" className="img-small w-25" />
                <img src="/login/marca_faculdade_tiradentes-white.png" alt="Imagem 1" className="img-small w-25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
