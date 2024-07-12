import Image from "next/image";
import style from "./style.module.css";
import Whatcanwedoforyou from "../whatcanwedoforyou";
import OurServices from "./sections/ourservices";
import Consultation from "../consultation";
import Display from "./sections/display";
import AboutUs from "../aboutus";
import NewsThatHelps from "./sections/news";
import { useState, useEffect } from "react";

import Link from "next/link";
import Counter from "@/hook/counter";

export default function OilGas() {
  const [current, setcurrent] = useState(0);
  const images = ["/images/gasbluebghd.png", "/images/gasyellowbghd.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrent((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className={style.main}>
      <div
        className={style.container}
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className={style.maintop}>
          {/* <div className={style.maintext}>
            <h1>Discover Our Comprehensive Range of Oil & Gas Services</h1>
            <p>
              Prepare for an unforgettable journey to essential cooking LPG
              destinations
            </p>

            <Link href="#display">
              <p className={style.button}>Discover Now</p>
            </Link>
          </div> */}
        </div>
        <div className={style.mainbottom}>
          <div className={style.det}>
            <Image
              src={"/svg/icons/services/fuel.svg"}
              width={20}
              height={20}
            />
            <div className={style.detext}>
              <p>
                <Counter targetNumber={2000} speedml={30} />+ LPG Clients
              </p>
              <p>Number of clients</p>
            </div>
          </div>
          <div className={style.det}>
            <Image
              src={"/svg/icons/services/fluid.svg"}
              width={20}
              height={20}
            />
            <div className={style.detext}>
              <p>
                <Counter targetNumber={3000} speedml={30} />+ LPG Deliveries
              </p>
              <p>Number of Records</p>
            </div>
          </div>
          <div className={style.det}>
            <Image src={"/svg/icons/services/bon.svg"} width={20} height={20} />
            <div className={style.detext}>
              <p>
                <Counter targetNumber={20} />+ LPG Estates
              </p>
              <p>Number of Estates</p>
            </div>
          </div>
          {/* <div>
            <p className={style.button}> Explore Now</p>
          </div> */}
        </div>
      </div>
      <OurServices />
      <Display />
      {/* <NewsThatHelps /> */}
      <AboutUs />
      <Consultation />
      <Whatcanwedoforyou />
    </main>
  );
}
