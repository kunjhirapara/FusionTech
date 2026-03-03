import { Link } from "react-router-dom";
import {
  FaInfoCircle,
  FaShieldAlt,
  FaDatabase,
  FaUserShield,
  FaShareAlt,
  FaClock,
  FaGlobeAmericas,
  FaChild,
  FaSyncAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCookieBite,
  FaLock,
  FaEye,
  FaTrashAlt,
  FaDownload,
  FaBan,
  FaExclamationTriangle,
} from "react-icons/fa";

const sections = [
  { id: "info-collect", title: "Information We Collect", icon: FaDatabase },
  { id: "how-use", title: "How We Use Your Information", icon: FaEye },
  { id: "legal-basis", title: "Legal Basis for Processing", icon: FaShieldAlt },
  { id: "data-sharing", title: "Data Sharing & Disclosure", icon: FaShareAlt },
  { id: "cookies", title: "Cookies & Tracking", icon: FaCookieBite },
  { id: "data-security", title: "Data Security", icon: FaLock },
  { id: "data-retention", title: "Data Retention", icon: FaClock },
  { id: "your-rights", title: "Your Rights", icon: FaUserShield },
  {
    id: "international",
    title: "International Transfers",
    icon: FaGlobeAmericas,
  },
  { id: "children", title: "Children's Privacy", icon: FaChild },
  { id: "third-party", title: "Third-Party Links", icon: FaShareAlt },
  { id: "changes", title: "Changes to This Policy", icon: FaSyncAlt },
  { id: "contact", title: "Contact Us", icon: FaEnvelope },
];

