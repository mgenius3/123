import Image from "next/image";
import style from "./style.module.css";

export default function SideNav() {
  return (
    <nav className={style.container}>
      <div className={style.logo}>
        <Image src={"/svg/logo.svg"} width={200} height={8.95} />
      </div>

      <hr />

      <div className={style.link}>
        <p>Home</p>
        <p>About us</p>
        <p>Services</p>
        <p>Contact Us</p>

        <div className={style.button}>
          <p>Request a call back</p>
        </div>
      </div>
    </nav>
  );
}
