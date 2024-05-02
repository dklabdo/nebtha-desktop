import React, { useContext } from "react";

import AppProvider, { AppContext } from "./AppProvider";
import App from "./App";







function Base() {
  
  return (
    
      <AppProvider>
      <div className=" gap-2">
        <App/>
        
      </div>
    </AppProvider>

   
    
  );
}

export default Base;
