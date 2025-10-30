import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-linear-to-tr from-orange-100 via-white to-orange-50">
      <main className="w-full">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-xl sticky top-0 shadow-xl border-b border-orange-100 z-20 py-4 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-extrabold text-orange-600 drop-shadow-md tracking-tighter select-none">
                OshiTime
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
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

        {/* Hero Section */}
        <section className="bg-orange-50/60 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl ring-1 ring-orange-100 border border-orange-200 border-opacity-30 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_24px_0_rgba(255,160,44,0.19)]">
                <h2 className="text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-rose-400 to-pink-500 mb-5 tracking-tight">
                  Latest Updates
                </h2>
                <p className="text-gray-700 mb-8 text-lg">
                  Stay updated with the latest news and entertainment from your
                  favorite idols.
                </p>
                <Link href="/readmore" className="block">
                  <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white font-extrabold text-lg px-8 py-3 rounded-2xl shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="relative h-72 rounded-3xl overflow-hidden group shadow-xl">
                <Image
                  src="/placeholder-news.jpg"
                  alt="Featured News"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-red-400 to-pink-400 mb-12 tracking-tight">
              Trending News
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden ring-1 ring-orange-100 border border-orange-200 border-opacity-40 transition-all duration-300 hover:shadow-orange-200 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03]">
                  <div className="relative h-56 overflow-hidden group">
                    <Image
                      src="/news-placeholder.jpg"
                      alt="News thumbnail"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-orange-800 mb-2">
                      News Title
                    </h4>
                    <p className="text-gray-700">
                      Short description of the news article goes here...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Schedule Section */}
        <section className="bg-orange-50/80 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-pink-500 to-pink-300 mb-12 tracking-tight">
              Upcoming Perfomance Schedule
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl ring-1 ring-orange-100 shadow-xl border border-orange-200 border-opacity-30 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="text-orange-600 font-bold mb-1">
                    Dec 25, 2023
                  </div>
                  <h4 className="font-black mb-1 text-lg text-orange-700">
                    Special Christmas Live
                  </h4>
                  <p className="text-base text-gray-700 mb-2">19:00 JST</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-bold">
                      Live Streaming
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Spotlight */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-rose-400 to-pink-400 mb-12 tracking-tight">
              Member Spotlight
            </h3>
            <div className="grid md:grid-cols-4 gap-10">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-orange-100 border border-orange-200 border-opacity-40 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/member-placeholder.jpg"
                      alt="Member photo"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-black text-lg">
                      Member Name
                    </h4>
                    <p className="text-orange-200 text-sm font-semibold">
                      Team Name
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-linear-to-r from-orange-600 to-pink-500 text-white py-14 px-6 mt-12 rounded-t-3xl shadow-xl border-t-2 border-pink-100/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
            <div className="transition-transform duration-300">
              <h4 className="font-black text-2xl mb-2 tracking-tighter">
                OshiTime
              </h4>
              <p className="text-white/90 text-base">
                Your daily source for idol news and updates
              </p>
            </div>
            <div className="transition-transform duration-300">
              <h5 className="font-bold text-xl mb-4 underline underline-offset-8 decoration-white/40 decoration-2">
                Quick Links
              </h5>
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
            <div className="transition-transform duration-300">
              <h5 className="font-bold text-xl mb-4 underline underline-offset-8 decoration-white/40 decoration-2">
                Follow Us
              </h5>
              <div className="flex space-x-6">
                <a
                  href="https://x.com/oshitimeofc?t=pePK-kX9qf3ZJhpUaLfM4Q&s=09"
                  className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/oshitime.ofc?igsh=MTdybHhwYjhkcXZ5OA=="
                  className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                  Instagram
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VbBQnqCJP217M1yZ8B1E"
                  className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
