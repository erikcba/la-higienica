import React from 'react'
import Mapa from '../components/Mapa'

const Contacto = () => {
  return (
    <section id='contacto' className='bg-zinc-100'>
      <div className='container mx-auto md:py-24 py-6 flex flex-col gap-20'>
        <h1 className='md:text-4xl font-semibold text-center'>
            Donde estamos
        </h1>
        <div className='flex flex-row items-center justify-center gap-8'>
            <div className='w-1/2'>
             <Mapa/>   
            </div>
            <div className='w-1/2'>
                <div>
                    <h2>Telefono</h2>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2>Horario</h2>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2>Dirección</h2>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
