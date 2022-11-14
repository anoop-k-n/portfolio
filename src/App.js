import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar"
import Dotgroup from "./scenes/Dotgroup"

function App() {
  const [selectedPage,setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1600px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true); 

  useEffect(() => {
    const handlescroll = () => {
      if (window.screenY === 0) setIsTopOfPage(true);
      else setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  },[])


  return (
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage= {isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <Dotgroup 
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
