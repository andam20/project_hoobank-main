import { stats } from "../constants";
import styles from "../style";
import { useState, useEffect } from "react";

const Stats = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    } else {
      fetch('http://localhost:8000/api/income', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(json => setIncome(json))
        .catch(e => console.log(e));

        fetch('http://localhost:8000/api/expense-total', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(json => setExpense(json))
        .catch(e => console.log(e));
    }
  },[history]);
  const total=expense.expense-income.income;

  return(
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 sm:mt-10 mt-3  `}>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-normal pr-3 xs:text-[30.89px] text-[20.89px] xs:leading-[53.16px] leading-[43.16px] text-gradient uppercase ml-3">
          Expense:
        </h4>
        <p className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[26.58px] leading-[21.58px] text-white">
          {expense.expense} IQD
        </p>
      </div>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-normal pr-3 xs:text-[30.89px] text-[20.89px] xs:leading-[53.16px] leading-[43.16px] text-gradient uppercase ml-3">
          Income:
        </h4>
        <p className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[26.58px] leading-[21.58px] text-white">
          {income.income} IQD
        </p>
      </div>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-normal pr-3 xs:text-[30.89px] text-[20.89px] xs:leading-[53.16px] leading-[43.16px] text-gradient uppercase ml-3">
          Total:
        </h4>
        <p className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[26.58px] leading-[21.58px] text-white">
          {total} IQD
        </p>
      </div>
  </section>
);
}

export default Stats;
