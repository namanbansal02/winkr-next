'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 xxs:py-8 md:py-12  px-4 sm:px-6 lg:px-8 border-t border-borderGray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col sm:items-start xxs:items-center justify-center space-y-3">
            <Image
              src="/winkr-logo-min.svg"
              alt="Winkr Logo"
              className="h-10 md:h-16 w-auto"
              width={160}
              height={64}
            />
            <p className="text-white text-center text-sm max-w-xs leading-relaxed md:ml-3">
              Coversations made moments ;)
            </p>
          </div>

          {/* Social Media & Legal Links */}
          <div className="flex flex-col xxs:items-center md:items-end space-y-6">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <SocialLink href="https://www.instagram.com/winkr.live" icon={<FaInstagram size={20} />} label="Instagram" hoverColor="hover:text-pink-500" />
              <SocialLink href="https://discord.gg/9E4XyBedZA" icon={<FaDiscord size={20} />} label="Discord" hoverColor="hover:text-indigo-500" />
              <SocialLink href="https://www.facebook.com/share/16DGnMyYcx/" icon={<FaFacebook size={20} />} label="Facebook" hoverColor="hover:text-blue-600" />
              <SocialLink href="https://www.twitter.com/winkr_live" icon={<FaTwitter size={20} />} label="Twitter" hoverColor="hover:text-blue-400" />
              <SocialLink href="https://www.linkedin.com/company/winkr" icon={<FaLinkedin size={20} />} label="LinkedIn" hoverColor="hover:text-blue-500" />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col xxs:items-center md:items-end space-y-2 text-sm">
              <FooterLink href="/community" text="Community Guidelines" />
              <FooterLink href="/terms" text="Terms of Service" />
              <FooterLink href="/privacy" text="Privacy Policy" />
              <a href="/support" className="flex items-center text-gray-400 hover:text-gray-200">
                <FaEnvelope size={16} className="mr-2" />
                info@winkr.live
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-gray-400 border-t border-borderGray pt-4 mt-4">
          <p className="text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Winkr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-400 ${hoverColor} transition-colors duration-300`}
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, text }) => (
  <Link href={href} className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
    {text}
  </Link>
);

export default Footer;
