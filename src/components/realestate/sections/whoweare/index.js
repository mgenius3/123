import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function WhoWeAreRealEstate() {
  return (
    <AnimatedSection>
      <section className={style.main} id="discover">
        <div className={style.container}>
          <div className={style.textdisplay}>
            {/* <p className={style.headtext}>WHO ARE WE</p> */}
            <p className={style.subheadtext}>
              Assisting individuals in locating the appropriate real estate
            </p>
            <p className={style.smalltext}>
              Our expertise ensures seamless transactions and personalized
              guidance throughout your real estate journey. We prioritize your
              satisfaction, offering comprehensive support to ensure you find
              the ideal property that meets your requirements.
            </p>

            <div className={style.whatwe}>
              <Image
                src="/svg/icons/renthome.svg"
                width={43}
                height={47}
                alt="icons"
              />
              <div>
                <p>Explore and acquire your dream luxury home effortlessly.</p>
                <p>
                  Our expertise ensures seamless transactions and personalized
                  guidance throughout your real estate journey. We prioritize
                  your satisfaction, offering comprehensive support to ensure
                  you find the ideal property that meets your requirements.
                </p>
              </div>
            </div>
            <div className={style.whatwe}>
              <Image
                src="/svg/icons/findhome.svg"
                width={43}
                height={47}
                alt="icons"
              />
              <div>
                <p>Rent and Lease Your Exclusive Luxury Residence</p>
                <p>
                  At 231 Luxury Homes, we make your dream luxury home a reality
                  with personalized service and seamless sales, rental and
                  leasing options.
                </p>
              </div>
            </div>
          </div>
          <div className={style.imagedisplay}>
            <div className={`${style.image1} bg_animation`}></div>
            <div>
              <div className={`${style.image2} bg_animation`}></div>
              <div className={`${style.image3} bg_animation`}></div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
