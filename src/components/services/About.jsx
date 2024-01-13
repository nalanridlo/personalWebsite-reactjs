import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>About Me</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
         
          <h1>
            <motion.b whileHover={{ color: "orange" }}>About</motion.b> Me
          </h1>
        </div>
        
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
       
        >
          
          <p>
          Hi, my name is Nalan Ridlo Fadhilah, usually called Nalan, born in Kediri on April 14, 2001.
I am highly interested in technology, particularly in web development. In this website, I want to share my experiences in learning and developing websites.
As a student at Universitas Brawijaya majoring in Informatics Engineering with a focus on front-end development, I have learned various web technologies and frameworks such as HTML, CSS, JavaScript, and React JS. I also enjoy exploring design and implementing it into my web projects. Through this website, I hope to show you who I am, what I do, and display some of the projects I have done. Additionally, you can connect with me through my social media or contact me.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          
        >
          <img src="../../../public/about_photo.png" alt="" />
          
        </motion.div>
        
  
      </motion.div>
    </motion.div>
  );
};

export default About;
