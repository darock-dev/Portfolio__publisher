import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard, A11y } from "swiper/modules";
import slideImg01 from "../../../assets/images/main/slide_img01.png";
import slideImg02 from "../../../assets/images/main/slide_img02.png";
import slideImg03 from "../../../assets/images/main/slide_img03.png";
import slideImg04 from "../../../assets/images/main/slide_img04.png";
import slideImg05 from "../../../assets/images/main/slide_img05.png";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const slideData = [
  {
    id: 1,
    title: "Swiper Slide 입니다.",
    desc: "Swiper 플러그인을 사용한 Slide 입니다. 하단의 버튼을 통해 슬라이드 이동이 가능합니다.",
    imgSrc: slideImg01,
  },
  {
    id: 2,
    title: "Swiper Slide 입니다.",
    desc: "Swiper 플러그인을 사용한 Slide 입니다. 하단의 버튼을 통해 슬라이드 이동이 가능합니다.",
    imgSrc: slideImg02,
  },
  {
    id: 3,
    title: "Swiper Slide 입니다.",
    desc: "Swiper 플러그인을 사용한 Slide 입니다. 하단의 버튼을 통해 슬라이드 이동이 가능합니다.",
    imgSrc: slideImg03,
  },
  {
    id: 4,
    title: "Swiper Slide 입니다.",
    desc: "Swiper 플러그인을 사용한 Slide 입니다. 하단의 버튼을 통해 슬라이드 이동이 가능합니다.",
    imgSrc: slideImg04,
  },
  {
    id: 5,
    title: "Swiper Slide 입니다.",
    desc: "Swiper 플러그인을 사용한 Slide 입니다. 하단의 버튼을 통해 슬라이드 이동이 가능합니다.",
    imgSrc: slideImg05,
  },
];

export default function Slide() {
  useScrollAnimation();

  return (
    <section id="slide-sec" className="section bg-gray-50">
      <div className="inner max-w-auto">
        <div className="">
          <h2 className="section-title scroll-animate">
            <div>Swiper 플러그인을 사용한</div>
            <div>
              Section03. <span className="text-blue-500">Slide</span>
            </div>
          </h2>
          <div className="section-subtitle scroll-animate">Swiper 플러그인을 사용한 Slide</div>
        </div>
        <div className="scroll-animate">
          <Swiper
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Keyboard, A11y]}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            keyboard={{
              enabled: true,
            }}
            className="slideSwiper pb-17.5!"
          >
            {slideData.map((item) => (
              <SwiperSlide key={item.id}>
                <img className="w-full h-auto mb-5" src={item.imgSrc} />
                <div className="font-bold text-4xl mb-10">{item.title}</div>
                <p className="text-base mb-5 text-gray-500">{item.desc}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
