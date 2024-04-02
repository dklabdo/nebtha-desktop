import React, { useContext, useState } from "react";
import search from "../assets/image/icon/search.svg";
import profile from "../assets/image/profile.png";
import { AppContext } from "../AppProvider";
import { Link } from "react-router-dom";
import back from "../assets/image/icon/back.svg";
function NavBar({ link, searchBar, display, home }) {
  const {
    ProductData,
    homeSelectedInsert,
    setHomeSelectedInsert,
    ProductDisplay,
    setProductDisplay,
  } = useContext(AppContext);
  console.log();
  return (
    <div className="flex my-4 justify-between items-center w-full p-6 h-20 ">
      {link && (
        <Link to={`/${link}`}>
          <img className="w-14" src={back} alt="..." />
        </Link>
      )}
      {home && (
        <div className="flex  justify-around w-1/2">
          <button
            onClick={() => setHomeSelectedInsert(1)}
            className={`homeLink flex gap-2 hover:bg-main hover:text-white ${
              homeSelectedInsert == 1 && "bg-main text-white"
            }`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill={homeSelectedInsert == 1 ? "#ffff" : "#477971"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6666 11.666C18.6666 12.1492 18.2749 12.541 17.7916 12.541H10.2083C9.72505 12.541 9.33329 12.1492 9.33329 11.666C9.33329 11.1828 9.72505 10.791 10.2083 10.791H17.7916C18.2749 10.791 18.6666 11.1828 18.6666 11.666Z"
                
              />
              <path
                d="M16.3333 16.3327C16.3333 16.8159 15.9415 17.2077 15.4583 17.2077H10.2083C9.72505 17.2077 9.33329 16.8159 9.33329 16.3327C9.33329 15.8494 9.72505 15.4577 10.2083 15.4577H15.4583C15.9415 15.4577 16.3333 15.8494 16.3333 16.3327Z"
                fill={homeSelectedInsert == 1 ? "#ffff" : "#477971"}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6666 1.16602C10.378 1.16602 9.33329 2.21068 9.33329 3.49935H6.99996C5.71129 3.49935 4.66663 4.54402 4.66663 5.83268V23.3327C4.66663 24.6214 5.71129 25.666 6.99996 25.666H21C22.2887 25.666 23.3333 24.6214 23.3333 23.3327V5.83268C23.3333 4.54402 22.2887 3.49935 21 3.49935H18.6666C18.6666 2.21068 17.622 1.16602 16.3333 1.16602H11.6666ZM16.9166 3.49935C16.9166 3.17719 16.6554 2.91602 16.3333 2.91602H11.6666C11.3445 2.91602 11.0833 3.17719 11.0833 3.49935V5.24935C11.0833 5.57151 11.3445 5.83268 11.6666 5.83268H16.3333C16.6554 5.83268 16.9166 5.57151 16.9166 5.24935V3.49935ZM18.6666 5.24935C18.6666 6.53801 17.622 7.58268 16.3333 7.58268H11.6666C10.378 7.58268 9.33329 6.53801 9.33329 5.24935H6.99996C6.6778 5.24935 6.41663 5.51052 6.41663 5.83268V23.3327C6.41663 23.6548 6.6778 23.916 6.99996 23.916H21C21.3221 23.916 21.5833 23.6548 21.5833 23.3327V5.83268C21.5833 5.51052 21.3221 5.24935 21 5.24935H18.6666Z"
                fill={homeSelectedInsert == 1 ? "#ffff" : "#477971"}
                className="hover:fill-white"
              />
            </svg>
            News
          </button>
          <button
            onClick={() => setHomeSelectedInsert(2)}
            className={`homeLink hover:bg-main hover:text-white ${
              homeSelectedInsert == 2 && "bg-main text-white"
            }`}
          >
            Promotions
          </button>
          <button
            onClick={() => setHomeSelectedInsert(3)}
            className={`homeLink hover:bg-main hover:text-white ${
              homeSelectedInsert == 3 && "bg-main text-white"
            }`}
          >
            Article
          </button>
        </div>
      )}
      {display && (
        <div className="text-lg text-main flex items-center gap-4">
          {ProductData.length}
        </div>
      )}
      {searchBar && (
        <div className="ml-6 flex items-center -space-x-12 w-[48%]  h-fit ">
          <input
            className="bg-white  pl-4 outline-none border-2 w-full  border-main py-4 px-2 rounded-full"
            type="text"
            placeholder="enter product name or id"
          />
          <button className="bg-main rounded-full p-1">
            <img src={search} alt="..." className="w-7 z-10" />
          </button>
        </div>
      )}
      <div className="h-fit w-fit  ">
        <div className="w-72 py-2 pr-6 p-2 flex gap-2 items-center h-full rounded-full  bg-card">
          <img src={profile} className="w-12 bg-main rounded-full" />
          <div className="px-1 py-2">
            <h1 className="font-medium">Sayah abdel-ilah</h1>
            <p className="text-xs">sayah.abdo22@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return <></>;
}

export default NavBar;
