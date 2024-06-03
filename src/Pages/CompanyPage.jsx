import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
import Chart from "react-google-charts";
import axios from "axios";
function CompanyPage() {
  const [stat,setstat] = useState([])
  const { analyticDisplay } = useContext(AppContext);
  useEffect(() => {
    axios.get('https://nebthadatascience.onrender.com/analyse-product')
    .then((res) => {
      console.log(res.data);
      setstat(res.data)

    })
    .catch((err) => {
      console.error(err);
    })
  } , [])
  return (
    <>
      {
        <div className=" h-screen w-full p-4 overflow-y-auto">
          <NavBar analytic={true} />
          {analyticDisplay == 1 && <ClientAnalytics />}
          {analyticDisplay == 2 && <SalesAnalytics />}
        </div>
      }
    </>
  );
}

function ClientAnalytics() {
  const data = [
    [
      "Maladie Cronique",
      "Asthme",
      "cancer",
      "Diabète",
      "Épilepsie",
      "Hypertension artérielle ",
      "Hypercholestérolémie ",
      "Insuffisance hépatique",
      "Insuffisance rénale ",
      "Troubles cardiaques",
      "Troubles de la coagulation",
    ],
    ["Client", 65, 42, 142, 64, 140, 32, 2, 78, 100, 1],
  ];

  const options = {
    chart: {
      title: "Les maladies cronique de toute les clients",
      subtitle: "total : 142 ",
    },
  };
  return (
    <div className="px-8 my-10">
      <Chart
        chartType="Bar"
        width="100%"
        height="700px"
        data={data}
        options={options}
      />
    </div>
  );
}
function SalesAnalytics() {
  const data = [
    ["Year", "Sales"],
    ["Jan", 14],
    ["Fev", 20],
    ["Mars", 21],
    ["Avr", 19],
    ["Mai", 32],
    ["Juin", 14],
    ["Juil", 12],
    ["Aout", 10],
    ["Sep", 28],
    ["Oct", 56],
    ["Nov", 54],
    ["Dec", 82],
  ];

  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <div className="px-8 ">
      <Chart
        chartType="LineChart"
        width="100%"
        height="700px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default CompanyPage;
