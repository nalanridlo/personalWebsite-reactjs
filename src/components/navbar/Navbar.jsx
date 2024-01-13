import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nalan's Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/" target="_blank">
            <img src="./../../assets/img/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/nalan-ridlo-fadhilah-405293298/" target="_blank">
            <img src="./../../assets/img/LinkedIn_icon.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
