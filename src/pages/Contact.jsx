import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaSpinner,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [visibleFaqs, setVisibleFaqs] = useState(new Set());
  const faqRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.faqIndex);
            setVisibleFaqs((prev) => new Set(prev).add(index));
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

  const onSubmit = async () => {
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take 3-6 months or more. We provide detailed timeline estimates during the initial consultation.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project scope, technology stack, and timeline. Contact us for a customized quote.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive support and maintenance packages including bug fixes, security updates, feature enhancements, and 24/7 technical support. All our projects come with a warranty period.",
    },
    {
      question: "Can you work with our existing technology stack?",
      answer:
        "Absolutely! Our team has expertise in a wide range of technologies and frameworks. We can integrate with your existing systems or suggest modern alternatives if needed.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices including code reviews, automated testing, continuous integration, and quality assurance processes. Every project undergoes rigorous testing before deployment.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We have experience across various industries including healthcare, finance, e-commerce, education, logistics, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.",
    },
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content" data-aos="fade-up">
            <h1>Contact Us</h1>
            <p>Let's discuss your next project and how we can help</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link> / <span>Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form-section" data-aos="fade-right">
              <div className="form-header">
                <h2>Get In Touch</h2>
                <p>
                  Ready to start your project? Fill out the form below and we'll
                  get back to you within 24 hours.
                </p>
              </div>

              {submitSuccess && (
                <div className="success-message">
                  <FaCheckCircle />
                  <p>
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </div>
              )}

              <form
                className="contact-form"
                id="contactForm"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      className={errors.firstName ? "error" : ""}
                      {...register("firstName", {
                        required: "First name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.firstName && (
                      <div className="error-message">
                        {errors.firstName.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      className={errors.lastName ? "error" : ""}
                      {...register("lastName", {
                        required: "Last name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.lastName && (
                      <div className="error-message">
                        {errors.lastName.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className={errors.email ? "error" : ""}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="error-message">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className={errors.phone ? "error" : ""}
                      {...register("phone", {
                        pattern: {
                          value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <div className="error-message">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" {...register("company")} />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      className={errors.service ? "error" : ""}
                      {...register("service", {
                        required: "Please select a service",
                      })}>
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">
                        Mobile Development
                      </option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="it-consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <div className="error-message">
                        {errors.service.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select id="budget" {...register("budget")}>
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select id="timeline" {...register("timeline")}>
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-plus-months">6+ months</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Description *</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    className={errors.message ? "error" : ""}
                    {...register("message", {
                      required: "Please provide project details",
                      minLength: {
                        value: 10,
                        message:
                          "Please provide more details (at least 10 characters)",
                      },
                    })}></textarea>
                  {errors.message && (
                    <div className="error-message">
                      {errors.message.message}
                    </div>
                  )}
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      id="privacy"
                      className={errors.privacy ? "error" : ""}
                      {...register("privacy", {
                        required: "You must agree to the privacy policy",
                      })}
                    />
                    <span className="checkmark"></span>I agree to the{" "}
                    <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
                    <Link to="/terms-of-service">Terms of Service</Link> *
                  </label>
                  {errors.privacy && (
                    <div className="error-message">
                      {errors.privacy.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section" data-aos="fade-left">
              <div className="contact-info-header">
                <h3>Let's Connect</h3>
                <p>
                  We're here to help you transform your business with
                  technology.
                </p>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-content">
                    <h4>Visit Our Office</h4>
                    <p>
                      123 Tech Street, Digital City
                      <br />
                      Innovation District, TC 12345
                    </p>
                    <a href="#" className="method-link">
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-content">
                    <h4>Call Us</h4>
                    <p>
                      +1 (555) 123-4567
                      <br />
                      Mon - Fri, 9AM - 6PM EST
                    </p>
                    <a href="tel:+15551234567" className="method-link">
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-content">
                    <h4>Email Us</h4>
                    <p>
                      info@fusiontech.com
                      <br />
                      We reply within 24 hours
                    </p>
                    <a
                      href="mailto:info@fusiontech.com"
                      className="method-link">
                      Send Email
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaComments />
                  </div>
                  <div className="method-content">
                    <h4>Live Chat</h4>
                    <p>
                      Chat with our team
                      <br />
                      Available 24/7
                    </p>
                    <a href="#" className="method-link">
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h4>Follow Us</h4>
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
                  <a href="#" className="social-link">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)}
                data-faq-index={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className={`faq-item ${visibleFaqs.has(index) ? "faq-visible" : ""} ${openFaq === index ? "active" : ""}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h4>{faq.question}</h4>
                  <FaChevronDown />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
