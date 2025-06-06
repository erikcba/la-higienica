import React from 'react'
import ContactForm from '../components/ContactForm'

const Footer = () => {
    return (
        <footer className='bg-blue-950 py-12 sm:py-20'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 px-4 sm:px-0'>
                    <div className='flex flex-col items-center justify-center'>
                        <a href="#" className="flex flex-col group items-center justify-center">
                            <h2 className="text-lg text-stone-50 group-hover:text-white  font-semibold">Atmosféricos</h2>
                            <h2 className="text-4xl text-stone-50 group-hover:text-white  font-semibold">La Higienica</h2>
                        </a>
                        <p className='text-gray-100 w-1/2 text-center mt-2'>
                            Soluciones profesionales para el tratamiento de aguas negras
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <ContactForm/>
                    </div>
                    <div className='col-span-1 sm:col-span-2 flex flex-col items-center justify-center mt-6 gap-1'>
                        <p className='text-gray-100 text-center text-sm'>© 2025 La Higiénica. Todos los derechos reservados</p>
                        <p className='text-gray-100 text-center text-sm'>Hecho por <a className='font-semibold' href="https://www.cor-soft.com/" target='_blank' rel='noreferrer' >Cor-soft</a></p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer