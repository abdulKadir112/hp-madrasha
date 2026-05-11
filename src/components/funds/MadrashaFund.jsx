import React, { useEffect } from 'react';
import { Wallet, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // এটি ইমপোর্ট করুন
import useMadrashaStore from '../../lib/store'; 

const MadrashaFund = ({ onSelectFund }) => {
  const navigate = useNavigate(); // নেভিগেশন ইনিশিয়ালাইজ করুন
  const { funds, loading, fetchFunds, getTotalBalance } = useMadrashaStore();

  useEffect(() => {
    fetchFunds();
  }, [fetchFunds]);

  if (loading) return <div className="text-center py-20 font-bold">লোড হচ্ছে...</div>;

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* মোট ব্যালেন্স কার্ড */}
      <div className="mb-12 bg-green-700 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <p className="text-green-100 text-lg mb-2 opacity-80">সর্বমোট কমন ব্যালেন্স</p>
              <h1 className="text-5xl md:text-6xl font-black italic">
                ৳ {getTotalBalance().toLocaleString()}
              </h1>
            </div>
            
            {/* বাটনটি এখন সরাসরি রাউট পরিবর্তন করবে */}
            <button 
              onClick={() => navigate('/funds/admin')} // আপনার ড্যাশবোর্ড রাউটের পাথ দিন
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-2xl backdrop-blur-md transition font-bold border border-white/30"
            >
              Admin Dashboard
            </button>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-green-600 rounded-full opacity-30 blur-3xl"></div>
      </div>

      {/* ফান্ড গ্রিড (বাকি অংশ আগের মতোই থাকবে) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funds.map((fund) => (
          <div 
            key={fund._id}
            onClick={() => onSelectFund && onSelectFund(fund)}
            className="cursor-pointer group p-6 rounded-3xl bg-white border-b-4 border-green-500 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-2xl bg-green-50">
                <Wallet className="text-green-600" />
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-gray-600 transition-colors" size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{fund.name}</h3>
            <p className="text-sm text-gray-500 mb-4">ফান্ড ব্যালেন্স</p>
            <div className="text-2xl font-black text-gray-900">
              ৳ {(fund.balance || 0).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MadrashaFund;