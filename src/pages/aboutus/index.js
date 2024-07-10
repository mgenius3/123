import Image from "next/image";
import styles from "./style.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideNav from "@/components/sidenav";
import { useState, useEffect } from "react";
const About = () => {
  const [showmobilesidenav, setMobileSideNav] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/luxuryhomes.png",
    "/images/gasbluebghd.png",
    "/images/recordlabel.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <main>
      <Header
        setShowSideNav={setMobileSideNav}
        showSideNav={showmobilesidenav}
        home={true}
      />
      {showmobilesidenav && (
        <SideNav home={true} setShowSideNav={setMobileSideNav} />
      )}
      <div className={styles.container}>
        <header
          className={styles.header}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <h1>About Us</h1>
        </header>

        <section className={styles.section}>
          <h2>Welcome to 231 Group</h2>
          <p>
            231 Group is a diversified conglomerate dedicated to excellence
            across multiple sectors. Founded by Jerrydim Ikechukwu, our company
            has grown from its roots in Enugu State, Nigeria, to encompass a
            range of thriving subsidiaries.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Subsidiaries</h2>

          <div className={styles.subsidiary}>
            <Image
              src="/oil_and_gas.jpg"
              alt="231 Oil and Gas"
              width={500}
              height={300}
            />
            <h3>231 Oil and Gas</h3>
            <p>
              Specializing in the sale, distribution, and supply chain
              management of liquefied petroleum gas (LPG), 231 Oil and Gas
              ensures reliable and efficient energy solutions. We prioritize
              quality and safety in every aspect of our operations, catering to
              both commercial and residential needs.
            </p>
          </div>

          <div className={styles.subsidiary}>
            <Image
              src="/luxury_homes.jpg"
              alt="231 Luxury Homes"
              width={500}
              height={300}
            />
            <h3>231 Luxury Homes</h3>
            <p>
              At 231 Luxury Homes, we redefine luxury living with a commitment
              to craftsmanship, innovation, and personalized service. Whether
              it's the sale, rental, or leasing of residential, commercial, or
              industrial properties, we offer bespoke solutions that meet the
              highest standards of quality and elegance.
            </p>
          </div>

          <div className={styles.subsidiary}>
            <Image
              src="/records.jpg"
              alt="231 Records"
              width={500}
              height={300}
            />
            <h3>231 Records</h3>
            <p>
              Founded out of a passion for music and the arts, 231 Records is a
              leading record label and music production company. We provide
              comprehensive services to artists and musicians, including
              recording studios equipped with state-of-the-art technology,
              artist development programs, marketing strategies, and global
              distribution channels.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Vision</h2>
          <Image src="/vision.jpg" alt="Vision" width={500} height={300} />
          <p>
            Driven by a vision of innovation and integrity, 231 Group aims to
            set new benchmarks in every sector we operate in. We strive to
            exceed customer expectations, foster long-term partnerships, and
            contribute positively to the communities we serve.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Founder</h2>
          <Image
            src="/founder.jpg"
            alt="Jerrydim Ikechukwu"
            width={300}
            height={300}
          />
          <p>
            Jerrydim Ikechukwu, a visionary leader with a background in Computer
            Science and a Master's degree from a prestigious university in
            Cyprus, brings a wealth of knowledge and entrepreneurial spirit to
            231 Group. His dedication to excellence and commitment to innovation
            continue to drive our company's growth and success.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Join Us</h2>
          <Image src="/join_us.jpg" alt="Join Us" width={500} height={300} />
          <p>
            Whether you're looking for reliable energy solutions, luxury
            properties, or seeking to elevate your music career, 231 Group is
            your trusted partner. Explore our subsidiaries and discover how we
            can collaborate to achieve your goals.
          </p>
        </section>

        <footer className={styles.footer}>
          <Image
            src="/signature.png"
            alt="Signature"
            width={150}
            height={100}
          />
          <p>Sincerely,</p>
          <p>Jerrydim Ikechukwu</p>
          <p>Founder and CEO, 231 Group</p>
        </footer>
      </div>
      <Footer />
    </main>
  );
};

export default About;