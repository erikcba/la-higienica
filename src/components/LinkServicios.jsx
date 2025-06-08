import React from 'react'

const LinkServicios = ({message}) => {

    const phone = "5492615906698"
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`

    return (
        <div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className='font-medium flex flex-row items-center justify-center gap-1 text-blue-800 hover:scale-110 transition-all duration-300'>
                Solicitar <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#193cb8"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path></svg>
            </a>
        </div>
    )
}

export default LinkServicios