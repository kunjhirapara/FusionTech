import { Link } from "react-router-dom";
import {
  FaInfoCircle,
  FaFileContract,
  FaUserCheck,
  FaBan,
  FaCreditCard,
  FaShieldAlt,
  FaCopyright,
  FaExclamationTriangle,
  FaBalanceScale,
  FaGavel,
  FaSyncAlt,
  FaHandshake,
  FaGlobeAmericas,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClipboardList,
  FaServer,
} from "react-icons/fa";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", icon: FaFileContract },
  { id: "services", title: "Services Description", icon: FaClipboardList },
  { id: "accounts", title: "User Accounts", icon: FaUserCheck },
  { id: "acceptable-use", title: "Acceptable Use", icon: FaHandshake },
  { id: "prohibited", title: "Prohibited Activities", icon: FaBan },
  { id: "payment", title: "Payment Terms", icon: FaCreditCard },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: FaCopyright,
  },
  { id: "confidentiality", title: "Confidentiality", icon: FaShieldAlt },
  {
    id: "warranties",
    title: "Warranties & Disclaimers",
    icon: FaExclamationTriangle,
  },
  { id: "limitation", title: "Limitation of Liability", icon: FaBalanceScale },
  { id: "indemnification", title: "Indemnification", icon: FaGavel },
  { id: "termination", title: "Termination", icon: FaBan },
  { id: "hosting", title: "Hosting & Uptime", icon: FaServer },
  { id: "governing-law", title: "Governing Law", icon: FaGlobeAmericas },
  { id: "changes", title: "Changes to Terms", icon: FaSyncAlt },
  { id: "contact", title: "Contact Information", icon: FaEnvelope },
];

