import "./App.css";
import { Button } from "./components/ui/button";
import { CgProfile } from "react-icons/cg";
import { LuCalendarDays } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { Input } from "./components/ui/input";
function App() {
  return (
    <>
      <div className="container-menu">
        <div className="container-logo">
          <img src="\public\scissor.svg" alt="NaRégua" />
          <h1>NaRégua</h1>
        </div>

        <div className="container-menu-links">
          <div className="calendar-container">
            <LuCalendarDays />
            Agendamentos
          </div>
          <div className="profile-container">
            <Button>
              <CgProfile />
              Perfil
            </Button>
          </div>
        </div>
      </div>

      <div className="background-img">
        <div className="container-login">
          <h1>
            Olá,<a>Faça seu login!</a>
          </h1>
          <span>Quarta,6 de Março</span>

          <div className="container-search">
            <Input placeholder="Buscar Barbearias"></Input>
            <Button>
              <span className="ico-search">
                <CiSearch />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
