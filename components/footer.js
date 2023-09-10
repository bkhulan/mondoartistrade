import Image from "next/image";
import Script from 'next/script'

import styles from "../components/Footer.module.css";

export default function RequestForm() {
    return (
      <section className={styles.footerContainer}>
           <div className={styles.footerList}>
                  <div className={styles.list1}>
                    <Image alt="flag" width={70} height={50} src={"/flagM.png"} style={{
                      maxWidth: "90%",
                      height: "auto",
                    }}/>
                  </div>
                  <div className={styles.list2}>
                    <div>Ulaanbaatar Mongolia: </div>
                    <div>Company CEO:</div>
                    <div>Web site: </div>
                  </div>
                  <div className={styles.list3}>
                    <div>- Bayangol district 1st khoroo Building-68/30, Zip:16030</div>
                    <div>- B. OCHI (Co-founder) Tel: +976-88105320</div>
                    <div>- www.mondoartis.com</div>
                  </div>
           </div>
           <div className={styles.line} />
           <div className={styles.footerList}>
                  <div className={styles.list1}>
                    <Image alt="flag" width={70} height={50} src={"/flagR.png"} style={{
                                    maxWidth: "90%",
                                    height: "auto",
                                  }}/>
                  </div>
                  <div className={styles.list2}>
                    <div>Ulan-Ude Russia:</div>
                    <div>E-mail:</div>
                    <div>Office address:</div>
                    <div>Moskow Russia:</div>
                    <div>Branch address:</div>
                  </div>
                  <div className={styles.list3}>
                    <div>- TUMEN Dampilov (Agent) Tel:+79146352828</div>
                    <div>- tumen2005@mail.ru</div>
                    <div>- st.Yaseniev Build-7A, Ulan-Ude, Buryatia Russian Federation 670050.</div>
                    <div>- DUGAR Puntsukov (Agent) Tel:+79266337819</div>
                    <div>- st.Autozavodskaya Build-23A Block-2, Moskow Russian Federation 115280</div>
                  </div>
           </div>
           <div className={styles.line} />

           <div className={styles.footerList}>
              <div className={styles.list1}>
                <Image alt="flag" width={70} height={50} src={"/flagK.png"} style={{
                                maxWidth: "90%",
                                height: "auto",
                              }}/>
              </div>
              <div className={styles.list2}>
                <div>Name:</div>
                <div>Address:</div>
                <div>Telephone:</div>
              </div>
              <div className={styles.list3}>
                <div>- Choi.S.I</div>
                <div>- GYEONGGI DO, ILSAN SEGU DAESAN RO 123, 302-306 SEOUL, KOREA. </div>
                <div>- +82-1068503690</div>
              </div>
           </div>

          
           <div className={styles.line} />

           <div className={styles.footerList}>
              <div className={styles.list1}>
                <Image alt="flag" width={70} height={50} src={"/flagC.png"} style={{
                                maxWidth: "90%",
                                height: "auto",
                              }}/>
              </div>
              <div className={styles.list2}>
                <div>Hohhot China:</div>
                <div>Office address:</div>
                <div>Storage address:</div>
              </div>
              <div className={styles.list3}>
                <div>- TUMEN Gerile (Agent) Tel: 15647065391</div>
                <div>- Saihan district st.University, apartment Yang Guang Ming Zuo 1-302, city Huhehaote Inner Mongolia China</div>
                <div>- Erlian haote, Inner Mongolia 内蒙古自治区锡林郭勒盟二连浩特市环宇商贸城
6-11门市 达尔苏收 Tel: 13734819003</div>
              </div>
           </div>
        </section>
    )
}