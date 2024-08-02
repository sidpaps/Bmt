import React, { useState, useEffect } from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Preloader from "./components/Preloader";



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    window.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 4000); 
    };
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-blur">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
            <Services />
            <Transactions />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;