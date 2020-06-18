import React, { useState } from 'react';
import Modal from '../modal';
import './book.css'
import NewLoan from '../new-loan'
import { useDispatch } from 'react-redux';
import axios from 'axios';
const Book=(props)=>{
     const dispatch = useDispatch();
     const {titulo,autor,año_pub,editorial,codigo,estado,prestamos} = props.book
     const [modal,setModal] = useState(false);
     const [comfirm,setComfirm] = useState(false)
     async function devolverLibro(){
      try{
        const data = await axios(
          {
            method:'put',
            url:`http://localhost:3500/api/prestamos/devolucion/${prestamos[prestamos.length -1]._id}`
          })
          
          dispatch({
            type:'RETURN_BOOK',
            payload:data.data.data
          })
      }
      catch(error){
        console.log(error)
      } 
     }
     const buttonOpcion=()=>{
       if(estado==="disponible"){
        return(<button className="btn btn-green" onClick={()=>{
          setModal(true)
        }}>Prestar</button>)
       }else if(estado==="prestado"||"deben"){
          return (
            <button 
            className="btn btn-blue" 
            onClick={ (e)=>{
              e.preventDefault()
              setComfirm(true)
               // devolverLibro()
            }}>Devolver</button>)
        }
     }
     const dataBook =()=>{
       if(estado ==="disponible"){
         return(
         <>
          <span>
           <label>Autor: </label>
           {autor}
          </span>
          <span>
            <label>Editorial: </label>
            {editorial}
          </span>
          <span>
            <label>Publicado: </label>
            {año_pub}
          </span></>
         )
       }else{
         return(
         <>
          <span>
            <label>Nombre:</label>
            {prestamos[prestamos.length -1].nombre}
          </span>
          <span>
            <label>celular :</label>
            {prestamos[prestamos.length -1].celular}
          </span>
          <span>
            <label>Prestado :</label>
            {prestamos[prestamos.length -1].fecha_prestamo}
          </span>
          <span>
            <label>Devolucion :</label>
            {prestamos[prestamos.length -1].fecha_limite_devolucion}
          </span>
         </>)
       }
     }
    return(<>
      {comfirm&&(
        <>
          <Modal setModal={setComfirm} title = "Devolver libro ?" >
              <span>
                  {titulo}
              </span> 
              <div className="flex-center">
              <button 
                onClick={
                  (e)=>{
                    e.preventDefault();
                    devolverLibro();
                    setComfirm(false)
                    
                }}
                className="btn btn-green">
                    ok
              </button>
              <button className="btn btn-red" 
                onClick={(e)=>{
                  e.preventDefault();
                  setComfirm(false)
                }}>
                    Candelar
                </button>
              </div>
          </Modal>
        </>)}
      {modal&&(
      <Modal title="Prestar Libro" setModal={setModal}>
        <NewLoan codigo={codigo}setModal={setModal} />
      </Modal>)}
      <div className="book">
        <div className="title-book">{titulo}</div>
        <div className="body-book">
          <div className="book-data">
           {dataBook()} 
          </div>
          <div className="book-opcions flex-ceter">
              {buttonOpcion()}
              <button className="btn btn-red">Eliminar</button>
          </div>
        </div>
      </div>
    </>)
}
export default Book;