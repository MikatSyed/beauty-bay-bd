"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Slider = () => {
  return (
    <div className="py-8">
      {/* Main Slider */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full mb-8 custom-swiper"
      >
        {/* First Slide with Text and Button */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              src="https://www.lookfantastic.com/images?url=https://static.thcdn.com/widgets/95-en/54/original-LF_CROP-1920x600-131054.jpg&format=webp&auto=avif&width=1366&fit=cover"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
              <div className="flex flex-col justify-center h-full max-w-lg pl-6 md:pl-20 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-white">Summer Collection</h2>
                <p className="text-sm md:text-base text-white/90 max-w-md">
                  Discover our new summer essentials with up to 50% off selected items. Get ready to refresh your wardrobe with light, breathable fabrics and trendy designs that define this season’s must-haves.
                </p>
                <div>
                  <a href="#" className="bg-black text-white px-4 py-3 rounded-md hover:bg-white/90 inline-block">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide with Text and Button */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              src="https://www.cultbeauty.co.uk/images?url=https://static.thcdn.com/widgets/257-en/41/original-3-1920x600-172741.jpg&format=webp&auto=avif&width=1366&fit=cover"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
              <div className="flex flex-col justify-center h-full max-w-lg pl-6 md:pl-20 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-white">Luxury Skincare</h2>
                <p className="text-sm md:text-base text-white/90 max-w-md">
                  Premium skincare products for your daily routine. Treat yourself today. Indulge in the finest ingredients designed to hydrate, rejuvenate, and nourish your skin, giving you a natural glow that lasts all day.
                </p>
                <div>
                  <a href="#" className="bg-black text-white px-4 py-3 rounded-md hover:bg-white/90 inline-block">Explore Collection</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Third Slide (Original) */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              src="https://www.cultbeauty.co.uk/images?url=https://static.thcdn.com/widgets/257-en/59/original-HP_multi-cat_desktop-144859.jpg&format=webp&auto=avif&width=1366&fit=covers"
              alt="Slide 3"
              className="w-full h-[500px] object-cover"
            />
          
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider