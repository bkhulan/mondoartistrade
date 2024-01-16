import Image from "next/image";

import useMessage from "@/hooks/useMessage";

import shil1 from "../public/products/sawlagaa/shil.png";
import styles from "./Products.module.css";
import styles2 from "../styles/Home.module.css";

export default function Products() {
  const f = useMessage();

  const items = [
    {
      name: f({ id: "glass" }),
      image: [
        "/products/sawlagaa/shil.png",
        "/products/sawlagaa/shil2.png",
        "/products/sawlagaa/arhi.png",
        "/products/sawlagaa/unerteiUs.png",
      ],
      shadow: true,
      aspectRatio: "aspect-[70/40]",
    },
    {
      name: f({ id: "can" }),
      image: [
        "/products/sawlagaa/laaz.png",
        "/products/sawlagaa/laaz3.png",
        "/products/sawlagaa/gaaz.png",
        "/products/sawlagaa/laaz2.png",
      ],
      shadow: false,
      aspectRatio: "aspect-[70/40]",
    },
    {
      name: f({ id: "plastic" }),
      image: [
        "/products/sawlagaa/plastic.png",
        "/products/sawlagaa/plastic2.png",
        "/products/sawlagaa/plastic3.png",
        "/products/sawlagaa/plastic4.png",
      ],
      shadow: false,
      aspectRatio: "aspect-auto",
    },
  ];

  const hongonTsagaan = [
    {
      name: f({ id: "hongonTsagaan" }),
      image: [
        "/products/sawlagaa/hongon1.jpg",
        "/products/sawlagaa/hongon2.jpg",
        "/products/sawlagaa/hongon3.jpg",
        "/products/sawlagaa/hongon4.jpg",
      ],
      shadow: true,
      aspectRatio: "aspect-[70/40]",
    },
  ];

  const items2 = [
    {
      title: f({ id: "gan" }),
      img: "/products/metal/metal1.png",
    },
    {
      title: f({ id: "dwutawr" }),
      img: "/products/metal/metal2.png",
    },
    {
      title: f({ id: "cube" }),
      img: "/products/metal/metal3.png",
    },
    {
      title: f({ id: "metal" }),
      img: "/products/metal/metal4.png",
    },
  ];

  const items3 = [
    {
      title: f({ id: "hooloi" }),
      img: "/products/building/building5.png",
    },
    {
      title: f({ id: "erchim" }),
      img: "/products/building/building6.png",
    },
    {
      title: f({ id: "paner" }),
      img: "/products/building/building7.png",
    },
    {
      title: f({ id: "plywood" }),
      img: "/products/building/building8.png",
    },
  ];

  const oroogch = [
    {
      name: f({ id: "skoch" }),
      image: [
        "/products/sawlagaa/oroogch1.jpg",
        "/products/sawlagaa/oroogch2.jpg",
        "/products/sawlagaa/oroogch3.jpg",
        "/products/sawlagaa/oroogch4.jpg",
        "/products/sawlagaa/oroogch5.jpg",
        "/products/sawlagaa/oroogch6.jpg",
      ],
      shadow: true,
      aspectRatio: "aspect-[70/40]",
    },
  ];

  return (
    <div>
      <h3
        className={`${styles2.mainTitle} ${styles.mainTitleProduct}`}
        style={{
          margin: "0px",
          marginLeft: "90px",
          marginBottom: "30px",
        }}
      >
        <span className={`${styles2.mainTitleProductSpan}`}>
        {f({ id: "mainTitleProductSpan" })}
        </span>
      </h3>
      <div className="container mx-auto px:40 lg:px-40" id="products">
        <section>
          <div className={styles.productPartTitleContainer}>
            <Image
              alt="containerProduct"
              width={50}
              height={50}
              src={"/icons/icon1.png"}
            />
            <h4 className={styles.productTitleSawlagaa}>
            {f({ id: "productTitleSawlagaa" })}
            </h4>
          </div>
          {items.map((item) => {
            return (
              <>
                <ul className={styles.listContainer}>
                  <li className={styles.glass}>{item.name}</li>
                </ul>
                {/* {item.shadow ? (
                <Image
                  className={styles.shadow}
                  alt="Shadow"
                  width={200}
                  height={200}
                  src={"/mainShadow.png"}
                />
              ) : ""} */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
                  {item?.image.map((img, i) => {
                    return (
                      <div className={`${item.aspectRatio}`}>
                        <img
                          alt={i}
                          src={img}
                          className="h-full pointer-events-none mx-auto bg-contain w-full"
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </section>

        <section>
          <div className={styles.listContainer}>
            <ul className={styles.productList1}>
              <li className={styles.print}>{f({ id: "print" })}</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="">
              <img
                alt="shil"
                src={"/products/hewlemel/hewlemel1.png"}
                className="h-full pointer-events-none mx-auto bg-contain w-full"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                <img alt="shil2" src={"/products/hewlemel/hewlemel2.png"} />
              </div>
              <div className="">
                <img alt="arhi" src={"/products/hewlemel/hewlemel3.png"} />
              </div>

              <div className="">
                <img
                  alt="unertei us"
                  src={"/products/hewlemel/hewlemel4.png"}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          {hongonTsagaan.map((item) => {
            return (
              <>
                <ul className={styles.listContainer}>
                  <li className={styles.glass}>{item.name}</li>
                </ul>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
                  {item?.image.map((img, i) => {
                    return (
                      <div className={`${item.aspectRatio}`}>
                        <img
                          alt={i}
                          src={img}
                          className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </section>

        <section>
          <ul className={styles.listContainer}>
            <li className="font-semibold text-[#0c3561]">{f({ id: "bag" })}</li>
          </ul>
          <div className="">
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="w-full aspect-[70/40]">
                <img
                  alt="shil"
                  src={"/products/sawlagaa/shuudai1.jpg"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                />
              </div>
              <div className="w-full aspect-[70/40]">
                <img
                  alt="shil"
                  src={"/products/sawlagaa/shuudai2.jpg"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className={styles.imageBox1}>
                <img
                  alt="arhi"
                  src={"/products/sawlagaa/shuudai3.jpg"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                />
              </div>

              <div className={styles.imageBox1}>
                <img
                  alt="unertei us"
                  src={"/products/sawlagaa/shuudai4.jpg"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.productContainer}`}>
          {oroogch.map((item) => {
            return (
              <>
                <ul className={styles.listContainer}>
                  <li className={styles.glass}>{item.name}</li>
                </ul>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
                  {item?.image.map((img, i) => {
                    return (
                      <div className={`${item.aspectRatio}`}>
                        <img
                          alt={i}
                          src={img}
                          className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </section>

        <section className={`${styles.productContainer}`}>
          <ul className="flex flex-col md:flex-row m-[30px] justify-between gap-2 md:gap-10">
            <li className={styles.selbeg}>{f({ id: "tetra" })}</li>
          </ul>

          <div className="flex flex-col gap-5">
            <div className="">
              <img
                alt="shil"
                src={"/products/sawlagaa/tetra1.jpg"}
                className="h-full pointer-events-none mx-auto bg-contain w-full md:w-[30%] border border-[2px] border-[#0c356180] rounded-3xl"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <img
                  alt="arhi"
                  src={"/products/sawlagaa/tetra2.jpg"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                />
              </div>

              <div className={styles.imageBox1}>
                <img
                  alt="unertei us"
                  src={"/products/sawlagaa/tetra3.jpg"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.productContainer}`}>
          <ul className="flex flex-col md:flex-row m-[30px] justify-between gap-2 md:gap-10">
            <li className={styles.selbeg}>{f({ id: "carton" })}</li>
          </ul>

          <div className="flex flex-col gap-5">
            <div className="">
              <img
                alt="shil"
                src={"/products/sawlagaa/carton1.jpg"}
                className="h-full pointer-events-none mx-auto bg-contain w-full md:w-[50%] border border-[2px] border-[#0c356180] rounded-3xl"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <img
                  alt="arhi"
                  src={"/products/sawlagaa/carton2.jpg"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                />
              </div>

              <div className={styles.imageBox1}>
                <img
                  alt="unertei us"
                  src={"/products/sawlagaa/carton3.jpg"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full border border-[2px] border-[#0c356180] rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className={styles.bottomLine} />
        </section>

        <section className={`${styles.productContainer}`}>
          <div className={styles.productPartTitleContainer}>
            <Image
              alt="containerProduct"
              width={50}
              height={40}
              src={"/icons/icon3.png"}
            />
            <h4 className={styles.productTitleAwtomashin}>
              {f({ id: "productTitleAwtomashin" })}
            </h4>
          </div>

          <ul className="flex flex-col md:flex-row m-[30px] justify-between gap-2 md:gap-10">
            <li className={styles.selbeg}>{f({ id: "selbeg" })}</li>
            <li className={styles.mechanism}>{f({ id: "mechanism" })}</li>
          </ul>

          <div className="flex flex-col gap-5">
            <div className={styles.imageBoxMetal}>
              <img
                alt="shil"
                src={"/products/sawlagaa/mining.jpg"}
                className="h-full pointer-events-none mx-auto bg-contain w-full md:w-[80%] border border-[2px] border-[#0c356180] rounded-3xl"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className={styles.imageBox1}>
                <img
                  alt="arhi"
                  src={"/products/sawlagaa/selbeg2.png"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full"
                />
              </div>

              <div className={styles.imageBox1}>
                <img
                  alt="unertei us"
                  src={"/products/sawlagaa/selbeg3.png"}
                  className="h-full pointer-events-none mx-auto bg-contain w-full"
                />
              </div>
            </div>
          </div>
          <div className={styles.bottomLine} />
        </section>

        <section className={`${styles.productContainer}`}>
          <div className={styles.productPartTitleContainer}>
            <Image
              alt="containerProduct"
              width={45}
              height={50}
              src={"/icons/icon4.png"}
            />
            <h4 className={styles.productTitleMetal}>
              {f({ id: "productTitleMetal" })}
            </h4>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
            {items2.map((item, i) => {
              return (
                <div>
                  <ul className={styles.listContainer}>
                    <li className={styles.glass}>{item.title}</li>
                  </ul>
                  <div className={`${item.aspectRatio}`}>
                    <img
                      alt={i}
                      src={item?.img}
                      className="h-full pointer-events-none mx-auto bg-contain w-full"
                    />
                  </div>
                </div>
              );
            })}
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
            <h4 className={styles.productTitleBuilding}>
              {f({ id: "productTitleBuilding" })}
            </h4>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
            {items3.map((item, i) => {
              return (
                <div>
                  <ul className={styles.listContainer}>
                    <li className={styles.glass}>{item.title}</li>
                  </ul>
                  <div className={`${item.aspectRatio}`}>
                    <img
                      alt={i}
                      src={item?.img}
                      className="h-full pointer-events-none mx-auto bg-contain w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* <Image
            className={styles.shadowBuilding}
            alt="Shadow"
            width={200}
            height={200}
            src={"/mainShadow.png"}
          /> */}

          <div className={styles.hongonTsagaan}>
            <div>
              <ul className={styles.listContainer}>
                <li className={styles.hongon}> {f({ id: "hongon" })}</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className={styles.imageBox1}>
                <img alt="shil" src={"/products/building/building9.png"} />
              </div>
              <div className={styles.imageBox1}>
                <img alt="shil" src={"/products/building/building10.png"} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
// import Image from "next/image";
// import useMessage from "@/hooks/useMessage";

// import shil1 from "../public/products/sawlagaa/shil.png";
// import styles from "./Products.module.css";
// import styles2 from "../styles/Home.module.css";

// export default function Products() {
//   const f = useMessage();
//   return (
//     <div className={styles.mainContainer} id="products">
//       <h3
//         className={`${styles2.mainTitle} ${styles.mainTitleProduct}`}
//         style={{
//           margin: "0px",
//           marginLeft: "90px",
//           marginBottom: "20px"
//         }}
//       >
//         <span className={`${styles2.mainTitleProductSpan}`}>
//         {f({ id: "mainTitleProductSpan" })}
//         </span>
//       </h3>

//       <section className={`${styles.productContainer}`}>
//         <div className={styles.productPartTitleContainer}>
//           <Image
//             alt="containerProduct"
//             width={50}
//             height={50}
//             src={"/icons/icon1.png"}
//           />
//           <h2 className={styles.productTitleSawlagaa}>
//           {f({ id: "productTitleSawlagaa" })}
//           </h2>
//         </div>

//         <ul className={styles.listContainer}>
//           <li className={styles.glass}>{f({ id: "glass" })}</li>
//         </ul>

//         <div
//           className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}
//         >
//           <div className={styles.imageBox1}>
//             <Image
//               alt="shil"
//               src={shil1}
//               fill
//               sizes="(max-width: 768px) 100vw, 700px"
//             />
//           </div>
//           <div className={styles.imageBox1}>
//             <Image alt="shil2" src={"/products/sawlagaa/shil2.png"} fill />
//           </div>
//           <div className={styles.imageBox1}>
//             <Image
//               alt="arhi"
//               src={"/products/sawlagaa/arhi.png"}
//               sizes="(max-width: 462px) 100vw"
//               fill
//             />
//           </div>

//           <div className={styles.imageBox1}>
//             <Image
//               alt="unertei us"
//               src={"/products/sawlagaa/unerteiUs.png"}
//               fill
//               sizes="(max-width: 679px) 100vw"
//             />
//           </div>
//         </div>
//       </section>
//       <section
//         className={`${styles.productContainer} ${styles.productContainerSectionTomorLaaz}`}
//       >
//         <Image
//           className={styles.shadow}
//           alt="Shadow"
//           width={200}
//           height={200}
//           src={"/mainShadow.png"}
//         />
//         <div className={styles.listContainer}>
//           <ul className={styles.productList1}>
//             <li className={styles.can}>{f({ id: "can" })}</li>
//           </ul>
//         </div>

//         <div
//           className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}
//         >
//           <div className={styles.imageBox1}>
//             <Image
//               alt="shil"
//               src={"/products/sawlagaa/laaz.png"}
//               fill
//               sizes="(max-width: 561px) 100vw"
//               className={`${styles.img} ${styles.imgCol1}`}
//               style={{ objectFit: "contain", layout: "fill" }}
//             />
//           </div>
//           <div className={styles.imageBox1}>
//             <Image
//               alt="shil2"
//               src={"/products/sawlagaa/laaz3.png"}
//               fill
//               sizes="(max-width: 561px) 100vw"
//               className={`${styles.img} ${styles.imgCol2}`}
//               style={{ objectFit: "contain", layout: "fill" }}
//             />
//           </div>

//           <div className={styles.imageBox1}>
//             <Image
//               alt="arhi"
//               src={"/products/sawlagaa/gaaz.png"}
//               fill
//               sizes="(max-width: 561px) 100vw"
//               className={`${styles.img} ${styles.imgCol3}`}
//               style={{ objectFit: "contain", layout: "fill" }}
//             />
//           </div>

//           <div className={styles.imageBox1}>
//             <Image
//               alt="unertei us"
//               src={"/products/sawlagaa/laaz2.png"}
//               fill
//               sizes="(max-width: 561px) 100vw"
//               className={`${styles.img} ${styles.imgCol4}`}
//               style={{ objectFit: "contain", layout: "fill" }}
//             />
//           </div>
//         </div>
//       </section>

//       <section
//         className={`${styles.productContainer} ${styles.productContainerSection3}`}
//       >
//         <div className={styles.listContainer}>
//           <ul className={styles.productList1}>
//             <li className={styles.plastic}>{f({ id: "plastic" })}</li>
//           </ul>
//         </div>

//         <div className={styles.productContainer}>
//           <div
//             className={`${styles.boxContainer} ${styles.boxContainerMarginBottom}`}
//           >
//             <div className={`${styles.imageBox1} ${styles.imageBoxPlastic}`}>
//               <Image
//                 alt="shil"
//                 src={"/products/sawlagaa/plastic.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//             <div className={`${styles.imageBox1} ${styles.imageBoxPlastic}`}>
//               <Image
//                 alt="shil2"
//                 src={"/products/sawlagaa/plastic2.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//             <div className={`${styles.imageBox1} ${styles.imageBoxPlastic2}`}>
//               <Image
//                 alt="arhi"
//                 src={"/products/sawlagaa/plastic3.png"}
//                 fill
//                 sizes="(max-width: 414px) 100vw"
//               />
//             </div>

//             <div className={`${styles.imageBox1} ${styles.imageBoxPlastic2}`}>
//               <Image
//                 alt="unertei us"
//                 src={"/products/sawlagaa/plastic4.png"}
//                 fill
//                 sizes="(max-width: 708px) 100vw"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         className={`${styles.productContainer} ${styles.productContainerSection3}`}
//       >
//         <div className={styles.listContainer}>
//           <ul className={styles.productList1}>
//             <li className={styles.print}>{f({ id: "print" })}</li>
//           </ul>
//         </div>

//         <div className={styles.boxContainer3}>
//           <div className={`${styles.imageBoxHewlemel1}`}>
//             <Image alt="shil" src={"/products/hewlemel/hewlemel1.png"} fill />
//           </div>
//           <div className={styles.imageBox1}>
//             <Image
//               alt="shil2"
//               src={"/products/hewlemel/hewlemel2.png"}
//               fill
//               sizes="(max-width: 450px) 100vw"
//             />
//           </div>
//           <div className={styles.imageBox1}>
//             <Image
//               alt="arhi"
//               src={"/products/hewlemel/hewlemel3.png"}
//               fill
//               sizes="(max-width: 450px) 100vw"
//             />
//           </div>

//           <div className={styles.imageBox1}>
//             <Image
//               alt="unertei us"
//               src={"/products/hewlemel/hewlemel4.png"}
//               fill
//               sizes="(max-width: 450px) 100vw"
//             />
//           </div>
//         </div>
//         <div className={styles.bottomLine} />
//       </section>

//       <section
//         className={`${styles.productContainer} ${styles.productContainerSectionSelbeg}`}
//       >
//         <Image
//           className={styles.shadow}
//           alt="Shadow"
//           width={200}
//           height={200}
//           src={"/mainShadow.png"}
//         />

//         <div className={styles.productPartTitleContainer}>
//           <Image
//             alt="containerProduct"
//             width={50}
//             height={40}
//             src={"/icons/icon3.png"}
//           />
//           <h4 className={styles.productTitleAwtomashin}>
//            {f({ id: "productTitleAwtomashin" })}
//           </h4>
//         </div>

//         <ul className={styles.productListSelbeg}>
//           <li className={`${styles.selbeg} ${styles.listContainer}`}>{f({ id: "selbeg" })}</li>
//           <li className={`${styles.mechanism} ${styles.listContainer}`}>{f({ id: "mechanism" })}</li>
//         </ul>

//         <div className={styles.productContainer}>
//           <div className={styles.boxContainer}>
//             <div className={styles.imageBox1}>
//               <img
//                 alt="shil"
//                 src={"/products/sawlagaa/mining.jpg"}
//                 fill
//                 sizes="(max-width: 1152px) 100vw"
//                 className={styles.yellow}
//               />
//             </div>
//             <div className={styles.imageBox1}>
//               <img
//                 alt="shil"
//                 src={"/products/sawlagaa/mining2.jpg"}
//                 fill
//                 sizes="(max-width: 1152px) 100vw"
//                 className={styles.yellow}
//               />
//             </div>
//             <div className={styles.imageBox1}>
//               <Image
//                 alt="arhi"
//                 src={"/products/sawlagaa/selbeg2.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="unertei us"
//                 src={"/products/sawlagaa/selbeg3.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.bottomLine} />
//       </section>

//       <section
//         className={`${styles.productContainer} ${styles.productContainerSectio}`}
//       >
//         <div className={styles.productPartTitleContainer}>
//           <Image
//             alt="containerProduct"
//             width={45}
//             height={50}
//             src={"/icons/icon4.png"}
//           />
//           <h4 className={styles.productTitleMetal}>{f({ id: "productTitleMetal" })}</h4>
//         </div>

//         <div className={styles.boxContainer}>
//           <div className={styles.column}>
//             <ul className={styles.listContainer}>
//               <li className={styles.gan}>{f({ id: "gan" })}</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/metal/metal1.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>

//           <div className={styles.column}>
//             <ul className={styles.listContainer}>
//               <li className={styles.dwutawr}>{f({ id: "dwutawr" })}</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/metal/metal2.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>
//         </div>

//         <div className={styles.boxContainer}>
//           <div className={styles.column}>
//             <ul className={styles.listContainer}>
//               <li className={styles.cube}>{f({ id: "cube" })}</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/metal/metal3.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//                 // width={561}
//                 // height={327}
//                 // className={`${styles.img} ${styles.imgCol1}`}
//                 // style={{ objectFit: "contain", layout: "fill" }}
//               />
//             </div>
//           </div>

//           <div className={styles.column}>
//             <ul className={styles.listContainer}>
//               <li className={styles.metal}>{f({ id: "metal" })}</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/metal/metal4.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//                 // width={561}
//                 // height={327}
//                 // className={`${styles.img} ${styles.imgCol1}`}
//                 // style={{ objectFit: "contain", layout: "fill" }}
//               />
//             </div>
//           </div>
//         </div>

//         <div className={styles.bottomLine} />
//       </section>

//       <section
//         className={`${styles.productContainer} ${styles.productContainerBuilding}`}
//       >
//         <div className={styles.productPartTitleContainer}>
//           <Image
//             alt="containerProduct"
//             width={45}
//             height={50}
//             src={"/icons/icon2.png"}
//           />
//           <h4 className={styles.productTitleBuilding}>{f({ id: "productTitleBuilding" })}</h4>
//         </div>

//         {/* <div className={styles.boxContainer}>
//           <div className={styles.column}>
//             <ul className={styles.listContainer}>
//               <li className={styles.plita}>Плита</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building1.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>

//           <div className={styles.column}>
//             <ul className={styles.listContainer}>
//               <li className={styles.paint}>Гадна дотно эмульс будаг</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building2.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>
//         </div> */}

//         {/* <div className={styles.boxContainer}>
//           <div>
//             <ul className={styles.listContainer}>
//               <li className={styles.floor}>Модон ба паркетан шал</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building3.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>

//           <div>
//             <ul
//               className={styles.listContainer}
//               style={{ padding: "0px", marginRight: "0px", marginLeft: "0px" }}
//             >
//               <li className={styles.eloctronic}>Электрон тоноглол, автоматжуулалт, дохиолол</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building4.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>
//         </div> */}

//         <Image
//           className={styles.shadowBuilding}
//           alt="Shadow"
//           width={200}
//           height={200}
//           src={"/mainShadow.png"}
//         />

//         <div className={styles.boxContainer}>
//           <div>
//             <ul className={styles.listContainer}>
//               <li className={styles.hooloi}>{f({ id: "hooloi" })}</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building5.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>

//           <div>
//             <ul className={styles.listContainer}>
//               <li className={styles.erchim}>{f({ id: "erchim" })}</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building6.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>
//         </div>

//         <div className={styles.boxContainer}>
//           <div>
//             <ul className={styles.listContainer}>
//               <li className={styles.paner}>{f({ id: "paner" })}</li>
//             </ul>
//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building7.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>

//           <div>
//             <ul className={styles.listContainer}>
//               <li className={styles.plywood}>{f({ id: "plywood" })}</li>
//             </ul>

//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building8.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>
//         </div>

//         <div className={styles.hongonTsagaan}>
//           <div>
//             <ul className={styles.listContainer}>
//               <li className={styles.hongon}>{f({ id: "hongon" })}</li>
//             </ul>
//           </div>

//           <div className={styles.boxContainer}>
//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building9.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//             <div className={styles.imageBox1}>
//               <Image
//                 alt="shil"
//                 src={"/products/building/building10.png"}
//                 fill
//                 sizes="(max-width: 561px) 100vw"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
