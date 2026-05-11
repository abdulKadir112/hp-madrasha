import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admission from './pages/Admission'; 
import Footer from './components/Footer';

// ফাইলের নাম অনুযায়ী এখানে বড় হাতের 'Funds' ব্যবহার করা হয়েছে
import Funds from './pages/Funds'; 

// আপনার ফোল্ডার পাথ অনুযায়ী এটি চেক করে নিন
import MadrashaFundDashboard from './components/funds/MadrashaFundDashboard';
import useMadrashaStore from './lib/store';

function App() {
  const navigate = useNavigate();
  const { addFund, deleteFund, updateFund } = useMadrashaStore(); 

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* ফান্ডের মেইন রাউট */}
          <Route path="/funds" element={<Funds />} />
          
          {/* ড্যাশবোর্ড রাউট */}
          <Route 
            path="/funds/admin" 
            element={
              <MadrashaFundDashboard 
                onBack={() => navigate('/funds')} 
                onCreateFund={addFund}
                onDeleteFund={deleteFund}
                onUpdateFund={updateFund}
              />
            } 
          />

          <Route path="/notice" element={
            <div className="container mx-auto p-10 text-center">
              <h1 className="text-3xl font-bold text-green-800">নোটিশ বোর্ড</h1>
              <p className="mt-4 text-gray-600 font-medium">এখানে মাদরাসার সকল নোটিশ পাওয়া যাবে।</p>
            </div>
          } />
          
          <Route path="/teachers" element={
            <div className="container mx-auto p-10 text-center">
              <h1 className="text-3xl font-bold text-green-800">আমাদের শিক্ষকবৃন্দ</h1>
              <p className="mt-4 text-gray-600 font-medium">দক্ষ ও অভিজ্ঞ শিক্ষক মন্ডলীর তালিকা আসছে...</p>
            </div>
          } />
          
          <Route path="/admission" element={<Admission />} />

          <Route path="/login" element={
            <div className="container mx-auto p-10 text-center">
              <h1 className="text-3xl font-bold text-green-800">লগইন পেজ</h1>
              <p className="mt-4 text-gray-600 font-medium">শিক্ষক ও এডমিনদের জন্য পোর্টাল।</p>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;