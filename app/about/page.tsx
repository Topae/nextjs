import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white drop-shadow-sm">OshiTime</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
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

      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-12 text-center animate-fade-in">
          About OshiTime
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Source for Idol Entertainment
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              OshiTime is your premier destination for the latest updates, news,
              and content about your favorite idols. We are dedicated to
              bringing you high-quality coverage of performances, events, and
              behind-the-scenes moments.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to connect fans with their favorite idols through
              comprehensive coverage and engaging content.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/about-placeholder.jpg"
              alt="About Us"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ring-1 ring-black/5">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the leading platform for idol entertainment news and
              updates.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ring-1 ring-black/5">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Delivering accurate, timely, and engaging content to fans
              worldwide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ring-1 ring-black/5">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600">
              Integrity, passion, and dedication in everything we do.
            </p>
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
                <Link href="/about" className="hover:underline underline-offset-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline underline-offset-4">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline underline-offset-4">
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
