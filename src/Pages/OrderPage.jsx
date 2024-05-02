import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { useQuery, gql } from "@apollo/client";
import img from "../assets/image/empty.png"
const GET_ORDERS = gql`
  query {
    getAllOrder {
      Pannier{
        Product
      }
      Profile
      phoneNumber
      Total
      Address
      Willaya
    }
  }
`;

function OrderPage() {
  
  const { loading, error, data } = useQuery(GET_ORDERS);
  if (loading) return <Loading/>;
  if (error) return <p>Error: {error.message}</p>;
  const orders = data.getAllOrder;
  console.log(orders);
  
  return (
    <div className="h-screen w-full px-4">
      {orders.length == 0 ? <Loading/> : <>
      <NavBar searchBar={true} />
      <div className="my-20">
       {orders.map(order =>(
        <OrderCard order={order} />
       ))}
      </div>
      </>}
    </div>
  );
}


function OrderCard({order}){
  return(
    <div className="relative my-2 mx-8 py-6 bg-black/10 rounded-xl transition  flex flex-col">
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

          <div className="px-4 flex gap-8">
           <a href="tel:+6-99-54-23-92">Confirmer</a>
          </div>
        </div>
      }
    </div>
  );

}


function Loading(){
  return(
    <div className="h-screen w-full px-4">
      <NavBar searchBar={true} />
      <div className="w-full flex justify-center items-center h-[500px] ">
          <img src={img}  />
      </div>

    </div>
  )
}

export default OrderPage;
