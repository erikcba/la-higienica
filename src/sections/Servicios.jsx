import ServiciosCard from "../components/ServiciosCard"
import SubHero from "./SubHero"

export const Servicios = () => {
    return (
        <section id='servicios'>
            <div className='container mx-auto md:py-24 py-12 flex flex-col gap-10 sm:gap-20'>
                <h1 className='text-2xl sm:text-4xl font-semibold text-center'>
                    Nuestros servicios
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:px-0 px-4">
                    <ServiciosCard numero={"1."} titulo={"Desagote de pozo séptico"} descripcion={"Desagote y mantenimiento seguro de pozos sépticos para prevenir derrames y malos olores."} />
                    <ServiciosCard numero={"2."} titulo={"Desagote de cámara séptica y biodigestores"} descripcion={"Limpieza profesional de cámaras sépticas y biodigestores, respetando normas ambientales."} />
                    <ServiciosCard numero={"3."} titulo={"Tratamientos químicos para pozos sépticos"} descripcion={"Aplicación de productos específicos que mejoran el funcionamiento y alargan la vida útil del pozo."}/>
                    <ServiciosCard numero={"4."} titulo={"Desagote y limpieza de piletas decantadoras industriales"} descripcion={"Servicio especializado para industrias que necesitan mantener sus sistemas de decantación operativos."}/>
                    <ServiciosCard numero={"5."} titulo={"Destape de cloaca"} descripcion={"Eliminación de obstrucciones en cloacas domiciliarias o industriales con maquinaria adecuada."}/>
                    <ServiciosCard numero={"6."} titulo={"Destape de cañería pluvial"} descripcion={"Limpieza de cañerías pluviales para evitar desbordes y asegurar el buen drenaje del agua de lluvia."}/>
                </div>
            </div>
            <SubHero />
        </section>
    )
}

export default Servicios