//From this page we will move to our index.html page

import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.location.href = "../aim/aim-index.html";
  }, []);
  return null; 
};

export default HomePage;