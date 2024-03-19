import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppProvider";
import def from "../assets/image/default-image.jpg";
import { maladieChronique, pathologie } from "../Components/Data";
import { Button } from "@material-tailwind/react";

function AddProduct() {
  const {iSproductAddPending, HandleFileSubmit, HandleAddProductSubmit, file, setfile } =
    useContext(AppContext);
  const [url, seturl] = useState(null);
  function HandleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    HandleFileSubmit(file);
    setfile(file);
  }
  function HandleFileChange(e) {
    e.preventDefault();
    const file = e.target.files[0];
    HandleFileSubmit(file);
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

  return (
    <>
      {
        <div className="px-8 lg:px-24 py-6 h-screen overflow-y-scroll w-full flex flex-col ">
          <form onSubmit={(e)=>HandleAddProductSubmit(e)}>
          <div className="flex gap-8 ">
            <div className="flex flex-col   w-fit ">
              <div
                onDrop={(e) => HandleDrop(e)}
                onDragOver={(e) => e.preventDefault()}
                className="cursor-move w-72 h-72 flex justify-center items-center border-dashed mb-2 mt-8 rounded-2xl border-2 border-main"
              >
                <img
                  src={url == null ? def : url}
                  className="object-contain w-full rounded-2xl"
                />
              </div>
              <label
                className="self-center w-full text-center text-main  underline rounded-full cursor-pointer"
                htmlFor="addFile"
              >
                Ajouter une photo
              </label>
              <input
                onChange={(e) => HandleFileChange(e)}            
                type="file"
                className="hidden"
                id="addFile"
              />
              
            </div>
            <div className="w-full h-72 my-4  py-2">
              <InputField
                type="text"
                name="ProductName"
                label="Nom du prouduit"
                placeholder="zinginber"
              />
              <InputField
                label="Nom scietific du prouduit"
                placeholder="zinginber"
                name="ProductScientificName"
                type="text"
              />
              <InputField
                type="text"
                name="ProductArabicName"
                label="اسم المنتج"
                placeholder="الزنجبيل"
              />
              <InputField
                type="number"
                name="Price"
                label="Prix"
                placeholder="3500DA"
              />
            </div>
          </div>
          <div className="w-full my-10 flex gap-6  ">
            <ChoiceMenu id="c1" state={true} label="Ajouter des indication" />
            <ChoiceMenu
              id="c2"
              state={false}
              label="Ajouter des contre indication"
            />
          </div>
          <div className="text-base my-4 flex justify-between px-3" >
            <h2>Category :</h2>
            
            <ChekBox label="Aromathérapie" name="aromatherapie" />
            <ChekBox label="Algues" name="algue" />
            <ChekBox label="Épicerie" name="epicerie" />
          </div>
          <div className="w-full grid-cols-2  gap-6  py-2">
            <TextArea
              name="ProductDesc"
              label="Description du prouduit"
              placeholder=""
            />
            <TextArea name="Propriete" label="Proprietes" placeholder="" />
            <TextArea
              name="ModeUtilisation"
              label="Mode d'utilisation"
              placeholder=""
            />
            <TextArea
              name="Precaution"
              label="precautions d'emploi"
              placeholder=""
            />
          </div>
          <div className="flex my-2">
            {!iSproductAddPending ? (<button
              type="submit"
              className="bg-main text-white px-6 py-3 rounded-full my-6  mx-auto "
            >
              Ajouter le prouduit
            </button>) : (<Button className="rounded-full px-20  w-fit mx-auto  text-base py-4 my-6 font-medium " loading={true}>
             <></> 
            </Button>)}
          </div>

          </form>
          
        </div>
      }
    </>
  );
}

function InputField({ name, type, placeholder, label }) {
  const { HandleAddProduct } = useContext(AppContext);
  return (
    <div className="-space-y-4 h-fit my-2 w-full flex flex-col ">
      <label className="ml-4 px-2 my-1 bg-white z-10 w-fit text-main">
        {label}
      </label>
      <input
        className="py-[10px] pl-4 border-2 outline-none focus:border-main border-black/50 bg-white px-2 rounded-full"
        placeholder={placeholder}
        type={type}
        onChange={(e) => HandleAddProduct(e.target)}
        name={name}
        required
      />
    </div>
  );
}

function ChekBox({ name, label }) {
  const { HandleChekBoxChange } = useContext(AppContext);

  return (
    <div className="flex  items-center gap-2">
      <input onChange={(e)=>HandleChekBoxChange(e.target)} className="border-2  border-main w-5 h-5 rounded-full checked:bg-main  appearance-none" name={name} id={label} type="checkbox" />

      <label className="text-base cursor-pointer text-main" htmlFor={label}>{label}</label>
    </div>
  );
}

function TextArea({ name, placeholder, label }) {
  const { HandleAddProduct } = useContext(AppContext);
  return (
    <div className="-space-y-4  my-2  flex flex-col ">
      <label className="ml-4 px-2 my-1 bg-white z-10 w-fit text-main">
        {label}
      </label>
      <textarea
        className="py-[20px] min-h-52 speacialScroll pt-6   h-fit px-4  outLine  border-black/50 bg-white rounded-xl"
        placeholder={placeholder}
        name={name}
        required
        onChange={(e) => HandleAddProduct(e.target)}
      />
    </div>
  );
}

function ChoiceMenu({ label, state, id }) {
  const [selected, setselected] = useState([]);
  const { product } = useContext(AppContext);
  function HandleSelect(val) {
    if (!selected.includes(val + 1)) {
      selected.push(val + 1);
    } else if (selected.includes(val + 1)) {
      selected.splice(selected.indexOf(val + 1), 1);
    }
    setselected(selected);
    if (state) {
      product.Indication = selected.sort();
    } else {
      product.ContreIndication = selected.sort();
    }
  }

  return (
    <div className="h-96 w-1/2 p-1">
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="pl-2 my-2 text-base text-main pr-4 flex items-center justify-between border-main w-full  py-2 text-start rounded-full"
      >
        {label}
      </button>

      <div className="overflow-y-auto outLine    border-2 border-transparent   speacialScroll rounded-2xl shadow-black/50 h-80 max-h-96 p-4 ">
        {state
          ? pathologie.map((e, index) => {
              return (
                <div
                  key={index}
                  className="py-1 px-2  transition rounded-xl hover:bg-blue-gray-50 items-center flex gap-3"
                >
                  <input
                    onChange={() => {
                      HandleSelect(index);
                    }}
                    className={` border-2  border-main w-4 h-4 rounded-full checked:bg-main  appearance-none`}
                    id={`${id + index}`}
                    type="checkbox"
                  />
                  <label
                    className="cursor-pointer py-2 h-full w-full"
                    htmlFor={`${id + index}`}
                  >
                    {e}
                  </label>
                </div>
              );
            })
          : maladieChronique.map((e, index) => {
              return (
                <div
                  key={index}
                  className="py-1 px-2  transition rounded-xl hover:bg-blue-gray-50 items-center flex gap-3"
                >
                  <input
                    onChange={() => {
                      HandleSelect(index);
                    }}
                    className={` border-2  border-main w-4 h-[15px] rounded-full checked:bg-main  appearance-none`}
                    id={`${id + index}`}
                    type="checkbox"
                  />
                  <label
                    className="cursor-pointer py-2 h-full w-full"
                    htmlFor={`${id + index}`}
                  >
                    {e}
                  </label>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default AddProduct;
