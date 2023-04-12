import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, EmpTable, Stats, Testimonials, Hero } from "./components";

const Accountant = () => (
  <div id="Accountant" className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`} >
        <Stats />
        <EmpTable />
        <Footer />
      </div>
    </div>
  </div>
);

export default Accountant;
