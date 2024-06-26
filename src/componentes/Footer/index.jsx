import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiShootingStarThin } from "react-icons/pi";

const Footer = () => {
    return <footer className='footer'>
        <div>
            <img src='./img/Aluraflix-logo.png' alt='org' />
        </div>
        <div className="redes-sociales">
            <a href="https://github.com/Itzel021"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/itzeldaniela21/"><FaLinkedin /></a>
        </div>
        <div className="autor">
            <strong>Diseñado por Alura Latam</strong> <br />
            <strong>Desarrollado por Itzel Daniela Martinez Carrera <PiShootingStarThin /></strong>
        </div>
    </footer>
}

export default Footer