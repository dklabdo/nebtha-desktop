import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import def from "../assets/image/icon/addImage.svg";
import img from "../assets/image/download.png";
import add from "../assets/image/icon/add.svg";
import axios from "axios";
import Swal from "sweetalert2";
import out from "../assets/image/icon/out.svg";

import { AppContext } from "../AppProvider";
function HomePage() {
  const [addHint, setaddHint] = useState(false);
  const { homeSelectedInsert ,adminRole} = useContext(AppContext);
  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto flex flex-col">
      <NavBar home={true} commerce={adminRole != 1}  />
      {homeSelectedInsert == 1 && <HomeNews />}
      {homeSelectedInsert == 2 && <HomePromotion />}
      {homeSelectedInsert == 3 && <HomePromotion />}
    </div>
  );
}

function HomeNews() {
  function countWord(string) {
    return string.split(" ").length - 1;
  }
  const [news, setnews] = useState([]);
  const [isAdded, setisAdded] = useState(false);
  function imageAdded() {
    setisAdded(!isAdded);
  }
  useEffect(() => {
    axios
      .get("https://nebta.onrender.com/api/news")
      .then((res) => setnews(res.data.data.newss))
      .catch((err) => console.log(err));
  }, [isAdded]);

  return (
    <div className="w-full px-8">
      <Info />
      <h1 className="mt-4 ml-4 text-lg  font-semibold">A la une</h1>
      <div className="w-full my-4  max-w-full    flex gap-4 ">
        <AddImagege endPoint="news" imageAdded={imageAdded} />
        <div className="flex overflow-x-auto gap-4">
          {news.map((item, index) => {
            return <DisplayImage key={index} image={item.Image} />;
          })}
        </div>
      </div>

      <div className="my-16 mx-4 flex justify-between items-center">
        <h1 className="ml-2 text-lg font-semibold">Conseil du jour</h1>
        <button className="py-2 px-8 flex items-center gap-4  text-main text-base rounded-full cursor-pointer border-2 border-main bg-white ">
          <img className="w-10" src={add} alt="..." />
          Ajouter un conseil
        </button>
      </div>
      <Hints />
    </div>
  );
}
function HomePromotion() {
  function countWord(string) {
    return string.split(" ").length - 1;
  }

  const { setAjouterCodePromo } = useContext(AppContext);

  const [offre, setoffre] = useState([]);
  const [codePromo, setcodePromo] = useState([]);
  const [isAdded, setisAdded] = useState(false);
  function imageAdded() {
    setisAdded(!isAdded);
  }

  useEffect(() => {
    axios
      .get("https://nebta.onrender.com/api/offredePromotion")
      .then((res) => setoffre(res.data))
      .catch((err) => console.log(err));
  }, [isAdded]);
  useEffect(() => {
    axios
      .get("https://nebta.onrender.com/api/codePromo")
      .then((res) => setcodePromo(res.data))
      .catch((err) => console.log(err));
  }, [isAdded]);

  return (
    <div className="w-full px-8">
      <Info />
      <h1 className="mt-4 ml-4 text-lg  font-semibold">Offre et promotion</h1>
      <div className="w-full my-4  max-w-full    flex gap-4 ">
        <AddImagege endPoint="offredePromotion" imageAdded={imageAdded} />
        <div className="flex flex-row-reverse overflow-x-auto gap-4">
          {offre.map((item, index) => {
            return <DisplayImage key={index} image={item.Image} />;
          })}
        </div>
      </div>
      <div className="my-16 mx-4  flex justify-between items-center">
        <h1 className="ml-2 text-lg font-semibold">Code promo</h1>
        <button
          onClick={() => setAjouterCodePromo(true)}
          className="py-2 px-8 flex items-center gap-4  text-main text-base rounded-full cursor-pointer border-2 border-main bg-white "
        >
          <img className="w-10" src={add} alt="..." />
          Ajouter un code promo
        </button>
      </div>
      <div className="w-full my-4  max-w-full    flex gap-4 ">
        <div className="flex flex-row-reverse overflow-x-auto gap-4">
          {codePromo.map((item, index) => {
            return <DisplayImage key={index} image={item.Image} />;
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

function HomeArticle(){
  return(
    <h1>artcile page</h1>
  )
}

function Info() {
  return (
    <div className="w-full gap-4 mx-2  flex items-center my-8">
      <svg
        className=""
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48px"
        viewBox="0 0 24 24"
        aria-labelledby="infoIconTitle"
        stroke="#3C615A"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        color="#3C615A"
      >
        {" "}
        <title id="infoIconTitle">
          Information
        </title> <path d="M12,12 L12,15" />{" "}
        <line x1="12" y1="9" x2="12" y2="9" /> <circle cx="12" cy="12" r="10" />{" "}
      </svg>
      <p>
        veuillez inserer le creative prblicitaire en format png en haute 100*57
      </p>
    </div>
  );
}

function AddImagege({ imageAdded, endPoint }) {
  function HandleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleAddImage(file);
  }
  function HandleFileChange(e) {
    e.preventDefault();
    const file = e.target.files[0];

    handleAddImage(file);
  }

  function handleAddImage(file) {
    console.log(file);

    if (file) {
      console.log("test");
      const reader = new FileReader();
      reader.onload = () => {
        axios
          .post(`https://nebta.onrender.com/api/${endPoint}`, {
            Image: reader.result,
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Votre Creative est ajouter avec succes",
              showConfirmButton: false,
              timer: 2000,
            });
            imageAdded();
          })
          .catch((err) => {
            console.log(err);
          });
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="min-w-[240px]   h-[230px] flex-col">
      <div
        onDrop={(e) => HandleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
        className="w-full relative rounded-3xl flex border-2 border-gray-500 border-solid h-full "
      >
        <label
          className={`z-20 justify-center items-center gap-4 flex flex-col py-2  w-full  text-center text-base   text-black/70  rounded-full cursor-pointer `}
          htmlFor="addFile"
        >
          <img className="w-28 my-2" src={def} alt="..." />
          Ajouter une image
        </label>

        <input
          onChange={(e) => HandleFileChange(e)}
          type="file"
          className="hidden"
          id="addFile"
        />
      </div>
    </div>
  );
}

function DisplayImage({ image }) {
  return (
    <div
      className={`min-w-[440px] mb-4 rounded-2xl object-contain   h-[240px]`}
    >
      <img src={image} className="w-[440px]  h-[240px] rounded-2xl  " />
    </div>
  );
}

function Hints() {
  return <div className="w-full h-[500px] "></div>;
}

export function AjouterCodePromo() {
  const { AjouterCodePromo, setAjouterCodePromo } = useContext(AppContext);
  const [file, setfile] = useState(null);
  const [url, seturl] = useState(null);
  const [codePromo,setcodePromo] = useState({
    Image : "",
    code : "",
    discount  : 0,
  })
  function HandleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setfile(file);
  }
  function HandleFileChange(e) {
    e.preventDefault();
    const file = e.target.files[0];

    setfile(file);
  }

  
  useEffect(() => {
    if (file) {
      console.log("test");
      const reader = new FileReader();
      reader.onload = () => {
        seturl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  function handleAddCodePromo(input){
    const { name,value} = input;
    setcodePromo({...codePromo, [name] : value})

  }
  function handleAddCodePromoSubmit(e){
    e.preventDefault()
    codePromo.Image  = url;
    console.log(codePromo);
    axios.post('https://nebta.onrender.com/api/codePromo',codePromo)
    .then(()=>{
      Swal.fire({
        icon: "success",
        title: "Votre code promo est ajouter avec succes",
        showConfirmButton: false,
        timer: 2000,
      });
      setAjouterCodePromo(false);

    })
    .catch((err)=>{
      console.log(err);
    })
    

  }

  return (
    <>
      {AjouterCodePromo && (
        <div className="w-full flex justify-center items-center h-screen absolute bg-black/50 z-30">
          <div className="h-[80%] relative w-[70%] pt-8 PopUp flex    rounded-3xl shadow-lg shadow-black/50  bg-white">
            <img
              onClick={() => setAjouterCodePromo(false)}
              src={out}
              className=" absolute cursor-pointer ml-8 w-12 rounded-full p-1 rotate-180"
            />
            <form onSubmit={(e)=>handleAddCodePromoSubmit(e)} className="flex  justify-center  flex-col w-[70%] my-20 mx-auto gap-2 ">
              <label className="text-lg text-main pl-2 " htmlFor="code">
                Le code Promo
              </label>
              <input
                className="appearance-none p-4 bg-white border-2 border-main rounded-full"
                id="code"
                type="text"
                placeholder="FIRSTBUY"
                onChange={(e)=>{handleAddCodePromo(e.target)}}
                name="code"
              />
              <label className="text-lg text-main pl-2 " htmlFor="discount">
                Discount
              </label>
              <input
                maxLength={2}
                className="appearance-none p-4 bg-white border-2 border-main rounded-full"
                id="discount"
                type="number"
                placeholder="example -20%"
                onChange={(e)=>{handleAddCodePromo(e.target)}}
                name="discount"

              />
              <label className="text-lg text-main pl-2 " htmlFor="discount">
                Creative
              </label>
              <div
                onDrop={(e) => HandleDrop(e)}
                onDragOver={(e) => e.preventDefault()}
                className={`w-full  justify-center relative rounded-3xl flex  border-solid h-[250px]`}
              >
                {file ? <img src={url} alt="..." />  : <label
                  className={`z-20 justify-center items-center gap-4 flex flex-col py-2  w-full  text-center text-base   text-black/70  rounded-full cursor-pointer `}
                  htmlFor="addFile"
                >
                  <img className="w-28 my-2" src={def} alt="..." />
                  Ajouter une image
                </label>}

                <input
                  onChange={(e) => HandleFileChange(e)}
                  type="file"
                  className="hidden"
                  id="addFile"
                />
              </div>
              <button type="submit" className="my-4 bg-main py-3 rounded-full text-white text-base">
                Ajouter un code promo
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
