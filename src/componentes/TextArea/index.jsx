import "./TextArea.css"

const TextArea = (props) =>{ 
    const placeholderModificado = `${props.placeholder}...`

    return <div className="campo-textArea">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
        />
    </div>
}

export default TextArea