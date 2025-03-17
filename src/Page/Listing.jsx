import React, { useState } from "react";
import "./Listing.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/images/Burj-Azizi-Brochure-0.jpg";
import img2 from "../assets/images/Burj-Azizi-Brochure-1.jpg";
import img3 from "../assets/images/Burj-Azizi-Brochure-2.jpg";
import chevron from "../assets/images/chevron.png";
import pin from "../assets/images/free-pin-icon-48-thumb.png";
export default function Listing() {
  let [according, setAccording] = useState([
    {
      title: "Iconic Architectural Design",
      description:
        "Burj Azizi Tower stands as a symbol of modern luxury, featuring a sleek, futuristic design that redefines Dubai’s skyline. The tower’s glass façade and innovative structure ensure breathtaking views of the city and coastline.",
      opened: false,
    },
    {
      title: "World-Class Amenities",
      description:
        "Residents and visitors enjoy top-tier amenities, including a rooftop infinity pool, state-of-the-art fitness center, luxury spa, and fine dining restaurants. The tower offers an unmatched lifestyle experience in the heart of Dubai.",
      opened: false,
    },
    {
      title: "Prime Location & Connectivity",
      description:
        "Strategically located in a prime district, Burj Azizi provides easy access to Dubai Marina, Palm Jumeirah, and Sheikh Zayed Road. With proximity to shopping malls, business hubs, and metro stations, convenience is at its peak.",
      opened: false,
    },
  ]);
  return (
    <div className="listing-main-container">
      <div
        className="details-main-container d-flex gap a-start"
        style={{ "--gap": "50px" }}
      >
        <div
          className="property-header flex-1 d-flex d-col gap"
          style={{ "--gap": "20px" }}
        >
          <h1 className="Kugile light">Burj Azizi</h1>
          <h4 className="xxxl medium">
            <span>From -</span> <span className="price">8,000,000 AED</span>
          </h4>
          <a
            className="d-flex a-center gap-10 underline black xl"
            href="https://maps.app.goo.gl/qmHS6t74RzaPeiTy8"
            target="_blank"
          >
            <img src={pin} style={{ height: 20 }} />
            <span>Sheikh Zayed Rd - Dubai - UAE</span>
          </a>
        </div>
      </div>
      <div className="swiper-main-container overflow-hidden">
        <Swiper
          pagination={{ clickable: true }}
          loop={true} // Enables looping
          navigation={true} // Adds navigation arrows
          modules={[Pagination, Navigation, Autoplay]}
          className="h100"
          spaceBetween={20}
          autoplay={{
            delay: 2500, // Delay before auto-swiping (2.5s)
            disableOnInteraction: false, // Keeps autoplay even after user interaction
            pauseOnMouseEnter: true, // Keeps autoplay even after user interaction
          }}
          speed={1000} // Swiping duration (1s)
        >
          <SwiperSlide>
            <img src={img1} className="h100 w100 cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} className="h100 w100 cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} className="h100 w100 cover" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="details-main-container d-flex mobile-d-col gap a-start"
        style={{ "--gap": "50px" }}
      >
        <div
          className="details-container flex-1 d-flex d-col gap"
          style={{ "--gap": "20px" }}
        >
          <div className="description l medium">
            <p>
              Burj Azizi is set to become the world’s second-tallest building,
              an architectural landmark developed by{" "}
              <strong>Azizi Developments.</strong> The project is expected to be
              completed by December 2029.
              <br />
              <br />
              The tower will feature luxurious 1–3 bedroom apartments and
              penthouses, with prices starting at{" "}
              <strong>AED 8 million (USD 2 million)</strong>
              for a 1-bedroom unit. Buyers can benefit from a 50/50 payment
              plan.
              <br />
              <br />
              <strong>
                Burj Azizi is designed to break multiple world records,
                including:
              </strong>
            </p>
            <br />
            <ul>
              <li>The highest lobby and supermarket</li>
              <li>The highest cinema and nightclub</li>
              <li>The highest spa and restaurant</li>
            </ul>
            <br />
            <p>
              Residents will enjoy breathtaking views from an observation deck,
              along with access to exclusive amenities such as swimming pools, a
              yoga studio, and a 7-star hotel inspired by seven distinct
              cultural themes.
            </p>
          </div>
          <div className="according-container d-flex d-col gap">
            {according.map(({ title, description, opened }, index) => {
              return (
                <AccordingItem
                  key={index}
                  title={title}
                  description={description}
                  opened={opened}
                  isLast={index == according.length - 1}
                  onToggle={(_) => {
                    setAccording((prev) =>
                      prev.map((prevItem, prevIndex) => {
                        if (index == prevIndex)
                          return { ...prevItem, opened: !opened };
                        return { ...prevItem, opened: false };
                      })
                    );
                  }}
                />
              );
            })}
          </div>
          <div className="video-container overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2sJOpLlOaG4?si=sFJxldfUGoDzok3W"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="cta-btns-container d-flex d-col gap-20 a-center j-center">
          <p className="text-center">Interested ?</p>
          <a
            href="https://luxuryhomesrealestate.ae/"
            target="_blank"
            className="cta-btn text-center d-flex a-center j-center relative transition-3"
          >
            <span>Request a Tour</span>
            <span className="chevron xxxl transition-3 absolute">›</span>
          </a>
        </div>
      </div>
    </div>
  );
}
function AccordingItem({ title, description, opened, onToggle, isLast }) {
  return (
    <div className="according-item d-flex d-col gap-10" is-last={`${isLast}`}>
      <h4 className="d-flex xxl a-center j-between pointer" onClick={onToggle}>
        <span>{title}</span>
        <img
          src={chevron}
          className={`transition-3 rotate`}
          style={{ height: 25, "--rotate-deg": opened ? "180deg" : 0 }}
        />
      </h4>

      <div
        className="description-container transition-5 overflow-hidden"
        style={{ maxHeight: opened ? 200 : 0, opacity: opened ? 1 : 0 }}
      >
        <p>{description}</p>
      </div>
    </div>
  );
}
