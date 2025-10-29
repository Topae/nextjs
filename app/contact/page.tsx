import Image from "next/image";

export default function Contact() {
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
        <h1 className="text-4xl font-bold text-orange-600 mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"></textarea>
              </div>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-gray-600">Have questions or feedback? We'd love to hear from you.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-orange-500">Email:</div>
                <div className="text-gray-600">contact@oshitime.com</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-orange-500">Address:</div>
                <div className="text-gray-600">Tokyo, Japan</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}