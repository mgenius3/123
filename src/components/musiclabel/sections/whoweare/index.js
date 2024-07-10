import AnimatedSection from "@/components/animatedSection";
import style from "./style.module.css";
import Image from "next/image";

export default function WhoWeAreMusicLabel() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.textdisplay}>
            {/* <p className={style.headtext}>WHO ARE WE</p> */}
            <p className={style.subheadtext}>
              Lorem ipsum dolor sit amet consectetuordulv ul.Vestibulum
            </p>
            <p className={style.smalltext}>
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
              malesuada leo volutpat.
            </p>

            <div className={style.whatwe}>
              <Image
                src="/svg/icons/services/performance.svg"
                width={43}
                height={47}
                alt="icons"
              />
              <div>
                <p>Good sound music</p>
                <p>
                  Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                </p>
              </div>
            </div>
            <div className={style.whatwe}>
              <Image
                src="/svg/icons/services/music.svg"
                width={43}
                height={47}
                alt="icons"
              />
              <div>
                <p>Enjoy the best of music</p>
                <p>
                  Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                </p>
              </div>
            </div>
          </div>
          <div className={style.imagedisplay}>
            <div className={`${style.image1} bg_animation`}></div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
