import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

export default function SideNav({ home = false, setShowSideNav }) {
  return (
    <nav className={style.container}>
      <div className={style.logo}>
        <Image src={"/svg/logo.svg"} width={200} height={8.95} />
      </div>

      <hr />

      {home ? (
        <div className={style.link}>
          <Link onClick={() => setShowSideNav(false)} href="#about">
            <p>About Us</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="#subsidiaries">
            <p>Subsidiaries</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="#services">
            <p>Services</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="#contact">
            <p>Contact Us</p>
          </Link>

          <div className={style.button}>
            <Link onClick={() => setShowSideNav(false)} href="#contact">
              <p>Request a call back</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className={style.link}>
          <Link onClick={() => setShowSideNav(false)} href="/">
            <p>Home</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="#about">
            <p>About us</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="#services">
            <p>Services</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="#contact">
            <p>Contact Us</p>
          </Link>

          <div className={style.button}>
            <Link onClick={() => setShowSideNav(false)} href="#contact">
              <p>Request a call back</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
