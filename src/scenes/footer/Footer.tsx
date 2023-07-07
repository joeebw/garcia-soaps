import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="flex flex-col md:flex-row md:gap-7 w-5/6 mx-auto">
        <div className="flex flex-col gap-5 basis-1/2">
          <img src={Logo} alt="" className='self-start'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime modi temporibus pariatur quae quis, nisi quas accusantium! Hic, dicta nemo? Totam harum doloremque natus laborum officiis nihil earum odit enim?</p>
          <p>Evogym allrigths reserved</p>
        </div>
        <div className="flex flex-col gap-5 mt-11 md:mt-0 basis-1/4">
          <p className='font-bold'>Links</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex flex-col gap-5 mt-11 md:mt-0 basis-1/4">
          <p className='font-bold'>Contactanos</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, illo!</p>
          <p>332-34353</p>
        </div>
      </div>
    </section>
  )
}

export default Footer