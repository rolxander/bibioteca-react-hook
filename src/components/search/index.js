import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './search.css'
//<input className type="text" value={inputValue} onChange={filterByCode}/>)

const Search  = ()=>{
    const [inputValue,setInputValue]=useState('');
    const dispatch = useDispatch();
    const filterByCode=(e)=>{
        setInputValue(e.target.value)
    }
    useEffect(()=>{
        let valor;
        if(inputValue===''){
            valor= '0'
        }else{
            valor  = inputValue
        }
        dispatch({
            type:'FILTER_BY_CODE',
            payload:valor
        })
    },[inputValue,dispatch])
  
    return(
    <>  
        
        <div className="search">
            <label className="label-search" htmlFor="search" onClick={()=>{
            setInputValue('')
            }}>Buscar</label>
            <input  placeholder="Introduce el codigo" autoComplete="off" name="search"type="text"  value={inputValue} onChange={filterByCode}/>
        </div>
    </>)
   
}
export  default Search;