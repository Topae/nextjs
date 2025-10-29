import Image from "next/image";

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#FF6B00] py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">OshiTime</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="/" className="text-white hover:text-orange-200">Home</a>
            <a href="/news" className="text-white hover:text-orange-200">News</a>
            <a href="/member" className="text-white hover:text-orange-200">Member</a>
            <a href="/live" className="text-white hover:text-orange-200">Live</a>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-orange-600 mb-8">Latest News</h1>
        
        {/* Featured News */}
        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64">
              <Image
                src="/news-placeholder.jpg"
                alt="Featured News"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <span className="text-orange-500 font-medium">Featured</span>
              <h2 className="text-2xl font-bold mt-2 mb-4">Breaking News Title</h2>
              <p className="text-gray-600">Detailed description of the featured news article...</p>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
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
                <span className="text-orange-500 text-sm">December 25, 2023</span>
                <h3 className="text-xl font-semibold text-gray-800 my-2">News Title</h3>
                <p className="text-gray-600">Short description of the news article...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}