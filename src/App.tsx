import { useEffect, useState } from "react";
import NavBar from "@/scenes/navbar/NavBar"
import { SelectedPage } from "./shares/types";
import Home from "./scenes/home/Home";
import Benefits from "./scenes/benefits/Benefits";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Inicio);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Inicio);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, [])

  return (
      <div className="app bg-gray-20">
        <NavBar 
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage}
        />
        <Home
          setSelectedPage={setSelectedPage}
        />
        <Benefits
          setSelectedPage={setSelectedPage}
        />
      </div>
  )
}

export default App