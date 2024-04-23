"use client"
import React, {useEffect, useState} from "react";
import generalEn from "@/data/en/faqGeneral.json"
import generalRu from "@/data/ru/faqGeneral.json"
import generalUz from "@/data/uz/faqGeneral.json"
import travelEn from '@/data/en/travelTips.json'
import travelRu from '@/data/ru/travelTips.json'
import travelUz from '@/data/uz/travelTips.json'
import {useSelector} from "react-redux";

const page = () => {
  const language = useSelector((state) => state.language.languageValue)
  const [general,setGeneral]=useState(generalEn)
  const [tips,setTips]=useState(travelEn)
  const [text,setText]=useState({
    general:"General",
    tips:"Travel Tips"
  })
  const [activeId, setActiveId] = useState('');
  const [active, setActive] = useState('');
  const toggleCollapse = (id) => {
    setActiveId(id === activeId ? '' : id);
  };
  const toggleFAQ = (id) => {
    setActive(id === active ? '' : id);
  };
  let languageChecker = ()=>{
    if(language === 'en'){
      setGeneral(generalEn)
      setTips(travelEn)
      setText({
        general:"General",
        tips:"Travel Tips"
      })
    }
    if(language === 'ru'){
      setGeneral(generalRu)
      setTips(travelRu)
      setText({
        general:"Oсновной",
        tips:"Советы путешественникам"
      })
    }
    if(language === 'uz'){
      setGeneral(generalUz)
      setTips(travelUz)
      setText({
        general:"Umumiy",
        tips:"Sayohat bo'yicha maslahatlar"
      })
    }
  }

  useEffect(() => {
    languageChecker()
  }, [language]);
  return (
    <>
      <div className="faq-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="faq-content-wrap mb-80">
                <div className="faq-content-title mb-50">
                  <h3>
                    {text.general}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                    >
                      <path
                        opacity="0.2"
                        d="M12.1406 3.31569L13.6613 1.28328C14.2277 0.526342 15.4311 0.905329 15.4615 1.85022L15.5502 4.60677C15.5714 5.26711 16.2158 5.72572 16.8467 5.52947L19.16 4.80985C20.0802 4.52359 20.8331 5.57662 20.2644 6.35473L18.8298 8.3179C18.4362 8.85663 18.6705 9.62248 19.2982 9.84869L21.6962 10.7128C22.5984 11.038 22.5699 12.3236 21.6542 12.6085L19.3662 13.3202C18.7146 13.5229 18.453 14.3043 18.8511 14.8585L20.246 16.8005C20.8121 17.5885 20.0372 18.6398 19.117 18.3324L16.6866 17.5204C16.039 17.304 15.3697 17.786 15.3697 18.4688V21.026C15.3697 21.9843 14.1519 22.3938 13.5729 21.6301L11.9573 19.4993C11.5506 18.9629 10.7409 18.9734 10.3482 19.5201L8.84725 21.6096C8.29002 22.3854 7.06631 22.0131 7.03559 21.0584L6.94981 18.3932C6.92856 17.7329 6.28416 17.2743 5.65329 17.4705L3.39578 18.1728C2.47005 18.4608 1.71725 17.3951 2.29806 16.6188L3.63735 14.8289C4.04321 14.2865 3.80363 13.506 3.16335 13.2847L0.734445 12.4451C-0.163318 12.1348 -0.163315 10.8652 0.734448 10.5549L3.16335 9.71533C3.80363 9.49403 4.04321 8.71352 3.63735 8.1711L2.17821 6.22099C1.60964 5.46111 2.32026 4.41074 3.23712 4.65581L5.87202 5.36011C6.507 5.52984 7.13025 5.0513 7.13025 4.39403V1.87955C7.13025 0.93114 8.32718 0.515473 8.91501 1.25974L10.5552 3.3364C10.9622 3.85179 11.7471 3.84154 12.1406 3.31569Z"
                      />
                    </svg>
                  </h3>
                </div>
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
                    {general.map((item, index) => {
                      const collapseId = `travelcollapse${index + 1}`;
                      const isCollapsed = collapseId !== activeId;
                      return (
                        <div key={index} className="accordion-item">
                          <h2 className="accordion-header" id={`travelheading${index + 1}`}>
                            <button
                              className={`accordion-button ${isCollapsed ? 'collapsed' : 'show'}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded={!isCollapsed} // Consistent aria-expanded
                              aria-controls={collapseId}
                              onClick={() => toggleCollapse(collapseId)}
                            >
                              {item.title}
                            </button>
                          </h2>
                          <div
                            id={collapseId}
                            className={`accordion-collapse collapse ${!isCollapsed ? 'show' : ''}`} // Concise class toggle
                            aria-labelledby={`travelheading${index + 1}`}
                            data-bs-parent="#accordionTravel"
                          >
                            <div className="accordion-body">
                              {
                                item.content !== "" ?
                                  item.content
                                  :
                                  <ul>
                                    {
                                      item.countable.map((item, index) => (
                                        <li key={index}>{item}</li>
                                      ))
                                    }
                                  </ul>
                              }
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="faq-content-wrap">
                <div className="faq-content-title mb-50">
                  <h3>
                    {text.tips}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                    >
                      <path
                        opacity="0.2"
                        d="M12.1406 3.31569L13.6613 1.28328C14.2277 0.526342 15.4311 0.905329 15.4615 1.85022L15.5502 4.60677C15.5714 5.26711 16.2158 5.72572 16.8467 5.52947L19.16 4.80985C20.0802 4.52359 20.8331 5.57662 20.2644 6.35473L18.8298 8.3179C18.4362 8.85663 18.6705 9.62248 19.2982 9.84869L21.6962 10.7128C22.5984 11.038 22.5699 12.3236 21.6542 12.6085L19.3662 13.3202C18.7146 13.5229 18.453 14.3043 18.8511 14.8585L20.246 16.8005C20.8121 17.5885 20.0372 18.6398 19.117 18.3324L16.6866 17.5204C16.039 17.304 15.3697 17.786 15.3697 18.4688V21.026C15.3697 21.9843 14.1519 22.3938 13.5729 21.6301L11.9573 19.4993C11.5506 18.9629 10.7409 18.9734 10.3482 19.5201L8.84725 21.6096C8.29002 22.3854 7.06631 22.0131 7.03559 21.0584L6.94981 18.3932C6.92856 17.7329 6.28416 17.2743 5.65329 17.4705L3.39578 18.1728C2.47005 18.4608 1.71725 17.3951 2.29806 16.6188L3.63735 14.8289C4.04321 14.2865 3.80363 13.506 3.16335 13.2847L0.734445 12.4451C-0.163318 12.1348 -0.163315 10.8652 0.734448 10.5549L3.16335 9.71533C3.80363 9.49403 4.04321 8.71352 3.63735 8.1711L2.17821 6.22099C1.60964 5.46111 2.32026 4.41074 3.23712 4.65581L5.87202 5.36011C6.507 5.52984 7.13025 5.0513 7.13025 4.39403V1.87955C7.13025 0.93114 8.32718 0.515473 8.91501 1.25974L10.5552 3.3364C10.9622 3.85179 11.7471 3.84154 12.1406 3.31569Z"
                      />
                    </svg>
                  </h3>
                </div>
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel2">
                    {tips.map((item, index) => {
                      const collapse = `travelcollape${index + 1}`;
                      const isCollapsed = collapse !== active;
                      return (
                        <div key={index} className="accordion-item">
                          <h2 className="accordion-header" id={`travel${index + 1}`}>
                            <button
                              className={`accordion-button ${isCollapsed ? 'collapsed' : 'show'}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapse}`}
                              aria-expanded={!isCollapsed}
                              aria-controls={collapse}
                              onClick={() => toggleFAQ(collapse)}
                            >
                              {item.title}
                            </button>
                          </h2>
                          <div
                            id={collapse}
                            className={`accordion-collapse collapse ${!isCollapsed ? 'show' : ''}`} // Concise class toggle
                            aria-labelledby={`travel${index + 1}`}
                            data-bs-parent="#accordionTravel"
                          >
                            <div className="accordion-body">
                              {
                                item.content !== "" ?
                                  item.content
                                  :
                                  <ul>
                                    {
                                      item.countable.map((item, index) => (
                                        <li key={index}>{item}</li>
                                      ))
                                    }
                                  </ul>
                              }
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
