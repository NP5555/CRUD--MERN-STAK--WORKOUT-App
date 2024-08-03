import React from "react";
// import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="container" style={{margin:'20px'}}>
             <h1 style={{ textAlign: "start", color:'black'}}>Workout App
        <p style={{fontSize:'small', margin:'2px', color:'black' }}>
          “I hated every minute of training, but I said, ‘Don’t quit. Suffer now
          and live the rest of your life as a champion.” – Muhammad Ali
        </p>
        </h1>
{/* 
      <Link to="/" >
       
       
      </Link> */}
    </div>
  );
};
export default Navbar;
