import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Link from "next/link";

export default function Corporation() {
  return (
    <AnimatedSection>
      <section className={style.main} id="subsidiaries">
        <div className={style.container}>
          <h3>Our Subsidiaries</h3>
          <p className="subtext">
            Our subsidiary company specializes in providing exceptional services
            tailored to meet diverse client needs.
          </p>

          <div className={style.allcorporation}>
            <div>
              <span className={style.head}>
                <img src="/images/oilgas_bgoverlay.png" />
                <img src="/svg/oilgas_overlay.svg" className={style.overlay} />
              </span>

              <p>
                Our expertise lies in the oil and gas sector, specifically in
                the production and distribution of cooking LPG.
              </p>

              <Link href="/oilgas">
                <span className={style.button}>
                  <p> Know more</p>
                  <b className={style.arrow}>&rarr;</b>
                </span>
              </Link>
            </div>
            <div>
              <span className={style.head}>
                <img src="/images/realestate_bgoverlay.png" />
                <img
                  src="/svg/realestate_overlay.svg"
                  className={style.overlay}
                />
              </span>

              <p>
                We specialize in the sales, rentals, and leasing of luxury
                homes, as well as residential, commercial, and industrial
                properties.
              </p>

              <Link href="/realestate">
                <span className={style.button}>
                  <p> Know more</p>
                  <b className={style.arrow}>&rarr;</b>
                </span>
              </Link>
            </div>

            <div>
              <span className={style.head}>
                <img src="/images/musiclabel_bgoverlay.png" />
                <img
                  src="/svg/musiclabel_overlay.svg"
                  className={style.overlay}
                />
              </span>

              <p>
                We specialize in record label services and music production,
                offering a comprehensive range of solutions tailored to artists
                and musicians.
              </p>

              <Link href="/musiclabel">
                <span className={style.button}>
                  <p> Know more</p>
                  <b className={style.arrow}>&rarr;</b>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
