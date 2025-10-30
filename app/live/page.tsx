import Image from "next/image";
import Link from "next/link";

export default function Live() {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-100 via-white to-orange-50">
      {/* Header remains the same */}
      <header className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-xl border-b border-orange-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-black text-orange-600 drop-shadow-md hover:scale-110 transition-transform select-none">
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
              className="font-semibold text-white bg-linear-to-r from-orange-400 to-orange-600 px-3 py-1.5 rounded-lg shadow transition-all duration-150">
              Live
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
        <h1 className="text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-rose-400 to-pink-500 mb-12 tracking-tight text-center animate-fade-in transition-all duration-700">
          Live Schedule
        </h1>
        {/* Current Live */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl mb-16 ring-1 ring-orange-100 border border-orange-200 border-opacity-30 shadow-2xl hover:shadow-orange-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.012] animate-fade-in">
          <h2 className="text-2xl font-black text-orange-700 mb-7 animate-fade-in delay-75">
            Currently Live
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative h-80 rounded-2xl overflow-hidden group shadow-xl animate-fade-in delay-150">
              <Image
                src="/live-placeholder.jpg"
                alt="Live Stream"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-5 left-5 bg-red-500 text-white px-4 py-1.5 rounded-xl flex items-center gap-3 ring-2 ring-white animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <span className="font-black tracking-tight animate-fade-in">
                  LIVE
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center animate-fade-in delay-200">
              <h3 className="text-2xl font-extrabold mb-4 text-orange-900 hover:text-orange-600 transition-colors duration-200">
                Special Performance
              </h3>
              <p className="text-gray-700 mb-6 text-lg font-medium hover:text-gray-800 transition-colors">
                Watch our special live performance...
              </p>
              <button className="bg-linear-to-r from-orange-600 to-pink-500 text-white font-extrabold text-lg px-8 py-3 rounded-2xl shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300">
                Join Live
              </button>
            </div>
          </div>
        </div>
        {/* Upcoming Schedule */}
        <h2 className="text-2xl font-bold text-orange-700 mb-8 text-center animate-fade-in delay-150 hover:text-orange-900 transition-colors">
          Upcoming Schedule Theater
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <div
              key={item}
              className="bg-white/90 backdrop-blur-lg p-7 rounded-2xl ring-1 ring-orange-100 border border-orange-200 border-opacity-40 shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-[1.03] opacity-0 translate-y-8 animate-fade-up"
              style={{
                animationDelay: `${idx * 70 + 250}ms`,
                animationFillMode: "forwards",
              }}>
              <div className="text-orange-500 font-bold mb-2 text-lg">
                Dec 25, 2023
              </div>
              <h3 className="font-black text-xl mb-2 text-orange-900 hover:text-pink-500 transition-colors">
                Event Title
              </h3>
              <p className="text-gray-700 mb-4">19:00 JST</p>
              <button className="w-full bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 hover:text-orange-900 font-bold shadow hover:shadow-orange-200 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400">
                Set Reminder
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-linear-to-r from-orange-600 to-pink-500 text-white py-16 px-6 mt-12 rounded-t-3xl shadow-xl border-t-2 border-pink-100/30 animate-fade-in delay-150">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div className="transition-transform duration-300">
            <h3 className="text-2xl font-black mb-2 tracking-tight">
              OshiTime
            </h3>
            <p className="mt-4 text-white/90 text-lg">
              Your daily source for idol news and updates
            </p>
          </div>
          <div className="transition-transform duration-300">
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
          <div className="transition-transform duration-300">
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
