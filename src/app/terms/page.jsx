import { VscLaw } from "react-icons/vsc";
import React from "react";
import {
  FiBook, FiUser, FiCheckCircle, FiShield, FiMail, FiLock,  FiSlash,
  FiUmbrella, FiUsers, FiUserCheck,  FiLifeBuoy,  FiDatabase, FiScissors,
  FiAlertOctagon, FiUserX, FiTrash,
} from "react-icons/fi";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-grow container mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-family-intro text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-hwt text-transparent bg-clip-text bg-hwt pb-2 md:pb-3 overflow-visible">
            Terms of Service
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mt-4 md:mt-5">
            Effective Date: 19-February-2024
            <br />
            Legal framework for using Winkr • Governed by Indian law
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 md:gap-8 lg:gap-10">
          {/* Section 1: Definitions */}
          <section
            id="section1"
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiBook className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Terms of Use</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>These Terms of Service ("Terms") govern your access to and use of our website,{" "}<a href="https://www.winkr.live/" className="underline">https://www.winkr.live/</a>{" "}(the "Website").</p>
              <p><strong>Definitions:</strong></p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <strong>"Winkr," "we," "us," "our," or "Company"</strong> refers to Winkr, a private limited company registered in India.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  The Website is also known as the <strong>"Platform" or "Service,"</strong> and the terms "User," "you," and "your" refer to any individual or entity that accesses or uses the Service.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <strong>"Content"</strong> means any information, text, graphics, videos, or other materials posted, stored, or shared via the Service.
                </li>
              </ul>
              <p><strong>Acceptance of Terms:</strong></p>
              <p>By accessing or using our Website and related services (collectively, the "Service"), you agree to comply with these Terms and all applicable laws and regulations. Please note that our operations comply primarily with Indian laws. If you access our Services from outside India, you are responsible for ensuring that you adhere to your local legal requirements.</p>
              <p>Both you and Winkr are obligated to follow the guidelines outlined in these Terms.</p>
            </div>
          </section>

          {/* Section 2: Changes to Terms and Services */}
          <section id="section2" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiUser className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Changes to Terms and Services</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Our Platform is designed to evolve rapidly. We reserve the right to modify, suspend, or discontinue any aspect of the Service at our discretion, either temporarily or permanently, without prior notice. If any changes require your explicit consent, we will request it accordingly. To stay informed about our latest updates, please revisit this page periodically.</p>
              <p>You may use our Service only if you are legally capable of entering into a binding agreement and are authorized to do so under applicable law. If you are accepting these Terms on behalf of a company or another legal entity, you confirm that you have the authority to bind that entity to these Terms. In such cases, "you" and "your" refer to that entity.</p>
              <p>We recommend that you review these Terms, our Privacy Policy, and our Community Guidelines carefully.</p>
            </div>
          </section>

          {/* Section 3: Overview */}
          <section id="section3" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiCheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Overview</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Winkr’s Platform is designed to help you connect with others by offering a range of communication options, including video and text chats, as well as the ability to share images, videos, music, and more. Our goal is to match your interests with those of other users on the Platform.</p>
            </div>
          </section>

          {/* Section 4: User Account */}
          <section id="section4" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiUser className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">User Account</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <strong>Age Requirement:</strong> Users must be at least 18 years old.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <strong>Account Responsibility:</strong> You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. If you suspect any unauthorized access or security breach, you must notify us immediately.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <strong>Account Termination:</strong> Winkr reserves the right to suspend or terminate your access to the Service immediately, without prior notice or liability, for any violation of these Terms and Community Guidelines or for any conduct that we determine to be harmful or inappropriate.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Content, Moderation, and External Links */}
          <section id="section5" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiShield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Content, Moderation, and External Links</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p><strong>Chat and Video Moderation:</strong> To ensure a safe and respectful community and legal compliance, Winkr may record and store user interactions, including text chats and video calls. Reported or flagged messages and video feeds may be reviewed by a combination of automated systems and volunteer moderators. Please refer to our Community Guidelines for further details.</p>
              <p><strong>Third-Party Websites:</strong> The Service may contain links to external websites not operated by Us. We do not control or assume any responsibility for the content, privacy policies, or practices of these third-party sites. Users are advised to review the privacy policies of any site they visit.</p>
            </div>
          </section>

          {/* Section 6: Communications and Marketing */}
          <section id="section6" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiMail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Communications and Marketing</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>By registering an account, you consent to receive marketing and promotional emails from Winkr. You may opt out of such communications at any time by following the unsubscribe instructions provided in these emails or by adjusting your account settings.</p>
            </div>
          </section>

          {/* Section 7: Intellectual Property */}
          <section id="section7" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiLock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Intellectual Property</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Winkr owns or holds the rights to all intellectual property in the Service, including but not limited to source code, databases, software, designs, audio, video, text, photographs, graphics, trademarks, and logos. All such materials are protected by applicable intellectual property laws and are intended solely for personal, non-commercial use, provided “as is.”</p>
            </div>
          </section>

          {/* Section 8: Prohibited Activities */}
          <section id="section8" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiSlash className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Prohibited Activities</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>When using Winkr, you agree not to engage in the following prohibited activities:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Attempt to bypass, test, or interfere with the security features or protective mechanisms of the Service.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Use automated tools, bots, or scripts to scrape, access, or download Content from the Service.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Reverse-engineer any software, manipulate email headers, or engage in activities that disrupt the Service, such as spamming, overloading, or spreading malware.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9: User Interactions */}
          <section id="section9" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiUsers className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">User Interactions</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Winkr is a platform designed to connect users for random interactions. By using our services, you acknowledge and agree to the following:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  We do not actively monitor or control user interactions in real time.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Winkr is not accountable for the content shared, actions taken, or behavior exhibited by other users.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 10: Age Verification */}
          <section id="section10" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiUserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Age Verification</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>While you must be at least 18 years of age to use the Service, Winkr cannot guarantee the age of other users. You agree to immediately terminate any interaction if you suspect the other party is a minor, and to report any such suspicions to our moderation team. We reserve the right to implement age verification measures at our discretion.</p>
            </div>
          </section>

          {/* Section 11: Limitation of Liability */}
          <section id="section11" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiUmbrella className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Limitation of Liability</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Winkr provides its platform and services on an "as is" and "as available" basis, without any express or implied warranties, except as explicitly stated in writing. We do not guarantee uninterrupted, error-free, or secure access to the platform, nor do we ensure compatibility with all devices or correction of any defects.</p>
              <p>We are not liable for any actions taken by users on our platform or for any content they provide. Under no circumstances shall Winkr, its affiliates, officers, employees, agents, service providers, or partners be responsible for any direct, indirect, incidental, special, punitive, or consequential damages arising from the use of the platform.</p>
            </div>
          </section>

          {/* Section 12: Indemnification */}
          <section id="section12" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiLifeBuoy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Indemnification</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>By using Winkr, you agree to indemnify, defend, and hold harmless Winkr, its affiliates, officers, directors, employees, agents, successors, and assigns from any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising from:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Your use or misuse of the platform and its services.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Any breach of these Terms of Service and Community Guidelines by you.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 13: Data Protection and Compliance */}
          <section id="section13" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiDatabase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Data Protection and Compliance</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>We comply with applicable data protection laws, including the provisions of the Information Technology Act and related regulations in India. Please refer to our Privacy Policy for details regarding our data practices. Users are responsible for complying with local laws when using the Service.</p>
            </div>
          </section>

          {/* Section 14: Governing Law and Dispute Resolution */}
          <section id="section14" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <VscLaw className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Governing Law and Dispute Resolution</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from or related to these Terms shall first be addressed through good-faith negotiations. If a resolution cannot be reached, the matter shall be resolved through binding arbitration or in the appropriate courts in India, which shall have exclusive jurisdiction.</p>
            </div>
          </section>

          {/* Section 15: Severability and Entire Agreement */}
          <section id="section15" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiScissors className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Severability and Entire Agreement</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. These Terms constitute the entire agreement between you and Winkr regarding your use of the Service, superseding all prior agreements or understandings.</p>
            </div>
          </section>

          {/* Section 16: Force Majeure */}
          <section id="section16" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiAlertOctagon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Force Majeure</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, excluding payment obligations.</p>
            </div>
          </section>

          {/* Section 17: Children’s Privacy */}
          <section id="section17" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiUserX className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Children’s Privacy</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>The Service is not intended for users under the age of 18. If any information is inadvertently collected from a minor, such data will be deleted promptly in accordance with applicable laws.</p>
            </div>
          </section>

          {/* Section 18: Account Deletion */}
          <section id="section18" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiTrash className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Account Deletion</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>To delete your account, please contact <a href="mailto:support@winkr.live" className="text-blue-400 hover:underline">support@winkr.live</a> or use the in-app account deletion feature. We will process your request and remove your data as required by applicable law.</p>
            </div>
          </section>

          {/* Section 19: Contact Information */}
          <section id="section19" className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiMail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Contact Information</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>For any questions or concerns regarding these Terms of Service, please contact us at:</p>
              <ul className="space-y-2">
                <li>General Inquiries: <a href="mailto:info@winkr.live" className="text-blue-400 hover:underline">info@winkr.live</a></li>
                <li>Support: <a href="mailto:support@winkr.live" className="text-blue-400 hover:underline">support@winkr.live</a></li>
                <li>Legal/Data Protection: <a href="mailto:dpo@winkr.live" className="text-blue-400 hover:underline">dpo@winkr.live</a></li>
                <li>Other Inquiries: <a href="mailto:contact@winkr.live" className="text-blue-400 hover:underline">contact@winkr.live</a></li>
              </ul>
            </div>
          </section>

          {/* Section 20: Terms of Service Updates */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/30 text-center">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Terms of Service Updates</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                By continuing to use Winkr, you agree to these Terms and any future updates. Major changes will be notified via email or in-app alerts.
              </p>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-gray-400">Last updated: 19th February 2024</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default TermsOfService;