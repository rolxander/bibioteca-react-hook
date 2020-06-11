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
      default :{ return state}
    }
  }
export default reducer;