import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
const axios = require('axios')
const NewLoan = (props)=>{
   const dispatch = useDispatch();
    const {codigo} = props
    const [newLoan,setNewLoan] = useState({});
    const inputChange =(e) =>{
      setNewLoan({
          ...newLoan,[e.target.name]:e.target.value
      })
    }
    return(
    <>
        <form action="#"
            onSubmit={(e)=>{
            const {setModal} = props;
            e.preventDefault();
            let date = new Date();
            let dateMilisegundos = date.getTime();
            let fecha_limite_devolucion = (dateMilisegundos+(86400000*newLoan.cantidad_dias))
            let dateLimite = new Date(fecha_limite_devolucion)
            let loan ={
                codigo,
                prestamo:{
                    "nombre":newLoan.nombre,
                    "celular":newLoan.celular,
                    "fecha_prestamo":`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
                    "fecha_limite_devolucion":`${dateLimite.getDate()}/${dateLimite.getMonth()+1}/${dateLimite.getFullYear()}`
                }
            }
            axios({
                method: 'post',
                url: 'http://localhost:3500/api/prestamos',
                data:{...loan}
              }).then((response)=>{
                  if(response.data.message ==="Prestamo guardado"){
                    dispatch({
                        type:'SET_LOAN_BOOK',
                        payload:response.data.data
                    });
                    setModal() 
                  }

              });
            }}>        
            <input 
                onChange={inputChange}
                type="text" 
                name="nombre" 
                autoComplete="off"/>
            <input
                onChange={inputChange} 
                type="text" 
                name="celular"
                autoComplete="off"/>
            <input
                onChange={inputChange} 
                type="text" 
                name="cantidad_dias"
                autoComplete="off"/>
            <input className="btn btn-green w-100" 
                value="Registrar" 
                type="submit"/>
        </form>

    </>
    )
}
export default NewLoan;