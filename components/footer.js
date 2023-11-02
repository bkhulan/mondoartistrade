import Image from "next/image";
import Script from "next/script";

import styles from "../components/Footer.module.css";

export default function RequestForm() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMainTitle}>Холбоо барих</div>

      <div className={styles.footerList}>
        <div></div>
        <div className={styles.list}>
          <div></div>
          <div className={`${styles.footerTitle}`}>
            Headquarter office: Ulaanbaatar, Mongolia
          </div>
        </div>
      </div>

      <div className={styles.footerList}>
        <div className={styles.flagBox}>
          <Image
            alt="flag"
            src={"/flagM.png"}
            fill
            sizes="(max-width: 70px) 100vw"
          />
        </div>
        <div className={styles.listMongoliaBox}>
          <div className={styles.listMongolia}>
            <div>Address: </div>
            <div>- Bayangol district 1st khoroo building-68/30, Zip: 16030</div>
            <div>Company CEO:</div>
            <div>- B. OCHI (Co-founder) Tel: +976-88105320</div>
            <div>Company Sales:</div>
            <div>- A. TEMUULEN (Co-founder) Tel: +976-99331363</div>
            <div>Web site: </div>
            <div>- www.mondoartis.com</div>
            <div>Email: </div>
            <div>- sales@mondoartis.com</div>
          </div>
          <div className={styles.qrContainer}>
            <Image
              alt="Whatsup"
              width={120}
              height={120}
              src={"/qrCode/whatsup.jpg"}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <Image
              alt="Wechat"
              width={120}
              height={120}
              src={"/qrCode/wechat.jpg"}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className={styles.qrContainerMobile}>
          <Image
            alt="Whatsup"
            width={120}
            height={120}
            src={"/qrCode/whatsup.jpg"}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <Image
            alt="Wechat"
            width={120}
            height={120}
            src={"/qrCode/wechat.jpg"}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.footerList}>
        <div className={styles.flagBox}>
          <Image
            alt="flag"
            src={"/flagK.png"}
            fill
            sizes="(max-width: 70px) 100vw"
          />
        </div>
        <div className={styles.list}>
          <div>Address:</div>
          <div>
            - Gyeonggi do, ilsan segu daesan ro 123, 302-306 Seoul, Korea Tel:
            +82-1068503690
          </div>
          <div>Name:</div>
          <div>- CHOI.S.I</div>
          <div>Email: </div>
          <div>- roy113@daum.net</div>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.footerList}>
        <div className={styles.flagBox}>
          <Image
            alt="flag"
            src={"/flagC.png"}
            fill
            sizes="(max-width: 70px) 100vw"
          />
        </div>
        <div className={`${styles.list}`}>
          <div>Hohhot China:</div>
          <div>- TUMEN GERILE (Agent) Tel: +86-15647065391</div>
          <div className={styles.chinaList1}>Address:</div>
          <div>
            - 内蒙古呼和浩特市赛罕区东二环万正小区南门绿色农畜产品展销中心 Inner Mongolia Hohhot City Saihan District East second road Wanzheng community. Agricultural and livestock products exhibition center
          </div>
          <div>General manager:</div>
          <div>
          - MARIAN 马力岩 Tel: +86-18586289377 
            韩卫国 Tel: +86-18698445319
          </div>
         
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.footerList}>
        <div className={styles.flagBox}>
          <Image
            alt="flag"
            src={"/flagR.png"}
            fill
            sizes="(max-width: 70px) 100vw"
          />
        </div>
        <div className={`${styles.list} ${styles.russiaList}`}>
          <div>Ulan-Ude Russia:</div>
          <div>- TUMEN DAMPILOV (Agent) Tel:+7-9146352828</div>
          <div className={styles.russialist1}>Office address:</div>
          <div>
            - st.Yaseniev Build-7A, Ulan-Ude, Buryatia Russian Federation
            670050.
          </div>
          <div>E-mail:</div>
          <div>- tumen2005@mail.ru</div>
          <div>Moskow Russia:</div>
          <div>- DUGAR Puntsukov (Agent) Tel: +7-9266337819</div>
          <div className={styles.russialist2}>Branch address:</div>
          <div>
            - st.Autozavodskaya Build-23A Block-2, Moskow Russian Federation
            115280
          </div>
        </div>
      </div>
    </footer>
  );
}
