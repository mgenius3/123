import style from "./style.module.css";
import AnimatedSection from "@/components/animatedSection";
export default function Display() {
  return (
    <AnimatedSection>
      <main className={style.container} id="display">
        <div className={style.list}>
          <div className={`${style.image1} bg_animation`} />
          <div className={style.textdetails}>
            <h6>Improving cooking energy access</h6>
            <p>
              Meeting varied cooking energy needs while upholding environmental
              responsibility requires a multifaceted approach. We're
              implementing a comprehensive, science-driven strategy to enhance
              supply chains, ultimately promoting sustainable cooking energy
              solutions.
            </p>

            {/* <span>
              <p>Explore our solutions</p> <p>&#x2192;</p>
            </span> */}
          </div>
        </div>

        <div className={style.list + " " + style.listeven}>
          <div className={style.textdetails}>
            <h6>Essential Energy for Healthy, Prosperous Cooking</h6>
            <p>
              Oil & Gas plays a vital role in improving living standards and
              advancing society by providing essential energy. This supports
              healthy, prosperous lives in modern society. We're dedicated to
              securing energy supply while reducing emissions, aiming for a
              net-zero future. Despite challenges like the pandemic, we invest
              in expanding energy supplies to meet current needs and ensure
              sustainable energy for future generations.
            </p>

            {/* <span>
              <p>Learn More</p> <p>&#x2192;</p>
            </span> */}
          </div>
          <div className={`${style.image2} bg_animation`} />
        </div>

        <div className={style.list}>
          <div className={`${style.image3} bg_animation`} />
          <div className={style.textdetails}>
            <h6>Efficient and Sustainable Cooking Solutions with LPG</h6>
            <p>
              Transforming cooking solutions Meeting global cooking needs while
              managing emissions requires multiple solutions, and we're taking a
              comprehensive, science-based approach to drive efficiencies that
              will ultimately help decarbonize cooking processes using LPG.
            </p>

            {/* <span>
              <p>Explore our solutions</p> <p>&#x2192;</p>
            </span> */}
          </div>
        </div>
      </main>
    </AnimatedSection>
  );
}
