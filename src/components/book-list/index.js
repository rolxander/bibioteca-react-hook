import React from 'react';
import Book from '../book'
const BookList = (props) =>{
    const bookList  = props.bookList
return(<>{
    bookList.map((book,key)=>{
       // console.log(book)
        if(book.estado ===props.filter){
        return (<Book  key = {key} book = {book}/>)
        }
        else{
            return null;
        }
    })
}</>)
}
export default BookList;