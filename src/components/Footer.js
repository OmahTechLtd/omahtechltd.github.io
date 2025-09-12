import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4">
      {/* Contact Emails */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 mb-4 space-y-2 sm:space-y-0">
        <a href="mailto:vera@omahtech.co" className="hover:underline">vera@omahtech.co</a>
        <a href="mailto:sales@omahtech.co" className="hover:underline">sales@omahtech.co</a>
        <a href="mailto:info@omahtech.co" className="hover:underline">info@omahtech.co</a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
          <FaInstagram />
        </a>
      </div>

      {/* Company Policy Link */}
      <div className="flex justify-center mb-2 px-2 max-w-full">
        <a
          href="/docs/Company Policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline break-words text-center"
        >
          Company Policy
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-2 text-center">
        © {new Date().getFullYear()} Omah Tech Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;