import Image from "next/image";
import Script from "next/script";

import styles from "../components/Map.module.css";
import styles2 from "../styles/Home.module.css";

export default function Map() {
  return (
    <section className={styles.container}>
      <div className={styles.mapContainer}>
        <div className={styles.mapBox}>
          <Image
            alt="map"
            className={styles.image}
            // width={550}
            // height={444}
            fill
            sizes="(max-width: 70px) 100vw"
            src={"/mapFixed.png"}
            // style={{
            //   maxWidth: "100%",
            //   height: "auto",
            // }}
          />
        </div>
        <ol className={styles.mapSentence}>
          <h3
            className={`${styles2.mainTitle} ${styles.teewerlehTitle}`}
            style={{
              margin: "0px",
              marginBottom: "10px",
            }}
          >
            <span className={`${styles2.mainTitleMapSpan}`}>Тээвэрлэх чиглэл</span>
          </h3>
          <div className={styles.mapSequence}>
            БНХАУ болон БНСУ-с захиалгат барааг ОХУ-руу усан тээврээр
            Владивосток, төмөр замаар Забайкальск, Монгол улсаар транзит авто
            болон төмөр замаар Улан-Үд хот руу тус тус тээвэрлэнэ.
          </div>
          <li className={styles.destination1}>Эрээн боомт</li>
          <div className={styles.mapSequence1}>
            БНХАУ-ын үйлвэрийн бүсээс Эрээн хот хүртэл тээвэрлэлтийн хугацаа
            дунджаар 7-9 хоног.
          </div>

          <li className={styles.destination2}>Улаанбаатар хот</li>
          <div className={styles.mapSequence2}>
            Эрээн хотоос Улаанбаатар хот хүртэл тээвэрлэлтийн хугацаа дунджаар 5-7 хоног.
          </div>

          <li className={styles.destination3}>Улаан-үүд хот</li>
          <div className={styles.mapSequence3}>
            Улаанбаатар хотоос Улаан-Үүд хот хүртэл тээвэрлэлтийн хугацаа дунджаар 5-7 хоног.
          </div>

          <li className={styles.destination4}>Нийт тээвэрлэлтийн хугацаа</li>
          <div className={styles.mapSequence4}>
            Бараа тээвэрлэх хот, тээвэрлэлтийн ачаалал зэргээс шалтгаалан дунджаар 22-30 хоног тээвэрлэлтэнд зарцуулагдана.
          </div>
        </ol>
      </div>
    </section>
  );
}
