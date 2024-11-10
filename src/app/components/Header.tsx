import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Best Selling Plants</h1>
        <p className="text-gray-600">Easiest way to healthy life by buying your favorite plants</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          See more
        </button>
      </div>
    </header>
  );
}