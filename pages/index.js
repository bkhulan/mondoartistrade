"use client";
import React, { useEffect, useState, useRef } from "react";
import useMessage from "@/hooks/useMessage";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// import { IconX } from "@tabler/icons";

import Products from "../components/products";
import Map from "../components/map";
import RequestForm from "../components/requestForm";
import Footer from "../components/footer";

import planetBackground from "../public/planetBackground.png";

import styles from "../styles/Home.module.css";
import stylesNav from "../components/navigation.module.css";
import stylesPro from "../components/Products.module.css";
import stylesMap from "../components/Map.module.css";
import stylesReq from "../components/requestForm.module.css";
import stylesFooter from "../components/Footer.module.css";
import Language from "@/components/Language";

export default function Home() {
  const input = useRef();
  const router = useRouter();
  const f = useMessage();

  const [selected, setSelected] = useState("MN");
  const [langFlag, setLangFlag] = useState("/flagMongolia.png");
  const [isActive, setIsActive] = useState(false);

  const [navButt, setnavButt] = useState(false);

  const dataRussian = {
    MN: {
      home: "Нүүр хуудас",
      homeService: "Үйлчилгээ",
      homeAboutUs: "Бидний тухай",
      homeProducts: "Бүтээгдэхүүн",
      homeOrder: "Захиалга",
      homeCollaboration: "Хамтын ажиллагаа",

      homeColumn: "Нүүр хуудас",
      homeServiceColumn: "Үйлчилгээ",
      homeAboutUsColumn: "Бидний тухай",
      homeProductsColumn: "Бүтээгдэхүүн",
      homeOrderColumn: "Захиалга",
      homeCollaborationColumn: "Хамтын ажиллагаа",

      homeTitle: "MONDO ARTIS TRADE LLC",
      homeInfo: "International trading company",
      firstList1: "Guide for Packaging solutions, Spare parts,",
      firstList2: "Equipments, Building and Raw materials",
      secondList: "Product Research and Data Materials",
      thirdList: "Payment and Transportation Options",
      fourthList: "Professional consulting",
      mainTitleServiceSpan: "Манай үйлчилгээ",
      serviceProduct: "Бараа материалын судалгаа, захиалга, нийлүүлэлт",
      // serviceAdvice: "Гэрээ хэлцэл, хууль зүйн зөвлөгөө",
      serviceSolutionSpan1: `Ачаа тээвэр,`,
      serviceSolutionSpan2: `мөнгөн гүйлгээний шийдэл`,
      aboutUsTitle: " MONDO ARTIS TRADE LLC-Д ТАВТАЙ МОРИЛ",
      mainTitleAboutUsSpan: "Бидний тухай",
      aboutUsText1: `Манай компани нь олон улсад үйл ажиллагаа явуулдаг, Ази Европыг
      холбосон худалдаа, зуучлал, судалгаа зөвлөгөөний үйлчилгээ
      үзүүлдэг. Бид БНХАУ-ын үйлдвэрлэлийн тэргүүлэх Guangdong,
      Zhejiang, Jiangsu, Shandong, БНСУ-ын Seoul, Incheon, Busan хот
      мужид байрлах хамтын ажиллагаат олон жилийн туршлагатай, өндөр
      хүчин чадалтай үйлдвэрүүдээс баталгаат бараа бүтээгдэхүүн түүхий
      эдийг хурдан шуурхай ханган нийлүүлж байна.`,
      aboutUsText2: `Компанийн агент, төлөөлөгчийн газрууд БНСУ-ын Сөүл, БНХАУ-ын
      Гуанжоу, Жинан, Шанхай, Хөх хот, Эрээн (агуулах), ОХУ-ын Москва,
      Улан-Үд хотуудад тус тус үйл ажиллагаа явуулж байна. Өөрийн
      мэргэжлийн агентуудаар дамжуулан бараа материал ханган нийлүүлэх,
      судалгаа хийх, үйлдвэрүүдтэй худалдан авагчийн эрх ашигт нийцсэн
      тохиролцоо, таатай нөхцлөөр гэрээ хэлцэл хийж үйлчилдэг.`,
      mainTitleProductSpan: "Манай бүтээгдэхүүнүүд",
      productTitleSawlagaa: "Савлагааны бүтээгдэхүүн",
      glass: "Шилэн сав, лонх",
      can: "Төмөр лааз",
      plastic: "Хуванцар сав, баглаа",
      print: "Хэвлэмэл уут",

      productTitleAwtomashin:
        "Автомашин, хүнд механизм, уул уурхайн тоног төхөөрөмж, сэлбэг, тоноглол",
      selbeg: "Авто машины сэлбэг",
      mechanism: "Механизм, эд анги, тоноглол",

      productTitleMetal: "Металл бэлдэц, хийцлэл",
      gan: "Ган лист",
      dwutawr: "Двутавр, швеллер, угольник",
      cube: "Труба, квадрат төмөр",
      metal: "Металл лист",

      productTitleBuilding: "Барилгын материал",
      // plita: "Плита",
      // paint: "Гадна дотно эмульс будаг",
      // floor: "Модон ба паркетан шал",
      // eloctronic: "Электрон тоноглол, автоматжуулалт, дохиолол",
      hooloi: "Сантехник хоолой, тоноглол",
      erchim: "Эрчим хүч ба цахилгаан тоноглол",
      paner: "Фанер хавтан, Plywood",
      plywood: "Батарей, цэнэг хураагуур, генератор",
      hongon: "Хөнгөн цагаан бэлдэц",

      mainTitleOrderSpan: "Хэрхэн захиалах вэ ?",
      orderOne: "Захиалах бүтээгдэхүүний иж бүрэн мэдээллийг бидэнд өгнө.",
      orderTwo:
        "Үйлдвэрт мэдээллийг илгээж үнийн санал, материал хийцлэлийн мэдээлэл авна.",
      orderThree:
        "Загвар, өнгө, сери дугаар, код, тоо хэмжээг тохирч гэрээ хийгдэнэ.",
      orderFour: "Барааны урьдчилгаа төлбөр төлж захиалга баталгаажна.",
      orderFive:
        "Бараа үйлдвэрлэгдэж, ачихад бэлэн болмогц үлдэгдэл төлбөрийг төлнө.",
      orderSix:
        "Бараа замдаа гарч сонгосон маршрут ба тээвэр зуучаар захиалсан хаягт хүргэгдэнэ.",

      mainTitleMapSpan: "Тээвэрлэх чиглэл",
      mapSequence:
        "БНХАУ болон БНСУ-с захиалгат барааг ОХУ-руу усан тээврээр Владивосток, төмөр замаар Забайкальск, Монгол улсаар транзит авто болон төмөр замаар Улан-Үд хот руу тус тус тээвэрлэнэ.",
      destination1: "Эрээн боомт",
      mapSequence1:
        "БНХАУ-ын үйлвэрийн бүсээс Эрээн хот хүртэл тээвэрлэлтийн хугацаа дунджаар 7-9 хоног.",
      destination2: "Улаанбаатар хот",
      mapSequence2:
        "Эрээн хотоос Улаанбаатар хот хүртэл тээвэрлэлтийн хугацаа дунджаар 5-7 хоног.",
      destination3: "Улаан-үүд хот",
      mapSequence3:
        "Улаанбаатар хотоос Улаан-Үүд хот хүртэл тээвэрлэлтийн хугацаа дунджаар 5-7 хоног.",
      destination4: "Нийт тээвэрлэлтийн хугацаа",
      mapSequence4:
        "Бараа тээвэрлэх хот, тээвэрлэлтийн ачаалал зэргээс шалтгаалан дунджаар 22-30 хоног тээвэрлэлтэнд зарцуулагдана.",

      mainTitleCollaborationSpan: "Хамтын ажиллагаа",
      collaborationSentence:
        "Бид санал болгож байгаа бүтээгдэхүүн, бараа материалыг хамтын ажиллагаат үйлдвэрүүдээс ханган нийлүүлж байна. Уян хатан нөхцөл, дундын зуучлагчгүй хямд үнэ, чанарын баталгаа, төлбөрийн болон тээврийн тохиромжтой нөхцлөөр тантай хамтран ажиллах болно.",
      teewerZuuchSentence:
        "Төлбөр болон тээвэр зуучийн шийдэл: LC болон 20/80, 30/70 зарчмаар төлбөр хийгдэх ба монголын арилжааны банкинд Эскроу данс нээж төлбөрийг гүйцэтгэнэ.",

      formQuestion: "Асуултаа энд бичнэ үү.",
      formSentence: "Бид таны и-мэйл рүү тодорхой хариу илгээх болно.",
      formButton: "Зөвшөөрөх",

      footerMainTitle: "Холбоо барих",
    },
    RU: {
      home: "Главное",
      homeService: "Наш сервис",
      homeAboutUs: "О компаний",
      homeProducts: "Ассортименты товаров",
      homeOrder: "Заказ",
      homeCollaboration: "Сотрудничество",

      homeColumn: "Главное",
      homeServiceColumn: "Наш сервис",
      homeAboutUsColumn: "О компаний",
      homeProductsColumn: "Ассортименты товаров",
      homeOrderColumn: "Заказ",
      homeCollaborationColumn: "Сотрудничество",

      homeTitle: "Мондо Артиз Трейд",
      homeInfo: "Международная торговая компания КОО",
      firstList1:
        "Приём заказов всех видов упаковки и упаковочных материалов с учётом требований заказчика,",
      firstList2:
        "поставка запасных частей для автомобилей и тяжёлой техники, строительных материалов и сырья",
      secondList: "Инвентаризация, расценка, сравнение товаров",
      thirdList: "Все формы оплаты и доставки",
      fourthList: "Профессональные консультации, юридические услуги",
      mainTitleServiceSpan: "Наши услуги",
      serviceProduct: "Заказ и доставка товаров",
      // serviceAdvice: "Договоры, юридические консультации",
      serviceSolutionSpan1: `Процесс транспортировки,`,
      serviceSolutionSpan2: `организация и управление денежными потоками`,
      aboutUsTitle: "Мондо Артиз Трейд",
      mainTitleAboutUsSpan: "О компании",
      aboutUsText1: `Наша компания ведет международную деятельность, основными направлениями которой являются торговое брокерство, консалтинговые и юридические услуги, соединяющие Азию и Европу. Мы оперативно поставляем гарантированный товар и сырье с фабрик с многолетним опытом и высокой мощностью, с которыми мы сотрудничаем долго и они расположены в крупных китайских городах как Гуандун, Чжэцзян, Цзянсу, Шаньдун Китая, а также в Сеуле, Инчхоне и Пусане Южной Кореи. `,
      aboutUsText2: `Агенты и представительства компании работают в г.Сеуле Южной Кореи, г.Гуанчжоу, Жинан, Шанхай, Хух хот, Эрлянь (склады) Китая, в г.Москве и г.Улан-Уде России. Через своих профессиональных агентов компания поставляет разные инвентари, проводит исследования и заключает соглашения с фабриками на выгодных условиях в интересах покупателя.`,
      mainTitleProductSpan: "Ассортименты товаров",
      productTitleSawlagaa: "Упаковочные материалы",
      glass: "Стеклянные банки и бутылки",
      can: "Металлические банки",
      plastic: "Пластиковая посуда, инвентарь",
      print: "Целофановые и бумажные пакеты",

      productTitleAwtomashin:
        "Запасные части автомобиля, тяжёлой техники, горнодобывающих оборудований и механизмов",
      selbeg: "Запчасти для автомашин",
      mechanism: "Механизмы, агрегаты и тюнинги",

      productTitleMetal: "Металлические заготовки, материалы",
      gan: "Стальной лист",
      dwutawr: "Двутавр, катанги, швеллер, угольники",
      cube: "Трубы и металлические изделия",
      metal: "Металлические листы",

      productTitleBuilding: "Строительные материалы",
      // plita: "Плиты",
      // paint: "Эмульсии для внутренних и наружных работ, краски",
      // floor: "Напольные покрытия",
      // eloctronic:
      //   "Электронные оборудования, автоматика, интеллектуальная система",
      hooloi: "Сантехнические трубы",
      erchim: "Энергетика и электроприборы",
      paner: "Фанера, ДСП, Черная фанера",
      plywood: "Hybrid Energy, Battery storage, Power Generator",
      hongon: "Алюминиевая заготовка",

      mainTitleOrderSpan: "Как заказать?",
      orderOne: "Предоставьте нам полную информацию о заказанной продукции.",
      orderTwo:
        "Отправьте информацию на завод, чтобы получить ценовое предложение и информацию о конструкции материала.",
      orderThree:
        "Контракт будет заключен путем согласования модели, цвета, серийного номера, кода и количества.",
      orderFour: "Заказ подтверждается предоплатой товара.",
      orderFive:
        "Остаток будет выплачен, когда товар будет изготовлен и готов к отправке.",
      orderSix:
        "Товар будет доставлен по заказанному адресу выбранным маршрутом и перевозчиком.",

      mainTitleMapSpan: "Направление доставки",
      mapSequence:
        "Товары, заказанные из Китая и Республики Корея, будут доставлены в Россию водным транспортом до Владивостока, по железной дороге до Забайкальска и транзитом через Монголию до Улан-Уда по железной дороге.",
      destination1: "Порт Эрлянь",
      mapSequence1:
        "Среднее время доставки из промышленной зоны Китая в Эрляне составляет 7-9 дней.",
      destination2: "г. Улаанбаатар",
      mapSequence2:
        "Среднее время перевозки из Эрляна в г.Улаанбаатар составляет 5-7 дней.",
      destination3: "г. Улан-Удэ",
      mapSequence3:
        "Среднее время перевозки из Улаанбаатара в г.Улан-Удэ составляет 5-7 дней.",
      destination4: "Общее время доставки",
      mapSequence4:
        "Доставка осуществляется в течение 22-30 дней в зависимости от места получения товара и загруженности перевозки.",

      mainTitleCollaborationSpan: "Сотрудничество",
      collaborationSentence:
        "Мы поставляем и предлагаем широкий ассортимент продукции и инвентарь от производителей-партнеров. Мы будем работать с Вами на гибких условиях, по низким ценам, без посредников, можем дать гарантии качества, удобные условия оплаты и доставки.",
      teewerZuuchSentence:
        "Вы можете выбрать именно те товары и услуги, предложения, которые наиболее подходят Вам, затем заполните анкету на нашем сайте и отправьте нам, и мы в свою очередь готовы принять Ваш запрос и сотрудничать с Вами на взаимно выгодных условиях.",

      formQuestion: "Пожалуйста, заполните эту анкету.",
      formSentence:
        "И мы отправим подробную информацию на вашу электронную почту.",
      formButton: "Отправить",

      footerMainTitle: "Контакты",
    },
    ENG: {
      home: "Home",
      homeService: "Service",
      homeAboutUs: "About us",
      homeProducts: "Product",
      homeOrder: "Order",
      homeCollaboration: "Cooperation",

      homeColumn: "Home",
      homeServiceColumn: "Service",
      homeAboutUsColumn: "About us",
      homeProductsColumn: "Product",
      homeOrderColumn: "Order",
      homeCollaborationColumn: "Collaboration",

      homeTitle: "MONDO ARTIS TRADE LLC",
      homeInfo: "International trading company",
      firstList1: "Packaging and labeling, heavy machinery equipment,",
      firstList2: "construction materials, and other supply products",
      secondList: "Research and valuation of supply products",
      thirdList: "Solution for payment transaction and transportation",
      fourthList:
        "Professional service for international trading & legal consulting",
      mainTitleServiceSpan: "Our services",
      serviceProduct: "Product market research, order purchasing, supplying",
      // serviceAdvice: "Negotiation consulting services, legal consulting",
      serviceSolutionSpan1: `Transport and logistic,`,
      serviceSolutionSpan2: `payment transaction`,
      aboutUsTitle: "WELCOME TO MONDO ARTIS TRADE LLC",
      mainTitleAboutUsSpan: "About us",
      aboutUsText1: `Our company provides international trading services, specially market research and consulting services to connect Europe and Asia areas. We are cooperating with qualified manufacturer companies from Guangdong, Zhejiang, Jiangsu, Shangdong from China, Seoul, Incheon, Busan from South Korea.`,
      aboutUsText2: `Our official agents from Seoul (Korea), Ghuangzhou, Jinan, Shanghai, Huh hot, Erlian (China), Moscow, Ulan-Ude (Russia) will assist you to find potential supplier, to do market research, negotiate better and reasonable settlement.`,
      mainTitleProductSpan: "Our products",
      productTitleSawlagaa: "Packages",
      glass: "Glass bottle",
      can: "Tin Can",
      plastic: "Plastic bottle, box, canister",
      print: "Printing plastic and paper bag",

      productTitleAwtomashin:
        "Spare parts of automobile, heavy machinery, mining equipments",
      selbeg: "Spare parts of automobile",
      mechanism: "Equipments",

      productTitleMetal: "Steel and metal materials",
      gan: "Steel coils and sheets",
      dwutawr: "H-beams,",
      cube: "Metal channels",
      metal: "Wire rods",

      productTitleBuilding: "Building materials",
      // plita: "Slabs",
      // paint: "Exterior and Interior emulsion paints",
      // floor: "Floor coverings",
      // eloctronic: "Electronic equipments, automation, intelligent systems",
      hooloi: "Plumbing pipes",
      erchim: "Electrical cable and equipments",
      paner: "OSB panel, Plywood",
      plywood: "Hybrid Energy, Battery storage, Power Generator",
      hongon: "Aluminum blanks",

      mainTitleOrderSpan: "How to order?",
      orderOne:
        "Give us complete information and material specification about the subscription product.",
      orderTwo:
        "Send information to the manufacturer and obtain price proposals and materials.",
      orderThree:
        "Agreements are made to match patterns, colors, serial numbers, codes, and numbers.",
      orderFour: "Advanced payment of inventory guarantees orders.",
      orderFive:
        "As soon as the product is manufactured and ready to be loaded, the remaining amount will be paid.",
      orderSix:
        "The goods will be delivered to the address ordered by the chosen route and transported intermediary.",

      mainTitleMapSpan: "Transit directions",
      mapSequence:
        "Goods ordered from China and the Republic of Korea will be delivered to Russia by sea to Vladivostok, by railway to Zabaikalsk and in transit through Mongolia to Ulan-Ude by trucks and railway.",
      destination1: "Erlian Port",
      mapSequence1:
        "The average transit time from China's industrial zone to Erlian is 7-9 days.",
      destination2: "Ulaanbaatar",
      mapSequence2:
        "The average transit time from Erlian to Ulaanbaatar is 5-7 days.",
      destination3: "Ulan-Ude",
      mapSequence3:
        "The average transit time from Ulaanbaatar to Ulan-Ude is 5-7 days.",
      destination4: " Total transit time",
      mapSequence4:
        "Delivery is carried out within 22-30 days, depending on the place of receipt of the goods and the workload in transportation.",

      mainTitleCollaborationSpan: "Cooperation",
      collaborationSentence:
        "We supply and offer a wide range of products and inventory from partner manufacturers. We will work with you on flexible terms, at low prices, without intermediaries, we can give quality guarantees, convenient terms of payment and delivery. You can choose exactly the goods and services, offers that are most suitable for you, then fill out the questionnaire on our website and send us, and we, in turn, are ready to accept your request and cooperate with you on mutually beneficial terms.",
      teewerZuuchSentence:
        "Let's create together new technologies, affordable creative and smart factories and increase joint competitiveness. We will be your trusted and responsible partner in Asia.",

      formQuestion: "Please fill out the questionnaire.",
      formSentence: "We will send more details to your email address.",
      formButton: "Submit",

      footerMainTitle: "Contact",
    },
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7DGDMC5GLX"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-7DGDMC5GLX');
        `}
      </Script>
      <div id="home" className={styles.container}>
        <main className={styles.main}>
          <div className={styles.planetBox}>
            <Image
              alt="Home planet image"
              src={planetBackground}
              fill
              placeholder="blur"
              // quality={100}
              // style={{
              //   objectFit: "cover"
              // }}
            />
          </div>
          <Image
            alt="overlay"
            width={200}
            height={200}
            src={"/homeOverlay.png"}
            className={styles.homeOverlay}
          />
          <nav className={stylesNav.navigation}>
            <div className={stylesNav.logoBox}>
              <Image
                alt="logo"
                // width={70}
                // height={60}
                src={"/logoMondo.png"}
                fill
                sizes="(max-width: 70px) 100vw"
                // style={{
                //   maxWidth: "100%",
                //   height: "auto",
                // }}
              />
            </div>
            <ul className={stylesNav.link}>
              <li>
                <Link className={`${stylesNav.home}`} href={"/#home"}>
                  {f({ id: "home" })}
                </Link>
              </li>

              <li>
                <Link
                  className={`${stylesNav.homeService}`}
                  href={"#ourservice"}
                >
                  {f({ id: "homeService" })}
                </Link>
              </li>

              <li>
                <Link className={`${stylesNav.homeAboutUs}`} href={"#aboutus"}>
                  {f({ id: "homeAboutUs" })}
                </Link>
              </li>

              <li>
                <Link
                  className={`${stylesNav.homeProducts}`}
                  href={"#products"}
                >
                  {f({ id: "homeProducts" })}
                </Link>
              </li>

              <li>
                <Link className={`${stylesNav.homeOrder}`} href={"#order"}>
                  {f({ id: "homeOrder" })}
                </Link>
              </li>

              <li>
                <Link
                  className={`${stylesNav.homeCollaboration}`}
                  href={"#collaboration"}
                >
                  {f({ id: "homeCollaboration" })}
                </Link>
              </li>
            </ul>
            <div className={stylesNav.btnLangBox}>
              {/* Language ==== */}

              {/* <div
                className={stylesNav.languageContainer}
                style={{
                  cursor: "pointer",
                }}
              >
                <div
                  className={stylesNav.language}
                  onClick={(prevState) => {
                    setIsActive(!isActive);
                  }}
                >
                  <div className={stylesNav.flagBox}>
                    <Image
                      alt="mongolia"
                      src={langFlag}
                      fill
                      sizes="(max-width: 70px) 100vw"
                      style={{
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {selected}
                  </p>
                  <Image
                    alt="downArrow"
                    width={14}
                    height={14}
                    src={"/downArrow.png"}
                  />
                </div>
                <ul
                  className={`${stylesNav.otherLanguagesUl} ${
                    isActive ? "" : stylesNav.display
                  }`}
                >
                  <li
                    key={"MN"}
                    className={`${stylesNav.otherLanguagesLi} ${
                      selected && selected == "MN" ? stylesNav.active : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelected("MN");
                      setLangFlag("/flagMongolia.png");
                      setIsActive(false);
                    }}
                  >
                    <div className={stylesNav.flagBox}>
                      <Image
                        alt="mongolia"
                        src={"/flagMongolia.png"}
                        fill
                        sizes="(max-width: 70px) 100vw"
                        style={{
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                    <p className={`${stylesNav.flagList}`}>MN</p>
                  </li>
                  <li
                    key={"RU"}
                    className={`${stylesNav.otherLanguagesLi} ${
                      selected && selected == "RU" ? stylesNav.active : ""
                    }`}
                    onClick={(e) => {
                      setSelected("RU");
                      setLangFlag("/flagRussia.png");

                      setIsActive(false);
                    }}
                  >
                    <div className={stylesNav.flagBox}>
                      <Image
                        alt="mongolia"
                        src={"/flagUSA.png"}
                        fill
                        sizes="(max-width: 70px) 100vw"
                        style={{
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                    <p className={`${stylesNav.flagList}`}>ENG</p>
                  </li>
                </ul>
              </div> */}

              <Language />
              {navButt ? (
                <button
                  className={`${stylesNav.navButt}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setnavButt(!navButt);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // class="icon icon-tabler icon-tabler-x"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <button
                  className={`${stylesNav.navButt} ${stylesNav.navMenuButt}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setnavButt(!navButt);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // class="icon icon-tabler icon-tabler-menu-2"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                  </svg>
                </button>
              )}
            </div>
          </nav>

          <div className={styles.home}>
            <div className={styles.homeTitleContainer}>
              <h3 className={styles.homeTitle} ref={input}>
                {f({ id: "homeTitle" })}
              </h3>
              <p className={styles.homeInfo}>{f({ id: "homeInfo" })}</p>
            </div>

            <div style={{ textAlign: "start" }}>
              <p
                className={`${styles.firstList1}`}
                style={{
                  paddingBottom: "0px",
                  marginBottom: "0px",
                }}
              >
                {f({ id: "firstList1" })}
              </p>
              <p
                className={`${styles.firstList2}`}
                style={{
                  paddingTop: "0px",
                  marginTop: "0px",
                }}
              >
                {f({ id: "firstList2" })}
              </p>
              <p className={`${styles.secondList}`}>
                {f({ id: "secondList" })}
              </p>
              <p className={`${styles.thirdList}`}>{f({ id: "thirdList" })}</p>
              <p className={`${styles.fourthList}`}>
                {f({ id: "fourthList" })}
              </p>
            </div>
          </div>

          <ul
            className={`${stylesNav.linkColumn} ${
              navButt ? stylesNav.linkColDisplay : ""
            }`}
          >
            <li className={stylesNav.linkColumnLi}>
              <Link className={`${stylesNav.homeColumn}`} href={"/#home"}>
                {f({ id: "home" })}
              </Link>
            </li>

            <li className={stylesNav.linkColumnLi}>
              <Link
                className={`${stylesNav.homeServiceColumn}`}
                href={"#ourservice"}
              >
                {f({ id: "homeService" })}
              </Link>
            </li>

            <li className={stylesNav.linkColumnLi}>
              <Link
                className={`${stylesNav.homeAboutUsColumn}`}
                href={"#aboutus"}
              >
                {f({ id: "homeAboutUs" })}
              </Link>
            </li>

            <li className={stylesNav.linkColumnLi}>
              <Link
                className={`${stylesNav.homeProductsColumn}`}
                href={"#products"}
              >
                {f({ id: "homeProducts" })}
              </Link>
            </li>

            <li className={stylesNav.linkColumnLi}>
              <Link className={`${stylesNav.homeOrderColumn}`} href={"#order"}>
                {f({ id: "homeOrder" })}
              </Link>
            </li>

            <li className={stylesNav.linkColumnLi}>
              <Link
                className={`${stylesNav.homeCollaborationColumn}`}
                href={"#collaboration"}
              >
                {f({ id: "homeCollaboration" })}
              </Link>
            </li>
          </ul>
        </main>

        <section id="ourservice" className={styles.ourService}>
          <div className={styles.service}>
            <h3 className={`${styles.mainTitle} ${styles.serviceTitle}`}>
              <span className={`${styles.mainTitleServiceSpan}`}>
                {f({ id: "mainTitleServiceSpan" })}
              </span>
            </h3>

            <div className={styles.serviceParts}>
              <div className={styles.servicePart}>
                <div className={styles.iconBox}>
                  <Image
                    alt="material"
                    fill
                    sizes="(max-width: 100px) 100vw"
                    src={"/icon1.png"}
                    className={styles.icon}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className={`${styles.serviceProduct}`}>
                  {f({ id: "serviceProduct" })}
                </p>
              </div>

              <div className={styles.servicePart}>
                <div className={styles.iconBox}>
                  <Image
                    alt="contract"
                    fill
                    sizes="(max-width: 100px) 100vw"
                    src={"/icon2.png"}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className={`${styles.serviceAdvice}`}>
                  {f({ id: "serviceAdvice" })}
                </p>
              </div>

              <div className={styles.servicePart}>
                <div className={styles.iconBox}>
                  <Image
                    alt="cashflow"
                    fill
                    sizes="(max-width: 100px) 100vw"
                    src={"/icon3.png"}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className={`${styles.serviceSolution}`}>
                  <span className={styles.serviceSolutionSpan1}>
                  {f({ id: "serviceSolutionSpan1" })}
                  </span>
                  <span className={styles.serviceSolutionSpan2}>
                  {f({ id: "serviceSolutionSpan2" })}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="aboutus" className={styles.aboutUs}>
          <h1 className={styles.aboutUsTitle}>
          {f({ id: "aboutUsTitle" })}
          </h1>
          <div className={styles.aboutUsTextContainer}>
            <h3 className={`${styles.mainTitle} ${styles.aboutUsMainTitle}`}>
              <span className={`${styles.mainTitleAboutUsSpan}`}>
              {f({ id: "mainTitleAboutUsSpan" })}
              </span>
            </h3>
            <div className={styles.aboutUsText1}>
            {f({ id: "aboutUsText1" })}
            </div>
            <div className={styles.aboutUsText2}>
            {f({ id: "aboutUsText2" })}
            </div>
          </div>
        </section>

        <Products />

        <section id="order" className={styles.order}>
          <h3 className={`${styles.mainTitle} ${styles.orderMainTitle}`}>
            <span className={`${styles.mainTitleOrderSpan}`}>
            {f({ id: "mainTitleOrderSpan" })}
            </span>
          </h3>
          <ol className={styles.orderSentence}>
            <li className={styles.orderOne}>
            {f({ id: "orderOne" })}
            </li>
            <li className={styles.orderTwo}>
            {f({ id: "orderTwo" })}
            </li>
            <li className={styles.orderThree}>
            {f({ id: "orderThree" })}
            </li>
            <li className={styles.orderFour}>
            {f({ id: "orderFour" })}
            </li>
            <li className={styles.orderFive}>
            {f({ id: "orderFive" })}
            </li>
            <li className={styles.orderSix}>
            {f({ id: "orderSix" })}
            </li>
          </ol>
        </section>
        <Map />

        <section id="collaboration" className={styles.collaboration}>
          <div className={styles.overlay} />
          <h3 className={`${styles.mainTitle} ${styles.collaborationTitle}`}>
            <span className={`${styles.mainTitleCollaborationSpan}`}>
            {f({ id: "mainTitleCollaborationSpan" })}
            </span>
          </h3>
          <div className={styles.collaborationSentence}>
          {f({ id: "collaborationSentence" })}
          </div>

          <div className={styles.teewerZuuchSentence}>
          {f({ id: "teewerZuuchSentence" })}
          </div>
        </section>
        <RequestForm selected={selected} />
        <Footer selected={selected} />
      </div>
    </>
  );
}
