import Image from "next/image";
import style from "./style.module.css";

export default function Header({ showSideNav, setShowSideNav }) {
  return (
    <header className={style.container}>
      <nav className={style.desktop}>
        <div className={style.logo}>
          <Image src={"/svg/logo.svg"} width={208} height={8.95} />
        </div>

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
