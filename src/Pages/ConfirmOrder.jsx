import React, { useContext, useEffect, useState } from "react";
import user from "../assets/image/icon/client.svg";
import phone from "../assets/image/icon/phone.svg";
import location from "../assets/image/icon/location.svg";
import { AppContext } from "../AppProvider";
import NavBar from "../Components/NavBar";
import logo from "../assets/image/logo.png";
import { ApiLink } from "../Components/Data";
import axios from "axios";
import close from "../assets/image/icon/out.svg";
import QRCode from "qrcode.react";
import { useNavigate } from "react-router-dom";

function ConfirmOrder() {
  const { confirmData, setopenFacture, facture, setfacture } =
    useContext(AppContext);

  const panier = confirmData.Pannier;
  const [pr, setpr] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const promises = panier.map((e) =>
          axios.get(`${ApiLink}/api/product/${e.Product}`)
        );
        const res = await Promise.all(promises);
        const products = res.map((res) => res.data);
        setpr(products);
        setloading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="w-full h-screen overflow-y-auto p-4 ">
      <NavBar searchBar={false} display={false} link="order" />
      <ClientOrderInfo
        name={confirmData.fullName}
        phoneNumber={confirmData.phoneNumber}
        wilaya={confirmData.Willaya}
        adresse={confirmData.Address}
      />
      <div className="w-full   ">
        <div className="flex justify-between items-center my-4 pr-4">
          <h1 className="text-xl font-semibold text-main ">Panier</h1>
          <p className="text-base">Total : {confirmData.Total} </p>
        </div>
        <div className="w-full h-[450px]  ">
          {pr.map((e, index) => {
            console.log(index);
            return (
              <PanerOrderInfo
                key={index}
                qnt={panier[index].Quantity}
                powder={panier[index].IsPowder}
                img={e.Image}
                name={e.ProductName}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full my-6 flex justify-between px-6  ">
        <button className="py-3 rounded-3xl px-6 bg-red-500 text-white">
          {" "}
          Cancel{" "}
        </button>
        <button
          onClick={() => setopenFacture(true)}
          className="py-3 rounded-3xl px-6 bg-main text-white"
        >
          {" "}
          Facture{" "}
        </button>
      </div>
    </div>
  );
}

function ClientOrderInfo({ name, phoneNumber, adresse, wilaya }) {
  return (
    <div className="w-full h-[38%] py-2 px-2 ">
      <h1 className="text-xl font-semibold my-4 text-main ">Clent</h1>
      <h2 className="flex items-center my-2 gap-4 text-base">
        <img src={user} alt="..." className="w-7 " />
        {name}
      </h2>
      <h2 className="flex items-center my-2 gap-4 text-base">
        <img src={phone} alt="..." className="w-7 " />
        {phoneNumber}
      </h2>
      <h2 className="flex items-center my-2 gap-4 text-base">
        <img src={location} alt="..." className="w-7 " />
        {adresse},{wilaya}
      </h2>
    </div>
  );
}

function PanerOrderInfo({ qnt, img, powder, name }) {
  return (
    <div className="relative  inline-flex h-full  py-2  flex-col  shadow-md shadow-black/30 transition min-w-[30%] w-[20%] max-w-[48%]   flex-grow    ">
      <div className="w-full h-[80%]    flex justify-center p-12">
        <img className=" " src={img} alt="..." />
      </div>
      <div className=" h-[20%] ">
        <div>
          <h1 className="px-4 text-base font-semibold text-main"> {name} </h1>
          <p className="px-4  py-2 line-clamp-3"> {qnt} </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export function GenerateFacture() {
  const navigate = useNavigate();
  const { openFacture, setopenFacture, confirmData } = useContext(AppContext);
  const panier = confirmData.Pannier;
  const code = panier.map((item) => item.Product).join(",");

  const handlePrint = () => {
    const printContents = document.getElementById('printable-div').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    navigate('/order')  // Reload the page to restore the original content
};

  return (
    <>
      {openFacture ? (
        <div className="absolute z-50 flex overflow-y-auto justify-center items-center w-full h-screen bg-black/70 ">
          <img
            onClick={() => setopenFacture(false)}
            className="absolute p-2 bg-white rounded-full w-10 top-10 right-10"
            src={close}
            alt="..."
          />
          <button className="absolute bottom-10 right-10 bg-main text-white py-3 px-6 rounded-full" onClick={() => handlePrint()} >Imprimer</button>
          <div id="printable-div" className="w-[413px] flex flex-col  h-[582px]  bg-white ">
            <img
              src={logo}
              className="w-40 self-center h-28 my-6  "
              alt="..."
            />
            <div className="w-full flex flex-col px-4">
              <h1 className="text-main self-center text-lg my-2 font-semibold">
                Bon de recu
              </h1>
              <p>
                {" "}
                <span className="font-medium mx-4 text-base ">Nom :</span>{" "}
                {confirmData.fullName}{" "}
              </p>
              <p>
                {" "}
                <span className="font-medium mx-4 text-base ">
                  N telephone :
                </span>{" "}
                {confirmData.phoneNumber}{" "}
              </p>
              <p>
                {" "}
                <span className="font-medium mx-4 text-base ">
                  Adresse :
                </span>{" "}
                {confirmData.Address}{" "}
              </p>
              <p>
                {" "}
                <span className="font-medium mx-4 text-base ">
                  Wilaya :
                </span>{" "}
                {confirmData.Willaya}{" "}
              </p>
              <p>
                {" "}
                <span className="font-medium mx-4 text-base ">
                  Total :
                </span>{" "}
                {confirmData.Total}{" "}
              </p>
              <div className="w-full flex flex-col items-center justify-center   h-52">
                <p className="my-5 text-xs"> scener pour acceder au mode d'utilisation : </p>
                <QRCode value={code} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ConfirmOrder;
