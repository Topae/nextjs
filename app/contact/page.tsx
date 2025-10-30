import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-orange-100 via-white to-orange-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur sticky top-0 shadow-xl border-b border-orange-100 py-4 px-6 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-orange-600 drop-shadow-md tracking-tighter select-none transition-all duration-300 hover:scale-105">
              OshiTime
            </h1>
          </div>
          <nav className="flex space-x-6">
            <Link
              href="/"
              className="font-semibold text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-150">
              Home
            </Link>
            <Link
              href="/news"
              className="font-semibold text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-150">
              News
            </Link>
            <Link
              href="/member"
              className="font-semibold text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-150">
              Member
            </Link>
            <Link
              href="/live"
              className="font-semibold text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-150">
              Live
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 w-full flex-1">
        <h1 className="text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-rose-400 to-pink-500 mb-12 tracking-tight text-center animate-fade-in">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl ring-1 ring-orange-100 border border-orange-200 border-opacity-40 hover:shadow-orange-200 hover:shadow-2xl transition-all duration-300 animate-fade-in delay-75">
            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-orange-600 mb-2 font-bold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-orange-50/80 shadow ring-0 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-medium transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-orange-600 mb-2 font-bold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-orange-50/80 shadow ring-0 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-medium transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-orange-600 mb-2 font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-orange-50/80 shadow ring-0 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-medium transition-all duration-200"></textarea>
              </div>
              <button className="w-full bg-linear-to-r from-orange-600 to-pink-500 text-white text-lg font-extrabold py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-12 flex flex-col justify-center animate-fade-in">
            <div>
              <h2 className="text-3xl font-black text-orange-700 mb-6 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-gray-700 text-lg font-medium">
                Have questions or feedback? We&apos;d love to hear from you.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-5 bg-white/90 backdrop-blur-lg p-5 rounded-2xl shadow">
                <div className="text-orange-500 font-bold">Email:</div>
                <div className="text-gray-700 font-medium">
                  oishitime@gmail.com
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white/90 backdrop-blur-lg p-5 rounded-2xl shadow">
                <div className="text-orange-500 font-bold">Address:</div>
                <div className="text-gray-700 font-medium">
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-linear-to-r from-orange-600 to-pink-500 text-white py-16 px-6 mt-12 rounded-t-3xl shadow-xl border-t-2 border-pink-100/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-black tracking-tight">OshiTime</h3>
            <p className="mt-4 text-white/90 text-lg">
              Your daily source for idol news and updates
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 underline underline-offset-8 decoration-white/40 decoration-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:underline underline-offset-4 font-medium transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline underline-offset-4 font-medium transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline underline-offset-4 font-medium transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 underline underline-offset-8 decoration-white/40 decoration-2">
              Follow Us
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://x.com/oshitimeofc?t=pePK-kX9qf3ZJhpUaLfM4Q&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                Twitter
              </a>
              <a
                href="https://www.instagram.com/oshitime.ofc?igsh=MTdybHhwYjhkcXZ5OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                Instagram
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBQnqCJP217M1yZ8B1E"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
