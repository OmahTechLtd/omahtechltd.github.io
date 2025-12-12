import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 py-16 px-6 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 text-center md:text-left">

        {/* Contact Emails */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">Contact</h3>
          <a href="mailto:admin@omahtech.co" className="hover:text-green-400 transition text-sm">
            admin@omahtech.co
          </a>
          <br />
          <a href="mailto:info@omahtech.co" className="hover:text-green-400 transition text-sm">
            info@omahtech.co
          </a>
        </div>

        {/* Address */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">Head Office</h3>
          <p className="text-sm leading-relaxed">
            SUITE C97/420, Citiscape Shariff Mall,<br />
            Aminu Kano Crescent, Wuse 2, Abuja, Nigeria<br />
            Phone: +234 702 567 4599
          </p>
        </div>

        {/* Socials */}
        <div className="space-y-4 flex flex-col items-center md:items-end">
          <h3 className="text-xl font-semibold text-white tracking-wide">Follow Us</h3>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/company/omah-tech/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/OmahTechLtd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com/omah.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-14 mb-10"></div>

      {/* Policy */}
      <div className="flex justify-center">
        <a
          href="/docs/Company Policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition underline text-sm"
        >
          Company Policy
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-gray-500 text-xs tracking-wide">
        © {new Date().getFullYear()} Omah Tech Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;