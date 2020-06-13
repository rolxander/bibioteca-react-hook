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
          console.log(action.payload)
          console.log(state)
          let new_state = state.bookList = [...state.bookList,action.payload]
          console.log(new_state)
          return {...state,bookList:new_state,bookListByCode:new_state} 
      }
      default :{ return state}
    }
  }
export default reducer;