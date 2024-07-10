import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function OurServices() {
  return (
    <AnimatedSection>
      <section className={style.main} id="services">
        <div className={style.container}>
          <div className={style.headtext}>
            <h3>Our Services</h3>
          </div>
          <div className={style.serviceslist}>
            <span>
              <Image
                width={22.37}
                height={48.5}
                src="/svg/icons/services/aviation.svg"
              />
              <p>LPG Supply</p>
            </span>
            <span>
              <Image
                width={22.37}
                height={48.5}
                src="/svg/icons/services/fuel.svg"
              />
              <p>Auto Gas Services</p>
            </span>

            <span>
              <Image
                width={22.37}
                height={48.5}
                src="/svg/icons/services/lub.svg"
              />
              <p>Refilling Services</p>
            </span>

            <span>
              <Image
                width={22.37}
                height={48.5}
                src="/svg/icons/services/indlub.svg"
              />
              <p>Installation Services</p>
            </span>

            <span>
              <Image
                width={22.37}
                height={48.5}
                src="/svg/icons/services/fluid.svg"
              />
              <p>Bulk Delivery</p>
            </span>

            <span>
              <Image
                width={22.37}
                height={48.5}
                src="/svg/icons/services/solar.svg"
              />
              <p>Maintenace Services</p>
            </span>

            <span>
              <Image
                width={22.37}
                height={48.5}
                src="/svg/icons/services/card.svg"
              />
              <p>Partnership Programs</p>
            </span>

            <span>
              <Image
                width={22.37}
                height={48.5}
                src="/svg/icons/services/bon.svg"
              />
              <p>Consultation and Advice</p>
            </span>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
