import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function OurServices() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.ourservicestext}>
            <p>Our Excellent Services</p>

            <p>
              Check out our best service you can possibly orders in building
              your company and don't forget to ask via our email or our customer
              service if you are interested in using our services
            </p>
          </div>
          <div className={style.allservices}>
            <div className={style.subservices}>
              <img
                src="/images/services/realestate1.png"
                alt="oilgas icon"
                className="img_animation"
              />
              <div className={style.subtext}>
                <h6>Industrial</h6>
                <p>
                  With lots of unique services, you can easily reach us without
                  worry. Start a project with us
                </p>
              </div>
            </div>
            <div className={style.subservices}>
              <img
                src="/images/services/realestate2.png"
                alt="oilgas icon"
                className="img_animation"
              />

              <div className={style.subtext}>
                <h6>Commercial</h6>
                <p>
                  With lots of unique services, you can easily reach us without
                  worry. Start a project with us
                </p>
              </div>
            </div>
            <div className={style.subservices}>
              <img
                src="/images/services/realestate3.png"
                alt="oilgas icon"
                className="img_animation"
              />

              <div className={style.subtext}>
                <h6>Residential</h6>
                <p>
                  With lots of unique services, you can easily reach us without
                  worry. Start a project with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
