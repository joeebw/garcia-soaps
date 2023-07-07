import { BenefitType } from '@/shares/types'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/shares/types';
import { motion } from 'framer-motion';

// const childVariant = {
//   hidden: {opacity: 0, scale: 0.9},
//   visible: {opacity: 1, scale: 1}
// }

type Props = {
  item: BenefitType,
  setSelectedPage: (value: SelectedPage) => void;
}

const BenefitsItem = ({item, setSelectedPage}: Props) => {
  const {description, icon, title} = item;

  return (
    <motion.div 
      className='flex flex-col gap-4 border-2 rounded-md border-gray-100 px-6 py-16 text-center'
      // variants={childVariant}
    >

      <div className='flex justify-center'>
        <div className='border-2 rounded-full bg-primary-100 border-gray-100 p-2'>
          {icon}
        </div>
      </div>

      <div className='font-bold'>
        {title}
      </div>

      <div className='text-sm'>
        {description}
      </div>

      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
        onClick={() => setSelectedPage(SelectedPage.Contactanos)}
        href={SelectedPage.Contactanos}
      >
        Saber más
      </AnchorLink>

    </motion.div>
  )
}

export default BenefitsItem