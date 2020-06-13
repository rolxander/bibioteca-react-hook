import React, { useState } from 'react';
import Modal from '../modal';
import './book.css'
const Book=(props)=>{
     const {titulo,autor,año_pub,editorial,codigo} = props.book
     const [modal,setModal] = useState(false);
    return(<>
      
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
              <button className="btn btn-blue">Prestar</button>
          </div>
        </div>
      </div>
    </>)
}
export default Book;