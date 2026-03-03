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
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-4">
      <div className="max-w-300 mx-auto px-8 max-md:px-4">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-4 gap-12 mb-8 max-lg:grid-cols-2 max-lg:gap-10 max-md:grid-cols-1 max-md:gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 font-[Poppins,sans-serif] text-2xl font-bold text-primary mb-4">
              <img
                src="/images/FusionTechLogo.jpg"
                alt="FusionTech"
                className="h-10 w-auto object-contain transition-all duration-250 hover:scale-[1.02] max-md:h-8"
              />
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-[65ch]">
              Leading IT solutions company specializing in innovative technology
              services and digital transformation.
            </p>
            <div className="flex gap-4">
              {[FaLinkedin, FaXTwitter, FaGithub, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-200 no-underline transition-all duration-250 hover:bg-primary hover:text-white hover:-translate-y-0.5">
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 text-lg">Services</h4>
            <ul className="list-none space-y-2">
              {[
                "Web Development",
                "Cloud Solutions",
                "Mobile Development",
                "Cybersecurity",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-slate-300 no-underline transition-colors duration-150 hover:text-accent">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4 text-lg">Company</h4>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 no-underline transition-colors duration-150 hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-300 no-underline transition-colors duration-150 hover:text-accent">
                  Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 no-underline transition-colors duration-150 hover:text-accent">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 no-underline transition-colors duration-150 hover:text-accent">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4 text-lg">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent w-4 h-4 shrink-0" />
                <span>info@fusiontech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-accent w-4 h-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent w-4 h-4 shrink-0" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex justify-between items-center flex-wrap gap-4 max-md:flex-col max-md:text-center max-md:gap-6">
            <p>&copy; 2025 FusionTech. All rights reserved.</p>
            <div className="flex gap-8 max-md:flex-col max-md:gap-3 max-sm:items-center">
              <Link
                to="/privacy-policy"
                className="text-slate-300 no-underline text-sm transition-colors duration-150 hover:text-primary">
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-slate-300 no-underline text-sm transition-colors duration-150 hover:text-primary">
                Terms of Service
              </Link>
              <a
                href="#"
                className="text-slate-300 no-underline text-sm transition-colors duration-150 hover:text-primary">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
