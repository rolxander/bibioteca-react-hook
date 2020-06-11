import reducer from './reducer'
import {createStore} from 'redux';
const initialState = {
    bookList:[],
    bookListByCode:[],
    bookListByTitle:[],
}
const store = createStore(reducer,initialState);
export {store}