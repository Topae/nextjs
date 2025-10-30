import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
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
          <nav className="hidden md:flex space-x-8">
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
        <h1 className="text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-rose-400 to-pink-500 mb-12 text-center animate-fade-in tracking-tight">
          About OshiTime
        </h1>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8 animate-fade-in transition-all">
            <h2 className="text-3xl font-black text-orange-700 mb-3">
              Your Source for Fandom Inspiration
            </h2>
            <p className="text-gray-700 leading-relaxed text-xl font-medium">
              OshiTime is your premier destination for the latest updates, news,
              and content about your favorite idols. We are dedicated to
              bringing you high-quality coverage of performances, events, and
              behind-the-scenes moments.
            </p>
            <p className="text-gray-700 leading-relaxed text-xl font-medium">
              Our mission is to connect fans with their favorite idols through
              comprehensive coverage and engaging content.
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group animate-fade-in transition-all">
            <Image
              src="/about-placeholder.jpg"
              alt="About Us"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mb-16 text-center">
          <div className="bg-white/80 backdrop-blur-2xl p-10 rounded-2xl shadow-xl hover:shadow-orange-200 hover:shadow-2xl hover:scale-[1.055] transition-all duration-500 ring-1 ring-orange-100 border border-orange-200 border-opacity-40 animate-fade-in">
            <h3 className="text-xl font-bold text-orange-700 mb-4 tracking-tight">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              To become a creative, inspiring, interactive, positive, and
              trustworthy fandom and community media platform where fans can
              connect with their idols.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-2xl p-10 rounded-2xl shadow-xl hover:shadow-orange-200 hover:shadow-2xl hover:scale-[1.055] transition-all duration-500 ring-1 ring-orange-100 border border-orange-200 border-opacity-40 animate-fade-in delay-100">
            <h3 className="text-xl font-bold text-orange-700 mb-4 tracking-tight">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              Building a positive, creative, and interactive fandom community
              for young generations while supporting a modern and enjoyable
              Indonesian fandom ecosystem.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-2xl p-10 rounded-2xl shadow-xl hover:shadow-orange-200 hover:shadow-2xl hover:scale-[1.055] transition-all duration-500 ring-1 ring-orange-100 border border-orange-200 border-opacity-40 animate-fade-in delay-200">
            <h3 className="text-xl font-bold text-orange-700 mb-4 tracking-tight">
              Our Values
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              OshiTime is a space for fans to express and share their creativity
              through various forms of digital art.
            </p>
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
