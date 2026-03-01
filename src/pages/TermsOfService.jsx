import { Link } from "react-router-dom";
import {
  FaFileContract,
  FaHandshake,
  FaCode,
  FaDollarSign,
  FaShieldAlt,
  FaUserLock,
  FaBan,
  FaBalanceScale,
  FaExclamationTriangle,
  FaEdit,
  FaEnvelope,
  FaGlobe,
  FaCheckCircle,
  FaClock,
  FaLock,
} from "react-icons/fa";

function TermsOfService() {
  const lastUpdated = "March 1, 2026";
  const effectiveDate = "March 1, 2026";

  return (
    <div className="legal-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content" data-aos="fade-up">
            <h1>Terms of Service</h1>
            <p>The agreement that governs your use of FusionTech services</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link> / <span>Terms of Service</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Legal Notice Bar */}
      <section className="legal-notice-bar">
        <div className="container">
          <div className="legal-notice-content">
            <FaFileContract />
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
                    <a href="#acceptance">Acceptance of Terms</a>
                  </li>
                  <li>
                    <a href="#services">Services Description</a>
                  </li>
                  <li>
                    <a href="#eligibility">Eligibility</a>
                  </li>
                  <li>
                    <a href="#project-engagement">Project Engagements</a>
                  </li>
                  <li>
                    <a href="#payment">Payment &amp; Billing</a>
                  </li>
                  <li>
                    <a href="#intellectual-property">Intellectual Property</a>
                  </li>
                  <li>
                    <a href="#confidentiality">Confidentiality</a>
                  </li>
                  <li>
                    <a href="#warranties">Warranties &amp; Support</a>
                  </li>
                  <li>
                    <a href="#liability">Limitation of Liability</a>
                  </li>
                  <li>
                    <a href="#indemnification">Indemnification</a>
                  </li>
                  <li>
                    <a href="#prohibited">Prohibited Use</a>
                  </li>
                  <li>
                    <a href="#termination">Termination</a>
                  </li>
                  <li>
                    <a href="#dispute">Dispute Resolution</a>
                  </li>
                  <li>
                    <a href="#governing-law">Governing Law</a>
                  </li>
                  <li>
                    <a href="#changes">Changes to Terms</a>
                  </li>
                  <li>
                    <a href="#contact-legal">Contact Us</a>
                  </li>
                </ol>
              </div>
            </aside>

            {/* Content Body */}
            <main className="legal-body" data-aos="fade-left">
              {/* Acceptance */}
              <div id="acceptance" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaFileContract />
                  </div>
                  <h2>1. Acceptance of Terms</h2>
                </div>
                <p>
                  Welcome to FusionTech. These Terms of Service ("Terms")
                  constitute a legally binding agreement between you ("Client",
                  "you", or "your") and FusionTech ("Company", "we", "our", or
                  "us"), a technology solutions company with offices at 123 Tech
                  Street, Digital City.
                </p>
                <p>
                  By accessing our website at <strong>fusiontech.com</strong>,
                  submitting a project inquiry, signing a service proposal, or
                  otherwise engaging our services, you confirm that you have
                  read, understood, and agree to be bound by these Terms and our{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>, which is
                  incorporated herein by reference.
                </p>
                <div className="legal-callout">
                  <FaExclamationTriangle />
                  <p>
                    <strong>
                      Please read these Terms carefully before using our
                      services.
                    </strong>{" "}
                    If you do not agree to these Terms, you may not access our
                    website or engage our services.
                  </p>
                </div>
              </div>

              {/* Services Description */}
              <div id="services" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaCode />
                  </div>
                  <h2>2. Services Description</h2>
                </div>
                <p>
                  FusionTech provides professional IT solutions and consulting
                  services, including but not limited to:
                </p>
                <ul className="legal-list">
                  <li>
                    <strong>Web Development:</strong> Custom web application
                    development, responsive design, e-commerce solutions,
                    content management systems, and API development.
                  </li>
                  <li>
                    <strong>Mobile Application Development:</strong> Native iOS
                    and Android applications, cross-platform solutions (React
                    Native, Flutter), and mobile UI/UX design.
                  </li>
                  <li>
                    <strong>Cloud Solutions:</strong> Cloud migration,
                    infrastructure design and management, DevOps implementation,
                    CI/CD pipelines, and managed cloud services on AWS, Azure,
                    or GCP.
                  </li>
                  <li>
                    <strong>Cybersecurity:</strong> Security audits, penetration
                    testing, vulnerability assessments, compliance consulting
                    (ISO 27001, SOC 2, GDPR), and security training.
                  </li>
                  <li>
                    <strong>Data Analytics &amp; AI:</strong> Business
                    intelligence dashboards, data engineering, machine learning
                    model development, and predictive analytics.
                  </li>
                  <li>
                    <strong>IT Consulting:</strong> Digital transformation
                    strategy, technology roadmaps, architecture reviews, and
                    CTO-as-a-Service.
                  </li>
                  <li>
                    <strong>Ongoing Support &amp; Maintenance:</strong>{" "}
                    Post-launch maintenance, performance optimization, security
                    updates, and 24/7 technical support packages.
                  </li>
                </ul>
                <p>
                  Specific deliverables, timelines, and pricing for each
                  engagement are defined in a Statement of Work (SOW) or Project
                  Proposal signed by both parties. In the event of any conflict
                  between these Terms and a signed SOW, the SOW shall prevail.
                </p>
              </div>

              {/* Eligibility */}
              <div id="eligibility" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaCheckCircle />
                  </div>
                  <h2>3. Eligibility</h2>
                </div>
                <p>By using our services, you represent and warrant that:</p>
                <ul className="legal-list">
                  <li>
                    You are at least 18 years old (or the age of legal majority
                    in your jurisdiction).
                  </li>
                  <li>
                    If acting on behalf of a company or organization, you have
                    the legal authority to bind that entity to these Terms.
                  </li>
                  <li>
                    You are not located in a country subject to applicable trade
                    sanctions or export control restrictions.
                  </li>
                  <li>
                    You have not been previously suspended or removed from any
                    FusionTech service.
                  </li>
                </ul>
              </div>

              {/* Project Engagement */}
              <div id="project-engagement" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaHandshake />
                  </div>
                  <h2>4. Project Engagements</h2>
                </div>

                <h3>4.1 Project Initiation</h3>
                <p>
                  All project engagements begin with a discovery consultation
                  during which we assess your requirements. Following this, we
                  provide a detailed proposal outlining scope, deliverables,
                  timelines, and pricing. Work begins only upon written approval
                  (email confirmation or signed SOW) and receipt of any required
                  deposit.
                </p>

                <h3>4.2 Client Responsibilities</h3>
                <p>
                  You agree to cooperate in good faith and in a timely manner,
                  including:
                </p>
                <ul className="legal-list">
                  <li>
                    Providing accurate, complete, and timely information,
                    content, and feedback.
                  </li>
                  <li>
                    Designating a primary point of contact with authority to
                    make project decisions.
                  </li>
                  <li>
                    Responding to queries within the timeframes specified in the
                    SOW (typically 3–5 business days).
                  </li>
                  <li>
                    Ensuring all content and materials you provide are lawfully
                    owned or licensed by you and do not infringe third-party
                    rights.
                  </li>
                </ul>
                <p>
                  Delays caused by late client feedback may result in revised
                  timelines and/or additional charges at our standard hourly
                  rate.
                </p>

                <h3>4.3 Change Requests</h3>
                <p>
                  Any changes to agreed scope must be submitted in writing. We
                  will assess the impact on timeline and cost and issue a Change
                  Order for approval before proceeding. Change Orders become
                  binding upon your written acceptance.
                </p>

                <h3>4.4 Project Delivery &amp; Acceptance</h3>
                <p>
                  Upon delivery of a milestone or final project, you have 10
                  business days to review and either accept deliverables or
                  submit documented defects. Silence after 10 business days
                  constitutes acceptance. We will address documented defects
                  that fall within the agreed spec at no additional charge;
                  requests outside scope are treated as change requests.
                </p>
              </div>

              {/* Payment */}
              <div id="payment" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaDollarSign />
                  </div>
                  <h2>5. Payment &amp; Billing</h2>
                </div>

                <h3>5.1 Fees</h3>
                <p>
                  All fees are specified in the relevant SOW or proposal. We
                  offer multiple pricing models: fixed-price, time &amp;
                  materials (T&amp;M), and monthly retainers. All prices are
                  exclusive of applicable taxes (VAT, GST, etc.) unless stated
                  otherwise.
                </p>

                <h3>5.2 Payment Schedule</h3>
                <ul className="legal-list">
                  <li>
                    <strong>Fixed-Price Projects:</strong> Typically 40% deposit
                    upon agreement, 30% at mid-project milestone, 30% upon final
                    delivery.
                  </li>
                  <li>
                    <strong>Time &amp; Materials:</strong> Invoiced bi-weekly or
                    monthly based on hours logged and reported.
                  </li>
                  <li>
                    <strong>Retainers:</strong> Invoiced in advance at the start
                    of each month.
                  </li>
                </ul>

                <h3>5.3 Payment Terms</h3>
                <p>
                  Invoices are due within <strong>14 calendar days</strong> of
                  issue date unless otherwise agreed in writing. We accept bank
                  transfer (SWIFT/SEPA), major credit/debit cards, and PayPal.
                </p>

                <h3>5.4 Late Payments</h3>
                <p>
                  Overdue invoices are subject to a late payment fee of 1.5% per
                  month (18% per annum) on any outstanding balance, in addition
                  to any reasonable collection costs. We reserve the right to
                  suspend active work on all projects until overdue balances are
                  settled.
                </p>

                <h3>5.5 Refunds</h3>
                <p>
                  Deposits are non-refundable once work has commenced. Refunds
                  for partially completed work will be prorated based on work
                  delivered. Disputes regarding invoices must be raised in
                  writing within 7 days of the invoice date.
                </p>
              </div>

              {/* Intellectual Property */}
              <div id="intellectual-property" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaLock />
                  </div>
                  <h2>6. Intellectual Property</h2>
                </div>

                <h3>6.1 Client-Owned Deliverables</h3>
                <p>
                  Upon receipt of full payment, FusionTech assigns to you all
                  intellectual property rights in the custom code, designs, and
                  deliverables created exclusively for your project, excluding
                  the items in Section 6.2.
                </p>

                <h3>6.2 FusionTech Retained IP</h3>
                <p>We retain all rights to:</p>
                <ul className="legal-list">
                  <li>
                    Pre-existing code, frameworks, libraries, tools, and
                    methodologies developed independently of your project.
                  </li>
                  <li>
                    General-purpose utilities and reusable components
                    incorporated into your project (subject to a perpetual,
                    royalty-free license granted to you below).
                  </li>
                  <li>
                    Our branding, trademarks, service marks, logos, and trade
                    secrets.
                  </li>
                </ul>
                <p>
                  With respect to any FusionTech pre-existing IP incorporated
                  into your deliverables, we grant you a perpetual,
                  non-exclusive, worldwide, royalty-free license to use such
                  components as part of the delivered project only.
                </p>

                <h3>6.3 Third-Party Licenses</h3>
                <p>
                  Where open-source libraries or third-party components are
                  included, they remain subject to their respective licenses
                  (MIT, Apache 2.0, etc.), which we will disclose in the project
                  documentation.
                </p>

                <h3>6.4 Portfolio Rights</h3>
                <p>
                  Unless you request confidentiality in writing, we reserve the
                  right to reference your company name and describe the nature
                  of our work together (without sharing proprietary details) in
                  our case studies, portfolio, and marketing materials.
                </p>
              </div>

              {/* Confidentiality */}
              <div id="confidentiality" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaUserLock />
                  </div>
                  <h2>7. Confidentiality</h2>
                </div>
                <p>
                  Each party may disclose confidential information to the other
                  in connection with a project engagement. Both parties agree
                  to:
                </p>
                <ul className="legal-list">
                  <li>
                    Keep confidential information strictly confidential and not
                    disclose it to third parties without prior written consent.
                  </li>
                  <li>
                    Use confidential information solely to perform obligations
                    under these Terms.
                  </li>
                  <li>
                    Limit access to confidential information to employees and
                    contractors who have a need-to-know and are bound by
                    equivalent confidentiality obligations.
                  </li>
                </ul>
                <p>
                  These obligations survive termination of the agreement for a
                  period of <strong>3 years</strong>, except for trade secrets,
                  which shall remain confidential indefinitely.
                </p>
                <p>
                  Confidential information excludes information that is publicly
                  known, independently developed, or required to be disclosed by
                  law.
                </p>
                <div className="legal-callout">
                  <FaShieldAlt />
                  <p>
                    Where a more comprehensive NDA is required, we are happy to
                    execute a separate Non-Disclosure Agreement prior to sharing
                    sensitive technical or business information.
                  </p>
                </div>
              </div>

              {/* Warranties */}
              <div id="warranties" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaCheckCircle />
                  </div>
                  <h2>8. Warranties &amp; Support</h2>
                </div>

                <h3>8.1 Our Warranties</h3>
                <p>FusionTech warrants that:</p>
                <ul className="legal-list">
                  <li>
                    Services will be performed in a professional and workmanlike
                    manner by qualified personnel.
                  </li>
                  <li>
                    Deliverables will substantially conform to the agreed
                    specifications at the time of delivery.
                  </li>
                  <li>
                    We have the right to grant the intellectual property rights
                    set forth in Section 6.
                  </li>
                </ul>

                <h3>8.2 Warranty Period</h3>
                <p>
                  All project deliverables include a{" "}
                  <strong>90-day warranty period</strong> from the date of final
                  acceptance. During this period, we will fix any defects that
                  result from our work at no additional charge. This warranty
                  does not cover issues arising from client modifications,
                  third-party integrations, or changes in underlying platforms
                  or APIs.
                </p>

                <h3>8.3 Post-Warranty Support</h3>
                <p>
                  After the warranty period, ongoing support is available under
                  our maintenance retainer packages. Ad-hoc support outside a
                  retainer is billed at our standard hourly rate.
                </p>

                <h3>8.4 Disclaimer of Other Warranties</h3>
                <p>
                  EXCEPT AS EXPRESSLY PROVIDED ABOVE, OUR SERVICES AND
                  DELIVERABLES ARE PROVIDED "AS IS". WE DISCLAIM ALL OTHER
                  WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES
                  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                </p>
              </div>

              {/* Liability */}
              <div id="liability" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaBalanceScale />
                  </div>
                  <h2>9. Limitation of Liability</h2>
                </div>
                <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                <ul className="legal-list">
                  <li>
                    IN NO EVENT SHALL FUSIONTECH BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                    INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES,
                    EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </li>
                  <li>
                    OUR TOTAL CUMULATIVE LIABILITY TO YOU ARISING OUT OF OR
                    RELATED TO ANY PROJECT SHALL NOT EXCEED THE TOTAL FEES PAID
                    BY YOU TO US FOR THAT PROJECT IN THE 12 MONTHS PRECEDING THE
                    CLAIM.
                  </li>
                </ul>
                <p>
                  Some jurisdictions do not allow the exclusion or limitation of
                  certain damages, so the above limitations may not apply to you
                  in full.
                </p>
              </div>

              {/* Indemnification */}
              <div id="indemnification" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaShieldAlt />
                  </div>
                  <h2>10. Indemnification</h2>
                </div>
                <p>
                  You agree to indemnify, defend, and hold harmless FusionTech
                  and its directors, officers, employees, and agents from and
                  against any claims, damages, losses, and costs (including
                  reasonable legal fees) arising from:
                </p>
                <ul className="legal-list">
                  <li>Your breach of these Terms.</li>
                  <li>
                    Any content, data, or materials you provide to us that
                    infringes third-party intellectual property rights or
                    violates applicable law.
                  </li>
                  <li>
                    Your use of deliverables in a manner not authorized by these
                    Terms or the applicable SOW.
                  </li>
                  <li>
                    Violations of applicable laws or regulations by you or your
                    end users.
                  </li>
                </ul>
              </div>

              {/* Prohibited */}
              <div id="prohibited" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaBan />
                  </div>
                  <h2>11. Prohibited Use</h2>
                </div>
                <p>
                  You may not use our services or deliverables for any of the
                  following:
                </p>
                <ul className="legal-list">
                  <li>
                    Any unlawful purpose, or in violation of any applicable
                    local, national, or international law or regulation.
                  </li>
                  <li>
                    Developing, deploying, or hosting illegal content —
                    including malware, phishing platforms, or content that
                    promotes violence, terrorism, or exploitation.
                  </li>
                  <li>
                    Scraping, mining, or harvesting personal data in violation
                    of applicable privacy laws.
                  </li>
                  <li>
                    Circumventing or attempting to circumvent security features
                    of any system.
                  </li>
                  <li>
                    Reproducing, reselling, or sublicensing our proprietary
                    tools, frameworks, or methodologies without written consent.
                  </li>
                  <li>
                    Any activity that infringes on the intellectual property
                    rights of FusionTech or any third party.
                  </li>
                </ul>
                <p>
                  We reserve the right to refuse or immediately terminate any
                  engagement where we believe our services are being used for
                  prohibited purposes, without liability and without refund of
                  paid fees.
                </p>
              </div>

              {/* Termination */}
              <div id="termination" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaClock />
                  </div>
                  <h2>12. Termination</h2>
                </div>

                <h3>12.1 Termination by Client</h3>
                <p>
                  You may terminate a project engagement at any time with 14
                  days' written notice. You will be invoiced for all work
                  completed up to the termination date at the contracted rate,
                  plus any non-refundable third-party costs incurred on your
                  behalf (e.g., domain registrations, software licenses).
                </p>

                <h3>12.2 Termination by FusionTech</h3>
                <p>We may terminate or suspend services immediately if:</p>
                <ul className="legal-list">
                  <li>
                    You breach any material term of these Terms or the
                    applicable SOW and fail to cure such breach within 10
                    business days of written notice.
                  </li>
                  <li>Payment is overdue by more than 30 days.</li>
                  <li>You use our services for prohibited purposes.</li>
                  <li>
                    Continuation would require us to violate applicable law.
                  </li>
                </ul>

                <h3>12.3 Effect of Termination</h3>
                <p>
                  Upon termination, we will deliver all completed work to you
                  and all access credentials. Intellectual property ownership
                  follows the payment status: ownership of deliverables
                  transfers only upon settlement of all outstanding invoices.
                  Sections 5, 6, 7, 9, 10, and 13 survive termination.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div id="dispute" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaHandshake />
                  </div>
                  <h2>13. Dispute Resolution</h2>
                </div>
                <p>
                  We value long-term relationships and prefer to resolve any
                  disputes amicably. In the event of a dispute:
                </p>
                <ul className="legal-list">
                  <li>
                    <strong>Step 1 — Negotiation:</strong> The parties shall
                    attempt to resolve the dispute through good-faith
                    discussions within 30 days of written notice describing the
                    dispute.
                  </li>
                  <li>
                    <strong>Step 2 — Mediation:</strong> If negotiation fails,
                    either party may refer the dispute to a mutually agreed
                    mediator. Costs of mediation are shared equally.
                  </li>
                  <li>
                    <strong>Step 3 — Arbitration:</strong> If mediation is
                    unsuccessful, the dispute shall be finally resolved by
                    binding arbitration under the rules of the American
                    Arbitration Association (AAA), with proceedings conducted in
                    English.
                  </li>
                </ul>
                <p>
                  Nothing in this section prevents either party from seeking
                  urgent injunctive or equitable relief from a court of
                  competent jurisdiction.
                </p>
              </div>

              {/* Governing Law */}
              <div id="governing-law" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaBalanceScale />
                  </div>
                  <h2>14. Governing Law</h2>
                </div>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of Delaware, United States, without
                  regard to its conflict of law provisions. Subject to the
                  dispute resolution process above, each party consents to
                  exclusive jurisdiction of the courts located in Delaware.
                </p>
                <p>
                  For clients located in the European Economic Area, applicable
                  EU consumer protection laws may provide additional rights that
                  cannot be waived by contract.
                </p>
              </div>

              {/* Changes */}
              <div id="changes" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaEdit />
                  </div>
                  <h2>15. Changes to These Terms</h2>
                </div>
                <p>
                  We reserve the right to update these Terms at any time. For
                  material changes, we will provide at least{" "}
                  <strong>30 days' notice</strong> via email to registered users
                  or a prominent notice on our website before the new terms take
                  effect.
                </p>
                <p>
                  Your continued use of our services or website after the
                  effective date of the revised Terms constitutes your
                  acceptance. For active project engagements, updated Terms will
                  apply only upon renewal or execution of a new SOW unless a
                  material law or regulation requires earlier adoption.
                </p>
              </div>

              {/* Contact Legal */}
              <div id="contact-legal" className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-icon">
                    <FaEnvelope />
                  </div>
                  <h2>16. Contact Us</h2>
                </div>
                <p>
                  For legal inquiries, contract matters, or questions about
                  these Terms, please contact our legal team:
                </p>
                <div className="legal-contact-box">
                  <div className="legal-contact-item">
                    <strong>FusionTech — Legal Department</strong>
                  </div>
                  <div className="legal-contact-item">
                    <FaEnvelope />{" "}
                    <a href="mailto:legal@fusiontech.com">
                      legal@fusiontech.com
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
                  For general inquiries, please use our{" "}
                  <Link to="/contact">contact form</Link>.
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;
