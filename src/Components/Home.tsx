// Home.tsx
import React from 'react';
import Navbar from './Navbar';
import MainComponent from './MainComponent';

import Add from './Add';
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-1 items-center justify-center p-4">
        <MainComponent />
      </main>
    </div>
  );
}

export default Home;
