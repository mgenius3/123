import Image from "next/image";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.main}>
        <section className={style.prop}>
          <div className="mb-10">
            <div className={style.details}>
              <p className={style.detailshead}>ADDRESS:</p>
              <p>No26, agbaja street, banana Island, Lagos Nigeria</p>
            </div>
            <div className={style.details}>
              <p className={style.detailshead}>PHONE:</p>
              <p>+234 804 1102 2703</p>
            </div>{" "}
            <div className={style.details}>
              <p className={style.detailshead}>EMAIL:</p>
              <p>hello@231group.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <Image
              src={"/svg/logofooter.svg"}
              width={119.28}
              height={79.82}
              className="mr-5"
            />
            <p className={style.logotext}>231 Group Of Companies</p>
          </div>
        </section>

        <section className={style.prop}>
          <div className="mb-10">
            <p className={style.headtext}>NEWSLETTER:</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email here"
                className={style.newsletterinput}
              />
              <p className={style.button}>Subscribe</p>
            </div>
          </div>

          <div>
            <p className={style.headtext}>SOCIAL:</p>

            <div className="flex">
              <Image
                src={"/svg/iconfacebook.svg"}
                width={24.57}
                height={24.57}
                className="mr-5"
              />{" "}
              <Image
                src={"/svg/iconlinkedin.svg"}
                width={24.57}
                height={24.57}
                className="mr-5"
              />{" "}
              <Image
                src={"/svg/icontwitter.svg"}
                width={24.57}
                height={24.57}
                className="mr-5"
              />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
