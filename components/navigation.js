"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import styles from "./navigation.module.css";

export default function Navigation() {
  const [languageRussian, setLanguageRussian] = useState(false);
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <Image
        alt="logo"
        width={70}
        height={60}
        src={"/logoMondo2.png"}
        className={styles.logo}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
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
              <Image
                alt="mongolia"
                width={30}
                height={30}
                src={"/flagMongolia.png"}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
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
              <Image
                alt="russia"
                width={30}
                height={30}
                src={"/flagRussia.png"}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
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
