import { useState } from "react"
import Header from "../Header";
import "./Formulario.css";
import Boton from "../Boton";
import CampoTexto from "../CampoTexto";
import ListaCategorias from "../ListaCategorias";
import TextArea from "../TextArea";

function Formulario(props) {

    const [selectedCategoria, actualizarSelectedCategoria] = useState("");
    const [titulo, actualizarTitulo] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    const { registrarVideo } = props

    const manejarEnvio = (event) =>{
        event.preventDefault()
        console.log("Manejar envio")
        let datosEnviar ={
            titulo: titulo,
            categoria: selectedCategoria,
            imagen:imagen,
            video:video,
            descripcion:descripcion
        }
        console.log(datosEnviar);
        registrarVideo(datosEnviar)
    }


    return (
        <div className="container-form">
            <form onSubmit={manejarEnvio}>
                <Header
                    titulo="Nuevo video"
                    texto="Complete el formulario para crear una nueva tarjeta de video"
                />
                <div className="row-form">
                    <CampoTexto
                        titulo="Titulo"
                        placeholder="Ingresa un titulo"
                        required={true}
                        valor={titulo}
                        actualizarValor={actualizarTitulo}
                    />
                    <ListaCategorias
                    valor={selectedCategoria}
                    actualizarValor={actualizarSelectedCategoria}
                    categoria={props.categoria}
                    />
                </div>
                <div className="row-form">
                    <CampoTexto
                        titulo="Imagen"
                        placeholder="Ingresa la url de la imagen"
                        required={true}
                        valor={imagen}
                        actualizarValor={actualizarImagen}
                    />
                    <CampoTexto
                        titulo="Video"
                        placeholder="Ingresa el enlace del video"
                        required={true}
                        valor={video}
                        actualizarValor={actualizarVideo}
                    />
                </div>
                <div className="row-form">
                    <TextArea 
                        titulo="Descripción"
                        placeholder="¿De qué se trata este vídeo?"
                        required={true}
                        valor={descripcion}
                        actualizarValor={actualizarDescripcion}
                    />
                </div>
                <div className="row-form-button">
                    <Boton titulo="GUARDAR" />
                    <Boton titulo="LIMPIAR" />
                </div>
            </form>
        </div>
    );
}

export default Formulario;
