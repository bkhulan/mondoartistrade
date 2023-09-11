"use client";
import Script from "next/script";

import Navigation from "../components/navigation";
import Products from "../components/products";
import Map from "../components/map";
import RequestForm from "../components/requestForm";
import Footer from "../components/footer";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
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
              alt="planet"
              width={831}
              height={636}
              src={"/planet.png"}
              className={styles.planet}
              style={{
                maxWidth: "100%",
                height: "100%",
              }}
            />
          </div>
          <Image
            alt="overlay"
            width={200}
            height={200}
            src={"/homeOverlay.png"}
            className={styles.homeOverlay}
          />
          <Navigation />
          <div className={styles.home}>
            <div className={styles.homeTitleContainer}>
              <h3 className={styles.homeTitle}>MONDO ARTIS TRADE LLC</h3>
              <p className={styles.homeInfo}>International trading company</p>
            </div>

            <div>
              <p className={`${styles.firstList}`}>
                Guide for Packaging solutions, Spare parts, <br />
                Equipments, Building and Raw materials
              </p>
              <p className={styles.homeTitleList}>
                Product Research and Data Materials
              </p>
              <p className={styles.homeTitleList}>
                Payment and Transportation Options
              </p>
              <p className={styles.homeTitleList}>Professional consulting</p>
            </div>
          </div>
        </main>

        <section id="ourservice" className={styles.ourService}>
          <div className={styles.service}>
            <h3 className={`${styles.mainTitle} ${styles.serviceTitle}`}>
              <span className={`${styles.serviceTitleSpan}`}>
                Манай үйлчилгээ
              </span>
            </h3>

            <div className={styles.serviceParts}>
              <div className={styles.servicePart}>
                <Image
                  alt="material"
                  width={110}
                  height={110}
                  src={"/icon1.png"}
                />
                <p className={styles.servicePartText}>
                  Бараа материалын судалгаа, захиалга, нийлүүлэлт
                </p>
              </div>
              <div className={styles.servicePart}>
                <Image
                  alt="contract"
                  width={110}
                  height={110}
                  src={"/icon2.png"}
                />
                <p className={styles.servicePartText}>
                  Гэрээ хэлцэл, хууль зүйн зөвлөгөө
                </p>
              </div>
              <div className={styles.servicePart}>
                <Image
                  alt="cashflow"
                  width={110}
                  height={110}
                  src={"/icon3.png"}
                />
                <p className={styles.servicePartText}>
                  Ачаа тээвэр, мөнгөн гүйлгээний шийдэл
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
          <div className={styles.aboutUsText}>
            <h3 className={`${styles.mainTitle} ${styles.aboutUsMainTitle}`}>
              <span className={`${styles.mainTitleSpan}`}>Бидний тухай</span>
            </h3>
            <div className={styles.aboutUsTextDiv}>
              Манай компани нь олон улсад үйл ажиллагаа явуулдаг, Ази Европыг
              холбосон худалдаа, зуучлал, судалгаа зөвлөгөөний үйлчилгээ
              үзүүлдэг. Бид БНХАУ-ын үйлдвэрлэлийн тэргүүлэх Guangdong,
              Zhejiang, Jiangsu, Shandong, БНСУ-ын Seoul, Incheon, Busan хот
              мужид байрлах хамтын ажиллагаат олон жилийн туршлагатай, өндөр
              хүчин чадалтай үйлдвэрүүдээс баталгаат бараа бүтээгдэхүүн  түүхий
              эдийг хурдан шуурхай ханган нийлүүлж байна. 
            </div>
            <br />
            <div className={styles.aboutUsTextDiv}>
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
          <h3 className={styles.mainTitle}>
            <span className={`${styles.serviceTitleSpan}`}>
              Хэрхэн захиалах вэ ?
            </span>
          </h3>
          <ol className={styles.orderSentence}>
            <li>Захиалах бүтээгдэхүүний иж бүрэн мэдээллийг бидэнд өгнө.</li>
            <li>
              Үйлдвэрт мэдээллийг илгээж үнийн санал, материал хийцлэлийн
              мэдээлэл авна.
            </li>
            <li>
              Загвар, өнгө, сери дугаар, код, тоо хэмжээг тохирч гэрээ хийгдэнэ.
            </li>
            <li>Барааны урьдчилгаа төлбөр төлж захиалга баталгаажна.</li>
            <li>
              Бараа үйлдвэрлэгдэж, ачихад бэлэн болмогц үлдэгдэл төлбөрийг
              төлнө.
            </li>
            <li>
              Бараа замдаа гарч сонгосон маршрут ба тээвэр зуучаар захиалсан
              хаягт хүргэгдэнэ.
            </li>
          </ol>
        </section>
        <Map />
        <section id="collaboration" className={styles.teewerZuuch}>
          <h3
            className={`${styles.mainTitle} ${styles.collaborationTitle}`}
            style={
              {
                // color: "#0C3561"
              }
            }
          >
            <span className={`${styles.mainTitleSpan}`}>Хамтын ажиллагаа</span>
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
