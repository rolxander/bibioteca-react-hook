import React from 'react';
import Home from './components/home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store'
import Prestamos from './components/prestamos'
import LiborsNoDevueltos from'./components/reporte-libros-no-devueltos'
import Container from './components/container'
import Navigation from './components/navigation'
//Estado inicial de nuestra estructura de datos


//creador de nuesta base de datos local 
function App() {
  return (
    //componente que envuelve nuestra aplicacion y que tiene como prop nuesto estado global 
  <Provider store={store}>
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
   </Provider>
  );
}

export default App;
