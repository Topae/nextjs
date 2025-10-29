import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <main className="w-full">
        {/* Header */}
        <header className="bg-orange-500 py-4 px-6 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">OshiTime</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-white hover:text-orange-200">Home</a>
              <a href="/news" className="text-white hover:text-orange-200">News</a>
              <a href="/member" className="text-white hover:text-orange-200">Member</a>
              <a href="/live" className="text-white hover:text-orange-200">Live</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-orange-50 py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Latest Updates</h2>
                <p className="text-gray-600 mb-4">Stay updated with the latest news and entertainment from your favorite idols.</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
                  Read More
                </button>
              </div>
              <div className="relative h-64">
                <Image
                  src="/placeholder-news.jpg"
                  alt="Featured News"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-600 mb-8">Trending News</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/news-placeholder.jpg"
                      alt="News thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">News Title</h4>
                    <p className="text-gray-600">Short description of the news article goes here...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Schedule Section */}
        <section className="bg-orange-50 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-600 mb-8">Upcoming Perfomance Schedule</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-orange-500 font-semibold mb-2">Dec 25, 2023</div>
                  <h4 className="font-bold mb-2">Special Christmas Live</h4>
                  <p className="text-sm text-gray-600 mb-2">19:00 JST</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-500">Live Streaming</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Spotlight */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-600 mb-8">Member Spotlight</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <div className="relative h-80">
                    <Image
                      src="/member-placeholder.jpg"
                      alt="Member photo"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
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
        <footer className="bg-orange-500 text-white py-8 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4">OshiTime</h4>
              <p className="text-orange-100">Your daily source for idol news and updates</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="/about" className="text-orange-100 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-orange-100 hover:text-white">Contact</a></li>
                <li><a href="/privacy" className="text-orange-100 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-100 hover:text-white">Twitter</a>
                <a href="#" className="text-orange-100 hover:text-white">Instagram</a>
                <a href="#" className="text-orange-100 hover:text-white">YouTube</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
