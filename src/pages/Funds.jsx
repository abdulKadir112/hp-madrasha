import React, { useState } from 'react';
import MadrashaFund from '../components/MadrashaFund';
import MadrashaFundDashboard from '../components/MadrashaFundDashboard';
import useMadrashaStore from '../lib/store';

const Funds = () => {
  const [isAdminView, setIsAdminView] = useState(false);
  const { addFund } = useMadrashaStore(); // স্টোর থেকে ফাংশনটি নেওয়া হলো

  return (
    <div className="py-10">
      {isAdminView ? (
        <MadrashaFundDashboard 
          onBack={() => setIsAdminView(false)} 
          onCreateFund={addFund} // এখানে 'addFund' ফাংশনটি পাস করা হচ্ছে
        />
      ) : (
        <MadrashaFund 
          onAdminClick={() => setIsAdminView(true)} 
          onSelectFund={(fund) => console.log("Selected Fund:", fund)} 
        />
      )}
    </div>
  );
};

export default Funds;