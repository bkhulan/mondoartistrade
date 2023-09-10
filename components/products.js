import Image from "next/image";
import Script from 'next/script'

import styles from "./Products.module.css";
import styles2 from "../styles/Home.module.css";

export default function Products() {

    return (
      <div className={styles.mainContainer} id="products">
   
      <h3 className={`${styles2.mainTitle} ${styles.mainTitleProduct}`} style={{
          margin: "0px",
        marginLeft: "85px"
      }}><span className={`${styles2.serviceTitleSpan}`}>
      Манай бүтээгдэхүүнүүд</span>
      </h3>
      
    <section className={`${styles.productContainer} ${styles.productContainerSection1}`}>
        <div className={styles.productPartTitleContainer}>
          <Image alt="containerProduct" width={50} height={50} src={"/icons/icon1.png"} />
          <h4 className={styles.productPartTitle}>Савлагааны бүтээгдэхүүн</h4>
        </div>

        <div className={styles.listContainer}>
          <ul className={styles.productList1}>
            <li>Шилэн сав, лонх</li>
            </ul>
        </div>

        <div className={styles.imageContainer}>
          <div className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}>
               <div className={styles.imageBox1}>
                    <Image alt="shil" layout="fill" objectFit="contain" src={"/products/sawlagaa/shil.png"} className={`${styles.img} ${styles.imgCol1}`} />
               </div>
              <div className={styles.imageBox2}>
                    <Image alt="shil2" layout="fill" objectFit="contain" src={"/products/sawlagaa/shil2.png"} className={`${styles.img} ${styles.imgCol2}`} />
              </div>
               {/* <div className={styles.imageBox2}>
                    <Image alt="shil2" width={462} height={327} src={"/products/sawlagaa/shil2.png"} className={`${styles.img} ${styles.imgCol2}`} style={{
                        maxWidth: "100%",
                        height: "auto",
                        // objectFit: "cover"
                      }}/>
              </div> */}
          </div>
          <div className={styles.boxContainer}>          
                  <div className={styles.imageBox2}>
                    <Image alt="arhi" layout="fill" objectFit="contain" src={"/products/sawlagaa/arhi.png"} className={`${styles.img} ${styles.imgCol3}`} />
                  </div>

                 <div className={styles.imageBox1}>
                    <Image alt="unertei us" layout="fill" objectFit="contain" src={"/products/sawlagaa/unerteiUs.png"} className={`${styles.img} ${styles.imgCol4}`} />
                    </div>
                  </div>
          </div>             
    </section>
        <section className={`${styles.productContainer} ${styles.productContainerSectionTomorLaaz}`}>
        <Image className={styles.shadow} alt="Shadow" width={200} height={200} src={"/mainShadow.png"} />
        <div className={styles.listContainer}>
          <ul className={styles.productList1}>
            <li>Төмөр лааз</li>
            </ul>
        </div>

        <div className={styles.imageContainer}>
          <div className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}> 
               <div className={styles.imageBox2_1}>
                    <Image alt="shil" layout="fill" objectFit="contain" src={"/products/sawlagaa/laaz.png"} className={`${styles.img} ${styles.imgCol1}`} />
               </div>
              <div className={styles.imageBox2_1}>
                    <Image alt="shil2" layout="fill" objectFit="contain" src={"/products/sawlagaa/laaz3.png"} className={`${styles.img} ${styles.imgCol2}`} />
              </div>
          </div>
          <div className={styles.boxContainer}>              
                <div className={styles.imageBox2_1}>
                  <Image alt="arhi" layout="fill" objectFit="contain" src={"/products/sawlagaa/gaaz.png"} className={`${styles.img} ${styles.imgCol3}`} />
                </div>

                <div className={styles.imageBox2_1}>
                  <Image alt="unertei us" layout="fill" objectFit="contain" src={"/products/sawlagaa/laaz2.png"} className={`${styles.img} ${styles.imgCol4}`} />
                  </div>
                </div>
          </div>             
    </section>
    <section className={`${styles.productContainer} ${styles.productContainerSection3}`}>
        <div className={styles.listContainer}>
          <ul className={styles.productList1}>
            <li>Хуванцар сав, баглаа</li>
            </ul>
        </div>

        <div className={styles.imageContainer}>
          <div className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}> 
              <div className={styles.imageBox3_1}>
                    <Image alt="shil" layout="fill" objectFit="contain" src={"/products/sawlagaa/plastic.png"} />
              </div>
              <div className={styles.imageBox3_1}>
                    <Image alt="shil2" layout="fill" objectFit="contain" src={"/products/sawlagaa/plastic2.png"} />
              </div>
          </div>
          <div className={styles.boxContainer}>              
                <div className={styles.imageBox3_2}>
                  <Image alt="arhi" layout="fill" objectFit="contain" src={"/products/sawlagaa/plastic3.png"} />
                </div>

                <div className={styles.imageBox3_3}>
                  <Image alt="unertei us" layout="fill" objectFit="contain" src={"/products/sawlagaa/plastic4.png"} />
                  </div>
                </div>
          </div>             
    </section>

    <section className={`${styles.productContainer} ${styles.productContainerSection3}`}>
        <div className={styles.listContainer}>
          <ul className={styles.productList1}>
            <li>Хэвлэмэл уут</li>
            </ul>
        </div>

        <div className={styles.imageContainer4}>
          <div className={styles.imageBox4_1}>
                <Image alt="shil" layout="fill" objectFit="contain" src={"/products/hewlemel/hewlemel1.png"} className={`${styles.img} ${styles.imgCol1}`} />
          </div>                       
          <div className={styles.boxContainer4}>
                <div className={styles.imageBox4_2}>
                      <Image alt="shil2" layout="fill" objectFit="contain" src={"/products/hewlemel/hewlemel2.png"} className={`${styles.img} ${styles.imgCol2}`} />
                </div>              
                <div className={styles.imageBox4_2}>
                  <Image alt="arhi" layout="fill" objectFit="contain" src={"/products/hewlemel/hewlemel3.png"} className={`${styles.img} ${styles.imgCol3}`} />
                </div>

                <div className={styles.imageBox4_2}>
                  <Image alt="unertei us" layout="fill" objectFit="contain" src={"/products/hewlemel/hewlemel4.png"} className={`${styles.img} ${styles.imgCol4}`} />
                  </div>
                </div>
          </div>    
          <div className={styles.bottomLine} />
    </section>

  <section className={`${styles.productContainer} ${styles.productContainerSectionSelbeg}`}>
  <Image className={styles.shadow} alt="Shadow" width={200} height={200} src={"/mainShadow.png"} />
        
        <div className={styles.productPartTitleContainer}>
          <Image alt="containerProduct" width={50} height={40} src={"/icons/icon3.png"} />
          <h4 className={styles.productPartTitle}>Автомашин, хүнд механизм, уул уурхайн тоног төхөөрөмж, сэлбэг, тоноглол</h4>
        </div>

        <div className={styles.listContainer}>
          <ul className={styles.productListSelbeg}>
            <li>Авто машины сэлбэг</li>
            <li>Механизм, эд анги, тоноглол</li>
          </ul>
        </div>

        <div className={styles.imageContainer5}>                
            <div className={styles.imageBox5_1}>
                <Image alt="shil" layout="fill" objectFit="contain" src={"/products/sawlagaa/selbeg1.png"} />
            </div>   
          <div className={styles.boxContainer5}>              
                  <div className={styles.imageBox5_2}>
                    <Image alt="arhi" layout="fill" objectFit="contain" src={"/products/sawlagaa/selbeg2.png"} />
                  </div>

                <div className={styles.imageBox5_2}>
                    <Image alt="unertei us" layout="fill" objectFit="contain" src={"/products/sawlagaa/selbeg3.png"} className={`${styles.img} ${styles.imgCol4}`} />
                    </div>
                  </div>
          </div>
          <div className={styles.bottomLine} />
      </section>

      <section className={`${styles.productContainer} ${styles.productContainerSectio}`}>
        <div className={styles.productPartTitleContainer}>
          <Image alt="containerProduct" width={45} height={50} src={"/icons/icon4.png"} />
          <h4 className={styles.productPartTitle}>Металл бэлдэц, хийцлэл</h4>
        </div>

        <div className={styles.metalContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Ган лист</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/metal/metal1.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Двутавр, швеллер, угольник</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/metal/metal2.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
            </div>
        </div>


        <div className={styles.metalContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Труба, квадрат төмөр</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/metal/metal3.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Металл лист</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/metal/metal4.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>   
        </div>

        <div className={styles.bottomLine} />
      </section>


      <section className={`${styles.productContainer} ${styles.productContainerSectionBarilga}`}>
        <div className={styles.productPartTitleContainer}>
          <Image alt="containerProduct" width={45} height={50} src={"/icons/icon2.png"} />
          <h4 className={styles.productPartTitle}>Барилгын материал</h4>
        </div>

        <div className={styles.metalContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Плита</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building1.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Гадна дотно эмульс будаг</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building2.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>   
        </div>
            
          
          <div className={styles.metalContainer}>
            
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Модон ба паркетан шал</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building3.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Электрон тоноглол, автоматжуулалт, дохиолол</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building4.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>   
        </div>

        <div className={styles.metalContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Сантехник хоолой, тоноглол</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building5.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Цахилгаан утас, тоноглол</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building6.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>   
        </div>

        <div className={styles.metalContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Фанер хавтан</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building7.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Plywood</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building8.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>   
        </div>

        <div className={styles.hongonTsagaanContainer}>
            <ul className={styles.listContainer}>
              <li>Хөнгөн цагаан бэлдэц</li>
            </ul>         

          <div className={styles.hongonTsagaan}>
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building9.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" layout="fill" objectFit="contain" src={"/products/building/building10.png"} className={`${styles.img} ${styles.imgCol1}`} />
            </div>   
          </div>   
        </div>
      </section>
        </div>
    )
}
