import React from 'react';
import '@/assets/home.css';

const Maintenance = () => {
  return (
    <div className="home-container">
      <div className="container" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
        <div className="content" style={{ paddingTop: '20vh' }}>
          <div className="tt-header" style={{ textAlign: 'center' }}>
            We'll be back soon!
          </div>
          <div className="tt-subtext" style={{ maxWidth: '600px', textAlign: 'center', marginTop: '20px' }}>
            Our site is currently under maintenance to improve your experience. 
            Thank you for your patience while we work on this.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
