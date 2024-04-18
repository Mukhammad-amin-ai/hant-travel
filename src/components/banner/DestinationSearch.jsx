import React, {useState, useEffect, useRef} from "react";
const DestinationSearch = ({destination, style, data, contryCatcher}) => {
  const [isActive, setIsActive] = useState(false);

  const [selectedDestination, setSelectedDestination] = useState(    `Choose ${destination}`)

  const searchboxRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    contryCatcher(destination)

  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleClickOutside = (event) => {
    if (searchboxRef.current && !searchboxRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={searchboxRef}
      className={`searchbox-input ${isActive ? "active" : ""}`}
      onClick={handleToggleActive}
    >
      <label>{destination}</label>
      <div className={`${style} custom-select-dropdown`}>
        <div className="select-input">
          <input
            type="text"
            readOnly
            value={selectedDestination}
            onClick={handleToggleActive}
          />
          <i className="bi bi-chevron-down"/>
        </div>
        <div className={`${isActive ? "active" : ""} custom-select-wrap `}>

          <ul className="option-list">
            {data?.map((destination, index) => (
              <li
                key={index}
                onClick={() => handleSelectDestination(destination.name)}
              >
                <div className="destination">
                  <h6>{destination.name}</h6>
                </div>
                <div className="tour">
                  <span>
                      {destination.tours} <br/> Tour
                    </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationSearch;
