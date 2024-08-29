import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="container mx-auto my-16 px-6 md:px-44">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row items-center justify-around mb-12">
        <div className="flex items-center">
          <Mail className="text-red-600 mr-4" size={48} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
            <p className="text-gray-600">
              You can reach us via email at{" "}
              <a
                href="mailto:support@jobboard.com"
                className="text-blue-600 hover:underline"
              >
                support@jobboard.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around mb-12">
        <div className="flex items-center">
          <Phone className="text-green-600 mr-4" size={48} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Call Us</h2>
            <p className="text-gray-600">
              Our support team is available at{" "}
              <a
                href="tel:+123456789"
                className="text-blue-600 hover:underline"
              >
                +1 234 567 89
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around mb-12">
        <div className="flex items-center">
          <MapPin className="text-purple-600 mr-4" size={48} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
            <p className="text-gray-600">
              1234 Job Board Lane, Suite 100, Job City, JC 56789
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:border-pink-500 hover:bg-black hover:text-white hover:shadow-[0_0_15px_3px_rgba(255,0,255,0.5)]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
