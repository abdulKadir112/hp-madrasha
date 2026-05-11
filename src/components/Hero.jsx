import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center">
        
        {/* Left Content: Text */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 leading-tight">
            আপনার সন্তানের <br />
            <span className="text-yellow-600">উজ্জ্বল ভবিষ্যৎ</span> <br />
            গড়তে আমরা প্রতিজ্ঞাবদ্ধ
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            আধুনিক শিক্ষার পাশাপাশি কুরআন ও সুন্নাহর সঠিক জ্ঞান অর্জনের মাধ্যমে 
            একটি আদর্শ সমাজ গঠনই আমাদের লক্ষ্য।
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/admission" 
              className="px-8 py-4 bg-green-700 text-white rounded-lg font-bold text-lg hover:bg-green-800 shadow-lg transition duration-300"
            >
              ভর্তি ফরম পূরণ করুন
            </Link>
            <Link 
              to="/notice" 
              className="px-8 py-4 border-2 border-green-700 text-green-700 rounded-lg font-bold text-lg hover:bg-green-50 transition duration-300 text-center"
            >
              আজকের নোটিশ
            </Link>
          </div>
        </div>

        {/* Right Content: Image Placeholder */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-full max-w-md h-64 md:h-96 bg-green-100 rounded-2xl flex items-center justify-center relative border-4 border-green-700/10 overflow-hidden shadow-2xl">
            {/* এখানে মাদরাসার ছবি থাকলে সেটি বসবে */}
            <div className="text-center p-4">
              <svg className="w-20 h-20 text-green-700 mx-auto opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5c1.38 0 2.5 1.12 2.5 2.5S13.38 12.5 12 12.5 9.5 11.38 9.5 10s1.12-2.5 2.5-2.5z" />
              </svg>
              <p className="text-green-700 font-medium mt-2">মাদরাসা ভবনের ছবি</p>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-yellow-500 text-green-900 px-4 py-2 rounded-full font-bold text-sm shadow-md animate-bounce">
              ভর্তি চলছে ২০২৬!
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;