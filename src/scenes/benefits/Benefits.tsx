import { SelectedPage } from "@/shares/types";
import { 
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/20/solid";
import BenefitsItem from "./BenefitsItem";
import { motion } from "framer-motion";
import Htext from "@/shares/Htext";
import { BenefitType } from "@/shares/types";
import benefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButtons from "@/shares/ActionButtons";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "Lorem ipsum, dolor sit amet consectetur.",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi quos repellendus corrupti ut similique suscipit repudiandae sunt, blanditiis deserunt non aperiam recusandae doloremque?"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "Lorem ipsum, dolor sit amet consectetur.",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi quos repellendus corrupti ut similique suscipit repudiandae sunt, blanditiis deserunt non aperiam recusandae doloremque?"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Lorem ipsum, dolor sit amet consectetur.",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi quos repellendus corrupti ut similique suscipit repudiandae sunt, blanditiis deserunt non aperiam recusandae doloremque?"
  }
];

// Settings for motion frame
const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
      id="beneficios" 
      className="min-h-full w-5/6 mx-auto py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Beneficios)}
      >
        <motion.div 
        className="md:my-5 md:w-3/5"
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}
        transition={{duration:0.5}}
        variants={{hidden: {opacity: 0, x: -250}, visible: {opacity: 1, x: 0}}}
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo pariatur autem impedit sequi. Aliquid culpa sunt eaque quis aliquam corrupti enim veniam voluptatem reprehenderit.
          </p>
        </motion.div>

        <motion.div 
        className="flex flex-col md:flex-row gap-6 mt-14"
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount: 0.5}}
        variants={container}
        >
          {benefits.map(item => (
            <BenefitsItem key={item.title} item={item} setSelectedPage={setSelectedPage}/>
          ))}
        </motion.div>
        
        <div className="flex flex-col md:flex-row mx-auto pt-20">
          <div className="flex justify-center basis-[50%]">
            <div className="md:w-5/6">
              <img src={benefitsPageGraphic} alt=""  className="w-full"/>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center basis-[50%]">
            <div className="md:w-4/6">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <motion.div 
                    className="before:absolute before:bottom-2/3 before:-left-24 before:content-abstractwaves -z-30"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration:0.5}}
                    variants={{hidden: {opacity: 0, x: -250}, visible: {opacity: 1, x: 0}}}
                  >
                    <Htext>
                      MILLIONS OF HAPPY MEMBERS GETTIN <span className="text-primary-500">FIT</span>
                    </Htext>
                  </motion.div>
                </div>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{delay:0.2 ,duration:0.5}}
                  variants={{hidden: {opacity: 0, x: -250}, visible: {opacity: 1, x: 0}}}
                >
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus illo, nulla dolore iusto, optio incidunt debitis quisquam, eius tempore eum pariatur officiis nobis consequatur nesciunt commodi in laboriosam dolor labore.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est natus deleniti asperiores cumque magnam!</p>  
                </motion.div>
              </div>
              <div className="relative">
                <div className="mt-14 before:absolute before:left-2/4 before:-top-8 before:-z-30 before:content-sparkles">
                  <ActionButtons setSelectedPage={setSelectedPage}>Join Now</ActionButtons>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
    </section>
  )
}

export default Benefits