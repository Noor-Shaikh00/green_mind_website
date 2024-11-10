import Image from 'next/image';

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="space-y-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center">What customers say about GREENMIND?</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Review */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4">
            <p className="text-gray-600">
              Jorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src="/Group 9.png" alt="" layout="fill" objectFit="cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 font-bold">John Doe</h3>
                <p className="text-sm text-gray-500">Youtuber</p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-gray-600 ml-1">4.5</span>
              </div>
            </div>
          </div>
          
          {/* Second Review */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4">
            <p className="text-gray-600">
              Jorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src="/Group 10.png" alt="" layout="fill" objectFit="cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 font-bold">John Doe</h3>
                <p className="text-sm text-gray-500">Youtuber</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}