import { MetaMaskProvider } from '@metamask/sdk-react';
import CoinTable from './components/CoinTable';
import './styles.css';

const App = () => {
  return (
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "Crypto Dashboard",
          url: window.location.host,
        }
      }}
    >
      <div className="app">
        <h1>📊 Crypto Dashboard</h1>
        <CoinTable />
      </div>
    </MetaMaskProvider>
  );
};

export default App;