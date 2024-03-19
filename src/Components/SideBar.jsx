import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo2.png";
import logo2 from "../assets/image/logo4.svg";
import out from "../assets/image/icon/out.svg";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const { HandleLogOut } = useContext(AppContext);
  const navigate = useNavigate();
  const [selected, setseledcted] = useState(0);
  return (
    <div className="md:min-w-72 w-20 relative sh flex flex-col items-center bg-main h-screen">
      <img className="hidden md:block w-48 mt-10" src={logo} alt="..." />
      <img className="w-10 md:hidden mt-10" src={logo2} alt="..." />
      <div className="w-[80%] my-12">
        <div
          className={
            selected == 1 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {setseledcted(1);navigate('/addProduct')}}
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
              selected == 1
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="addIconTitle">Add</title>{" "}
            <path d="M17 12L7 12M12 17L12 7" />{" "}
            <circle cx="12" cy="12" r="10" />{" "}
          </svg>
          <Link
            className={selected == 1 ? "navlink activelink" : "navlink"}
            to="/addProduct"
          >
            Add
          </Link>
        </div>
        <div
          className={
            selected == 2 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {setseledcted(2);navigate('/home')}}
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            aria-labelledby="homeAltIconTitle"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            color="#000"
            className={
              selected == 2
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="homeAltIconTitle">Home</title>{" "}
            <path d="M3 10.182V22h18V10.182L12 2z" />{" "}
            <rect width="6" height="8" x="9" y="14" />{" "}
          </svg>

          <Link
            className={selected == 2 ? "navlink activelink" : "navlink"}
            to="/home"
          >
            Home
          </Link>
        </div>
        <div
          className={
            selected == 3 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {setseledcted(3);navigate('/product')}}
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            aria-labelledby="boxIconTitle"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            color="#000"
            className={
              selected == 3
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="boxIconTitle">Box</title>{" "}
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />{" "}
            <polyline strokeLinecap="round" points="3 7 12 12 21 7" />{" "}
            <path strokeLinecap="round" d="M12,12 L12,22" />{" "}
          </svg>

          <Link
            className={selected == 3 ? "navlink activelink" : "navlink"}
            to="/product"
          >
            Product
          </Link>
        </div>
        <div
          className={
            selected == 4 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {setseledcted(4);navigate('/client')}}
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            aria-labelledby="personIconTitle"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            color="#000"
            className={
              selected == 4
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="personIconTitle">Person</title>{" "}
            <path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20" />{" "}
          </svg>

          <Link
            className={selected == 4 ? "navlink activelink" : "navlink"}
            to="/client"
          >
            Client{" "}
          </Link>
        </div>
        <div
          className={
            selected == 5 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {setseledcted(5);navigate('/sales')}}
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            aria-labelledby="dolarIconTitle"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            color="#000"
            className={
              selected == 5
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="dolarIconTitle">Dolar</title>{" "}
            <path d="M12 4L12 6M12 18L12 20M15.5 8C15.1666667 6.66666667 14 6 12 6 9 6 8.5 7.95652174 8.5 9 8.5 13.140327 15.5 10.9649412 15.5 15 15.5 16.0434783 15 18 12 18 10 18 8.83333333 17.3333333 8.5 16" />{" "}
          </svg>

          <Link
            className={selected == 5 ? "navlink activelink" : "navlink"}
            to="/sales"
          >
            Sales
          </Link>
        </div>
        <div
          className={
            selected == 6 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {setseledcted(6);navigate('/company')}}
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            aria-labelledby="trendingUpIconTitle"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            color="#000"
            className={
              selected == 6
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="trendingUpIconTitle">Trending Up</title>{" "}
            <polyline points="3 17 9 11 13 15 20.405 7.595" />{" "}
            <path strokeLinecap="round" d="M20.4054613,7.59453873 L21,7" />{" "}
            <polyline points="21 10 21 7 18 7" />{" "}
          </svg>

          <Link
            className={selected == 6 ? "navlink activelink" : "navlink"}
            to="/company"
          >
            Company
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-50 my-10" ></div>
        <div onClick={()=>HandleLogOut()}  className="cursor-pointer absolute bottom-6 flex items-center pl-4 gap-2 mt-16" >
            <img className="w-6 " src={out} alt="..." />
            <button className="text-white text-base hidden md:block" >Deconecte</button>
        </div>
      </div>
      
    </div>
  );
}

export default SideBar;
