import React from 'react';
import { IZLogo } from './icons';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-4">
          <IZLogo className="h-10 w-10" />
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Instituto Zanatta</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;