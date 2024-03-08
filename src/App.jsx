import { Button } from "./components/ui/button";
import { CgProfile } from "react-icons/cg";
import { LuCalendarDays } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { Input } from "./components/ui/input";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"; // Importa a localização ptBR
import { MdNavigateNext } from "react-icons/md";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  // Obtém a data atual
  const dataAtual = new Date();

  // Formata a data como "quarta, 6 de Março"
  const dataFormatada = format(dataAtual, "eeee', ' d 'de' MMMM", {
    locale: ptBR,
  });

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
        <div className="container-main">
          <div className="container-login">
            <h1>
              Olá,<a>Faça seu login!</a>
            </h1>
            <span>{dataFormatada}</span>

            <div className="container-search">
              <Input placeholder="Buscar Barbearias"></Input>
              <Button>
                <span className="ico-search">
                  <CiSearch />
                </span>
              </Button>
            </div>
          </div>

          <div className="cards-container">
            <div className="next-button">
              <MdNavigateNext className="icon-Next"/>
            </div>
            <Card
              nameBarber={"Dom Papitu"}
              Andress={"Rua 25 ,Prox ao Hotel Ramos, Correntina-BA"}
              imgBarber={"./public/Barber 1.png"}
            ></Card>
            <Card
              nameBarber={"Irmão de Edilsinho"}
              Andress={"Rua da chácara,Merdado Novo, Correntina-BA"}
              imgBarber={"./public/Barber can.png"}
            ></Card>
            <Card
              nameBarber={"Irmão de Edilsinho"}
              Andress={"Rua da chácara,Merdado Novo, Correntina-BA"}
              imgBarber={"./public/Barber can.png"}
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
