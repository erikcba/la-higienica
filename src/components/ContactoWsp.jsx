import React from 'react'
import WhatsappIcon from '../components/WhatsAppIcon'

const ContactoWsp = ({ocultar}) => {
    const phone = "5492615906698"
    const message = "Hola, solicitar sus servicios";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;
    return (
        <a href={whatsappLink} target='_blank' rel='noreferrer' className="bg-green-500 text-stone-50 text-lg sm:text-xl font-semibold rounded-lg px-3 py-2 flex flex-row items-center gap-1 hover:bg-green-400 transition-all ease-in-out ">
            <p className={`${ocultar}`} >Contactar</p> 
            <WhatsappIcon />
        </a>
    )
}

export default ContactoWsp