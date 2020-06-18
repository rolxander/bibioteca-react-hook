import React from 'react'
import Search from '../search'
import {useSelector}from 'react-redux'
import BookList from '../book-list'
const Prestamos =()=>{
    const bookList = useSelector(state=>state.lista_libros_prestados)
    return(
    <>
        <main>
            <div className="flex-center">
                <Search />
            </div>
            <BookList bookList ={bookList} filter="prestado"/>
        </main>
    </>)
}
export default Prestamos;