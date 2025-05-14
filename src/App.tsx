import React from 'react';
import { Web3Provider } from './context/Web3Context';
import { useWeb3 } from './context/Web3Context';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';

const AppContent: React.FC = () => {
  const { isConnected } = useWeb3();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isConnected ? (
            <Dashboard />
          ) : (
            <div className="flex justify-center items-center py-12">
              <LoginScreen />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <Web3Provider>
      <AppContent />
    </Web3Provider>
  );
}

export default App;
