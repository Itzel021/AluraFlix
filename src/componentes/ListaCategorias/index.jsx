import "./ListaCategorias.css"

const ListaCategorias = (props) => {
    
    const manejarCambio = (e) =>{
        //console.log("Cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disable defaultValue="" hidden>Seleccionar categoria</option>
            {props.categoria.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
            
            
            
        </select>
    </div>
}

export default ListaCategorias