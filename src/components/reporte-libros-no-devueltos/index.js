import React from 'react'
import Navigation from '../navigation'
import Search from '../search'
import {useSelector}from 'react-redux'
import BookList from '../book-list'
const LiborsNoDevueltos = () =>{
    const bookList = useSelector(state=>state.bookListByCode)
    return(
    <>
        <main>
            <BookList bookList ={bookList} filter="debe"/>
        </main>
    </>)
}
export default LiborsNoDevueltos;