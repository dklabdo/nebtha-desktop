import React from "react";


function SuperAdmin() {
  return (
    <div className="w-full  px-10 overflow-y-auto h-screen py-2">
      <form className="flex px-20 flex-col justify-center">
        <div className="mx-auto my-24 w-48 h-48 rounded-full bg-gray-200"></div>
        <input
          className="py-4 outline-none px-4 bg-gray-200 border-2 focus:border-main rounded-full my-4"
          type="text"
          placeholder="nom d'employer"
        />
        <input
          className="py-4 outline-none px-4 bg-gray-200 border-2 focus:border-main rounded-full my-4"
          type="email"
          placeholder="email d'employer"
        />
        <input
          className="py-4 outline-none px-4 bg-gray-200 border-2 focus:border-main rounded-full my-4"
          type="password"
          placeholder="cree un mot de pass"
        />
        <select className="py-4 outline-none bg-white px-4 rounded-full">
          <option className="py-10 appearance-none" value="chercheur">chercheur</option>
          <option className="py-10 appearance-none" value="e-commerce">e-commerce</option>
        </select>
       
      </form>
    </div>
  );
}

export default SuperAdmin;
