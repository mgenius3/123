import Image from "next/image";
import style from "./style.module.css";
import AnimatedSection from "../animatedSection";

export default function WhoWeAre() {
  return (
    <AnimatedSection>
      <section className={style.container}>
        <div className={style.who_we_are}>
          <p>WHO ARE WE</p>
        </div>
        <div>
          <p className={style.sectionhead}>
            We have over 6 years of experience in the real estate industry
          </p>
        </div>

        <div className={style.summaryabout}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Fames eros habitasse
            ultricies et facilisi tincidunt. Tempus suscipit enim volutpat donec
            adipiscing tincidunt magna. Id enim vitae lacus duis suspendisse.
            Integer donec ac adipiscing eget morbi nec nisl. Porta pretium est
            nunc amet. Laoreet sed tellus etiam ultricies. Nunc a leo in gravida
            amet eu habitant. Vestibulum pharetra lacus dignissim quis molestie.
            Blandit sagittis dolor cursus dignissim diam. Dui enim volutpat orci
            et.
          </p>
        </div>
        <div className={style.knowmore}>
          <p>Know More</p>
        </div>
      </section>
    </AnimatedSection>
  );
}
