import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-6 shadow-md">
  {/* ...header content... */}
  <h1 className="text-2xl font-bold">NAMA AI</h1>
        <nav className="space-x-6">
          <Link href="#solutions" className="hover:underline">Solution</Link>
          <Link href="#services" className="hover:underline">Services</Link>
          <Link href="#about" className="hover:underline">About Us</Link>
          <button className="bg-black text-white px-4 py-2 rounded-full">LOGIN</button>
        </nav>
</header>
  )
}