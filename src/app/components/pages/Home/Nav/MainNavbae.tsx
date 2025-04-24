import Categories from "./Categories";
import { Navbar } from "./Navbar";
import NewArrival from "./NewArrival";
import PromoBar from "./PromoBar";
import Slider from "./Slider";
import TopHeader from "./TopHeader";
import Fragrances from "./Fragrances";
import Face from "./Face";
import Lips from "./Lips";
import SkinCare from "./SkinCare";
import TestimonialSection from "../Testimonial";
import Tranding from "./Tranding";
import Brands from "./Brands";

const MainNavbar = async () => {
  return (
    <>
      <PromoBar />
      <div className="bg-white shadow-sm sticky top-0 z-50 ">
        <TopHeader />
        {/* <Navbar /> */}
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
      <TestimonialSection/>
    </>
  );
};

export default MainNavbar;
