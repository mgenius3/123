import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function OurServices() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.ourservicestext}>
            <p>Our Services</p>
          </div>
          <div className={style.allservices}>
            <div className={style.subservices}>
              <Image
                src="/svg/icons/services/oilgas.svg"
                width={40.73}
                height={38.59}
                alt="oilgas icon"
              />
              <div className={style.subtext}>
                <h6>Oil And Gas</h6>
                <p>
                  With lots of unique services, you can easily reach us without
                  worry. Start a project with us
                </p>
              </div>
            </div>
            <div className={style.subservices}>
              <Image
                src="/svg/icons/services/music.svg"
                width={40.73}
                height={38.59}
                alt="music icon"
              />
              <div className={style.subtext}>
                <h6>Oil And Gas</h6>
                <p>
                  With lots of unique services, you can easily reach us without
                  worry. Start a project with us
                </p>
              </div>
            </div>
            <div className={style.subservices}>
              <Image
                src="/svg/icons/services/homes.svg"
                width={40.73}
                height={38.59}
                alt="homes icon"
              />
              <div className={style.subtext}>
                <h6>Oil And Gas</h6>
                <p>
                  With lots of unique services, you can easily reach us without
                  worry. Start a project with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
