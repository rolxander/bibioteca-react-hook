import React from 'react'
import Search from '../search'
import {useSelector}from 'react-redux'
import BookList from '../book-list'
const LiborsNoDevueltos = () =>{
    const bookList = useSelector(state=>state.bookListByCode)
    return(
    <>
        <main>
            <div className="flex-center">
                <Search />
            </div> 
            <BookList bookList ={bookList} filter="debe"/>
        </main>
    </>)
}
export default LiborsNoDevueltos;