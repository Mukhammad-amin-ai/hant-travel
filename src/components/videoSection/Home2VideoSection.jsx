"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import Link from "next/link";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
// SwiperCore.use([Autoplay, EffectFade, Pagination]);

const Home2VideoSection = () => {
  const endTime = "2024-03-24";
  const { days, hours, minutes, seconds } = useCountdownTimer(endTime);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
    };
  }, []);
  return (
    <>
      <div className="video-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://www.shutterstock.com/shutterstock/videos/1054751255/preview/stock-footage-tilt-shift-time-lapse-sunrise-of-muslim-pilgrims-circling-around-the-holy-kaaba-at-dawn-and-praying.webm"
        ></video>
      </div>
      <div className="banner5-section mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <Swiper {...settings} className="swiper banner5-slider"> */}
              <div className="swiper-wrapper">
                {/* <SwiperSlide className="swiper-slide"> */}
                <div className="banner5-card">
                  <div className="banner5-content">
                    <span>Savings worldwide</span>
                    <h3>20% Off</h3>
                    <Link href="/package">Discover Great Deal</Link>
                  </div>
                  <div className="banner5-timer">
                    <h1>Hadjj / Umrah</h1>
                  </div>
                  <Link
                    href="/package?type=Piligrimage"
                    className="primary-btn2"
                  >
                    Book a Trip
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                      <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                    </svg>
                  </Link>
                </div>
                {/* </SwiperSlide> */}
              </div>
              {/* </Swiper> */}
            </div>
          </div>
        </div>
        {/* <div className="slider-btn-grp2">
          <div className="slider-btn banner5-slider-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={20}
              viewBox="0 0 10 20"
            >
              <path d="M9.58985 0.608227L9.46322 0.476797L0.152848 10.0006L9.46322 19.5244L9.58984 19.393L9.58984 15.212L4.49707 10.0006L9.58985 4.78918L9.58985 0.608227Z" />
            </svg>
          </div>
          <div className="slider-btn banner5-slider-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={20}
              viewBox="0 0 10 20"
            >
              <path d="M0.408203 19.3918L0.534824 19.5232L9.8452 9.99939L0.534824 0.475586L0.408203 0.607014L0.408203 4.78797L5.50098 9.99939L0.408203 15.2108L0.408203 19.3918Z" />
            </svg>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home2VideoSection;
