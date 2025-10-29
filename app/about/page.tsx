import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#FF6B00] py-4 px-6 shadow-md">
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

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-orange-600 mb-8">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Source for Idol Entertainment</h2>
            <p className="text-gray-600 leading-relaxed">
              OshiTime is your premier destination for the latest updates, news, and content about your favorite idols. We are dedicated to bringing you high-quality coverage of performances, events, and behind-the-scenes moments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to connect fans with their favorite idols through comprehensive coverage and engaging content.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/about-placeholder.jpg"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Our Vision</h3>
            <p className="text-gray-600">To be the leading platform for idol entertainment news and updates.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Our Mission</h3>
            <p className="text-gray-600">Delivering accurate, timely, and engaging content to fans worldwide.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Our Values</h3>
            <p className="text-gray-600">Integrity, passion, and dedication in everything we do.</p>
          </div>
        </div>
      </main>
    </div>
  );
}