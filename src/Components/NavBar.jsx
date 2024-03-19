import React, { useContext } from "react";
import search from "../assets/image/icon/search.svg";
import profile from "../assets/image/profile.png";
import  { AppContext } from "../AppProvider";
function NavBar() {
  const {ProductDisplay,setProductDisplay} = useContext(AppContext);
  return (
    <div className="flex my-4 justify-between items-center w-full p-6 h-20 ">
      <div className="flex gap-6">
        <svg
          width="28"
          height="28"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>setProductDisplay(true)}
        >
          <path
            d="M0 15.5556V0H15.5556V15.5556H0ZM0 35V19.4444H15.5556V35H0ZM19.4444 15.5556V0H35V15.5556H19.4444ZM19.4444 35V19.4444H35V35H19.4444ZM3.88889 11.6667H11.6667V3.88889H3.88889V11.6667ZM23.3333 11.6667H31.1111V3.88889H23.3333V11.6667ZM23.3333 31.1111H31.1111V23.3333H23.3333V31.1111ZM3.88889 31.1111H11.6667V23.3333H3.88889V31.1111Z"
            fill={ProductDisplay ? `#3C615A` : '#92ADA9'}
          />
        </svg>
        <svg
          width="28"
          height="28"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>setProductDisplay(false)}

        >
          <path
            d="M12.25 30.625H31.5V24.7734H12.25V30.625ZM3.5 10.2266H8.75V4.375H3.5V10.2266ZM3.5 20.4531H8.75V14.6016H3.5V20.4531ZM3.5 30.625H8.75V24.7734H3.5V30.625ZM12.25 20.4531H31.5V14.6016H12.25V20.4531ZM12.25 10.2266H31.5V4.375H12.25V10.2266ZM3.5 35C2.5375 35 1.71354 34.5716 1.02812 33.7148C0.342708 32.8581 0 31.8281 0 30.625V4.375C0 3.17187 0.342708 2.14193 1.02812 1.28516C1.71354 0.428385 2.5375 0 3.5 0H31.5C32.4625 0 33.2865 0.428385 33.9719 1.28516C34.6573 2.14193 35 3.17187 35 4.375V30.625C35 31.8281 34.6573 32.8581 33.9719 33.7148C33.2865 34.5716 32.4625 35 31.5 35H3.5Z"
            fill={!ProductDisplay ? `#3C615A` : '#92ADA9'}
          />
        </svg>
      </div>
      <div className=" flex items-center -space-x-12 w-[48%]  h-fit ">
          <input className="bg-white pl-4 outline-none border-2 w-full  border-main py-3 px-2 rounded-full" type="text" placeholder="enter product name or id" />
          <button className="bg-main rounded-full p-1">
            <img src={search} alt="..." className="w-7 z-10" />
          </button>
      </div>
      <div className="h-fit w-fit  ">
          <div className="w-fit pr-6 p-2 flex gap-2 items-center h-full rounded-full  bg-card">
              <img src={profile} className="w-12 bg-main rounded-full" />
              <div className="px-1">
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