function TermsOfService() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-30 pb-20 max-md:pt-24 max-md:pb-15 max-sm:pt-22 max-sm:pb-12 bg-slate-900 bg-grid-pattern text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-[radial-gradient(ellipse,rgba(37,99,235,0.22)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-300 mx-auto px-8 max-md:px-4">
          <div className="relative z-2" data-aos="fade-up">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 text-white max-md:text-[2rem] max-sm:text-[1.75rem]">
              Terms of Service
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Please read these terms carefully before using our services
            </p>
            <nav className="text-sm opacity-75">
              <Link
                to="/"
                className="text-white no-underline transition-opacity duration-150 hover:opacity-100">
                Home
              </Link>{" "}
              / <span>Terms of Service</span>
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
              {/* 1. Acceptance */}
              <div id="acceptance" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaFileContract />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    1. Acceptance of Terms
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  By accessing or using FusionTech's website and services, you
                  agree to be bound by these Terms of Service. If you do not
                  agree to all the terms and conditions, you must not access or
                  use our services.
                </p>
                <div className="flex items-start gap-3 bg-accent/6 border-l-4 border-primary rounded-r-lg py-4 px-5 my-5">
                  <FaExclamationTriangle className="text-primary shrink-0 mt-0.5 text-lg" />
                  <p className="m-0 text-[0.95rem] text-slate-700 leading-[1.7]">
                    These terms constitute a legally binding agreement between
                    you and FusionTech. Please read them carefully before
                    proceeding.
                  </p>
                </div>
              </div>

              {/* 2. Services Description */}
              <div id="services" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaClipboardList />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    2. Services Description
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  FusionTech provides technology consulting and development
                  services, including but not limited to:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    "Custom web and mobile application development",
                    "Cloud infrastructure setup and management",
                    "E-commerce platform development and optimization",
                    "Data analytics and business intelligence solutions",
                    "IT consulting and digital transformation services",
                    "Ongoing maintenance and technical support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. User Accounts */}
              <div id="accounts" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaUserCheck />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    3. User Accounts
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  When creating an account, you agree to:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    "Provide accurate, current, and complete information",
                    "Maintain the security of your account credentials",
                    "Notify us immediately of any unauthorized access",
                    "Accept responsibility for all activities under your account",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Acceptable Use */}
              <div
                id="acceptable-use"
                className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaHandshake />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    4. Acceptable Use Policy
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  You agree to use our services only for lawful purposes and in
                  accordance with these Terms. You agree not to use our services
                  in any way that violates any applicable local, state,
                  national, or international law or regulation.
                </p>
              </div>

              {/* 5. Prohibited Activities */}
              <div id="prohibited" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaBan />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    5. Prohibited Activities
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  You are prohibited from:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    "Using the services for any illegal or unauthorized purpose",
                    "Attempting to gain unauthorized access to our systems or networks",
                    "Transmitting viruses, malware, or other harmful code",
                    "Engaging in any activity that disrupts or interferes with our services",
                    "Reverse engineering or decompiling any part of our software",
                    "Using automated systems (bots, scrapers) without our written permission",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Payment Terms */}
              <div id="payment" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaCreditCard />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    6. Payment Terms
                  </h2>
                </div>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    [
                      "Project Estimates",
                      "All quotes are valid for 30 days unless otherwise specified",
                    ],
                    [
                      "Payment Schedule",
                      "Payments are due as outlined in the project agreement (typically milestone-based)",
                    ],
                    [
                      "Late Payments",
                      "Invoices unpaid after 30 days may incur a 1.5% monthly late fee",
                    ],
                    [
                      "Refund Policy",
                      "Deposits are non-refundable; partial refunds may be issued for incomplete work",
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

              {/* 7. Intellectual Property */}
              <div
                id="intellectual-property"
                className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaCopyright />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    7. Intellectual Property
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  All intellectual property rights in our website, services, and
                  materials are owned by FusionTech or our licensors. Upon full
                  payment, clients receive ownership of custom-developed
                  deliverables as specified in the project agreement.
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    "FusionTech retains rights to pre-existing code, frameworks, and tools",
                    "Clients receive a perpetual, non-exclusive license for third-party components",
                    "Portfolio usage rights are retained by FusionTech unless otherwise agreed",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 8. Confidentiality */}
              <div
                id="confidentiality"
                className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaShieldAlt />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    8. Confidentiality
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  Both parties agree to maintain the confidentiality of
                  proprietary information shared during the course of the
                  engagement. This obligation survives the termination of these
                  Terms for a period of two (2) years.
                </p>
              </div>

              {/* 9. Warranties & Disclaimers */}
              <div id="warranties" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaExclamationTriangle />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    9. Warranties & Disclaimers
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  Our services are provided "as is" and "as available." While we
                  strive for excellence, we do not warrant that our services
                  will be uninterrupted, error-free, or free of harmful
                  components.
                </p>
                <div className="flex items-start gap-3 bg-accent/6 border-l-4 border-primary rounded-r-lg py-4 px-5 my-5">
                  <FaExclamationTriangle className="text-primary shrink-0 mt-0.5 text-lg" />
                  <p className="m-0 text-[0.95rem] text-slate-700 leading-[1.7]">
                    We provide a 30-day warranty period after project delivery
                    for bug fixes related to agreed-upon specifications.
                  </p>
                </div>
              </div>

              {/* 10. Limitation of Liability */}
              <div id="limitation" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaBalanceScale />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    10. Limitation of Liability
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  To the maximum extent permitted by law, FusionTech shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your use of
                  our services. Our total liability shall not exceed the amount
                  paid by you for the specific service giving rise to the claim.
                </p>
              </div>

              {/* 11. Indemnification */}
              <div
                id="indemnification"
                className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaGavel />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    11. Indemnification
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  You agree to indemnify, defend, and hold harmless FusionTech
                  and its officers, directors, employees, and agents from any
                  claims, damages, losses, or expenses arising from your use of
                  our services or violation of these Terms.
                </p>
              </div>

              {/* 12. Termination */}
              <div id="termination" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaBan />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    12. Termination
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  Either party may terminate these Terms with 30 days' written
                  notice. Upon termination:
                </p>
                <ul className="list-none flex flex-col gap-2.5 my-3">
                  {[
                    "All outstanding payments become immediately due",
                    "Client receives all completed deliverables paid for to date",
                    "Both parties must return or destroy confidential information",
                    "Provisions regarding IP, confidentiality, and liability survive termination",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 leading-[1.7] pl-[1.4rem] relative before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 13. Hosting & Uptime */}
              <div id="hosting" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaServer />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    13. Hosting & Uptime
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  For clients using our hosting services, we target 99.9%
                  uptime. Scheduled maintenance windows will be communicated at
                  least 48 hours in advance. We are not liable for downtime
                  caused by factors outside our reasonable control.
                </p>
              </div>

              {/* 14. Governing Law */}
              <div
                id="governing-law"
                className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaGlobeAmericas />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    14. Governing Law
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of California, without regard to
                  conflict of law principles. Any disputes shall be resolved
                  through binding arbitration in San Francisco, CA.
                </p>
              </div>

              {/* 15. Changes to Terms */}
              <div id="changes" className="py-8 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaSyncAlt />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    15. Changes to Terms
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  We reserve the right to modify these Terms at any time.
                  Changes will be effective upon posting to our website. Your
                  continued use of our services after any modifications
                  indicates acceptance of the updated Terms.
                </p>
                <div className="flex items-start gap-3 bg-accent/6 border-l-4 border-primary rounded-r-lg py-4 px-5 my-5">
                  <FaInfoCircle className="text-primary shrink-0 mt-0.5 text-lg" />
                  <p className="m-0 text-[0.95rem] text-slate-700 leading-[1.7]">
                    We will notify registered users of significant changes via
                    email at least 14 days before they take effect.
                  </p>
                </div>
              </div>

              {/* 16. Contact Information */}
              <div id="contact" className="py-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10.5 h-10.5 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0 text-primary text-lg">
                    <FaEnvelope />
                  </div>
                  <h2 className="text-[1.4rem] font-bold text-slate-900 m-0">
                    16. Contact Information
                  </h2>
                </div>
                <p className="text-slate-600 leading-[1.8] mb-3">
                  For questions or concerns about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col gap-2.5 mt-4">
                  {[
                    {
                      icon: FaEnvelope,
                      label: "Email:",
                      val: "legal@fusiontech.com",
                      href: "mailto:legal@fusiontech.com",
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

export default TermsOfService;
