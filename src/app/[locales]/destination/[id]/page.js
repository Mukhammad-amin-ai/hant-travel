"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import RecommendationPackage from "@/components/tourPackage/RecommendatedPackage";
import {useSelector} from "react-redux";
import En from '@/data/en/destinationDetails.json'
import Ru from '@/data/ru/destinationDetails.json'
import Uz from '@/data/uz/destinationDetails.json'

const Page = ({ params }) => {
  const router = params.id;
  const language = useSelector((state) => state.language.languageValue)
  const [DestinationDetails,setDestinationDetails]=useState(En)
  const[text,setText]=useState({
    breadcrumb:"Country Details",
    things:"Things To Do",
    destination:"Destination",
    population:"Population",
    capital:"Capital City",
    language:"Language",
    currency:"Currency",
    discover:"Discover",

  })
  const [propObj,setPropObj]=useState({
    lang:language,
    recommend:"Recommended Package",
    tax:"TAXES INCL/PERS",
    book:"Book a trip",
    view:"View All Package",
    start:"Starting From"
  })
  const [isOpening, setOpening] = useState({
    openingState: false,
    openingIndex: 0,
  });

  const languageChecker = ()=>{
    if(language === 'en'){
      setDestinationDetails(En)
      setText({
        breadcrumb:"Country Details",
        things:"Things To Do",
        destination:"Destination",
        population:"Population",
        capital:"Capital City",
        language:"Language",
        currency:"Currency",
        discover: "Discover"
      })
      setPropObj({
        lang:language,
        recommend:"Recommended Package",
        tax:"TAXES INCL/PERS",
        book:"Book a trip",
        view:"View All Package",
        start:"Starting From"
      })
    }
    if(language === 'ru'){
      setDestinationDetails(Ru)
      setText({
        breadcrumb:"Подробная информация о стране",
        things:"Чем заняться",
        destination:"Государство",
        population:"Население",
        capital:"Столичный город",
        language:"Язык",
        currency:"Валюта",
        discover: "Oткрыть"
      })
      setPropObj({
        lang:language,
        recommend:"Рекомендуемый пакеты",
        tax:"НАЛОГИ ",
        book:"Забронировать",
        view:"Просмотреть весь пакет",
        start:"Начиная с"
      })
    }
    if(language === 'uz'){
      setDestinationDetails(Uz)
      setText({
        breadcrumb:"Mamlakat tafsilotlari",
        things:"Qilinadigan ishlar",
        destination:"Davlat",
        population:"Aholi",
        capital:"Poytaxt shahar",
        language:"til",
        currency:"valyuta",
        discover: "Ochmoq"
      })
      setPropObj({
        lang:language,
        recommend:"Tavsiya etilgan sayohatlar",
        tax:"Soliqlar",
        book:"Sayohatni bron qilish",
        view:"Barcha Paketlarni Ko'rish",
        start:"Boshlab"
      })
    }
  }

  useEffect(() => {
    languageChecker()
  }, [language]);
  return (
    <>
      <Breadcrumb pagename={text.breadcrumb} pagetitle={text.breadcrumb} />
      <div className="destination-details-wrap mb-120 pt-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <h2>{DestinationDetails[router].title}</h2>
              <p>{DestinationDetails[router].description}</p>
              <div className="destination-gallery mb-40 mt-40">
                <div className="row g-4">
                  {DestinationDetails[router].galery.map((item, index) => (
                    <div className={`${item.class} col-sm-6`} key={index}>
                      <div className="gallery-img-wrap">
                        <img
                          src={item.img}
                          style={{ height: "219px", width: "100%" }}
                          alt=""
                        />
                        <a data-fancybox="gallery-01">
                          <i
                            onClick={() =>
                              setOpening({
                                openingState: true,
                                openingIndex: 0,
                              })
                            }
                            className="bi bi-eye"
                          />{" "}
                          {text.discover} {DestinationDetails[router].name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h2>{text.things}</h2>
              <ul style={{ columns: "1" }}>
                {DestinationDetails[router].tourism.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      style={{ height: "280px", width: "100%" }}
                      src={DestinationDetails[router].galery[0].img}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      style={{ height: "280px", width: "100%" }}
                      src={DestinationDetails[router].galery[1].img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="destination-sidebar">
                <div className="destination-info mb-30">
                  <div className="single-info">
                    <span>{text.destination}:</span>
                    <h5>{DestinationDetails[router].destionation}</h5>
                  </div>
                  <div className="single-info">
                    <span>{text.population}:</span>
                    <h5>{DestinationDetails[router].population} million</h5>
                  </div>
                  <div className="single-info">
                    <span>{text.capital}:</span>
                    <h5>{DestinationDetails[router].capital}</h5>
                  </div>
                  <div className="single-info">
                    <span>{text.language}:</span>
                    <h5>{DestinationDetails[router].language}</h5>
                  </div>
                  <div className="single-info">
                    <span>{text.currency}:</span>
                    <h5>{DestinationDetails[router].currency}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecommendationPackage data={DestinationDetails[router].tours} destination={DestinationDetails[router].name} language={propObj}/>
      <Lightbox
        className="img-fluid"
        open={isOpening.openingState}
        plugins={[Fullscreen]}
        index={isOpening.openingIndex}
        close={() => setOpening(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={DestinationDetails[router].galery.map(function (elem) {
          return { src: elem.img };
        })}
      />
    </>
  );
};

export default Page;
