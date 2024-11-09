import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "About me",
    path: "/about-me",
  },

  {
    title: "Contacts",
    path: "/contacts",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
];

const Footer = () => {
  return (
    <footer className="footer py-5  bg-black/50  border-t border-gray-700">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-center  gap-3">
          {navLinks.map((link, index) => (
          <Link to={link.path} key={index} className="text-center">{link.title}</Link>
          ))}
        </div>

        <div className="text-zinc-500 mt-14 sm:m-0 text-center">
         
          <p>© {new Date().getFullYear()} - All rights reserved by Md Rafiul Islam</p>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
