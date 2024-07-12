import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Link from "next/link";

export default function Consultation() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.text}>
            <h3>Free Consultation with exceptional quality</h3>
            <p>
              Just one call away{" "}
              <a href="tel: +234 80102 2703">+2349159062400</a>
            </p>
          </div>
          <div className={style.button}>
            <Link href={"tel:2349159062400"}>
              <p>+2349159062400</p>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
