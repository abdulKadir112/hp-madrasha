import { create } from 'zustand';
import axios from 'axios';

// আপনার ব্যাকএন্ড এপিআই ইউআরএল
const API_URL = "https://hp-madrasha-api.onrender.com/api";

const useMadrashaStore = create((set, get) => ({
  funds: [],
  loading: false,
  error: null,

  /**
   * ১. সকল ফান্ড ডাটাবেজ থেকে নিয়ে আসা
   */
  fetchFunds: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${API_URL}/funds`);
      set({ funds: response.data, loading: false, error: null });
    } catch (err) {
      console.error("Fetch Error:", err);
      set({ error: "ডাটা লোড করতে সমস্যা হয়েছে", loading: false });
    }
  },

  /**
   * ২. নতুন ফান্ড তৈরি করা (লোগোসহ)
   */
  addFund: async (name, logoUrl) => {
    if (!name || !name.trim()) {
      alert("ফান্ডের নাম খালি রাখা যাবে না!");
      return false;
    }

    try {
      const response = await axios.post(`${API_URL}/funds`, { 
        name: name, 
        logo: logoUrl, // লোগো URL পাঠানো হচ্ছে
        balance: 0 
      });

      set((state) => ({ 
        funds: [...state.funds, response.data] 
      }));
      
      alert("ফান্ড সফলভাবে তৈরি হয়েছে!");
      return true;
    } catch (err) {
      console.error("Add Fund Error:", err);
      alert("ফান্ড তৈরি করা সম্ভব হয়নি।");
      return false;
    }
  },

  /**
   * ৩. ফান্ড এডিট বা আপডেট করা
   */
  updateFund: async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/funds/${id}`, updatedData);
      
      set((state) => ({
        funds: state.funds.map((fund) => 
          fund._id === id ? response.data : fund
        )
      }));

      alert("ফান্ড আপডেট করা হয়েছে!");
      return true;
    } catch (err) {
      console.error("Update Error:", err);
      alert("আপডেট করা সম্ভব হয়নি।");
      return false;
    }
  },

  /**
   * ৪. ফান্ড ডিলিট করা
   */
  deleteFund: async (id) => {
    if (!window.confirm("আপনি কি নিশ্চিতভাবে এই ফান্ডটি ডিলিট করতে চান?")) return;

    try {
      await axios.delete(`${API_URL}/funds/${id}`);
      
      set((state) => ({
        funds: state.funds.filter((fund) => fund._id !== id)
      }));

      return true;
    } catch (err) {
      console.error("Delete Error:", err);
      alert("ডিলিট করা সম্ভব হয়নি।");
      return false;
    }
  },

  /**
   * ৫. সর্বমোট ব্যালেন্স ক্যালকুলেট করা
   */
  getTotalBalance: () => {
    const { funds } = get();
    return funds.reduce((acc, curr) => acc + (Number(curr.balance) || 0), 0);
  }
}));

export default useMadrashaStore;