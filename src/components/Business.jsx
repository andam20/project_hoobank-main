import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";



const FeatureCard = ({ icon, category, date, description, status, paid_back, amount, index, hiwa }) => (
  <div className={`flex flex-col p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`flex flex-row`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={`../src/assets/${hiwa}.png`} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {hiwa}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {date}
        </p>
      </div>
    </div>
    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[20px] pt-7 pl-2">
      {description}
    </p>
    <div className="flex flex-row pt-7 space-x-1">
      <div className={`rounded-[5px] border ${status === "Accepted" ? "border-green-500" : status==="Pending" ? "border-yellow-500" : "border-red-500"}  opacity-75`}>
        <p className={`font-poppins font-normal text-dimWhite text-[13px] m-1 ${status === "Accepted" ? "text-green-500" : status==="Pending"? "text-yellow-500" : "text-red-500"} `}>
          {status}
        </p>
      </div>

      <div className={` rounded-[5px]  border ${paid_back !== "Paid Back" ? "border-red-500" : "border-green-500"}  opacity-75`}>
        <p className={`font-poppins font-normal text-dimWhite text-[13px] m-1 ${paid_back !== "Paid Back" ? "text-red-500" : "text-green-500"} `}>
          {paid_back}
        </p>
      </div>
      
    </div>
    <p className="font-poppins font-normal text-dimWhite text-[35px] leading-[20px] pt-7 pl-2 text-right">
      {amount} IQD
    </p>
  </div>
);


export default function Business()  {


// const [expenses, setExpenses] = useState([]);



const navigate = useNavigate();

  const [expenses, setExpenses] = useState([]);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = '/login';
    } else {
      fetch('http://localhost:8000/api/last-four', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
        .then(response => response.json())
        .then(json => {
          console.log(json)
          json.category
          Object.keys(json).map(key=>{
            const a = json[key]
            console.log(a)
          })
          setExpenses(json)})
        .catch(e => console.log(e));
    }
  },[navigate]);

  return(
  <section id="features" className={`flex-col ${styles.paddingY}`}>
    <Link to='/accountant'>
    <div className={`flex-1 ${styles.flexStart} md:flex-row flex-col`}>
      <h2 className={styles.heading2}>
        Explore Latest Expenses
      </h2>
      <Button styles={`mt-0`} />
    </div>
    </Link>


    <div className={`${layout.sectionImg} md:flex-row flex-col`}>
  {expenses.map((feature, index) => (
    <Link key={feature.id} to={`/Expense/${feature.id}`}>
      <FeatureCard hiwa={feature.category} {...feature} index={index} />
    </Link>
  ))}
</div>


  </section>
  );
}

