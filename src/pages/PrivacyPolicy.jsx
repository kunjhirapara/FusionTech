import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUserLock,
  FaCookieBite,
  FaDatabase,
  FaEnvelope,
  FaGlobe,
  FaLock,
  FaUserCheck,
  FaEye,
  FaTrashAlt,
  FaEdit,
  FaBan,
} from "react-icons/fa";

function PrivacyPolicy() {
  const lastUpdated = "March 1, 2026";
  const effectiveDate = "March 1, 2026";

  return (
    <div className="legal-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content" data-aos="fade-up">
            <h1>Privacy Policy</h1>
            <p>How we collect, use, and protect your personal information</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link> / <span>Privacy Policy</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Legal Notice Bar */}
      <section className="legal-notice-bar">
        <div className="container">
          <div className="legal-notice-content">
            <FaShieldAlt />
            <p>
              <strong>Last Updated:</strong> {lastUpdated} &nbsp;|&nbsp;
              <strong>Effective Date:</strong> {effectiveDate}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-content-section">
        <div className="container">
          <div className="legal-layout">
            {/* Table of Contents */}
            <aside className="legal-toc" data-aos="fade-right">
              <div className="toc-card">
                <h3>Table of Contents</h3>
                <ol className="toc-list">
                  <li>
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#information-we-collect">Information We Collect</a>
                  </li>
                  <li>
                    <a href="#how-we-use">How We Use Your Information</a>
                  </li>
                  <li>
                    <a href="#data-sharing">Data Sharing &amp; Disclosure</a>
                  </li>
                  <li>
                    <a href="#cookies">Cookies &amp; Tracking</a>
                  </li>
                  <li>
                    <a href="#data-security">Data Security</a>
                  </li>
                  <li>
                    <a href="#data-retention">Data Retention</a>
                  </li>
                  <li>
                    <a href="#your-rights">Your Rights</a>
                  </li>
                  <li>
                    <a href="#international-transfers">
                      International Transfers
                    </a>
                  </li>
                  <li>
                    <a href="#children">Children's Privacy</a>
                  </li>
                  <li>
                    <a href="#third-party">Third-Party Links</a>
                  </li>
                  <li>
                    <a href="#changes">Policy Changes</a>
                  </li>
                  <li>
                    <a href="#contact-dpo">Contact Us</a>
                  </li>
                </ol>
              </div>
            </aside>

            {/* Content Body */}
            <main className="legal-body" data-aos="fade-left">
              {/* Overview */}
              <div id="overview" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaShieldAlt />
                  </div>
                  <h2>1. Overview</h2>
                </div>
                <p>
                  FusionTech ("we", "our", or "us") is committed to protecting
                  the privacy and security of your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website at{" "}
                  <strong>fusiontech.com</strong> or engage with our IT
                  services.
                </p>
                <p>
                  We provide a wide range of IT solutions — including web
                  development, mobile application development, cloud solutions,
                  cybersecurity consulting, data analytics, and IT consulting —
                  to businesses worldwide. In delivering these services, we may
                  process personal data on behalf of our clients (as a data
                  processor) as well as directly from visitors and prospective
                  clients (as a data controller).
                </p>
                <p>
                  Please read this policy carefully. By accessing our website or
                  engaging our services, you acknowledge that you have read and
                  understood this Privacy Policy. If you do not agree with our
                  practices, please do not use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div id="information-we-collect" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaDatabase />
                  </div>
                  <h2>2. Information We Collect</h2>
                </div>

                <h3>2.1 Information You Provide Directly</h3>
                <ul className="legal-list">
                  <li>
                    <strong>Contact &amp; Inquiry Data:</strong> Name, email
                    address, phone number, company name, and message content
                    when you submit our contact form or request a project quote.
                  </li>
                  <li>
                    <strong>Account Information:</strong> Username, password
                    (hashed), and profile details if you create an account on
                    our client portal.
                  </li>
                  <li>
                    <strong>Project Details:</strong> Technical requirements,
                    business specifications, and related documents you share
                    with us during a project engagement.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Billing address and
                    payment details processed through our PCI-DSS compliant
                    payment processors. We do not store card numbers on our
                    servers.
                  </li>
                  <li>
                    <strong>Newsletter Subscriptions:</strong> Email address and
                    preferences when you opt in to our mailing list.
                  </li>
                  <li>
                    <strong>Communications:</strong> Email correspondence,
                    support tickets, and any other communications you send us.
                  </li>
                </ul>

                <h3>2.2 Information Collected Automatically</h3>
                <ul className="legal-list">
                  <li>
                    <strong>Log Data:</strong> IP address, browser type and
                    version, operating system, referring URLs, pages visited,
                    and timestamps.
                  </li>
                  <li>
                    <strong>Device Information:</strong> Device identifiers,
                    screen resolution, and hardware model.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Click-stream data, navigation
                    paths, time spent on pages, and features used.
                  </li>
                  <li>
                    <strong>Cookies &amp; Similar Technologies:</strong> See
                    Section 5 for full details.
                  </li>
                </ul>

                <h3>2.3 Information from Third Parties</h3>
                <ul className="legal-list">
                  <li>
                    <strong>Business Partners &amp; Referrals:</strong> Basic
                    contact and company details shared when a partner refers a
                    client to us.
                  </li>
                  <li>
                    <strong>Social Media:</strong> Public profile data when you
                    connect or interact with us on LinkedIn, Twitter/X, GitHub,
                    or Instagram.
                  </li>
                  <li>
                    <strong>Analytics Providers:</strong> Aggregated and
                    anonymized performance data from tools such as Google
                    Analytics.
                  </li>
                </ul>
              </div>

              {/* How We Use */}
              <div id="how-we-use" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaEye />
                  </div>
                  <h2>3. How We Use Your Information</h2>
                </div>
                <p>
                  We process your personal data for the following purposes and
                  legal bases:
                </p>

                <div className="legal-table-wrapper">
                  <table className="legal-table">
                    <thead>
                      <tr>
                        <th>Purpose</th>
                        <th>Legal Basis (GDPR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Responding to inquiries and project requests</td>
                        <td>Pre-contractual necessity / Legitimate interest</td>
                      </tr>
                      <tr>
                        <td>Delivering contracted IT services and support</td>
                        <td>Performance of contract</td>
                      </tr>
                      <tr>
                        <td>Sending service-related communications</td>
                        <td>Performance of contract / Legitimate interest</td>
                      </tr>
                      <tr>
                        <td>Sending marketing emails and newsletters</td>
                        <td>Consent (opt-in)</td>
                      </tr>
                      <tr>
                        <td>
                          Processing payments and maintaining billing records
                        </td>
                        <td>Performance of contract / Legal obligation</td>
                      </tr>
                      <tr>
                        <td>Improving our website and services</td>
                        <td>Legitimate interest</td>
                      </tr>
                      <tr>
                        <td>Security monitoring and fraud prevention</td>
                        <td>Legitimate interest / Legal obligation</td>
                      </tr>
                      <tr>
                        <td>Legal and regulatory compliance</td>
                        <td>Legal obligation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Data Sharing */}
              <div id="data-sharing" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaGlobe />
                  </div>
                  <h2>4. Data Sharing &amp; Disclosure</h2>
                </div>
                <p>
                  We do not sell, rent, or trade your personal information. We
                  may share your data only in the following limited
                  circumstances:
                </p>
                <ul className="legal-list">
                  <li>
                    <strong>Service Providers:</strong> Trusted sub-processors
                    who assist us in operating our business (e.g., cloud hosting
                    on AWS, email delivery, analytics), bound by strict data
                    processing agreements.
                  </li>
                  <li>
                    <strong>Professional Advisers:</strong> Lawyers,
                    accountants, and auditors under confidentiality obligations,
                    where necessary.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets, your data may be
                    transferred. We will notify you via email or a prominent
                    website notice before any such transfer occurs.
                  </li>
                  <li>
                    <strong>Legal Obligations:</strong> When required by law,
                    court order, or to protect the rights, property, or safety
                    of FusionTech, our clients, or the public.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> For any other purpose
                    expressly authorized by you.
                  </li>
                </ul>
                <div className="legal-callout">
                  <FaLock />
                  <p>
                    All third-party service providers are contractually
                    obligated to process data only on our instructions and to
                    implement appropriate security measures.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div id="cookies" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaCookieBite />
                  </div>
                  <h2>5. Cookies &amp; Tracking Technologies</h2>
                </div>
                <p>
                  We use cookies and similar technologies to improve your
                  experience on our website.
                </p>

                <h3>5.1 Types of Cookies We Use</h3>
                <ul className="legal-list">
                  <li>
                    <strong>Strictly Necessary:</strong> Essential for the
                    website to function (session management, security tokens).
                    These cannot be disabled.
                  </li>
                  <li>
                    <strong>Performance &amp; Analytics:</strong> Help us
                    understand how visitors interact with our site (e.g., Google
                    Analytics). Anonymized where possible.
                  </li>
                  <li>
                    <strong>Functional:</strong> Remember your preferences
                    (e.g., language, region) to personalize your experience.
                  </li>
                  <li>
                    <strong>Marketing:</strong> Used only with your explicit
                    consent to deliver relevant advertising. Currently not used
                    on our website.
                  </li>
                </ul>

                <h3>5.2 Managing Cookies</h3>
                <p>
                  You can control cookies through your browser settings or our
                  cookie consent banner. Disabling certain cookies may affect
                  the functionality of our website. For more information, visit{" "}
                  <a
                    href="https://allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    allaboutcookies.org
                  </a>
                  .
                </p>
              </div>

              {/* Data Security */}
              <div id="data-security" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaLock />
                  </div>
                  <h2>6. Data Security</h2>
                </div>
                <p>
                  As a cybersecurity-conscious IT company, we implement robust
                  technical and organizational measures to protect your data:
                </p>
                <ul className="legal-list">
                  <li>
                    TLS 1.3 encryption for all data transmitted over the
                    internet
                  </li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>
                    Role-based access controls and multi-factor authentication
                    for internal systems
                  </li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Employee privacy and security training</li>
                  <li>
                    Incident response procedures with breach notification within
                    72 hours (GDPR Art. 33)
                  </li>
                </ul>
                <p>
                  Despite these measures, no method of transmission over the
                  internet is 100% secure. We cannot guarantee absolute
                  security, but we continuously improve our practices to protect
                  your information.
                </p>
              </div>

              {/* Data Retention */}
              <div id="data-retention" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaDatabase />
                  </div>
                  <h2>7. Data Retention</h2>
                </div>
                <p>We retain personal data only for as long as necessary:</p>
                <ul className="legal-list">
                  <li>
                    <strong>Contact inquiries:</strong> 2 years from last
                    interaction (or duration of business relationship)
                  </li>
                  <li>
                    <strong>Client project records:</strong> 7 years
                    post-project completion (for legal and tax compliance)
                  </li>
                  <li>
                    <strong>Payment records:</strong> 7 years (legal obligation)
                  </li>
                  <li>
                    <strong>Marketing subscriptions:</strong> Until you
                    unsubscribe or withdraw consent
                  </li>
                  <li>
                    <strong>Website log data:</strong> 90 days
                  </li>
                  <li>
                    <strong>Cookie data:</strong> Varies by cookie type (session
                    to 2 years)
                  </li>
                </ul>
                <p>
                  After these periods, data is securely deleted or anonymized in
                  accordance with our data destruction policy.
                </p>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaUserCheck />
                  </div>
                  <h2>8. Your Privacy Rights</h2>
                </div>
                <p>
                  Depending on your location, you may have the following rights:
                </p>

                <div className="rights-grid">
                  <div className="right-card">
                    <FaEye />
                    <h4>Access</h4>
                    <p>
                      Request a copy of the personal data we hold about you.
                    </p>
                  </div>
                  <div className="right-card">
                    <FaEdit />
                    <h4>Rectification</h4>
                    <p>Correct inaccurate or incomplete personal data.</p>
                  </div>
                  <div className="right-card">
                    <FaTrashAlt />
                    <h4>Erasure</h4>
                    <p>
                      Request deletion of your personal data ("right to be
                      forgotten").
                    </p>
                  </div>
                  <div className="right-card">
                    <FaBan />
                    <h4>Restriction</h4>
                    <p>
                      Limit how we process your personal data in certain
                      circumstances.
                    </p>
                  </div>
                  <div className="right-card">
                    <FaDatabase />
                    <h4>Portability</h4>
                    <p>
                      Receive your data in a structured, machine-readable
                      format.
                    </p>
                  </div>
                  <div className="right-card">
                    <FaUserLock />
                    <h4>Objection</h4>
                    <p>
                      Object to processing based on legitimate interests or for
                      direct marketing.
                    </p>
                  </div>
                </div>

                <p style={{ marginTop: "1.5rem" }}>
                  To exercise any of these rights, contact our Data Protection
                  Officer at{" "}
                  <a href="mailto:privacy@fusiontech.com">
                    privacy@fusiontech.com
                  </a>
                  . We will respond within <strong>30 days</strong>. You also
                  have the right to lodge a complaint with your local data
                  protection authority.
                </p>
              </div>

              {/* International Transfers */}
              <div id="international-transfers" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaGlobe />
                  </div>
                  <h2>9. International Data Transfers</h2>
                </div>
                <p>
                  FusionTech serves clients worldwide. Your data may be
                  transferred to and processed in countries other than your
                  country of residence. When transferring data outside the
                  European Economic Area (EEA), we rely on appropriate
                  safeguards such as:
                </p>
                <ul className="legal-list">
                  <li>
                    European Commission Standard Contractual Clauses (SCCs)
                  </li>
                  <li>Adequacy decisions by the European Commission</li>
                  <li>Binding Corporate Rules where applicable</li>
                </ul>
              </div>

              {/* Children */}
              <div id="children" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaUserLock />
                  </div>
                  <h2>10. Children's Privacy</h2>
                </div>
                <p>
                  Our services are intended for business professionals and are
                  not directed to individuals under the age of 16. We do not
                  knowingly collect personal information from children. If you
                  believe a child has provided us with personal data, please
                  contact us immediately at{" "}
                  <a href="mailto:privacy@fusiontech.com">
                    privacy@fusiontech.com
                  </a>{" "}
                  and we will promptly delete such information.
                </p>
              </div>

              {/* Third-Party Links */}
              <div id="third-party" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaGlobe />
                  </div>
                  <h2>11. Third-Party Links</h2>
                </div>
                <p>
                  Our website may contain links to third-party websites (e.g.,
                  technology partners, social media platforms). We are not
                  responsible for the privacy practices of those sites. We
                  encourage you to review the privacy policies of any
                  third-party site you visit.
                </p>
              </div>

              {/* Changes */}
              <div id="changes" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaEdit />
                  </div>
                  <h2>12. Changes to This Policy</h2>
                </div>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for legal, operational, or
                  regulatory reasons. The updated policy will be posted on this
                  page with a revised "Last Updated" date. For material changes,
                  we will notify registered users via email at least 30 days
                  before the change takes effect.
                </p>
                <p>
                  Your continued use of our services after the effective date
                  constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Contact DPO */}
              <div id="contact-dpo" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaEnvelope />
                  </div>
                  <h2>13. Contact Us</h2>
                </div>
                <p>
                  For questions, concerns, or to exercise your privacy rights,
                  please contact our Data Protection Officer:
                </p>
                <div className="legal-contact-box">
                  <div className="legal-contact-item">
                    <strong>FusionTech — Data Protection Officer</strong>
                  </div>
                  <div className="legal-contact-item">
                    <FaEnvelope />{" "}
                    <a href="mailto:privacy@fusiontech.com">
                      privacy@fusiontech.com
                    </a>
                  </div>
                  <div className="legal-contact-item">
                    <FaGlobe /> <span>123 Tech Street, Digital City</span>
                  </div>
                  <div className="legal-contact-item">
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <p style={{ marginTop: "1.5rem" }}>
                  Alternatively, use our <Link to="/contact">contact form</Link>{" "}
                  and select "Privacy Inquiry" in the subject line.
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
