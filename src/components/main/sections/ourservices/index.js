import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function OurServices() {
  return (
    <AnimatedSection>
      <section className={style.main} id="services">
        <div className={style.container}>
          <div className={style.ourservicestext}>
            <p>Our Services</p>
          </div>
          <div className={style.allservices}>
            <div className={style.subservices}>
              <Image
                src="/svg/icons/services/oilgas.svg"
                width={40.73}
                height={38.59}
                alt="oilgas icon"
              />
              <div className={style.subtext}>
                <h6>Oil And Gas</h6>
                <p>
                  We specializes in the sale and supply of LPG, providing
                  reliable services to meet your energy needs. Our focus is on
                  delivering high-quality products and ensuring seamless supply
                  chain management. Partner with us for dependable LPG solutions
                  tailored to your requirements.
                </p>
              </div>
            </div>
            <div className={style.subservices}>
              <Image
                src="/svg/icons/services/music.svg"
                width={40.73}
                height={38.59}
                alt="music icon"
              />
              <div className={style.subtext}>
                <h6>Record Label and Muisc Production</h6>
                <p>
                  Your destination for professional music production and record
                  label services. We offer top-notch recording studios, expert
                  artist development, and comprehensive marketing support to
                  help you thrive in the music industry. Let&apos;s turn your
                  musical dreams into reality with 231 Records.
                </p>
              </div>
            </div>
            <div className={style.subservices}>
              <Image
                src="/svg/icons/services/homes.svg"
                width={40.73}
                height={38.59}
                alt="homes icon"
              />
              <div className={style.subtext}>
                <h6>Real Estate</h6>
                <p>
                  231 Luxury Homes is our all-in-one real estate expert for
                  commercial, industrial, and residential properties. Whether
                  you&apos;re seeking a luxurious home or a dynamic business
                  space, we offer customized solutions with a focus on quality
                  and personalized service. Explore the best in real estate with
                  231 Luxury Homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
