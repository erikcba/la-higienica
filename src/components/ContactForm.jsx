import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mwpbpbpk");

  if (state.succeeded) {
    return <p className='text-gray-50 font-semibold mx-auto my-auto'>Gracias por tu consulta. Te responderemos pronto.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full bg-zinc-100 rounded-md p-6'>
      <h1 className='text-2xl text-gray-700 font-semibold mb-2'>
        Envianos tu consulta
      </h1>
      <div className='flex flex-col sm:flex-row items-center justify-center w-full gap-4'>
        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
          <label className='text-gray-700 font-medium' htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className='border border-sky-300 rounded-md p-2 text-gray-700 focus:outline-offset-4 focus:outline-sky-500'
          />
          <ValidationError
            prefix="Nombre"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
          <label className='text-gray-700 font-medium' htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="tel"
            pattern="[0-9]+"
            name="phone"
            required
            className='border border-sky-300 rounded-md p-2 text-gray-700 focus:outline-offset-4 focus:outline-sky-500'
          />
          <ValidationError
            prefix="Teléfono"
            field="phone"
            errors={state.errors}
          />
        </div>
      </div>

      <label className='text-gray-700 font-medium' htmlFor="message">Consulta</label>
      <textarea
        id="message"
        name="message"
        required
        className='border border-sky-300 rounded-md p-2 text-gray-700 focus:outline-offset-4 focus:outline-sky-500'
      />
      <ValidationError
        prefix="Consulta"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting} className='bg-sky-600 text-white font-semibold rounded-md p-2 hover:cursor-pointer transition-all ease-in-out hover:bg-sky-400'>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
