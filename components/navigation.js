"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { IconX } from "@tabler/icons";

import styles from "./navigation.module.css";

export default function Navigation() {
  const [languageRussian, setLanguageRussian] = useState(false);
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <div className={styles.logoBox}>
        <Image
          alt="logo"
          // width={70}
          // height={60}
          src={"/logoMondo.png"}
          fill
          sizes="(max-width: 70px) 100vw"
          // style={{
            //   maxWidth: "100%",
            //   height: "auto",
            // }}
            />
        </div>
      <ul className={styles.link}>
        {/* className={`${styles.aTagLink} ${
                  router.pathname == "/protectedroute/home" ? styles.active : ""
                }`} */}

        <li>
          <Link className={`${styles.navLi}`} href={"/#home"}>
            Нүүр хуудас
          </Link>
        </li>

        <li className={`${styles.linkLi}`}>
          <Link
            className={`${styles.navLi} ${
              router.pathname == "/#ourservice" ? styles.active : ""
            }`}
            href={"#ourservice"}
          >
            Үйлчилгээ
          </Link>
        </li>

        <li className={`${styles.linkLi}`}>
          <Link
            className={`${styles.navLi} ${
              router.pathname == "/#aboutus" ? styles.active : ""
            }`}
            href={"#aboutus"}
          >
            Бидний тухай
          </Link>
        </li>

        <li className={`${styles.linkLi}`}>
          <Link
            className={`${styles.navLi} ${
              router.pathname == "/#products" ? styles.active : ""
            }`}
            href={"#products"}
          >
            Бүтээгдэхүүн
          </Link>
        </li>

        <li className={`${styles.linkLi}`}>
          <Link
            className={`${styles.navLi} ${
              router.pathname == "/#order" ? styles.active : ""
            }`}
            href={"#order"}
          >
            Захиалга
          </Link>
        </li>

        <li className={`${styles.linkLi}`}>
          <Link
            className={`${styles.navLi} ${
              router.pathname == "/#collaboration" ? styles.active : ""
            }`}
            href={"#collaboration"}
          >
            Хамтын ажиллагаа
          </Link>
        </li>

        <div className={styles.language}>
          {!languageRussian ? (
            <>
              <div className={styles.navFlagBox}>
                <Image
                  alt="mongolia"
                  // width={30}
                  // height={30}
                  src={"/flagMongolia.png"}
                  fill
                  sizes="(max-width: 70px) 100vw"
                  style={{
                    borderRadius: "4px",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                MN
              </p>
            </>
          ) : (
            <>
            <div className={styles.navFlagBox}>
              <Image
                alt="russia"
                // width={30}
                // height={30}
                src={"/flagRussia.png"}
                fill
                sizes="(max-width: 70px) 100vw"
                style={{
                  borderRadius: "4px",
                }}
                />
              </div>
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                RU
              </p>
            </>
          )}
          <Image
            alt="downArrow"
            onClick={() => {
              setLanguageRussian(!languageRussian);
            }}
            width={14}
            height={14}
            src={"/downArrow.png"}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </ul>
    </nav>
  );
}
