import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
const Search  = ()=>{
    const dispatch = useDispatch();
    const filterByCode=(e)=>{
        setInputValue(e.target.value)
        dispatch({
            type:'FILTER_BY_CODE',
            payload:e.target.value
        })
    }
    const [inputValue,setInputValue]=useState('');
    return(<input type="text" value={inputValue} onChange={filterByCode}/>)
}
export  default Search;