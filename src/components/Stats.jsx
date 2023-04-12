import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 sm:mt-10 mt-3  `}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-normal pr-3 xs:text-[30.89px] text-[20.89px] xs:leading-[53.16px] leading-[43.16px] text-gradient uppercase ml-3">
          {stat.title}:
        </h4>
        <p className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[26.58px] leading-[21.58px] text-white">
          {stat.value}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
