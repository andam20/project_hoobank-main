import styles from "../style";
import Button from "./Button";
import { createWorker } from 'tesseract.js';
import {expense} from '../assets';
import { features } from "../constants";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";







const ExpenseInfo = () => {

  const { id } = useParams();
  console.log(id)

  const [data, setData] = useState([]);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = '/login';
    } else {
      fetch(`http://localhost:8000/api/show-expense/${id} `, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
        .then(response => response.json())
        .then(json =>setData(json.data))
        .catch(e => console.log(e));
    }
  },[]);


  const handleDelete = () => {
    console.log(id)
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8000/api/delete-expense/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          console.log(response)
          window.location.href = "http://localhost:8000";
        }else{
          console.log(response)
        }
      })
      .then(response=> console.log(response))
      .catch(error => console.log(error))
      .catch(e => console.log(e));
  };
return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>


<div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Expense Info</h2>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>{data.category}</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Description:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>{data.description}</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Date:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>{data.date}</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Price:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>{data.amount} IQD</p>
      <div className="flex flex-row pt-7 space-x-1">
      <div className={`rounded-[5px] border ${data.status === "Accepted" ? "border-green-500" : data.status==="Pending" ? "border-yellow-500" : "border-red-500"}  opacity-75`}>
        <p className={`font-poppins font-normal text-dimWhite text-[13px] m-1 ${data.status=== "Accepted" ? "text-green-500" : data.status==="Pending"? "text-yellow-500" : "text-red-500"} `}>
        {data.status}
        </p>
      </div>
      <div className={` rounded-[5px]  border ${data.paid_back !== "Payed Back" ? "border-red-500" : "border-green-500"}  opacity-75`}>
        <p className={`font-poppins font-normal text-dimWhite text-[13px] m-1 ${data.paid_back!== "Payed Back" ? "text-red-500" : "text-green-500"} `}>
          {data.paid_back}
        </p>
      </div>
      </div>
      <button onClick={handleDelete} type="submit"  className="p-2 px-5 text-[25px] mt-5 bg-red-gradient text-gray-900 rounded-[10px] font-semibold f">Delelte</button>

    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <img src={`http://localhost:8000${data.image_url}`} class=' w-80'/>
    </div>
  </section>
);
}

export default ExpenseInfo;
