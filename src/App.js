import React,{useEffect} from 'react';
import Home from './components/home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Prestamos from './components/prestamos'
import LiborsNoDevueltos from'./components/reporte-libros-no-devueltos'
import Container from './components/container'
import Navigation from './components/navigation'
import {useDispatch} from 'react-redux';

//Estado inicial de nuestra estructura de datos


//creador de nuesta base de datos local 
const axios = require('axios');
function App() {
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
  return (
    //componente que envuelve nuestra aplicacion y que tiene como prop nuesto estado global 
    <Router>
        <Switch>
          <Route exact path="/" render={()=>{
            return (<>
                  <Container>
                      <header className="flex-center">Biblioteca</header>
                      <nav>
                          <Navigation/>
                      </nav>
                      <Home/>  
                  </Container>          
                </> )
          
          }}/>
          <Route exact path="/prestamos" render={()=>{
            return (<>
              <Container>
                  <header className="flex-center">Biblioteca</header>
                  <nav>
                      <Navigation/>
                  </nav>
                  <Prestamos/>
              </Container>          
            </> )
          
          }}/>
          <Route exact path="/informe" render={()=>{
             return (<>
              <Container>
                  <header className="flex-center">Biblioteca</header>
                  <nav>
                      <Navigation/>
                  </nav>
                  <LiborsNoDevueltos/>
              </Container>          
            </> )
          
          }}/>
        </Switch>
    </Router>
  );
}

export default App;
