import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "BMI-Calculator",
    img: "/src/assets/img/bmiCalculator.png",
    desc: "The project to develop a BMI Calculator application is an activity to create an application that can be used to calculate a user's Body Mass Index (BMI). This application aims to assist users in determining whether their body weight is ideal or not, based on the BMI value generated from the calculation of height and weight. In the application development stage, the developer will use various programming languages and technologies such as HTML, CSS, and Javascript.",
    link: "https://nalan-bmi-calculator.netlify.app/",
  },
  {
    id: 2,
    title: "List Movie App",
    img: "/src/assets/img/appMove.png",
    desc: "The project to develop a List Movie application using React JS is an activity to create an application that allows users to search, display, and select available movies. This application will use React JS technology as the main framework in its development. ",
    link: "https://appmov.netlify.app/",
  },
  {
    id: 3,
    title: "bullying App",
    img: "/src/assets/img/bullyingApp.png",
    desc: "Buddy is an educational platform designed to help students and educators in increasing awareness and concern about bullying cases in the Indonesian education system",
    link: "https://fe18-buddy.netlify.app/",
  },
  {
    id: 4,
    title: "Simple Shop App",
    img: "/src/assets/img/simpleShop.png",
    desc: "Simple Shop App is a website where we conduct transactions. In this case, it is a transaction at a restaurant where we can see the list of available restaurimore. We can also filter based on category, price, and 'open now'. We can view the details of each restaurant.",
    link: "https://restaurant-simpleshop.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
