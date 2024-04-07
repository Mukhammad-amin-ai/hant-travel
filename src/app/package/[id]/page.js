"use client";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import DatePicker from "react-datepicker";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import packageShow from "../../../data/custom/packageShow.json";

const Page = ({ params }) => {
  const router = params.id - 1;

  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [booking, setBooking] = useState("active show");
  const [form, setForm] = useState("");
  let handleDateChange = () => {
    console.log(startDate);
    console.log(endDate);
  };

  let Gotoform = () => {
    setBooking("");
    setForm("active show");
  };

  return (
    <>
      <Breadcrumb pagename="Package Details" pagetitle="Package Details" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img
                        style={{ height: "500px" }}
                        src={packageShow[0].galley[0].img}
                        alt=""
                      />
                      <a>
                        <i
                          className="bi bi-eye"
                          onClick={() =>
                            setOpenimg({ openingState: true, openingIndex: 0 })
                          }
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 h-100">
                    <div className="row g-3 h-100">
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img
                            style={{ height: "234px" }}
                            src={packageShow[0].galley[1].img}
                            alt=""
                          />
                          <a>
                            <i
                              className="bi bi-eye"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: 1,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img
                            style={{ height: "234px" }}
                            src={packageShow[0].galley[2].img}
                            alt=""
                          />
                          <a>
                            <i
                              className="bi bi-eye"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: 2,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img
                            style={{ height: "234px" }}
                            src={packageShow[0].galley[3].img}
                            alt=""
                          />
                          <a>
                            <i
                              className="bi bi-eye"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: 3,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gallery-img-wrap ">
                          <img
                            style={{ height: "234px" }}
                            src={packageShow[0].galley[3].img}
                            alt=""
                          />
                          <a>
                            <i
                              className="bi bi-eye"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: 4,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="others-image-wrap d-none">
            <a
              href="assets/img/innerpage/package-01.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-02.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-03.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-04.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-05.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
          </div>
          <div className="row g-xl-4 gy-5">
            <div className="col-xl-8">
              <h2>{packageShow[router].title}</h2>
              <div className="tour-price">
                <h3> ${packageShow[router].price}</h3>
                <span> per person</span>
              </div>
              <ul className="tour-info-metalist">
                <li>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z"></path>
                  </svg>
                  {packageShow[router].length}
                </li>
                <li>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7ZM14 12.8333C14 14 12.8333 14 12.8333 14H1.16667C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333Z"></path>
                  </svg>
                  Max People : {packageShow[router].maxPeople}
                </li>
                <li>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 0.43748C14 0.372778 13.9856 0.308889 13.9579 0.250418C13.9302 0.191947 13.8898 0.140348 13.8398 0.0993396C13.7897 0.0583312 13.7312 0.0289339 13.6684 0.0132656C13.6057 -0.00240264 13.5402 -0.00395173 13.4768 0.00872996L9.1875 0.86623L4.89825 0.00872996C4.84164 -0.00258444 4.78336 -0.00258444 4.72675 0.00872996L0.35175 0.88373C0.252608 0.903546 0.163389 0.957088 0.099263 1.03525C0.0351366 1.11342 6.10593e-05 1.21138 0 1.31248L0 13.5625C3.90711e-05 13.6272 0.0144289 13.6911 0.0421328 13.7495C0.0698367 13.808 0.110165 13.8596 0.160212 13.9006C0.210259 13.9416 0.268779 13.971 0.331556 13.9867C0.394332 14.0024 0.459803 14.0039 0.52325 13.9912L4.8125 13.1337L9.10175 13.9912C9.15836 14.0025 9.21664 14.0025 9.27325 13.9912L13.6482 13.1162C13.7474 13.0964 13.8366 13.0429 13.9007 12.9647C13.9649 12.8865 13.9999 12.7886 14 12.6875V0.43748ZM4.375 12.3287V0.97123L4.8125 0.88373L5.25 0.97123V12.3287L4.89825 12.2587C4.84165 12.2474 4.78335 12.2474 4.72675 12.2587L4.375 12.3287ZM8.75 13.0287V1.67123L9.10175 1.74123C9.15836 1.75254 9.21664 1.75254 9.27325 1.74123L9.625 1.67123V13.0287L9.1875 13.1162L8.75 13.0287Z"
                    ></path>
                  </svg>
                  {packageShow[router].location}
                </li>
              </ul>
              <p>{packageShow[router].description}</p>
              <h4>Included</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  {packageShow[router].iclueded.map((item, index) => (
                    <li key={index}>
                      <i className="bi bi-check-lg" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="highlight-tour mb-20">
                <h4>Additionally</h4>
                <ul>
                  {packageShow[router].excluded.map((item, index) => (
                    <li key={index}>
                      <span>
                        <i className="bi bi-check" />
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <h4>Itinerary</h4>
              <div className="accordion tour-plan" id="tourPlan">
                {packageShow[router].plan.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2
                      className="accordion-header"
                      id={`heading${item.heading}`}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.heading}`}
                        aria-expanded="true"
                        aria-controls={`collapse${item.heading}`}
                      >
                        <span>Day 0{item.id} :</span> {item.name}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.heading}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${item.heading}`}
                      data-bs-parent="#tourPlan"
                    >
                      <div className="accordion-body">
                        <p>{item.description}</p>
                        <ul>
                          {item.places.map((item, index) => (
                            <li key={index}>
                              <i className="bi bi-check-lg" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p style={{ paddingTop: "10px" }}>
                          Duration of the excursion program: {item.duration}{" "}
                          hours
                        </p>
                        <ul>
                          {item.departure.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tour-location">
                <h4>Location Map</h4>
                <div className="map-area mb-30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193325.0481540361!2d-74.06757856146028!3d40.79052383652264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1660366711448!5m2!1sen!2sbd"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="faq-content-wrap mb-80">
                <div className="faq-content-title mb-20">
                  <h4>Frequently Asked &amp; Question</h4>
                </div>
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="true"
                          aria-controls="travelcollapseOne"
                        >
                          01. How do I book a trip on your website?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inci only Integer purus onthis felis non
                          aliquam.Mauris nec just vitae ann auctor tol euismod
                          sit amet non ipsul growing this.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseTwo"
                          aria-expanded="false"
                          aria-controls="travelcollapseTwo"
                        >
                          02. What payment methods do you accept?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos only Integer purus onthis
                          placerat felis non aliquam.Mauris nec justo vitae ante
                          auctor tol euismod sit amet non ipsul growing this
                          Praesent commodo at massa eget suscipit. Utani vitae
                          enim velit.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseThree"
                          aria-expanded="false"
                          aria-controls="travelcollapseThree"
                        >
                          03. Can I make changes to my reservation after
                          booking?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos only Integer purus onthis
                          placerat felis non aliquam.Mauris nec justo vitae ante
                          auctor tol euismod sit amet non ipsul growing this
                          Praesent commodo at massa eget suscipit. Utani vitae
                          enim velit.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseFour"
                          aria-expanded="false"
                          aria-controls="travelcollapseFour"
                        >
                          04. What is your cancellation policy?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos only Integer purus onthis
                          placerat felis non aliquam.Mauris nec justo vitae ante
                          auctor tol euismod sit amet non ipsul growing this
                          Praesent commodo at massa eget suscipit. Utani vitae
                          enim velit.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseFive"
                          aria-expanded="false"
                          aria-controls="travelcollapseFive"
                        >
                          05. Do you offer group booking discounts?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos only Integer purus onthis
                          placerat felis non aliquam.Mauris nec justo vitae ante
                          auctor tol euismod sit amet non ipsul growing this
                          Praesent commodo at massa eget suscipit. Utani vitae
                          enim velit.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="booking-form-wrap mb-40">
                <h4>Book Your Tour</h4>
                <p>
                  Reserve your ideal trip early for a hassle-free trip; secure
                  comfort and convenience!
                </p>
                <div className="nav nav-pills mb-40" role="tablist">
                  <button
                    className={`nav-link ${booking}`}
                    id="v-pills-booking-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-booking"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-booking"
                    aria-selected="true"
                  >
                    Online Booking
                  </button>
                  <button
                    className={`nav-link ${form}`}
                    id="v-pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-contact"
                    aria-selected="false"
                  >
                    Inquiry Form
                  </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent2">
                  <div
                    className={`tab-pane fade ${booking} `}
                    id="v-pills-booking"
                    role="tabpanel"
                    aria-labelledby="v-pills-booking-tab"
                  >
                    <div className="sidebar-booking-form">
                      <form>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your Booking Date:</h6>
                          <div className="searchbox-input">
                            <div className="custom-select-dropdown">
                              <div
                                type="button"
                                className="select-input w-25 p-2 bg-white rounded "
                              >
                                <DatePicker
                                  selectsRange
                                  startDate={startDate}
                                  endDate={endDate}
                                  onChange={handleDateChange}
                                  dateFormat="MMM d"
                                  placeholderText="Select date range"
                                />
                                <i className="bi bi-chevron-down" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="booking-form-item-type mb-45">
                          {/* DON'T DELETE================================ */}
                          {/* <div className="number-input-item adults">
                            <label className="number-input-lable">
                              Adult:<span></span>
                              <span> $ {packageShow[router].price}</span>
                            </label>
                            <QuantityCounter
                              incIcon="bx bx-plus"
                              dcrIcon="bx bx-minus"
                            />
                          </div>
                          <div className="number-input-item children">
                            <label className="number-input-lable">
                              Children:<span></span>
                              <span>$15</span>
                            </label>
                            <QuantityCounter
                              incIcon="bx bx-plus"
                              dcrIcon="bx bx-minus"
                            />
                          </div> */}
                          {/* DON'T DELETE================================ */}
                          <div className="number-input-item children">
                            <label className="number-input-lable">
                              Person:<span></span>
                              <span>$ {packageShow[router].price}</span>
                            </label>
                            <QuantityCounter
                              incIcon="bx bx-plus"
                              dcrIcon="bx bx-minus"
                            />
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          {/* DON'T DELETE================================ */}
                          {/* <div className="single-total mb-30">
                            <span>Adult</span>
                            <ul>
                              <li>
                                <strong>$195</strong> PRICE
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>02</strong> QTY
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>04</strong> DAYS
                              </li>
                            </ul>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={15}
                              viewBox="0 0 27 15"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z"
                              />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                          <div className="single-total mb-30">
                            <span>Children</span>
                            <ul>
                              <li>
                                <strong>$195</strong> PRICE
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>02</strong> QTY
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>04</strong> DAYS
                              </li>
                            </ul>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={15}
                              viewBox="0 0 27 15"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z"
                              />
                            </svg>
                            <div className="total">$390</div>
                          </div> */}
                          {/* DON'T DELETE================================ */}
                          <div className="single-total mb-30">
                            <span>Adult</span>
                            <ul>
                              <li>
                                <strong>${packageShow[router].price}</strong>{" "}
                                PRICE
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>02</strong> QTY
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>04</strong> DAYS
                              </li>
                            </ul>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={15}
                              viewBox="0 0 27 15"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z"
                              />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                        </div>
                        <div className="total-price">
                          <span>Total Price:</span> $470
                        </div>
                      </form>
                      <button
                        onClick={() => Gotoform()}
                        className="primary-btn1 two"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${form} `}
                    id="v-pills-contact"
                    role="tabpanel"
                    aria-labelledby="v-pills-contact-tab"
                  >
                    <div className="sidebar-booking-form">
                      <form>
                        <div className="form-inner mb-20">
                          <label>
                            Full Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Email Address <span>*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Enter your email address"
                          />
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Phone Number <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="form-inner mb-30">
                          <label>
                            Write Your Massage <span>*</span>
                          </label>
                          <textarea
                            placeholder="Write your quiry"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-inner">
                          <button type="submit" className="primary-btn1 two">
                            Submit Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
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
          slides={packageShow[router].galley.map(function (elem) {
            return { src: elem.img };
          })}
        />
      </div>
    </>
  );
};

export default Page;
