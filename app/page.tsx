import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <main className="w-full">
        {/* Header */}
        <header className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 px-6 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white drop-shadow-sm">
                OshiTime
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
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

        {/* Hero Section */}
        <section className="bg-orange-50 py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4 tracking-tight">
                  Latest Updates
                </h2>
                <p className="text-gray-600 mb-6">
                  Stay updated with the latest news and entertainment from your
                  favorite idols.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 hover:-translate-y-0.5">
                  <Link href="/readmore" className="block w-full h-full">
                    Read More
                  </Link>
                </button>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/placeholder-news.jpg"
                  alt="Featured News"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8 tracking-tight">
              Trending News
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl shadow-md overflow-hidden ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src="/news-placeholder.jpg"
                      alt="News thumbnail"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      News Title
                    </h4>
                    <p className="text-gray-600">
                      Short description of the news article goes here...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Schedule Section */}
        <section className="bg-orange-50 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8 tracking-tight">
              Upcoming Perfomance Schedule
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white p-4 rounded-xl ring-1 ring-black/5 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="text-orange-600 font-semibold mb-2">
                    Dec 25, 2023
                  </div>
                  <h4 className="font-bold mb-2">Special Christmas Live</h4>
                  <p className="text-sm text-gray-600 mb-2">19:00 JST</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-500">
                      Live Streaming
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Spotlight */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8 tracking-tight">
              Member Spotlight
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/member-placeholder.jpg"
                      alt="Member photo"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold">Member Name</h4>
                    <p className="text-orange-200 text-sm">Team Name</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-orange-500 text-white py-14 px-6 transition-colors duration-300">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <h4 className="font-bold text-2xl mb-2">OshiTime</h4>
              <p className="text-white/90">
                Your daily source for idol news and updates
              </p>
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <h5 className="font-bold text-xl mb-4">Quick Links</h5>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="hover:underline underline-offset-4 transition-colors duration-200 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:underline underline-offset-4 transition-colors duration-200 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:underline underline-offset-4 transition-colors duration-200 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <h5 className="font-bold text-xl mb-4">Follow Us</h5>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90">
                  Twitter
                </a>
                <a
                  href="#"
                  className="hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90">
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
