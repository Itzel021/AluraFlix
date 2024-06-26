import { useState } from "react";
import "./App.css";
import Footer from "./componentes/Footer";
import Banner from "./componentes/Banner/index";
import Navbar from "./componentes/Navbar/index";
import Formulario from "./componentes/Formulario";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [videos, actualizarVideos] = useState([
    {
      titulo: " aa",
      categoria: " aa",
      imagen: "aa ",
      video: " aa",
      descripcio: "aa "
    },
    {
      titulo: " bb",
      categoria: "bb ",
      imagen: "bb ",
      video: " bb",
      descripcio: " bb"
    }
  ])

  const [categoria, actualizarCategoria] = useState([
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
    },
    {
      titulo: "Back End",
      colorPrimario: "#A6D157",
    },
    {
      titulo: "Innovación y gestión",
      colorPrimario: "#FF8A29",
    },
  ]);

  //Registrar video
  const registrarVideo = (video) => {
    console.log("Nuevo colaborador: ", video);
    //Spread operator, agregar el nuevo elemento, copiar los existentes y agregar el nuevo
    actualizarVideos([...videos, video]);
  };

  const handleButtonClick = (buttonName) => {
    setActivePage(buttonName);
  };

  return (
    <div>
      <Navbar onButtonClick={handleButtonClick} />
      {activePage === "Home" && <Banner />}
      {activePage === "Nuevo Video" && (
        <Formulario
          categoria={categoria.map((categoria) => categoria.titulo)}
          registrarVideo = {registrarVideo}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
