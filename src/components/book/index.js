import React from 'react';
const Book=(props)=>{
     const {titulo,autor,año_pub,editorial,codigo} = props.book
    return(<>
      {codigo}  {titulo} - {autor} - {año_pub} - {editorial}<br/>
    </>)
}
export default Book;