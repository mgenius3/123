import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideNav from "@/components/sidenav";
import Main from "@/components/main";
import { useState } from "react";
import ScrollToTop from "@/components/scrolltoTop";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showmobilesidenav, setMobileSideNav] = useState(false);
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
      <Main />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
