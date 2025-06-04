import React from 'react'

const ServiciosCard = ({titulo, descripcion	, link}) => {
  return (
    <div className='flex flex-col items-start justify-center rounded-md shadow-md border-zinc-200 border p-5 gap-3'>
        <svg  xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={"#3aa6f9"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M18 5c-1.41 0-2.16.75-2.71 1.29-.49.49-.73.71-1.3.71s-.8-.22-1.29-.71C12.15 5.74 11.41 5 9.99 5s-2.16.75-2.71 1.29c-.49.49-.73.71-1.29.71s-.8-.22-1.29-.71C4.15 5.74 3.41 5 1.99 5v2c.56 0 .8.22 1.29.71C3.83 8.26 4.57 9 5.99 9s2.16-.75 2.71-1.29c.49-.49.73-.71 1.29-.71s.8.22 1.29.71c.55.55 1.29 1.29 2.71 1.29s2.16-.75 2.71-1.29c.49-.49.73-.71 1.3-.71s.8.22 1.3.71c.55.55 1.29 1.29 2.71 1.29V7c-.56 0-.8-.22-1.3-.71C20.16 5.74 19.42 5 18 5M18 10c-1.41 0-2.16.75-2.71 1.29-.49.49-.73.71-1.3.71s-.8-.22-1.29-.71c-.55-.55-1.29-1.29-2.71-1.29s-2.16.75-2.71 1.29c-.49.49-.73.71-1.29.71s-.8-.22-1.29-.71C4.15 10.74 3.41 10 1.99 10v2c.56 0 .8.22 1.29.71.55.55 1.29 1.29 2.71 1.29s2.16-.75 2.71-1.29c.49-.49.73-.71 1.29-.71s.8.22 1.29.71c.55.55 1.29 1.29 2.71 1.29s2.16-.75 2.71-1.29c.49-.49.73-.71 1.3-.71s.8.22 1.3.71c.55.55 1.29 1.29 2.71 1.29v-2c-.56 0-.8-.22-1.3-.71C20.16 10.74 19.42 10 18 10M18 15c-1.41 0-2.16.75-2.71 1.29-.49.49-.73.71-1.3.71s-.8-.22-1.29-.71c-.55-.55-1.29-1.29-2.71-1.29s-2.16.75-2.71 1.29c-.49.49-.73.71-1.29.71s-.8-.22-1.29-.71C4.15 15.74 3.41 15 1.99 15v2c.56 0 .8.22 1.29.71.55.55 1.29 1.29 2.71 1.29s2.16-.75 2.71-1.29c.49-.49.73-.71 1.29-.71s.8.22 1.29.71c.55.55 1.29 1.29 2.71 1.29s2.16-.75 2.71-1.29c.49-.49.73-.71 1.3-.71s.8.22 1.3.71c.55.55 1.29 1.29 2.71 1.29v-2c-.56 0-.8-.22-1.3-.71C20.16 15.74 19.42 15 18 15"></path></svg>
        <h2 className='font-semibold text-lg'>{titulo}</h2>
        <p>{descripcion}</p>
        <a href="{link}" target="_blank" rel="noreferrer" className='font-medium flex flex-row items-center justify-center gap-1 text-blue-800 hover:scale-110 transition-all duration-300'>Solicitar <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#193cb8"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path></svg></a>
    </div>
  )
}

export default ServiciosCard