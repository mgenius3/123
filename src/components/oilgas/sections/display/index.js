import style from "./style.module.css";
import AnimatedSection from "@/components/animatedSection";
export default function Display() {
  return (
    <AnimatedSection>
      <main className={style.container}>
        <div className={style.list}>
          <div className={`${style.image1} bg_animation`} />
          <div className={style.textdetails}>
            <h6>Delivering Industrial solutions</h6>
            <p>
              As a global industrial company, we’re working with others to
              provide essential energy and chemical resources to power
              businesses, enable construction, and support manufacturing, and to
              provide low carbon solutions such as large-scale carbon capture
              and storage to help reduce industrial and commercial emissions.
            </p>

            <span>
              <p>Explore our solutions</p> <p>&#x2192;</p>
            </span>
          </div>
        </div>

        <div className={style.list + " " + style.listeven}>
          <div className={style.textdetails}>
            <h6>Energy supply</h6>
            <p>
              Energy lifts living standards and is, essential for human
              progress. For more than 140 years, we have been supplying energy
              and products people need to live healthy, prosperous lives in the
              modern world.
            </p>

            <p>
              We remain determined to tackle head-on the challenge of
              strengthening energy supply security and reducing emissions to
              support a net-zero future while growing value for our shareholders
              and stakeholders. Against the backdrop of a global pandemic and
              retreating industry where global suppliers pulled back, we
              sustained our investments to grow energy supplies. That helps all
              of us who need critical energy now and into the future. 
            </p>

            <span>
              <p>Learn More</p> <p>&#x2192;</p>
            </span>
          </div>
          <div className={`${style.image2} bg_animation`} />
        </div>

        <div className={style.list}>
          <div className={`${style.image3} bg_animation`} />
          <div className={style.textdetails}>
            <h6>Transforming transportation</h6>
            <p>
              Meeting global transportation needs while managing emissions
              requires multiple solutions, and we&apos;re taking a
              comprehensive, science-based approach to drive efficiencies that
              will ultimately help decarbonize transportation.
            </p>

            <span>
              <p>Explore our solutions</p> <p>&#x2192;</p>
            </span>
          </div>
        </div>
      </main>
    </AnimatedSection>
  );
}
