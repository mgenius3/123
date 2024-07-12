import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ showSideNav, setShowSideNav, home = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className={`${style.container} ${scrolled ? style.scrolled : ""}`}>
      <nav className={style.desktop}>
        <div className={style.logo}>
          <Link href="/">
            <Image src={"/svg/logo.svg"} width={200} height={8.95} />
          </Link>
        </div>

        {home ? (
          <div className={style.link}>
            <Link href="/aboutus">
              <p>About Us</p>
            </Link>
            <div className={style.dropdown}>
              <p onClick={toggleDropdown} className={style.dropdownToggle}>
                Subsidiaries
              </p>
              {showDropdown && (
                <div className={style.dropdownContent}>
                  <Link href="/oilgas">
                    <p>Oil & Gas</p>
                  </Link>
                  <Link href="/realestate">
                    <p>Real Estate</p>
                  </Link>
                  <Link href="/musiclabel">
                    <p>Record Label</p>
                  </Link>
                </div>
              )}
            </div>
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
            <Link href="/aboutus">
              <p>About us</p>
            </Link>
            <div className={style.dropdown}>
              <p onClick={toggleDropdown} className={style.dropdownToggle}>
                Subsidiaries
              </p>
              {showDropdown && (
                <div className={style.dropdownContent}>
                  <Link href="/oilgas">
                    <p>Oil & Gas</p>
                  </Link>
                  <Link href="/realestate">
                    <p>Real Estate</p>
                  </Link>
                  <Link href="/musiclabel">
                    <p>Record Label</p>
                  </Link>
                </div>
              )}
            </div>
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
