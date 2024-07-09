import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

export default function Header({ showSideNav, setShowSideNav, home = false }) {
  return (
    <header className={style.container}>
      <nav className={style.desktop}>
        <div className={style.logo}>
          <Image src={"/svg/logo.svg"} width={208} height={8.95} />
        </div>

        {home ? (
          <div className={style.link}>
            <Link href="#about">
              <p>About Us</p>
            </Link>
            <Link href="#subsidiaries">
              <p>Subsidiaries</p>
            </Link>
            <Link href="#services">
              <p>Services</p>
            </Link>
            <Link href="#contact">
              <p>Contact Us</p>
            </Link>

            <div className={style.button}>
              <Link href="#contact">
                <p>Request a call back</p>
              </Link>
            </div>
          </div>
        ) : (
          <div className={style.link}>
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="#about">
              <p>About us</p>
            </Link>
            <Link href="#services">
              <p>Services</p>
            </Link>
            <Link href="#contact">
              <p>Contact Us</p>
            </Link>

            <div className={style.button}>
              <Link href="#contact">
                <p>Request a call back</p>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <nav className={style.mobile}>
        <div className={style.logo}>
          <Image src={"/svg/logo.svg"} width={108} height={8.95} />
        </div>

        {showSideNav ? (
          <div>
            <Image
              src={"/svg/close.svg"}
              width={40}
              height={8.95}
              onClick={() => setShowSideNav((prev) => !prev)}
            />
          </div>
        ) : (
          <div>
            <Image
              src={"/svg/menu.svg"}
              width={40}
              height={8.95}
              onClick={() => setShowSideNav((prev) => !prev)}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
