import Categories from "../Home/Categories";
import { Navbar } from "../Home/Navbar";
import NewArrival from "../Home/NewArrival";
import PromoBar from "../Home/PromoBar";
import Slider from "../Home/Slider";
import TopHeader from "../Home/TopHeader";
import Fragrances from "../Home/Fragrances";
import Face from "../Home/Face";
import Lips from "../Home/Lips";
import SkinCare from "../Home/SkinCare";
import TestimonialSection from "../Home/Testimonial";
import Tranding from "../Home/Tranding";
import Brands from "../Home/Brands";
import Blog from "../Home/Blog";
import Footer from "../Home/Footer";

const MainNavbar = async () => {
  return (
    <>
      <PromoBar />
      <div className="bg-white shadow-sm sticky top-0 z-50 ">
        <TopHeader />
        <Navbar />
      </div>
      <Slider />
      <Categories />
      <NewArrival />
      <Tranding/>
      <Fragrances />
      <Face />
      <Lips/>
      <SkinCare/>
      <Brands/>
      <Blog/>
      {/* <TestimonialSection/> */}
      <Footer/>
    </>
  );
};

export default MainNavbar;
