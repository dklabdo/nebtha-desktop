import {React, useState , useEffect} from "react";
import { createContext } from "react";
import app from "./firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ApiLink } from "./Components/Data";
const auth = getAuth(app);
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AppContext = createContext();

function AppProvider(props) {
  // admin information //
  const [admin, setAdmin] = useState({
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
    setlogstate(true);
    console.log(admin);
    axios.post('https://nebta-7.onrender.com/api/auth/login',admin)
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
    role: "",
  })

 }
 //get the image of the product //

 const [file, setfile] = useState(null);


 //Product segment the shcema and the function of ADD PRODUCT //
 const [product,setproduct] = useState({
  Image : null,
  ProductName : "",
  ProductScientificName : "",
  ProductArabicName : "",
  Productdesc : "",
  stock : 0,
  Productdesc : null,
  PromotionPrice : null,
  Promotion : false ,
  Indication : [],
  ContreIndication : [],
  Propriete : "",
  ModeUtilisation : "",
  Precaution : "",
  aromatherapie : false,
  epicerie : false,
 })
 const [url, seturl] = useState(null);


 //when the user click add product a async function start so to dont have a spam case the button wil became in pending station true //
 const [iSproductAddPending,setiSproductAddPending] = useState(null)
 //when the user click add product a async function start so to dont have a spam case the button wil became in pending station true //
 const [iSModifieProductPending,setiSModifieProductPending] = useState(null)
 //handle wehn the user is typing //
 function HandleAddProduct(input){
  const { name,value} = input;
  setproduct({...product, [name] : value})

 }
 //handle when the user chek the box pour les maladie et les pathologie 

 function HandleChekBoxChange(checkbox){
  const {checked , name} = checkbox;
  setproduct({...product,[name] : checked});

 }

 //hndle when the user add a file of the product image //



 

 //add product handling //

 function HandleAddProductSubmit(e){
  e.preventDefault();
  product.Image = url;


  
  setiSproductAddPending(true)
  const ApiUrl = `${ApiLink}/api/product`
  axios.post(ApiUrl,product).then(()=>{
    setiSproductAddPending(false);
    Swal.fire({
      icon: "success",
      title: "Votre prouduit est ajouter avec succes",
      showConfirmButton: false,
      timer: 2000
    });
    setAddProduct(!AddProduct)
    setfile(null)
    seturl(null)
  }).catch((err)=>{
    console.error(err.message);
  })
 }
 
 // boolean to display the product info page //
 const [ProductDisplay,setProductDisplay] = useState(true)
 //for the product info to specifiy the product to display on the screen //

 const [CurrentProductInfoDisplay,setCurrentProductInfoDisplay] = useState(null)
 // boolean to display the update page //

 const [UpdateProduct,setUpdateProduct] = useState(false);
 // current product to modifie stock and price //

 const [CurrentStockAndPrice,setCurrentStockAndPrice] = useState(0);
  // current product to modifie //

 const [CurrentProductToModifie,setCurrentProductToModifie] = useState(null)
 //handle wehn the user is typing //

 const [urlToModifie, seturlToModifie] = useState(null);


 function HandleModifieProduct(input){
  const { name,value} = input;
  setCurrentProductToModifie({...CurrentProductToModifie, [name] : value})

 }

 function HandleChekBoxModifyChange(checkbox){
  const {checked , name} = checkbox;
  console.log(name);
  console.log(checked);
  setCurrentProductToModifie({...CurrentProductToModifie,[name] : checked});
  console.log(CurrentProductToModifie);

 }
 
 function HandleModifieProductSubmit(e,ModifieId){
  e.preventDefault();
  setiSModifieProductPending(true)
  const ApiUrl = `${ApiLink}/api/product/${ModifieId}`
  console.log(CurrentProductToModifie);
  const {Image,epicerie,aromatherapie,Precaution,ModeUtilisation,Propriete,ContreIndication,ProductName,ProductScientificName,ProductArabicName,Productdesc,Indication} = CurrentProductToModifie

  const ProductToModifie = {
    Image : urlToModifie == null ? Image : urlToModifie,
    epicerie :epicerie,
    aromatherapie :aromatherapie,
    Precaution : Precaution,
    ModeUtilisation : ModeUtilisation,
    Propriete : Propriete,
    ContreIndication : ContreIndication,
    ProductName : ProductName,
    ProductScientificName : ProductScientificName,
    ProductArabicName : ProductArabicName,
    Productdesc : Productdesc,
    Indication : Indication,
  }
  
  axios.patch(ApiUrl,ProductToModifie).then(()=>{
    setiSproductAddPending(false);
    Swal.fire({
      icon: "success",
      title: "Votre prouduit est modifier avec succes",
      showConfirmButton: false,
      timer: 2000
    });
    setModifieProduct(!ModifieProduct)
    navigate("/product");
    
  }).catch((err)=>{
    console.error(err.message);
  })

  
 }


const [ModifieProduct,setModifieProduct] = useState(false)
const [AddProduct,setAddProduct] = useState(false)

 
const [deleted,setdeleted] = useState(false)
const [ProductData,setProductData] = useState([]);
const geturl = `${ApiLink}/api/product`


 useEffect(()=>{
  axios.get(geturl)
  .then((res)=>{
      setProductData(res.data);
  })
  .catch((err)=>{
    console.error(err);
  })
},[deleted,UpdateProduct,ModifieProduct,AddProduct])


const [homeSelectedInsert,setHomeSelectedInsert] = useState(1)

const [AjouterCodePromo,setAjouterCodePromo] = useState(false)

 
  return (
    <AppContext.Provider value={{AjouterCodePromo,setAjouterCodePromo,homeSelectedInsert,setHomeSelectedInsert,ProductData,url,setCurrentProductToModifie, seturl,HandleChekBoxModifyChange,deleted,setdeleted,HandleModifieProduct,iSModifieProductPending,HandleModifieProductSubmit,CurrentProductToModifie,setCurrentProductToModifie,CurrentStockAndPrice,setCurrentStockAndPrice,UpdateProduct,setUpdateProduct,CurrentProductInfoDisplay,setCurrentProductInfoDisplay,ProductDisplay,setProductDisplay,iSproductAddPending, HandleChekBoxChange ,  HandleAddProductSubmit, HandleAddProduct,product,setproduct ,file, setfile,HandleChange,admin,signed,logstate, HandleLogOut,urlToModifie, seturlToModifie ,HandleSubmit,setshow,show }}>{props.children}</AppContext.Provider>
  );
}

export default AppProvider;
