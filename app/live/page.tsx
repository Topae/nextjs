import Image from "next/image";

export default function Live() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Header remains the same */}
      <header className="bg-[#FF6B00] py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white hover:scale-105 transition-transform">OshiTime</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="/" className="text-white hover:text-orange-200 transition-colors duration-300">Home</a>
            <a href="/news" className="text-white hover:text-orange-200 transition-colors duration-300">News</a>
            <a href="/member" className="text-white hover:text-orange-200 transition-colors duration-300">Member</a>
            <a href="/live" className="text-white hover:text-orange-200 transition-colors duration-300">Live</a>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-orange-600 mb-8 hover:text-orange-700 transition-colors">Live Schedule</h1>

        {/* Current Live */}
        <div className="bg-orange-50 p-6 rounded-lg mb-12 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Currently Live</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <Image
                src="/live-placeholder.jpg"
                alt="Live Stream"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                <span className="animate-[fadeIn_1s_ease-in-out]">LIVE</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 hover:text-orange-500 transition-colors">Special Performance</h3>
              <p className="text-gray-600 mb-4 hover:text-gray-800 transition-colors">Watch our special live performance...</p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-200">
                Join Live
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <h2 className="text-2xl font-bold text-orange-600 mb-6 hover:text-orange-700 transition-colors">Upcoming Schedule</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-orange-50">
              <div className="text-orange-500 font-semibold mb-2">Dec 25, 2023</div>
              <h3 className="font-bold text-xl mb-2 hover:text-orange-500 transition-colors">Event Title</h3>
              <p className="text-gray-600 mb-4">19:00 JST</p>
              <button className="w-full bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transform hover:scale-105 transition-all duration-300 shadow hover:shadow-orange-200">
                Set Reminder
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}