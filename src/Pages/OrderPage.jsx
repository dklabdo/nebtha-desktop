import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { useQuery, gql } from "@apollo/client";
import img from "../assets/image/empty.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppProvider";

const GET_ORDERS = gql`
  query {
    getAllOrder {
      Pannier {
        Product
        Quantity
        IsPowder
      }
      Profile
      phoneNumber
      Total
      Address
      Willaya
      fullName
    }
  }
`;

function OrderPage() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  const orders = data.getAllOrder;
  console.log(orders);

  return (
    <div className="h-screen overflow-y-auto w-full px-4">
      {orders.length == 0 ? (
        <Loading />
      ) : (
        <>
          <NavBar searchBar={true} />
          <div className="my-20">
            {orders.map((order, index) => (
              <OrderCard key={index} order={order} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function OrderCard({ order }) {
  const navigate = useNavigate();
  const {setconfirmData} = useContext(AppContext);
  function handleConfirm(){
    setconfirmData(order);
    navigate('/Confirm');
  }

  return (
    <div className="relative my-2 mx-8 py-4 border-b-2 border-main  transition  flex flex-col">
      {
        <div className="w-full px-6  flex items-center justify-between ">
          <div className="w-[45%] font-medium   px-2 text-nowrap  overflow-hidden">
            <h1>{order.Profile} </h1>
          </div>
          <div className="w-[20%] flex gap-1  text-nowrap px-2 overflow-hidden ">
            {order.Total} Da
          </div>
          <div className="w-[20%] px-2 text-nowrap overflow-hidden ">
            {order.phoneNumber}
          </div>

          <div className=" w-48 h-12  flex gap-8">
            <button
              onClick={() => handleConfirm()}

              className="py-3 transition group w-fit border-2 border-main hover:bg-main hover:text-white flex gap-2 items-center px-5  text-main rounded-3xl"
            >
              
            Confirmer
            </button>
          </div>
        </div>
      }
    </div>
  );
}

function Loading() {
  return (
    <div className="h-screen w-full px-4">
      <NavBar searchBar={true} />
      <div className="w-full flex justify-center items-center h-[500px] ">
        <img src={img} />
      </div>
    </div>
  );
}

export default OrderPage;
