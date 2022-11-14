import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar"
import Dotgroup from "./scenes/Dotgroup"
import Landing from "./scenes/Landing"
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Contact from "./scenes/Contact";
import { motion } from "framer-motion";

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

      <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
      </div >

      <div>
        <Projects />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
