import React from "react";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../AppProvider";
import { maladieChronique } from "../Components/Data";
import { pathologie } from "../Components/Data";
import NavBar from "../Components/NavBar";
function ProductInfo() {
  const { CurrentProductInfoDisplay } = useContext(AppContext);
  
  
  return (
    <div className="w-full  px-10 overflow-y-auto h-screen py-2">
      <NavBar searchBar={false} display={false} link="product" />
      <div className="w-full items-center   flex gap-10 p-6">
        <div className="border-2 border-main rounded-3xl w-[50%] h-80 flex">
          <img src={CurrentProductInfoDisplay.Image} className="m-auto   object-contain rounded-3xl" alt="..." />
        </div>

        <div className=" w-full px-8 py-6">
          <h1 className="font-semibold text-xl text-main">
            {CurrentProductInfoDisplay.ProductName} ,{" "}
            {CurrentProductInfoDisplay.ProductScientificName}{" "}
          </h1>
          <h2 className="font-light text-lg text-black">
            {CurrentProductInfoDisplay.ProductArabicName}{" "}
          </h2>
          <h2 className={`font-light text-lg text-black ${CurrentProductInfoDisplay.Promotion && "line-through text-black/50 text-base"}`}>
            {CurrentProductInfoDisplay.Price} DA{" "}
          </h2>
          <h2 className={`text-lg font-medium ${!CurrentProductInfoDisplay.Promotion && 'hidden'}`} >
          {CurrentProductInfoDisplay.PromotionPrice} DA{" "}
          </h2>
          <h1 className="font-semibold text-base text-main">Deatails :</h1>

          <p className="my-4 font-light text-base text-black">
            {CurrentProductInfoDisplay.Productdesc}{" "}
          </p>
        </div>
      </div>
      <div className=" px-8">
        <h1 className="text-lg text-main my-2">Propriete :</h1>
        <p>{CurrentProductInfoDisplay.Propriete} </p>
        <h1 className="text-lg text-main my-2">Precaution :</h1>
        <p>{CurrentProductInfoDisplay.Precaution} </p>
        <h1 className="text-lg text-main my-2">Mode d'utilisation :</h1>
        <p>{CurrentProductInfoDisplay.ModeUtilisation} </p>
        <h1 className="text-lg text-main my-2">Contre Indication :</h1>
        <div className="flex flex-wrap gap-2 my-8">
          {CurrentProductInfoDisplay.ContreIndication.map((e, index) => {
            return <Bubble key={index} text={maladieChronique.at(e - 1)} />;
          })}
        </div>
        <h1 className="text-lg text-main my-2">Indication :</h1>

        <div className="flex flex-wrap gap-2 my-8">
          {CurrentProductInfoDisplay.Indication.map((e, index) => {
            return <Bubble key={index} text={pathologie.at(e - 1)} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Bubble({ text }) {
  console.log(text);
  return (
    <p
      className={`py-2 px-4 w-fit text-nowrap text-white bg-main rounded-full ${
        text == undefined && "hidden"
      }`}
    >
      {text}
    </p>
  );
}

export default ProductInfo;
