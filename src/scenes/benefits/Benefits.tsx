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


      </motion.div>
    </section>
  )
}

export default Benefits