import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import React ,{useState} from "react";
import destination from "../../data/custom/destination.json";
import Tour from "@/data/custom/tour.json";

const page = () => {
  //   PAGINATION ============================
  const [currentPage, setCurrentPage] = useState(1)
  let itemsPerPage = 6
  const totalPages = Math.ceil(Tour.length / itemsPerPage)

  const pageNumbers = Array.from({length: totalPages}, (_, index) => index + 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sliceFunc = () => {
    return setTour(Tour.slice(startIndex, endIndex))
  }


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage)
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }

  };

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
                      <div onClick={() => handlePrevPage()} className="shop-pagi-btn">
                        <i className="bi bi-chevron-left"/>
                      </div>
                    </li>
                    {
                      pageNumbers.map((pageNumber, index) => (
                        <li key={index} type="button" onClick={() => handlePageChange(pageNumber)}>
                          {pageNumber}
                        </li>
                      ))
                    }
                    <li>
                      <div onClick={() => handleNextPage()} className="shop-pagi-btn">
                        <i className="bi bi-chevron-right"/>
                      </div>
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
