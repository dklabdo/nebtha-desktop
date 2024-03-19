import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppProvider";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import menu from "../assets/image/icon/ellypsis.svg";
import icon1 from "../assets/image/icon/info.svg";
import icon2 from "../assets/image/icon/transport.svg";
import icon3 from "../assets/image/icon/bin.svg";
import { ProductData } from "../Components/Data";
import NavBar from "../Components/NavBar";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function ProductPage() {

  return (
    <>
      {
        <div className="overflow-y-auto h-screen w-full">
          <NavBar/>
          <div className="pt-10 gap-4 w-full flex flex-col px-10">
            {ProductData.map((pr, index) => {
              return <ProductCardList key={index} product={pr} />;
            })}
          </div>
          
        </div>
      }
    </>
  );
}

function ProductCardList({ product }) {
  const [info, setinfo] = useState(false);
  const navigate = useNavigate();
  const {setCurrentProductInfoDisplay} = useContext(AppContext)
  function HandleProductInfo(){
    setCurrentProductInfoDisplay(product);
    navigate('/ProductInfo')

  }
  return (
    <div className="relative rounded-3xl transition border-2 border-main flex flex-col">
      
      {!info && (
        <div className="w-full px-6  flex items-center justify-between ">
          <div className="w-[35%] px-2 text-nowrap  overflow-hidden">
            <h1>{product.ProductName}</h1>
          </div>
          <div className="w-[35%] text-nowrap px-2 overflow-hidden ">
            {product.id}{" "}
          </div>
          <div className="w-[22%] px-2 text-nowrap overflow-hidden ">
            {" "}
            {product.Price + " DA"}{" "}
          </div>

          <div className="mx-6">
            <Menu
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <img src={menu} className="cursor-pointer" />
              </MenuHandler>
              <MenuList>
                <MenuItem
                  onClick={() => HandleProductInfo()}
                  className=" flex items-center gap-3"
                >
                  <img className="w-6" src={icon1} />
                  Product info
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <img className="w-6" src={icon2} />
                  Product Stock
                </MenuItem>
                <MenuItem onClick={()=>DeleatAlert()} className="flex items-center gap-3">
                  <img className="w-6" src={icon3} />
                  Deleat Product
                </MenuItem>
              </MenuList>
            </Menu>
            
          </div>
              
        </div>
      )}


      
    </div>
  );
}

function DeleatAlert(){
  

  Swal.fire({
    title: "vous ete sur?",
    text: "cette action va suprimer le prouduit immediatement!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3C615A",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Votre prouduit est suprimer.",
        icon: "success",
        timer: 3000,
        
      });
    }
  });
  
}




export default ProductPage;
