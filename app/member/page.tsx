import Image from "next/image";
import Link from "next/link";

export default function Member() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white drop-shadow-sm">
              OshiTime
            </h1>
          </div>
          <nav className="flex space-x-6">
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

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8 tracking-tight">
          Members
        </h1>

        {/* Member Categories */}
        <div className="flex gap-4 mb-8">
          {["Tim Inti", "Tim Traine"].map((team) => (
            <button
              key={team}
              className="px-6 py-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors duration-300 ring-1 ring-orange-200/60">
              {team}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="group cursor-pointer bg-white rounded-xl ring-1 ring-black/5 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative h-80 rounded-t-xl overflow-hidden mb-4">
                <Image
                  src="/member-placeholder.jpg"
                  alt="Member photo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold px-4">Member Name</h3>
              <p className="text-orange-600 px-4 pb-4">Team A</p>
            </div>
          ))}
        </div>
      </div>
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
                <Link
                  href="/about"
                  className="hover:underline underline-offset-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline underline-offset-4">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline underline-offset-4">
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
