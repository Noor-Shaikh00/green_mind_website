export default function AboutUs() {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About us</h2>
          <p className="text-gray-700 mb-8">Order now and appreciate the beauty of nature</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🌿</div>
              <h3 className="text-lg font-bold mb-2">Large Assortment</h3>
              <p className="text-gray-600">We offer many different types of products with fewer variations in each category.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="text-lg font-bold mb-2">Fast & Free Shipping</h3>
              <p className="text-gray-600">4-day or less delivery time, free shipping, and an expedited delivery option.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">☎️</div>
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Answers to any business-related inquiry 24/7 and in real-time.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }