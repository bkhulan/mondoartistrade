import Image from "next/image";
import Script from 'next/script'

import styles from "../components/Map.module.css";
import styles2 from "../styles/Home.module.css";

export default function Map() {
    return (
        <section className={styles.container}>
         
            <div className={styles.mapContainer}>
            {/* <div className={styles.imageContainer}> */}
                <Image alt="map" className={styles.image} width={600} height={300} src={"/mapFixed.png"} 
                style={{
                    maxWidth: "100%",
                    height: "auto",
                }}/>
            {/* </div> */}
            <ol className={styles.mapSentence}>
                    <h3 className={`${styles2.mainTitle} ${styles.teewerlehTitle}`} style={{
                        margin: "0px",
                        marginBottom: "10px"
                }}><span className={`${styles2.mainTitleSpan}`}>
                Тээвэрлэх чиглэл
          </span></h3>
                <div className={styles.mapSequence}>БНХАУ болон БНСУ-с захиалгат барааг ОХУ-руу усан тээврээр Владивосток, төмөр замаар Забайкальск, Монгол улсаар транзит авто болон төмөр замаар Улан-Үд хот руу тус тус тээвэрлэнэ.</div>
                <li>ЭРЭЭН БООМТ</li>
                <div className={styles.mapSequence}>Тянжин, Чангду, Шинжинь зэрэг үйлвэрийн бүсээс Эрээн боомт хүртэлх тээвэрлэлт дунджаар 9 хоног</div>

                <li>УЛААНБААТАР ХОТ</li>
                <div className={styles.mapSequence}>Эрээн хотоос Улаанбаатар хот хүртэлх тээвэрлэлтийн хугацаа дунджаар 5 хоног</div>

                <li>УЛААН-ҮҮД ХОТ</li>
                <div className={styles.mapSequence}>Улаанбаатар хотоос Улаан-Үүд хот хүртэл тээвэрлэлтийн хугацаа дунджаар 5 хоног</div>

                <li>НИЙТ ТЭЭВЭРЛЭЛТИЙН ХУГАЦАА</li>
                <div className={styles.mapSequence}>Бараа тээвэрлэх хот, тээвэрлэлтийн ачаалал зэргээс шалтгаалан дунджаар 22-30 хоног тээвэрлэлтэнд зарцуулагдана</div>
            </ol>
            </div>
        </section>
    )
}