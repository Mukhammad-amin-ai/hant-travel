"use client"
import React from 'react';
import En from './en'
import Ru from './ru'
import Uz from './uz'
import {useSelector} from "react-redux";

const page = () => {

  let language = useSelector((state) => state.language.languageValue)

  const getPrivacyComponent = () => {
    switch (language) {
      case 'en':
        return <En/>;
      case 'ru':
        return <Ru/>;
      case 'uz':
        return <Uz/>;
      default:
        return <p>Error: Language not found</p>; // Handle missing language
    }
  };
  return (
    <div className="container pt-50 mb-120">
      {
        getPrivacyComponent()
      }
    </div>
  );
}

export default page;