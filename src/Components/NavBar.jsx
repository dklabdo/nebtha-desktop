import React, { useContext, useState } from "react";
import search from "../assets/image/icon/search.svg";
import profile from "../assets/image/profile.png";
import { AppContext } from "../AppProvider";
import { Link } from "react-router-dom";
import back from "../assets/image/icon/back.svg";
import { adminLogInfo, role } from "./Data";
import exit from "../assets/image/icon/out.svg";
function NavBar({ link, searchBar, display, home, commerce,type,analytic }) {
  const {
    Search,
    homeSelectedInsert,
    setHomeSelectedInsert,
    adminInfo,
    analyticDisplay,
    setanalyticDisplay
  } = useContext(AppContext);
  console.log(adminInfo);
  return (
    <div className="flex my-6 py-8 justify-between items-center w-full p-6 h-20 ">
      {link && (
        <Link to={`/${link}`}>
          <img className="w-14" src={back} alt="..." />
        </Link>
      )}
      {home && (
        <div className="flex  gap-20 w-1/2">
          {commerce && (
            <button
              onClick={() => setHomeSelectedInsert(1)}
              className={`homeLink transition flex gap-2 group hover:bg-main hover:text-white ${
                homeSelectedInsert == 1 && "bg-main text-white"
              }`}
            >
              <svg
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5 21.6719C18.1344 21.6719 21.2036 20.751 21.5 17.055C21.5 13.3615 19.3602 13.599 19.3602 9.0673C19.3602 5.52751 16.2591 1.5 11.5 1.5C6.74091 1.5 3.63982 5.52751 3.63982 9.0673C3.63982 13.599 1.5 13.3615 1.5 17.055C1.79759 20.765 4.86679 21.6719 11.5 21.6719Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                  stroke={homeSelectedInsert == 1 ? "#ffff" : "#477971"}
                />
                <path
                  d="M14.3104 25.0449C12.7055 26.9729 10.202 26.9958 8.58179 25.0449"
                  stroke="#477971"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill={homeSelectedInsert == 1 ? "#ffff" : "#477971"}
                  className="group-hover:fill-white"
                />
              </svg>
              News
            </button>
          )}
         
          
          {commerce && (
            <button
              onClick={() => setHomeSelectedInsert(2)}
              className={`homeLink transition group  flex gap-3 hover:bg-main hover:text-white ${
                homeSelectedInsert == 2 && "bg-main text-white"
              }`}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 13.5C11.8358 13.5 11.5 13.1642 11.5 12.75V11.25C11.5 10.8358 11.8358 10.5 12.25 10.5C12.6642 10.5 13 10.8358 13 11.25V12.75C13 13.1642 12.6642 13.5 12.25 13.5Z"
                  fill={homeSelectedInsert == 2 ? "#ffff" : "#477971"}
                  className="group-hover:fill-white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4C0.895431 4 0 4.89543 0 6V9.20001C0 9.47616 0.223858 9.70002 0.5 9.70002C1.88071 9.70002 3 10.8193 3 12.2C3 13.5807 1.88071 14.7 0.500001 14.7C0.223859 14.7 0 14.9239 0 15.2V18C0 19.1046 0.895431 20 2 20H18C19.1046 20 20 19.1046 20 18V15C20 14.7239 19.7761 14.5 19.5 14.5C18.1193 14.5 17 13.3807 17 12C17 10.6193 18.1193 9.50002 19.5 9.50002C19.7761 9.50002 20 9.27616 20 9.00002V6C20 4.89543 19.1046 4 18 4H2ZM1.5 6C1.5 5.72386 1.72386 5.5 2 5.5H11.5V7.5C11.5 7.91421 11.8358 8.25 12.25 8.25C12.6642 8.25 13 7.91421 13 7.5V5.5H18C18.2761 5.5 18.5 5.72386 18.5 6V8.12603C16.7748 8.57008 15.5 10.1362 15.5 12C15.5 13.8639 16.7748 15.43 18.5 15.874V18C18.5 18.2761 18.2761 18.5 18 18.5H13V16.5C13 16.0858 12.6642 15.75 12.25 15.75C11.8358 15.75 11.5 16.0858 11.5 16.5V18.5H2C1.72386 18.5 1.5 18.2761 1.5 18V16.074C3.22523 15.63 4.5 14.0639 4.5 12.2C4.5 10.3362 3.22523 8.77007 1.5 8.32603V6Z"
                  fill={homeSelectedInsert == 2 ? "#ffff" : "#477971"}
                  className="group-hover:fill-white"
                />
              </svg>
              Promotions
            </button>
          )}
          <button
            onClick={() => setHomeSelectedInsert(3)}
            className={`homeLink transition flex group gap-2 hover:bg-main hover:text-white ${
              homeSelectedInsert == 3 && "bg-main text-white"
            }`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill={homeSelectedInsert == 3 ? "#ffff" : "#477971"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6666 11.666C18.6666 12.1492 18.2749 12.541 17.7916 12.541H10.2083C9.72505 12.541 9.33329 12.1492 9.33329 11.666C9.33329 11.1828 9.72505 10.791 10.2083 10.791H17.7916C18.2749 10.791 18.6666 11.1828 18.6666 11.666Z"
                className="group-hover:fill-white"
              />
              <path
                d="M16.3333 16.3327C16.3333 16.8159 15.9415 17.2077 15.4583 17.2077H10.2083C9.72505 17.2077 9.33329 16.8159 9.33329 16.3327C9.33329 15.8494 9.72505 15.4577 10.2083 15.4577H15.4583C15.9415 15.4577 16.3333 15.8494 16.3333 16.3327Z"
                fill={homeSelectedInsert == 3 ? "#ffff" : "#477971"}
                className="group-hover:fill-white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6666 1.16602C10.378 1.16602 9.33329 2.21068 9.33329 3.49935H6.99996C5.71129 3.49935 4.66663 4.54402 4.66663 5.83268V23.3327C4.66663 24.6214 5.71129 25.666 6.99996 25.666H21C22.2887 25.666 23.3333 24.6214 23.3333 23.3327V5.83268C23.3333 4.54402 22.2887 3.49935 21 3.49935H18.6666C18.6666 2.21068 17.622 1.16602 16.3333 1.16602H11.6666ZM16.9166 3.49935C16.9166 3.17719 16.6554 2.91602 16.3333 2.91602H11.6666C11.3445 2.91602 11.0833 3.17719 11.0833 3.49935V5.24935C11.0833 5.57151 11.3445 5.83268 11.6666 5.83268H16.3333C16.6554 5.83268 16.9166 5.57151 16.9166 5.24935V3.49935ZM18.6666 5.24935C18.6666 6.53801 17.622 7.58268 16.3333 7.58268H11.6666C10.378 7.58268 9.33329 6.53801 9.33329 5.24935H6.99996C6.6778 5.24935 6.41663 5.51052 6.41663 5.83268V23.3327C6.41663 23.6548 6.6778 23.916 6.99996 23.916H21C21.3221 23.916 21.5833 23.6548 21.5833 23.3327V5.83268C21.5833 5.51052 21.3221 5.24935 21 5.24935H18.6666Z"
                fill={homeSelectedInsert == 3 ? "#ffff" : "#477971"}
                className="group-hover:fill-white"
              />
            </svg>
            Articles
          </button>
        </div>
      )}
      {display && (
        <div className="text-lg text-main flex items-center gap-4">
          {display}
        </div>
      )}
      {analytic && <div className="flex gap-10">
        <button onClick={() => setanalyticDisplay(1)} className={`px-6 py-2 border-2 text-main border-main rounded-full hover:bg-main hover:text-white ${analyticDisplay == 1 && "bg-main text-white"}`} >Clients</button>
        <button onClick={() => setanalyticDisplay(2)} className={`px-6 py-2 border-2 text-main border-main rounded-full hover:bg-main hover:text-white ${analyticDisplay == 2 && "bg-main text-white"}`}>Orders</button>
      </div> }
      {searchBar && (
        <form className="ml-6 flex items-center -space-x-12 w-[48%]  h-fit ">
          <input
            className="bg-white   pl-4 outline-none border-2 w-full  border-main py-4 px-2 rounded-full"
            type="text"
            placeholder="enter product name or id"
            onChange={(e) => Search(type,e.target.value)}
           
          />
          <button onClick={(e) => {Search(type,'');console.log('gtaa')}} type="reset" className="bg-white rounded-full ">
            <img src={exit} alt="..." className="w-6 z-10" />
          </button>
        </form>
      )}
      <div className="h-fit     ">
        <div className=" relative py-2 pr-6 p-2 flex gap-3 items-center h-full rounded-full ">
          <img
            src={localStorage.getItem("img")}
            className="w-16 object-cover h-16 bg-main rounded-[50%] "
          />
          <div className="px-1 py-2">
            <h1 className="font-medium"> {localStorage.getItem("name")} </h1>
            <p className="text-xs"> {role[localStorage.getItem("role")]} </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}



export default NavBar;
