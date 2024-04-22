"use client"
import Breadcrumb from "@/components/common/Breadcrumb";
import SelectComponent from "@/uitils/SelectComponent";
import Modal from "@/components/common/Modal";
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
// Jsons =====================================

import destEn from '@/data/en/destination.json'
import destRu from '@/data/ru/destination.json'
import destUz from '@/data/uz/destination.json'

import visaEn from '@/data/en/visa.json'
import visaRu from '@/data/ru/visa.json'
import visaUz from '@/data/uz/visa.json'

import En from '@/data/en/visaDetails.json'
import Ru from '@/data/ru/visaDetails.json'
import Uz from '@/data/uz/visaDetails.json'

import visaFaqEn from '@/data/en/VisaFAQ.json'
import visaFaqRu from '@/data/ru/VisaFAQ.json'
import visaFaqUz from '@/data/uz/VisaFAQ.json'

const page = ({params}) => {
  let router = params.id;
  let fullName = useRef("");
  let emailAddress = useRef("");
  let countryFrom = useRef("");
  let messageInp = useRef("");
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState("");
  const [modalOpen, setModalOpen] = useState("")
  const [visaDetails, setVisaDetails] = useState(En);
  const [visa, setVisa] = useState(visaEn)
  const [destination, setDestination] = useState(destEn)
  const [visaFAQ, setVisaFAQ] = useState(visaFaqEn)
  const [text, setText] = useState({
    breadcrumbs: "Visa Details",
    country: "Country",
    type: "Visa Type",
    maximum: "Maximum",
    day: "Days",
    process: "Processing Time",
    work: "Working Day",
    valid: "Working",
    mode: "Visa Mode",
    documents: "View Required Documents",
    require: "View Required Documents",
    Summary: "Cost Summary",
    Person: "per person",
    Arrange: "Arrange your trip in advance - book this room now!",
    Form: "Inquiry Form",
    formDef: "Complete form for complaints or service inquiries; expect prompt response via phone/email.",
    enter: "Enter your",
    name: "Full Name",
    email: "Email Address",
    where: "Where are you from",
    select: "Select",
    visa: "Visa",
    write: "Write Your Massage",
    message: "Write your quiry",
    submit: "Submit Now"
  })
  let language = useSelector((state) => state.language.languageValue)
  let visaTypeCatch = (data) => {
    setVisaType(data)
  }

  let countryCatch = (data) => {
    setCountry(data)
  }

  let bookVisa = async (e) => {
    e.preventDefault()
    let documentsObj = {
      user_name: fullName.current.value,
      user_email: emailAddress.current.value,
      user_country: countryFrom.current.value,
      choose_country: country,
      visa_type: visaType,
      user_message: messageInp.current.value
    }
    try {
      const response = await fetch("/api/sendVisa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(documentsObj),
      })
      const data = await response.json();
      if (data?.success) {
        // console.log("Message send")
        // window.location.reload()\
        setModalOpen('exampleModal')
      }

    } catch (e) {
      console.error("Error sending visa document:", e);
    }
  }

  const LanguageChecker = () => {
    if (language === 'en') {
      setVisaFAQ(visaFaqEn)
      setVisaDetails(En)
      setVisa(visaEn)
      setDestination(destEn)
      setText({
        breadcrumbs: "Visa Details",
        country: "Country",
        type: "Visa Type",
        maximum: "Maximum",
        day: "Days",
        process: "Processing Time",
        work: "Working Day",
        valid: "Working",
        mode: "Visa Mode",
        documents: "View Required Documents",
        require: "View Required Documents",
        Summary: "Cost Summary",
        Person: "per person",
        Arrange: "Arrange your trip in advance - book this room now!",
        Form: "Inquiry Form",
        formDef: "Complete form for complaints or service inquiries; expect prompt response via phone/email.",
        enter: "Enter your",
        name: "Full Name",
        email: "Email Address",
        where: "Where are you from",
        select: "Select",
        visa: "Visa",
        write: "Write Your Massage",
        message: "Write your quiry",
        submit: "Submit Now"
      })
    }
    if (language === 'ru') {
      setVisaFAQ(visaFaqRu)
      setVisaDetails(Ru)
      setVisa(visaRu)
      setDestination(destRu)
      setText({
        breadcrumbs: "Данные о визе",
        country: "Cтранa",
        type: "Тип визы",
        maximum: "Максимальное время пребывания",
        day: "Дни",
        process: "Время обработки",
        work: "Рабочий день",
        valid: "Допустимость",
        mode: "Pежим визы",
        documents: "Просмотреть необходимые документы",
        require: "Необходимые документы для электронной визы (для взрослых) со страховкой",
        Summary: "Cтоимость",
        Person: "на человека",
        Arrange: "Организуйте свою поездку заранее - забронируйте этот номер сейчас!",
        Form: "Форма запроса",
        formDef: "Заполните форму для подачи жалоб или запросов на обслуживание; ожидайте быстрого ответа по телефону/электронной почте.",
        enter: "Введите",
        name: "Полное имя",
        email: "Адрес электронной почты",
        where: "Откуда вы",
        select: "Выбрать",
        visa: "Виза",
        write: "Напишите свое сообщение",
        message: "Cообщение",
        submit: "Отправить"
      })
    }
    if (language === 'uz') {
      setVisaFAQ(visaFaqUz)
      setVisaDetails(Uz)
      setVisa(visaUz)
      setDestination(destUz)
      setText({
        breadcrumbs: "Viza tafsilotlari",
        country: "Mamlakat",
        type: "Viza turi",
        maximum: "Maksimal qolish",
        day: "kun",
        process: "Ishlov berish vaqti",
        work: "Ish kuni",
        valid: "Amal qilish",
        mode: "Viza rejimi",
        documents: "Kerakli hujjatlarni ko'rish",
        require: "Sug'urta bilan elektron viza (kattalar) uchun zarur hujjatlar",
        Summary: "Xarajatlar Xulosasi",
        Person: "kishi boshiga",
        Arrange: "Sayohatingizni oldindan tartibga soling - bu visani hozir bron qiling!",
        Form: "So'rov Formasi",
        formDef: "Shikoyatlar yoki xizmat so'rovlari uchun to'liq shakl; telefon/elektron pochta orqali tezkor javob kuting.",
        enter: "Kiriting : ",
        name: "To'liq Ism",
        email: "Elektron pochta Manzili",
        where: "Siz qayerdansiz",
        select: "Tanlang",
        visa: "Viza",
        write: "Xabaringizni yozing",
        message: "So'rovingizni yozing",
        submit: "Hozir Yuboring"
      })
    }
  }

  const [activeId, setActiveId] = useState('');

  const toggleCollapse = (id) => {
    setActiveId(id === activeId ? '' : id);
  };



  useEffect(() => {
    LanguageChecker()
  }, [language]);


  return (
    <>
      <Breadcrumb pagename={text.breadcrumbs} pagetitle={text.breadcrumbs}/>
      <Modal/>
      <div className="visa-details-pages pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="visa-thumb">
                <img
                  style={{width: "100%", height: "423px"}}
                  src={visaDetails[router - 1].img}
                  alt=""
                />
              </div>
              <div className="visa-title">
                <h3>{visaDetails[router - 1].title}</h3>
              </div>
              <ul className="visa-meta">
                <li>
                  <span>{text.country} :</span> {visaDetails[router - 1].country}
                </li>
                <li>
                  <span>{text.type} :</span> {visaDetails[router - 1].visaType}
                </li>
                <li>
                  <span>{text.maximum} :</span> {visaDetails[router - 1].max}{" "}
                  Days
                </li>
                <li>
                  <span>{text.process}:</span> {visaDetails[router - 1].time}{" "}
                  {text.work}
                </li>
                <li>
                  <span>{text.valid} :</span> {visaDetails[router - 1].length} {text.day}
                </li>
                <li>
                  <span>{text.mode} :</span> {visaDetails[router - 1].model}
                </li>
              </ul>
              <div className="visa-required-document mb-50">
                <div className="document-list">
                  <h3>{text.documents}</h3>
                  <h6>
                    <span>*</span>{text.require}
                  </h6>
                  <ul>
                    {visaDetails[router - 1].documents.map((item, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 18 16"
                        >
                          <path
                            d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z"/>
                        </svg>
                        {" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h4 className="widget-title mb-30">
                FAQ - For Visa Application:
              </h4>
              <div className="faq-content">
                <div className="accordion" id="accordionTravel">
                  {visaFAQ.map((item, index) => {
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
                          <div className="accordion-body">{item.content}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="visa-sidebar mb-30">
                <div className="sidebar-top text-center">
                  <h4>{text.Summary}</h4>
                  <h6>
                    $ {visaDetails[router - 1].price} <span>{text.Person}</span>
                  </h6>
                  <p>{text.Arrange}</p>
                </div>
                <div className="inquery-form">
                  <div className="form-title">
                    <h4>{text.Form}</h4>
                    <p>
                      {text.formDef}
                    </p>
                  </div>
                  <form onSubmit={bookVisa}>
                    <div className="form-inner mb-20">
                      <label>
                        {text.name} <span>*</span>
                      </label>
                      <input ref={fullName} type="text" placeholder={text.enter + " " + text.name}/>
                    </div>
                    <div className="form-inner mb-20">
                      <label>
                        {text.email} <span>*</span>
                      </label>
                      <input
                        ref={emailAddress}
                        type="email"
                        placeholder={text.enter + " " + text.email}
                      />
                    </div>
                    <div className="form-inner mb-20">
                      <label>
                        {text.where} <span>*</span>
                      </label>
                      <input
                        ref={countryFrom}
                        type="text"
                        placeholder={text.enter + " " + text.country}
                      />
                    </div>
                    <div className="form-inner mb-70">
                      <label>
                        {text.type} <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        data={visa}
                        selectedFunc={visaTypeCatch}
                        placeholder={text.select + " " + text.visa}
                      />
                    </div>
                    <div className="form-inner mb-70">
                      <label>
                        {text.country} <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Australia", "Brazil", "Bangladesh"]}
                        data={destination}
                        selectedFunc={countryCatch}
                        placeholder={text.select + " " + text.country}
                      />
                    </div>
                    <div className="form-inner mb-30">
                      <label>
                        {text.write}<span>*</span>
                      </label>
                      <textarea
                        ref={messageInp}
                        placeholder={text.message}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-inner">
                      <button type="submit" className="primary-btn1 two " data-bs-toggle="modal"
                              data-bs-target={`#${modalOpen}`}>
                        {text.submit}
                      </button>
                    </div>
                  </form>
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
