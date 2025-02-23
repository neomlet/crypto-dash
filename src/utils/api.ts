import axios from 'axios';

const API_BASE = import.meta.env.VITE_COINGECKO_API;

export const fetchCoins = async () => {
  try {
    const response = await axios.get(
      `${API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100`
    );
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};