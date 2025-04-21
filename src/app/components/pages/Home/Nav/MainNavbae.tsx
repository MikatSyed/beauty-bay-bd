

import Categories from "./Categories";
import {Navbar} from "./Navbar";
import NewArrival from "./NewArrival";
import PromoBar from "./PromoBar";
import Slider from "./Slider";
import TopHeader from "./TopHeader";


const MainNavbar = async() => {

  return (
    <>
      <PromoBar/>
      <TopHeader />
      <Navbar />
      <Slider/>
      <Categories/>
      <NewArrival/>
     
    </>
  );
};

export default MainNavbar;
