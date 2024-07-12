import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.main}>
        <section className={style.prop}>
          <div className="mb-10">
            <div className={style.details}>
              <p className={style.detailshead}>ADDRESS:</p>

              <div className={style.subdetailshead}>
                <p>Enugu State Office</p>

                <p>
                  No, 36 Ubaka Street, Enugu State
                  <br />
                  Plot 1315, 1317, Villa Estate Layout, Phase II, Enugu State{" "}
                </p>
              </div>

              <div className={style.subdetailshead}>
                <p>Corporate Abuja Office</p>
                <p>
                  {" "}
                  50 Ebitu Ukiwe St, Jabi, Abuja 900108, Federal Capital
                  Territory
                </p>
              </div>
            </div>
            <div className={style.details}>
              <p className={style.detailshead}>PHONE:</p>
              <Link href={"tel:2349159062400"}>
                <p>+2349159062400</p>
              </Link>
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
              <span className={style.button}>
                <p>Subscribe</p>
              </span>
            </div>
          </div>

          <div>
            <p className={style.headtext}>SOCIAL:</p>

            <div className="flex">
              {/* <Image
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
              />{" "} */}
              <a href="https://instagram.com/231group" target="_blank">
                <Image
                  src={"/svg/instagramicon.svg"}
                  width={24.57}
                  height={24.57}
                  className="mr-5"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
