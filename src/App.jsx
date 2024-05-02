import React, { useContext } from 'react'
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
import { AddAdmin } from "./Pages/SuperAdmin";
import { adminLogInfo } from "./Components/Data";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";
import SideBar from "./Components/SideBar";
import { AppContext } from './AppProvider';
import { role } from './Components/Data';
import Error from './Components/Error';


function App() {
  const adminRole = localStorage.getItem("role")
  
  return (
    <Routes>
        <Route path="" element={<LogInPage />} />
        <Route path="/addProduct" element={adminRole == 0 || adminRole == 1 ? <div className="flex" ><SideBar/> <AddProduct /></div> : <Error/>} />
        <Route path="/home" element={ <div className="flex"> <SideBar/> <AjouterCodePromo/> <HomePage /></div>} />
        <Route path="/product" element={adminRole == 0 || adminRole == 1 || adminRole == 2 ? <div className="flex"><SideBar/>  <ProductPage /></div> : <Error/> } />
        <Route path="/stock" element={adminRole == 0 || adminRole == 2 ? <div className="flex"><SideBar/> <UpdateStock/> <StockPage /></div> : <Error/> } />
        <Route path="/client" element={adminRole == 0 || adminRole == 2 || adminRole == 3 ? <div className="flex"><SideBar/> <ClientPage/></div> : <Error/> } />
        
          <Route path="/order" element={adminRole == 0 || adminRole == 2  ? <div className="flex"><SideBar/> <OrderPage/></div> : <Error/> } />
        
        <Route path="/sales" element={adminRole == 0 || adminRole == 2 || adminRole == 3 ? <div className="flex"><SideBar/> <SalesPage /></div> : <Error/> } />
        <Route path="/company" element={adminRole == 0 || adminRole == 2 ? <div className="flex"><SideBar/><CompanyPage /></div> : <Error/> } />
        <Route path="/ProductInfo" element={adminRole == 0 || adminRole == 1 ? <div className="flex"><SideBar/><ProductInfo /></div> : <Error/> } />
        <Route path="/modifieProduct" element={adminRole == 0 || adminRole == 1 ? <div className="flex"><SideBar/><ProductModifie /></div> :  <Error/>} />
        <Route path="/superAdmin" element={adminRole == 0 ? <div className="flex"><SideBar/> <AddAdmin/> <SuperAdmin /></div> : <Error/> } />
        

    </Routes>
  )
}

export default App