// Import Css File
import "./servicesSetcion.css";

// Import Data
import { services } from "../../Data";

// Import Shape From Imgs Folder
import shape from "../../assets/imgs/shape-2.png";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Matrial Ui Icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// It`s Mine
import "../../swiperSlider.css";

// Import Shape Component
import DecorationSection from "../sectionDesign/DecorationSection";

export default function ServicesSection() {
  const { mainColorNow, modeState } = useContext(ThemeContext);

  const servicesList = services.map((item) => {
    return (
      <SwiperSlide
        key={item.id}
        className="swiper-slide"
        style={{
          backgroundColor:
            modeState === "light"
              ? mainColorNow.backgroundColor.lightMode
              : mainColorNow.backgroundColor.darkMode,
        }}
      >
        <img src={shape} alt="" className="shape" />

        <span className={`subtitle same-title-color`}>{item.subtitle}</span>

        <h3 className={`title same-title-color`}>{item.title}</h3>

        <p className={`description same-text-color`}>{item.description}</p>

        <a href="/" className={`same-title-color`}>
          See Pricing <ArrowRightAltIcon className={`icon same-main-color`} />
        </a>
      </SwiperSlide>
    );
  });

  return (
    <div
      className={`services main-section ${modeState} ${mainColorNow.title}`}
      id="services"
    >
      <div className="container">
        <div className="main-heading">
          <h2 className={`subtitle same-title-color`}>What I Do</h2>
          <h4 className={`title same-main-color`}>My Services</h4>
        </div>

        <div className="slider">
          <Swiper
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              590: {
                slidesPerView: 2,
              },
              993: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="my-swiper"
          >
            {servicesList}
          </Swiper>
        </div>
      </div>

      <DecorationSection direction="right" />
    </div>
  );
}
