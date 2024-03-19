import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";
import SideBar from "./Components/SideBar";
import AppProvider from "./AppProvider";
import AddProduct from "./Pages/AddProduct";

import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ClientPage from "./Pages/ClientPage";
import SalesPage from "./Pages/SalesPage";
import CompanyPage from "./Pages/CompanyPage";
import ProductInfo from "./Pages/ProductInfo";
function Base() {
  
  return (
    <AppProvider>
      <div className=" gap-2">
        
        <Routes>
          <Route path="" element={<LogInPage />} />
          <Route path="/addProduct" element={<div className="flex" ><SideBar/> <AddProduct /></div>} />
          <Route path="/home" element={<div className="flex"><SideBar/> <HomePage /></div>} />
          <Route path="/product" element={<div className="flex"><SideBar/><ProductPage /></div>} />
          <Route path="/client" element={<div className="flex"><SideBar/> <ClientPage/></div>} />
          <Route path="/sales" element={<div className="flex"><SideBar/> <SalesPage /></div>} />
          <Route path="/company" element={<div className="flex"><SideBar/><CompanyPage /></div>} />
          <Route path="/ProductInfo" element={<div className="flex"><SideBar/><ProductInfo /></div>} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default Base;
