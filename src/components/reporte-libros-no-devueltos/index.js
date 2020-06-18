import React from 'react'
import Search from '../search'
import {useSelector}from 'react-redux'
import BookList from '../book-list'
const LiborsNoDevueltos = () =>{
    const bookList = useSelector(state=>state.lista_libros_no_devueltos)
    return(
    <>
        <main>
            <div className="flex-center">
                <Search />
            </div> 
            <BookList bookList ={bookList} filter="deben"/>
        </main>
    </>)
}
export default LiborsNoDevueltos;