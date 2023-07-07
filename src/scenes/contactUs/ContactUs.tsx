import Htext from "@/shares/Htext";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shares/types"
import { useForm } from "react-hook-form";
import ContactUsGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
  const {register, trigger, formState: {errors}} = useForm();
  const inputStyles = `w-full py-3 px-3 rounded-md bg-primary-300 text-white font-bold 
  placeholder:text-white placeholder:text-[0.8rem] focus:outline-none mt-5`

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id="contactanos" className="py-40">
      <motion.div 
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contactanos)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </Htext>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci rerum, eaque quia, unde hic minima ad doloribus nam distinctio tempore! Eveniet delectus provident velit deserunt impedit labore, quos aliquam.</p>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="basis-2/4">
            <form
              target="_blanck"
              onSubmit={onSubmit}
              action="https://formsubmit.co/0cb13160ae32eea469688ef4ed8ac445"
              method="POST"
            >
              <input 
                type="text" 
                placeholder="NOMBRE"
                className={inputStyles}
                {...register('name', {
                  required: true,
                  maxLength: 100
                })}
              />
              {errors.name && (
                <p className=" text-primary-500">
                  {errors.name.type === 'required' && 'Este campo es requerido'}
                  {errors.name.type === 'maxLength' && 'El maximo de caracteres es de 100'}
                </p>
              )}

              <input 
                type="email" 
                placeholder="EMAIL"
                className={inputStyles}
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
              {errors.email && (
                <p className=" text-primary-500">
                  {errors.email.type === 'required' && 'Este campo es requerido'}
                  {errors.email.type === 'pattern' && 'Invalido Email'}
                </p>
              )}

              <textarea
              rows={4}
              cols={50}
                placeholder="MENSAJE"
                className={inputStyles}
                {...register('message', {
                  required: true,
                  maxLength: 2000
                })}
              />
              {errors.message && (
                <p className=" text-primary-500">
                  {errors.message.type === 'required' && 'Este campo es requerido'}
                  {errors.message.type === 'maxLength' && 'Sobre pasaste el maximo de caracteres'}
                </p>
              )}

              <button 
                type="submit"
                className="mt-6 self-start rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
              >
                Enviar
              </button>

            </form>
          </div>

          <div className="flex md:justify-end w-full mt-16 md:mt-0 basis-2/4">
            <div className=" w-full md:w-5/6">
              <img src={ContactUsGraphic} alt="" className="w-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactUs