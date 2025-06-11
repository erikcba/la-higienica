import React from 'react'
import Mapa from '../components/Mapa'
import PhoneIcon from '../components/icons/PhoneIcon'
import LocationIcon from '../components/icons/LocationIcon'
import ClockIcon from '../components/icons/ClockIcon'
import Mail from '../components/icons/Mail'

const Contacto = () => {

    return (
        <section id='contacto' className='bg-zinc-100'>
            <div className='container mx-auto md:py-20 py-12 flex flex-col gap-10 sm:gap-20 px-4 sm:px-0'>
                <h1 className='text-2xl sm:text-4xl font-semibold text-center'>
                    Contacto
                </h1>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-12'>
                    <div className='w-full sm:w-1/2'>
                        <Mapa />
                    </div>
                    <div className='w-full sm:w-1/2 flex flex-col items-start justify-around gap-8'>
                        <div className='flex flex-row items-center justify-start gap-4'>
                            <div className='self-start'>
                                <PhoneIcon />
                            </div>
                            <div>
                                <h2 className='flex flex-row gap-2 items-center justify-start font-semibold text-lg'>
                                    Telefono
                                </h2>
                                <p className='text-zinc-800'>+54 9 261 5906698</p>
                                <p className='text-zinc-800'>+54 9 261 4151367</p>
                                <p className='text-zinc-800'>+54 9 261 4913229 (fijo)</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row items-center justify-start gap-4'>
                                <div className='self-start'>
                                    <ClockIcon />
                                </div>
                                <div>
                                    <h2 className='flex flex-row gap-2 items-center justify-start font-semibold text-lg'>
                                        Horarios
                                    </h2>
                                    <p className='text-zinc-800'>Lunes a Viernes 8:00 a 18:00</p>
                                    <p className='text-zinc-800'>Sábados 8:00 a 14:00</p>
                                    <p className='text-zinc-800'>Domingos Cerrado</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row items-center justify-start gap-4'>
                                <div className='self-start'>
                                    <LocationIcon />
                                </div>
                                <div>
                                    <h2 className='flex flex-row gap-2 items-center justify-start font-semibold text-lg'>
                                        Direccion
                                    </h2>
                                    <p className='text-zinc-800'>Benjamin Argumedo 3461, La Primavera, Guaymallén, Mendoza. </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row items-center justify-start gap-4'>
                                <div className='self-start'>
                                    <Mail/>
                                </div>
                                <div>
                                    <h2 className='flex flex-row gap-2 items-center justify-start font-semibold text-lg'>
                                        Email
                                    </h2>
                                    <p className='text-zinc-800'>lahigienicavidal@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto
