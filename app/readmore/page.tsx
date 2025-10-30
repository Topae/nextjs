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
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white drop-shadow-sm">
              OshiTime
            </h1>
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
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-20">
        <div className="max-w-3xl w-full mx-auto">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8 text-center animate-fade-in">
            Latest News Updates
          </h1>
          <div className="space-y-8">
            {dummyNews.map((news, i) => (
              <div
                key={news.title}
                className={`bg-white rounded-xl shadow-lg ring-1 ring-black/5 flex flex-col md:flex-row gap-6 items-center overflow-hidden p-6 animate-fade-up ${
                  i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"
                } duration-700 ${
                  news.type === "featured" ? "border-2 border-orange-400" : ""
                }`}>
                <div className="relative w-full md:w-56 h-40 md:h-32 flex-shrink-0 rounded-lg overflow-hidden group">
                  <Image
                    src={news.img}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-orange-600 text-sm mb-1">
                    {news.date}
                    {news.type === "featured" && (
                      <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {news.title}
                  </h2>
                  <p className="text-gray-700 mb-2">{news.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-md transition-all hover:shadow-lg hover:brightness-105 hover:-translate-y-0.5">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-6 transition-colors duration-300 animate-fade-in delay-700">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-3xl font-extrabold mb-2">OshiTime</h3>
            <p className="mt-4 text-white/90 text-lg">
              Your daily source for idol news and updates
            </p>
          </div>
          <div className="transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-2xl font-extrabold mb-6 drop-shadow">
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
          <div className="transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-2xl font-extrabold mb-6 drop-shadow">
              Follow Us
            </h4>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 items-center md:items-start justify-center md:justify-start">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:font-bold hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:animate-bounce">
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:font-bold hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:animate-bounce">
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:font-bold hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:animate-bounce">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
