import React from 'react'
import WhatsappIcon from '../components/WhatsAppIcon'

const Hero = () => {
    return (
        <section className='hero-bg h-[60vh] relative'>
            <div className='h-full w-full absolute inset-0 bg-blue-950/60 backdrop-blur-xs z-10'></div>
            <div  className='container mx-auto h-full '>
                <div className='w-1/2 h-full flex flex-col items-start justify-center gap-5 mx-auto'>
                    <h1 className='relative z-20 text-stone-50 md:text-7xl text-4xl leading-20 font-bold'>
                        Desagotes y <br /> desobstrucciones
                    </h1>
                    <span className='z-20 text-left text-stone-100 text-xl font-medium'>
                        Más de 60 años en el rubro nos avalan. Atención a particulares e Industrias. 
                    </span>
                    <div className='flex flex-row gap-4 z-20 justify-center items-center'>
                        <a className='z-20 bg-green-500 border-2 border-green-500 text-stone-50 text-xl font-semibold rounded-lg px-3 py-2 flex flex-row items-center gap-1 hover:bg-green-400 hover:border-green-400 transition-all ease-in-out' href="whatsapp">
                             <WhatsappIcon/>
                              Contactar
                        </a>
                        <a className='z-20 border-2 border-stone-50 text-stone-50 text-xl font-semibold rounded-lg px-3 py-2 hover:bg-stone-50 hover:text-zinc-800 transition-all ease-in-out ' href="#servicios">Servicios</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero