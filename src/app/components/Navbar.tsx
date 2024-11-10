import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="w-full max-w-6xl mx-auto flex justify-between py-6">
        <h1 className="text-3xl font-bold">GREENMIND</h1>
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-700 hover:text-black">Home</Link>
          <Link href="#" className="text-gray-700 hover:text-black">Products</Link>
          <Link href="#" className="text-gray-700 hover:text-black">Contacts</Link>
        </div>
      </nav>
    );
}