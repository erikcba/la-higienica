import ContactoWsp from "./ContactoWsp"
import WhatsappIcon from "./WhatsAppIcon"

const Navbar = () => {
    return (
        <nav className="bg-zinc-100 h-24 sticky top-0 shadow-md z-50">
            <div className="container mx-auto flex flex-row items-center justify-between h-full px-4">
                <a href="#" className="flex flex-col group items-center justify-center h-full ">
                    <h2 className="text-md sm:text-lg text-stone-900 group-hover:text-blue-700 transition-all ease-in-out font-semibold">Atmosféricos</h2>
                    <h2 className="text-xl sm:text-3xl text-stone-900 group-hover:text-blue-700 transition-all ease-in-out font-semibold">La Higienica</h2>
                </a>
                <ul className="hidden sm:flex flex-row items-center justify-center h-full gap-4">
                    <a className="text-stone-900 font-semibold hover:text-blue-700 transition-all ease-in-out" href="#servicios">
                        Servicios
                    </a>
                    <a className="text-stone-900 font-semibold hover:text-blue-700 transition-all ease-in-out" href="#somos">
                        Nosotros
                    </a>
                    <a className="text-stone-900 font-semibold hover:text-blue-700 transition-all ease-in-out" href="#contacto">
                        Contacto
                    </a>
                </ul>
                <ContactoWsp ocultar={"sm:block hidden"} />
            </div>
        </nav>
    )
}

export default Navbar