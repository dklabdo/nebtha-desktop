import { React, useContext, useState } from "react";
import logo from "../assets/image/logo2.png";
import icon2 from "../assets/image/icon/mail.svg";
import icon3 from "../assets/image/icon/hide.svg";
import icon4 from "../assets/image/icon/show.svg";
import { Button } from "@material-tailwind/react";

import { AppContext } from "../AppProvider";

function LogInPage() {
  const { logstate, HandleSubmit, show } = useContext(AppContext);
  return (
    <div className="h-screen   bg w-full ">
      <div className="w-full flex justify-center items-center h-screen bg-main/40">
      <div className=" w-[40%] gap-20 flex-col justify-center z-10 h-[80%] rounded-3xl items-center flex  ">
        <img src={logo} className="w-96" />
        <form
          onSubmit={(e) => HandleSubmit(e)}
          className="px-2  flex flex-col md:px-6 w-[90%]  mx-auto"
        >
          
          <Input
            possible={true}
            active={false}
            name="email"
            icon={icon2}
            placeholder="e-mail"
            type="email"
            
          />
          <Input
            possible={true}
            active={true}
            name="password"
            icon={show ? icon3 : icon4}
            placeholder="password"
            type={show ? "text" : "password"}
          />
          
        </form>
        {logstate == true ? (
            <Button className="rounded-full px-28  text-base py-[20px] font-medium " loading={true}>
             <></> 
            </Button>
          ) : (
            <button
              type="submit"
              onClick={(e) => HandleSubmit(e)}
              className="px-24   text-base py-3 transition font-medium hover:bg-main hover:text-white mx-auto text-main border-2 border-main rounded-full bg-white"
            >
              Log In
            </button>
          )}
       
      </div>

      </div>
    </div>
  );
}

function Input({ name, placeholder, icon, type, active, possible }) {
  const { logstate, HandleChange, setshow, show } = useContext(AppContext);

  function HandleShow(e) {
    if (active) {
      setshow(!show);
    }
  }
  return (
    <div className="w-full    my-4 flex  -space-x-14 z-10">
      <img
        className={`w-6 my-2 mx-auto ${active && "cursor-pointer"}`}
        onClick={(e) => HandleShow(e)}
        src={icon}
        alt="..."
      />

      <input
        id={icon}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(e) => HandleChange(e.target)}
        className={`shadow-black/50 bg-white pl-14 -z-10 focus:border-main border-2   py-7 relative outline-none w-full h-10 rounded-full transition    shadow-sm px-4  placeholder:text-black/60 ${
          logstate == false && possible
            ? "text-red-300 "
            : ""
        }`}
      />
    </div>
  );
}

export default LogInPage;
