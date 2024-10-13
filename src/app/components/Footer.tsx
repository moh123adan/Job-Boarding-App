import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Briefcase,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">About Us</h3>
          <p>
            Heaven fruitful doesn't cover lesser days. Appear creeping seasons
            so behold.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2">
            <li>Address: Your address goes here.</li>
            <li>Phone: +8800 44338899</li>
            <li>Email: info@jobboard.com</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Important Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-500">
                View Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Newsletter</h3>
          <p className="mb-4">
            Heaven fruitful doesn’t over lesser in days. Appear creeping.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow px-4 py-2 rounded-l-md shadow-lg bg-gray-100 border border-gray-300 text-black focus:outline-none"
            />
            <button className="bg-red-500 px-4 py-2 rounded-r-md hover:bg-red-600 transition">
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto flex justify-between items-center mt-8 text-gray-500">
        <div className="flex items-center gap-2">
          <Briefcase size={24} className="text-red-500" />
          <span className="text-black text-xl font-semibold">NextHire</span>
        </div>
        <div className="flex space-x-8">
          <div className="text-center">
            <h4 className="text-2xl text-black">5000+</h4>
            <span>Talented Hunters</span>
          </div>
          <div className="text-center">
            <h4 className="text-2xl text-black">451</h4>
            <span>Talented Hunters</span>
          </div>
          <div className="text-center">
            <h4 className="text-2xl text-black">568</h4>
            <span>Talented Hunters</span>
          </div>
        </div>
      </div>

      {/* Copyright and Social Links */}
      <div className="container mx-auto mt-8 text-center">
        <p className="text-gray-700">
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span className="text-red-500">❤</span> by Colorlib
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600">
            <Facebook size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
