import Image from "next/image";
import useMessage from "@/hooks/useMessage";
import Script from "next/script";

import mapImage from "../public/mapFixed.png";
import styles from "../components/Map.module.css";
import styles2 from "../styles/Home.module.css";

export default function Map() {
  const f = useMessage();
  return (
    <section className={styles.mainContainer}>
      <h3 className={`${styles2.mainTitle} ${styles.mapTitle}`}>
        <span className={`${styles2.mainTitleMapSpan}`}>{f({ id: "mainTitleMapSpan" })}</span>
      </h3>
      <div className={styles.container}>
        <div className={styles.mapBox}>
          <Image
            alt="map"
            className={styles.image}
            fill
            sizes="(max-width: 70px) 100vw"
            src={"/mapFixed.png"}
          />
        </div>
        <div className={styles.sentence}>
          <div className={styles.mapSequence}>{f({ id: "mapSequence" })}
          </div>
          <div className={styles.mapBoxMobile}>
            <Image
              alt="Map Mobile"
              src={mapImage}
              fill
              placeholder="blur"
              className={styles.image}
              // sizes="(max-width: 450px) 100vw"
            />
          </div>
          <ol className={styles.mapSentence}>
            <li className={styles.destination1}>{f({ id: "destination1" })}</li>
            <div className={styles.mapSequence1}>
            {f({ id: "mapSequence1" })}
            </div>

            <li className={styles.destination2}>{f({ id: "destination2" })}</li>
            <div className={styles.mapSequence2}>
            {f({ id: "mapSequence2" })}</div>

            <li className={styles.destination3}>{f({ id: "destination3" })}</li>
            <div className={styles.mapSequence3}>{f({ id: "mapSequence3" })}
            </div>

            <li className={styles.destination4}>{f({ id: "destination4" })}</li>
            <div className={styles.mapSequence4}>{f({ id: "mapSequence4" })}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}
