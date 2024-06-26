import "./Boton.css"

const Boton = (props) => {
    return <button className={props.botonActivo ? "boton-activo" : "boton"} onClick={props.onClick}>
        {props.titulo}
    </button>
}

export default Boton