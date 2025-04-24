"use client"
import type React from "react"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperCore } from "swiper"
// Import Swiper modules
import { Autoplay } from "swiper/modules"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

// Default fallback image for missing profile pictures
const DEFAULT_AVATAR = "/assets/default-avatar.jpg"

interface BrandsItem {
  id: number
  image: string
  name: string
}

const Brands: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleSwiper = (swiperInstance: SwiperCore) => setSwiper(swiperInstance)

  const handlePrevious = () => swiper?.slidePrev()
  const handleNext = () => swiper?.slideNext()

  // Static data for Brands with category name
  const Brands: BrandsItem[] = [
    // UK Brands
    {
      id: 1,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Charlotte Tilbury",
    },
    {
      id: 2,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Makeup Revolution",
    },
  
    // USA Brands
    {
      id: 3,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Fenty Beauty",
    },
    {
      id: 4,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Rare Beauty",
    },
  
    // Skincare
    {
      id: 5,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "The Ordinary",
    },
    {
      id: 6,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "CeraVe",
    },
  
    // Makeup
    {
      id: 7,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "NARS",
    },
    {
      id: 8,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Maybelline",
    },
  
    // Bath & Body
    {
      id: 9,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Bath & Body Works",
    },
    {
      id: 10,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Tree Hut",
    },
  
    // Perfume
    {
      id: 11,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Dior",
    },
    {
      id: 12,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Jo Malone",
    },
  
    // Hair Care
    {
      id: 13,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=1676904136",
      name: "Olaplex",
    },
    {
      id: 14,
      image: "https://fantasticlook.al/cdn/shop/collections/ceravebrandlogo.png?v=16769041366",
      name: "Moroccanoil",
    },
  

  ];
  

  return (
    <div >
      <div className="px-6 py-10 md:py-14 relative main">
        <h2 className="text-2xl md:text-3xl font-weight-600 text-center mb-12">Shop By Brands</h2>

        <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <Swiper
            onSwiper={handleSwiper}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 4, spaceBetween: 10 },
              992: { slidesPerView: 6, spaceBetween: 10 },
              1024: { slidesPerView: 8, spaceBetween: 10 },
            }}
            className="custom-swiper h-[200px]"
          >
            {Brands.map((category) => (
              <SwiperSlide key={category.id} className="bg-white rounded-lg ">
                <div className="flex justify-center mb-2 relative">
                  <img
                    src={category.image || DEFAULT_AVATAR}
                    alt={`Image of ${category.name}`}
                    className="rounded-md w-[150px] h-[147px] p-1"
                  />
                </div>
                <div className="text-center">
                  <h5 className="text-md font-weight-600 text-gray-700">{category.name}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`text-black bg-white w-10 h-10 flex items-center justify-center rounded absolute top-[5.5rem] -translate-y-1/2 left-[-2.5rem] md:left-[0.5rem] z-20 shadow-md hover:bg-gray-100 transition ${
              isHovering ? "opacity-100" : "opacity-0"
            } duration-300`}
            onClick={handlePrevious}
          >
            <IoIosArrowBack className="w-6 h-6" />
          </button>

          <button
            className={`text-black bg-white w-10 h-10 flex items-center justify-center rounded absolute top-[5.5rem] -translate-y-1/2 right-[-2.5rem] md:right-[0.5rem] z-20 shadow-md hover:bg-gray-100 transition ${
              isHovering ? "opacity-100" : "opacity-0"
            } duration-300`}
            onClick={handleNext}
          >
            <IoIosArrowForward className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Brands;

