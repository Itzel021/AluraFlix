import { useState } from "react";
import Boton from "../Boton";
import "./Navbar.css";

function Navbar({ onButtonClick }) {
  const [boton, botonActivo] = useState("Home");

  const handleButtonClick = (buttonName) => {
    botonActivo(buttonName);
    onButtonClick(buttonName);
  };

  return (
    <div className="navbar">
      <div>
        <img src="./img/Aluraflix-logo.png" alt="logoAlura" />
      </div>
      <div>
        <Boton
          titulo="Home"
          botonActivo={boton === "Home"} 
          onClick={() => handleButtonClick("Home")}
        />
        <Boton
          titulo="Nuevo Video"
          botonActivo={boton === "Nuevo Video"}
          onClick={() => handleButtonClick("Nuevo Video")} 
        />
      </div>
    </div>
  );
}

export default Navbar;
