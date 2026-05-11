import React from 'react';

const TeacherSection = () => {
  const teachers = [
    { name: "মাওলানা আব্দুল্লাহ", role: "প্রধান শিক্ষক", image: "https://via.placeholder.com/150" },
    { name: "মাওলানা ওবায়দুল্লাহ", role: "সিনিয়র শিক্ষক (হিফজ)", image: "https://via.placeholder.com/150" },
    { name: "হাফেজ মোহাম্মদ আলী", role: "সহকারী শিক্ষক", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">আমাদের শিক্ষকবৃন্দ</h2>
        <p className="text-gray-600 mb-12">দক্ষ ও অভিজ্ঞ আলেমদের তত্ত্বাবধানে আপনার সন্তানের ভবিষ্যৎ</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
              />
              <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
              <p className="text-green-700 font-medium">{teacher.role}</p>
              <button className="mt-4 px-4 py-2 text-sm border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
                প্রোফাইল দেখুন
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;