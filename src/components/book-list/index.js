import React,{useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Book from '../book'
const axios = require('axios');
const BookList = () =>{
    const [loader,setLoader] = useState(true);
    // instanciamos el estado global 
    const bookList = useSelector((state)=>state.bookListByCode)
    // instanciamos el dispath para manejar el estado global
    const dispatch = useDispatch();
    useEffect(()=>{
        axios({method:'get',
               url:'http://localhost:3500/api/libros'
        })
        .then((response)=>{
            dispatch({
                type:'SET_BOOK_LIST',
                payload:response.data
            })
        })
        .catch(()=>{});
    },[dispatch]);
    
return(<>{
    bookList.map((book,key)=>{
        return (<Book  key = {key} book = {book}/>)
    })
}</>)
}
export default BookList;