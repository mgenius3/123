import style from "./style.module.css";
import AnimatedSection from "@/components/animatedSection";

export default function NewsThatHelps() {
  return (
    <AnimatedSection>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.headtext}>
            <h2>News that helps</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquet volutpat cras
              eleifend feugiat diam. Risus.
            </p>
          </div>

          <div className={style.list}>
            <div>
              <div className={`${style.image1} bg_animation`}></div>
              <p>
                231 oil and gas gives cash rewards to over 450 new entrepreneurs
              </p>
            </div>
            <div className={style.sublist2}>
              <div className={`${style.image2} bg_animation`}></div>
              <p>
                231 oil and gas gives cash rewards to over 450 new entrepreneurs
              </p>
            </div>
            <div>
              <div className={`${style.image3} bg_animation`}></div>
              <p>
                231 oil and gas gives cash rewards to over 450 new entrepreneurs
              </p>
            </div>
          </div>
        </div>
      </main>
    </AnimatedSection>
  );
}
