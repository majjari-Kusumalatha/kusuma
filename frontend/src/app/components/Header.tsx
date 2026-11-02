
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Website Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-800">
          Medicover Blogs
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-700">
            Home
          </Link>

          <Link href="/blogs" className="text-gray-700 hover:text-blue-700">
            Health Blogs
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-blue-700">
            About
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-blue-700">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
