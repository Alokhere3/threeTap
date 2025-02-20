//From this page we will move to our index.html page

import React, { useEffect } from "react";

const DashboardPage = () => {
  useEffect(() => {
    window.location.href = "../startpage/index.html";
  }, []);

  return null; 
};

export default DashboardPage;