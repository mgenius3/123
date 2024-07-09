import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";

export default function Consultation() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.text}>
            <h3>Free Consultation with exceptional quality</h3>
            <p>
              Just one call away{" "}
              <a href="tel: +234 80102 2703"> +234 80102 2703</a>
            </p>
          </div>
          <div className={style.button}>
            <p>Get your Consultation</p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
