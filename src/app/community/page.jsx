import React from 'react';
import { FiAlertTriangle, FiShield, FiUserX, FiMail, FiCheckCircle, FiSlash, FiXCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-grow container mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-family-intro text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-hwt text-transparent bg-clip-text bg-hwt pb-2 md:pb-3 overflow-visible">
            Community Guidelines
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4 md:mt-5">
            Last Updated: 20-02-2025<br />
            Building a Safe Space for Genuine Connections • Enforceable under Indian Law
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-4xl mx-auto grid gap-8 md:gap-10 lg:gap-12 pb-12 md:pb-16">
          {/* Overview */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiCheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Overview</h3>
            </div>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Winkr is a platform built to connect you with people on this Platform by offering a range of communication options, including video and text chats, as well as the ability to share images, videos, music, and more. Our aim is to pair you with individuals who share your interests.</p>
              <p>Per our Terms of Service, you must be 18 or older to join and use Winkr. Accounts belonging to users under 18 will be terminated immediately.</p>
            </div>
          </section>

          {/* Prohibited Content */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiSlash className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Prohibited Content</h3>
            </div>
            <p className="text-gray-300 mb-4">To build a safe and respectful community, Winkr bans the following content:</p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Sexually explicit material (per Section 67 of the IT Act)</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Content encouraging violence or self-harm</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Hate speech against caste or religion (IPC 153A)</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Drug-related material</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Impersonation (IPC 419)</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Financial scams or fraud</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Violations lead to a permanent ban and possible legal action, as detailed in our <Link href="/terms"><span className="text-blue-400 underline">Terms of Service</span></Link></li>
            </ul>
            <p className="text-gray-300 mt-4">We enforce these rules diligently to keep Winkr secure. If you spot prohibited content, report it promptly.</p>
          </section>

          {/* Disallowed Behaviors */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-yellow-500/30 transform transition hover:scale-[1.01] hover:border-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              <FiSlash className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Disallowed Behaviors</h3>
            </div>
            <p className="text-gray-300 mb-4">The following actions may trigger a warning or temporary suspension:</p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Posting real violence, gore, or animal cruelty (excluding acceptable depictions in films, games, or books)</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Soliciting money, promoting sales, or engaging in commercial activities</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Sending users to external platforms without meaningful prior interaction</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Contacting or attempting to engage with minors (report such incidents immediately)</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Using Winkr maliciously, such as overloading servers or launching denial-of-service attacks</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Sending unsolicited ads or harassing messages</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Trading or selling Winkr accounts</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Misrepresenting your age or posing as a minor, resulting in instant account deactivation</li>
            </ul>
            <p className="text-gray-300 mt-4">We investigate all reports thoroughly. Please avoid spamming our support channels to aid our efforts.</p>
          </section>

          {/* Actions Leading to Immediate Termination */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-500/30 transform transition hover:scale-[1.01] hover:border-red-400">
            <div className="flex items-center gap-3 mb-4">
              <FiXCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Actions Leading to Immediate Termination</h3>
            </div>
            <p className="text-gray-300 mb-4">These behaviors result in instant account termination and potential indefinite bans:</p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Sharing or requesting illegal content, including age-restricted or revenge pornography, drugs, extortion, or blackmail-related material</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Promoting self-harm, suicide, or dangerous activities</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Attempting unauthorized access to accounts or systems</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Distributing malware, pirated software, or harmful code</li>
              <li className="flex items-start gap-2 text-gray-300"><span className="text-blue-400">•</span>Harassing, defaming, or threatening others’ physical, mental, or financial safety</li>
            </ul>
            <p className="text-gray-300 mt-4">Report violations to <a href="mailto:abuse@winkr.live" className="text-blue-400 underline">abuse@winkr.live</a>.</p>
          </section>

          {/* Interaction Guidelines */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-500/30 transform transition hover:scale-[1.01] hover:border-purple-400">
            <div className="flex items-center gap-3 mb-4">
              <FiUserX className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Interaction Guidelines</h3>
            </div>
            <p className="text-gray-300 mb-4">Respect and mutual consent are the cornerstones of all interactions on Winkr. To maintain a positive environment, please observe the following:</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-2 p-3 bg-gray-800/20 rounded-lg"><FiCheckCircle className="flex-shrink-0 mt-1 w-4 h-4 text-green-400" /><span className="text-gray-300">No unsolicited sexual advances (IPC 354D)</span></div>
              <div className="flex items-start gap-2 p-3 bg-gray-800/20 rounded-lg"><FiCheckCircle className="flex-shrink-0 mt-1 w-4 h-4 text-green-400" /><span className="text-gray-300">Respect withdrawal of consent instantly</span></div>
              <div className="flex items-start gap-2 p-3 bg-gray-800/20 rounded-lg"><FiCheckCircle className="flex-shrink-0 mt-1 w-4 h-4 text-green-400" /><span className="text-gray-300">Zero tolerance for cyberbullying</span></div>
              <div className="flex items-start gap-2 p-3 bg-gray-800/20 rounded-lg"><FiCheckCircle className="flex-shrink-0 mt-1 w-4 h-4 text-green-400" /><span className="text-gray-300">No unauthorized recordings</span></div>
              <div className="flex items-start gap-2 p-3 bg-gray-800/20 rounded-lg"><FiCheckCircle className="flex-shrink-0 mt-1 w-4 h-4 text-green-400" /><span className="text-gray-300">Honor privacy and personal boundaries</span></div>
            </div>
            <p className="text-gray-300 mt-4">Avoid sharing personal details like phone numbers, emails, social media handles, or any identifiable information that risks your privacy or security and safety. Following these ensures a respectful community.</p>
          </section>

          {/* Video Interaction Guidelines */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-500/30 transform transition hover:scale-[1.01] hover:border-purple-400">
            <div className="flex items-center gap-3 mb-4">
              <FiUserX className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Video Interaction Guidelines</h3>
            </div>
            <p className="text-gray-300 mb-4">Using Winkr’s Video Chat service requires compliance with these rules, or you’ll face permanent termination. Opt out if you disagree.</p>
            <ul className="space-y-3 pl-4 list-disc text-gray-300">
              <li><span className="font-semibold text-blue-400">Disrespectful Conduct:</span> No obscene language, toxic behavior, rude gestures, or discrimination based on race, religion, nationality, gender, age, or appearance.</li>
              <li><span className="font-semibold text-blue-400">Inappropriate Camera Use:</span> No nudity, exposure (e.g., underwear, sheer clothing, or partial undressing).</li>
              <li><span className="font-semibold text-blue-400">Sexually Explicit Acts:</span> Forbidden actions include:
                <ul className="space-y-2 pl-4 list-disc text-gray-400">
                  <li>Displaying intimate areas (even clothed)</li>
                  <li>Suggestive gestures (e.g., seductive lip-licking, object rubbing)</li>
                  <li>Using explicit emojis (e.g., 🍆💦) or language</li>
                  <li>Requesting or suggesting explicit acts</li>
                  <li>Touching intimate areas on camera</li>
                  <li>Asking others to expose themselves</li>
                </ul>
              </li>
              <li><span className="font-semibold text-blue-400">Harassment/Threats:</span> No harassment, defamation, or threats to others’ well-being.</li>
            </ul>
            <h3 className="text-xl font-bold text-white mt-6">Face Visibility</h3>
            <ul className="space-y-3 pl-4 list-disc text-gray-300 mt-2">
              <li>Keep your face visible always (use text chat if unwilling)</li>
              <li>No webcam emulators, filters, effects, masks, or virtual characters</li>
              <li>Don’t point cameras at screens, photos, or drawings with inappropriate content</li>
              <li>No signs with illegal or suggestive messages</li>
            </ul>
            <p className="text-gray-300 mt-4">Compliance maintains a safe video community.</p>
          </section>

          {/* Safety Features */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 transform transition hover:scale-[1.01] hover:border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <FiShield className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Safety Features</h3>
            </div>
            <p className="text-gray-300 mb-4">Your security is our priority. Winkr offers:</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg"><span className="text-2xl">🚨</span><span className="text-gray-300">Instant reporting for quick action</span></div>
              <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg"><span className="text-2xl">🤖</span><span className="text-gray-300">Automated nudity detection</span></div>
              <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg"><span className="text-2xl">📍</span><span className="text-gray-300">Location masking for privacy</span></div>
              <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg"><span className="text-2xl">💬</span><span className="text-gray-300">24-hour self-destructing messages</span></div>
              <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg"><span className="text-2xl">⏳</span><span className="text-gray-300">2-hour cool-off period</span></div>
              <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg"><span className="text-2xl">📱</span><span className="text-gray-300">Device-level blocking</span></div>
            </div>
            <p className="text-gray-300 mt-4">We update these features regularly for top-tier protection.</p>
          </section>

          {/* Reporting Section */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-500/30 text-center">
            <div className="flex flex-col items-center gap-4">
              <FiAlertTriangle className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white">Need Help?</h3>
              <p className="text-gray-300 mb-4">Facing issues? Our 24/7 support team is here. Report violations to:</p>
              <div className="space-y-2">
                <a href="mailto:report@winkr.live" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"><FiMail className="w-5 h-5" />report@winkr.live</a>
                <p className="text-sm text-gray-400">Expect a response within 24 hours</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
;