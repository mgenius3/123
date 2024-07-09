import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.aboutimage}>
            <img src="/images/aboutus/aboutframe.png" />
            <div className={style.subimages}>
              <img src="/images/aboutus/aboutframe1.png" />
              <img src="/images/aboutus/aboutframe2.png" />
            </div>
          </div>
          <div className={style.aboutus}>
            <h3>About Us</h3>
            <p className={style.subtext}>Discover the varous Subsidiaries</p>
            <p className={style.aboutustext}>
              Lorem ipsum dolor sit amet consectetur. In at amet semper velit
              elit nisi faucibus arcu. Bibendum nulla porttitor faucibus
              bibendum erat a vulputate sed. Quisque quis viverra turpis at erat
              vel ut metus congue. Sed senectus ullamcorper imperdiet sit
              fermentum. Fermentum faucibus proin hac sed condimentum euismod
              felis risus.
            </p>

            <span className={style.button}>
              <p>Read more</p>
              <b className={style.arrow}>&rarr;</b>
            </span>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
