import Header from "@/new-portfolio/components/Header";
import Footer from "@/new-portfolio/components/Footer";
import Development from "@/new-portfolio/components/Development";
import { useEffect, useState } from "react";

const MainLayout = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}): JSX.Element => {
  const [devStatus, setDevStatus] = useState("")
  useEffect(() => {
    setDevStatus(sessionStorage.getItem("devModal"));
  });
  return (
    <main className={`sm:mx-12 mx-3 overflow-hidden ${className}`}>
      <Header />
      <section data-scroll-container>{children}</section>
      {devStatus != "closed" && <Development />}
      <Footer />
    </main>
  );
};

export default MainLayout;
