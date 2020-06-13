import React from 'react'
import Navigation from '../navigation'
import Search from '../search'
import {useSelector}from 'react-redux'
import BookList from '../book-list'
const Prestamos =()=>{
    const bookList = useSelector(state=>state.bookListByCode)
    return(
    <>
        
        <main>
            <div className="flex-center">
                <Search />
                <BookList bookList ={bookList} filter="prestado"/>
            </div>
            
        </main>
    </>)
}
export default Prestamos;