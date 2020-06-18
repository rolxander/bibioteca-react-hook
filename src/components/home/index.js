import React, { useState} from 'react';
import BookList from '../book-list';
import Search from '../search'
import Modal from '../modal';
import {useSelector} from 'react-redux';
import NewBook from '../new-book';
import './home.css'
const Home = () =>{
    useState()
    const bookList  = useSelector((state)=>state.lista_libros_disponibles)
    const [modal,setModal] = useState(false)
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
            {<BookList bookList ={bookList} filter="disponible"/>}
        </main>
    </>
    )   
}
export default Home;
/*



*/ 