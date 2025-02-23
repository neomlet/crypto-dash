import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import useCoinStore from '../stores/coinStore';
import type { Coin } from '../types/coin';
import { fetchCoins } from '../utils/api';

const CoinTable = () => {
  const { coins, setCoins } = useCoinStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCoins();
      setCoins(data);
    };
    
    loadData();
    const interval = setInterval(loadData, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins.filter(coin => {
    const searchMatch = coin.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       coin.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    
    switch(filter) {
      case 'gainers': return searchMatch && coin.price_change_percentage_24h > 0;
      case 'losers': return searchMatch && coin.price_change_percentage_24h < 0;
      default: return searchMatch;
    }
  });

  return (
    <div className="container">
      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by name or symbol..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Coins</option>
          <option value="gainers">Gainers (24h)</option>
          <option value="losers">Losers (24h)</option>
        </select>
      </div>

      {/* Chart */}
      <LineChart width={800} height={400} data={filteredCoins}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="symbol" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="current_price" stroke="#8884d8" />
      </LineChart>

      {/* Table */}
      <table className="coin-table">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <tr key={coin.id}>
              <td>
                <img src={coin.image} alt={coin.name} width="24" />
                {coin.name}
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td style={{ color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;