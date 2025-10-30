"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Member() {
  const [selectedGroup, setSelectedGroup] = useState("JKT48");
  const members = [
    { id: 1, name: "Member 1", group: "JKT48" },
    { id: 2, name: "Member 2", group: "JKT48" },
    { id: 3, name: "Member 3", group: "JKT48" },
    { id: 4, name: "Member 4", group: "JKT48" },
    { id: 5, name: "Member 5", group: "KLP48" },
    { id: 6, name: "Member 6", group: "KLP48" },
    { id: 7, name: "Member 7", group: "KLP48" },
    { id: 8, name: "Member 8", group: "KLP48" },
  ];
  const filteredMembers = members.filter((m) => m.group === selectedGroup);

  return (
    <div className="min-h-screen bg-linear-to-tr from-orange-100 via-white to-orange-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur sticky top-0 shadow-xl border-b border-orange-100 py-4 px-6 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-orange-600 drop-shadow-md tracking-tighter select-none">
              OshiTime
            </h1>
          </div>
          <nav className="flex space-x-6">
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
              className="font-semibold text-white bg-linear-to-r from-orange-400 to-orange-600 px-3 py-1.5 rounded-lg shadow transition-all duration-200">
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

      <div className="max-w-6xl mx-auto px-6 py-12 w-full flex-1">
        <h1 className="text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-rose-400 to-pink-500 mb-12 tracking-tight text-center">
          Members
        </h1>
        {/* Member Categories */}
        <div className="flex gap-4 mb-10 justify-center">
          {["JKT48", "KLP48"].map((group) => (
            <button
              key={group}
              className={`px-7 py-2 rounded-full bg-orange-100/80 text-orange-600 hover:bg-pink-200 hover:text-orange-800 font-bold shadow-md transition-all duration-200 border border-orange-200 focus-visible:outline-none focus:ring-2 focus:ring-orange-300${
                selectedGroup === group
                  ? " ring-2 ring-orange-400 bg-orange-200"
                  : ""
              } transition-transform hover:scale-105`}
              onClick={() => setSelectedGroup(group)}
              type="button">
              {group}
            </button>
          ))}
        </div>
        {/* Members Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {filteredMembers.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer bg-white/80 backdrop-blur-lg rounded-2xl ring-1 ring-orange-100 border border-orange-200 border-opacity-40 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:ring-2 hover:ring-orange-300">
              <div className="relative h-80 rounded-t-2xl overflow-hidden mb-4">
                <Image
                  src="/member-placeholder.jpg"
                  alt="Member photo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-black px-4 text-orange-800 tracking-tight">
                {item.name}
              </h3>
              <p className="text-orange-500 px-4 pb-6 font-bold">
                {item.group}
              </p>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-linear-to-r from-orange-600 to-pink-500 text-white py-16 px-6 mt-16 rounded-t-3xl shadow-xl border-t-2 border-pink-100/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-black tracking-tight">OshiTime</h3>
            <p className="mt-4 text-white/90 text-lg">
              Your daily source for idol news and updates
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 underline underline-offset-8 decoration-white/40 decoration-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:underline underline-offset-4 font-medium transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline underline-offset-4 font-medium transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline underline-offset-4 font-medium transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 underline underline-offset-8 decoration-white/40 decoration-2">
              Follow Us
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://x.com/oshitimeofc?t=pePK-kX9qf3ZJhpUaLfM4Q&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                Twitter
              </a>
              <a
                href="https://www.instagram.com/oshitime.ofc?igsh=MTdybHhwYjhkcXZ5OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                Instagram
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBQnqCJP217M1yZ8B1E"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 font-medium transition-transform duration-200 hover:-translate-y-1">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
