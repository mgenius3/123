import Image from "next/image";
import style from "./style.module.css";
import AnimatedSection from "../animatedSection";

export default function WhoWeAre() {
  return (
    <AnimatedSection>
      <section className={style.container}>
        {/* <div className={style.who_we_are}>
          <p>WHO ARE WE</p>
        </div> */}
        <div>
          <p className={style.sectionhead}>
            Driving Excellence and Innovation: The Foundation of 231 Group
          </p>
        </div>

        <div className={style.summaryabout}>
          <p>
            We are the cornerstone of 231 Group, a conglomerate that includes
            renowned subsidiaries like 231 Oil & Gas, 231 Luxury Homes, and 231
            Records. Our dedication to excellence and innovation drives us to
            set new standards across diverse sectors, ensuring sustainable
            growth and client satisfaction.
          </p>
        </div>
        {/* <div className={style.knowmore}>
          <p>Know More</p>
        </div> */}
      </section>
    </AnimatedSection>
  );
}
