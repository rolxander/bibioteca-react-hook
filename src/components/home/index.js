import React from 'react';
import BookList from '../book-list';
import Search from '../search'
import Navigation from '../navigation';
const Home = () =>{
    return(
    <>
    <Search />
    <Navigation/>
    <BookList />
    </>
    )
}
export default Home;