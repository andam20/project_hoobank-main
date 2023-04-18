import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => {
  // check if the user is logged in
  const isLoggedIn = localStorage.getItem('token') !== null;

  // if the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    window.location.href = '/login';
    return null;
  }

  // if the user is logged in, render the homepage
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          {/* <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA /> */}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
