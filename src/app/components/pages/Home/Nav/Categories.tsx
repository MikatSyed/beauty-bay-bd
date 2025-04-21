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

interface CategoriesItem {
  id: number
  image: string
  name: string
}

const Categories: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleSwiper = (swiperInstance: SwiperCore) => setSwiper(swiperInstance)

  const handlePrevious = () => swiper?.slidePrev()
  const handleNext = () => swiper?.slideNext()

  // Static data for Categories with category name
  const Categoriess: CategoriesItem[] = [
    {
      id: 1,
      image: "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/Untitled-design-11-150x150.png",
      name: "BESTSELLER",
    },
    {
      id: 2,
      image: "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0772-1-150x150.jpeg",
      name: "FACE",
    },
    {
      id: 3,
      image: "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0782-150x150.jpeg",
      name: "MAKEUP",
    },
    {
      id: 4,
      image: "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0772-1-150x150.jpeg",
      name: "EYES",
    },
    {
      id: 5,
      image: "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg",
      name: "LIPS",
    },
    {
      id: 6,
      image: "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/Untitled-design-11-150x150.png",
      name: "MAKEUP BRUSH",
    },
    {
      id: 7,
      image: "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/Untitled-design-11-150x150.png",
      name: "SKIN CARE",
    },
    {
      id: 8,
      image: "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0814-150x150.jpeg",
      name: "BODY CARE",
    },
    {
      id: 9,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/perfume.png",
      name: "PERFUME AND FRAGRANCES",
    },
    {
      id: 10,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/mother-baby.jpeg",
      name: "MOTHER & BABY CARE",
    },
    {
      id: 11,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/hair-care.jpeg",
      name: "HAIR CARE",
    },
    {
      id: 12,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/gift.jpeg",
      name: "GIFT",
    },
    {
      id: 13,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/accessories.jpeg",
      name: "ACCESSORIES",
    },
    {
      id: 14,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/bestseller-makeup.png",
      name: "BESTSELLER MAKEUP",
    },
    {
      id: 15,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/bestseller-skincare.png",
      name: "BESTSELLER SKINCARE",
    },
    {
      id: 16,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/viral.png",
      name: "VIRAL ON INTERNET",
    },
    {
      id: 17,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/new-arrivals.png",
      name: "NEW ARRIVALS",
    },
    {
      id: 18,
      image:
        "https://www.taupenotch.com.bd/wp-content/uploads/2024/09/IMG_0774-1-150x150.jpeg/images/categories/nails.jpeg",
      name: "NAILS",
    },
  ]

  return (
    <div className="bg-[#F7CAD0]">
      <div className="px-6 py-10 md:py-14 relative main">
        <h2 className="text-2xl md:text-3xl font-weight-600 text-center mb-12">Shop By Category</h2>

        <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <Swiper
            onSwiper={handleSwiper}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
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
            {Categoriess.map((category) => (
              <SwiperSlide key={category.id} className="bg-white rounded-lg ">
                <div className="flex justify-center mb-4 relative">
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

export default Categories

