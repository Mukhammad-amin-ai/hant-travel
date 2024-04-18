"use client"
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Breadcrumb = ({pagename, pagetitle}) => {
  let language = useSelector((state) => state.language.languageValue)
  const [home, SetHome] = useState('Home');
  let langChecker = () => {
    if (language === 'en') {
      SetHome("Home")
    }
    if (language === 'ru') {
      SetHome("Домашняя страница")
    }
    if (language === 'uz') {
      SetHome("Bosh sahifa")
    }
  }


  useEffect(() => {
    langChecker()
  }, [language]);

  return (
    <div
      className="breadcrumb-section"
      style={{
        backgroundImage:
          "linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 101.02%), url(/assets/images/breadcrum/breadcrum.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="banner-content">
              <h1>{pagename}</h1>
              <ul className="breadcrumb-list">
                <li>
                  <Link href={`/${language}`}>{home}</Link>
                </li>
                <li>{pagetitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
