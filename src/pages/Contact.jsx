import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaChevronDown,
  FaPaperPlane,
  FaCogs,
  FaExternalLinkAlt,
  FaSpinner,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);
  const [visibleFaqs, setVisibleFaqs] = useState(new Set());
  const faqRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleFaqs((prev) =>
              new Set(prev).add(entry.target.dataset.faqIndex),
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    faqRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form data:", data);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const faqs = [
    {
      q: "How quickly do you respond to inquiries?",
      a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our direct line.",
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes! We offer a free 30-minute consultation to discuss your project requirements and provide initial recommendations.",
    },
    {
      q: "What is your typical project timeline?",
      a: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 3-6 months. We'll provide a detailed timeline during our consultation.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Absolutely. We offer various support and maintenance packages to ensure your project continues to perform optimally after launch.",
    },
    {
      q: "What technologies do you specialize in?",
      a: "We specialize in React, Node.js, Python, AWS, and modern cloud technologies. Our team stays current with the latest industry trends and tools.",
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
              Contact Us
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Let's start a conversation about your next project
            </p>
            <nav className="text-sm opacity-75">
              <Link
                to="/"
                className="text-white no-underline transition-opacity duration-150 hover:opacity-100">
                Home
              </Link>{" "}
              / <span>Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div
            className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-8"
            data-aos="fade-up">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-[1.75rem] font-bold mb-2.5 tracking-tight text-slate-900">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
                noValidate>
                {/* Name + Email */}
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-700 tracking-tight mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`px-4 py-3.5 border-[1.5px] rounded-lg font-[inherit] text-[0.9375rem] bg-white text-slate-900 min-h-12 transition-all duration-150 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] ${errors.name ? "border-error" : "border-slate-200"}`}
                      {...register("name", {
                        required: "Full name is required",
                      })}
                    />
                    {errors.name && (
                      <span className="text-error text-sm mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-700 tracking-tight mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={`px-4 py-3.5 border-[1.5px] rounded-lg font-[inherit] text-[0.9375rem] bg-white text-slate-900 min-h-12 transition-all duration-150 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] ${errors.email ? "border-error" : "border-slate-200"}`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-error text-sm mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-700 tracking-tight mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="px-4 py-3.5 border-[1.5px] border-slate-200 rounded-lg font-[inherit] text-[0.9375rem] bg-white text-slate-900 min-h-12 transition-all duration-150 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
                      {...register("phone")}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-700 tracking-tight mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="px-4 py-3.5 border-[1.5px] border-slate-200 rounded-lg font-[inherit] text-[0.9375rem] bg-white text-slate-900 min-h-12 transition-all duration-150 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
                      {...register("company")}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-slate-700 tracking-tight mb-1">
                    Service Interested In *
                  </label>
                  <select
                    className={`px-4 py-3.5 border-[1.5px] rounded-lg font-[inherit] text-[0.9375rem] bg-white text-slate-900 min-h-12 transition-all duration-150 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] ${errors.service ? "border-error" : "border-slate-200"}`}
                    {...register("service", {
                      required: "Please select a service",
                    })}>
                    <option value="">Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ecommerce">E-commerce Development</option>
                    <option value="analytics">Data Analytics</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                  {errors.service && (
                    <span className="text-error text-sm mt-1">
                      {errors.service.message}
                    </span>
                  )}
                </div>

                {/* Budget */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-slate-700 tracking-tight mb-1">
                    Budget Range
                  </label>
                  <select
                    className="px-4 py-3.5 border-[1.5px] border-slate-200 rounded-lg font-[inherit] text-[0.9375rem] bg-white text-slate-900 min-h-12 transition-all duration-150 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
                    {...register("budget")}>
                    <option value="">Select budget range...</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-slate-700 tracking-tight mb-1">
                    Project Details *
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    className={`px-4 py-3.5 border-[1.5px] rounded-lg font-[inherit] text-[0.9375rem] bg-white text-slate-900 transition-all duration-150 resize-y focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] ${errors.message ? "border-error" : "border-slate-200"}`}
                    {...register("message", {
                      required: "Please describe your project",
                    })}
                  />
                  {errors.message && (
                    <span className="text-error text-sm mt-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Privacy Agreement Checkbox */}
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      className="w-4.5 h-4.5"
                      {...register("privacy", {
                        required: "You must agree to the privacy policy",
                      })}
                    />
                    I agree to the{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-accent hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/terms-of-service"
                      className="text-accent hover:underline">
                      Terms of Service
                    </Link>{" "}
                    *
                  </label>
                  {errors.privacy && (
                    <span className="text-error text-sm mt-1">
                      {errors.privacy.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <div className="self-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold rounded-lg border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] transition-all duration-250 hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="fa-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </div>

                {submitSuccess && (
                  <div className="p-4 rounded-lg mt-4 bg-success/10 text-success border border-success">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="bg-white p-10 max-md:p-6 rounded-xl border border-slate-200 shadow-sm self-start">
              <div className="mb-12">
                <h2 className="text-[1.75rem] font-bold mb-2.5 tracking-tight text-slate-900">
                  Get in Touch
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We'd love to hear from you. Reach out through any of these
                  channels.
                </p>
              </div>

              <div className="flex flex-col gap-8 mb-12">
                {[
                  {
                    icon: FaEnvelope,
                    title: "Email Us",
                    text: "info@fusiontech.com",
                    sub: "We reply within 24 hours",
                    href: "mailto:info@fusiontech.com",
                  },
                  {
                    icon: FaPhone,
                    title: "Call Us",
                    text: "+1 (555) 123-4567",
                    sub: "Mon-Fri, 9am-6pm EST",
                    href: "tel:+15551234567",
                  },
                  {
                    icon: FaMapMarkerAlt,
                    title: "Visit Us",
                    text: "123 Innovation Drive",
                    sub: "San Francisco, CA 94105",
                    href: null,
                  },
                ].map((m) => (
                  <div key={m.title} className="flex gap-4 items-start">
                    <div className="w-11.5 h-11.5 bg-accent/10 rounded-[0.625rem] flex items-center justify-center shrink-0">
                      <m.icon className="text-accent text-lg" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-slate-900">{m.title}</h4>
                      <p className="text-slate-600 mb-2">{m.text}</p>
                      <p className="text-slate-600 mb-2">{m.sub}</p>
                      {m.href && (
                        <a
                          href={m.href}
                          className="text-accent no-underline font-semibold text-sm inline-flex items-center gap-1 transition-opacity duration-150 hover:opacity-75">
                          Contact <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-2">
                <h4 className="mb-2 text-slate-900">Follow Us</h4>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { icon: FaLinkedinIn, href: "#" },
                    { icon: FaXTwitter, href: "#" },
                    { icon: FaGithub, href: "#" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="w-10.5 h-10.5 bg-accent/10 text-primary rounded-full flex items-center justify-center text-[1.0625rem] no-underline transition-all duration-250 hover:bg-primary hover:text-white">
                      <s.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-22 bg-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold mb-3.5 tracking-tight text-slate-900 max-sm:text-[1.5rem]">
              Frequently Asked Questions
            </h2>
            <p className="text-[1.0625rem] text-slate-500 mb-12 max-w-140 mx-auto leading-relaxed">
              Find answers to common questions about our services
            </p>
            <div className="w-12 h-0.75 bg-accent rounded-full mx-auto" />
          </div>

          <div className="max-w-190 mx-auto flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                ref={(el) => (faqRefs.current[i] = el)}
                data-faq-index={i}
                className={`bg-slate-50 rounded-xl overflow-hidden border transition-all duration-250 ${visibleFaqs.has(String(i)) ? "animate-faq-fade-up" : "opacity-0"} ${openFaq === i ? "border-accent/30 shadow-sm" : "border-slate-200"}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex justify-between items-center w-full px-6 py-5.5 cursor-pointer select-none bg-transparent border-none text-left transition-colors duration-150 hover:bg-white">
                  <h4 className="m-0 text-slate-900 text-base font-semibold pr-4">
                    {faq.q}
                  </h4>
                  <FaChevronDown
                    className={`text-accent text-sm shrink-0 transition-transform duration-250 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer ${openFaq === i ? "open" : ""}`}>
                  <p className="text-slate-600 leading-[1.7] text-[0.9375rem]">
                    {faq.a}
                  </p>
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
              Let's discuss how we can help you achieve your business goals with
              innovative technology solutions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:w-full">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] max-sm:w-full max-sm:justify-center">
                <FaCogs /> View Services
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.9375rem] font-semibold no-underline rounded-lg transition-all duration-250 border-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:border-white/60 hover:-translate-y-0.5 max-sm:w-full max-sm:justify-center">
                <FaPaperPlane /> Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
