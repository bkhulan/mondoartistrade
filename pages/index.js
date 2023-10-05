"use client";
import React, { useEffect, useState, useRef } from "react";

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

export default function Home() {
  const input = useRef();
  const router = useRouter();

  const [selected, setSelected] = useState("MN");
  const [isActive, setIsActive] = useState(false);

  const [navButt, setnavButt] = useState(false);

  // const data = [
  //   {
  //     languageENG: "ENG",
  //     flag: "/flagUSA.png",
  //   },
  // ];

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
      serviceAdvice: "Гэрээ хэлцэл, хууль зүйн зөвлөгөө",
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
      plita: "Плита",
      paint: "Гадна дотно эмульс будаг",
      floor: "Модон ба паркетан шал",
      eloctronic: "Электрон тоноглол, автоматжуулалт, дохиолол",
      hooloi: "Сантехник хоолой, тоноглол",
      erchim: "Эрчим хүч ба цахилгаан тоноглол",
      paner: "Фанер хавтан",
      plywood: "Plywood",
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
      serviceAdvice: "Договоры, юридические консультации",
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
      plita: "Плиты",
      paint: "Эмульсии для внутренних и наружных работ, краски",
      floor: "Напольные покрытия",
      eloctronic:
        "Электронные оборудования, автоматика, интеллектуальная система",
      hooloi: "Сантехнические трубы",
      erchim: "Энергетика и электроприборы",
      paner: "Фанера, ДСП",
      plywood: "Черная фанера",
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
      fourthList: "Professional service for international trading & legal consulting",
      mainTitleServiceSpan: "Our services",
      serviceProduct: "Product market research, order purchasing, supplying",
      serviceAdvice: "Negotiation consulting services, legal consulting",
      serviceSolutionSpan1: `Transport and logistic,`,
      serviceSolutionSpan2: `payment transaction`,
      aboutUsTitle: " MONDO ARTIS TRADE LLC-Д ТАВТАЙ МОРИЛ",
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
      plita: "Slabs",
      paint: "Exterior and Interior emulsion paints",
      floor: "Floor coverings",
      eloctronic: "Electronic equipments, automation, intelligent systems",
      hooloi: "Plumbing pipes",
      erchim: "Electrical cable and equipments",
      paner: "OSB panel",
      plywood: "Plywood",
      hongon: "Aluminum blanks",

      mainTitleOrderSpan: "How to order?",
      orderOne: "Give us complete information and material specification about the subscription product.",
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

      formQuestion: "Please fill out the questionnaire ",
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
                  Нүүр хуудас
                </Link>
              </li>

              <li>
                <Link
                  className={`${stylesNav.homeService}`}
                  href={"#ourservice"}
                >
                  Үйлчилгээ
                </Link>
              </li>

              <li>
                <Link className={`${stylesNav.homeAboutUs}`} href={"#aboutus"}>
                  Бидний тухай
                </Link>
              </li>

              <li>
                <Link
                  className={`${stylesNav.homeProducts}`}
                  href={"#products"}
                >
                  Бүтээгдэхүүн
                </Link>
              </li>

              <li>
                <Link className={`${stylesNav.homeOrder}`} href={"#order"}>
                  Захиалга
                </Link>
              </li>

              <li>
                <Link
                  className={`${stylesNav.homeCollaboration}`}
                  href={"#collaboration"}
                >
                  Хамтын ажиллагаа
                </Link>
              </li>
            </ul>
            <div className={stylesNav.btnLangBox}>
              {/* Language ==== */}

              <div
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
                    className={stylesNav.otherLanguagesLi}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelected("MN");
                      setIsActive(false);

                      const home = document.querySelector(`.${stylesNav.home}`);
                      const homeService = document.querySelector(
                        `.${stylesNav.homeService}`
                      );
                      const homeAboutUs = document.querySelector(
                        `.${stylesNav.homeAboutUs}`
                      );
                      const homeProducts = document.querySelector(
                        `.${stylesNav.homeProducts}`
                      );
                      const homeOrder = document.querySelector(
                        `.${stylesNav.homeOrder}`
                      );
                      const homeCollaboration = document.querySelector(
                        `.${stylesNav.homeCollaboration}`
                      );

                      const homeColumn = document.querySelector(`.${stylesNav.homeColumn}`);
                      const homeServiceColumn = document.querySelector(
                        `.${stylesNav.homeServiceColumn}`
                      );
                      const homeAboutUsColumn = document.querySelector(
                        `.${stylesNav.homeAboutUsColumn}`
                      );
                      const homeProductsColumn = document.querySelector(
                        `.${stylesNav.homeProductsColumn}`
                      );
                      const homeOrderColumn = document.querySelector(
                        `.${stylesNav.homeOrderColumn}`
                      );
                      const homeCollaborationColumn = document.querySelector(
                        `.${stylesNav.homeCollaborationColumn}`
                      );

                      const homeTitle = document.querySelector(
                        `.${styles.homeTitle}`
                      );
                      const homeInfo = document.querySelector(
                        `.${styles.homeInfo}`
                      );
                      const firstList1 = document.querySelector(
                        `.${styles.firstList1}`
                      );
                      const firstList2 = document.querySelector(
                        `.${styles.firstList2}`
                      );
                      const secondList = document.querySelector(
                        `.${styles.secondList}`
                      );
                      const thirdList = document.querySelector(
                        `.${styles.thirdList}`
                      );
                      const fourthList = document.querySelector(
                        `.${styles.fourthList}`
                      );

                      const mainTitleServiceSpan = document.querySelector(
                        `.${styles.mainTitleServiceSpan}`
                      );
                      const serviceProduct = document.querySelector(
                        `.${styles.serviceProduct}`
                      );
                      const serviceAdvice = document.querySelector(
                        `.${styles.serviceAdvice}`
                      );

                      const serviceSolutionSpan1 = document.querySelector(
                        `.${styles.serviceSolutionSpan1}`
                      );
                      const serviceSolutionSpan2 = document.querySelector(
                        `.${styles.serviceSolutionSpan2}`
                      );

                      const aboutUsTitle = document.querySelector(
                        `.${styles.aboutUsTitle}`
                      );
                      const mainTitleAboutUsSpan = document.querySelector(
                        `.${styles.mainTitleAboutUsSpan}`
                      );
                      const aboutUsText1 = document.querySelector(
                        `.${styles.aboutUsText1}`
                      );
                      const aboutUsText2 = document.querySelector(
                        `.${styles.aboutUsText2}`
                      );

                      // // Product-----------

                      const mainTitleProductSpan = document.querySelector(
                        `.${styles.mainTitleProductSpan}`
                      );
                      const productTitleSawlagaa = document.querySelector(
                        `.${stylesPro.productTitleSawlagaa}`
                      );
                      const glass = document.querySelector(
                        `.${stylesPro.glass}`
                      );
                      const can = document.querySelector(`.${stylesPro.can}`);
                      const plastic = document.querySelector(
                        `.${stylesPro.plastic}`
                      );
                      const print = document.querySelector(
                        `.${stylesPro.print}`
                      );

                      const productTitleAwtomashin = document.querySelector(
                        `.${stylesPro.productTitleAwtomashin}`
                      );
                      const selbeg = document.querySelector(
                        `.${stylesPro.selbeg}`
                      );
                      const mechanism = document.querySelector(
                        `.${stylesPro.mechanism}`
                      );

                      const productTitleMetal = document.querySelector(
                        `.${stylesPro.productTitleMetal}`
                      );
                      const gan = document.querySelector(`.${stylesPro.gan}`);
                      const dwutawr = document.querySelector(
                        `.${stylesPro.dwutawr}`
                      );
                      const cube = document.querySelector(`.${stylesPro.cube}`);
                      const metal = document.querySelector(
                        `.${stylesPro.metal}`
                      );

                      const productTitleBuilding = document.querySelector(
                        `.${stylesPro.productTitleBuilding}`
                      );
                      const plita = document.querySelector(
                        `.${stylesPro.plita}`
                      );
                      const paint = document.querySelector(
                        `.${stylesPro.paint}`
                      );
                      const floor = document.querySelector(
                        `.${stylesPro.floor}`
                      );
                      const eloctronic = document.querySelector(
                        `.${stylesPro.eloctronic}`
                      );
                      const hooloi = document.querySelector(
                        `.${stylesPro.hooloi}`
                      );
                      const erchim = document.querySelector(
                        `.${stylesPro.erchim}`
                      );
                      const paner = document.querySelector(
                        `.${stylesPro.paner}`
                      );
                      const plywood = document.querySelector(
                        `.${stylesPro.plywood}`
                      );
                      const hongon = document.querySelector(
                        `.${stylesPro.hongon}`
                      );

                      // Order-------------

                      const mainTitleOrderSpan = document.querySelector(
                        `.${styles.mainTitleOrderSpan}`
                      );
                      const orderOne = document.querySelector(
                        `.${styles.orderOne}`
                      );
                      const orderTwo = document.querySelector(
                        `.${styles.orderTwo}`
                      );
                      const orderThree = document.querySelector(
                        `.${styles.orderThree}`
                      );
                      const orderFour = document.querySelector(
                        `.${styles.orderFour}`
                      );
                      const orderFive = document.querySelector(
                        `.${styles.orderFive}`
                      );
                      const orderSix = document.querySelector(
                        `.${styles.orderSix}`
                      );

                      // Map-------------
                      const mainTitleMapSpan = document.querySelector(
                        `.${styles.mainTitleMapSpan}`
                      );
                      const mapSequence = document.querySelector(
                        `.${stylesMap.mapSequence}`
                      );
                      const destination1 = document.querySelector(
                        `.${stylesMap.destination1}`
                      );
                      const mapSequence1 = document.querySelector(
                        `.${stylesMap.mapSequence1}`
                      );
                      const destination2 = document.querySelector(
                        `.${stylesMap.destination2}`
                      );
                      const mapSequence2 = document.querySelector(
                        `.${stylesMap.mapSequence2}`
                      );
                      const destination3 = document.querySelector(
                        `.${stylesMap.destination3}`
                      );
                      const mapSequence3 = document.querySelector(
                        `.${stylesMap.mapSequence3}`
                      );
                      const destination4 = document.querySelector(
                        `.${stylesMap.destination4}`
                      );
                      const mapSequence4 = document.querySelector(
                        `.${stylesMap.mapSequence4}`
                      );

                      // Collaboration

                      const mainTitleCollaborationSpan = document.querySelector(
                        `.${styles.mainTitleCollaborationSpan}`
                      );
                      const collaborationSentence = document.querySelector(
                        `.${styles.collaborationSentence}`
                      );
                      const teewerZuuchSentence = document.querySelector(
                        `.${styles.teewerZuuchSentence}`
                      );

                      // Request

                      const formQuestion = document.querySelector(
                        `.${stylesReq.formQuestion}`
                      );
                      const formSentence = document.querySelector(
                        `.${stylesReq.formSentence}`
                      );
                      const formButton = document.querySelector(
                        `.${stylesReq.formButton}`
                      );

                      const footerMainTitle = document.querySelector(
                        `.${stylesFooter.footerMainTitle}`
                      );

                      // =============================================

                      home.textContent = dataRussian.MN.home;
                      homeService.textContent = dataRussian.MN.homeService;
                      homeAboutUs.textContent = dataRussian.MN.homeAboutUs;
                      homeProducts.textContent = dataRussian.MN.homeProducts;
                      homeOrder.textContent = dataRussian.MN.homeOrder;
                      homeCollaboration.textContent =
                        dataRussian.MN.homeCollaboration;

                      homeColumn.textContent = dataRussian.MN.homeColumn;
                      homeServiceColumn.textContent = dataRussian.MN.homeServiceColumn;
                      homeAboutUsColumn.textContent = dataRussian.MN.homeAboutUsColumn;
                      homeProductsColumn.textContent = dataRussian.MN.homeProductsColumn;
                      homeOrderColumn.textContent = dataRussian.MN.homeOrderColumn;
                      homeCollaborationColumn.textContent =
                        dataRussian.MN.homeCollaborationColumn;

                      homeTitle.textContent = dataRussian.MN.homeTitle;
                      homeInfo.textContent = dataRussian.MN.homeInfo;
                      firstList1.textContent = dataRussian.MN.firstList1;
                      firstList2.textContent = dataRussian.MN.firstList2;
                      secondList.textContent = dataRussian.MN.secondList;
                      thirdList.textContent = dataRussian.MN.thirdList;
                      fourthList.textContent = dataRussian.MN.fourthList;

                      mainTitleServiceSpan.textContent =
                        dataRussian.MN.mainTitleServiceSpan;
                      serviceProduct.textContent =
                        dataRussian.MN.serviceProduct;
                      serviceAdvice.textContent = dataRussian.MN.serviceAdvice;
                      serviceSolutionSpan1.textContent =
                        dataRussian.MN.serviceSolutionSpan1;
                      serviceSolutionSpan2.textContent =
                        dataRussian.MN.serviceSolutionSpan2;

                      aboutUsTitle.textContent = dataRussian.MN.aboutUsTitle;
                      mainTitleAboutUsSpan.textContent =
                        dataRussian.MN.mainTitleAboutUsSpan;
                      aboutUsText1.textContent = dataRussian.MN.aboutUsText1;
                      aboutUsText2.textContent = dataRussian.MN.aboutUsText2;

                      // Product -----------

                      mainTitleProductSpan.textContent =
                        dataRussian.MN.mainTitleProductSpan;
                      productTitleSawlagaa.textContent =
                        dataRussian.MN.productTitleSawlagaa;
                      glass.textContent = dataRussian.MN.glass;
                      can.textContent = dataRussian.MN.can;
                      plastic.textContent = dataRussian.MN.plastic;
                      print.textContent = dataRussian.MN.print;

                      productTitleAwtomashin.textContent =
                        dataRussian.MN.productTitleAwtomashin;
                      selbeg.textContent = dataRussian.MN.selbeg;
                      mechanism.textContent = dataRussian.MN.mechanism;

                      productTitleMetal.textContent =
                        dataRussian.MN.productTitleMetal;
                      gan.textContent = dataRussian.MN.gan;
                      dwutawr.textContent = dataRussian.MN.dwutawr;
                      cube.textContent = dataRussian.MN.cube;
                      metal.textContent = dataRussian.MN.metal;

                      productTitleBuilding.textContent =
                        dataRussian.MN.productTitleBuilding;
                      plita.textContent = dataRussian.MN.plita;
                      paint.textContent = dataRussian.MN.paint;
                      floor.textContent = dataRussian.MN.floor;
                      eloctronic.textContent = dataRussian.MN.eloctronic;
                      hooloi.textContent = dataRussian.MN.hooloi;
                      erchim.textContent = dataRussian.MN.erchim;
                      paner.textContent = dataRussian.MN.paner;
                      plywood.textContent = dataRussian.MN.plywood;
                      hongon.textContent = dataRussian.MN.hongon;

                      // Order-------------

                      mainTitleOrderSpan.textContent =
                        dataRussian.MN.mainTitleOrderSpan;
                      orderOne.textContent = dataRussian.MN.orderOne;
                      orderTwo.textContent = dataRussian.MN.orderTwo;
                      orderThree.textContent = dataRussian.MN.orderThree;
                      orderFour.textContent = dataRussian.MN.orderFour;
                      orderFive.textContent = dataRussian.MN.orderFive;
                      orderSix.textContent = dataRussian.MN.orderSix;

                      // Map-------------

                      mainTitleMapSpan.textContent =
                        dataRussian.MN.mainTitleMapSpan;
                      mapSequence.textContent = dataRussian.MN.mapSequence;
                      destination1.textContent = dataRussian.MN.destination1;
                      mapSequence1.textContent = dataRussian.MN.mapSequence1;
                      destination2.textContent = dataRussian.MN.destination2;
                      mapSequence2.textContent = dataRussian.MN.mapSequence2;
                      destination3.textContent = dataRussian.MN.destination3;
                      mapSequence3.textContent = dataRussian.MN.mapSequence3;
                      destination4.textContent = dataRussian.MN.destination4;
                      mapSequence4.textContent = dataRussian.MN.mapSequence4;

                      // Collaboration

                      mainTitleCollaborationSpan.textContent =
                        dataRussian.MN.mainTitleCollaborationSpan;
                      collaborationSentence.textContent =
                        dataRussian.MN.collaborationSentence;
                      teewerZuuchSentence.textContent =
                        dataRussian.MN.teewerZuuchSentence;

                      // Request

                      formQuestion.textContent = dataRussian.MN.formQuestion;
                      formSentence.textContent = dataRussian.MN.formSentence;
                      formButton.textContent = dataRussian.MN.formButton;

                      footerMainTitle.textContent =
                        dataRussian.MN.footerMainTitle;
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
                    className={stylesNav.otherLanguagesLi}
                    onClick={(e) => {
                      setSelected("RU");
                      setIsActive(false);
                      const home = document.querySelector(`.${stylesNav.home}`);
                      const homeService = document.querySelector(
                        `.${stylesNav.homeService}`
                      );
                      const homeAboutUs = document.querySelector(
                        `.${stylesNav.homeAboutUs}`
                      );
                      const homeProducts = document.querySelector(
                        `.${stylesNav.homeProducts}`
                      );
                      const homeOrder = document.querySelector(
                        `.${stylesNav.homeOrder}`
                      );
                      const homeCollaboration = document.querySelector(
                        `.${stylesNav.homeCollaboration}`
                      );

                      const homeColumn = document.querySelector(`.${stylesNav.homeColumn}`);
                      const homeServiceColumn = document.querySelector(
                        `.${stylesNav.homeServiceColumn}`
                      );
                      const homeAboutUsColumn = document.querySelector(
                        `.${stylesNav.homeAboutUsColumn}`
                      );
                      const homeProductsColumn = document.querySelector(
                        `.${stylesNav.homeProductsColumn}`
                      );
                      const homeOrderColumn = document.querySelector(
                        `.${stylesNav.homeOrderColumn}`
                      );
                      const homeCollaborationColumn = document.querySelector(
                        `.${stylesNav.homeCollaborationColumn}`
                      );

                      const homeTitle = document.querySelector(
                        `.${styles.homeTitle}`
                      );
                      const homeInfo = document.querySelector(
                        `.${styles.homeInfo}`
                      );
                      const firstList1 = document.querySelector(
                        `.${styles.firstList1}`
                      );
                      const firstList2 = document.querySelector(
                        `.${styles.firstList2}`
                      );
                      const secondList = document.querySelector(
                        `.${styles.secondList}`
                      );
                      const thirdList = document.querySelector(
                        `.${styles.thirdList}`
                      );
                      const fourthList = document.querySelector(
                        `.${styles.fourthList}`
                      );

                      const mainTitleServiceSpan = document.querySelector(
                        `.${styles.mainTitleServiceSpan}`
                      );
                      const serviceProduct = document.querySelector(
                        `.${styles.serviceProduct}`
                      );
                      const serviceAdvice = document.querySelector(
                        `.${styles.serviceAdvice}`
                      );
                      const serviceSolutionSpan1 = document.querySelector(
                        `.${styles.serviceSolutionSpan1}`
                      );
                      const serviceSolutionSpan2 = document.querySelector(
                        `.${styles.serviceSolutionSpan2}`
                      );

                      const aboutUsTitle = document.querySelector(
                        `.${styles.aboutUsTitle}`
                      );
                      const mainTitleAboutUsSpan = document.querySelector(
                        `.${styles.mainTitleAboutUsSpan}`
                      );
                      const aboutUsText1 = document.querySelector(
                        `.${styles.aboutUsText1}`
                      );
                      const aboutUsText2 = document.querySelector(
                        `.${styles.aboutUsText2}`
                      );

                      // Product-----------

                      const mainTitleProductSpan = document.querySelector(
                        `.${styles.mainTitleProductSpan}`
                      );
                      const productTitleSawlagaa = document.querySelector(
                        `.${stylesPro.productTitleSawlagaa}`
                      );
                      const glass = document.querySelector(
                        `.${stylesPro.glass}`
                      );
                      const can = document.querySelector(`.${stylesPro.can}`);
                      const plastic = document.querySelector(
                        `.${stylesPro.plastic}`
                      );
                      const print = document.querySelector(
                        `.${stylesPro.print}`
                      );

                      const productTitleAwtomashin = document.querySelector(
                        `.${stylesPro.productTitleAwtomashin}`
                      );
                      const selbeg = document.querySelector(
                        `.${stylesPro.selbeg}`
                      );
                      const mechanism = document.querySelector(
                        `.${stylesPro.mechanism}`
                      );

                      const productTitleMetal = document.querySelector(
                        `.${stylesPro.productTitleMetal}`
                      );
                      const gan = document.querySelector(`.${stylesPro.gan}`);
                      const dwutawr = document.querySelector(
                        `.${stylesPro.dwutawr}`
                      );
                      const cube = document.querySelector(`.${stylesPro.cube}`);
                      const metal = document.querySelector(
                        `.${stylesPro.metal}`
                      );

                      const productTitleBuilding = document.querySelector(
                        `.${stylesPro.productTitleBuilding}`
                      );
                      const plita = document.querySelector(
                        `.${stylesPro.plita}`
                      );
                      const paint = document.querySelector(
                        `.${stylesPro.paint}`
                      );
                      const floor = document.querySelector(
                        `.${stylesPro.floor}`
                      );
                      const eloctronic = document.querySelector(
                        `.${stylesPro.eloctronic}`
                      );
                      const hooloi = document.querySelector(
                        `.${stylesPro.hooloi}`
                      );
                      const erchim = document.querySelector(
                        `.${stylesPro.erchim}`
                      );
                      const paner = document.querySelector(
                        `.${stylesPro.paner}`
                      );
                      const plywood = document.querySelector(
                        `.${stylesPro.plywood}`
                      );
                      const hongon = document.querySelector(
                        `.${stylesPro.hongon}`
                      );

                      // Order-------------

                      const mainTitleOrderSpan = document.querySelector(
                        `.${styles.mainTitleOrderSpan}`
                      );
                      const orderOne = document.querySelector(
                        `.${styles.orderOne}`
                      );
                      const orderTwo = document.querySelector(
                        `.${styles.orderTwo}`
                      );
                      const orderThree = document.querySelector(
                        `.${styles.orderThree}`
                      );
                      const orderFour = document.querySelector(
                        `.${styles.orderFour}`
                      );
                      const orderFive = document.querySelector(
                        `.${styles.orderFive}`
                      );
                      const orderSix = document.querySelector(
                        `.${styles.orderSix}`
                      );

                      // Map-------------
                      const mainTitleMapSpan = document.querySelector(
                        `.${styles.mainTitleMapSpan}`
                      );
                      const mapSequence = document.querySelector(
                        `.${stylesMap.mapSequence}`
                      );
                      const destination1 = document.querySelector(
                        `.${stylesMap.destination1}`
                      );
                      const mapSequence1 = document.querySelector(
                        `.${stylesMap.mapSequence1}`
                      );
                      const destination2 = document.querySelector(
                        `.${stylesMap.destination2}`
                      );
                      const mapSequence2 = document.querySelector(
                        `.${stylesMap.mapSequence2}`
                      );
                      const destination3 = document.querySelector(
                        `.${stylesMap.destination3}`
                      );
                      const mapSequence3 = document.querySelector(
                        `.${stylesMap.mapSequence3}`
                      );
                      const destination4 = document.querySelector(
                        `.${stylesMap.destination4}`
                      );
                      const mapSequence4 = document.querySelector(
                        `.${stylesMap.mapSequence4}`
                      );

                      // Collaboration

                      const mainTitleCollaborationSpan = document.querySelector(
                        `.${styles.mainTitleCollaborationSpan}`
                      );
                      const collaborationSentence = document.querySelector(
                        `.${styles.collaborationSentence}`
                      );
                      const teewerZuuchSentence = document.querySelector(
                        `.${styles.teewerZuuchSentence}`
                      );

                      // Request

                      const formQuestion = document.querySelector(
                        `.${stylesReq.formQuestion}`
                      );
                      const formSentence = document.querySelector(
                        `.${stylesReq.formSentence}`
                      );
                      const formButton = document.querySelector(
                        `.${stylesReq.formButton}`
                      );

                      const footerMainTitle = document.querySelector(
                        `.${stylesFooter.footerMainTitle}`
                      );

                      // =============================================

                      home.textContent = dataRussian.RU.home;
                      homeService.textContent = dataRussian.RU.homeService;
                      homeAboutUs.textContent = dataRussian.RU.homeAboutUs;
                      homeProducts.textContent = dataRussian.RU.homeProducts;
                      homeOrder.textContent = dataRussian.RU.homeOrder;
                      homeCollaboration.textContent =
                        dataRussian.RU.homeCollaboration;

                      homeColumn.textContent = dataRussian.RU.homeColumn;
                      homeServiceColumn.textContent = dataRussian.RU.homeServiceColumn;
                      homeAboutUsColumn.textContent = dataRussian.RU.homeAboutUsColumn;
                      homeProductsColumn.textContent = dataRussian.RU.homeProductsColumn;
                      homeOrderColumn.textContent = dataRussian.RU.homeOrderColumn;
                      homeCollaborationColumn.textContent =
                        dataRussian.RU.homeCollaborationColumn;

                      homeTitle.textContent = dataRussian.RU.homeTitle;
                      homeInfo.textContent = dataRussian.RU.homeInfo;
                      firstList1.textContent = dataRussian.RU.firstList1;
                      firstList2.textContent = dataRussian.RU.firstList2;
                      secondList.textContent = dataRussian.RU.secondList;
                      thirdList.textContent = dataRussian.RU.thirdList;
                      fourthList.textContent = dataRussian.RU.fourthList;

                      mainTitleServiceSpan.textContent =
                        dataRussian.RU.mainTitleServiceSpan;
                      serviceProduct.textContent =
                        dataRussian.RU.serviceProduct;
                      serviceAdvice.textContent = dataRussian.RU.serviceAdvice;
                      serviceSolutionSpan1.textContent =
                        dataRussian.RU.serviceSolutionSpan1;
                      serviceSolutionSpan2.textContent =
                        dataRussian.RU.serviceSolutionSpan2;

                      aboutUsTitle.textContent = dataRussian.RU.aboutUsTitle;
                      mainTitleAboutUsSpan.textContent =
                        dataRussian.RU.mainTitleAboutUsSpan;
                      aboutUsText1.textContent = dataRussian.RU.aboutUsText1;
                      aboutUsText2.textContent = dataRussian.RU.aboutUsText2;

                      // Product -----------

                      mainTitleProductSpan.textContent =
                        dataRussian.RU.mainTitleProductSpan;
                      productTitleSawlagaa.textContent =
                        dataRussian.RU.productTitleSawlagaa;
                      glass.textContent = dataRussian.RU.glass;
                      can.textContent = dataRussian.RU.can;
                      plastic.textContent = dataRussian.RU.plastic;
                      print.textContent = dataRussian.RU.print;

                      productTitleAwtomashin.textContent =
                        dataRussian.RU.productTitleAwtomashin;
                      selbeg.textContent = dataRussian.RU.selbeg;
                      mechanism.textContent = dataRussian.RU.mechanism;

                      productTitleMetal.textContent =
                        dataRussian.RU.productTitleMetal;
                      gan.textContent = dataRussian.RU.gan;
                      dwutawr.textContent = dataRussian.RU.dwutawr;
                      cube.textContent = dataRussian.RU.cube;
                      metal.textContent = dataRussian.RU.metal;

                      productTitleBuilding.textContent =
                        dataRussian.RU.productTitleBuilding;
                      plita.textContent = dataRussian.RU.plita;
                      paint.textContent = dataRussian.RU.paint;
                      floor.textContent = dataRussian.RU.floor;
                      eloctronic.textContent = dataRussian.RU.eloctronic;
                      hooloi.textContent = dataRussian.RU.hooloi;
                      erchim.textContent = dataRussian.RU.erchim;
                      paner.textContent = dataRussian.RU.paner;
                      plywood.textContent = dataRussian.RU.plywood;
                      hongon.textContent = dataRussian.RU.hongon;

                      // Order-------------

                      mainTitleOrderSpan.textContent =
                        dataRussian.RU.mainTitleOrderSpan;
                      orderOne.textContent = dataRussian.RU.orderOne;
                      orderTwo.textContent = dataRussian.RU.orderTwo;
                      orderThree.textContent = dataRussian.RU.orderThree;
                      orderFour.textContent = dataRussian.RU.orderFour;
                      orderFive.textContent = dataRussian.RU.orderFive;
                      orderSix.textContent = dataRussian.RU.orderSix;

                      // Map-------------

                      mainTitleMapSpan.textContent =
                        dataRussian.RU.mainTitleMapSpan;
                      mapSequence.textContent = dataRussian.RU.mapSequence;
                      destination1.textContent = dataRussian.RU.destination1;
                      mapSequence1.textContent = dataRussian.RU.mapSequence1;
                      destination2.textContent = dataRussian.RU.destination2;
                      mapSequence2.textContent = dataRussian.RU.mapSequence2;
                      destination3.textContent = dataRussian.RU.destination3;
                      mapSequence3.textContent = dataRussian.RU.mapSequence3;
                      destination4.textContent = dataRussian.RU.destination4;
                      mapSequence4.textContent = dataRussian.RU.mapSequence4;

                      // Collaboration

                      mainTitleCollaborationSpan.textContent =
                        dataRussian.RU.mainTitleCollaborationSpan;
                      collaborationSentence.textContent =
                        dataRussian.RU.collaborationSentence;
                      teewerZuuchSentence.textContent =
                        dataRussian.RU.teewerZuuchSentence;

                      // Request

                      formQuestion.textContent = dataRussian.RU.formQuestion;
                      formSentence.textContent = dataRussian.RU.formSentence;
                      formButton.textContent = dataRussian.RU.formButton;

                      footerMainTitle.textContent =
                        dataRussian.RU.footerMainTitle;
                    }}
                  >
                    <div className={stylesNav.flagBox}>
                      <Image
                        alt="russia"
                        // width={30}
                        // height={30}
                        src={"/flagRussia.png"}
                        fill
                        sizes="(max-width: 70px) 100vw"
                        style={{
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                    <p className={`${stylesNav.flagList}`}>RU</p>
                  </li>
                  <li
                    key={"ENG"}
                    className={stylesNav.otherLanguagesLi}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelected("ENG");
                      setIsActive(false);

                      const home = document.querySelector(`.${stylesNav.home}`);
                      const homeService = document.querySelector(
                        `.${stylesNav.homeService}`
                      );
                      const homeAboutUs = document.querySelector(
                        `.${stylesNav.homeAboutUs}`
                      );
                      const homeProducts = document.querySelector(
                        `.${stylesNav.homeProducts}`
                      );
                      const homeOrder = document.querySelector(
                        `.${stylesNav.homeOrder}`
                      );
                      const homeCollaboration = document.querySelector(
                        `.${stylesNav.homeCollaboration}`
                      );

                      const homeColumn = document.querySelector(`.${stylesNav.homeColumn}`);
                      const homeServiceColumn = document.querySelector(
                        `.${stylesNav.homeServiceColumn}`
                      );
                      const homeAboutUsColumn = document.querySelector(
                        `.${stylesNav.homeAboutUsColumn}`
                      );
                      const homeProductsColumn = document.querySelector(
                        `.${stylesNav.homeProductsColumn}`
                      );
                      const homeOrderColumn = document.querySelector(
                        `.${stylesNav.homeOrderColumn}`
                      );
                      const homeCollaborationColumn = document.querySelector(
                        `.${stylesNav.homeCollaborationColumn}`
                      );

                      const homeTitle = document.querySelector(
                        `.${styles.homeTitle}`
                      );
                      const homeInfo = document.querySelector(
                        `.${styles.homeInfo}`
                      );
                      const firstList1 = document.querySelector(
                        `.${styles.firstList1}`
                      );
                      const firstList2 = document.querySelector(
                        `.${styles.firstList2}`
                      );
                      const secondList = document.querySelector(
                        `.${styles.secondList}`
                      );
                      const thirdList = document.querySelector(
                        `.${styles.thirdList}`
                      );
                      const fourthList = document.querySelector(
                        `.${styles.fourthList}`
                      );

                      const mainTitleServiceSpan = document.querySelector(
                        `.${styles.mainTitleServiceSpan}`
                      );
                      const serviceProduct = document.querySelector(
                        `.${styles.serviceProduct}`
                      );
                      const serviceAdvice = document.querySelector(
                        `.${styles.serviceAdvice}`
                      );

                      const serviceSolutionSpan1 = document.querySelector(
                        `.${styles.serviceSolutionSpan1}`
                      );
                      const serviceSolutionSpan2 = document.querySelector(
                        `.${styles.serviceSolutionSpan2}`
                      );

                      const aboutUsTitle = document.querySelector(
                        `.${styles.aboutUsTitle}`
                      );
                      const mainTitleAboutUsSpan = document.querySelector(
                        `.${styles.mainTitleAboutUsSpan}`
                      );
                      const aboutUsText1 = document.querySelector(
                        `.${styles.aboutUsText1}`
                      );
                      const aboutUsText2 = document.querySelector(
                        `.${styles.aboutUsText2}`
                      );

                      // // Product-----------

                      const mainTitleProductSpan = document.querySelector(
                        `.${styles.mainTitleProductSpan}`
                      );
                      const productTitleSawlagaa = document.querySelector(
                        `.${stylesPro.productTitleSawlagaa}`
                      );
                      const glass = document.querySelector(
                        `.${stylesPro.glass}`
                      );
                      const can = document.querySelector(`.${stylesPro.can}`);
                      const plastic = document.querySelector(
                        `.${stylesPro.plastic}`
                      );
                      const print = document.querySelector(
                        `.${stylesPro.print}`
                      );

                      const productTitleAwtomashin = document.querySelector(
                        `.${stylesPro.productTitleAwtomashin}`
                      );
                      const selbeg = document.querySelector(
                        `.${stylesPro.selbeg}`
                      );
                      const mechanism = document.querySelector(
                        `.${stylesPro.mechanism}`
                      );

                      const productTitleMetal = document.querySelector(
                        `.${stylesPro.productTitleMetal}`
                      );
                      const gan = document.querySelector(`.${stylesPro.gan}`);
                      const dwutawr = document.querySelector(
                        `.${stylesPro.dwutawr}`
                      );
                      const cube = document.querySelector(`.${stylesPro.cube}`);
                      const metal = document.querySelector(
                        `.${stylesPro.metal}`
                      );

                      const productTitleBuilding = document.querySelector(
                        `.${stylesPro.productTitleBuilding}`
                      );
                      const plita = document.querySelector(
                        `.${stylesPro.plita}`
                      );
                      const paint = document.querySelector(
                        `.${stylesPro.paint}`
                      );
                      const floor = document.querySelector(
                        `.${stylesPro.floor}`
                      );
                      const eloctronic = document.querySelector(
                        `.${stylesPro.eloctronic}`
                      );
                      const hooloi = document.querySelector(
                        `.${stylesPro.hooloi}`
                      );
                      const erchim = document.querySelector(
                        `.${stylesPro.erchim}`
                      );
                      const paner = document.querySelector(
                        `.${stylesPro.paner}`
                      );
                      const plywood = document.querySelector(
                        `.${stylesPro.plywood}`
                      );
                      const hongon = document.querySelector(
                        `.${stylesPro.hongon}`
                      );

                      // Order-------------

                      const mainTitleOrderSpan = document.querySelector(
                        `.${styles.mainTitleOrderSpan}`
                      );
                      const orderOne = document.querySelector(
                        `.${styles.orderOne}`
                      );
                      const orderTwo = document.querySelector(
                        `.${styles.orderTwo}`
                      );
                      const orderThree = document.querySelector(
                        `.${styles.orderThree}`
                      );
                      const orderFour = document.querySelector(
                        `.${styles.orderFour}`
                      );
                      const orderFive = document.querySelector(
                        `.${styles.orderFive}`
                      );
                      const orderSix = document.querySelector(
                        `.${styles.orderSix}`
                      );

                      // Map-------------
                      const mainTitleMapSpan = document.querySelector(
                        `.${styles.mainTitleMapSpan}`
                      );
                      const mapSequence = document.querySelector(
                        `.${stylesMap.mapSequence}`
                      );
                      const destination1 = document.querySelector(
                        `.${stylesMap.destination1}`
                      );
                      const mapSequence1 = document.querySelector(
                        `.${stylesMap.mapSequence1}`
                      );
                      const destination2 = document.querySelector(
                        `.${stylesMap.destination2}`
                      );
                      const mapSequence2 = document.querySelector(
                        `.${stylesMap.mapSequence2}`
                      );
                      const destination3 = document.querySelector(
                        `.${stylesMap.destination3}`
                      );
                      const mapSequence3 = document.querySelector(
                        `.${stylesMap.mapSequence3}`
                      );
                      const destination4 = document.querySelector(
                        `.${stylesMap.destination4}`
                      );
                      const mapSequence4 = document.querySelector(
                        `.${stylesMap.mapSequence4}`
                      );

                      // Collaboration

                      const mainTitleCollaborationSpan = document.querySelector(
                        `.${styles.mainTitleCollaborationSpan}`
                      );
                      const collaborationSentence = document.querySelector(
                        `.${styles.collaborationSentence}`
                      );
                      const teewerZuuchSentence = document.querySelector(
                        `.${styles.teewerZuuchSentence}`
                      );

                      // Request

                      const formQuestion = document.querySelector(
                        `.${stylesReq.formQuestion}`
                      );
                      const formSentence = document.querySelector(
                        `.${stylesReq.formSentence}`
                      );
                      const formButton = document.querySelector(
                        `.${stylesReq.formButton}`
                      );

                      const footerMainTitle = document.querySelector(
                        `.${stylesFooter.footerMainTitle}`
                      );

                      // =============================================

                      home.textContent = dataRussian.ENG.home;
                      homeService.textContent = dataRussian.ENG.homeService;
                      homeAboutUs.textContent = dataRussian.ENG.homeAboutUs;
                      homeProducts.textContent = dataRussian.ENG.homeProducts;
                      homeOrder.textContent = dataRussian.ENG.homeOrder;
                      homeCollaboration.textContent =
                        dataRussian.ENG.homeCollaboration;

                      homeColumn.textContent = dataRussian.ENG.homeColumn;
                      homeServiceColumn.textContent = dataRussian.ENG.homeServiceColumn;
                      homeAboutUsColumn.textContent = dataRussian.ENG.homeAboutUsColumn;
                      homeProductsColumn.textContent = dataRussian.ENG.homeProductsColumn;
                      homeOrderColumn.textContent = dataRussian.ENG.homeOrderColumn;
                      homeCollaborationColumn.textContent =
                        dataRussian.ENG.homeCollaborationColumn;

                      homeTitle.textContent = dataRussian.ENG.homeTitle;
                      homeInfo.textContent = dataRussian.ENG.homeInfo;
                      firstList1.textContent = dataRussian.ENG.firstList1;
                      firstList2.textContent = dataRussian.ENG.firstList2;
                      secondList.textContent = dataRussian.ENG.secondList;
                      thirdList.textContent = dataRussian.ENG.thirdList;
                      fourthList.textContent = dataRussian.ENG.fourthList;

                      mainTitleServiceSpan.textContent =
                        dataRussian.ENG.mainTitleServiceSpan;
                      serviceProduct.textContent =
                        dataRussian.ENG.serviceProduct;
                      serviceAdvice.textContent = dataRussian.ENG.serviceAdvice;
                      serviceSolutionSpan1.textContent =
                        dataRussian.ENG.serviceSolutionSpan1;
                      serviceSolutionSpan2.textContent =
                        dataRussian.ENG.serviceSolutionSpan2;

                      aboutUsTitle.textContent = dataRussian.ENG.aboutUsTitle;
                      mainTitleAboutUsSpan.textContent =
                        dataRussian.ENG.mainTitleAboutUsSpan;
                      aboutUsText1.textContent = dataRussian.ENG.aboutUsText1;
                      aboutUsText2.textContent = dataRussian.ENG.aboutUsText2;

                      // Product -----------

                      mainTitleProductSpan.textContent =
                        dataRussian.ENG.mainTitleProductSpan;
                      productTitleSawlagaa.textContent =
                        dataRussian.ENG.productTitleSawlagaa;
                      glass.textContent = dataRussian.ENG.glass;
                      can.textContent = dataRussian.ENG.can;
                      plastic.textContent = dataRussian.ENG.plastic;
                      print.textContent = dataRussian.ENG.print;

                      productTitleAwtomashin.textContent =
                        dataRussian.ENG.productTitleAwtomashin;
                      selbeg.textContent = dataRussian.ENG.selbeg;
                      mechanism.textContent = dataRussian.ENG.mechanism;

                      productTitleMetal.textContent =
                        dataRussian.ENG.productTitleMetal;
                      gan.textContent = dataRussian.ENG.gan;
                      dwutawr.textContent = dataRussian.ENG.dwutawr;
                      cube.textContent = dataRussian.ENG.cube;
                      metal.textContent = dataRussian.ENG.metal;

                      productTitleBuilding.textContent =
                        dataRussian.ENG.productTitleBuilding;
                      plita.textContent = dataRussian.ENG.plita;
                      paint.textContent = dataRussian.ENG.paint;
                      floor.textContent = dataRussian.ENG.floor;
                      eloctronic.textContent = dataRussian.ENG.eloctronic;
                      hooloi.textContent = dataRussian.ENG.hooloi;
                      erchim.textContent = dataRussian.ENG.erchim;
                      paner.textContent = dataRussian.ENG.paner;
                      plywood.textContent = dataRussian.ENG.plywood;
                      hongon.textContent = dataRussian.ENG.hongon;

                      // Order-------------

                      mainTitleOrderSpan.textContent =
                        dataRussian.ENG.mainTitleOrderSpan;
                      orderOne.textContent = dataRussian.ENG.orderOne;
                      orderTwo.textContent = dataRussian.ENG.orderTwo;
                      orderThree.textContent = dataRussian.ENG.orderThree;
                      orderFour.textContent = dataRussian.ENG.orderFour;
                      orderFive.textContent = dataRussian.ENG.orderFive;
                      orderSix.textContent = dataRussian.ENG.orderSix;

                      // Map-------------

                      mainTitleMapSpan.textContent =
                        dataRussian.ENG.mainTitleMapSpan;
                      mapSequence.textContent = dataRussian.ENG.mapSequence;
                      destination1.textContent = dataRussian.ENG.destination1;
                      mapSequence1.textContent = dataRussian.ENG.mapSequence1;
                      destination2.textContent = dataRussian.ENG.destination2;
                      mapSequence2.textContent = dataRussian.ENG.mapSequence2;
                      destination3.textContent = dataRussian.ENG.destination3;
                      mapSequence3.textContent = dataRussian.ENG.mapSequence3;
                      destination4.textContent = dataRussian.ENG.destination4;
                      mapSequence4.textContent = dataRussian.ENG.mapSequence4;

                      // Collaboration

                      mainTitleCollaborationSpan.textContent =
                        dataRussian.ENG.mainTitleCollaborationSpan;
                      collaborationSentence.textContent =
                        dataRussian.ENG.collaborationSentence;
                      teewerZuuchSentence.textContent =
                        dataRussian.ENG.teewerZuuchSentence;

                      // Request

                      formQuestion.textContent = dataRussian.ENG.formQuestion;
                      formSentence.textContent = dataRussian.ENG.formSentence;
                      formButton.textContent = dataRussian.ENG.formButton;

                      footerMainTitle.textContent =
                        dataRussian.ENG.footerMainTitle;
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
              </div>

              {navButt ? (
                <button
                  className={`${stylesNav.navButt} ${stylesNav.navCloseButt}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setnavButt(!navButt);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-x"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    class="icon icon-tabler icon-tabler-menu-2"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                MONDO ARTIS TRADE LLC
              </h3>
              <p className={styles.homeInfo}>International trading company</p>
            </div>

            <div style={{ textAlign: "start" }}>
              <p
                className={`${styles.firstList1}`}
                style={{
                  paddingBottom: "0px",
                  marginBottom: "0px",
                }}
              >
                Guide for Packaging solutions, Spare parts
              </p>
              <p
                className={`${styles.firstList2}`}
                style={{
                  paddingTop: "0px",
                  marginTop: "0px",
                }}
              >
                Equipments, Building and Raw materials
              </p>
              <p className={`${styles.secondList}`}>
                Product Research and Data Materials
              </p>
              <p className={`${styles.thirdList}`}>
                Payment and Transportation Options
              </p>
              <p className={`${styles.fourthList}`}>Professional consulting</p>
            </div>
          </div>

          <ul
            className={`${stylesNav.linkColumn} ${
              navButt ? stylesNav.linkColDisplay : ""
            }`}
          >
            <li>
              <Link className={`${stylesNav.homeColumn}`} href={"/#home"}>
                Нүүр хуудас
              </Link>
            </li>

            <li>
              <Link
                className={`${stylesNav.homeServiceColumn}`}
                href={"#ourservice"}
              >
                Үйлчилгээ
              </Link>
            </li>

            <li>
              <Link
                className={`${stylesNav.homeAboutUsColumn}`}
                href={"#aboutus"}
              >
                Бидний тухай
              </Link>
            </li>

            <li>
              <Link
                className={`${stylesNav.homeProductsColumn}`}
                href={"#products"}
              >
                Бүтээгдэхүүн
              </Link>
            </li>

            <li>
              <Link className={`${stylesNav.homeOrderColumn}`} href={"#order"}>
                Захиалга
              </Link>
            </li>

            <li>
              <Link
                className={`${stylesNav.homeCollaborationColumn}`}
                href={"#collaboration"}
              >
                Хамтын ажиллагаа
              </Link>
            </li>
          </ul>
        </main>

        <section id="ourservice" className={styles.ourService}>
          <div className={styles.service}>
            <h3 className={`${styles.mainTitle} ${styles.serviceTitle}`}>
              <span className={`${styles.mainTitleServiceSpan}`}>
                Манай үйлчилгээ
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
                  Бараа материалын судалгаа, захиалга,
                  <br />
                  нийлүүлэлт
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
                  Гэрээ хэлцэл, хууль зүйн зөвлөгөө
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
                    Ачаа тээвэр,
                  </span>
                  <span className={styles.serviceSolutionSpan2}>
                    мөнгөн гүйлгээний шийдэл
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="aboutus" className={styles.aboutUs}>
          <h1 className={styles.aboutUsTitle}>
            MONDO ARTIS TRADE LLC-Д <br />
            ТАВТАЙ МОРИЛ
          </h1>
          <div className={styles.aboutUsTextContainer}>
            <h3 className={`${styles.mainTitle} ${styles.aboutUsMainTitle}`}>
              <span className={`${styles.mainTitleAboutUsSpan}`}>
                Бидний тухай
              </span>
            </h3>
            <div className={styles.aboutUsText1}>
              Манай компани нь олон улсад үйл ажиллагаа явуулдаг, Ази Европыг
              холбосон худалдаа, зуучлал, судалгаа зөвлөгөөний үйлчилгээ
              үзүүлдэг. Бид БНХАУ-ын үйлдвэрлэлийн тэргүүлэх Guangdong,
              Zhejiang, Jiangsu, Shandong, БНСУ-ын Seoul, Incheon, Busan хот
              мужид байрлах хамтын ажиллагаат олон жилийн туршлагатай, өндөр
              хүчин чадалтай үйлдвэрүүдээс баталгаат бараа бүтээгдэхүүн түүхий
              эдийг хурдан шуурхай ханган нийлүүлж байна.
            </div>
            <div className={styles.aboutUsText2}>
              Компанийн агент, төлөөлөгчийн газрууд БНСУ-ын Сөүл, БНХАУ-ын
              Гуанжоу, Жинан, Шанхай, Хөх хот, Эрээн (агуулах), ОХУ-ын Москва,
              Улан-Үд хотуудад тус тус үйл ажиллагаа явуулж байна. Өөрийн
              мэргэжлийн агентуудаар дамжуулан бараа материал ханган нийлүүлэх,
              судалгаа хийх, үйлдвэрүүдтэй худалдан авагчийн эрх ашигт нийцсэн
              тохиролцоо, таатай нөхцлөөр гэрээ хэлцэл хийж үйлчилдэг.
            </div>
          </div>
        </section>

        <Products />

        <section id="order" className={styles.order}>
          <h3 className={`${styles.mainTitle} ${styles.orderMainTitle}`}>
            <span className={`${styles.mainTitleOrderSpan}`}>
              Хэрхэн захиалах вэ ?
            </span>
          </h3>
          <ol className={styles.orderSentence}>
            <li className={styles.orderOne}>
              Захиалах бүтээгдэхүүний иж бүрэн мэдээллийг бидэнд өгнө.
            </li>
            <li className={styles.orderTwo}>
              Үйлдвэрт мэдээллийг илгээж үнийн санал, материал хийцлэлийн
              мэдээлэл авна.
            </li>
            <li className={styles.orderThree}>
              Загвар, өнгө, сери дугаар, код, тоо хэмжээг тохирч гэрээ хийгдэнэ.
            </li>
            <li className={styles.orderFour}>
              Барааны урьдчилгаа төлбөр төлж захиалга баталгаажна.
            </li>
            <li className={styles.orderFive}>
              Бараа үйлдвэрлэгдэж, ачихад бэлэн болмогц үлдэгдэл төлбөрийг
              төлнө.
            </li>
            <li className={styles.orderSix}>
              Бараа замдаа гарч сонгосон маршрут ба тээвэр зуучаар захиалсан
              хаягт хүргэгдэнэ.
            </li>
          </ol>
        </section>
        <Map />

        <section id="collaboration" className={styles.collaboration}>
          <div className={styles.overlay} />
          <h3 className={`${styles.mainTitle} ${styles.collaborationTitle}`}>
            <span className={`${styles.mainTitleCollaborationSpan}`}>
              Хамтын ажиллагаа
            </span>
          </h3>
          <div className={styles.collaborationSentence}>
            Бид санал болгож байгаа бүтээгдэхүүн, бараа материалыг хамтын
            ажиллагаат үйлдвэрүүдээс ханган нийлүүлж байна. Уян хатан нөхцөл,
            дундын зуучлагчгүй хямд үнэ, чанарын баталгаа, төлбөрийн болон
            тээврийн тохиромжтой нөхцлөөр тантай хамтран ажиллах болно.
          </div>

          <div className={styles.teewerZuuchSentence}>
            Төлбөр болон тээвэр зуучийн шийдэл: LC болон 20/80, 30/70 зарчмаар
            төлбөр хийгдэх ба монголын арилжааны банкинд Эскроу данс нээж
            төлбөрийг гүйцэтгэнэ.
          </div>
        </section>
        <RequestForm />
        <Footer />
      </div>
    </>
  );
}
