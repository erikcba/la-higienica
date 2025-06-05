import React from 'react'
import img1 from "../assets/nosotros1.jpeg"
import img2 from "../assets/nosotros2.jpeg"
import StatsCard from '../components/StatsCard'
import Check from '../components/icons/Check'
import ContactoWsp from '../components/ContactoWsp'

const Somos = () => {
    return (
        <section id='somos'>
            <div className='container mx-auto md:py-24 py-6 flex flex-col gap-20'>
                <div className='flex flex-col items-center justify-center gap-24'>
                    <h1 className='md:text-4xl font-semibold text-center'>
                        Quienes somos
                    </h1>
                    <div className='flex flex-row gap-10'>
                        <div className='w-full sm:w-1/2 flex flex-col gap-8 items-center justify-center'>
                            <div className='flex flex-col items-start justify-center gap-4'>
                                <h1 className='text-2xl font-semibold '>
                                    Nuestra historia
                                </h1>
                                <p className='text-lg'>
                                    Somos una empresa mendocina con más de 60 años al servicio de nuestros clientes resolviendo problemas como desagote de pozo séptico, cámara séptica y tratamientos quimicos para devolverle la permeabilidad al pozo. Destape de cañeria tanto cloacal como pluvial.
                                </p>

                            </div>
                            <div className='flex flex-col items-start justify-center gap-4'>
                                <h1 className='text-2xl font-semibold '>
                                    Nuestro compromiso
                                </h1>
                                <p className='text-lg'>
                                    Nos especializamos en el cuidado del medio ambiente y la salud pública, ofreciendo servicios profesionales que cumplen con todas las normativas sanitarias. Nuestro equipo de trabajo está altamente capacitado y cuenta con la experiencia necesaria para resolver cualquier situación de emergencia. Nuestro compromiso es garantizar el mejor servicio posible a un precio competitivo.
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-6 w-full'>
                                <StatsCard numero={"60+"} texto={"Años de experiencia"} textColor={"text-green-700"} color={"bg-green-100"} />
                                <StatsCard numero={"120km"} texto={"Area de cobertura "} textColor={"text-orange-700"} color={"bg-orange-100"} />
                                <StatsCard numero={"100%"} texto={"Trabajos garantizados"} textColor={"text-blue-700"} color={"bg-blue-100"} />
                                <StatsCard numero={"1000+"} texto={"Clientes satisfechos"} textColor={"text-fuchsia-700"} color={"bg-fuchsia-100"} />
                            </div>
                        </div>
                        <div className='hidden sm:w-1/2 rounded-md overflow-hidden flex justify-center items-center'>
                            <img className='rounded-md' src={img1} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-row gap-10'>
                        <div className='hidden sm:w-1/2 rounded-md overflow-hidden sm:flex justify-center items-center'>
                            <img className='rounded-md h-11/12' src={img2} alt="" />
                        </div>
                        <div className='w-full sm:w-1/2 flex justify-start items-center'>
                            <div className='flex flex-col items-start justify-center gap-4'>
                                <h1 className='text-2xl font-semibold'>
                                    A quienes nos dirigimos
                                </h1>
                                <ul className='self-start'>
                                    <li className="flex flex-row gap-2 items-center justify-start py-1">
                                        <Check />
                                        <p className='text-xl text-gray-800' >
                                            Domicilios particulares
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center justify-start py-1">
                                        <Check />
                                        <p className='text-xl text-gray-800' >
                                            Industria vitivinicola
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center justify-start py-1">
                                        <Check />
                                        <p className='text-xl text-gray-800' >
                                            Industria olivicola
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center justify-start py-1">
                                        <Check />
                                        <p className='text-xl text-gray-800' >
                                            Industria alimenticia
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center justify-start py-1">
                                        <Check />
                                        <p className='text-xl text-gray-800' >
                                            Frigoríficos
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center justify-start py-1">
                                        <Check />
                                        <p className='text-xl text-gray-800' >
                                            Petroleras
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center justify-start py-1">
                                        <Check />
                                        <p className='text-xl text-gray-800' >
                                            Mineras
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center justify-start py-1">
                                        <Check />
                                        <p className='text-xl text-gray-800' >
                                            Empresas que desechen residuos industriales
                                        </p>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <ContactoWsp />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Somos
