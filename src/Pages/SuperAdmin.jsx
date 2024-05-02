import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import axios from "axios";
import out from "../assets/image/icon/out.svg";
import { AppContext } from "../AppProvider";
import camera from "../assets/image/icon/camera.svg";
import { role } from "../Components/Data";
import Swal from "sweetalert2";

function SuperAdmin() {
  const [admins, setadmins] = useState([]);
  const {newAdmin, deleatAdmin, setAddAdmin } = useContext(AppContext);
  

  useEffect(() => {
    axios
      .get("https://nebta.onrender.com/api/admin/AllAdmin")
      .then((res) => setadmins(res.data))
      .catch((err) => console.error(err));
  }, [newAdmin,deleatAdmin]);
  return (
    <div className="p-6  w-full h-screen overflow-y-auto">
      <NavBar searchBar={true}  />
      <div className="flex justify-between px-6 py-8 items-center">
        <h1 className="text-xl font-semibold">Admins</h1>
        <button
          onClick={() => setAddAdmin(true)}
          className="py-2 px-8 flex items-center gap-4  text-main text-base rounded-full cursor-pointer border-2 border-main bg-white"
        >
          Ajouter un admin
        </button>
      </div>
      {admins.map((admin, index) => {
        
        return (
          <>
            {admin.role != 0 && (
              <AdminCard key={index} admin={admin} />
            )}
          </>
        );
      })}
    </div>
  );
}

function AdminCard({ admin }) {
  const {deleatAdmin,setdeleatAdmin} = useContext(AppContext);
  function DeleatAdmin(id) {
    console.log(id);
    axios
      .delete(`https://nebta.onrender.com/api/admin/${id}`)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Admin suprimer avec succes",
          showConfirmButton: false,
          timer: 2000,
        });
        setdeleatAdmin(!deleatAdmin)
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className=" w-full h-48 flex my-4">
      <div className="w-[20%]  h-full flex justify-center items-center">
        <img
          className="w-32 h-32 object-cover rounded-full"
          src={admin.avatar}
          alt="..."
        />
      </div>
      <div className="w-full relative  h-full">
        <button
          onClick={() => DeleatAdmin(admin._id)}
          className="flex items-center py-3 text-main hover:text-white group hover:bg-main border-2 border-main px-4 rounded-full gap-1 absolute right-8  top-8"
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            aria-labelledby="binIconTitle"
            stroke="#000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            className="stroke-main group-hover:stroke-white"
          >
            {" "}
            <title id="binIconTitle">Bin</title>{" "}
            <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />{" "}
          </svg>
          Suprimer
        </button>
        <h2 className="my-4 text-lg font-semibold  text-main">
          {admin.fullname}{" "}
        </h2>
        <h2 className="my-4 text-base font-medium  text-black">
          {role[admin.role]}{" "}
        </h2>
        <h2 className="my-4 text-base font-medium  text-black">
          {admin.email}{" "}
        </h2>
      </div>
    </div>
  );
}

export function AddAdmin() {
  const {newAdmin,setnewAdmin, AddAdmin, setAddAdmin } = useContext(AppContext);
  const [registerAdminData, setregisterAdminData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: 0,
    avatar: "",
  });
  const [file, setfile] = useState(null);
  const [url, seturl] = useState(null);
  const [pending,setpending] = useState(false)
  function HandleFileChange(e) {
    e.preventDefault();
    const file = e.target.files[0];

    setfile(file);
  }

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        seturl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  function HandleDataChange(data) {
    const { value, name } = data;
    console.log(value);
    setregisterAdminData({ ...registerAdminData, [name]: value });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    registerAdminData.avatar = url;
    console.log(registerAdminData);
    axios
      .post("https://nebta.onrender.com/api/admin", registerAdminData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Admin ajouter avec succes",
          showConfirmButton: false,
          timer: 2000,
        });
        setnewAdmin(!newAdmin)
        setAddAdmin(false);
        setfile(null)
        seturl(null)
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      {AddAdmin && (
        <div className="w-full z-10 absolute flex justify-center items-center bg-black/50  px-10 overflow-y-auto h-screen py-2">
          <div className="  py-8 PopUp rounded-3xl w-[70%] bg-white ">
            <img
              src={out}
              onClick={() => setAddAdmin(false)}
              className="relative cursor-pointer ml-8 w-12 rounded-full p-1 rotate-180"
            />

            <input
              onChange={(e) => HandleFileChange(e)}
              className="hidden"
              type="file"
              id="getImage"
            />
            <form
              onSubmit={(e) => HandleSubmit(e)}
              className="flex px-32 py-2 flex-col justify-center"
            >
              <label
                htmlFor="getImage"
                className="cursor-pointer mx-auto mb-4 flex justify-center  w-48 h-48 rounded-full bg-gray-200"
              >
                <img
                  src={url ? url : camera}
                  className={`${
                    url && "object-center object-cover w-full"
                  } w-20  rounded-full `}
                  alt="..."
                />
              </label>
              <input
                className="py-4 pl-6 placeholder:text-black/70 outline-none px-4 bg-gray-200 border-2 focus:border-main rounded-full my-4"
                type="text"
                placeholder="nom d'employer"
                name="fullname"
                onChange={(e) => HandleDataChange(e.target)}
              />
              <input
                className="py-4 pl-6 placeholder:text-black/70 outline-none px-4 bg-gray-200 border-2 focus:border-main rounded-full my-4"
                type="email"
                placeholder="email d'employer"
                name="email"
                onChange={(e) => HandleDataChange(e.target)}
              />
              <input
                className="py-4 pl-6 placeholder:text-black/70 outline-none px-4 bg-gray-200 border-2 focus:border-main rounded-full my-4"
                type="password"
                placeholder="cree un mot de pass"
                name="password"
                onChange={(e) => HandleDataChange(e.target)}
              />

              <select
                onChange={(e) => HandleDataChange(e.target)}
                name="role"
                className="py-4 pl-6 my-2 placeholder:text-black/70 outline-none bg-gray-200  px-4 rounded-full"
              >
                <option value="0" className="py-10  appearance-none">
                  {role[0]}
                </option>
                <option value="1" className="py-10 appearance-none">
                  {role[1]}
                </option>
                <option value="2" className="py-10 appearance-none">
                  {role[2]}
                </option>
                <option value="3" className="py-10 appearance-none">
                  {role[3]}
                </option>
              </select>
              <button
                type="submit"
                className="py-3 px-24  border-2 hover:bg-main hover:text-white border-main w-fit mx-auto bg-white rounded-3xl text-main text-base mt-12"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SuperAdmin;
