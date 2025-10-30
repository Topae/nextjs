import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white drop-shadow-sm">
              OshiTime
            </h1>
          </div>
          <nav className="flex space-x-6">
            <Link
              href="/"
              className="text-white hover:text-orange-100 transition-colors duration-300">
              Home
            </Link>
            <Link
              href="/news"
              className="text-white hover:text-orange-100 transition-colors duration-300">
              News
            </Link>
            <Link
              href="/member"
              className="text-white hover:text-orange-100 transition-colors duration-300">
              Member
            </Link>
            <Link
              href="/live"
              className="text-white hover:text-orange-100 transition-colors duration-300">
              Live
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8 tracking-tight">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-800 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm transition focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm transition focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm transition focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Have questions or feedback? We&apos;d love to hear from you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-orange-500">Email:</div>
                <div className="text-gray-600">oishitime@gmail.com</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-orange-500">Address:</div>
                <div className="text-gray-600">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-orange-500 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold">OshiTime</h3>
            <p className="mt-4 text-white/90">
              Your daily source for idol news and updates
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:underline underline-offset-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline underline-offset-4">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline underline-offset-4">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 transition-transform duration-200 hover:-translate-y-0.5">
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 transition-transform duration-200 hover:-translate-y-0.5">
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 transition-transform duration-200 hover:-translate-y-0.5">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
