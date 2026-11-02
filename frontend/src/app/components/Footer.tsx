
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">

        {/* About */}
        <div>
          <h2 className="mb-4 text-xl font-bold">
            Medicover Blogs
          </h2>

          <p className="text-sm leading-7 text-gray-300">
            Explore health information, wellness tips and
            expert-reviewed articles to help you make
            informed healthcare decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blogs">Health Blogs</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Blog Categories
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>General Health</li>
            <li>Nutrition</li>
            <li>Fitness</li>
            <li>Women's Health</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 px-6 py-5 text-center text-sm text-gray-400">
        © 2026 Medicover Blogs. All rights reserved.
      </div>

    </footer>
  );
}
