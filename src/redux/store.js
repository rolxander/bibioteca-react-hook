import reducer from './reducer'
import {createStore} from 'redux'
const initialState = {
 lista_libros:[],
 lista_libros_disponibles:[],
 lista_libros_prestados:[],
 lista_libros_no_devueltos:[]
}
const store = createStore(reducer,initialState);
export {store}