import React, { useState, useEffect } from 'react';
import { PlusCircle, ArrowLeft, X, Edit2, Trash2, Image as ImageIcon } from 'lucide-react';
import useMadrashaStore from '../../lib/store';

const MadrashaFundDashboard = ({ onBack }) => {
  const { funds, fetchFunds, addFund, deleteFund, updateFund } = useMadrashaStore();
  
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(null); // id of fund being edited
  const [formData, setFormData] = useState({ name: '', logo: '' });

  useEffect(() => { fetchFunds(); }, []);

  const openModal = (fund = null) => {
    if (fund) {
      setIsEditing(fund._id);
      setFormData({ name: fund.name, logo: fund.logo || '' });
    } else {
      setIsEditing(null);
      setFormData({ name: '', logo: '' });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let success;
    if (isEditing) {
      success = await updateFund(isEditing, formData);
    } else {
      success = await addFund(formData.name, formData.logo); // আপনার addFund এ লোগো সাপোর্ট থাকতে হবে
    }

    if (success) {
      setShowModal(false);
      setFormData({ name: '', logo: '' });
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 font-bold hover:text-green-700">
          <ArrowLeft size={20} /> ফিরে যান
        </button>
        <button 
          onClick={() => openModal()}
          className="bg-green-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-green-800"
        >
          <PlusCircle size={20} /> নতুন ফান্ড
        </button>
      </div>

      {/* Funds Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-6 font-bold text-gray-600">লোগো</th>
              <th className="p-6 font-bold text-gray-600">ফান্ডের নাম</th>
              <th className="p-6 font-bold text-gray-600">ব্যালেন্স</th>
              <th className="p-6 font-bold text-gray-600 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {funds.map((fund) => (
              <tr key={fund._id} className="hover:bg-gray-50 transition">
                <td className="p-6">
                  {fund.logo ? (
                    <img src={fund.logo} alt="" className="w-10 h-10 rounded-lg object-cover border" />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"><ImageIcon size={20} className="text-gray-400"/></div>
                  )}
                </td>
                <td className="p-6 font-bold text-gray-800">{fund.name}</td>
                <td className="p-6 text-green-700 font-bold">৳{fund.balance}</td>
                <td className="p-6 text-right space-x-3">
                  <button onClick={() => openModal(fund)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit2 size={18}/></button>
                  <button onClick={() => deleteFund(fund._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal (Add/Edit) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">{isEditing ? 'ফান্ড এডিট করুন' : 'নতুন ফান্ড তৈরি'}</h3>
              <button onClick={() => setShowModal(false)}><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">ফান্ডের নাম</label>
                <input 
                  type="text" 
                  className="w-full p-4 rounded-xl border outline-none focus:border-green-500"
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">লোগো URL (লিঙ্ক)</label>
                <input 
                  type="text" 
                  placeholder="https://image.com/logo.png"
                  className="w-full p-4 rounded-xl border outline-none focus:border-green-500"
                  value={formData.logo} 
                  onChange={(e) => setFormData({...formData, logo: e.target.value})} 
                />
              </div>
              <button type="submit" className="w-full py-4 bg-green-700 text-white rounded-xl font-bold hover:bg-green-800">
                {isEditing ? 'আপডেট করুন' : 'সেভ করুন'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MadrashaFundDashboard;