import { Button } from "../ui/button";
import { Input } from "../ui/input";

import "./Login.css";

const login = () => {
  return (
    <>
      <div className="container">
        <div className="container-logo">
          <div className="logo-img">lOGO</div>
          <h1>NaRégua</h1>
        </div>

        <div className="container-user">
          <h2>Usuario</h2>
          <Input type="text" placeholder="Digite seu usuario" />
        </div>

        <div className="container-password">
          <h2>Senha</h2>
          <Input type="text" placeholder="Digite sua senha" />
        </div>
        <h2>Esqueceu a senha ?</h2>
        <Button>Entrar</Button>

        <div className="container-register">
          não tem uma conta ? <a href="/register">Registre-se</a>
        </div>

        <br />
        <div className="login-google">
          <h2>Logar com</h2>
          <Button>Entrar com Google</Button>
        </div>
      </div>
    </>
  );
};

export default login;
