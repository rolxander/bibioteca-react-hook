import Biblioteca from '../estructura/biblioteca' 
export default function reducer(state,action){  
  switch(action.type){
    case 'SET_BOOK_LIST':{
      let estado = new Biblioteca(action.payload);
      return {...state,
        lista_libros:estado.getEstado(),
        lista_libros_disponibles:estado.getDisponibles(),
        lista_libros_prestados:estado.getPrestados(),
        lista_libros_no_devueltos:estado.getNodevueltos()
      }
    }
    case 'FILTER_BY_CODE':{
          let estado = new Biblioteca(state.lista_libros);
      estado.buscarLibro(action.payload);
      return {
        ...state,
        lista_libros_disponibles:estado.getDisponibles(),
        lista_libros_prestados:estado.getPrestados(),
        lista_libros_no_devueltos:estado.getNodevueltos()
      }
    }
    case 'SET_NEW_BOOK':{
      let estado = new Biblioteca(state.lista_libros);
      estado.registrarLibro(action.payload)
      return {
        lista_libros:estado.getEstado(),
        lista_libros_disponibles:estado.getDisponibles(),
        lista_libros_prestados:estado.getPrestados(),
        lista_libros_no_devueltos:estado.getNodevueltos()
      }
    }
    case'SET_LOAN_BOOK':{
      let estado = new Biblioteca(state.lista_libros);
      estado.registrarPrestamo(action.payload)
      return {
        lista_libros:estado.getEstado(),
        lista_libros_disponibles:estado.getDisponibles(),
        lista_libros_prestados:estado.getPrestados(),
        lista_libros_no_devueltos:estado.getNodevueltos()
      }
    }
    case'RETURN_BOOK':{
      let estado = new Biblioteca(state.lista_libros);
      estado.devolverLibro(action.payload)
      return {
        lista_libros:estado.getEstado(),
        lista_libros_disponibles:estado.getDisponibles(),
        lista_libros_prestados:estado.getPrestados(),
        lista_libros_no_devueltos:estado.getNodevueltos()
      }
    }
    default :{ return state}
  }
}
/*function reducer(state,action){
    switch(action.type){
      case 'SET_BOOK_LIST':{
          return {...state,bookList:action.payload,bookListByCode:action.payload}
      }
      case 'FILTER_BY_CODE':{
        if(action.payload ===''){
          return state
        }else{
          const bookListByCode = state.bookList.filter(book => book.codigo.toLowerCase().includes(action.payload.toLowerCase()))
          return {...state,bookListByCode}
        }
      }
      case 'SET_NEW_BOOK':{
          let new_state = state.bookList = [...state.bookList,action.payload]
          return {...state,bookList:new_state,bookListByCode:new_state} 
      }
      case'SET_LOAN_BOOK':{
        let new_state = state.bookList;
        let new_array = [];
        Object.keys(new_state).map((libro)=>{
          new_array.push(new_state[libro]);
          if(new_state[libro]._id===action.payload.libro){
            console.log(new_array.pop()) 
            new_state[libro].estado = "prestado"  
            new_state[libro].prestamos = [...new_state[libro].prestamos,action.payload]
          }
        
        return null});
        return {...state,bookList:new_state,bookListByCode:new_array} 
        
      }
      case'RETURN_BOOK':{
        console.log(action);
        let new_state = state.bookList;
        let new_array = []
        new_state.map(
          (book)=>{
            new_array.push(book)
            if(book._id===action.payload.libro){
              book.state = "disponible"
              new_array.pop()
            }
            return null;
          }
        )
        return {...state,bookList:new_array,bookListByCode:new_array}
      }
      default :{ return state}
    }
  }
export default reducer;*/