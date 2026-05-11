import React from 'react';
import { Book, Users, Laptop, Award } from 'lucide-react'; // আইকন ব্যবহারের জন্য

const Features = () => {
  const madrashaFeatures = [
    {
      title: "অভিজ্ঞ শিক্ষক",
      desc: "দেশের খ্যাতনামা বিশ্ববিদ্যালয় ও জামিয়া থেকে উত্তীর্ণ দক্ষ শিক্ষক মন্ডলী।",
      icon: <Users className="w-10 h-10 text-green-600" />,
      bgColor: "bg-green-100"
    },
    {
      title: "হিফজ বিভাগ",
      desc: "তাজবিদ ভিত্তিক সহীহ উচ্চারণ এবং বিশেষ তদারকিতে কুরআন হিফজ করার সুব্যবস্থা।",
      icon: <Book className="w-10 h-10 text-blue-600" />,
      bgColor: "bg-blue-100"
    },
    {
      title: "ডিজিটাল ক্লাসরুম",
      desc: "আধুনিক প্রযুক্তির সমন্বয়ে প্রজেক্টর ও মাল্টিমিডিয়া ক্লাসের মাধ্যমে শিক্ষাদান।",
      icon: <Laptop className="w-10 h-10 text-purple-600" />,
      bgColor: "bg-purple-100"
    },
    {
      title: "সেরা ফলাফল",
      desc: "প্রতি বছর বোর্ড পরীক্ষায় আমাদের ছাত্ররা মেধার স্বাক্ষর রেখে চলেছে।",
      icon: <Award className="w-10 h-10 text-yellow-600" />,
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">আমাদের বৈশিষ্ট্যসমূহ</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {madrashaFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center group"
            >
              <div className={`${feature.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;