import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <AnimatedSection>
      <section className={style.main} id="about">
        <div className={style.container}>
          <div className={style.aboutimage}>
            {/* <img src="/images/aboutus/home.png" /> */}
            <div className={`${style.image1} bg_animation`}></div>
            <div className={style.subimages}>
              <div className={`${style.image2} bg_animation`}></div>
              <div className={`${style.image3} bg_animation`}></div>

              {/* <img src="/images/aboutus/gas.png" />
              <img src="/images/aboutus/music.png" /> */}
            </div>
          </div>
          <div className={style.aboutus}>
            <h3>About Us</h3>
            <p className={style.subtext}>Discover the varous Subsidiaries</p>
            <p className={style.aboutustext}>
              231 Group is a diversified conglomerate dedicated to excellence
              across multiple sectors. Founded by Jerrydim Ikechukwu, our
              company has grown from its roots in Enugu State, Nigeria, to
              encompass a range of thriving subsidiaries.
            </p>

            <Link href={"/aboutus"}>
              <span className={style.button}>
                <p>Read more</p>
                <b className={style.arrow}>&rarr;</b>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
