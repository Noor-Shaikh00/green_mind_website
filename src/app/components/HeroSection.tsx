 {/* Hero Section */}
 const Hero = () =>{
    return(
 <section className="w-full max-w-6xl mx-auto text-center mt-10 flex">
 <h2 className="text-5xl font-bold text-black">
   Buy your <span className="text-[#0A604E]">dream plants</span>
 </h2>
 <div className="mt-6 flex justify-center">
   <div className="flex flex-col sm:flex-row items-center space-x-6 text-center">
     <div>
       <p className="text-3xl font-semibold">50+</p>
       <p className="text-gray-600">Plant Species</p>
     </div>
     <div>
       <p className="text-3xl font-semibold">100+</p>
       <p className="text-gray-600">Customers</p>
     </div>
   </div>
 </div>

 {/* Search Bar */}
 <div className="mt-10">
   <input
     type="text"
     placeholder="What are you looking for?"
     className="px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#0A604E] w-64"
   />
 </div>

 {/* Image Section */}
 <div className="mt-10 relative ">
   {/* <div className="absolute -left-10 top-0 w-32 h-32 bg-[#D7E9E3] rounded-full"></div>
   <div className="absolute -right-10 top-0 w-32 h-32 bg-[#D7E9E3] rounded-full"></div> */}
   <img
     src="/unsplash_cLaaxa4DSnc-removebg-preview 1.png"
     alt="Plant"
     className="w-64 h-64 mx-auto object-contain"
   />
 </div>

</section>

 )
}

export default Hero;