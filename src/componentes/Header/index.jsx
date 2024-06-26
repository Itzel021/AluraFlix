import "./Header.css"

function Header(props){
    return <header className="header">
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
    </header>
    
}

export default Header