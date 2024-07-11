import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ showSideNav, setShowSideNav, home = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${style.container} ${scrolled ? style.scrolled : ""}`}>
      <nav className={style.desktop}>
        <div className={style.logo}>
          <Image src={"/svg/logo.svg"} width={208} height={8.95} />
        </div>

        {home ? (
          <div className={style.link}>
            <Link href="#about">
              <p>About Us</p>
            </Link>
            <Link href="/#subsidiaries">
              <p>Subsidiaries</p>
            </Link>
            <Link href="/#services">
              <p>Services</p>
            </Link>
            <Link href="/#contact">
              <p>Contact Us</p>
            </Link>

            <div className={style.button}>
              <Link href="/letter">
                <p>A Letter From Our CEO</p>
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
                <p>A Letter From Our CEO</p>
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
