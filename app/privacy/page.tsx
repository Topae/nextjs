import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-orange-100 via-white to-orange-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur sticky top-0 shadow-xl border-b border-orange-100 py-4 px-6 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-orange-600 drop-shadow-md tracking-tighter select-none">
              OshiTime
            </h1>
          </div>
          <nav className="flex space-x-6">
            <Link
              href="/"
              className="font-semibold text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200">
              Home
            </Link>
            <Link
              href="/news"
              className="font-semibold text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200">
              News
            </Link>
            <Link
              href="/member"
              className="font-semibold text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200">
              Member
            </Link>
            <Link
              href="/live"
              className="font-semibold text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200">
              Live
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 w-full flex-1">
        <h1 className="text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-rose-400 to-pink-500 mb-12 tracking-tight text-center">
          Privacy Policy
        </h1>
        <div className="space-y-12">
          <section className="bg-white/75 backdrop-blur-lg rounded-3xl p-10 shadow-2xl ring-1 ring-orange-100 border border-orange-200 border-opacity-40 hover:shadow-orange-200 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-extrabold text-orange-700 mb-6 tracking-tight">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5 text-base font-medium">
              We collect information that you provide directly to OshiTime, such
              as when you create an account, share content, participate in
              community activities, or contact us for support.
            </p>
            <ul className="list-disc pl-6 text-orange-600 space-y-2 font-bold">
              <li>Username and contact details</li>
              <li>Account information and login credentials</li>
              <li>Content and media you share on the platform</li>
              <li>Communication and notification preferences</li>
            </ul>
          </section>
          <section className="bg-white/75 backdrop-blur-lg rounded-3xl p-10 shadow-2xl ring-1 ring-orange-100 border border-orange-200 border-opacity-40 hover:shadow-orange-200 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-extrabold text-orange-700 mb-6 tracking-tight">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5 text-base font-medium">
              We use the information we collect to provide, maintain, and
              improve the OshiTime experience, including:
            </p>
            <ul className="list-disc pl-6 text-orange-600 space-y-2 font-bold">
              <li>Personalizing your fandom experience</li>
              <li>Sharing updates and news about your favorite idols</li>
              <li>Connecting fans through creative and interactive content</li>
              <li>Enhancing our platform and community features</li>
            </ul>
          </section>
          <section className="bg-white/75 backdrop-blur-lg rounded-3xl p-10 shadow-2xl ring-1 ring-orange-100 border border-orange-200 border-opacity-40 hover:shadow-orange-200 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-extrabold text-orange-700 mb-6 tracking-tight">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed text-base font-medium">
              If you have any questions about our Privacy Policy, please contact
              us at{" "}
              <span className="font-bold text-pink-600">
                privacy@oshitime.com
              </span>
            </p>
          </section>
        </div>
      </main>
      <footer className="bg-linear-to-r from-orange-600 to-pink-500 text-white py-16 px-6 mt-16 rounded-t-3xl shadow-xl border-t-2 border-pink-100/30">
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
