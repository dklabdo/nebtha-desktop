import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo2.png";
import logo2 from "../assets/image/logo-entreprice.svg";
import out from "../assets/image/icon/out.svg";
import { useNavigate } from "react-router-dom";
import cancel from "../assets/image/icon/exit.svg";

function SideBar() {
  const { HandleLogOut , adminRole } = useContext(AppContext);
  const navigate = useNavigate();

  function CurrentLink(value) {
    switch (value) {
      case "/addProduct":
        return 1;
        break;
      case "/home":
        return 2;
        break;adminRole
      case "/product":
        return 3;
        break;
      case "/stock":
        return 4;
        break;
      case "/client":
        return 5;
        break;
      case "/order":
        return 6;
        break;
      case "/sales":
        return 7;
        break;
      case "/company":
        return 8;
        break;
      case "/ProductInfo":
        return 7;
        break;
      case "/modifieProduct":
        return 8;
        break;
      case "/superAdmin":
        return 9;
        break;

      default:
        return 0;
        break;
    }
  }
  const location = useLocation();

  const [selected, setseledcted] = useState(CurrentLink(location.pathname));
  return (
    <div className="md:min-w-[290px] justify-between w-20 relative  flex flex-col  bg-main h-screen">
      <div className="pl-10">
      <img className="hidden md:block w-48 mt-10" src={logo} alt="..." />
      <img className="w-10 md:hidden mt-10" src={logo2} alt="..." />
      <div className="w-[80%] my-12">
        
        <div
          className={
            selected == 2 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {
            setseledcted(2);
            navigate("/home");
          }}
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
        {adminRole == 0 || adminRole == 1 || adminRole == 2 ? <div
          className={
            selected == 3 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {
            setseledcted(3);
            navigate("/product");
          }}
        >
          <svg
            width="22"
            height="30"
            stroke="#fff"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              selected == 3
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            <path
              d="M20.4512 2.66785C20.4858 3.05723 20.519 3.48262 20.5479 3.93903C20.6991 6.32048 20.7358 9.53283 20.2837 12.8723C19.3758 19.5773 16.5406 26.5392 9.03241 28.6377C7.99063 28.715 7.25174 28.5629 6.72927 28.3358C6.19992 28.1057 5.84238 27.7772 5.59248 27.4365C5.33716 27.0886 5.19033 26.7215 5.10816 26.4329C5.06762 26.2904 5.0444 26.1726 5.0316 26.0937C5.02523 26.0544 5.02153 26.0253 5.01958 26.0081L5.01791 25.9925L5.01787 25.9918L5.01779 25.991L5.01778 25.9908L4.96642 25.2751L4.21594 25.2341C4.21513 25.2341 4.21401 25.234 4.21257 25.2339C4.20567 25.2333 4.19173 25.232 4.17151 25.2295C4.13096 25.2246 4.06603 25.2152 3.9827 25.1982C3.8147 25.1639 3.58024 25.1004 3.32324 24.9852C2.8214 24.7604 2.22718 24.339 1.84703 23.5038L20.4512 2.66785ZM20.4512 2.66785C19.9004 3.40264 19.1104 4.18072 17.99 4.80233L17.99 4.80235C17.2158 5.23178 16.2053 5.55906 15.1153 5.87476C14.7583 5.97816 14.392 6.08054 14.0165 6.18546C13.2165 6.40904 12.3751 6.64419 11.4945 6.92543C8.92864 7.74488 6.18371 8.91195 3.90285 11.0797L3.90277 11.0798C1.66598 13.2049 0.924226 15.8006 0.857514 18.1365C0.790371 20.4874 1.40955 22.5426 1.84701 23.5038L20.4512 2.66785Z"
              fill=""
              stroke=""
              stroke-width="2"
            />
          </svg>

          <Link
            className={selected == 3 ? "navlink activelink" : "navlink"}
            to="/product"
          >
            Product
          </Link>
        </div> : <></> }
        {adminRole == 0 || adminRole == 2 ? <div
          className={
            selected == 4 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {
            setseledcted(4);
            navigate("/stock");
          }}
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
              selected == 4
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
            className={selected == 4 ? "navlink activelink" : "navlink"}
            to="/stock"
          >
            Stock
          </Link>
        </div>: <></>}
        {/* {adminRole == 0 || adminRole == 2 || adminRole == 3 ? <div
          className={
            selected == 5 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {
            setseledcted(5);
            navigate("/client");
          }}
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
              selected == 5
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="personIconTitle">Person</title>{" "}
            <path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20" />{" "}
          </svg>

          <Link
            className={selected == 5 ? "navlink activelink" : "navlink"}
            to="/client"
          >
            Client{" "}
          </Link>
        </div>: <></>} */}
        {adminRole == 0 || adminRole == 2 ? <div
          className={
            selected == 6 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {
            setseledcted(6);
            navigate("/order");
          }}
        >
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="transportIconTitle"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            color="#000"
            className={
              selected == 6
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="transportIconTitle">Transport</title>{" "}
            <path d="M4 17H2V7H15V17H8" />{" "}
            <path d="M20 17H22V12.5556L20 9H15V17H16" />{" "}
            <circle cx="6" cy="17" r="2" /> <circle cx="18" cy="17" r="2" />{" "}
          </svg>

          <Link
            className={selected == 6 ? "navlink activelink" : "navlink"}
            to="/order"
          >
            Order{" "}
          </Link>
        </div>: <></>}
        {/* {adminRole == 0 || adminRole == 2 || adminRole == 3 ? <div
          className={
            selected == 7 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {
            setseledcted(7);
            navigate("/sales");
          }}
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
              selected == 7
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="dolarIconTitle">Dolar</title>{" "}
            <path d="M12 4L12 6M12 18L12 20M15.5 8C15.1666667 6.66666667 14 6 12 6 9 6 8.5 7.95652174 8.5 9 8.5 13.140327 15.5 10.9649412 15.5 15 15.5 16.0434783 15 18 12 18 10 18 8.83333333 17.3333333 8.5 16" />{" "}
          </svg>

          <Link
            className={selected == 7 ? "navlink activelink" : "navlink"}
            to="/sales"
          >
            Sales
          </Link>
        </div>: <></>} */}
        {adminRole == 0 || adminRole == 2 ? <div
          className={
            selected == 8 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {
            setseledcted(8);
            navigate("/company");
          }}
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
              selected == 8
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
            className={selected == 8 ? "navlink activelink" : "navlink"}
            to="/company"
          >
            Statistique
          </Link>
        </div>: <></>}
        {adminRole == 0 ? <div
          className={
            selected == 9 ? "navcontainer group active" : "navcontainer group"
          }
          onClick={() => {
            setseledcted(9);
            navigate("/superAdmin");
          }}
        >
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="personAddIconTitle"
            stroke="#ffff"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
            color="#fff"
            className={
              selected == 9
                ? "w-7 group-hover:stroke-main activelink"
                : "w-7 group-hover:stroke-main"
            }
          >
            {" "}
            <title id="personAddIconTitle">Add user</title>{" "}
            <path d="M1 18C1 15.75 4 15.75 5.5 14.25C6.25 13.5 4 13.5 4 9.75C4 7.25025 4.99975 6 7 6C9.00025 6 10 7.25025 10 9.75C10 13.5 7.75 13.5 8.5 14.25C10 15.75 13 15.75 13 18" />{" "}
            <path d="M22 11H14" /> <path d="M18 7V15" />{" "}
          </svg>

          <Link
            className={selected == 9 ? "navlink activelink" : "navlink"}
            to="/superAdmin"
          >
            Admins
          </Link>
        </div>: <></>}
      </div>
      </div>
      <button onClick={() => HandleLogOut()} className="flex gap-4 bg-white text-main font-medium rounded-3xl  px-8 py-2 items-center w-fit my-6 ml-10 flex-row-reverse">
        Log-out
      <img
              src={cancel}
              
              className="w-7  rotate-180"
            />
      </button>
    </div>
  );
}

export default SideBar;
