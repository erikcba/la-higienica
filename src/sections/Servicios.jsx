import ServiciosCard from "../components/ServiciosCard"
import SubHero from "./SubHero"

export const Servicios = () => {
    return (
        <section id='servicios'>
            <SubHero />
            <div className='container mx-auto md:py-24 py-6 flex flex-col gap-20'>
                <h1 className='md:text-4xl font-semibold text-center'>
                    Nuestros servicios
                </h1>
                <div className="grid grid-cols-3 gap-10">
                    <ServiciosCard titulo={"Desagote de pozo séptico"} descripcion={"Vaciado y mantenimiento seguro de pozos sépticos para prevenir desbordes y malos olores."} />
                    <ServiciosCard titulo={"Desagote de cámara séptica y biodigestores"} descripcion={"Limpieza profesional de cámaras sépticas y biodigestores, respetando normas ambientales."} />
                    <ServiciosCard titulo={"Tratamientos químicos para pozos sépticos"} descripcion={"Aplicación de productos específicos que mejoran el funcionamiento y reducen obstrucciones."}/>
                    <ServiciosCard titulo={"Desagote y limpieza de piletas decantadoras industriales"} descripcion={"Servicio especializado para industrias que necesitan mantener sus sistemas de decantación operativos."}/>
                    <ServiciosCard titulo={"Destape de cloaca"} descripcion={"Eliminación de obstrucciones en cloacas domiciliarias o industriales con maquinaria adecuada."}/>
                    <ServiciosCard titulo={"Destape de cañería pluvial"} descripcion={"Limpieza de cañerías pluviales para evitar anegamientos y asegurar el buen drenaje del agua de lluvia."}/>
                </div>
            </div>
        </section>
    )
}

export default Servicios