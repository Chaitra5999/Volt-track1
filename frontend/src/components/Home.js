import React from "react";
import styles from "./Home.module.css";
import WhyNeeded from "../pages/WhyNeeded";
import Second from "../pages/Second";
import Third from "../pages/Third"; 
import LineChart from "../pages/LineChart";
import CarouselComponent from "../pages/CarouselComponent";
import Fourth from "../pages/Fourth";
import Fifth from "../pages/Fifth";
import Services from "../pages/Services"; 

import First from "../pages/First";
function Home() {
  return (
    <div>
      <CarouselComponent />
      <h1 className={styles.homeHeadings}>Electric Vehicles </h1>
      <Second />
      <h1 className={styles.homeHeadings}>Our Products</h1>
      <Fourth />
      <h1 className={styles.homeHeadings}>
        Elctric Charging Points at Hubballi
      </h1>
      <Fifth />
      <h1 className={styles.homeHeadings}>
        How to Maintain Your EV's Battery?
      </h1>
      <First />
 
      <Third />
      <h1 className={styles.homeHeadings}>Services We Offer</h1>
      <Services />
      <h1 className={styles.homeHeadings}>
        The Electric Vehicles Sale in India
      </h1>
      <LineChart />
      <h1 className={styles.homeHeadings}>Why Needed?</h1>
      <WhyNeeded />
      {/* <h1 className={styles. homeHeadings}>Features</h1> */}
      {/* <Features />
      <Success /> */}
      {/* <PieChart /> */}
      {/* <BarChart /> */}
      {/* <Customisation /> */}
      {/* <Repair /> */}
    </div>
  );
}

export default Home;
