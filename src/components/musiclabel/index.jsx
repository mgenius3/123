import Image from "next/image";
import style from "./style.module.css";
import WhoWeAre from "../whoweare";
import Whatcanwedoforyou from "../whatcanwedoforyou";
import OurServices from "./sections/ourservices";
import Consultation from "../consultation";
import AboutUs from "../aboutus";
import WhoWeAreMusicLabel from "./sections/whoweare";
import Records from "./sections/records";
import Link from "next/link";

export default function MusicLabel() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.maintop}>
          <div className={style.maintext}>
            <h1>Discover Our Collection of Luxury Homes</h1>
            <p>Get ready to embark on unforgetable to breaking destinations</p>

            <Link href={"#records"}>
              <p className={style.button}>Discover Now</p>
            </Link>
          </div>

          {/* <img src="/images/recordlabel.png" /> */}
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
          {/* <div>
            <p className={style.button}> Explore Now</p>
          </div> */}
        </div>
      </div>
      <WhoWeAre />
      <OurServices />
      <WhoWeAreMusicLabel />
      <Records />
      <AboutUs />
      <Consultation />
      <Whatcanwedoforyou />
    </main>
  );
}
