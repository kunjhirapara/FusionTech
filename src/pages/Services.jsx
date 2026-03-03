import { Link } from "react-router-dom";
import {
  FaCode,
  FaCheck,
  FaLaptopCode,
  FaCloud,
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaPhone,
  FaFolderOpen,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: FaCode,
      visual: FaLaptopCode,
      title: "Web Development",
      visualLabel: "Web Development",
      desc: "Create powerful, responsive web applications that deliver exceptional user experiences and drive business growth. Our team specializes in modern frameworks and technologies.",
      features: [
        "Custom Web Application Development",
        "Responsive Design & Mobile Optimization",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development & Integration",
        "Performance Optimization",
      ],
      techLabel: "Technologies:",
      techs: ["React", "Vue.js", "Angular", "Node.js", "Python", "PHP"],
    },
    {
      icon: FaCloud,
      visual: FaCloud,
      title: "Cloud Solutions",
      visualLabel: "Cloud Solutions",
      reverse: true,
      desc: "Migrate to the cloud and unlock scalability, reliability, and cost-effectiveness. We provide comprehensive cloud services from strategy to implementation.",
      features: [
        "Cloud Migration Strategy",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Cloud Security & Compliance",
        "Disaster Recovery Solutions",
        "24/7 Monitoring & Support",
      ],
      techLabel: "Platforms:",
      techs: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
    {
      icon: FaMobileAlt,
      visual: FaMobileAlt,
      title: "Mobile Development",
      visualLabel: "Mobile Apps",
      desc: "Build native and cross-platform mobile applications that engage users and expand your reach across iOS and Android platforms.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Development",
        "UI/UX Design",
        "App Store Optimization",
        "Backend API Development",
        "App Maintenance & Updates",
      ],
      techLabel: "Technologies:",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
    },
    {
      icon: FaShieldAlt,
      visual: FaShieldAlt,
      title: "Cybersecurity",
      visualLabel: "Cybersecurity",
      reverse: true,
      desc: "Protect your business from cyber threats with comprehensive security solutions that safeguard your data, systems, and reputation.",
      features: [
        "Security Assessment & Audits",
        "Penetration Testing",
        "Network Security Solutions",
        "Identity & Access Management",
        "Security Monitoring & Response",
        "Compliance Management",
      ],
      techLabel: "Solutions:",
      techs: [
        "Firewall",
        "SIEM",
        "VPN",
        "SSL/TLS",
        "Multi-Factor Auth",
        "Encryption",
      ],
    },
    {
      icon: FaChartLine,
      visual: FaChartLine,
      title: "Data Analytics & BI",
      visualLabel: "Data Analytics",
      desc: "Transform your data into actionable insights with advanced analytics, machine learning, and business intelligence solutions.",
      features: [
        "Data Warehousing Solutions",
        "Business Intelligence Dashboards",
        "Predictive Analytics",
        "Machine Learning Models",
        "Data Visualization",
        "Real-time Analytics",
      ],
      techLabel: "Tools:",
      techs: ["Power BI", "Tableau", "Python", "R", "SQL", "Apache Spark"],
    },
    {
      icon: FaCogs,
      visual: FaCogs,
      title: "IT Consulting",
      visualLabel: "IT Consulting",
      reverse: true,
      desc: "Strategic technology consulting to optimize your IT infrastructure, improve efficiency, and align technology with your business objectives.",
      features: [
        "Technology Strategy Planning",
        "Digital Transformation Roadmap",
        "IT Infrastructure Assessment",
        "Process Optimization",
        "Technology Vendor Selection",
        "Change Management Support",
      ],
      techLabel: "Focus Areas:",
      techs: [
        "Digital Strategy",
        "Cloud Migration",
        "DevOps",
        "Automation",
        "Compliance",
        "ROI Optimization",
      ],
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      desc: "We start by understanding your business needs, goals, and challenges to create a comprehensive project plan.",
    },
    {
      num: "02",
      title: "Design & Architecture",
      desc: "Our team designs the solution architecture and user experience to ensure optimal performance and usability.",
    },
    {
      num: "03",
      title: "Development & Testing",
      desc: "We build your solution using agile methodologies with continuous testing and quality assurance.",
    },
    {
      num: "04",
      title: "Deployment & Launch",
      desc: "We deploy your solution to production with careful monitoring and ensure a smooth launch.",
    },
    {
      num: "05",
      title: "Support & Maintenance",
      desc: "We provide ongoing support, maintenance, and updates to keep your solution running optimally.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="pt-30 pb-20 max-md:pt-24 max-md:pb-15 max-sm:pt-22 max-sm:pb-12 bg-slate-900 bg-grid-pattern text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.22)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="relative z-2" data-aos="fade-up">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 text-white max-md:text-[2rem] max-sm:text-[1.75rem]">
              Our Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive IT solutions tailored to your business needs
            </p>
            <nav className="text-sm opacity-75">
              <Link
                to="/"
                className="text-white no-underline transition-opacity duration-150 hover:opacity-100">
                Home
              </Link>{" "}
              / <span>Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 max-sm:text-[1.5rem]">
              What We Do
            </h2>
            <p className="text-[1.0625rem] text-slate-500 mb-12 max-w-140 mx-auto leading-relaxed">
              At FusionTech, we provide end-to-end IT solutions that empower
              businesses to thrive in the digital age. Our comprehensive service
              portfolio covers everything from strategic consulting to
              implementation and ongoing support.
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-300 mx-auto px-8 max-md:px-4 space-y-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-xl p-10 max-sm:p-8 shadow-sm border border-slate-200"
              data-aos="fade-up">
              <div
                className={`grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-8 items-center ${svc.reverse ? "max-lg:direction-ltr" : ""}`}
                style={svc.reverse ? { direction: "rtl" } : {}}>
                <div style={svc.reverse ? { direction: "ltr" } : {}}>
                  <div className="w-14 h-14 bg-accent/10 rounded-[0.625rem] flex items-center justify-center mb-6">
                    <svc.icon className="text-2xl text-accent" />
                  </div>
                  <h3 className="text-2xl mb-4 text-slate-900">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-slate-900 mb-3">What's Included:</h4>
                    <ul className="list-none space-y-3">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <FaCheck className="text-success text-base shrink-0" />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-slate-900 mb-3">{svc.techLabel}</h4>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {svc.techs.map((t) => (
                        <span
                          key={t}
                          className="bg-accent/8 text-primary px-3 py-1 rounded-full text-[0.8125rem] font-medium border border-accent/20 transition-all duration-150 hover:bg-accent hover:text-white hover:border-accent">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={svc.reverse ? { direction: "ltr" } : {}}>
                  <div className="h-70 rounded-lg flex flex-col items-center justify-center text-center text-white/80 transition-all duration-250 shadow-md relative overflow-hidden hover:scale-[1.02] hover:shadow-xl">
                    <div className="absolute inset-0 bg-linear-to-br from-primary to-accent" />
                    <div className="absolute inset-0 bg-grid-pattern-light" />
                    <svc.visual className="text-[3.5rem] mb-3 relative z-1 text-white" />
                    <span className="text-base font-semibold relative z-1 text-white">
                      {svc.visualLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-22 bg-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 max-sm:text-[1.5rem]">
              Our Development Process
            </h2>
            <p className="text-[1.0625rem] text-slate-500 mb-12 max-w-140 mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>
          <div className="flex flex-col max-w-175 mx-auto relative max-md:max-w-full">
            <div className="absolute left-6.75 max-md:left-5.25 top-7 bottom-7 w-0.5 bg-linear-to-b from-accent to-accent/15 z-0" />
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-row items-center text-left gap-6 pb-8 last:pb-0 relative z-1 group"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}>
                <div className="w-14 h-14 max-md:w-11 max-md:h-11 bg-accent text-white rounded-full flex items-center justify-center text-base font-bold shrink-0 border-[3px] border-white shadow-[0_0_0_3px_var(--color-accent)] transition-transform duration-250 group-hover:scale-110">
                  {step.num}
                </div>
                <div className="flex-1 bg-slate-50 p-5 px-4 rounded-lg border border-slate-200 transition-shadow duration-250 group-hover:shadow-md">
                  <h4 className="text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-22 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div data-aos="fade-up">
            <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.75rem)] mb-4 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-150 mx-auto">
              Let's discuss your project and how our services can help you
              achieve your goals.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:w-full">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] max-sm:w-full max-sm:justify-center">
                <FaPhone /> Contact Us
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:border-white/60 hover:-translate-y-0.5 max-sm:w-full max-sm:justify-center">
                <FaFolderOpen /> View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
