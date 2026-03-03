import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projectData from "../data/projects.json";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaCloud,
  FaChartLine,
  FaLaptopCode,
  FaFolderOpen,
  FaEye,
  FaExternalLinkAlt,
  FaSearch,
  FaPaperPlane,
  FaCogs,
  FaQuoteLeft,
  FaUser,
  FaPhone,
  FaImage,
  FaClock,
  FaUsers,
  FaList,
  FaCheck,
} from "react-icons/fa";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const previousFocusRef = useRef(null);

  const projects = Object.values(projectData);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  const openModal = (project) => {
    previousFocusRef.current = document.activeElement;
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
    setTimeout(() => previousFocusRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!selectedProject) return;
    const modal = document.getElementById("projectModal");
    if (!modal) return;
    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableEls = Array.from(modal.querySelectorAll(focusableSelectors));
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];
    first?.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const getProjectIcon = (category) => {
    const iconMap = {
      ecommerce: FaShoppingCart,
      mobile: FaMobileAlt,
      cloud: FaCloud,
      analytics: FaChartLine,
      web: FaLaptopCode,
    };
    const Icon = iconMap[category] || FaFolderOpen;
    return <Icon />;
  };

  const filters = [
    { val: "all", label: "All Projects" },
    { val: "web", label: "Web Development" },
    { val: "mobile", label: "Mobile Apps" },
    { val: "cloud", label: "Cloud Solutions" },
    { val: "ecommerce", label: "E-commerce" },
    { val: "analytics", label: "Data Analytics" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="pt-30 pb-20 max-md:pt-24 max-md:pb-15 max-sm:pt-22 max-sm:pb-12 bg-slate-900 bg-grid-pattern text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.22)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="relative z-2" data-aos="fade-up">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 text-white max-md:text-[2rem] max-sm:text-[1.75rem]">
              Our Portfolio
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Showcasing successful projects that drive business growth
            </p>
            <nav className="text-sm opacity-75">
              <Link
                to="/"
                className="text-white no-underline transition-opacity duration-150 hover:opacity-100">
                Home
              </Link>{" "}
              / <span>Portfolio</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div
            className="flex justify-center gap-4 flex-wrap max-md:gap-2"
            data-aos="fade-up">
            {filters.map((f) => (
              <button
                key={f.val}
                onClick={() => setActiveFilter(f.val)}
                className={`px-5 py-2.5 max-md:px-4 max-md:py-2 max-sm:min-w-25 rounded-full text-sm font-medium cursor-pointer transition-all duration-250 whitespace-nowrap border-[1.5px] ${activeFilter === f.val ? "bg-accent border-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]" : "bg-slate-50 border-slate-200 text-slate-600 hover:border-accent hover:text-accent hover:bg-accent/6"}`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))] max-md:grid-cols-1 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-250 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/20 hover:z-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <div className="relative h-62.5 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-primary to-accent" />
                  <div className="absolute inset-0 bg-grid-pattern-light" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white/75">
                    <span className="text-5xl mb-3">
                      {getProjectIcon(project.filterCategory)}
                    </span>
                    <span className="text-sm font-semibold text-white/60">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-slate-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 backdrop-blur-[3px]">
                    <div className="flex gap-4">
                      <button
                        onClick={() => openModal(project)}
                        className="w-12 h-12 bg-white/15 border-[1.5px] border-white/35 rounded-full text-white text-base flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-accent hover:border-accent hover:shadow-[0_0_0_4px_rgba(37,99,235,0.35)]">
                        <FaEye />
                      </button>
                      <a
                        href="#"
                        className="w-12 h-12 bg-white/15 border-[1.5px] border-white/35 rounded-full text-white text-base flex items-center justify-center no-underline transition-all duration-250 hover:bg-accent hover:border-accent hover:shadow-[0_0_0_4px_rgba(37,99,235,0.35)]">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl mb-4 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-accent/8 text-primary px-3 py-1 rounded-full text-[0.8125rem] font-medium border border-accent/20 transition-all duration-150 hover:bg-accent hover:text-white hover:border-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <FaSearch className="text-5xl mb-4 mx-auto" />
              <p>No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-22 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div data-aos="fade-up">
            <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.75rem)] mb-4 tracking-tight">
              Want to See Your Project Here?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-150 mx-auto">
              Let's collaborate and create something amazing together that
              drives real business results.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:w-full">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] max-sm:w-full max-sm:justify-center">
                <FaPaperPlane /> Start Your Project
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:border-white/60 hover:-translate-y-0.5 max-sm:w-full max-sm:justify-center">
                <FaCogs /> Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 max-sm:text-[1.5rem]">
              What Our Clients Say
            </h2>
            <p className="text-[1.0625rem] text-slate-500 mb-12 max-w-140 mx-auto leading-relaxed">
              Hear from the businesses we've helped transform
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,350px),1fr))] max-sm:grid-cols-1 gap-8">
            {[
              {
                quote:
                  '"FusionTech transformed our e-commerce platform, resulting in a 300% increase in sales. Their attention to detail and technical expertise is outstanding."',
                name: "John Smith",
                role: "CEO, TechMart",
              },
              {
                quote:
                  '"The cloud migration project was flawless. FusionTech reduced our infrastructure costs by 40% while improving performance and security."',
                name: "Sarah Johnson",
                role: "CTO, GlobalCorp",
              },
              {
                quote:
                  '"Our mobile app developed by FusionTech has been downloaded over 100,000 times. The user experience and performance are exceptional."',
                name: "Mike Davis",
                role: "Founder, HealthTracker",
              },
            ].map((t, i) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition-all duration-250 hover:shadow-md hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}>
                <div>
                  <div className="w-11 h-11 bg-accent/10 rounded-[0.625rem] flex items-center justify-center mb-6">
                    <FaQuoteLeft className="text-accent text-xl" />
                  </div>
                  <p className="italic leading-relaxed mb-8 text-slate-700 max-w-[65ch]">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12.5 h-12.5 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                    <FaUser />
                  </div>
                  <div>
                    <h4 className="mb-1 text-slate-900">{t.name}</h4>
                    <span className="text-slate-600 text-sm">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="py-22 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div data-aos="fade-up">
            <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.75rem)] mb-4 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-150 mx-auto">
              Let's discuss how we can help you achieve similar success with
              your next project.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:w-full">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] max-sm:w-full max-sm:justify-center">
                <FaPhone /> Start Your Project
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:border-white/60 hover:-translate-y-0.5 max-sm:w-full max-sm:justify-center">
                <FaCogs /> Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-2000 bg-slate-900/65 backdrop-blur-lg overflow-hidden animate-modal-backdrop"
          id="projectModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title">
          <div className="bg-white mx-auto mt-[4%] max-md:mt-[2%] max-sm:mt-0 rounded-2xl max-sm:rounded-none w-[88%] max-w-190 max-md:w-[95%] max-sm:w-full relative max-h-[84vh] max-md:max-h-[92vh] max-sm:max-h-screen overflow-hidden flex flex-col shadow-[0_32px_80px_-12px_rgba(15,23,42,0.45),0_0_0_1px_rgba(15,23,42,0.06)] animate-modal-slide">
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-4 top-4 text-xl font-bold cursor-pointer z-10 text-slate-500 bg-slate-100 border-none rounded-full w-9 h-9 max-sm:w-8 max-sm:h-8 max-sm:text-base flex items-center justify-center leading-none transition-all duration-150 hover:text-slate-900 hover:bg-slate-200">
              &times;
            </button>
            <div className="p-8 max-md:p-6 overflow-y-auto flex-1 modal-body-scroll">
              {/* Modal Header */}
              <div className="grid grid-cols-[1fr_1.5fr] max-md:grid-cols-1 gap-8 max-md:gap-4 mb-8">
                <div className="w-full aspect-16/10 rounded-lg overflow-hidden bg-linear-to-br from-primary to-accent border border-slate-200 shadow-md">
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 gap-2">
                    <FaImage className="text-5xl" />
                    <span className="text-sm font-medium">
                      Project Screenshot
                    </span>
                  </div>
                </div>
                <div>
                  <span className="inline-block bg-accent/10 text-accent px-3.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5 border border-accent/20">
                    {selectedProject.category}
                  </span>
                  <h2
                    id="modal-project-title"
                    className="text-[1.75rem] mb-4 text-slate-900">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-col gap-3 mb-8">
                    {[
                      {
                        icon: FaUser,
                        label: "Client:",
                        val: selectedProject.client,
                      },
                      {
                        icon: FaClock,
                        label: "Duration:",
                        val: selectedProject.duration,
                      },
                      {
                        icon: FaUsers,
                        label: "Team Size:",
                        val: selectedProject.team,
                      },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center gap-2 text-sm">
                        <m.icon className="text-primary w-4 h-4 shrink-0" />
                        <span>
                          <strong>{m.label}</strong> {m.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="border-t border-slate-100 pt-7 mb-7">
                <h3 className="flex items-center gap-2 mb-4 text-slate-900 text-xl">
                  <FaCogs className="text-primary" /> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-accent/8 text-primary px-3 py-0.5 rounded-full text-[0.8125rem] font-medium border border-accent/18">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-100 pt-7">
                <h3 className="flex items-center gap-2 mb-4 text-slate-900 text-xl">
                  <FaList className="text-primary" /> Key Features
                </h3>
                <ul className="list-none grid grid-cols-2 max-md:grid-cols-1 gap-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 py-2">
                      <FaCheck className="text-success mt-1 shrink-0" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
