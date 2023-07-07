import Htext from "@/shares/Htext"
import { ClasesType, SelectedPage } from "@/shares/types";
import { motion } from "framer-motion";
import Clase from "./Clase";
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';

const clasesArray: ClasesType[] = [
  {
    image: image1,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ad, suscipit asperiores possimus sit maiores pariatur voluptatum id qui laborum laboriosam consequatur architecto eos ullam.',
    title: 'This is a title1'
  },
  {
    image: image2,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ad, suscipit asperiores possimus sit maiores pariatur voluptatum id qui laborum laboriosam consequatur architecto eos ullam.',
    title: 'This is a title2'
  },
  {
    image: image3,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ad, suscipit asperiores possimus sit maiores pariatur voluptatum id qui laborum laboriosam consequatur architecto eos ullam.',
    title: 'This is a title3'
  },
  {
    image: image4,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ad, suscipit asperiores possimus sit maiores pariatur voluptatum id qui laborum laboriosam consequatur architecto eos ullam.',
    title: 'This is a title4'
  },
  {
    image: image5,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ad, suscipit asperiores possimus sit maiores pariatur voluptatum id qui laborum laboriosam consequatur architecto eos ullam.',
    title: 'This is a title5'
  },
  {
    image: image6,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ad, suscipit asperiores possimus sit maiores pariatur voluptatum id qui laborum laboriosam consequatur architecto eos ullam.',
    title: 'This is a title6'
  }
]


type props = {
  setSelectedPage: (value:SelectedPage) => void;
}

const Clases = ({setSelectedPage}:props) => {
  return (
    <section 
      id="clases" 
      className="w-full  bg-primary-100 py-40"
    > 
      <motion.div 
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Clases)}
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
          <div>
            <Htext>NUESTRAS CLASES</Htext>
          </div>
          <div className="mt-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt animi fuga, odio amet vitae nemo exercitationem eum commodi dolorem velit a vel blanditiis, itaque maxime sapiente id molestias debitis!</p>
          </div>
        </motion.div>
      </motion.div>
      <div className="mt-14 w-full h-[353px] overflow-y-hidden overflow-x-scroll">
        <ul className="flex mx-8 gap-9 w-[2400px]">
          {clasesArray.map((clase) => 
            <Clase clase={clase}/>)}
        </ul>
      </div>
    </section>
  )
}

export default Clases