import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideNav from "@/components/sidenav";
import { useState } from "react";
import OilGas from "@/components/oilgas";
import ScrollToTop from "@/components/scrolltoTop";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showmobilesidenav, setMobileSideNav] = useState(false);
  return (
    <main>
      <Header
        setShowSideNav={setMobileSideNav}
        showSideNav={showmobilesidenav}
      />
      {showmobilesidenav && <SideNav setShowSideNav={setMobileSideNav} />}
      <OilGas />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
