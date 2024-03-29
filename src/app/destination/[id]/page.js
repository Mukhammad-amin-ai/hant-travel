"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import RecommendatedPackage from "@/components/tourPackage/RecommendatedPackage";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Link from "next/link";
import DestinationLocationGallery from "@/components/destinationSlider/DestinationLocationGallery";
import DestinationDetails from "../../../data/custom/destinationDetails.json";

const Page = ({ params }) => {
  const router = params.id;
  
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 6,
      imageBig: "/assets/img/innerpage/gallery-06.jpg",
    },
    {
      id: 1,
      imageBig: "/assets/img/innerpage/gallery-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/gallery-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/gallery-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/gallery-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/gallery-05.jpg",
    },
  ];

  return (
    <>
      <Breadcrumb pagename="Country Details" pagetitle="Country Details" />
      <div className="destination-details-wrap mb-120 pt-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <h2>{DestinationDetails[router].title}</h2>
              <p>{DestinationDetails[router].description}</p>
              <div className="destination-gallery mb-40 mt-40">
                <div className="row g-4">
                  {DestinationDetails[router].galery.map((item, index) => (
                    <div className={`${item.class} col-sm-6`} key={index}>
                      <div className="gallery-img-wrap">
                        <img
                          src={item.img}
                          style={{ height: "219px", width: "100%" }}
                          alt=""
                        />
                        <a data-fancybox="gallery-01">
                          <i
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 0,
                              })
                            }
                            className="bi bi-eye"
                          />{" "}
                          Discover {DestinationDetails[router].name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h2>Things To Do</h2>
              <ul style={{ columns: "1" }}>
                {DestinationDetails[router].tourism.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      style={{ height: "280px", width: "100%" }}
                      src={DestinationDetails[router].galery[0].img}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      style={{ height: "280px", width: "100%" }}
                      src={DestinationDetails[router].galery[1].img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="destination-sidebar">
                <div className="destination-info mb-30">
                  <div className="single-info">
                    <span>Destination:</span>
                    <h5>{DestinationDetails[router].destionation}</h5>
                  </div>
                  <div className="single-info">
                    <span>Population:</span>
                    <h5>{DestinationDetails[router].population} million</h5>
                  </div>
                  <div className="single-info">
                    <span>Capital City:</span>
                    <h5>{DestinationDetails[router].capital}</h5>
                  </div>
                  <div className="single-info">
                    <span>Language:</span>
                    <h5>{DestinationDetails[router].language}</h5>
                  </div>
                  <div className="single-info">
                    <span>Currency:</span>
                    <h5>{DestinationDetails[router].currency}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DestinationLocationGallery
        data={DestinationDetails[router].locations}
        galery={DestinationDetails[router].locationGalery}
      />
      <RecommendatedPackage />
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={DestinationDetails[router].galery.map(function (elem) {
          return { src: elem.img };
        })}
      />
    </>
  );
};

export default Page;
