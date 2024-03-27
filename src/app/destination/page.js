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
              <div className={`${item.class} col-sm-6`} key={index}>
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
                      <Link
                        href={`/destination/${index + 1}`}
                      >
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
          </div>
          {destination?.length > 9 ? (
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
      </div>
    </>
  );
};

export default page;
