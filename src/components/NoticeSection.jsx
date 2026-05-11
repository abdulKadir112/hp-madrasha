import React from 'react';
import { BellRing, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NoticeSection = () => {
  const notices = [
    { id: 1, date: "১০ মে, ২০২৬", title: "বার্ষিক পরীক্ষার সময়সূচী প্রকাশ প্রসঙ্গে" },
    { id: 2, date: "০৮ মে, ২০২৬", title: "আগামী শুক্রবার মাদরাসা বন্ধ থাকবে" },
    { id: 3, date: "০৫ মে, ২০২৬", title: "নতুন সেশনে হিফজ বিভাগে ভর্তি চলছে" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Side: Text Content */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-green-900 mb-4">জরুরি নোটিশ বোর্ড</h2>
            <p className="text-gray-600 mb-6">
              মাদরাসার সকল আপডেট এবং গুরুত্বপূর্ণ ঘোষণাগুলো এখান থেকে জানতে পারবেন।
            </p>
            <Link to="/notice" className="inline-flex items-center text-green-700 font-bold hover:underline">
              সকল নোটিশ দেখুন <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Right Side: Notice List */}
          <div className="md:w-2/3 space-y-4">
            {notices.map((notice) => (
              <div key={notice.id} className="flex items-start gap-4 p-5 bg-green-50 rounded-xl border-l-4 border-green-600 hover:bg-green-100 transition">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <BellRing className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-medium">{notice.date}</span>
                  <h3 className="text-lg font-bold text-gray-800">{notice.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeSection;