import Image from 'next/image';

const Categories = () => {
  return (
    <div className="bg-[#d6ebe9] py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Categories</h2>
        <p className="text-gray-600">Find what you are looking for</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Natural Plants */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/Frame 36.png"
            alt=""
            width={400}
            height={500}
            className="w-full h-auto"
          />
          <div className="text-center py-4">
            <h3 className="font-medium">Natural Plants</h3>
          </div>
        </div>
        {/* Plant Accessories */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/Frame 40 (1).png"
            alt=""
            width={400}
            height={500}
            className="w-full h-auto"
          />
          <div className="text-center py-4">
            <h3 className="font-medium">Plant Accessories</h3>
            <p className="text-gray-500 text-sm px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
              Explore &rarr;
            </button>
          </div>
        </div>
        {/* Artificial Plants */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/Frame 37.png"
            alt=""
            width={400}
            height={500}
            className="w-full h-auto"
          />
          <div className="text-center py-4">
            <h3 className="font-medium">Artificial Plants</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;