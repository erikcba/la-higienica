import React from 'react'

const SubHero = () => {
    return (
        <section className='bg-zinc-100'>
            <div data-aos="fade-up" className='container mx-auto md:py-20 py-6 grid grid-cols-1 sm:grid-cols-3 '>
                <div className="flex flex-col items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={"#3aa6f9"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M19 3h-2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 17H5V5h2v2h10V5h2z"></path><path d="M11 14.09 8.71 11.8 7.3 13.21l3 3c.2.2.45.29.71.29s.51-.1.71-.29l5-5-1.41-1.41-4.29 4.29Z"></path></svg>
                    <h2 className="text-2xl font-semibold">
                        Experiencia
                    </h2>
                    <p className="text-stone-600 font-medium text-center text-md">
                        Más de 60 años trabajando en el rubro nos avalan
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={"#3aa6f9"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m19.1,7.8c-.38-.5-.97-.8-1.6-.8h-2.5v-1c0-1.1-.9-2-2-2H4c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2,0,1.65,1.35,3,3,3s3-1.35,3-3h4c0,1.65,1.35,3,3,3s3-1.35,3-3c1.1,0,2-.9,2-2v-3.67c0-.43-.14-.86-.4-1.2l-2.5-3.33Zm-1.6,1.2l1.5,2h-4v-2h2.5Zm-10.5,10c-.55,0-1-.45-1-1,0-.17.05-.35.13-.5.37-.63,1.36-.63,1.73,0,0,0,0,0,0,0,.09.15.13.32.13.49,0,.55-.45,1-1,1Zm2.23-3s-.05-.05-.08-.07c-.06-.06-.12-.11-.17-.16-.12-.11-.25-.21-.38-.29-.07-.05-.14-.09-.22-.13-.15-.08-.3-.14-.45-.19-.07-.02-.14-.05-.21-.07-.23-.06-.47-.09-.72-.09s-.49.04-.72.09c-.07.02-.14.05-.21.07-.16.05-.31.11-.45.19-.07.04-.15.08-.22.13-.13.09-.26.18-.38.29-.06.05-.12.1-.18.16-.02.03-.05.04-.08.07h-.77V6h9s0,2,0,2v8h-3.77Zm7.77,3c-.55,0-1-.45-1-1,0-.17.05-.35.13-.5.37-.63,1.36-.63,1.73,0,0,0,0,0,0,0,.09.15.13.32.13.49,0,.55-.45,1-1,1Zm3-3h-.77s-.05-.05-.08-.07c-.06-.06-.12-.11-.17-.16-.12-.11-.25-.21-.38-.29-.07-.05-.14-.09-.22-.13-.15-.08-.3-.14-.45-.19-.07-.02-.14-.05-.21-.07-.23-.06-.47-.09-.72-.09s-.47.04-.7.09c-.06.01-.12.03-.18.05-.18.06-.36.13-.52.22-.04.02-.08.04-.12.06-.17.1-.33.21-.48.35v-2.76h5v3Z"></path></svg>
                    <h2 className="text-2xl font-semibold">
                        Equipos
                    </h2>
                    <p className="text-stone-600 font-medium text-center text-md">
                        Contamos con la mejor calidad de equipos de trabajo para brindar un excelente servicio
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={"#3aa6f9"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20.71 6.04a.99.99 0 0 0-.9.27l-3.18 3.18-2.12-2.12 3.18-3.18a.98.98 0 0 0 .27-.9c-.07-.33-.29-.6-.6-.73A7.47 7.47 0 0 0 9.2 4.19a7.49 7.49 0 0 0-1.86 7.52L2.3 16.75c-.19.19-.29.44-.29.71s.11.52.29.71l3.54 3.54c.19.19.44.29.71.29s.52-.11.71-.29l5.04-5.04c2.64.82 5.53.12 7.52-1.86a7.47 7.47 0 0 0 1.63-8.16c-.13-.31-.4-.53-.73-.6Zm-2.32 7.34a5.51 5.51 0 0 1-5.98 1.2c-.37-.15-.8-.07-1.09.22l-4.78 4.78-2.12-2.12 4.78-4.78c.29-.29.37-.71.22-1.09a5.47 5.47 0 0 1 1.2-5.98 5.5 5.5 0 0 1 4.41-1.59l-2.65 2.65a.996.996 0 0 0 0 1.41l3.54 3.54c.19.19.44.29.71.29s.52-.11.71-.29l2.65-2.65c.16 1.61-.4 3.23-1.59 4.42Z"></path></svg>
                    <h2 className="text-2xl font-semibold">
                        Profesionales
                    </h2>
                    <p className="text-stone-600 font-medium text-center text-md">
                        Personal capacitado y con amplia experiencia
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SubHero