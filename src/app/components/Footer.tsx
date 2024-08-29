import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className=" py-12 text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800">Job Board</h2>
          <p className="mt-2 max-w-sm">
            Your go-to platform for finding the best job opportunities. Whether
            you're looking for a new career or just starting out, we have
            something for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900">
                Contact
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-900">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={20} />
              <a
                href="mailto:info@jobboard.com"
                className="hover:text-gray-900"
              >
                info@jobboard.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={20} />
              <span>123 Job St, Work City, WC 12345</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-8 text-center text-gray-500">
        Job Board &copy; 2024 - All rights reserved
      </div>
    </footer>
  );
}
