import React, { useState, useEffect } from 'react';
import { useWeb3 } from '../context/Web3Context';
import { ethers } from 'ethers';
import { User, Copy, CheckCircle } from 'lucide-react';

const UserProfile: React.FC = () => {
  const { account, isConnected } = useWeb3();
  const [balance, setBalance] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const getBalance = async () => {
      if (isConnected && account && window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const balanceWei = await provider.getBalance(account);
          const balanceEth = ethers.utils.formatEther(balanceWei);
          setBalance(parseFloat(balanceEth).toFixed(4));
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      } else {
        setBalance(null);
      }
    };

    getBalance();
  }, [account, isConnected]);

  const copyToClipboard = () => {
    if (account) {
      navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isConnected || !account) {
    return null;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <User size={32} className="text-blue-600" />
        </div>
      </div>
      
      <h2 className="text-xl font-semibold text-center mb-4">Wallet Profile</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-500 block mb-1">Address</label>
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
            <span className="text-sm font-mono">
              {account.substring(0, 10)}...{account.substring(account.length - 8)}
            </span>
            <button 
              onClick={copyToClipboard}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {copied ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
          </div>
        </div>
        
        <div>
          <label className="text-sm text-gray-500 block mb-1">Balance</label>
          <div className="bg-gray-50 p-2 rounded">
            {balance ? (
              <div className="flex items-center justify-between">
                <span className="font-medium">{balance} ETH</span>
                <span className="text-xs text-gray-500">≈ ${(parseFloat(balance) * 3500).toFixed(2)}</span>
              </div>
            ) : (
              <div className="animate-pulse h-5 bg-gray-200 rounded w-24"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
