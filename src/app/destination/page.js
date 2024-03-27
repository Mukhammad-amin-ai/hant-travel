import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import React from "react";
import destination from "../../data/custom/destination.json";

const page = () => {
  return (
    <>
      <Breadcrumb pagename="Countries to Go" pagetitle="Countries" />
      <div className="destination-gallery-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-70">
            {destination.map((item, index) => (
              <div className={`${item.class} col-sm-6`}>
                <div className="destination-card">
                  <img
                    style={{ height: "370px", width: "100%" }}
                    src={item.img}
                    alt=""
                  />
                  <div className="overlay" />
                  <div className="card-title">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/destination/destination-details">
                        {item.name}
                      </Link>
                    </h4>
                    <div className="eg-tag">
                      <span>{item.tours} Tours</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-5 col-sm-6">
              <div className="destination-card">
                <img src="/assets/img/home1/destination-card-img2.jpg" alt="" />
                <div className="overlay" />
                <div className="card-title">
                  <h4>Italy</h4>
                </div>
                <div className="content">
                  <h4>
                    <Link href="/destination/destination-details">Italy</Link>
                  </h4>
                  <div className="eg-tag">
                    <span>30 Tour</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="destination-card">
                <img src="/assets/img/home1/destination-card-img3.jpg" alt="" />
                <div className="overlay" />
                <div className="card-title">
                  <h4>New York</h4>
                </div>
                <div className="content">
                  <h4>
                    <Link href="/destination/destination-details">
                      New York
                    </Link>
                  </h4>
                  <div className="eg-tag">
                    <span>30 Tour</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="destination-card">
                <img src="/assets/img/home1/destination-card-img6.jpg" alt="" />
                <div className="overlay" />
                <div className="card-title">
                  <h4>France</h4>
                </div>
                <div className="content">
                  <h4>
                    <Link href="/destination/destination-details">France</Link>
                  </h4>
                  <div className="eg-tag">
                    <span>35 Tour</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="destination-card">
                <img src="/assets/img/home1/destination-card-img5.jpg" alt="" />
                <div className="overlay" />
                <div className="card-title">
                  <h4>Europe</h4>
                </div>
                <div className="content">
                  <h4>
                    <Link href="/destination/destination-details">Europe</Link>
                  </h4>
                  <div className="eg-tag">
                    <span>50 Tour</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="destination-card">
                <img src="/assets/img/home1/destination-card-img4.jpg" alt="" />
                <div className="overlay" />
                <div className="card-title">
                  <h4>Saudi Arab</h4>
                </div>
                <div className="content">
                  <h4>
                    <Link href="/destination/destination-details">
                      Saudi Arab
                    </Link>
                  </h4>
                  <div className="eg-tag">
                    <span>30 Tour</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="destination-card">
                <img src="/assets/img/home1/destination-card-img7.jpg" alt="" />
                <div className="overlay" />
                <div className="card-title">
                  <h4>Japan</h4>
                </div>
                <div className="content">
                  <h4>
                    <Link href="/destination/destination-details">Japan</Link>
                  </h4>
                  <div className="eg-tag">
                    <span>40 Tour</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="destination-card">
                <img src="/assets/img/home1/destination-card-img8.jpg" alt="" />
                <div className="overlay" />
                <div className="card-title">
                  <h4>Switzerland</h4>
                </div>
                <div className="content">
                  <h4>
                    <Link href="/destination/destination-details">
                      Switzerland
                    </Link>
                  </h4>
                  <div className="eg-tag">
                    <span>30 Tour</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="destination-card">
                <img src="/assets/img/home1/destination-card-img9.jpg" alt="" />
                <div className="overlay" />
                <div className="card-title">
                  <h4>Australia</h4>
                </div>
                <div className="content">
                  <h4>
                    <Link href="/destination/destination-details">
                      Australia
                    </Link>
                  </h4>
                  <div className="eg-tag">
                    <span>30 Tour</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
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
        </div>
      </div>
    </>
  );
};

export default page;
