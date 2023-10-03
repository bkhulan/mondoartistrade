import Image from "next/image";

import shil1 from "../public/products/sawlagaa/shil.png";
import styles from "./Products.module.css";
import styles2 from "../styles/Home.module.css";

export default function Products() {
  return (
    <div className={styles.mainContainer} id="products">
      <h3
        className={`${styles2.mainTitle} ${styles.mainTitleProduct}`}
        style={{
          margin: "0px",
          marginLeft: "90px",
          marginBottom: "20px"
        }}
      >
        <span className={`${styles2.mainTitleProductSpan}`}>
          Манай бүтээгдэхүүнүүд
        </span>
      </h3>

      <section className={`${styles.productContainer}`}>
        <div className={styles.productPartTitleContainer}>
          <Image
            alt="containerProduct"
            width={50}
            height={50}
            src={"/icons/icon1.png"}
          />
          <h4 className={styles.productTitleSawlagaa}>
            Савлагааны бүтээгдэхүүн
          </h4>
        </div>

        <ul className={styles.listContainer}>
          <li className={styles.glass}>Шилэн сав, лонх</li>
        </ul>

        <div
          className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}
        >
          <div className={styles.imageBox1}>
            <Image
              alt="shil"
              src={shil1}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
          <div className={styles.imageBox1}>
            <Image alt="shil2" src={"/products/sawlagaa/shil2.png"} fill />
          </div>
          <div className={styles.imageBox1}>
            <Image
              alt="arhi"
              src={"/products/sawlagaa/arhi.png"}
              sizes="(max-width: 462px) 100vw"
              fill
            />
          </div>

          <div className={styles.imageBox1}>
            <Image
              alt="unertei us"
              src={"/products/sawlagaa/unerteiUs.png"}
              fill
              sizes="(max-width: 679px) 100vw"
            />
          </div>
        </div>
      </section>
      <section
        className={`${styles.productContainer} ${styles.productContainerSectionTomorLaaz}`}
      >
        <Image
          className={styles.shadow}
          alt="Shadow"
          width={200}
          height={200}
          src={"/mainShadow.png"}
        />
        <div className={styles.listContainer}>
          <ul className={styles.productList1}>
            <li className={styles.can}>Төмөр лааз</li>
          </ul>
        </div>

        <div
          className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}
        >
          <div className={styles.imageBox1}>
            <Image
              alt="shil"
              src={"/products/sawlagaa/laaz.png"}
              fill
              sizes="(max-width: 561px) 100vw"
              className={`${styles.img} ${styles.imgCol1}`}
              style={{ objectFit: "contain", layout: "fill" }}
            />
          </div>
          <div className={styles.imageBox1}>
            <Image
              alt="shil2"
              src={"/products/sawlagaa/laaz3.png"}
              fill
              sizes="(max-width: 561px) 100vw"
              className={`${styles.img} ${styles.imgCol2}`}
              style={{ objectFit: "contain", layout: "fill" }}
            />
          </div>

          <div className={styles.imageBox1}>
            <Image
              alt="arhi"
              src={"/products/sawlagaa/gaaz.png"}
              fill
              sizes="(max-width: 561px) 100vw"
              className={`${styles.img} ${styles.imgCol3}`}
              style={{ objectFit: "contain", layout: "fill" }}
            />
          </div>

          <div className={styles.imageBox1}>
            <Image
              alt="unertei us"
              src={"/products/sawlagaa/laaz2.png"}
              fill
              sizes="(max-width: 561px) 100vw"
              className={`${styles.img} ${styles.imgCol4}`}
              style={{ objectFit: "contain", layout: "fill" }}
            />
          </div>
        </div>
      </section>

      <section
        className={`${styles.productContainer} ${styles.productContainerSection3}`}
      >
        <div className={styles.listContainer}>
          <ul className={styles.productList1}>
            <li className={styles.plastic}>Хуванцар сав, баглаа</li>
          </ul>
        </div>

        <div className={styles.productContainer}>
          <div
            className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}
          >
            <div className={`${styles.imageBox1} ${styles.imageBoxPlastic}`}>
              <Image
                alt="shil"
                src={"/products/sawlagaa/plastic.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
            <div className={`${styles.imageBox1} ${styles.imageBoxPlastic}`}>
              <Image
                alt="shil2"
                src={"/products/sawlagaa/plastic2.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
            <div className={`${styles.imageBox1} ${styles.imageBoxPlastic2}`}>
              <Image
                alt="arhi"
                src={"/products/sawlagaa/plastic3.png"}
                fill
                sizes="(max-width: 414px) 100vw"
              />
            </div>

            <div className={`${styles.imageBox1} ${styles.imageBoxPlastic2}`}>
              <Image
                alt="unertei us"
                src={"/products/sawlagaa/plastic4.png"}
                fill
                sizes="(max-width: 708px) 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.productContainer} ${styles.productContainerSection3}`}
      >
        <div className={styles.listContainer}>
          <ul className={styles.productList1}>
            <li className={styles.print}>Хэвлэмэл уут</li>
          </ul>
        </div>

        <div className={styles.boxContainer3}>
          <div className={`${styles.imageBoxHewlemel1}`}>
            <Image alt="shil" src={"/products/hewlemel/hewlemel1.png"} fill />
          </div>
          <div className={styles.imageBox1}>
            <Image
              alt="shil2"
              src={"/products/hewlemel/hewlemel2.png"}
              fill
              sizes="(max-width: 450px) 100vw"
            />
          </div>
          <div className={styles.imageBox1}>
            <Image
              alt="arhi"
              src={"/products/hewlemel/hewlemel3.png"}
              fill
              sizes="(max-width: 450px) 100vw"
            />
          </div>

          <div className={styles.imageBox1}>
            <Image
              alt="unertei us"
              src={"/products/hewlemel/hewlemel4.png"}
              fill
              sizes="(max-width: 450px) 100vw"
            />
          </div>
        </div>
        <div className={styles.bottomLine} />
      </section>

      <section
        className={`${styles.productContainer} ${styles.productContainerSectionSelbeg}`}
      >
        <Image
          className={styles.shadow}
          alt="Shadow"
          width={200}
          height={200}
          src={"/mainShadow.png"}
        />

        <div className={styles.productPartTitleContainer}>
          <Image
            alt="containerProduct"
            width={50}
            height={40}
            src={"/icons/icon3.png"}
          />
          <h4 className={styles.productTitleAwtomashin}>
            Автомашин, хүнд механизм, уул уурхайн тоног төхөөрөмж, сэлбэг,
            тоноглол
          </h4>
        </div>

        <ul className={styles.productListSelbeg}>
          <li className={styles.selbeg}>Авто машины сэлбэг</li>
          <li className={styles.mechanism}>Механизм, эд анги, тоноглол</li>
        </ul>

        <div className={styles.productContainer}>
          {/* <div className={styles.boxContainerAwto}> */}
            <div className={styles.imageBoxMetal}>
              <Image
                alt="shil"
                src={"/products/sawlagaa/selbeg1.png"}
                fill
                sizes="(max-width: 1152px) 100vw"
              />
            </div>
          {/* </div> */}
          <div className={styles.boxContainer}>
            <div className={styles.imageBox1}>
              <Image
                alt="arhi"
                src={"/products/sawlagaa/selbeg2.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>

            <div className={styles.imageBox1}>
              <Image
                alt="unertei us"
                src={"/products/sawlagaa/selbeg3.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottomLine} />
      </section>

      <section
        className={`${styles.productContainer} ${styles.productContainerSectio}`}
      >
        <div className={styles.productPartTitleContainer}>
          <Image
            alt="containerProduct"
            width={45}
            height={50}
            src={"/icons/icon4.png"}
          />
          <h4 className={styles.productTitleMetal}>Металл бэлдэц, хийцлэл</h4>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li className={styles.gan}>Ган лист</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/metal/metal1.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li className={styles.dwutawr}>Двутавр, швеллер, угольник</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/metal/metal2.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li className={styles.cube}>Труба, квадрат төмөр</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/metal/metal3.png"}
                fill
                sizes="(max-width: 561px) 100vw"
                // width={561}
                // height={327}
                // className={`${styles.img} ${styles.imgCol1}`}
                // style={{ objectFit: "contain", layout: "fill" }}
              />
            </div>
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li className={styles.metal}>Металл лист</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/metal/metal4.png"}
                fill
                sizes="(max-width: 561px) 100vw"
                // width={561}
                // height={327}
                // className={`${styles.img} ${styles.imgCol1}`}
                // style={{ objectFit: "contain", layout: "fill" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottomLine} />
      </section>

      <section
        className={`${styles.productContainer} ${styles.productContainerBuilding}`}
      >
        <div className={styles.productPartTitleContainer}>
          <Image
            alt="containerProduct"
            width={45}
            height={50}
            src={"/icons/icon2.png"}
          />
          <h4 className={styles.productTitleBuilding}>Барилгын материал</h4>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li className={styles.plita}>Плита</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building1.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>

          <div className={styles.column}>
            <ul className={styles.listContainer}>
              <li className={styles.paint}>Гадна дотно эмульс будаг</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building2.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div>
            <ul className={styles.listContainer}>
              <li className={styles.floor}>Модон ба паркетан шал</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building3.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>

          <div>
            <ul
              className={styles.listContainer}
              style={{ padding: "0px", marginRight: "0px", marginLeft: "0px" }}
            >
              <li className={styles.eloctronic}>Электрон тоноглол, автоматжуулалт, дохиолол</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building4.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>
        </div>

        <Image
          className={styles.shadowBuilding}
          alt="Shadow"
          width={200}
          height={200}
          src={"/mainShadow.png"}
        />

        <div className={styles.boxContainer}>
          <div>
            <ul className={styles.listContainer}>
              <li className={styles.hooloi}>Сантехник хоолой, тоноглол</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building5.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>

          <div>
            <ul className={styles.listContainer}>
              <li className={styles.erchim}>Эрчим хүч ба цахилгаан тоноглол</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building6.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div>
            <ul className={styles.listContainer}>
              <li className={styles.paner}>Фанер хавтан</li>
            </ul>
            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building7.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>

          <div>
            <ul className={styles.listContainer}>
              <li className={styles.plywood}>Plywood</li>
            </ul>

            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building8.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.hongonTsagaan}>
          <div>
            <ul className={styles.listContainer}>
              <li className={styles.hongon}>Хөнгөн цагаан бэлдэц</li>
            </ul>
          </div>

          <div className={styles.boxContainer}>
            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building9.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
            <div className={styles.imageBox1}>
              <Image
                alt="shil"
                src={"/products/building/building10.png"}
                fill
                sizes="(max-width: 561px) 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
