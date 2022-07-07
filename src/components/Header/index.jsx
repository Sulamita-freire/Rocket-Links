import'./style.css'
import Elipse from "../../icon/Ellipse.svg"
export function Header({title, description}){
    return(
        <header>
            <img className="elipse" src={Elipse} alt="" />
            <img className="perfil" src="https://github.com/Sulamita-freire.png" alt="" />
            <h1>
                {title}
            </h1>
            <span> 
                {description}
            </span>
        </header>
    )
}