import React from 'react'

const ServiciosCard = ({titulo, descripcion	, link, numero}) => {
  return (
    <div className='flex flex-col items-start justify-center rounded-md shadow-md border-zinc-200 border p-5 gap-3'>
        <h2 className='text-blue-500 font-semibold text-4xl'>{numero}</h2>
        <h2 className='font-semibold text-lg'>{titulo}</h2>
        <p>{descripcion}</p>
        <a href="{link}" target="_blank" rel="noreferrer" className='font-medium flex flex-row items-center justify-center gap-1 text-blue-800 hover:scale-110 transition-all duration-300'>Solicitar <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#193cb8"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path></svg></a>
    </div>
  )
}

export default ServiciosCard