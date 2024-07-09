import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Link from "next/link";

export default function Corporation() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <h3>Our Subsidiary Corporation</h3>
          <p className="subtext">
            Lorem ipsum dolor sit amet consectetur. Magna adipiscing amet
            vulputate libero
          </p>

          <div className={style.allcorporation}>
            <div>
              <span className={style.head}>
                <img src="/images/oilgas_bgoverlay.png" />
                <img src="/svg/oilgas_overlay.svg" className={style.overlay} />
              </span>

              <p>
                Lorem ipsum dolor sit amet consectet ur. Sapien at semper
                adipiscing nec n on nibh lorem.
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
                Lorem ipsum dolor sit amet consectet ur. Sapien at semper
                adipiscing nec n on nibh lorem.
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
                Lorem ipsum dolor sit amet consectet ur. Sapien at semper
                adipiscing nec n on nibh lorem.
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
