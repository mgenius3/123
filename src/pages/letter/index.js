import Image from "next/image";
import styles from "./style.module.css";
import AnimatedSection from "@/components/animatedSection";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideNav from "@/components/sidenav";
import ScrollToTop from "@/components/scrolltoTop";
import { useState } from "react";

const CeoLetter = () => {
  const [showmobilesidenav, setMobileSideNav] = useState(false);

  return (
    <AnimatedSection>
      <Header
        setShowSideNav={setMobileSideNav}
        showSideNav={showmobilesidenav}
        home={true}
      />
      {showmobilesidenav && (
        <SideNav home={true} setShowSideNav={setMobileSideNav} />
      )}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/ceo.jpeg"
            alt="Jerrydim Ikechukwu"
            width={300}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.letterContainer}>
          <h1>A Letter from Our CEO</h1>
          <p>Dear Visitor,</p>
          <p>
            Welcome to the 231 Group of Companies, where innovation and
            excellence converge across diverse industries. My name is Jerrydim
            Ikechukwu, and I am privileged to introduce myself as the founder
            and CEO of this dynamic organization.
          </p>
          <p>
            Raised in the vibrant community of Enugu State, Nigeria, my journey
            began with a Bachelor&apos;s degree in Computer Science from a
            prestigious institution in Nigeria. Seeking to expand my knowledge
            and skills, I pursued and obtained a Master&apos;s degree from a
            renowned university in Cyprus, specializing in fields that would
            later become the cornerstone of my entrepreneurial pursuits.
          </p>
          <p>
            Fueled by a passion for business and innovation, I ventured into the
            oil and gas sector and real estate, establishing a robust presence
            and making meaningful contributions to both industries. My
            deep-seated love for music and the arts inspired the creation of 231
            Records, a platform dedicated to nurturing and promoting talented
            artists globally.
          </p>
          <p>
            Beyond business, I am fortunate to share my life with an
            accomplished International Lawyer, and together, we are blessed with
            wonderful children who bring joy and inspiration to our lives.
          </p>
          <p>
            At 231 Group of Companies, we are driven by principles of integrity,
            innovation, and excellence. Whether you are exploring opportunities
            in oil and gas, luxury homes, or music production, I invite you to
            join us on this journey of growth and success.
          </p>
          <p>
            Thank you for visiting our website. I look forward to connecting
            with you and exploring how we can collaborate to achieve mutual
            goals.
          </p>
          <p>Warm regards,</p>
          <p>Jerrydim Ikechukwu</p>
          <p>Founder and CEO</p>
          <p>231 Group of Companies</p>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </AnimatedSection>
  );
};

export default CeoLetter;
