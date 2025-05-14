import React from 'react';
import UserProfile from './UserProfile';
import { useWeb3 } from '../context/Web3Context';
import { ArrowRight, Database, Activity, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { account } = useWeb3();
  
  if (!account) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <UserProfile />
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Activity size={20} className="mr-2 text-blue-600" />
              Recent Activity
            </h2>
            
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Transaction {i + 1}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Database size={20} className="mr-2 text-blue-600" />
                Data Storage
              </h3>
              <p className="text-gray-600 mb-4">
                Store data securely on the blockchain
              </p>
              <button className="text-blue-600 font-medium flex items-center">
                Explore <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Settings size={20} className="mr-2 text-blue-600" />
                Settings
              </h3>
              <p className="text-gray-600 mb-4">
                Configure your account preferences
              </p>
              <button className="text-blue-600 font-medium flex items-center">
                Manage <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
