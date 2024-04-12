import React, { useState, useEffect, useRef } from "react";


const TourTypeDropdown = ({ typeCatcher,typeTour,description }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTourType, setSelectedTourType] = useState(typeTour?  typeTour[0].type : "");
  const dropdownRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleSelectTourType = (tourType) => {
    setSelectedTourType(tourType);
    typeCatcher(tourType);
    setIsActive(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    // setSelectedTourType()
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const tourTypes = [
    "Adventure",
    "Honeymoon Tour",
    "Group Tour",
    "Adventure Tour",
    "Solo Tour",
  ];

  return (
    <div className={`searchbox-input`}>
      <label>{description}</label>
      <div className="custom-select-dropdown" ref={dropdownRef}>
        <div className="select-input" onClick={handleToggleActive}>
          <input type="text" readOnly value={selectedTourType} />
          <i className="bi bi-chevron-down" />
        </div>
        <div className={`${isActive ? "active" : ""} custom-select-wrap two`}>
          <ul className="option-list">
            {typeTour?.map((tourType, index) => (
              <li
                key={index}
                className="single-item"
                onClick={() => handleSelectTourType(tourType.type)}
              >
                <h6>{tourType.type}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourTypeDropdown;
