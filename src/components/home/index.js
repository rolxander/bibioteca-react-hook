import React, { useEffect, useState } from 'react';
import BookList from '../book-list';
import Search from '../search'
import Modal from '../modal';
import {useDispatch,useSelector} from 'react-redux';
import NewBook from '../new-book';
import './home.css'
const axios = require('axios');
const Home = () =>{
    const bookList  = useSelector((state)=>state.bookListByCode)
    const [modal,setModal] = useState(false)
    const dispatch= useDispatch();
    useEffect(()=>{
        axios({
            method:'get',
            url:'http://localhost:3500/api/libros'
        }).then((response)=>{
            dispatch({
                type:'SET_BOOK_LIST',
                payload:response.data
            })
            
        })  
    },[dispatch])
    return(
    <> 
        
        <main>
            <div className="flex-center">
            {modal&&(<Modal title="Agregar Libro" setModal={setModal}>
                        <NewBook setModal={setModal}/>
                    </Modal>)}
                <button className ="btn btn-green btn-search"href="#"   onClick={(e)=>{
                    e.preventDefault();
                    setModal(true)
                }}>Agregar</button>
                <Search />
            </div>
            <BookList bookList ={bookList} filter="disponible"/>
        </main>
    </>
    )
}
export default Home;