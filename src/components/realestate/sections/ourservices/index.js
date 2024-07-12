import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function OurServices() {
  return (
    <AnimatedSection>
      <section className={style.main} id="services">
        <div className={style.container}>
          <div className={style.ourservicestext}>
            <p>231 Luxury Home Real Estate Services</p>

            <p>
              Discover our top-tier services tailored to enhance your real
              estate endeavors. For further details or to express interest in
              our services, please contact us via email or through our dedicated
              customer service. We are committed to supporting the growth of
              your company.
            </p>
          </div>
          <div className={style.allservices}>
            <div className={style.subservices}>
              {/* <img
                src="/images/services/realestate1.png"
                alt="oilgas icon"
                className="img_animation"
              /> */}
              <div className={`${style.image1} bg_animation`}></div>

              <div className={style.subtext}>
                <h6>Industrial</h6>
                <p>
                  We offers Industrial Real Estate specialized services designed
                  to support and enhance your industrial projects and real
                  estate needs efficiently.
                </p>
              </div>
            </div>
            <div className={style.subservices}>
              {/* <img
                src="/images/services/realestate2.png"
                alt="oilgas icon"
                className="img_animation"
              /> */}
              <div className={`${style.image2} bg_animation`}></div>

              <div className={style.subtext}>
                <h6>Commercial</h6>
                <p>
                  We offer Commercial Real Estate which provides customized
                  services designed to cater to the specific requirements of
                  your commercial property ventures.
                </p>
              </div>
            </div>
            <div className={style.subservices}>
              {/* <img
                src="/images/services/realestate3.png"
                alt="oilgas icon"
                className="img_animation"
              /> */}
              <div className={`${style.image3} bg_animation`}></div>

              <div className={style.subtext}>
                <h6>Residential</h6>
                <p>
                  We offer Residential Real Estate that delivers customized
                  services aimed at enhancing and fulfilling your needs for
                  residential properties effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
