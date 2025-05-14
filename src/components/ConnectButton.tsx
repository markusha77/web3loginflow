import React from 'react';
import { useWeb3 } from '../context/Web3Context';
import { Wallet, LogOut, Loader } from 'lucide-react';

const ConnectButton: React.FC = () => {
  const { account, isConnected, isConnecting, connectWallet, disconnectWallet } = useWeb3();

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center space-x-2">
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Connected
          </span>
          <button
            className="flex items-center space-x-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 transition-colors"
            onClick={disconnectWallet}
          >
            <span>{formatAddress(account!)}</span>
            <LogOut size={16} />
          </button>
        </div>
      ) : (
        <button
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors"
          onClick={connectWallet}
          disabled={isConnecting}
        >
          {isConnecting ? (
            <>
              <Loader size={16} className="animate-spin" />
              <span>Connecting...</span>
            </>
          ) : (
            <>
              <Wallet size={16} />
              <span>Connect Wallet</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
