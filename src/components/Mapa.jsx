const Mapa = () => {
  return (
    <div className="w-full h-[450px]">
      <iframe
        title="Ubicación Mendoza"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.383616814647!2d-68.6750172260019!3d-32.92974284174769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13!3m3!1m2!1s0x967e125198b9981f%3A0x80f7720016bea18!2sBenjam%C3%ADn%20Argumedo%203461%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1749068135663!5m2!1ses!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mapa;
