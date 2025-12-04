// "use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Day01</Link>
        </div>

        {/* for the navigation links */}

        <div className="flex gap-8">
          <Link href="/" className="ml-4">Home</Link>
          <Link href="/about" className="ml-4">
            About
          </Link>
          <Link href="/contact" className="ml-4">
            Contact
          </Link>
          <Link href="/blog" className="ml-4">
            Blog
            
          </Link>
          <Link href="/products" className="ml-4">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
