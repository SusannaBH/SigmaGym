import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from './styles.module.css'

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Mensaje enviado con éxito!", {
        position: "top-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true,
        pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
      });
    } catch (error) {
      toast.error("Error al enviar el mensage.", {
        position: "top-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true,
        pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
      });
    }
  };

  return (
    <div className={Styles.structure}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <label className={Styles.label}>Email:</label>
        <input className={Styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label className={Styles.label}>Asunto:</label>
        <input className={Styles.input} type="text" name="subject" value={formData.subject} onChange={handleChange} required />

        <label className={Styles.label}>Mensaje:</label>
        <textarea className={Styles.input} name="message" value={formData.message} onChange={handleChange} required />

        <button className={Styles.buttonSend} type="submit">Enviar</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;