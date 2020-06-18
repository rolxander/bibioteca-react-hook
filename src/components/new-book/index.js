import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
const axios = require('axios')
const NewBook=(props)=>{
    const dispatch = useDispatch();
    const[newBook,setNewBook] = useState({})
    const handleOnChangeInput=(e)=>{
        e.preventDefault()
        setNewBook({...newBook,[e.target.name]:e.target.value})
       
        
    }
    return(
    <>
        <form action="#" id="new-book"onSubmit={(e)=>{
            const {setModal} = props;
            e.preventDefault();
            axios({
                method: 'post',
                url: 'http://localhost:3500/api/libros',
                data:{...newBook}
              }).then((response)=>{
                  if(response.data.message==="Libro guardado")
                  {
                    dispatch({
                        type:'SET_NEW_BOOK',
                        payload:response.data.data
                    })
                    setModal()
                  }else{

                  }

              });
              
        }}>
        <input 
            onChange={handleOnChangeInput}
            type="text" 
            name="isbn" 
            placeholder="isbn" 
            autoComplete="off"
        />
        <input 
            onChange={handleOnChangeInput} 
            type="text" name="titulo" placeholder="titulo"
            autoComplete="off"
        />
        <input 
            onChange={handleOnChangeInput}
            type="text" 
            name="autor"
            autoComplete="off"
            placeholder="autor"
        />
        <input 
            onChange={handleOnChangeInput}
            type="text" name="editorial"
            autoComplete="off"
            placeholder="editorial"
        />
        <input 
            onChange={handleOnChangeInput}
            type="number" 
            step="1" 
            min="1500" 
            max="2030" 
            name="año_pub"
            autoComplete="off"
            placeholder="año publicacion"
        />
        <input type="submit" value="Registrar"/>
        </form>
    </>);
}
export default NewBook;