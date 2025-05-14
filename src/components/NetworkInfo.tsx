import React from 'react';
import { useWeb3 } from '../context/Web3Context';
import { AlertCircle } from 'lucide-react';

const NetworkInfo: React.FC = () => {
  const { chainId, isConnected } = useWeb3();

  if (!isConnected || !chainId) return null;

  const getNetworkName = (id: number): string => {
    switch (id) {
      case 1:
        return 'Ethereum Mainnet';
      case 5:
        return 'Goerli Testnet';
      case 11155111:
        return 'Sepolia Testnet';
      case 137:
        return 'Polygon Mainnet';
      case 80001:
        return 'Mumbai Testnet';
      case 56:
        return 'Binance Smart Chain';
      case 97:
        return 'BSC Testnet';
      case 42161:
        return 'Arbitrum One';
      case 421613:
        return 'Arbitrum Goerli';
      case 10:
        return 'Optimism';
      case 420:
        return 'Optimism Goerli';
      default:
        return `Unknown Network (${id})`;
    }
  };

  const isMainnet = chainId === 1;
  const networkName = getNetworkName(chainId);

  return (
    <div className={`flex items-center space-x-2 ${isMainnet ? 'text-green-600' : 'text-amber-600'}`}>
      <div className={`w-2 h-2 rounded-full ${isMainnet ? 'bg-green-600' : 'bg-amber-600'}`}></div>
      <span className="text-sm font-medium">{networkName}</span>
      {!isMainnet && (
        <div className="flex items-center" title="This is a test network">
          <AlertCircle size={14} />
        </div>
      )}
    </div>
  );
};

export default NetworkInfo;
