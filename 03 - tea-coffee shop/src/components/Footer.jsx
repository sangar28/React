
import { FiCoffee } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="logo">
          <p>
            <FiCoffee />
          </p>
          <p className="font">Cafe</p>
        </div>
        <div className="contact">
          <FaFacebook />
          <RiInstagramFill />
          <IoLogoWhatsapp />
        </div>
      </div>
    </section>
  );
};

export default Footer;
