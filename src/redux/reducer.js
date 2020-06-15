function reducer(state,action){
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
      default :{ return state}
    }
  }
export default reducer;