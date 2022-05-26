import React from 'react'
import { NavLink, useNavigate,useParams  } from 'react-router-dom'


export const Card = ({codigo,descripcion,foto,nombre,precio,stock,_id,id ,eliminar}) => {


  let navigate = useNavigate();
  

  


  const actualizar = () => {
    navigate(`actualizar-producto/${id ? id : _id}`)

  }


  return (
    <div className='card' >

      <div className='infoCard'>
      <p>{nombre}</p>
      <p>Descripcion: {descripcion}</p>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>



      <button onClick={actualizar} > Actualizar</button>
      <button onClick={() => eliminar(id ? id : _id)} >Eliminar</button>

      </div>
    

      <img src={foto} width='200' />

       



    </div>
  )
}
