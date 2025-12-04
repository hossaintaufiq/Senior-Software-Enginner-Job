import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-md mt-8 flex justify-around  h-auto p-4">
      <div className="">
        <img src="/logo.png" alt="company logo" />
        <p className="text-gray-600">&copy; 2024 Day01. All rights reserved.</p>
      </div>
      <div>
        <p className="text-gray-600">Main menu</p>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <p>Social media options</p>
        <ul>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Google</li>
            <li>Yahoo</li>
        </ul>
      </div>
    </footer>
  );
}
