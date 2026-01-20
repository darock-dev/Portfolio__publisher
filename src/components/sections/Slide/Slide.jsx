import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slide.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard, A11y } from "swiper/modules";
import slideImg01 from "../../../assets/images/main/slide_img01.png";
import slideImg02 from "../../../assets/images/main/slide_img02.png";
import slideImg03 from "../../../assets/images/main/slide_img03.png";
import slideImg04 from "../../../assets/images/main/slide_img04.png";
import slideImg05 from "../../../assets/images/main/slide_img05.png";

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
  return (
    <section id="slide-sec" className={styles.slideSec}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>
            <div>Swiper 플러그인을 사용한</div>
            <div>
              Section03. <span>Slide</span>
            </div>
          </h2>
          <div className={styles.subTitle}>Swiper 플러그인을 사용한 Slide</div>
        </div>
        <div className={styles.content}>
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
            className={styles.slideSwiper}
          >
            {slideData.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.imgSrc} />
                <div className={styles.title}>{item.title}</div>
                <p className={styles.desc}>{item.desc}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
