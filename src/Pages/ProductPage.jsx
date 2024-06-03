import React, { useState, useEffect, useContext, useRef } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../AppProvider";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import menu from "../assets/image/icon/ellypsis.svg";
import icon1 from "../assets/image/icon/info.svg";
import icon3 from "../assets/image/icon/bin.svg";
import icon4 from "../assets/image/icon/new.svg";
import out from "../assets/image/icon/out.svg";
import NavBar from "../Components/NavBar";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import stockIcon from "../assets/image/icon/basket2.svg";
import money from "../assets/image/icon/credit-card.svg";
import copy from "../assets/image/icon/copy.svg";
import { ApiLink } from "../Components/Data";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
function ProductPage() {
  const { ProductData, SearchProduct,adminRole } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      {
        <div className={`overflow-y-auto h-screen w-full`}>
          {adminRole == 0 || adminRole == 1 ? <div
          className={
            "flex px-4 py-2  rounded-lg my-4 cursor-pointer items-center gap-4 mx-auto   absolute bottom-4 right-14 bg-main z-30  "
            
          }
          onClick={() => {
            
            navigate("/addProduct");
          }}
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-labelledby="addIconTitle"
            stroke="white"
            width="32px"
            height="32px"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
            color="#000"
            className={
             
                 "w-7 "
               
            }
          >
            {" "}
            <title id="addIconTitle">Add</title>{" "}
            <path d="M17 12L7 12M12 17L12 7" />{" "}
            <circle cx="12" cy="12" r="10" />{" "}
          </svg>
          <Link
            className={ "navlink activelink text-white" }
            to="/addProduct"
          >
            Add
          </Link>
        </div> : <></>}
          <NavBar
            display={ProductData.length}
            searchBar={true}
            type="Product"
          />
          <div className="w-fit h-screen flex justify-center   ">
            {ProductData.length == 0 ? (
              <h1 className="text-center my-10 mx-6  text-base text-black/50">
                pas de prouduit
              </h1>
            ) : (
              <div className="pt-8 gap-4     flex   my-8 px-6 flex-row flex-wrap ">
                {ProductData.map((pr, index) => {
                  return (
                    (pr._id == SearchProduct ||
                      pr.ProductName.toLowerCase().includes(
                        SearchProduct.toLowerCase()
                      )) && <ProductCardGrid key={index} product={pr} />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
}

function ProductCardGrid({ product }) {
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
  const navigate = useNavigate();
  const {
    setCurrentStockAndPrice,
    setCurrentProductInfoDisplay,
    setUpdateProduct,
    setCurrentProductToModifie,
    adminRole,
  } = useContext(AppContext);

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="relative inline-flex  py-2  flex-col bg-white shadow-md shadow-black/30 transition min-w-[30%] w-[20%] max-w-[48%]   flex-grow   h-[450px] ">
      <div className="w-full h-1/2 flex justify-center p-10">
        <img src={product.Image} />
      </div>
      <div className="w-full h-1/2 ">
        <h1 className="px-4 text-base font-semibold text-main">
          {product.ProductName}{" "}
        </h1>
        <p className="px-4 h-28 my-2 py-4 line-clamp-3">
          {product.Productdesc}{" "}
        </p>
        <div className="w-full  px-5 py-2 flex items-center justify-between">
          <h1>{product.Price} DA</h1>
          <div className="">
            {
              <Menu
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <img src={menu} className=" rotate-90 w-8 cursor-pointer" />
                </MenuHandler>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      setCurrentProductInfoDisplay(product);
                      navigate("/ProductInfo");
                    }}
                    className=" flex items-center gap-3"
                  >
                    <img className="w-6" src={icon1} />
                    Product info
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      setCurrentProductToModifie(product);
                      navigate("/modifieProduct");
                    }}
                    className="flex items-center gap-3"
                  >
                    <img className="w-6" src={icon4} />
                    Modified Product
                  </MenuItem>

                  <MenuItem
                    onClick={() => DeleatAlert(product._id)}
                    className="flex items-center gap-3"
                  >
                    <img className="w-6" src={icon3} />
                    Deleat Product
                  </MenuItem>
                  <MenuItem
                    onClick={() => copyToClipboard(product._id)}
                    className="flex items-center gap-3"
                  >
                    <img className="w-6" src={copy} />
                    Copie Id
                  </MenuItem>
                </MenuList>
              </Menu>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export function UpdateStock() {
  const { CurrentStockAndPrice, UpdateProduct, setUpdateProduct } =
    useContext(AppContext);

  const [PriceAndStock, setPriceAndStock] = useState({
    Promotion: false,
    PromotionPrice: 0,
    Price: CurrentStockAndPrice.Price,
    stock: 0,
  });

  const promotion = useRef();
  const price = useRef();
  const Stock = useRef();

  function HandleUpdatePriceAndStock(e) {
    e.preventDefault();

    console.log(PriceAndStock);
    const ApiUrl = `${ApiLink}/api/product/${CurrentStockAndPrice._id}`;
    axios
      .patch(ApiUrl, PriceAndStock)
      .then(() => {
        setUpdateProduct(false);
        Swal.fire({
          icon: "success",
          title: "votre est mis a jour avec succes",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/product");
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
  function HandlePriceAndStock() {
    setPriceAndStock({
      ...PriceAndStock,
      Promotion: promotion.current.checked,
      PromotionPrice: promotion.current.checked ? price.current.value : null,
      Price: !promotion.current.checked
        ? price.current.value
        : CurrentStockAndPrice.Price,
      stock: CurrentStockAndPrice.stock + Number(Stock.current.value),
    });
  }
  return (
    UpdateProduct && (
      <div className="flex flex-col  justify-center w-full  shadow-lg p-6 shadow-black/50   mx-auto z-50 bg-black/50  h-screen fixed">
        <div className="bg-white PopUp absolute left-[15%]  w-[70%] py-12 rounded-3xl">
          <button onClick={() => setUpdateProduct(false)} className="">
            <img
              src={out}
              className="relative ml-8 w-12 rounded-full p-1 rotate-180"
            />
          </button>
          <h1 className="text-center my-2 text-main text-xl">
            Mise à jour du prix et du stock
          </h1>
          <form
            onSubmit={(e) => HandleUpdatePriceAndStock(e)}
            className="flex flex-col  w-full  "
          >
            <div className="flex gap-10 px-10 my-20">
              <div className="flex gap-3 w-1/2 flex-col">
                <label
                  className="flex gap-2 px-2 items-center"
                  htmlFor="input1"
                >
                  <img className="w-7" src={money} />
                  Prix du produit
                </label>
                <input
                  className="bg-white outline-none rounded-full border-2 py-2 px-4 focus:border-main border-black/50"
                  id="input1"
                  type="number"
                  placeholder="2000 DA"
                  ref={price}
                  onChange={() => HandlePriceAndStock()}
                />
                <div className="flex gap-2 items-center px-2 my-2">
                  <input
                    name="Promotion"
                    id="chek"
                    className="appearance-none cursor-pointer checked:bg-main w-5 h-5  border-2 border-main rounded-full"
                    type="checkbox"
                    ref={promotion}
                    onChange={() => HandlePriceAndStock()}
                  />
                  <label className="text-base cursor-pointer" htmlFor="chek">
                    Prix de promotion{" "}
                  </label>
                </div>
              </div>
              <div className="flex gap-3 w-1/2 flex-col">
                <label
                  className="flex gap-2 px-2 items-center"
                  htmlFor="input1"
                >
                  <img className="w-8" src={stockIcon} />
                  Stock du produit
                </label>
                <input
                  className="bg-white  outline-none rounded-full border-2 py-2 px-4 focus:border-main border-black/50"
                  id="input1"
                  type="number"
                  placeholder="25 kg"
                  name="stock"
                  ref={Stock}
                  onChange={() => HandlePriceAndStock()}
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={() => HandleUpdatePriceAndStock()}
              className="mx-auto border-2 hover:bg-main hover:text-white rounded-full font-medium text-main border-main px-6 py-2"
            >
              Mise à jour du stock
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default ProductPage;
