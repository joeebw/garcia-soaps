import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shares/types";
import ActionButton from "@/shares/ActionButtons";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value:SelectedPage) => void;
}


const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section id="inicio"  className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div 
        className="flex flex-col md:flex-row mx-auto justify-center items-center mt-16 md:mt-32 w-5/6 md:h-4/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Inicio)}
      >
        {/* Heading */}
        <motion.div 
          className="relative flex flex-col gap-8 md:w-1/2 z-30"
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration:0.5}}
          variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
        >
          <div className="before:absolute before:-top-20 before:-left-20 before:-z-30 md:before:content-evolvetext">
            <img src={HomePageText} alt=""/>
          </div>
          <div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus vitae nobis iure non repellat natus architecto error similique blanditiis.</p>
          </div>
          <motion.div 
            className="flex gap-5 items-center"
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contactanos
            </ActionButton >
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
              onClick={() => setSelectedPage(SelectedPage.Contactanos)}
              href={SelectedPage.Contactanos}
            >
              Saber más
            </AnchorLink>
          </motion.div>
          
        </motion.div>

        <div className="flex justify-center md:justify-end h-full md:w-1/2 z-30">
          <div className="h-full">
            <img src={HomePageGraphic} alt="" className="h-full" />
          </div>
        </div>
      </motion.div>

      {isAboveMediumScreens && 
      <div className="h-[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6 flex items-center justify-center gap-52">
          <img src={SponsorForbes} alt=""/>
          <img src={SponsorFortune} alt=""/>
          <img src={SponsorRedBull} alt=""/>
        </div>
      </div>
      }
    </section>
  )
}

export default Home