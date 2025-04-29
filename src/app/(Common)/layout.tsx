"use client";

import Footer from "../components/pages/Home/Footer";
import { Navbar } from "../components/pages/Home/Navbar";
import TopHeader from "../components/pages/Home/TopHeader";






export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
    <TopHeader/>
    <Navbar />
      {children}
    <Footer/>
    </>
  );
}
