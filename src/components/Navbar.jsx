
const Navbar = () => {
    return (
        <nav className="bg-zinc-100 h-24 sticky top-0 shadow-md z-50">
            <div className="container mx-auto flex flex-row items-center justify-between h-full px-4">
                <a href="#" className="flex flex-col group items-center justify-center h-full ">
                    <h2 className="text-lg text-stone-900 group-hover:text-blue-800  font-semibold">Atmosféricos</h2>
                    <h2 className="text-3xl text-stone-900 group-hover:text-blue-800  font-semibold">La Higienica</h2>
                </a>
                <ul className="flex flex-row items-center justify-center h-full gap-4">
                    <a className="text-stone-900 font-semibold hover:text-blue-700 transition-all ease-in-out" href="#servicios">
                        Servicios
                    </a>
                    <a className="text-stone-900 font-semibold hover:text-blue-700 transition-all ease-in-out" href="#nosotros">
                        Nosotros
                    </a>
                    <a className="text-stone-900 font-semibold hover:text-blue-700 transition-all ease-in-out" href="#contacto">
                        Contacto
                    </a>
                </ul>
                <a className="bg-green-500 text-stone-50 text-xl font-semibold rounded-lg px-3 py-2" href="whatsapp">
                    Contactate
                </a>
            </div>
        </nav>
    )
}

export default Navbar