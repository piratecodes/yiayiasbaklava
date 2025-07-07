import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-black py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-sky-500 mb-10 text-center">
          Privacy Policy
        </h1>

        <p className="mb-8 text-base text-sky-700 text-center">
          <b>Effective Date:</b> July 7, 2025<br />
          <b>Website:</b> <a href="https://staging.yiayiasbaklava.com" className="text-sky-500 underline">yiayiasbaklava.com</a><br />
          <b>Business:</b> Yia Yia’s Baklava LLC<br />
          <b>Address:</b> 252 Bethlehem Pike, Colmar, PA 18915, Pennsylvania, United States
        </p>

        {sections.map((section, idx) => (
          <Section key={idx} title={section.title}>
            {section.content}
          </Section>
        ))}

        <Link href="/legal/YiaYiasBaklava_PrivacyPolicy.pdf" download className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md shadow transition"> Download Privacy Policy (PDF) </Link>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-14 bg-sky-50 p-6 rounded-2xl shadow-md">
      <h2 className="text-3xl font-semibold text-sky-500 mb-4">{title}</h2>
      <div className="text-base text-gray-800 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          This Privacy Policy explains how Yia Yia’s Baklava LLC collects, uses, shares, and protects your personal data when you visit or make a purchase from our website. We are committed to respecting your privacy and ensuring transparency in how we handle your information.
        </p>
        <ul className="list-disc pl-5">
          <li>Applies to all visitors, account holders, and purchasers using our site.</li>
          <li>Describes the types of data we collect and how we use it.</li>
          <li>Outlines user rights regarding access, correction, and deletion.</li>
          <li>Reflects compliance with U.S. privacy regulations.</li>
          <li>Updated as of July 7, 2025; we may revise this policy from time to time.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          We collect both personal and non-personal information to provide our services, process orders, and improve user experience. This includes:
        </p>
        <ul className="list-disc pl-5">
          <li>Contact info: name, email, phone number, and shipping address.</li>
          <li>Account data: login credentials, saved preferences, and order history.</li>
          <li>Payment info: billing address and masked card data (via secure gateways).</li>
          <li>Technical data: IP address, browser type, and device information.</li>
          <li>Cookies: to track usage and personalize the shopping experience.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>
          Your data is used to deliver products, manage your account, provide support, and improve our services. We ensure that your personal information is only used for legitimate business purposes.
        </p>
        <ul className="list-disc pl-5">
          <li>To process orders and deliver purchased items.</li>
          <li>To communicate about orders, updates, and support requests.</li>
          <li>To improve website functionality, design, and user experience.</li>
          <li>To send newsletters or promotional offers (opt-out available).</li>
          <li>To detect and prevent fraud, abuse, or unauthorized access.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Sharing of Personal Information",
    content: (
      <>
        <p>
          We do not sell your personal data. However, we may share it with trusted partners and service providers necessary for business operations, such as payment processors and delivery services.
        </p>
        <ul className="list-disc pl-5">
          <li>Shipping and logistics partners to deliver your orders.</li>
          <li>Payment gateways like Stripe or PayPal to securely handle transactions.</li>
          <li>IT support and analytics services for performance monitoring.</li>
          <li>Legal authorities if required by law or to enforce our Terms.</li>
          <li>In the event of a business transfer, your data may be part of the transaction.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: (
      <>
        <p>
          Cookies help us remember your preferences and analyze website usage. You can choose to disable cookies through your browser settings, but certain features may be affected.
        </p>
        <ul className="list-disc pl-5">
          <li>Session cookies help manage your login and cart state.</li>
          <li>Analytics cookies track visitor behavior to improve UX.</li>
          <li>Marketing cookies may be used for personalized offers (if accepted).</li>
          <li>You can opt out of non-essential cookies from the cookie banner.</li>
          <li>We honor “Do Not Track” browser settings where supported.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data Security Measures",
    content: (
      <>
        <p>
          We employ reasonable technical, administrative, and physical safeguards to protect your personal information from loss, misuse, and unauthorized access.
        </p>
        <ul className="list-disc pl-5">
          <li>SSL encryption is used for secure data transmission.</li>
          <li>Access to user data is limited to authorized personnel only.</li>
          <li>Stored data is encrypted where applicable.</li>
          <li>Regular audits are conducted to identify vulnerabilities.</li>
          <li>We advise users to use strong passwords and keep credentials private.</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. User Rights and Choices",
    content: (
      <>
        <p>
          You have the right to access, correct, or delete your personal information. You may also opt out of promotional emails or request account deletion at any time.
        </p>
        <ul className="list-disc pl-5">
          <li>Access your account to update profile and subscription details.</li>
          <li>Unsubscribe from emails via the link in the footer of each message.</li>
          <li>Request deletion of your account by emailing our support team.</li>
          <li>Withdraw cookie consent at any time from settings.</li>
          <li>We honor valid data access requests within 30 days.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Third-Party Services",
    content: (
      <>
        <p>
          Our site may contain links or integrations with third-party services. This Privacy Policy does not apply to the practices of those external sites.
        </p>
        <ul className="list-disc pl-5">
          <li>We use third-party tools for payments, shipping, analytics, and CRM.</li>
          <li>Each third-party service operates under its own privacy policies.</li>
          <li>We recommend reviewing third-party terms before use.</li>
          <li>We are not liable for misuse or breach originating from third-party platforms.</li>
          <li>Integrations are vetted for compliance and security.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Contact Information",
    content: (
      <>
        <p>
          If you have any questions about our privacy practices or need help managing your data, please contact us using the details below.
        </p>
        <ul className="list-disc pl-5">
          <li>Email: <a href="mailto:info@yiayiasbaklava.com" className="text-sky-500 underline">info@yiayiasbaklava.com</a></li>
          <li>Mailing Address: 252 Bethlehem Pike, Colmar, PA 18915, Pennsylvania, USA</li>
          <li>Support Hours: Mon–Fri, 9am to 5pm EST</li>
          <li>We aim to respond to privacy inquiries within 72 hours.</li>
          <li>Include your name, account email, and inquiry topic for faster service.</li>
        </ul>
      </>
    ),
  }
];
