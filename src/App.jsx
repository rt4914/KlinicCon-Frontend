import React from 'react';
import './index.css';
const App = () => {
  return (
    <div className="bg-orange-light text-brown p-4">
      <h1 className="text-orange text-2xl font-bold">Welcome to Our Website</h1>
      <button className="bg-green text-white hover:bg-orange-dark p-2 rounded mt-4">
        Get Started
      </button>
      <p className="mt-2">
        This is a sample component using the custom color palette.
      </p>
    </div>
  );
};

export default App;
