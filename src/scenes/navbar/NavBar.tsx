import { SelectedPage } from "@/shares/types"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import Logo from '@/assets/Logo.png'
import Links from "@/scenes/navbar/Links"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useState } from "react"


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const navbarBackground = isTopOfPage ? "" : 'bg-primary-100 drop-shadow'

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <img src={Logo}/>
          {isAboveMediumScreens ?
          <div className={`${flexBetween} gap-14 text-sm`}>
            <Links 
              page="Inicio" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
            <Links 
              page="Beneficios" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
            <Links 
              page="Clases" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
            <Links 
              page="Contactanos" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
          </div> 
          :
          <button 
            className="rounded-full bg-secondary-500 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-white"/>
          </button>
          }
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && 
        <div
          className="fixed bg-primary-100 right-0 h-full w-[300px] z-40 drop-shadow-xl"
        >
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>
          <div className='ml-[33%] flex flex-col items-start gap-10 text-2xl'>
            <Links 
              page="Inicio" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
            <Links 
              page="Beneficios" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
            <Links 
              page="Clases" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
            <Links 
              page="Contactanos" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
          </div> 
        </div>
      }
    </nav>
  )
}

export default NavBar