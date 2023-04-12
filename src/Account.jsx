import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, AccountEdit, AccountInfo, Hero } from "./components";

const Account = () => (
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
      <div className={`${styles.boxWidth}`}>
        <AccountInfo />
        <AccountEdit />
        <Business />
      <Footer />
      </div>
    </div>
  </div>
);

export default Account;
