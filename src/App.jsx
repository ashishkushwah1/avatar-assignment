import React, { useState, useEffect } from 'react';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
// import Feed from './Components/Feed';
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Feed />  */}
      <Carousel/>
    </>
  );
};

export default App;