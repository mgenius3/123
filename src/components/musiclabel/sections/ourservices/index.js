import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function OurServices() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <h3>Our Services</h3>
          <div className={style.list}>
            <div>
              <img
                src={"/svg/icons/services/brand.svg"}
                width={54.55}
                height={52.2}
              />
              <p>Brand Partnership</p>
            </div>
            <div>
              <img
                src={"/svg/icons/services/music.svg"}
                width={45.67}
                height={52.2}
              />
              <p>Music Listening</p>
            </div>
            <div>
              <img
                src={"/svg/icons/services/performance.svg"}
                width={32.29}
                height={22.2}
              />
              <p>Perfomance & Appearance</p>
            </div>
            <div>
              <img
                src={"/svg/icons/services/content.svg"}
                width={44.55}
                height={52.2}
              />
              <p>Content Production</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
