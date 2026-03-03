import { Link } from "react-router-dom";
import { HiShieldCheck } from "react-icons/hi";
import {
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaUsers,
  FaTrophy,
  FaSeedling,
  FaHandshake,
  FaUser,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaMedal,
  FaStar,
  FaCrown,
  FaProjectDiagram,
  FaGlobe,
  FaClock,
  FaHeadset,
  FaPercentage,
  FaPhone,
  FaCogs,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      desc: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: HiShieldCheck,
      title: "Integrity",
      desc: "We maintain the highest ethical standards in all our business relationships and practices.",
      iconSize: 28,
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      desc: "We believe in the power of teamwork and foster strong partnerships with our clients.",
    },
    {
      icon: FaTrophy,
      title: "Excellence",
      desc: "We strive for perfection in every project and continuously improve our services.",
    },
    {
      icon: FaSeedling,
      title: "Growth",
      desc: "We are committed to the continuous growth of our team, clients, and communities.",
    },
    {
      icon: FaHandshake,
      title: "Trust",
      desc: "We build lasting relationships based on transparency, reliability, and mutual respect.",
    },
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      desc: "Visionary leader with 15+ years of experience in technology and business strategy.",
      socials: [FaLinkedin, FaXTwitter],
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      desc: "Technology expert specializing in cloud architecture and emerging technologies.",
      socials: [FaLinkedin, FaGithub],
    },
    {
      name: "Michael Thompson",
      role: "Head of Operations",
      desc: "Operations specialist ensuring seamless project delivery and client satisfaction.",
      socials: [FaLinkedin, FaXTwitter],
    },
    {
      name: "Emily Davis",
      role: "Head of Design",
      desc: "Creative director with expertise in UX/UI design and brand development.",
      socials: [FaLinkedin, FaDribbble],
    },
  ];

  const awards = [
    {
      icon: FaTrophy,
      title: "Best IT Solutions Company 2023",
      sub: "Tech Excellence Awards",
    },
    {
      icon: FaMedal,
      title: "Innovation in Cloud Services",
      sub: "Cloud Computing Awards 2022",
    },
    {
      icon: FaStar,
      title: "Client Satisfaction Excellence",
      sub: "Business Service Awards 2022",
    },
    {
      icon: FaCrown,
      title: "Top Employer of the Year",
      sub: "Tech Industry Recognition 2021",
    },
  ];

  const companyStats = [
    { icon: FaProjectDiagram, val: "500+", label: "Projects Completed" },
    { icon: FaUsers, val: "150+", label: "Happy Clients" },
    { icon: FaGlobe, val: "25+", label: "Countries Served" },
    { icon: FaClock, val: "8+", label: "Years Experience" },
    { icon: FaHeadset, val: "24/7", label: "Support Available" },
    { icon: FaPercentage, val: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="pt-30 pb-20 max-md:pt-24 max-md:pb-15 max-sm:pt-22 max-sm:pb-12 bg-slate-900 bg-grid-pattern text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.22)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="relative z-2" data-aos="fade-up">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 text-white max-md:text-[2rem] max-sm:text-[1.75rem]">
              About FusionTech
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Pioneering the future of technology solutions since 2016
            </p>
            <nav className="text-sm opacity-75">
              <Link
                to="/"
                className="text-white no-underline transition-opacity duration-150 hover:opacity-100">
                Home
              </Link>{" "}
              / <span>About</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-22 bg-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-md:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 text-left max-md:text-center max-sm:text-[1.5rem]">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-[65ch]">
                Founded in 2016, FusionTech emerged from a simple yet powerful
                vision: to bridge the gap between cutting-edge technology and
                real-world business solutions. What started as a small team of
                passionate developers has grown into a comprehensive IT
                solutions company serving clients worldwide.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our journey began when our founders recognized the growing need
                for businesses to embrace digital transformation. We witnessed
                companies struggling to keep pace with technological
                advancements, and we knew we could make a difference.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we're proud to have completed over 500 projects, served
                150+ satisfied clients, and built a reputation for excellence in
                the IT industry. Our commitment to innovation, quality, and
                client satisfaction continues to drive us forward.
              </p>
            </div>
            <div data-aos="fade-left">
              <div className="flex flex-col gap-0 relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-accent to-transparent rounded-full" />
                {[
                  {
                    year: "2016",
                    title: "Founded",
                    desc: "FusionTech was established with a team of 3 developers",
                  },
                  {
                    year: "2018",
                    title: "Expansion",
                    desc: "Grew to 15 team members and opened our first office",
                  },
                  {
                    year: "2020",
                    title: "Innovation",
                    desc: "Launched cloud solutions division and AI services",
                  },
                  {
                    year: "2023",
                    title: "Global Reach",
                    desc: "Expanded internationally with 50+ team members",
                  },
                ].map((item, i) => (
                  <div
                    key={item.year}
                    className="relative flex items-start gap-8 max-md:flex-col max-md:text-center p-6 pl-8 bg-slate-50 rounded-lg border border-slate-200 mb-5 transition-all duration-250 hover:shadow-md hover:translate-x-1"
                    data-aos="fade-up"
                    data-aos-delay={(i + 1) * 100}>
                    <div className="absolute -left-10 top-7 w-3 h-3 bg-accent rounded-full border-2 border-white shadow-[0_0_0_3px_rgba(37,99,235,0.25)]" />
                    <div className="text-lg font-bold text-accent min-w-13 tracking-tight max-md:min-w-0 max-md:mb-2">
                      {item.year}
                    </div>
                    <div>
                      <h4 className="mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] max-lg:grid-cols-1 gap-12">
            {[
              {
                icon: FaBullseye,
                title: "Our Mission",
                desc: "To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting competitive advantages in the digital age.",
              },
              {
                icon: FaEye,
                title: "Our Vision",
                desc: "To be the leading global technology partner, recognized for transforming businesses through cutting-edge solutions and exceptional service delivery.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="bg-white p-10 rounded-xl text-center shadow-md border border-slate-200 transition-all duration-250 hover:-translate-y-1 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={i * 200}>
                <div className="w-17 h-17 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-7">
                  <card.icon className="text-[1.75rem] text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-slate-900">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-22 bg-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 max-sm:text-[1.5rem]">
              Our Core Values
            </h2>
            <p className="text-[1.0625rem] text-slate-500 mb-12 max-w-140 mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group bg-white p-8 px-7 rounded-lg text-center border border-slate-200 transition-all duration-250 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}>
                <div className="w-14 h-14 bg-accent/10 rounded-[0.625rem] flex items-center justify-center mx-auto mb-4 transition-colors duration-250 group-hover:bg-accent">
                  <v.icon
                    size={v.iconSize}
                    className="text-[1.375rem] text-accent transition-colors duration-250 group-hover:text-white"
                  />
                </div>
                <h4 className="text-lg mb-2 text-slate-900">{v.title}</h4>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 max-sm:text-[1.5rem]">
              Meet Our Leadership Team
            </h2>
            <p className="text-[1.0625rem] text-slate-500 mb-12 max-w-140 mx-auto leading-relaxed">
              The visionaries driving FusionTech's success
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-250 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/20"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}>
                <div className="relative h-55 bg-linear-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white/60">
                    <FaUser className="text-[3.5rem] mb-2 block mx-auto" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    {member.socials.map((Social, j) => (
                      <a
                        key={j}
                        href="#"
                        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-200 no-underline transition-all duration-250 hover:bg-primary hover:text-white hover:-translate-y-0.5">
                        <Social />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="mb-2 text-slate-900">{member.name}</h4>
                  <span className="text-accent font-medium text-sm tracking-wide block mb-4">
                    {member.role}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-22 bg-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 max-sm:text-[1.5rem]">
              Awards & Recognition
            </h2>
            <p className="text-[1.0625rem] text-slate-500 mb-12 max-w-140 mx-auto leading-relaxed">
              Celebrating our achievements and industry recognition
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            {awards.map((award, i) => (
              <div
                key={award.title}
                className="group text-center p-8 px-7 bg-white border border-slate-200 rounded-lg transition-all duration-250 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}>
                <div className="w-14 h-14 bg-accent/10 rounded-[0.625rem] flex items-center justify-center mx-auto mb-4 transition-colors duration-250 group-hover:bg-white/20">
                  <award.icon className="text-[1.375rem] text-accent transition-colors duration-250 group-hover:text-white" />
                </div>
                <h4 className="mb-2">{award.title}</h4>
                <p className="text-sm">{award.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-22 bg-dark-bg bg-grid-pattern text-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
            {companyStats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center p-8 px-6 bg-dark-surface rounded-lg border border-slate-700 transition-all duration-250 hover:-translate-y-1 hover:border-accent"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}>
                <div className="w-13 h-13 bg-accent/15 rounded-[0.625rem] flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-xl text-accent" />
                </div>
                <div className="text-[2rem] font-bold text-white mb-1 tracking-tight">
                  {stat.val}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-150 mx-auto">
              Join the 150+ companies that trust FusionTech for their technology
              needs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:w-full">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] max-sm:w-full max-sm:justify-center">
                <FaPhone /> Get In Touch
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
    </div>
  );
}

export default About;
