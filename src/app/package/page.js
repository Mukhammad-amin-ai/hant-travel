"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import SelectComponent from "@/uitils/SelectComponent";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Tour from "../../data/custom/tour.json";
import destination from "../../data/custom/destination.json";
import Type from "../../data/custom/type.json";

import { useSearchParams } from "next/navigation";

// const days = [
//   {
//     id: 1,
//     day: "1-2",
//   },
//   {
//     id: 2,
//     day: "3-4",
//   },
//   {
//     id: 3,
//     day: "5-6",
//   },
//   {
//     id: 4,
//     day: "7-8",
//   },
//   {
//     id: 5,
//     day: "9-10",
//   },
//   {
//     id: 6,
//     day: "11-12",
//   },
//   {
//     id: 7,
//     day: "13-14",
//   },
// ];

const page = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  const [checkedIndex, setCheckedIndex] = useState(-1);
  const [tourCheck, setTourCheck] = useState(-1);
  const [tour, setTour] = useState(Tour);
  const [nameTour, setNameTour] = useState("");
  const [tourType, setTourType] = useState("");

  const fromDay = useRef(null);
  const toDay = useRef(null);
  const selectPrice = useRef(null);

  let handleCheckboxChange = (index, name) => {
    setCheckedIndex(index);
    setNameTour(name);
  };

  const tourCheckFunc = (index, type) => {
    setTourCheck(index);
    setTourType(type);
  };

  const sorterDays = () => {
    let start = fromDay.current.value;
    let end = toDay.current.value;
    let filteredItems = Tour.filter(
      (item) => item.day >= start && item.day <= end
    );
    filteredItems.sort((a, b) => {
      let distA = Math.min(Math.abs(a.day - start), Math.abs(a.day - end));
      let distB = Math.min(Math.abs(b.day - start), Math.abs(b.day - end));
      return distA - distB;
    });
    setTour(filteredItems);
  };

  const priceSorter = () => {
    let sorter = selectPrice.current.value;
    if (sorter === "Hight") {
      let tourS = tour.sort((a, b) => a.price - b.price);
      setTour([...tour]);
    } else if (sorter === "Low") {
      let tourS = tour.sort((a, b) => a.price - b.price);
      let low = tourS.toReversed();
      setTour([...low]);
    }
  };

  const Filter = () => {
    if (fromDay.current.value !== null) {
      sorterDays();
    }
    if (nameTour !== "") {
      setTour(Tour.filter((item) => item.country === nameTour));
    }
    if (tourType !== "") {
      setTour(Tour.filter((item) => item.type === tourType));
    }
    window.scrollTo(0, 200);
  };

  const clear = () => {
    setTour(Tour);
    selectPrice.current.value = "Default Sorting";
    fromDay.current.value = 0;
    toDay.current.value = 0;
    setCheckedIndex(-1);
    setTourCheck(-1);
    window.scrollTo(0, 200);
  };

  return (
    <>
      <Breadcrumb pagename="Tour Packages" pagetitle="Tour" />
      <div className="package-grid-with-sidebar-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="package-inner-title-section mb-40">
                <p>
                  Showing {Tour.length} of {Tour.length} results
                </p>
                <div className="selector-and-grid">
                  <div className="selector">
                    {/* <SelectComponent
                      options={["Price Low to Hig", "Price High to Low"]}
                      placeholder="Default Sorting"
                    /> */}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      ref={selectPrice}
                      onChange={() => priceSorter()}
                    >
                      <option value="Default Sorting" >
                        Default Sorting
                      </option>
                      <option value="Low">Price Low to Higt</option>
                      <option value="Hight">Price Hight to Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  {tour.map((item, index) => (
                    <div className="col-md-6 item" key={index}>
                      <div className="package-card">
                        <div className="package-card-img-wrap">
                          <Link
                            href={`/package/${item.id}`}
                            className="card-img"
                          >
                            <img
                              style={{ height: "177px", width: "100%" }}
                              src={item.img}
                              alt=""
                            />
                          </Link>
                          <div className="batch">
                            <span className="date">{item.batch}</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                {item.location_list.map((item, index) => (
                                  <li key={index}>
                                    <Link href="/package">{item}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href={`/package/${item.id}`}>
                                {item.title}
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                {item.place_list.map((item, index) => (
                                  <li key={index}>
                                    <Link href="/package">{item}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <h6>Starting Form:</h6>
                              <span>$ {item.price}</span>
                              <p>TAXES INCL/PERS</p>
                            </div>
                            <Link
                              href={`/package/${item.id}`}
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {Tour.length > 6 ? (
                <div className="row">
                  <div className="col-lg-12">
                    <nav className="inner-pagination-area">
                      <ul className="pagination-list">
                        <li>
                          <a href="#" className="shop-pagi-btn">
                            <i className="bi bi-chevron-left" />
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#" className="active">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="bi bi-three-dots" />
                          </a>
                        </li>
                        <li>
                          <a href="#">6</a>
                        </li>
                        <li>
                          <a href="#" className="shop-pagi-btn">
                            <i className="bi bi-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Durations</h5>
                  <div className="row g-3">
                    <div className="col">
                      <input
                        ref={fromDay}
                        type="number"
                        className="form-control"
                        placeholder="From"
                        aria-label="From"
                        min="0"
                        max="50"
                        onChange={(e) => {
                          if (e.target.value < 0) {
                            e.target.value = 0;
                          }
                        }}
                      />
                    </div>
                    <div className="col">
                      <input
                        ref={toDay}
                        type="number"
                        className="form-control"
                        placeholder="to"
                        aria-label="to"
                        min="0"
                        max="50"
                        onChange={(e) => {
                          if (e.target.value > 50) {
                            e.target.value = 50;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Tour Types</h5>
                  <ul className="category-list two">
                    {Type.map((item, index) => (
                      <li
                        key={index}
                        role="button"
                        onClick={() => tourCheckFunc(index, item.type)}
                      >
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            checked={tourCheck === index}
                            readOnly
                          />
                        </div>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="single-widget mb-30">
                  <h5 className="widget-title">Country</h5>
                  <ul className="category-list two">
                    {destination.map((item, index) => (
                      <li
                        key={index}
                        role="button"
                        onClick={() => handleCheckboxChange(index, item.name)}
                      >
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            checked={checkedIndex === index}
                            readOnly
                          />
                        </div>
                        <a style={{ userSelect: "none" }}>
                          {item.name}
                          <span>{item.tours}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="single-widget mb-30">
                  <div className="sidebar-area d-flex  justify-content-between">
                    <div
                      className="primary-btn2 d-flex"
                      onClick={() => Filter()}
                    >
                      Filter
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="1.5"
                          d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
                        />
                      </svg>
                    </div>
                    <div
                      className=" btn btn-danger d-flex align-items-center gap-2"
                      onClick={() => clear()}
                    >
                      Clear
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="m899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4c0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4c14.2-2.4 23.7-15.9 21.2-30M204 390h272V182h72v208h272v104H204zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
