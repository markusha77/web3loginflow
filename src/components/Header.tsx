import React from 'react';
import { useWeb3 } from '../context/Web3Context';
import ConnectButton from './ConnectButton';
import NetworkInfo from './NetworkInfo';
import { Layers } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Layers className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Web3 App</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <NetworkInfo />
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
