import {React, useState} from "react";
import { createContext } from "react";
import app from "./firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

import { useNavigate } from "react-router-dom";

import { ProductData } from "./Components/Data";
export const AppContext = createContext();

function AppProvider(props) {
  // admin information //
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // signed stand for a boolean set to true after the admin loged successfuly into the app //
  const [signed, setsigned] = useState(false);
  // log state to optmize the ux by telling the admin if there is an error in the login or not //
  const [logstate, setlogstate] = useState(null);
  //handle in put change get data from user //
  function HandleChange(inputValue) {
    const { name, value } = inputValue;
    setlogstate(null);
    setAdmin({...admin , [name] : value });
  }
  // the submit action //
  function HandleSubmit(e) {
    e.preventDefault();
    setlogstate(true)
    signInWithEmailAndPassword(auth, admin.email, admin.password)
      .then((res) => {
        setsigned(true);
        navigate("/addProduct");
        console.log(res.user.reloadUserInfo.localId);
      })
      .catch((err)=>{
        console.error(err);
        setlogstate(false)
      })
  }

  const [show,setshow] = useState(false);

 function HandleLogOut(){
  console.log("out");
  navigate('/');
  setsigned(false);
  setlogstate(null);
  setAdmin({
    username: "",
    email: "",
    password: "",
  })

 }
 //get the image of the product //

 const [file, setfile] = useState(null);


 //Product segment the shcema and the function of ADD PRODUCT //
 const [product,setproduct] = useState({
  id : null,
  Image : null,
  ProductName : "",
  ProductScientificName : "",
  ProductArabicName : "",
  ProductDesc : "",
  stock : 0,
  Price : null,
  Indication : [],
  ContreIndication : [],
  Propriete : "",
  ModeUtilisation : "",
  Precaution : "",
  aromatherapie : false,
  algue : false,
  epicerie : false,
 })
 const [iSproductAddPending,setiSproductAddPending] = useState(null)

 function HandleAddProduct(input){
  const { name,value} = input;
  setproduct({...product, [name] : value})

 }

 function HandleChekBoxChange(checkbox){
  const {checked , name} = checkbox;
  setproduct({...product,[name] : checked});

 }

 function HandleFileSubmit(file){
  setiSproductAddPending(false);
  if(file){
    
    setproduct({...product,Image : file})
  }
 }

 function HandleAddProductSubmit(e){
  e.preventDefault();
  ProductData.push(product);
  
  console.log(ProductData);

 }
 const [ProductDisplay,setProductDisplay] = useState(true)
 const [CurrentProductInfoDisplay,setCurrentProductInfoDisplay] = useState(null)




  return (
    <AppContext.Provider value={{CurrentProductInfoDisplay,setCurrentProductInfoDisplay,ProductDisplay,setProductDisplay,iSproductAddPending, HandleChekBoxChange , HandleFileSubmit, HandleAddProductSubmit, HandleAddProduct,product,setproduct ,file, setfile,HandleChange,admin,signed,logstate, HandleLogOut ,HandleSubmit,setshow,show }}>{props.children}</AppContext.Provider>
  );
}

export default AppProvider;
