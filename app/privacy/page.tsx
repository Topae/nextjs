import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
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

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8 tracking-tight">
          Privacy Policy
        </h1>

        <div className="prose max-w-none space-y-8">
          <section className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information that you provide directly to us, including
              when you create an account, make a purchase, or contact us for
              support.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and
              improve our services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Processing your transactions</li>
              <li>Sending you updates and notifications</li>
              <li>Responding to your requests</li>
              <li>Improving our website and services</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our Privacy Policy, please contact
              us at privacy@oshitime.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
