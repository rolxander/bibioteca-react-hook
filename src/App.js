import React from 'react';
import Home from './components/home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducer'
//Estado inicial de nuestra estructura de datos
const initialState = {
  bookList:[],
  bookListByCode:[],
  bookListByTitle:[],
}
//funcion que clasifica las acciones de los datos que se le envien al reducer para actualizar los datos

//creador de nuesta base de datos local 
const store = createStore(reducer,initialState);
function App() {
  return (
    //componente que envuelve nuestra aplicacion y que tiene como prop nuesto estado global 
  <Provider store={store}>
    <Router>
        <Switch>
          <Route exact path="/" render={()=>{
            return (<Home />)
          }}/>
        </Switch>
    </Router>
   </Provider>
  );
}

export default App;
