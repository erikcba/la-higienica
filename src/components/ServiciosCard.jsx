import React from 'react'
import LinkServicios from './LinkServicios'

const ServiciosCard = ({titulo, descripcion	, message, numero}) => {
  return (
    <div className='flex flex-col items-start justify-center rounded-md shadow-md border-zinc-200 border p-5 gap-3'>
        <h2 className='text-blue-500 font-semibold text-4xl'>{numero}</h2>
        <h2 className='font-semibold text-lg'>{titulo}</h2>
        <p>{descripcion}</p>
        <LinkServicios message={message} />
    </div>
  )
}

export default ServiciosCard