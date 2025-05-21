// Import Css File
import "./testimonials.css";

// Import Testimonials Data
import { testimonials } from "../../Data";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Shape From Imgs Folder
import shape from "../../assets/imgs/shape-2.png";

// Import Material Ui Icons
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

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

export default function Testimonials() {
  const { mainColorNow, modeState } = useContext(ThemeContext);

  const testimonialsList = testimonials.map((item) => {
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
        <div className="customer-picture">
          <img src={item.img} alt="" className="picture" />
          <FormatQuoteIcon
            className="icon same-main-color"
            style={{
              backgroundColor:
                modeState === "light"
                  ? mainColorNow.backgroundColor.lightMode
                  : mainColorNow.backgroundColor.darkMode,
            }}
          />
        </div>

        <p className={`description same-text-color`}>{item.description}</p>

        <div className="info">
          <h4 className="name same-title-color">{item.name}</h4>

          <span className="job same-text-color">{item.job}</span>
        </div>

        <img src={shape} alt="" className="shape" />
      </SwiperSlide>
    );
  });

  return (
    <div
      className={`testimonials main-section ${modeState} ${mainColorNow.title}`}
      id="testimonials"
    >
      <div className="container">
        <div className="main-heading">
          <h2 className={`subtitle same-title-color`}>Testimonials</h2>
          <h4 className={`title same-main-color`}>My Customers Say</h4>
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
            {testimonialsList}
          </Swiper>
        </div>
      </div>

      <DecorationSection direction="right" />
    </div>
  );
}
