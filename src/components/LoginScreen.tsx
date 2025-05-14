import React from 'react';
import { useWeb3 } from '../context/Web3Context';
import ConnectButton from './ConnectButton';
import { Wallet, Shield, Zap, AlertCircle } from 'lucide-react';

const LoginScreen: React.FC = () => {
  const { error } = useWeb3();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="text-center mb-8">
        <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
          <Wallet size={32} className="text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Connect Your Wallet</h1>
        <p className="text-gray-600">
          Connect with MetaMask to access Web3 features
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start">
          <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className="mb-8">
        <ConnectButton />
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <Shield size={16} className="text-green-600" />
          </div>
          <div>
            <h3 className="font-medium">Secure Connection</h3>
            <p className="text-sm text-gray-600">
              Your private keys never leave your device
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-amber-100 p-2 rounded-full mr-3">
            <Zap size={16} className="text-amber-600" />
          </div>
          <div>
            <h3 className="font-medium">Fast Authentication</h3>
            <p className="text-sm text-gray-600">
              No passwords needed, just approve the connection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
