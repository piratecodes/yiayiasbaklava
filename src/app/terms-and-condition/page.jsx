// Enhanced Terms & Conditions Page with Lengthy Sections and Bullet Points

export default function TermsAndConditions() {
  return (
    <div className="bg-white text-black py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-sky-500 mb-10 text-center">
          Terms & Conditions
        </h1>

        <p className="mb-8 text-base text-sky-700 text-center">
          <b>Effective Date:</b> July 7, 2025<br />
          <b>Website:</b> <a href="https://staging.yiayiasbaklava.com" className="text-sky-500 underline">yiayiasbaklava.com</a><br />
          <b>Business:</b> Yia Yia’s Baklava LLC<br />
          <b>Address:</b> 252 Bethlehem Pike, Colmar, PA 18915, Pennsylvania, United States
        </p>

        {sections.map((section, idx) => (
          <Section key={idx} title={section.title}>{section.content}</Section>
        ))}

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
    title: "1. Agreement to Terms",
    content: (
      <>
        <p>
          By accessing this website, you agree to be bound by the Terms & Conditions
          set forth herein. These terms establish a legally binding agreement between
          you and Yia Yia’s Baklava LLC regarding your use of our website and services.
        </p>
        <ul className="list-disc pl-5">
          <li>
            All users must comply with these Terms when interacting with our website.
          </li>
          <li>
            If you disagree with any part of the Terms, please discontinue use immediately.
          </li>
          <li>
            We reserve the right to update these Terms at any time without prior notice.
          </li>
          <li>
            Continued use of the website after changes implies acceptance of the updated Terms.
          </li>
          <li>
            These Terms apply to individual users and representatives acting on behalf of organizations.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. About Us",
    content: (
      <>
        <p>
          Yia Yia’s Baklava LLC is a Pennsylvania-based food business specializing in
          authentic Mediterranean and Greek desserts. Our goal is to bring a taste of
          heritage and tradition to every doorstep through an accessible online store.
        </p>
        <ul className="list-disc pl-5">
          <li>
            We operate from our physical location at 252 Bethlehem Pike, Colmar, PA 18915.
          </li>
          <li>
            Our services are available across the United States, serving individual customers and businesses.
          </li>
          <li>
            We focus on using high-quality ingredients and traditional recipes passed through generations.
          </li>
          <li>
            Our digital store allows one-time purchases and subscription-based deliveries.
          </li>
          <li>
            We are committed to customer satisfaction and cultural authenticity.
          </li>
        </ul>
      </>
    ),
  },
    {
    title: "3. User Registration and Accounts",
    content: (
      <>
        <p>
          In order to access certain features of our website, such as managing orders, subscriptions, and posting content, you are required to create a user account. By registering, you confirm that the information you provide is accurate, complete, and current at all times.
        </p>
        <ul className="list-disc pl-5">
          <li>
            You are responsible for maintaining the confidentiality of your login credentials and restricting access to your device or account.
          </li>
          <li>
            Any activity occurring under your account will be considered your responsibility. We are not liable for unauthorized access caused by your failure to maintain security.
          </li>
          <li>
            We reserve the right to suspend or delete accounts that are inactive, inaccurate, fraudulent, or found in violation of our Terms.
          </li>
          <li>
            Users must be at least 18 years of age or have parental consent to create an account on our platform.
          </li>
          <li>
            You agree not to impersonate another individual or use a false identity while creating an account.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. User-Generated Content",
    content: (
      <>
        <p>
          Users may submit or upload content to our website, including reviews, photos, profile information, and preferences. By posting content, you grant us permission to use it in accordance with these Terms.
        </p>
        <ul className="list-disc pl-5">
          <li>
            You represent that your content does not infringe on any third-party rights, including intellectual property or privacy rights.
          </li>
          <li>
            We may use, reproduce, edit, and publicly display any content you submit across our platforms and marketing channels.
          </li>
          <li>
            Inappropriate or illegal content, including hate speech, nudity, violence, or spam, will be removed, and your account may be suspended.
          </li>
          <li>
            Content submitted for public display (e.g., reviews) becomes non-confidential and may be visible to other users.
          </li>
          <li>
            Copyright infringement notifications may be sent to: <a href="mailto:dmca@yiayiasbaklava.com" className="text-sky-500 underline">dmca@yiayiasbaklava.com</a>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Product Sales and One-Time Purchases",
    content: (
      <>
        <p>
          Our online store offers a wide selection of desserts and related items available for one-time purchase. All orders are subject to product availability, order confirmation, and payment verification.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Prices are displayed in U.S. Dollars and are exclusive of applicable taxes, shipping, or handling charges.
          </li>
          <li>
            Upon placing an order, you will receive an email confirmation containing order details and tracking information if applicable.
          </li>
          <li>
            We reserve the right to cancel or refuse orders due to limited inventory, pricing errors, or suspected fraudulent activity.
          </li>
          <li>
            All products are made fresh and shipped using secure packaging to preserve quality. Delivery times may vary based on location.
          </li>
          <li>
            If a product is received damaged or defective, please contact our support team within 48 hours of delivery.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Subscription Plans",
    content: (
        <>
        <p>
            Yia Yia’s Baklava offers subscription plans to provide recurring deliveries of your favorite desserts. By enrolling in a subscription, you authorize us to charge your selected payment method on a recurring basis according to your chosen plan.
        </p>
        <ul className="list-disc pl-5">
            <li>
            Subscription plans auto-renew by default unless canceled prior to the renewal date through your account settings.
            </li>
            <li>
            No free trials are currently offered; billing begins immediately upon enrollment in a subscription.
            </li>
            <li>
            You may update your delivery frequency, pause, or cancel your subscription at any time through your dashboard.
            </li>
            <li>
            All subscription charges are final and non-refundable once processed, unless required by law.
            </li>
            <li>
            Subscription availability and terms may vary depending on your shipping location and item selection.
            </li>
        </ul>
        </>
    ),
    },
    {
    title: "7. Promotions, Contests, and Sweepstakes",
    content: (
        <>
        <p>
            From time to time, we may offer limited-time promotions, discounts, giveaways, or contests. These offerings are subject to specific rules, which may include eligibility requirements, entry deadlines, and prize details.
        </p>
        <ul className="list-disc pl-5">
            <li>
            All promotional offers are valid only for the duration and conditions specified in their respective terms.
            </li>
            <li>
            We reserve the right to cancel, suspend, or modify promotions at any time without notice.
            </li>
            <li>
            Participants must be residents of the United States and 18 years of age or older unless otherwise stated.
            </li>
            <li>
            Prizes may not be transferred, substituted, or redeemed for cash unless explicitly stated.
            </li>
            <li>
            Promotions cannot be combined with other discounts unless specifically allowed.
            </li>
        </ul>
        </>
    ),
    },
    {
    title: "8. Intellectual Property",
    content: (
        <>
        <p>
            All content on this website, including our logo, images, graphics, brand identity, visual layout, and original text, is the intellectual property of Yia Yia’s Baklava LLC. Unauthorized reproduction, distribution, or use of any material from this site is strictly prohibited.
        </p>
        <ul className="list-disc pl-5">
            <li>
            Our trademarks, logos, and service marks are legally protected and may not be copied or misused.
            </li>
            <li>
            You may view, print, or download portions of the site solely for personal and non-commercial use.
            </li>
            <li>
            Any commercial use of our website’s materials without prior written consent is a violation of these Terms.
            </li>
            <li>
            We actively monitor and take action against violations of our intellectual property rights.
            </li>
            <li>
            Use of third-party tools or content may be subject to additional terms, which will be disclosed when applicable.
            </li>
        </ul>
        </>
    ),
    },
    {
    title: "9. Feedback and Suggestions",
    content: (
        <>
        <p>
            We welcome your feedback, suggestions, and ideas to improve our platform and services. By submitting any form of feedback, you grant us permission to use your input without obligation to compensate or credit you.
        </p>
        <ul className="list-disc pl-5">
            <li>
            Submitted feedback may be used to enhance our products, services, branding, or platform features.
            </li>
            <li>
            You agree not to submit any feedback that is confidential, proprietary, or subject to third-party rights.
            </li>
            <li>
            We are under no obligation to review, implement, or acknowledge your feedback.
            </li>
            <li>
            Suggestions may be shared internally or externally at our discretion.
            </li>
            <li>
            Submission of feedback does not establish any partnership, employment, or joint venture.
            </li>
        </ul>
        </>
    ),
    },
    {
    title: "10. Termination",
    content: (
        <>
        <p>
            We reserve the right to suspend or terminate your access to the website or your account at any time, for any reason, without notice or liability. Termination may occur due to violations of these Terms or suspected fraudulent activity.
        </p>
        <ul className="list-disc pl-5">
            <li>
            Users may also request account deletion by contacting our support team.
            </li>
            <li>
            Termination will result in the immediate revocation of access to your account and any saved preferences.
            </li>
            <li>
            Outstanding balances or pending orders may still be collected or processed post-termination.
            </li>
            <li>
            We are not liable for any loss of data or access following termination.
            </li>
            <li>
            Termination does not waive any rights or obligations accrued prior to the termination date.
            </li>
        </ul>
        </>
    ),
    },
    {
    title: "11. Limitation of Liability",
    content: (
        <>
        <p>
            Yia Yia’s Baklava LLC shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the website, including but not limited to lost profits, data breaches, service interruptions, or inaccurate information.
        </p>
        <ul className="list-disc pl-5">
            <li>
            We do not guarantee that the website will operate uninterrupted, secure, or error-free at all times.
            </li>
            <li>
            Any reliance on material from this site is done at your own risk.
            </li>
            <li>
            Our liability is limited to the maximum extent permitted by applicable law.
            </li>
            <li>
            Certain jurisdictions may not allow exclusions or limitations of liability—these limitations may not apply to you.
            </li>
            <li>
            You agree to indemnify and hold us harmless from claims arising from your use of the platform.
            </li>
        </ul>
        </>
    ),
    },
    {
    title: "12. Modifications to Terms",
    content: (
        <>
        <p>
            Yia Yia’s Baklava LLC reserves the right to modify these Terms & Conditions at any time. Changes will become effective immediately upon posting on the website. We encourage users to review this page regularly to stay informed.
        </p>
        <ul className="list-disc pl-5">
            <li>
            If significant changes are made, we may notify users via email or on-site notice.
            </li>
            <li>
            Continued use of the website constitutes acceptance of the updated Terms.
            </li>
            <li>
            Users who disagree with changes must discontinue use and may request account deactivation.
            </li>
            <li>
            Archived versions of these Terms are not publicly maintained; we recommend printing for personal reference.
            </li>
            <li>
            Policy updates may also include changes to features, subscription plans, or pricing models.
            </li>
        </ul>
        </>
    ),
    },
    {
    title: "13. Governing Law",
    content: (
        <>
        <p>
            These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Pennsylvania, United States, without regard to conflict of law principles. You consent to the jurisdiction of Pennsylvania courts for any disputes arising under these Terms.
        </p>
        <ul className="list-disc pl-5">
            <li>
            Any legal action must be filed in the courts located within Montgomery County, Pennsylvania.
            </li>
            <li>
            These Terms constitute the entire agreement between you and Yia Yia’s Baklava LLC.
            </li>
            <li>
            If any provision of these Terms is deemed unenforceable, the remaining provisions will remain in full force.
            </li>
            <li>
            Failure to enforce a provision does not waive our right to enforce it later.
            </li>
            <li>
            These Terms survive termination of your account or use of the website.
            </li>
        </ul>
        </>
    ),
    },
    {
    title: "14. Contact Information",
    content: (
        <>
        <p>
            If you have any questions about these Terms & Conditions or your experience with Yia Yia’s Baklava, please contact us using the information provided below. We are happy to assist you.
        </p>
        <ul className="list-disc pl-5">
            <li>
            Email Support: <a href="mailto:info@yiayiasbaklava.com" className="text-sky-500 underline">info@yiayiasbaklava.com</a>
            </li>
            <li>
            DMCA Inquiries: <a href="mailto:dmca@yiayiasbaklava.com" className="text-sky-500 underline">dmca@yiayiasbaklava.com</a>
            </li>
            <li>
            Mailing Address: 252 Bethlehem Pike, Colmar, PA 18915, Pennsylvania, USA
            </li>
            <li>
            We respond to most inquiries within 2–3 business days.
            </li>
            <li>
            Please include your name, email, and detailed message for a timely response.
            </li>
        </ul>
        </>
    ),
    },

];
