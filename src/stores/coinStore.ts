import { create } from 'zustand';
import type { Coin } from '../types/coin';

interface CoinStore {
  coins: Coin[];
  setCoins: (coins: Coin[]) => void;
}

export const useCoinStore = create<CoinStore>((set) => ({
  coins: [],
  setCoins: (coins) => set({ coins }),
}));