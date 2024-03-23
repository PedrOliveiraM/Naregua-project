import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { CgProfile } from "react-icons/cg";
import { LuCalendarDays } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"; // Importa a localização ptBR
import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";
// Importa o componentes Criados por min
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
// Importa o css
import "./Home.css";

function Home() {
  // Obtém a data atual
  const dataAtual = new Date();

  // Formata a data como "quarta, 6 de Março"
  const dataFormatada = format(dataAtual, "eeee', ' d 'de' MMMM", {
    locale: ptBR,
  });

  const [inputBarber, setInputBarber] = useState("");

  const handleInputBarberChange = (e) => {
    setInputBarber(e.target.value);
    console.log(inputBarber);
  };
  const handleInputBarberClick = () => {
    setInputBarber("");
  };

  //vetor com nomes de barbearias
  const barbearias = [
    "Navalha & Estilo",
    "Bigode Fino",
    "Barbearia Vanguarda",
    "Cortes e Afiações",
    "Raspando Bem",
    "Barba & Tesoura",
    "A Arte do Barbear",
    "Estilo Cortante",
    "Aparência Masculina",
    "Barbearia Dom Quixote",
  ];
  const andressBarbers = [
    "Rua das Navalhas, 123",
    "Avenida dos Bigodes, 456",
    "Travessa da Barbearia, 789",
    "Alameda das Tesouras, 321",
    "Praça do Corte, 654",
    "Rua da Barba, 987",
    "Avenida da Estilização, 741",
    "Rua do Aparador, 852",
    "Avenida dos Cortes, 369",
    "Travessa da Afiação, 258",
  ];

  return (
    <>
      <div className="header">
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
          <div className="login-search-container">
            <div className="container-login">
              <h1>
                Olá,<a>Faça seu login!</a>
              </h1>
              <span>{dataFormatada}</span>
            </div>
            <div className="container-search">
              <Input
                onChange={handleInputBarberChange}
                value={inputBarber}
                type="text"
                placeholder="Buscar Barbearias"
              ></Input>
              <Button onClick={handleInputBarberClick}>
                <span className="ico-search">
                  <CiSearch />
                </span>
              </Button>
            </div>
          </div>

          <div className="section-card-container">
            <span className="recomend">Destaques</span>
            <div className="cards-container" style={{ marginTop: "10px" }}>
              <div className="next-button">
                <MdNavigateNext className="icon-Next" />
              </div>

              <div className="card">
                <Card
                  nameBarber={"Dom Papitu"}
                  Andress={"Rua 25, Prox ao Hotel Ramos, Correntina-BA"}
                  imgBarber={"./public/Barber 1.png"}
                ></Card>
              </div>
              <div className="card">
                <Card
                  nameBarber={"Brother's Barber Shop"}
                  Andress={"Rua 144, , s/n, Correntina-BA"}
                  imgBarber={"./public/Barber can.png"}
                ></Card>
              </div>
              <div className="card">
                <Card
                  nameBarber={"Junin do corte"}
                  Andress={"Rua da Coelba, Prox ao Postinho, Correntina-BA"}
                  imgBarber={"./public/Barber 2.png"}
                ></Card>
              </div>
              <div className="next-button2">
                <MdNavigateNext className="icon-Next2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-barbers-populares">
        <div className="section-barbers-populares-title">
          <span className="barber-populares">BARBEIROS POPULARES</span>
          <div className="cards-pupular">
            <div className="card">
              <Card
                nameBarber={barbearias[9]}
                Andress={andressBarbers[9]}
                imgBarber={"./public/Barber 5.png"}
              ></Card>
            </div>
            <div className="card">
              <Card
                nameBarber={barbearias[8]}
                Andress={andressBarbers[8]}
                imgBarber={"./public/Barber 2.png"}
              ></Card>
            </div>
            <div className="card">
              <Card
                nameBarber={barbearias[7]}
                Andress={andressBarbers[7]}
                imgBarber={"./public/Barber 3.png"}
              ></Card>
            </div>
            <div className="card">
              <Card
                nameBarber={barbearias[6]}
                Andress={andressBarbers[6]}
                imgBarber={"./public/Barber 4.png"}
              ></Card>
            </div>
            <div className="card">
              <Card
                nameBarber={barbearias[5]}
                Andress={andressBarbers[5]}
                imgBarber={"./public/Barber 1.png"}
              ></Card>
            </div>
            <div className="next-button">
              <MdNavigateNext className="icon-Next-popular" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-barbers-more-visit">
        <div className="section-barbers-populares-title">
          <span className="barber-populares">MAIS VISITADOS</span>
          <div className="cards-pupular">
            <div className="card">
              <Card
                nameBarber={barbearias[0]}
                Andress={andressBarbers[0]}
                imgBarber={"./public/BarberBarrr.png"}
              ></Card>
            </div>
            <div className="card">
              <Card
                nameBarber={barbearias[1]}
                Andress={andressBarbers[1]}
                imgBarber={"./public/Barber 2.png"}
              ></Card>
            </div>
            <div className="card">
              <Card
                nameBarber={barbearias[2]}
                Andress={andressBarbers[2]}
                imgBarber={"./public/Barber 3.png"}
              ></Card>
            </div>
            <div className="card">
              <Card
                nameBarber={barbearias[3]}
                Andress={andressBarbers[3]}
                imgBarber={"./public/Barber 4.png"}
              ></Card>
            </div>
            <div className="card">
              <Card
                nameBarber={barbearias[4]}
                Andress={andressBarbers[4]}
                imgBarber={"./public/Barber 1.png"}
              ></Card>
            </div>
            <div className="next-button">
              <MdNavigateNext className="icon-Next-visit" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-footer">
        <Footer />
      </div>
    </>
  );
}
export default Home;
