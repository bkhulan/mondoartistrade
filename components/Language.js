import Image from "next/image";
import useMessage from "@/hooks/useMessage";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function Language() {
  const f = useMessage();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const [langFlag, setLangFlag] = useState("/flagMongolia.png");
  const [selected, setSelected] = useState("MN");

  const flag = [
    {
      title: "MN",
      source: "/flagMongolia.png",
      alt: "MN",
    },
    {
      title: "EN",
      source: "/flagUSA.png",
      alt: "EN",
    },
    {
      title: "RU",
      source: "/flagRussia.png",
      alt: "RU",
    },
  ];

  const buttonHandler = (e) => {
    // console.log("e ----------- ", e.target.innerText);
    const alt = e.target.innerText;
    if (alt === "MN") {
      setSelected("MN");
      router.push({ pathname, query }, asPath, { locale: "mn", scroll: false });
    } else if (alt === "RU") {
      setSelected("RU");
      router.push({ pathname, query }, asPath, { locale: "ru", scroll: false });
    } else if (alt === "EN") {
      setSelected("EN");
      router.push({ pathname, query }, asPath, { locale: "en", scroll: false });
    }
  };

  console.log("locale", locale);
  console.log("selected", selected);

  return (
    <div className="flex items-center gap-[20px]">
      <div className="">
        <ul className="flex gap-[5px]">
          {flag.map((f) => (
            <li
              key={"MN"}
              className={`flex flex-col items-center gap-[5px] p-[4px] rounded-md cursor-pointer hover:bg-[#9bacbe80]
              ${locale == "MN" ? "bg-[#9bacbe80] rounded-md" : ""}
              `}
              onClick={buttonHandler}
            >
              <div className="w-[30px] h-[20px]">
                <img
                  alt={f.alt}
                  src={f.source}
                  className="w-full h-full rounded-md"
                />
              </div>
              <p className="text-xs m-0">{f.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
