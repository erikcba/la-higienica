import React from 'react'
import WhatsappIcon from '../components/WhatsAppIcon'
import Chevron from '../components/icons/Chevron'
import ContactoWsp from '../components/ContactoWsp'

const Hero = () => {
    return (
        <section className='hero-bg h-[60vh] relative'>
            <div className='h-full w-full absolute inset-0 bg-blue-950/60 backdrop-blur-xs z-10'></div>
            <div className='container mx-auto h-full px-4 sm:px-0'>
                <div className='w-full sm:w-1/2 h-full flex flex-col items-start justify-center gap-5 mx-auto'>
                    <h1 className='relative z-20 text-stone-50 sm:text-7xl text-3xl sm:leading-20 font-bold'>
                        Desagotes y <br /> desobstrucciones
                    </h1>
                    <span className='z-20 text-left text-stone-100 text-xl font-medium'>
                        Más de 60 años en el rubro nos avalan. Atención a particulares e Industrias.
                    </span>
                    <div className='flex flex-col sm:flex-row gap-4 z-20 justify-center items-center'>
                        <ContactoWsp />
                        <a className='z-20 border-2 border-stone-50 text-stone-50 text-xl font-semibold rounded-lg px-3 py-2 hover:bg-stone-50 hover:text-zinc-800 transition-all ease-in-out flex flex-row items-center gap-1' href="#servicios">
                            Servicios
                            <Chevron />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero