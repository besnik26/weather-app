import { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./Forecast.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Forecast({ title, data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,           
    arrows: false,         
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,           
    touchMove: true,       
  };
  

  return (
    <div>
      <div className={styles.forecastTitleMain}>
        <p>{title}</p>
      </div>
      <hr />
      {isMobile ? (
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className={styles.forecastDay} key={index}>
              <p>{d.title}</p>
              <img src={d.icon} alt="" />
              <h4>{`${d.temp.toFixed()}°`}</h4>
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.coverDiv}>
          {data.map((d, index) => (
            <div className={styles.forecastDay} key={index}>
              <p>{d.title}</p>
              <img src={d.icon} alt="" />
              <h4>{`${d.temp.toFixed()}°`}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
