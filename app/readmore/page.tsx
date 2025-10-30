import Image from "next/image";
import Link from "next/link";

const dummyNews = [
  {
    type: "featured",
    date: "December 25, 2023",
    title: "Breaking News Title",
    desc: "Detailed description of the featured news article...",
    img: "/news-placeholder.jpg",
  },
  {
    type: "regular",
    date: "December 23, 2023",
    title: "Another Big Event",
    desc: "Short description of the news article...",
    img: "/news-placeholder.jpg",
  },
  {
    type: "regular",
    date: "December 21, 2023",
    title: "Idol Update",
    desc: "Short description of the news article...",
    img: "/news-placeholder.jpg",
  },
];

export default function ReadMore() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-orange-100 via-white to-orange-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-20 shadow-xl border-b border-orange-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-orange-600 drop-shadow-md tracking-tighter select-none">
              OshiTime
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
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
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-14 pb-20">
        <div className="max-w-3xl w-full mx-auto">
          <h1 className="text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-rose-400 to-pink-500 mb-10 text-center animate-fade-in tracking-tight">
            Latest News Updates
          </h1>
          <div className="space-y-10">
            {dummyNews.map((news, i) => (
              <div
                key={news.title}
                className={`bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl ring-1 ring-orange-100 border border-orange-200 border-opacity-40 flex flex-col md:flex-row gap-6 items-center overflow-hidden p-7 transition-all duration-500 hover:shadow-orange-200 hover:shadow-2xl hover:scale-[1.025] group animate-fade-up ${
                  i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"
                } duration-700 ${
                  news.type === "featured" ? "border-2 border-orange-400" : ""
                }`}>
                <div className="relative w-full md:w-56 h-44 md:h-40 shrink-0 rounded-2xl overflow-hidden group">
                  <Image
                    src={news.img}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-orange-500 text-sm mb-1 font-semibold flex items-center gap-2">
                    <span>{news.date}</span>
                    {news.type === "featured" && (
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold shadow-md">
                        Featured
                      </span>
                    )}
                  </p>
                  <h2 className="text-2xl font-black text-orange-800 mb-2 tracking-tight">
                    {news.title}
                  </h2>
                  <p className="text-gray-700 text-base mb-2 font-medium">
                    {news.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/news"
              className="bg-linear-to-r from-orange-600 to-pink-500 text-white text-lg font-extrabold px-8 py-3 rounded-2xl shadow-xl transition-all hover:scale-105 hover:bg-pink-500/90 hover:shadow-2xl hover:brightness-110">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-linear-to-r from-orange-600 to-pink-500 text-white shadow-xl py-16 px-6 animate-fade-up delay-200 rounded-t-3xl mt-16 border-t-2 border-pink-100/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
          <div className="transition-transform duration-300 animate-fade-up delay-300">
            <h3 className="text-3xl font-black mb-2 tracking-tight">
              OshiTime
            </h3>
            <p className="mt-4 text-white/90 text-lg">
              Your daily source for idol news and updates
            </p>
          </div>
          <div className="transition-all duration-300 animate-fade-up delay-400">
            <h4 className="text-2xl font-black mb-6 underline underline-offset-8 decoration-white/30 decoration-2">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-lg hover:font-bold hover:underline underline-offset-4 transition-all duration-200 hover:text-white hover:opacity-90">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg hover:font-bold hover:underline underline-offset-4 transition-all duration-200 hover:text-white hover:opacity-90">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-lg hover:font-bold hover:underline underline-offset-4 transition-all duration-200 hover:text-white hover:opacity-90">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="transition-all duration-300 animate-fade-up delay-500">
            <h4 className="text-2xl font-black mb-6 underline underline-offset-8 decoration-white/30 decoration-2">
              Follow Us
            </h4>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 items-center md:items-start justify-center md:justify-start">
              <a
                href="https://x.com/oshitimeofc?t=pePK-kX9qf3ZJhpUaLfM4Q&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:font-bold hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                Twitter
              </a>
              <a
                href="https://www.instagram.com/oshitime.ofc?igsh=MTdybHhwYjhkcXZ5OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:font-bold hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                Instagram
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBQnqCJP217M1yZ8B1E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:font-bold hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
