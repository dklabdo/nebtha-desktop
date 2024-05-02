import axios from "axios"
async function GetData(){
    const re = await axios.get('https://biofyta.onrender.com/api/product')
    const data = await re.data.JSON();
    console.log("data");
    console.log(data);
}