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
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content" data-aos="fade-up">
            <h1>Our Services</h1>
            <p>Comprehensive IT solutions tailored to your business needs</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link> / <span>Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              At FusionTech, we provide end-to-end IT solutions that empower
              businesses to thrive in the digital age. Our comprehensive service
              portfolio covers everything from strategic consulting to
              implementation and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          {/* Web Development */}
          <div className="service-detail" data-aos="fade-up">
            <div className="service-content">
              <div className="service-info">
                <div className="service-icon">
                  <FaCode />
                </div>
                <h3>Web Development</h3>
                <p className="service-description">
                  Create powerful, responsive web applications that deliver
                  exceptional user experiences and drive business growth. Our
                  team specializes in modern frameworks and technologies.
                </p>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>
                      <FaCheck /> Custom Web Application Development
                    </li>
                    <li>
                      <FaCheck /> Responsive Design & Mobile Optimization
                    </li>
                    <li>
                      <FaCheck /> E-commerce Solutions
                    </li>
                    <li>
                      <FaCheck /> Content Management Systems
                    </li>
                    <li>
                      <FaCheck /> API Development & Integration
                    </li>
                    <li>
                      <FaCheck /> Performance Optimization
                    </li>
                  </ul>
                </div>
                <div className="service-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vue.js</span>
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">PHP</span>
                  </div>
                </div>
              </div>
              <div className="service-visual">
                <div className="visual-placeholder">
                  <FaLaptopCode />
                  <span>Web Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Solutions */}
          <div className="service-detail reverse" data-aos="fade-up">
            <div className="service-content">
              <div className="service-visual">
                <div className="visual-placeholder">
                  <FaCloud />
                  <span>Cloud Solutions</span>
                </div>
              </div>
              <div className="service-info">
                <div className="service-icon">
                  <FaCloud />
                </div>
                <h3>Cloud Solutions</h3>
                <p className="service-description">
                  Migrate to the cloud and unlock scalability, reliability, and
                  cost-effectiveness. We provide comprehensive cloud services
                  from strategy to implementation.
                </p>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>
                      <FaCheck /> Cloud Migration Strategy
                    </li>
                    <li>
                      <FaCheck /> Infrastructure as a Service (IaaS)
                    </li>
                    <li>
                      <FaCheck /> Platform as a Service (PaaS)
                    </li>
                    <li>
                      <FaCheck /> Cloud Security & Compliance
                    </li>
                    <li>
                      <FaCheck /> Disaster Recovery Solutions
                    </li>
                    <li>
                      <FaCheck /> 24/7 Monitoring & Support
                    </li>
                  </ul>
                </div>
                <div className="service-tech">
                  <h4>Platforms:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">Azure</span>
                    <span className="tech-tag">Google Cloud</span>
                    <span className="tech-tag">Docker</span>
                    <span className="tech-tag">Kubernetes</span>
                    <span className="tech-tag">Terraform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="service-detail" data-aos="fade-up">
            <div className="service-content">
              <div className="service-info">
                <div className="service-icon">
                  <FaMobileAlt />
                </div>
                <h3>Mobile Development</h3>
                <p className="service-description">
                  Build native and cross-platform mobile applications that
                  engage users and expand your reach across iOS and Android
                  platforms.
                </p>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>
                      <FaCheck /> Native iOS & Android Apps
                    </li>
                    <li>
                      <FaCheck /> Cross-Platform Development
                    </li>
                    <li>
                      <FaCheck /> UI/UX Design
                    </li>
                    <li>
                      <FaCheck /> App Store Optimization
                    </li>
                    <li>
                      <FaCheck /> Backend API Development
                    </li>
                    <li>
                      <FaCheck /> App Maintenance & Updates
                    </li>
                  </ul>
                </div>
                <div className="service-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Swift</span>
                    <span className="tech-tag">Kotlin</span>
                    <span className="tech-tag">Xamarin</span>
                    <span className="tech-tag">Ionic</span>
                  </div>
                </div>
              </div>
              <div className="service-visual">
                <div className="visual-placeholder">
                  <FaMobileAlt />
                  <span>Mobile Apps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="service-detail reverse" data-aos="fade-up">
            <div className="service-content">
              <div className="service-visual">
                <div className="visual-placeholder">
                  <FaShieldAlt />
                  <span>Cybersecurity</span>
                </div>
              </div>
              <div className="service-info">
                <div className="service-icon">
                  <FaShieldAlt />
                </div>
                <h3>Cybersecurity</h3>
                <p className="service-description">
                  Protect your business from cyber threats with comprehensive
                  security solutions that safeguard your data, systems, and
                  reputation.
                </p>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>
                      <FaCheck /> Security Assessment & Audits
                    </li>
                    <li>
                      <FaCheck /> Penetration Testing
                    </li>
                    <li>
                      <FaCheck /> Network Security Solutions
                    </li>
                    <li>
                      <FaCheck /> Identity & Access Management
                    </li>
                    <li>
                      <FaCheck /> Security Monitoring & Response
                    </li>
                    <li>
                      <FaCheck /> Compliance Management
                    </li>
                  </ul>
                </div>
                <div className="service-tech">
                  <h4>Solutions:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Firewall</span>
                    <span className="tech-tag">SIEM</span>
                    <span className="tech-tag">VPN</span>
                    <span className="tech-tag">SSL/TLS</span>
                    <span className="tech-tag">Multi-Factor Auth</span>
                    <span className="tech-tag">Encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="service-detail" data-aos="fade-up">
            <div className="service-content">
              <div className="service-info">
                <div className="service-icon">
                  <FaChartLine />
                </div>
                <h3>Data Analytics & BI</h3>
                <p className="service-description">
                  Transform your data into actionable insights with advanced
                  analytics, machine learning, and business intelligence
                  solutions.
                </p>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>
                      <FaCheck /> Data Warehousing Solutions
                    </li>
                    <li>
                      <FaCheck /> Business Intelligence Dashboards
                    </li>
                    <li>
                      <FaCheck /> Predictive Analytics
                    </li>
                    <li>
                      <FaCheck /> Machine Learning Models
                    </li>
                    <li>
                      <FaCheck /> Data Visualization
                    </li>
                    <li>
                      <FaCheck /> Real-time Analytics
                    </li>
                  </ul>
                </div>
                <div className="service-tech">
                  <h4>Tools:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Power BI</span>
                    <span className="tech-tag">Tableau</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">R</span>
                    <span className="tech-tag">SQL</span>
                    <span className="tech-tag">Apache Spark</span>
                  </div>
                </div>
              </div>
              <div className="service-visual">
                <div className="visual-placeholder">
                  <FaChartLine />
                  <span>Data Analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* IT Consulting */}
          <div className="service-detail reverse" data-aos="fade-up">
            <div className="service-content">
              <div className="service-visual">
                <div className="visual-placeholder">
                  <FaCogs />
                  <span>IT Consulting</span>
                </div>
              </div>
              <div className="service-info">
                <div className="service-icon">
                  <FaCogs />
                </div>
                <h3>IT Consulting</h3>
                <p className="service-description">
                  Strategic technology consulting to optimize your IT
                  infrastructure, improve efficiency, and align technology with
                  your business objectives.
                </p>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>
                      <FaCheck /> Technology Strategy Planning
                    </li>
                    <li>
                      <FaCheck /> Digital Transformation Roadmap
                    </li>
                    <li>
                      <FaCheck /> IT Infrastructure Assessment
                    </li>
                    <li>
                      <FaCheck /> Process Optimization
                    </li>
                    <li>
                      <FaCheck /> Technology Vendor Selection
                    </li>
                    <li>
                      <FaCheck /> Change Management Support
                    </li>
                  </ul>
                </div>
                <div className="service-tech">
                  <h4>Focus Areas:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Digital Strategy</span>
                    <span className="tech-tag">Cloud Migration</span>
                    <span className="tech-tag">DevOps</span>
                    <span className="tech-tag">Automation</span>
                    <span className="tech-tag">Compliance</span>
                    <span className="tech-tag">ROI Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="process-timeline">
            <div
              className="process-step"
              data-aos="fade-up"
              data-aos-delay="100">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Discovery & Planning</h4>
                <p>
                  We start by understanding your business needs, goals, and
                  challenges to create a comprehensive project plan.
                </p>
              </div>
            </div>

            <div
              className="process-step"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Design & Architecture</h4>
                <p>
                  Our team designs the solution architecture and user experience
                  to ensure optimal performance and usability.
                </p>
              </div>
            </div>

            <div
              className="process-step"
              data-aos="fade-up"
              data-aos-delay="300">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Development & Testing</h4>
                <p>
                  We build your solution using agile methodologies with
                  continuous testing and quality assurance.
                </p>
              </div>
            </div>

            <div
              className="process-step"
              data-aos="fade-up"
              data-aos-delay="400">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Deployment & Launch</h4>
                <p>
                  We deploy your solution to production with careful monitoring
                  and ensure a smooth launch.
                </p>
              </div>
            </div>

            <div
              className="process-step"
              data-aos="fade-up"
              data-aos-delay="500">
              <div className="step-number">05</div>
              <div className="step-content">
                <h4>Support & Maintenance</h4>
                <p>
                  We provide ongoing support, maintenance, and updates to keep
                  your solution running optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss your project and how our services can help you
              achieve your goals.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaPhone />
                Contact Us
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                <FaFolderOpen />
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
