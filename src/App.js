import React from 'react';
import Home from './components/home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store'
import Prestamos from './components/prestamos'
//Estado inicial de nuestra estructura de datos


//creador de nuesta base de datos local 
function App() {
  return (
    //componente que envuelve nuestra aplicacion y que tiene como prop nuesto estado global 
  <Provider store={store}>
    <Router>
        <Switch>
          <Route exact path="/" render={()=>{
            return (<Home />)
          
          }}/>
          <Route exact path="/prestamos" render={()=>{
            return (<Prestamos />)
          
          }}/>
        </Switch>
    </Router>
   </Provider>
  );
}

export default App;
