import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";
import SideBar from "./Components/SideBar";
import AppProvider, { AppContext } from "./AppProvider";
import AddProduct from "./Pages/AddProduct";

import HomePage, { AjouterCodePromo } from "./Pages/HomePage";
import ProductPage, { UpdateStock } from "./Pages/ProductPage";
import ClientPage from "./Pages/ClientPage";
import SalesPage from "./Pages/SalesPage";
import CompanyPage from "./Pages/CompanyPage";
import ProductInfo from "./Pages/ProductInfo";
import ProductModifie from "./Pages/ProductModifie";
import StockPage from "./Pages/StockPage";
import OrderPage from "./Pages/OrderPage";
import SuperAdmin from "./Pages/SuperAdmin";
function Base() {
  
  return (
    <AppProvider>
      <div className=" gap-2">
        
        <Routes>
          <Route path="" element={<LogInPage />} />
          <Route path="/addProduct" element={<div className="flex" ><SideBar/> <AddProduct /></div>} />
          <Route path="/home" element={<div className="flex"> <SideBar/> <AjouterCodePromo/> <HomePage /></div>} />
          <Route path="/product" element={<div className="flex"><SideBar/>  <ProductPage /></div>} />
          <Route path="/stock" element={<div className="flex"><SideBar/> <UpdateStock/> <StockPage /></div>} />
          <Route path="/client" element={<div className="flex"><SideBar/> <ClientPage/></div>} />
          <Route path="/order" element={<div className="flex"><SideBar/> <OrderPage/></div>} />
          <Route path="/sales" element={<div className="flex"><SideBar/> <SalesPage /></div>} />
          <Route path="/company" element={<div className="flex"><SideBar/><CompanyPage /></div>} />
          <Route path="/ProductInfo" element={<div className="flex"><SideBar/><ProductInfo /></div>} />
          <Route path="/modifieProduct" element={<div className="flex"><SideBar/><ProductModifie /></div>} />
          <Route path="/superAdmin" element={<div className="flex"><SideBar/><SuperAdmin /></div>} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default Base;
