import Image from "next/image";
import Script from "next/script";

import styles from "../components/Footer.module.css";

export default function RequestForm() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMainTitle}>Холбоо барих</div>
      <div className={`${styles.footerList} ${styles.headTitle}`}>
        <div className={styles.list1}></div>
        <div className={styles.list2}></div>
        <div className={`${styles.list3} ${styles.footerTitle}`}>
          Headquarter office: Ulaanbaatar, Mongolia
        </div>
      </div>
      <div className={styles.footerList}>
        <div className={styles.list1}>
          <div className={styles.flagBox}>
            <Image
              alt="flag"
              // width={70}
              // height={50}
              src={"/flagM.png"}
              fill
              sizes="(max-width: 70px) 100vw"
              // style={{
              //   maxWidth: "70px",
              //   height: "auto",
              // }}
            />
          </div>
        </div>
        <div className={styles.list2}>
          <div className={styles.mongolialist1}>Address: </div>
          <div>Company CEO:</div>
          <div className={styles.mongolialist3}>Company Sales:</div>
          <div>Web site: </div>
          <div>Email: </div>
        </div>
        <div className={`${styles.list3} ${styles.qrMainContainer}`}>
          <div className={styles.mongoliaSide}>
            <div>- Bayangol district 1st khoroo building-68/30, Zip: 16030</div>
            <div>- B. OCHI (Co-founder) Tel: +976-88105320</div>
            <div>- A. TEMUULEN (Co-founder) Tel: +976-99331363</div>
            <div>- www.mondoartis.com</div>
            <div>- sales@mondoartis.com</div>
          </div>
          <div className={styles.qrContainer}>
            <Image
              alt="Whatsup"
              width={120}
              height={117.94}
              src={"/qrCode/whatsup.jpg"}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <Image
              alt="Wechat"
              width={120}
              height={117.94}
              src={"/qrCode/wechat.jpg"}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.footerList}>
        <div className={styles.list1}>
          <div className={styles.flagBox}>
            <Image
              alt="flag"
              // width={70}
              // height={50}
              src={"/flagK.png"}
              fill
              sizes="(max-width: 70px) 100vw"
              // style={{
              //   maxWidth: "90%",
              //   height: "auto",
              // }}
            />
          </div>
        </div>
        <div className={styles.list2}>
          <div className={styles.koreList1}>Address:</div>
          <div>Name:</div>
          <div>Email: </div>
        </div>
        <div className={styles.list3}>
          <div>
            - Gyeonggi do, ilsan segu daesan ro 123, 302-306 Seoul, Korea Tel:
            +82-1068503690
          </div>
          <div>- CHOI.S.I</div>
          <div>- roy113@daum.net</div>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.footerList}>
        <div className={styles.list1}>
          <div className={styles.flagBox}>
            <Image
              alt="flag"
              // width={70}
              // height={50}
              src={"/flagC.png"}
              fill
              sizes="(max-width: 70px) 100vw"
              // style={{
              //   maxWidth: "90%",
              //   height: "auto",
              // }}
            />
          </div>
        </div>
        <div className={`${styles.list2}`}>
          <div>Hohhot China:</div>
          <div className={styles.chinaList1}>Office address:</div>
          <div className={styles.chinaList2}>Storage address:</div>
        </div>
        <div className={styles.list3}>
          <div>- TUMEN GERILE (Agent) Tel: +86-15647065391</div>
          <div>
            - Saihan district st.University, apartment Yang Guang Ming Zuo
            1-302, city Huhehaote Inner Mongolia China
          </div>
          <div>
            - Erlian haote, Inner Mongolia
            内蒙古自治区锡林郭勒盟二连浩特市环宇商贸城 6-11门市 达尔苏收 Tel:
            +86-13734819003
          </div>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.footerList}>
        <div className={styles.list1}>
          <div className={styles.flagBox}>
            <Image
              alt="flag"
              // width={70}
              // height={50}
              src={"/flagR.png"}
              fill
              sizes="(max-width: 70px) 100vw"
              // style={{
              //   maxWidth: "90%",
              //   height: "auto",
              // }}
            />
          </div>
        </div>
        <div className={`${styles.list2} ${styles.russiaList}`}>
          <div>Ulan-Ude Russia:</div>
          <div className={styles.russialist1}>Office address:</div>
          <div>E-mail:</div>
          <div>Moskow Russia:</div>
          <div className={styles.russialist2}>Branch address:</div>
        </div>
        <div className={styles.list3}>
          <div>- TUMEN DAMPILOV (Agent) Tel:+7-9146352828</div>
          <div>
            - st.Yaseniev Build-7A, Ulan-Ude, Buryatia Russian Federation
            670050.
          </div>
          <div>- tumen2005@mail.ru</div>
          <div>- DUGAR Puntsukov (Agent) Tel: +7-9266337819</div>

          <div>
            - st.Autozavodskaya Build-23A Block-2, Moskow Russian Federation
            115280
          </div>
        </div>
      </div>
    </footer>
  );
}
