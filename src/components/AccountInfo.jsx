import styles from "../style";
import Button from "./Button";
import { createWorker } from 'tesseract.js';
import {profile} from '../assets';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const AccountInfo = () => {


  function handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  const [data, setData] = useState([]);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = '/login';
    } else {
      fetch(`http://192.168.1.109/collage-project/public/api/employee-profile `, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
        .then(response => response.json())
        .then(json =>setData(json.employee_profile))
        .catch(e => console.log(e));
    }
  },[]);

return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>


<div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>{data.first_name} {data.last_name}</h2>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>{data.job_title}</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Company:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>KOYA Company</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Salary:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>{data.salary} IQD</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Start Date:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>{data.start_date}</p>
      <form>
      <button onClick={handleLogout} className="p-2 px-5 text-[25px] mt-5 bg-red-gradient text-gray-900 rounded-[10px] font-semibold f">Log out</button>
      </form>
    </div>


    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      
    <img src={`http://192.168.1.109/collage-project/public${data.image_url}`} class='rounded-full w-80'/>
    </div>
  </section>
);
}

export default AccountInfo;
