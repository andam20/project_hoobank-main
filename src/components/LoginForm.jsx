import styles from "../style";
import Button from "./Button";
import { createWorker } from 'tesseract.js';
import {profile} from '../assets';





const LoginForm = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} h-screen sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>

  
<form>
<div class='mb-6'>
<h2 className={styles.heading2}>Login</h2>
      </div>
    
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
      Please enter your email and password!
      </p>

    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required></input>
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••"  required></input>
    </div> 
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</section>

);


export default LoginForm;
