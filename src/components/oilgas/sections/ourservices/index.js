import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function OurServices() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.headtext}>
            <h3>Our Services</h3>
          </div>
          <div className={style.serviceslist}>
            <span>
              <Image
                width={42.37}
                height={48.5}
                src="/svg/icons/services/fuel.svg"
              />
              <p>Our Fuels</p>
            </span>

            <span>
              <Image
                width={42.37}
                height={48.5}
                src="/svg/icons/services/lub.svg"
              />
              <p>Car Lubricants</p>
            </span>

            <span>
              <Image
                width={42.37}
                height={48.5}
                src="/svg/icons/services/indlub.svg"
              />
              <p>Industrial Lubricants</p>
            </span>

            <span>
              <Image
                width={42.37}
                height={48.5}
                src="/svg/icons/services/fluid.svg"
              />
              <p>Special Fluids/Solvents</p>
            </span>

            <span>
              <Image
                width={42.37}
                height={48.5}
                src="/svg/icons/services/aviation.svg"
              />
              <p>Aviation</p>
            </span>

            <span>
              <Image
                width={42.37}
                height={48.5}
                src="/svg/icons/services/solar.svg"
              />
              <p>Solar Solutions</p>
            </span>

            <span>
              <Image
                width={42.37}
                height={48.5}
                src="/svg/icons/services/card.svg"
              />
              <p>Company Cards</p>
            </span>

            <span>
              <Image
                width={42.37}
                height={48.5}
                src="/svg/icons/services/bon.svg"
              />
              <p>Bonjour</p>
            </span>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
