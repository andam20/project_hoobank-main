import styles from "../style";
import Button from "./Button";
import { createWorker } from 'tesseract.js';
import {expense} from '../assets';
import { features } from "../constants";







const ExpenseInfo = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>


<div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Expense Info</h2>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>Feul</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Description:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae perferendis perspiciatis esse deserunt quaerat iste impedit exercitationem hic cupiditate.</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Date:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>Yesterday</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Price:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>25,000 IQD</p>
      <div className="flex flex-row pt-7 space-x-1">
      <div className={`rounded-[5px] border ${"Accepted" === "Accepted" ? "border-green-500" : features.acc==="Pending" ? "border-yellow-500" : "border-red-500"}  opacity-75`}>
        <p className={`font-poppins font-normal text-dimWhite text-[13px] m-1 ${"Accepted"=== "Accepted" ? "text-green-500" : features.acc==="Pending"? "text-yellow-500" : "text-red-500"} `}>
        Accepted
        </p>
      </div>
      <div className={` rounded-[5px]  border ${"Payed Back" !== "Payed Back" ? "border-red-500" : "border-green-500"}  opacity-75`}>
        <p className={`font-poppins font-normal text-dimWhite text-[13px] m-1 ${"Payed Back" !== "Payed Back" ? "text-red-500" : "text-green-500"} `}>
        Payed Back
        </p>
      </div>
      </div>

    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <img src={expense} class=' w-80'/>
    </div>
  </section>
);


export default ExpenseInfo;
