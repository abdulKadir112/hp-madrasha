import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* মাদরাসা সম্পর্কে */}
        <div>
          <h3 className="text-2xl font-bold mb-6 italic">আমাদের গ্রাম মাদরাসা</h3>
          <p className="text-green-100 leading-relaxed">
            একটি আদর্শ দ্বীনি শিক্ষা প্রতিষ্ঠান। আমরা আধুনিক এবং ইসলামী শিক্ষার সমন্বয়ে 
            একটি সুন্দর প্রজন্ম গড়তে কাজ করে যাচ্ছি।
          </p>
        </div>

        {/* কুইক লিঙ্ক */}
        <div>
          <h3 className="text-xl font-bold mb-6">গুরুত্বপূর্ণ লিঙ্ক</h3>
          <ul className="space-y-3 text-green-100">
            <li><a href="/" className="hover:text-yellow-500 transition">হোম</a></li>
            <li><a href="/notice" className="hover:text-yellow-500 transition">নোটিশ বোর্ড</a></li>
            <li><a href="/admission" className="hover:text-yellow-500 transition">ভর্তি তথ্য</a></li>
            <li><a href="/teachers" className="hover:text-yellow-500 transition">শিক্ষক তালিকা</a></li>
          </ul>
        </div>

        {/* যোগাযোগ */}
        <div>
          <h3 className="text-xl font-bold mb-6">যোগাযোগ</h3>
          <ul className="space-y-4 text-green-100">
            <li className="flex items-center gap-3"><MapPin size={20} /> চুয়াডাঙ্গা, বাংলাদেশ</li>
            <li className="flex items-center gap-3"><Phone size={20} /> +৮৮০ ১২৩৪ ৫৬৭ ৮৯০</li>
            <li className="flex items-center gap-3"><Mail size={20} /> info@madrasha.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-200">
        <p>© ২০২৬ আমাদের গ্রাম মাদরাসা। সকল অধিকার সংরক্ষিত।</p>
      </div>
    </footer>
  );
};

export default Footer;