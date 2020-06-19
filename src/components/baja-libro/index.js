import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
const axios = require('axios')
const Baja = (props) =>{
    const dispatch = useDispatch();
    const [motivo_baja,setMotivoBaja] = useState({
        motivo_baja:'deterioro'
    })
    const baja_libro = async ()=>{
        const {codigo,setModal} = props;
        try{
        const respuesta = await axios({
            method:'put',
            url:`http://localhost:3500/api/libros/baja/${codigo}`,
            data:motivo_baja
        })
        dispatch({
          type:'DELETE_BOOK',
          payload:respuesta.data.data
        })
        setModal(false)
      }
        catch(error){
          console.log(error)
        }
    }
    return(<>
     <form active="#" onSubmit={(e)=>{
         e.preventDefault()
         baja_libro()
         console.log(motivo_baja)
        }}>         <div className="select">
                      <select   name = "motivo_baja" 
                        onChange = {
                          (e)=>{
                            setMotivoBaja({[e.target.name]:e.target.value})
                          }
                        }>
                        <option value='deterioro'> Deterioro</option>
                        <option  value='extravio'> Extravio</option>
                      </select>
                      <label>Selecione una Opcion</label>
                    </div>
                   
                     <div className = " flex-center">
                      < input type="submit" value="Eliminar" className = " btn btn-red "/>
                    </div>
                  </form>
    </>)
}
export default Baja;