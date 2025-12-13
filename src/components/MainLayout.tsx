import Header from "@/new-portfolio/components/Header";
import Footer from "@/new-portfolio/components/Footer";

import type { JSX } from "react";

const MainLayout = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}): JSX.Element => {
  return (
    <main className={`sm:mx-12 mx-3 overflow-hidden ${className}`}>
      <Header />
      <section data-scroll-container>{children}</section>
      <Footer />
    </main>
  );
};

export default MainLayout;
