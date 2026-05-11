import React from 'react';
import { User, Users, Calendar, BookOpen, Phone, MapPin, Send, Map, Home } from 'lucide-react';

const Admission = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-900 mb-3">অনলাইন ভর্তি ফরম</h2>
          <p className="text-gray-600 text-lg">আপনার সন্তানের সুন্দর ও দ্বীনি ভবিষ্যতের জন্য সঠিক তথ্য দিয়ে ফরমটি পূরণ করুন</p>
          <div className="w-24 h-1.5 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
          {/* Form Header Badge */}
          <div className="bg-green-700 p-10 text-white flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-1">শিক্ষার্থীর তথ্য সংগ্রহ</h3>
              <p className="opacity-80 text-sm">ভর্তি সেশন: ২০২৬-২০২৭</p>
            </div>
            <div className="hidden sm:block bg-white/20 p-4 rounded-2xl">
              <BookOpen size={40} />
            </div>
          </div>
          
          <form className="p-8 md:p-12 space-y-12" onSubmit={(e) => e.preventDefault()}>
            
            {/* ১. ব্যক্তিগত তথ্য সেকশন */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <User className="text-green-700" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">১. ব্যক্তিগত তথ্য</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">শিক্ষার্থীর পূর্ণ নাম</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all" placeholder="যেমন: আব্দুল কাদির" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">পিতার নাম</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all" placeholder="পিতার পূর্ণ নাম" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">জন্ম তারিখ</label>
                  <input type="date" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">ভর্তির বিভাগ</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all cursor-pointer">
                    <option>বিভাগ নির্বাচন করুন</option>
                    <option>নূরানী ও নাজেরা</option>
                    <option>হিফজুল কুরআন</option>
                    <option>কিতাব বিভাগ</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ২. ঠিকানা সেকশন (আলাদা আলাদা ইনপুট) */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MapPin className="text-green-700" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">২. বর্তমান ঠিকানা</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">গ্রাম/মহল্লা</label>
                  <div className="relative">
                    <input type="text" className="w-full pl-5 pr-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 outline-none transition-all" placeholder="যেমন: হেমায়েতপুর" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">ইউনিয়ন</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 outline-none transition-all" placeholder="যেমন: নতিপোতা " />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">থানা</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 outline-none transition-all" placeholder="যেমন: দামুড়হুদা" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">জেলা</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 outline-none transition-all" placeholder="যেমন: চুয়াডাঙ্গা" />
                </div>
              </div>
            </div>

            {/* ৩. যোগাযোগ সেকশন */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone className="text-green-700" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">৩. যোগাযোগ</h4>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 text-center block md:text-left">অভিভাবকের মোবাইল নম্বর</label>
                <div className="relative max-w-md mx-auto md:mx-0">
                  <span className="absolute left-5 top-4 text-gray-400 font-bold border-r pr-3 border-gray-300">+৮৮</span>
                  <input type="tel" className="w-full pl-20 pr-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all font-mono" placeholder="০১XXXXXXXXX" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button 
                type="submit" 
                className="w-full bg-green-700 text-white font-bold py-5 rounded-2xl hover:bg-green-800 hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-xl"
              >
                ভর্তির আবেদন জমা দিন <Send size={24} />
              </button>
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Map size={14} />
                <p>আপনার সকল তথ্য আমাদের ডাটাবেজে সুরক্ষিত থাকবে।</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admission;