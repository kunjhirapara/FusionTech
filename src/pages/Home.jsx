import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaEye,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaMicrochip,
  FaCode,
  FaCloud,
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaArrowRight,
  FaCheckCircle,
  FaVuejs,
  FaAngular,
  FaJsSquare,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaLeaf,
  FaDatabase,
  FaMemory,
  FaPhone,
  FaFolderOpen,
} from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

function Home() {
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0 });

  useEffect(() => {
    const animateValue = (key, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setStats((prev) => ({ ...prev, [key]: value }));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      animateValue("projects", 0, 500, 2000);
      animateValue("clients", 0, 150, 2000);
      animateValue("years", 0, 8, 2000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      desc: "Custom web applications built with modern technologies and responsive design principles.",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and migration services for enhanced performance and security.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      desc: "Native and cross-platform mobile applications for iOS and Android platforms.",
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      desc: "Comprehensive security solutions to protect your digital assets and data.",
    },
    {
      icon: FaChartLine,
      title: "Data Analytics",
      desc: "Transform your data into actionable insights with advanced analytics and visualization.",
    },
    {
      icon: FaCogs,
      title: "IT Consulting",
      desc: "Strategic technology consulting to optimize your business processes and efficiency.",
    },
  ];

  const techCategories = [
    {
      title: "Frontend",
      icons: [
        { icon: FaReact, name: "React" },
        { icon: FaVuejs, name: "Vue.js" },
        { icon: FaAngular, name: "Angular" },
        { icon: FaJsSquare, name: "JavaScript" },
      ],
    },
    {
      title: "Backend",
      icons: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: FaPython, name: "Python" },
        { icon: FaJava, name: "Java" },
        { icon: FaPhp, name: "PHP" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icons: [
        { icon: FaAws, name: "AWS" },
        { icon: FaDocker, name: "Docker" },
        { icon: SiKubernetes, name: "Kubernetes" },
        { icon: FaGitAlt, name: "Git" },
      ],
    },
    {
      title: "Database",
      icons: [
        { icon: FaLeaf, name: "MongoDB" },
        { icon: FaDatabase, name: "PostgreSQL" },
        { icon: FaDatabase, name: "MySQL" },
        { icon: FaMemory, name: "Redis" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-26 pb-22 bg-dark-bg bg-grid-pattern relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-[20%] -left-[10%] w-150 h-150 bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[20%] -right-[10%] w-125 h-125 bg-[radial-gradient(circle,rgba(30,58,138,0.2)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-300 mx-auto px-8 max-md:px-4 grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-12 items-center relative z-2">
          {/* Content */}
          <div
            className="text-white max-lg:text-center"
            data-aos="fade-up"
            data-aos-duration="1000">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.08] mb-6 tracking-tight text-white max-sm:text-[2rem]">
              Transforming Ideas Into
              <span className="text-accent"> Digital Reality</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 opacity-90 max-w-[65ch] max-sm:text-base">
              We are FusionTech, a leading IT solutions company that specializes
              in innovative technology services, cutting-edge web development,
              cloud solutions, and comprehensive digital transformation
              strategies.
            </p>
            <div className="flex gap-4 mb-12 flex-wrap max-lg:justify-center max-sm:flex-col max-sm:w-full">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 cursor-pointer border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] max-sm:w-full max-sm:justify-center">
                <FaRocket /> Our Services
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 cursor-pointer border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] max-sm:w-full max-sm:justify-center">
                <FaEye /> View Portfolio
              </Link>
            </div>
            <div className="flex gap-8 flex-wrap max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:w-full">
              {[
                {
                  val: `${stats.projects}+`,
                  label: "Projects Completed",
                  delay: "200",
                },
                {
                  val: `${stats.clients}+`,
                  label: "Happy Clients",
                  delay: "300",
                },
                {
                  val: `${stats.years}+`,
                  label: "Years Experience",
                  delay: "400",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center max-sm:w-full"
                  data-aos="fade-up"
                  data-aos-delay={s.delay}>
                  <span className="block text-[2rem] font-bold font-[Poppins,sans-serif] text-accent tracking-tight">
                    {s.val}
                  </span>
                  <span className="text-[0.8125rem] text-slate-300 uppercase tracking-[0.04em]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className="flex justify-center items-center max-lg:hidden"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200">
            <div className="relative w-95 h-95">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-glow-ring"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
                  "--delay": "0s",
                }}
              />

              {/* Orbit ring 1 — outermost, slow spin */}
              <div
                className="absolute inset-2 rounded-full border border-white/10 animate-orbit"
                style={{ "--orbit-duration": "30s" }}>
                {/* Orbit dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/40" />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/30" />
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/30" />
              </div>

              {/* Orbit ring 2 — middle, reverse spin */}
              <div
                className="absolute inset-10 rounded-full border border-dashed border-white/6 animate-orbit-reverse"
                style={{ "--orbit-duration": "35s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-accent/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full bg-accent/30" />
              </div>

              {/* Orbit ring 3 — innermost, subtle */}
              <div className="absolute inset-20 rounded-full border border-white/4" />

              {/* Connecting lines (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 380 380"
                fill="none">
                {/* Lines from center to each icon position (5 icons, 72° apart) */}
                <line
                  x1="190"
                  y1="190"
                  x2="190"
                  y2="30"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <line
                  x1="190"
                  y1="190"
                  x2="342"
                  y2="141"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  opacity="0.25"
                />
                <line
                  x1="190"
                  y1="190"
                  x2="284"
                  y2="319"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  opacity="0.25"
                />
                <line
                  x1="190"
                  y1="190"
                  x2="96"
                  y2="319"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  opacity="0.25"
                />
                <line
                  x1="190"
                  y1="190"
                  x2="38"
                  y2="141"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  opacity="0.25"
                />
                <defs>
                  <linearGradient
                    id="line-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating tech icons — 5 icons evenly spaced (72° apart) */}
              {[
                {
                  Icon: FaReact,
                  label: "REACT",
                  color: "#61DAFB",
                  top: "7.9%",
                  left: "50%",
                },
                {
                  Icon: FaNodeJs,
                  label: "NODE",
                  color: "#68A063",
                  top: "37%",
                  left: "90.1%",
                },
                {
                  Icon: FaPython,
                  label: "PYTHON",
                  color: "#FFD43B",
                  top: "84.1%",
                  left: "74.8%",
                },
                {
                  Icon: FaAws,
                  label: "AWS",
                  color: "#FF9900",
                  top: "84.1%",
                  left: "25.2%",
                },
                {
                  Icon: FaDocker,
                  label: "DOCKER",
                  color: "#2496ED",
                  top: "37%",
                  left: "9.9%",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    top: item.top,
                    left: item.left,
                    "--delay": `${i * 0.5}s`,
                  }}>
                  <div
                    className="w-14.5 h-14.5 bg-white/[0.07] border border-white/15 rounded-2xl flex items-center justify-center text-[1.35rem] text-white backdrop-blur-md animate-float-glow transition-all duration-300 hover:bg-white/[0.14] hover:border-white/25 hover:scale-110"
                    style={{ "--delay": `${i * 0.5}s` }}>
                    <item.Icon
                      style={{
                        color: item.color,
                        filter: `drop-shadow(0 0 6px ${item.color}40)`,
                      }}
                    />
                  </div>
                  {/* Icon label */}
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[0.6rem] text-white/40 font-medium tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                </div>
              ))}

              {/* Central hub — multi-layered glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Outer glow ring */}
                <div
                  className="absolute -inset-4 rounded-full bg-accent/10 blur-xl animate-glow-ring"
                  style={{ "--delay": "0.5s" }}
                />
                {/* Middle glow ring */}
                <div className="absolute -inset-2 rounded-full bg-accent/15 blur-md" />
                {/* Hub body */}
                <div className="relative w-20.5 h-20.5 rounded-full flex items-center justify-center text-[2rem] text-white bg-linear-to-br from-accent to-accent-dark shadow-[0_0_40px_rgba(37,99,235,0.5),0_0_80px_rgba(37,99,235,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] animate-pulse-hub">
                  <FaMicrochip className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  {/* Inner shine */}
                  <div
                    className="absolute inset-0 rounded-full bg-linear-to-b from-white/20 to-transparent opacity-60"
                    style={{ clipPath: "ellipse(70% 35% at 50% 20%)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-22 bg-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 max-sm:text-[1.5rem]">
              Our Core Services
            </h2>
            <p className="text-[1.0625rem] text-slate-500 mb-12 max-w-140 mx-auto leading-relaxed max-md:text-base">
              Comprehensive IT solutions tailored to your business needs
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,350px),1fr))] gap-8 max-md:grid-cols-1">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="service-card-border group bg-white p-9 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden transition-all duration-250 hover:-translate-y-1.5 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}>
                <div className="w-14 h-14 bg-accent/10 rounded-[0.625rem] flex items-center justify-center mb-6 transition-colors duration-250 group-hover:bg-accent">
                  <service.icon className="text-2xl text-accent group-hover:text-white transition-colors duration-250" />
                </div>
                <h3 className="text-2xl mb-4 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="text-accent no-underline font-semibold text-[0.9375rem] inline-flex items-center gap-1.5 transition-all duration-250 hover:gap-3 hover:text-primary">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-md:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 text-left max-md:text-center max-sm:text-[1.5rem]">
                Why Choose FusionTech?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-[65ch]">
                We combine technical expertise with business acumen to deliver
                solutions that not only meet your requirements but exceed your
                expectations.
              </p>

              <div className="mb-8">
                {[
                  {
                    title: "Expert Team",
                    desc: "Certified professionals with deep expertise in cutting-edge technologies",
                  },
                  {
                    title: "24/7 Support",
                    desc: "Round-the-clock technical support and maintenance services",
                  },
                  {
                    title: "Scalable Solutions",
                    desc: "Future-proof solutions that grow with your business needs",
                  },
                  {
                    title: "Proven Track Record",
                    desc: "Successfully delivered 500+ projects across various industries",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 mb-6 items-start">
                    <div className="shrink-0 w-9 h-9 bg-success/10 rounded-[0.625rem] flex items-center justify-center">
                      <FaCheckCircle className="text-success text-base" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2 text-slate-900">{f.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]">
                Learn More About Us
              </Link>
            </div>

            <div data-aos="fade-left">
              <div className="flex justify-center items-center gap-2.5 flex-col py-22 w-full">
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                  {[
                    { val: "99%", label: "Client Satisfaction" },
                    { val: "24/7", label: "Support Available" },
                    { val: "100%", label: "On-Time Delivery" },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`bg-white border border-slate-200 rounded-xl shadow-md flex flex-col items-center justify-center p-7 px-5 transition-all duration-250 hover:-translate-y-1 hover:shadow-lg w-full ${i === 2 ? "max-md:col-span-2 max-md:justify-self-center max-md:max-w-[50%] max-sm:col-span-1 max-sm:max-w-full" : ""}`}
                      data-aos="zoom-in"
                      data-aos-delay={(i + 1) * 200}>
                      <span className="text-[1.75rem] font-extrabold font-[Poppins,sans-serif] text-primary tracking-tight max-sm:text-xl">
                        {stat.val}
                      </span>
                      <span className="text-xs text-center text-slate-500 mt-1 font-medium">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-22 bg-dark-bg bg-grid-pattern text-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-white max-sm:text-[1.5rem]">
              Technologies We Master
            </h2>
            <p className="text-[1.0625rem] text-slate-400 mb-12 max-w-140 mx-auto leading-relaxed">
              Cutting-edge tools and frameworks we use to build exceptional
              solutions
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8 max-md:grid-cols-1">
            {techCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="bg-slate-800 p-7 rounded-lg border border-slate-700 transition-all duration-250 hover:-translate-y-1 hover:border-accent"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}>
                <h3 className="text-white mb-6 text-xl">{cat.title}</h3>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  {cat.icons.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-1.5 p-3.5 bg-dark-surface rounded-[0.625rem] border border-slate-700 transition-all duration-250 cursor-pointer hover:bg-accent hover:border-accent hover:-translate-y-0.75 hover:shadow-[0_4px_12px_rgba(37,99,235,0.4)] group"
                      title={tech.name}>
                      <tech.icon className="text-[1.75rem] text-slate-200 transition-colors duration-250 group-hover:text-white" />
                      <span className="text-xs font-medium text-slate-400 transition-colors duration-250 group-hover:text-white">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-22 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div data-aos="fade-up">
            <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.75rem)] mb-4 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-150 mx-auto">
              Let's discuss how FusionTech can help you achieve your digital
              transformation goals.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:w-full">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] max-sm:w-full max-sm:justify-center">
                <FaPhone /> Get In Touch
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:border-white/60 hover:-translate-y-0.5 max-sm:w-full max-sm:justify-center">
                <FaFolderOpen /> View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
