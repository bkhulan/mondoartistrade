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
                <Image alt="shil" src={"/products/sawlagaa/shil.png"} width={679} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}}/>
               </div>
              <div className={styles.imageBox2}>
                    <Image alt="shil2" src={"/products/sawlagaa/shil2.png"} width={462} height={327} className={`${styles.img} ${styles.imgCol2}`} style={{objectFit:"contain", layout: "fill"}}/>
              </div>
          </div>
          <div className={styles.boxContainer}>          
                  <div className={styles.imageBox2}>
                    <Image alt="arhi" src={"/products/sawlagaa/arhi.png"} width={462} height={327} className={`${styles.img} ${styles.imgCol3}`} />
                  </div>

                 <div className={styles.imageBox1}>
                    <Image alt="unertei us" src={"/products/sawlagaa/unerteiUs.png"} width={679} height={327} className={`${styles.img} ${styles.imgCol4}`} style={{objectFit:"contain", layout: "fill"}}/>
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
                    <Image alt="shil" src={"/products/sawlagaa/laaz.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}}/>
               </div>
              <div className={styles.imageBox2_1}>
                    <Image alt="shil2" src={"/products/sawlagaa/laaz3.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol2}`} style={{objectFit:"contain", layout: "fill"}}/>
              </div>
          </div>
          <div className={styles.boxContainer}>              
                <div className={styles.imageBox2_1}>
                  <Image alt="arhi" src={"/products/sawlagaa/gaaz.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol3}`} style={{objectFit:"contain", layout: "fill"}}/>
                </div>

                <div className={styles.imageBox2_1}>
                  <Image alt="unertei us" src={"/products/sawlagaa/laaz2.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol4}`} style={{objectFit:"contain", layout: "fill"}} />
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
                    <Image alt="shil" src={"/products/sawlagaa/plastic.png"} width={561} height={429} style={{objectFit:"contain", layout: "fill"}} />
              </div>
              <div className={styles.imageBox3_1}>
                    <Image alt="shil2" src={"/products/sawlagaa/plastic2.png"} width={561} height={429} style={{objectFit:"contain", layout: "fill"}} />
              </div>
          </div>
          <div className={styles.boxContainer}>              
                <div className={styles.imageBox3_2}>
                  <Image alt="arhi" src={"/products/sawlagaa/plastic3.png"} width={414} height={300} style={{objectFit:"contain", layout: "fill"}} />
                </div>

                <div className={styles.imageBox3_3}>
                  <Image alt="unertei us" src={"/products/sawlagaa/plastic4.png"} width={708} height={300} style={{objectFit:"contain", layout: "fill"}} />
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
                <Image alt="shil" src={"/products/hewlemel/hewlemel1.png"} width={672} height={759} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}}/>
          </div>                       
          <div className={styles.boxContainer4}>
                <div className={styles.imageBox4_2}>
                      <Image alt="shil2" src={"/products/hewlemel/hewlemel2.png"} width={450} height={250} className={`${styles.img} ${styles.imgCol2}`} style={{objectFit:"contain", layout: "fill"}} />
                </div>              
                <div className={styles.imageBox4_2}>
                  <Image alt="arhi" src={"/products/hewlemel/hewlemel3.png"} width={450} height={250} className={`${styles.img} ${styles.imgCol3}`} style={{objectFit:"contain", layout: "fill"}} />
                </div>

                <div className={styles.imageBox4_2}>
                  <Image alt="unertei us" src={"/products/hewlemel/hewlemel4.png"} width={450} height={250} className={`${styles.img} ${styles.imgCol4}`} style={{objectFit:"contain", layout: "fill"}}/>
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
                <Image alt="shil" src={"/products/sawlagaa/selbeg1.png"} width={1152} height={357} style={{objectFit:"contain", layout: "fill"}}/>
            </div>   
          <div className={styles.boxContainer5}>              
                  <div className={styles.imageBox5_2}>
                    <Image alt="arhi" src={"/products/sawlagaa/selbeg2.png"} width={561} height={327} style={{objectFit:"contain", layout: "fill"}}/>
                  </div>

                <div className={styles.imageBox5_2}>
                    <Image alt="unertei us" src={"/products/sawlagaa/selbeg3.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol4}`} style={{objectFit:"contain", layout: "fill"}}/>
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
                  <Image alt="shil" src={"/products/metal/metal1.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}}/>
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Двутавр, швеллер, угольник</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/metal/metal2.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}}/>
            </div>   
            </div>
        </div>


        <div className={styles.metalContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Труба, квадрат төмөр</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/metal/metal3.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Металл лист</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/metal/metal4.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
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
                  <Image alt="shil" src={"/products/building/building1.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Гадна дотно эмульс будаг</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building2.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>   
        </div>
            
          
          <div className={styles.metalContainer}>
            
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Модон ба паркетан шал</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building3.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Электрон тоноглол, автоматжуулалт, дохиолол</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building4.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>   
        </div>

        <div className={styles.metalContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Сантехник хоолой, тоноглол</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building5.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Цахилгаан утас, тоноглол</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building6.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>   
        </div>

        <div className={styles.metalContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Фанер хавтан</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building7.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li>Plywood</li>
            </ul>
            
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building8.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>   
        </div>

        <div className={styles.hongonTsagaanContainer}>
            <ul className={styles.listContainer}>
              <li>Хөнгөн цагаан бэлдэц</li>
            </ul>         

          <div className={styles.hongonTsagaan}>
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building9.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`} style={{objectFit:"contain", layout: "fill"}} />
            </div>   
            <div className={styles.imageBox2_1}>
                  <Image alt="shil" src={"/products/building/building10.png"} width={561} height={327} className={`${styles.img} ${styles.imgCol1}`}style={{objectFit:"contain", layout: "fill"}} />
            </div>   
          </div>   
        </div>
      </section>
        </div>
    )
}
