import styles from "../style";
import Button from "./Button";
import { createWorker } from 'tesseract.js';
import {profile} from '../assets';







const AccountInfo = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>


<div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Andam Adam</h2>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>Software Engineer</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Salary:</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>1,200,000 IQD</p>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Employment Time</label>
      <p className={`${styles.paragraph} max-w-[470px] `}>1 Year, 2 Months</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <img src={profile} class='rounded-full w-80'/>
    </div>
  </section>
);


export default AccountInfo;
