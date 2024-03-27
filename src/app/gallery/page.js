"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import gallery from "../../data/custom/gallery.json";

const Page = () => {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  return (
    <>
      <div className="destination-gallery pt-120 mb-120">
        <div className="container">
          <div className="row g-4 mb-70">
            {gallery.map((item, index) => (
              <div className={`${item.class} col-sm-6`}>
                <div className="gallery-img-wrap">
                  <img src={item.img} alt="" />
                  <a
                    data-fancybox="gallery-01"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: item.id })
                    }
                  >
                    <i className="bi bi-eye" /> Open image
                  </a>
                </div>
              </div>
            ))}
          </div>
          {gallery?.length > 9 ? (
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <a href="#" className="primary-btn1">
                  Load More
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={gallery.map(function (elem) {
          return { src: elem.img };
        })}
      />
    </>
  );
};

export default Page;
