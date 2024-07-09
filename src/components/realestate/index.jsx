import Image from "next/image";
import style from "./style.module.css";
import WhoWeAre from "../whoweare";
import Whatcanwedoforyou from "../whatcanwedoforyou";
import OurServices from "./sections/ourservices";
import AboutUs from "./sections/aboutus";
import Consultation from "../consultation";
import WhoWeAreRealEstate from "./sections/whoweare";

export default function RealEstate() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.maintop}>
          <div className={style.maintext}>
            <h1>Explore Our Collection Luxury Homes</h1>
            <p>Get ready to embark on unforgetable to breaking destinations</p>

            <p className={style.button}>Discover Now</p>
          </div>
          {/* <img src="/images/realestate.png" className={style.mainimage} /> */}
        </div>
        <div className={style.mainbottom}>
          <div className={style.det}>
            <Image src={"/svg/icons/happy.svg"} width={20} height={20} />
            <div className={style.detext}>
              <p>80 HAPPY CLIENTS</p>
              <p>Number of clients</p>
            </div>
          </div>
          <div className={style.det}>
            <Image src={"/svg/icons/music.svg"} width={20} height={20} />
            <div className={style.detext}>
              <p>60 RECORDS</p>
              <p>Number of Records</p>
            </div>
          </div>
          <div className={style.det}>
            <Image src={"/svg/icons/house.svg"} width={20} height={20} />
            <div className={style.detext}>
              <p>100+ LUXURY HOMES</p>
              <p>Number of Estates</p>
            </div>
          </div>
          <div>
            <p className={style.button}> Explore Now</p>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <OurServices />
      <WhoWeAreRealEstate />
      <AboutUs />
      <Consultation />
      <Whatcanwedoforyou />
    </main>
  );
}