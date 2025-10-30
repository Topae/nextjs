import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-orange-50 via-white to-orange-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur z-10 shadow-xl border-b border-orange-100 py-4 px-6 sticky top-0">
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
              className="font-semibold text-white bg-linear-to-r from-orange-400 to-orange-600 px-3 py-1.5 rounded-lg shadow transition-all duration-200">
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

      <div className="max-w-6xl mx-auto px-4 py-12 flex-1 w-full">
        <h1 className="text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-red-400 to-pink-500 mb-10 tracking-tight">
          Latest News
        </h1>

        {/* Featured News */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl p-7 rounded-3xl mb-12 ring-1 ring-orange-100 border border-orange-200 border-opacity-40 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(255,122,44,0.20)] hover:scale-[1.012]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 rounded-2xl overflow-hidden group shadow-inner">
              <Image
                src="/news-placeholder.jpg"
                alt="Featured News"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <span className="inline-block text-xs bg-orange-100/80 text-orange-600 font-semibold rounded px-3 py-1 mb-2 shadow">
                Featured
              </span>
              <h2 className="text-3xl font-black mt-1 mb-4 text-orange-700 tracking-tighter">
                Breaking News Title
              </h2>
              <p className="text-gray-700 text-lg">
                Detailed description of the featured news article...
              </p>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white/90 backdrop-blur  rounded-2xl shadow-lg overflow-hidden ring-1 ring-orange-100 border border-orange-200 border-opacity-40 transition-all duration-300 hover:shadow-orange-200 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025]">
              <div className="relative h-48 overflow-hidden group">
                <Image
                  src="/news-placeholder.jpg"
                  alt="News thumbnail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="font-semibold text-sm text-orange-500">
                  December 25, 2023
                </span>
                <h3 className="text-lg font-bold text-orange-800 my-2">
                  News Title
                </h3>
                <p className="text-gray-700">
                  Short description of the news article...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-linear-to-r from-orange-600 to-pink-500 text-white py-14 px-6 mt-12 rounded-t-3xl shadow-xl border-t-2 border-pink-100/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-black tracking-tight">OshiTime</h3>
            <p className="mt-3 text-white/90 text-base leading-relaxed">
              Your daily source for idol news and updates
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 underline underline-offset-8 decoration-white/30 decoration-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:underline underline-offset-4 decoration-orange-200 font-medium transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline underline-offset-4 decoration-orange-200 font-medium transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline underline-offset-4 decoration-orange-200 font-medium transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 underline underline-offset-8 decoration-white/30 decoration-2">
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
