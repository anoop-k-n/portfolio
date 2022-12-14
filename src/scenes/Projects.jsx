import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ name, title, desc ,hyper}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  console.log(projectTitle)
  return (
    <motion.div variants={projectVariant} className="relative border-2 rounded-md">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair"><a href={hyper}>{name}</a></p>
        <p className="mt-7">
            {desc}
        </p>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red">PROJECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">

        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-3" 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project name="Personal Portfolio" title="portfolio" desc="A responsive webpage designed using React and Tailwind CSS." hyper="https://github.com/anoop-k-n/portfolio"/>
          <Project name="Music Player" title="musicplayer" desc="A beautiful FOSS music player for playing local media on Android." hyper="https://github.com/anoop-k-n/MusicPlayer"/>
          <Project name="Satellite Imagery Analysis" title="satellite" desc="Satellite images are analysed using Machine Learning and road detection is performed." hyper="https://github.com/anoop-k-n/SatelliteImageryAnalysis"/>
          <Project name="IPv6 6LoWPAN Header Compression Implementation" title="headercompression" desc="The IPHC header compression mechanism was implemented and QoS factors were studied." hyper="https://github.com/anoop-k-n/6LoWPAN-Header-Compression"/>
          <Project name="AI enabled resource planner for agriculture" title="agri" desc="Using Machine Learning, it predicts the need for micro as well as macronutirents along with moisture content."/>
          <Project name="Digital Signature Algorithm Implementation" title="dsa" desc="DSA schemes such as Elgamal and RSA were implemented with MD5 and SHA256 security." />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;