function PrivacyPolicy() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-30 pb-20 max-md:pt-24 max-md:pb-15 max-sm:pt-22 max-sm:pb-12 bg-slate-900 bg-grid-pattern text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.22)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="relative z-2" data-aos="fade-up">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 text-white max-md:text-[2rem] max-sm:text-[1.75rem]">
              Privacy Policy
            </h1>
            <p className="text-xl mb-8 opacity-90">
              How we collect, use, and protect your information
            </p>
            <nav className="text-sm opacity-75">
              <Link
                to="/"
                className="text-white no-underline transition-opacity duration-150 hover:opacity-100">
                Home
              </Link>{" "}
              / <span>Privacy Policy</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Notice Bar */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-300 mx-auto px-8 max-md:px-4 flex items-center gap-3 text-slate-600 text-[0.9rem]">
          <FaInfoCircle className="text-primary shrink-0 text-lg" />
          <span>
            Last updated: January 15, 2025 &middot; Effective immediately
          </span>
        </div>
      </div>

      {/* Legal Content */}
      <section className="pt-16 pb-20 max-sm:pt-8 max-sm:pb-12 bg-white">
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="grid grid-cols-[260px_1fr] max-lg:grid-cols-[220px_1fr] max-md:grid-cols-1 gap-12 max-lg:gap-8 items-start">
            {/* TOC Sidebar */}
            <aside className="sticky top-25 max-md:static">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b-2 border-primary">
                  Table of Contents
                </h3>
                <ol className="list-decimal pl-5 flex flex-col gap-1.5">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-[0.85rem] text-slate-600 no-underline leading-snug transition-colors duration-150 hover:text-primary">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Legal Body */}
            <div>
              {/* Section 1 */}
              <div id="info-collect" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaDatabase />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    1. Information We Collect
                  </h2>
                </div>
                <h3 className="text-[1.05rem] font-semibold text-slate-800 mt-5 mb-2.5">
                  Personal Information
                </h3>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  We collect information that you voluntarily provide to us when
                  you:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    "Fill out contact forms or request quotes",
                    "Create an account on our platforms",
                    "Subscribe to our newsletter or marketing communications",
                    "Apply for employment opportunities",
                    "Participate in surveys, promotions, or events",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="text-[1.05rem] font-semibold text-slate-800 mt-5 mb-2.5">
                  Automatically Collected Information
                </h3>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    "IP address and approximate geographic location",
                    "Browser type, version, and language preferences",
                    "Device information (operating system, screen resolution)",
                    "Pages visited, time spent, and navigation patterns",
                    "Referring website URLs and search terms used",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2 */}
              <div id="how-use" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaEye />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    2. How We Use Your Information
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    [
                      "Service Delivery",
                      "To provide, maintain, and improve our technology solutions",
                    ],
                    [
                      "Communication",
                      "To respond to inquiries, send project updates, and provide customer support",
                    ],
                    [
                      "Marketing",
                      "To send relevant newsletters, product updates, and promotional offers (with your consent)",
                    ],
                    [
                      "Analytics",
                      "To analyze website usage patterns and improve user experience",
                    ],
                    [
                      "Security",
                      "To detect and prevent fraud, unauthorized access, and other security threats",
                    ],
                    [
                      "Legal Compliance",
                      "To comply with applicable laws, regulations, and legal processes",
                    ],
                  ].map(([strong, rest], i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      <strong className="text-slate-800">{strong}:</strong>{" "}
                      {rest}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 – Legal Basis */}
              <div id="legal-basis" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaShieldAlt />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    3. Legal Basis for Processing (GDPR)
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  For users in the European Economic Area, we process personal
                  data based on the following legal grounds:
                </p>
                <div className="overflow-x-auto my-4 rounded-lg border border-slate-200">
                  <table className="w-full border-collapse text-[0.9rem]">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="py-3 px-4 text-left font-semibold">
                          Legal Basis
                        </th>
                        <th className="py-3 px-4 text-left font-semibold">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Consent",
                          "Marketing communications, cookies, analytics tracking",
                        ],
                        [
                          "Contractual Necessity",
                          "Service delivery, account management, billing",
                        ],
                        [
                          "Legitimate Interest",
                          "Website security, fraud prevention, service improvement",
                        ],
                        [
                          "Legal Obligation",
                          "Tax compliance, regulatory reporting, law enforcement requests",
                        ],
                      ].map(([basis, purpose], i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="py-3 px-4 text-slate-600 border-b border-slate-100 leading-normal">
                            {basis}
                          </td>
                          <td className="py-3 px-4 text-slate-600 border-b border-slate-100 leading-normal">
                            {purpose}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4 – Data Sharing */}
              <div id="data-sharing" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaShareAlt />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    4. Data Sharing & Disclosure
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  We do not sell your personal data. We may share information
                  with:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    [
                      "Service Providers",
                      "Trusted third-party vendors who assist in our operations (hosting, analytics, email services)",
                    ],
                    [
                      "Business Partners",
                      "With your consent, for co-marketed offers or integrated services",
                    ],
                    [
                      "Legal Requirements",
                      "When required by law, court order, or governmental regulation",
                    ],
                    [
                      "Business Transfers",
                      "In the event of a merger, acquisition, or sale of assets",
                    ],
                  ].map(([strong, rest], i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      <strong className="text-slate-800">{strong}:</strong>{" "}
                      {rest}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-3 bg-accent/6 border-l-4 border-primary rounded-r-lg py-4 px-5 my-5">
                  <FaExclamationTriangle className="text-primary shrink-0 mt-0.5 text-lg" />
                  <p className="m-0 text-[0.95rem] text-slate-700 leading-[1.7]">
                    We require all third-party service providers to respect the
                    security of your data and treat it in accordance with
                    applicable law.
                  </p>
                </div>
              </div>

              {/* Section 5 – Cookies */}
              <div id="cookies" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaCookieBite />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    5. Cookies & Tracking Technologies
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience. Types of cookies we use:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    [
                      "Essential Cookies",
                      "Required for basic website functionality (session management, security)",
                    ],
                    [
                      "Analytics Cookies",
                      "Help us understand how visitors interact with our website",
                    ],
                    [
                      "Functional Cookies",
                      "Remember your preferences and settings for a personalized experience",
                    ],
                    [
                      "Marketing Cookies",
                      "Track your activity across websites to deliver targeted advertisements",
                    ],
                  ].map(([strong, rest], i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      <strong className="text-slate-800">{strong}:</strong>{" "}
                      {rest}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 6 – Data Security */}
              <div
                id="data-security"
                className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaLock />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    6. Data Security
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  We implement appropriate technical and organizational measures
                  to protect your personal data, including:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    "SSL/TLS encryption for all data in transit",
                    "AES-256 encryption for data at rest",
                    "Regular security audits and penetration testing",
                    "Access controls and employee training programs",
                    "Incident response and disaster recovery procedures",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 7 – Data Retention */}
              <div
                id="data-retention"
                className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaClock />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    7. Data Retention
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  We retain your personal data only for as long as necessary to
                  fulfill the purposes for which it was collected, or as
                  required by law. After this period, data is securely deleted
                  or anonymized.
                </p>
              </div>

              {/* Section 8 – Your Rights */}
              <div id="your-rights" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaUserShield />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    8. Your Rights
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  Depending on your jurisdiction, you may have the following
                  rights:
                </p>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 my-5">
                  {[
                    {
                      icon: FaEye,
                      title: "Right to Access",
                      desc: "Request a copy of your personal data",
                    },
                    {
                      icon: FaSyncAlt,
                      title: "Right to Rectification",
                      desc: "Correct inaccurate or incomplete data",
                    },
                    {
                      icon: FaTrashAlt,
                      title: "Right to Erasure",
                      desc: "Request deletion of your data",
                    },
                    {
                      icon: FaBan,
                      title: "Right to Restrict",
                      desc: "Limit processing of your data",
                    },
                    {
                      icon: FaDownload,
                      title: "Right to Portability",
                      desc: "Receive your data in a portable format",
                    },
                    {
                      icon: FaExclamationTriangle,
                      title: "Right to Object",
                      desc: "Object to processing of your data",
                    },
                  ].map((r) => (
                    <div
                      key={r.title}
                      className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col gap-2 transition-all duration-150 hover:border-primary hover:shadow-[0_4px_12px_rgba(37,99,235,0.1)]">
                      <r.icon className="text-primary text-xl" />
                      <h4 className="text-[0.95rem] font-semibold text-slate-900 m-0">
                        {r.title}
                      </h4>
                      <p className="text-[0.85rem] text-slate-500 leading-normal m-0">
                        {r.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 9 – International Transfers */}
              <div
                id="international"
                className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaGlobeAmericas />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    9. International Data Transfers
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  Your data may be transferred to and processed in countries
                  other than your country of residence. We ensure appropriate
                  safeguards are in place, including Standard Contractual
                  Clauses approved by the European Commission.
                </p>
              </div>

              {/* Section 10 – Children */}
              <div id="children" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaChild />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    10. Children's Privacy
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  Our services are not intended for individuals under the age of
                  16. We do not knowingly collect personal data from children.
                  If you believe we have collected data from a child, please
                  contact us immediately.
                </p>
              </div>

              {/* Section 11 – Third-Party Links */}
              <div id="third-party" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaShareAlt />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    11. Third-Party Links
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites. We encourage you to review their privacy policies
                  before providing any personal information.
                </p>
              </div>

              {/* Section 12 – Changes */}
              <div id="changes" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaSyncAlt />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    12. Changes to This Policy
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated "Last
                  Updated" date. We encourage you to review this policy
                  periodically.
                </p>
                <div className="flex items-start gap-3 bg-accent/6 border-l-4 border-primary rounded-r-lg py-4 px-5 my-5">
                  <FaInfoCircle className="text-primary shrink-0 mt-0.5 text-lg" />
                  <p className="m-0 text-[0.95rem] text-slate-700 leading-[1.7]">
                    Continued use of our services after any changes constitutes
                    acceptance of the updated policy.
                  </p>
                </div>
              </div>

              {/* Section 13 – Contact */}
              <div id="contact" className="py-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaEnvelope />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    13. Contact Us
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col gap-2.5 mt-4">
                  {[
                    {
                      icon: FaEnvelope,
                      label: "Email:",
                      val: "privacy@fusiontech.com",
                      href: "mailto:privacy@fusiontech.com",
                    },
                    {
                      icon: FaPhone,
                      label: "Phone:",
                      val: "+1 (555) 123-4567",
                      href: "tel:+15551234567",
                    },
                    {
                      icon: FaMapMarkerAlt,
                      label: "Address:",
                      val: "123 Innovation Drive, San Francisco, CA 94105",
                      href: null,
                    },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center gap-2.5 text-slate-700 text-[0.95rem]">
                      <c.icon className="text-primary shrink-0" />
                      <span>
                        {c.label}{" "}
                        {c.href ? (
                          <a
                            href={c.href}
                            className="text-primary no-underline hover:underline">
                            {c.val}
                          </a>
                        ) : (
                          c.val
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
