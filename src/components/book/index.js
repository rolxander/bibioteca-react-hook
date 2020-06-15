import React, { useState } from 'react';
import Modal from '../modal';
import './book.css'
import NewLoan from '../new-loan'
const Book=(props)=>{
     const {titulo,autor,año_pub,editorial,codigo,estado} = props.book
     const [modal,setModal] = useState(false);
     const buttonOpcion=()=>{
       if(estado==="disponible"){
        return(<button className="btn btn-green" onClick={()=>{
          setModal(true)
        }}>Prestar</button>)
       }else if(estado==="prestado"){return<button className="btn btn-blue">Devolver</button>}
     }
    return(<>
      
      {modal&&(
      <Modal title="Prestar Libro" setModal={setModal}>
        <NewLoan codigo={props.book.codigo}/>
      </Modal>)}
      <div className="book">
        <div className="title-book">{titulo}</div>
        <div className="body-book">
          <div className="book-data">
            <span>
              {autor}
            </span>
            <span>
              {editorial}
            </span>
            <span>
              {año_pub}
            </span>
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