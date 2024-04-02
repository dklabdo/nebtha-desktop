import React from "react";
import NavBar from "../Components/NavBar";
import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";
import { useNavigate } from "react-router-dom";
import icon1 from "../assets/image/icon/transport.svg";
import icon2 from "../assets/image/icon/copy.svg";
function StockPage() {
  const { ProductData } = useContext(AppContext);
  console.log(ProductData);
  return (
    <div className="h-screen w-full p-4">
      <NavBar searchBar={true} />
      <div className="w-full my-12 flex flex-col">
        {ProductData.map((pr, index) => {
          return <ProductCardList product={pr} key={index} />;
        })}
      </div>
    </div>
  );
}

function ProductCardList({ product }) {
  const { deleted, setdeleted } = useContext(AppContext);
  function DeleatAlert(id) {
    const url = `${ApiLink}/api/product/${id}`;
    Swal.fire({
      title: "vous ete sur?",
      text: "cette action va suprimer le prouduit immediatement!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3C615A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(url).then(() => {
          setdeleted(!deleted);
          Swal.fire({
            icon: "success",
            title: "Votre prouduit est suprimer avec succes",
            showConfirmButton: false,
            timer: 2000,
          });
        });
      }
    });
  }
  console.log(product);
  const navigate = useNavigate();
  const {
    setCurrentStockAndPrice,
    
    setUpdateProduct,
    
  } = useContext(AppContext);

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="relative my-2 mx-8 py-6 bg-black/10 rounded-xl transition  flex flex-col">
      {
        <div className="w-full px-6  flex items-center justify-between ">
          <div className="w-[45%] font-medium   px-2 text-nowrap  overflow-hidden">
            <h1>{product.ProductName}</h1>
          </div>
          <div className="w-[20%] flex gap-1  text-nowrap px-2 overflow-hidden ">
            {product.stock} Kg
          </div>
          <div className="w-[20%] px-2 text-nowrap overflow-hidden ">
            {" "}
            {product.Price + " DA"}{" "}
          </div>

          <div className="px-4 flex gap-8">
            <img
            title="stock"
              onClick={() => {
                setUpdateProduct(true);
                setCurrentStockAndPrice(product);
              }}
              src={icon1}
              className="w-7 cursor-pointer"
            />
            <img onClick={()=>copyToClipboard(product._id)} title="copie " src={icon2} className="w-6  cursor-pointer" />
          </div>
        </div>
      }
    </div>
  );
}

export default StockPage;
