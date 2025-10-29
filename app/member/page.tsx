import Image from "next/image";

export default function Member() {
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
        <h1 className="text-3xl font-bold text-orange-600 mb-8">Members</h1>

        {/* Member Categories */}
        <div className="flex gap-4 mb-8">
          {['Team A', 'Team B', 'Team C'].map((team) => (
            <button
              key={team}
              className="px-6 py-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200"
            >
              {team}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/member-placeholder.jpg"
                  alt="Member photo"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold">Member Name</h3>
              <p className="text-orange-500">Team A</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}