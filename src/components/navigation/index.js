import React from 'react'
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react'
const Navigation =()=>{
    return(<>
        <Link to="/">valor</Link>
        <Link to="/prestamos">Prestamos</Link>
        <Link to="/informe">Reportes</Link>
        <Link to="/estadisticas">estadisticas</Link>

    </>)
}
export default Navigation;