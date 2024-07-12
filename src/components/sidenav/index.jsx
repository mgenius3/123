import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";
import { useState } from "react";

export default function SideNav({ home = false, setShowSideNav }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className={style.container}>
      <div className={style.logo}>
        <Link onClick={() => setShowSideNav(false)} href="/">
          <Image src={"/svg/logo.svg"} width={100} height={8.95} />
        </Link>
      </div>

      <hr />

      {home ? (
        <div className={style.link}>
          <Link onClick={() => setShowSideNav(false)} href="/aboutus">
            <p>About Us</p>
          </Link>
          <div className={style.dropdown}>
            <p className={style.dropdownToggle} onClick={toggleDropdown}>
              Subsidiaries
            </p>
            {showDropdown && (
              <div className={style.dropdownContent}>
                <Link onClick={() => setShowSideNav(false)} href="/oilgas">
                  <p>Oil & Gas</p>
                </Link>
                <Link onClick={() => setShowSideNav(false)} href="/realestate">
                  <p>Real Estate</p>
                </Link>
                <Link onClick={() => setShowSideNav(false)} href="/musiclabel">
                  <p>Record Label</p>
                </Link>
              </div>
            )}
          </div>
          <Link onClick={() => setShowSideNav(false)} href="/#services">
            <p>Services</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="/#contact">
            <p>Contact Us</p>
          </Link>

          <div className={style.button}>
            <Link onClick={() => setShowSideNav(false)} href="/letter">
              <p>A Letter From Our CEO</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className={style.link}>
          <Link onClick={() => setShowSideNav(false)} href="/">
            <p>Home</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="/aboutus">
            <p>About us</p>
          </Link>
          <div className={style.dropdown}>
            <p onClick={toggleDropdown} className={style.dropdownToggle}>
              Subsidiaries
            </p>
            {showDropdown && (
              <div className={style.dropdownContent}>
                <Link onClick={() => setShowSideNav(false)} href="/oilgas">
                  <p>Oil & Gas</p>
                </Link>
                <Link onClick={() => setShowSideNav(false)} href="/realestate">
                  <p>Real Estate</p>
                </Link>
                <Link onClick={() => setShowSideNav(false)} href="/musiclabel">
                  <p>Record Label</p>
                </Link>
              </div>
            )}
          </div>
          <Link onClick={() => setShowSideNav(false)} href="#services">
            <p>Services</p>
          </Link>
          <Link onClick={() => setShowSideNav(false)} href="#contact">
            <p>Contact Us</p>
          </Link>

          <div className={style.button}>
            <Link onClick={() => setShowSideNav(false)} href="/letter">
              <p>A Letter From Our CEO</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
