import Image from "next/image";
import style from "./style.module.css";
import Whatcanwedoforyou from "../whatcanwedoforyou";
import OurServices from "./sections/ourservices";
import Consultation from "../consultation";
import Display from "./sections/display";
import AboutUs from "../aboutus";
import NewsThatHelps from "./sections/news";

export default function OilGas() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.maintop}>
          <div className={style.maintext}>
            <h1>Explore Our Collection of Oil & Gas Services</h1>
            <p>Get ready to embark on unforgetable to breaking destinations</p>

            <p className={style.button}>Discover Now</p>
          </div>
        </div>
        <div className={style.mainbottom}>
          <div className={style.det}>
            <Image
              src={"/svg/icons/services/fuel.svg"}
              width={20}
              height={20}
            />
            <div className={style.detext}>
              <p>100+ Fueled Cars</p>
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
              <p>60 RECORDS</p>
              <p>Number of Records</p>
            </div>
          </div>
          <div className={style.det}>
            <Image src={"/svg/icons/services/bon.svg"} width={20} height={20} />
            <div className={style.detext}>
              <p>100+ BONJOUR</p>
              <p>Number of Estates</p>
            </div>
          </div>
          <div>
            <p className={style.button}> Explore Now</p>
          </div>
        </div>
      </div>
      <OurServices />
      <Display />
      <NewsThatHelps />
      <AboutUs />
      <Consultation />
      <Whatcanwedoforyou />
    </main>
  );
}
