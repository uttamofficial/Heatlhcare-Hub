import React from 'react';
import { Heart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-blue-500 p-2.5 rounded-xl">
        <Heart className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold text-white">Health Bridge</span>
    </div>
  );
};

export default Logo;