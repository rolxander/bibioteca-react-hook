import React from 'react'
import {Link} from 'react-router-dom'
import './navigation.css'
const Navigation =()=>{
    return(<>
    <nav className="navigation">
       <div className="flex-center ">
           Panel de control
        </div> 
        <ul>
            <li className="enlace">
                <Link to="/">Libros</Link> 
            </li>
            <li className="enlace">
                <Link to="/prestamos">Prestamos</Link>  
            </li>
            <li className="enlace">
                <Link to="/informe">Reporte</Link>  
            </li>
            <li className="enlace">
                <Link to="/estadisticas">Estadisticas</Link>
            </li>
        </ul>
    </nav>
    </>)
}
export default Navigation;