
import { FiDatabase, FiShare2, FiUserCheck, FiRefreshCw, FiAlertCircle, FiShield, FiMessageCircle, FiMail, FiLink } from "react-icons/fi"
import { FaCookie } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-grow container mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-family-intro text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-hwt text-transparent bg-clip-text bg-hwt pb-2 md:pb-3 overflow-visible">
            Privacy Policy
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4 md:mt-5">
            Last Updated: 20-02-2025
            <br />
            • Compliant with Indian data protection laws
            <br />
            We, at Winkr, respect your privacy and are committed towards protecting and safeguarding it. 
          </p>
          <p className="text-sm text-gray-400 mt-2">
            *Note: Only the English version of this Privacy Policy is legally binding. Translations are provided for convenience only.
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-4xl mx-auto grid gap-8 md:gap-10 lg:gap-12 pb-12 md:pb-16">
          {/* Introduction Section */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiAlertCircle className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Introduction</h3>
            </div>
            <p className="text-gray-300 mb-4">
              We understand that legal documents can be overwhelming, so we’ve tried to keep this Privacy Policy as simple as possible while providing the necessary information. By using Winkr, you agree to the terms outlined in this policy. Your privacy is very important to us, and we are committed to protecting it.
            </p>
            <p className="text-gray-300">
              This policy explains how we collect, use, and protect your data. You are advised to carefully read this Privacy Policy before using the Platform or providing Us with Your personal Information. 
            </p>
          </section>

          {/* Information Collection Card */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiDatabase className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Information We Collect</h3>
            </div>
            <p className="text-gray-300 mb-4">
              We collect only the data required to provide and improve our services. This includes:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Account Information: Data provided during account creation, including name, email ,username, age, gender, interests, and bio.",
                "Data received from third-party authentication services when you sign up or log in (e.g., Google)",
                "Usage Data: IP address, device information, and platform activity",
                "Analytics Data: General insights about how users interact with the platform, including engagement and activity trends, to help us improve features and overall experience."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-blue-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-4">
              We do not collect any sensitive information directly.
            </p>
          </section>

          {/* Data Usage Card */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiShare2 className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">How We Use Your Information</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your data is used to provide, improve, and secure our services. Specifically, we use it for:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Facilitating matches based on interests",
                "Improving platform functionality and user experience",
                "Preventing fraud and abuse",
                "Sending service updates and notifications",
                "Complying with legal obligations",
                "Enhancing security and moderation",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-gray-800/20 rounded-lg">
                  <FiUserCheck className="flex-shrink-0 mt-1 w-4 h-4 text-green-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Data Sharing Card */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiShare2 className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Data Sharing</h3>
            </div>
            <p className="text-gray-300 mb-4">
             We do not sell, rent, or trade your personal data. However, we may share it with trusted third-party service providers to operate our platform, including:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Service Providers: With third-party vendors who assist in hosting, security, and analytics.",
                "User Reports and Moderation services : If a user is reported for misconduct, necessary information may be reviewed.",
                "Legal Compliance: If required by law or to protect rights and safety.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-gray-800/20 rounded-lg">
                  <FiUserCheck className="flex-shrink-0 mt-1 w-4 h-4 text-green-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-4">
              We may also disclose your data if required by law or to protect our rights and safety.
            </p>
          </section>

          {/* Children’s Privacy Section */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiShield className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Children’s Privacy</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Winkr is not intended for users under the age of 18. We comply with the Children’s Online Privacy Protection Act (COPPA) and do not knowingly collect personal information from children under 13. If we discover that we have inadvertently collected such data, we will delete it immediately.
            </p>
            <p className="text-gray-300">
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:support@winkr.live" className="text-blue-400 underline">support@winkr.live</a>.
            </p>
          </section>

          {/* Peer-to-Peer Connections Section */}
          {/* <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiUsers className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Peer-to-Peer Connections</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Winkr uses peer-to-peer (P2P) technology to facilitate direct connections between users. This means that during video or voice calls, your IP address may be shared with the other user. However, this information is not accessible through our platform interface.
            </p>
            <p className="text-gray-300">
              We use encryption and other security measures to protect your data during P2P connections, but we cannot guarantee complete privacy due to the nature of P2P technology.
            </p>
          </section> */}

          {/* Chat Messages and Data Retention Section */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiMessageCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Data Retention & Security</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Retention: Chat and stream logs are not stored beyond the duration of the session, except for flagged content due to policy violations.            </p>
            <p className="text-gray-300 mb-4">
              In cases where a user is banned or reported, we may retain chat logs and related data for a limited period to investigate and enforce our community guidelines. This data is anonymized and deleted after the investigation is complete.
            </p>
            <p className="text-gray-300">
            Security: We implement industry-standard measures to protect user data, including encryption and secure server storage.
            </p>
          </section>

          {/* Ban and Complaint Data Section */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiAlertCircle className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Ban and Compliance Data</h3>
            </div>
            <p className="text-gray-300 mb-4">
              To maintain a safe and respectful environment, we may track and retain relevant details when a user is restricted due to Community guidelines violations, including:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Usage data (e.g., IP address, device attributes)",
                "Contextual records linked to reported incidents (if applicable)",
                "Details of the violation and moderation actions taken",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-blue-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-4">
              This data is retained for a limited period to prevent repeat violations and ensure platform safety. Once the necessary review period expires, all associated records are permanently erased.
            </p>
          </section>
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiUserCheck className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">User Rights & Choices</h3>
            </div>
            <p className="text-gray-300 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Access: Request a copy of the data we hold about you.",
                "Correction: Update or correct inaccurate data.",
                "Deletion: Request deletion of your data, subject to legal obligations.",
                "Objection: Object to certain uses of your data.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-blue-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@winkr.live" className="text-blue-400 underline">privacy@winkr.live</a>.
            </p>
          </section>
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FaCookie className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Cookies</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Winkr uses cookies and similar technologies to enhance your experience. These include:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Authentication cookies to keep you logged in.",
                "Our Platform uses cookies to distinguish You from other users of Our Platform and store certain data that is used by Us for maintenance of the Platform and its features as well as research and development. This helps Us to provide You with a good user experience when You browse our Platform and also allows Us to improve the Platform.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-blue-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-4">
              You can manage cookies through your browser settings. However, disabling cookies may affect your experience on the platform.
            </p>
          </section>
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiLink className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Third-Party Links and Services</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Winkr may contain links to third-party websites or integrate third-party services (e.g., Instagram, Twitter, etc). These third parties have their own privacy policies, and we are not responsible for their practices.
            </p>
            <p className="text-gray-300">
              We encourage you to review the privacy policies of any third-party services you interact with.
            </p>
          </section>
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiShield className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Data Breach Notification</h3>
            </div>
            <p className="text-gray-300 mb-4">
              In the event of a data breach, we will take immediate steps to mitigate the impact and notify affected users within 72 hours of becoming aware of the breach. Notifications will include:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "The nature of the breach.",
                "The types of data affected.",
                "Steps we are taking to address the breach.",
                "Measures users can take to protect themselves.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-blue-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-500/30 text-center">
            <div className="flex flex-col items-center gap-4">
              <FiMail className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or your data, please contact us at:
              </p>
              <div className="space-y-2">
                <a href="mailto:privacy@winkr.live" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <FiMail className="w-5 h-5" />
                  privacy@winkr.live
                </a>
                <p className="text-sm text-gray-400">We aim to respond within 24-48 hours.</p>
              </div>
            </div>
          </section>

          {/* Policy Updates Section */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-500/30 text-center">
            <div className="flex flex-col items-center gap-4">
              <FiRefreshCw className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white">Policy Updates</h3>
              <p className="text-gray-300 ">
                We may update this policy periodically. Significant changes will be notified via email or in-app alerts. Continued use of Winkr after updates constitutes acceptance of the revised policy.
              </p>
              <p className="text-gray-300 mb-4">We encourage you to review it regularly.</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Last updated: 20th Feb 2025</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}