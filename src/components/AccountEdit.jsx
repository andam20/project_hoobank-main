import styles from "../style";
import Button from "./Button";
import { createWorker } from 'tesseract.js';
import {profile} from '../assets';
import { useState,useEffect } from "react";





const AccountEdit = () => {



  const [first_name, setfirst_name] = useState();
  const [last_name, setlast_name] = useState();
  const [email, setEmail] = useState();
  const [phone, setphone] = useState();
  const [password, setPassword] = useState();

    
    const [data,setData]=useState([]);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = 'http://127.0.0.1:5173/login';
    } else {
      fetch(`http://localhost:8000/api/employee-profile `, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
        .then(response => response.json())
        .then(json =>
        setData(json.employee_profile)
        )
        .catch(e => console.log(e));
    }
  },[]);



  useEffect(() => {
    if (data != null) {
      setfirst_name(data.first_name);
      setlast_name(data.last_name);
      setEmail(data.email);
      setPassword(data.password);
      setphone(data.phone_no);
    }
  }, [data]);










    // fetch("http://localhost:8000/api/update-employee", {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify({
    //         first_name: first_name,
    //         last_name: last_name,
    //         email: email,
    //         phone_no: phone,
    //         password: password
    //       }),
    //     })
    //       .then((response) => {
    //         if (response.ok) {
    //           return response.json();
    //         } else {
    //           throw new Error("Network response was not ok");
    //         }
    //       })
    //       .then((json) => {
    //         console.log(json);
    //         // Do something with response, such as show success message or redirect to another page
    //       })
    //       .catch((error) => console.error("Error:", error));
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const token = localStorage.getItem("token");
      // if (!token) {
      //   window.location.href = "http://127.0.0.1:5173/login";
      // } else {
        var raw = JSON.stringify({
          "first_name": first_name,
          "last_name": last_name,
          "phone_no": phone,
          "email": email,
          "password": password
        });
        
        var requestOptions = {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8000/api/update-employee", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      // }
    };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     window.location.href = "http://127.0.0.1:5173/login";
  //   } else {
  //     fetch("http://localhost:8000/api/update-employee", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         first_name: first_name,
  //         last_name: last_name,
  //         email: email,
  //         phone_no: phone,
  //         password: password
  //       }),
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         } else {
  //           throw new Error("Network response was not ok");
  //         }
  //       })
  //       .then((json) => {
  //         console.log(json);
  //         // Do something with response, such as show success message or redirect to another page
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   }
  // };
  
  

return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>

  
<form  onSubmit={handleSubmit}>
<div class='mb-6'>
<h2 className={styles.heading2}>Account Edit</h2>
      </div>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Andam" defaultValue={data.first_name} required onChange={(e)=>setfirst_name(e.target.value)}></input>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adam" defaultValue={data.last_name}  required onChange={(e)=>setlast_name(e.target.value)}></input>
        </div>
        
    </div>
    <div class="mb-6">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="07501234567" defaultValue={data.phone_no}  required onChange={(e)=>setphone(e.target.value)}></input>
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" defaultValue={data.email} onChange={(e)=>setEmail(e.target.value)} required></input>
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" onChange={(e)=>setPassword(e.target.value)} required></input>
    </div> 
  
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</section>

);
}

export default AccountEdit;
