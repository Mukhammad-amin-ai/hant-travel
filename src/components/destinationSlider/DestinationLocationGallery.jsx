"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const DestinationLocationGallery = (props) => {
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
      <div className="destination-location-gallery mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{props.name} City Location.</h3>
            </div>
            <div className="col-lg-12 mb-60">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {props.data.map((item, index) => (
                  <li className="nav-item" role="presentation" key={item.id}>
                    <button
                      className={`nav-link ${
                        index === item.id ? "active" : ""
                      }`}
                      style={
                        index === item.id
                          ? { backgroundImage: `url(${item.img})` }
                          : {}
                      }
                      id={`location${item.id}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#location${item.id}`}
                      type="button"
                      role="tab"
                      aria-controls={`location${item.id}`}
                      aria-selected={index === item.id ? "true" : "false"}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>

              {/* <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="location2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#location2"
                    type="button"
                    role="tab"
                    aria-controls="location2"
                    aria-selected="false"
                  >
                    Sajek Vally
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="location3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#location3"
                    type="button"
                    role="tab"
                    aria-controls="location3"
                    aria-selected="false"
                  >
                    Saint Martin
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="location4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#location4"
                    type="button"
                    role="tab"
                    aria-controls="location4"
                    aria-selected="false"
                  >
                    Bandar ban
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="location5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#location5"
                    type="button"
                    role="tab"
                    aria-controls="location5"
                    aria-selected="false"
                  >
                    Khagrachori
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="location6-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#location6"
                    type="button"
                    role="tab"
                    aria-controls="location6"
                    aria-selected="false"
                  >
                    Sea Beach
                  </button>
                </li> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="location1"
                  role="tabpanel"
                >
                  <div className="destination-gallery">
                    <div className="row g-4">
                      {props.galery.map((item, index) => (
                        <div className={`${item.class} col-sm-6`}>
                          <div className="gallery-img-wrap">
                            <img src={item.img} alt="" />
                            <a
                              data-fancybox="gallery-01"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: index,
                                })
                              }
                            >
                              <i className="bi bi-eye" /> Discover
                            </a>
                          </div>
                        </div>
                      ))}
                      {/* <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-01.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 1,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-02.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 2,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-03.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 3,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-04.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 4,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-05.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 5,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className="tab-pane fade" id="location2" role="tabpanel">
                  <div className="destination-gallery">
                    <div className="row g-4">
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-06.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 0,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-01.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 1,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-02.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 2,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-03.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 3,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-04.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 4,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-05.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 5,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="location3" role="tabpanel">
                  <div className="destination-gallery">
                    <div className="row g-4">
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-06.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 0,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-01.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 1,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-02.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 2,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-03.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 3,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-04.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 4,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-05.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 5,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="location4" role="tabpanel">
                  <div className="destination-gallery">
                    <div className="row g-4">
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-06.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 0,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-01.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 1,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-02.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 2,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-03.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 3,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-04.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 4,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-05.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 5,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="location5" role="tabpanel">
                  <div className="destination-gallery">
                    <div className="row g-4">
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-06.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 0,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-01.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 1,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-02.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 2,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-03.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 3,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-04.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 4,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-05.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 5,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="location6" role="tabpanel">
                  <div className="destination-gallery">
                    <div className="row g-4">
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-06.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 0,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-01.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 1,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-02.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 2,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-03.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 3,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-04.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 4,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/innerpage/gallery-05.jpg"
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 5,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={props.galery.map(function (elem) {
          return { src: elem.img };
        })}
      />
    </>
  );
};

export default DestinationLocationGallery;
