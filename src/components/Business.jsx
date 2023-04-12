import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon, category, date, desc, acc, pb, price, index, hiwa }) => (
  <div className={`flex flex-col p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`flex flex-row`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
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
      {desc}
    </p>
    <div className="flex flex-row pt-7 space-x-1">
      <div className={`rounded-[5px] border ${acc === "Accepted" ? "border-green-500" : acc==="Pending" ? "border-yellow-500" : "border-red-500"}  opacity-75`}>
        <p className={`font-poppins font-normal text-dimWhite text-[13px] m-1 ${acc === "Accepted" ? "text-green-500" : acc==="Pending"? "text-yellow-500" : "text-red-500"} `}>
          {acc}
        </p>
      </div>

      <div className={` rounded-[5px]  border ${pb !== "Payed Back" ? "border-red-500" : "border-green-500"}  opacity-75`}>
        <p className={`font-poppins font-normal text-dimWhite text-[13px] m-1 ${pb !== "Payed Back" ? "text-red-500" : "text-green-500"} `}>
          {pb}
        </p>
      </div>
      
    </div>
    <p className="font-poppins font-normal text-dimWhite text-[35px] leading-[20px] pt-7 pl-2 text-right">
      {price}
    </p>
  </div>
);

const Business = () =>  (

  
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
      {features.map((feature, index) => (
        <Link to='/Expense'>
        <FeatureCard key={feature.id} hiwa={feature.category} {...feature} index={index} />
        </Link>
      ))}
    </div>
  </section>
);

export default Business;
