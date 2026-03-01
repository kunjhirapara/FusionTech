import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/FusionTechLogo.jpg" alt="FusionTech" />
            </div>
            <p className="footer-description">
              Leading IT solutions company specializing in innovative technology
              services and digital transformation.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link">
                <FaXTwitter />
              </a>
              <a href="#" className="social-link">
                <FaGithub />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services">Web Development</Link>
              </li>
              <li>
                <Link to="/services">Cloud Solutions</Link>
              </li>
              <li>
                <Link to="/services">Mobile Development</Link>
              </li>
              <li>
                <Link to="/services">Cybersecurity</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <span>info@fusiontech.com</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 FusionTech. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
