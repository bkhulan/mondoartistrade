import Image from "next/image";
import Script from "next/script";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useMessage from "@/hooks/useMessage";

import styles from "../components/requestForm.module.css";

export default function RequestForm({ selected }) {
  const f = useMessage();

  const [name, setName] = useState("Нэр*");
  const [email, setEmail] = useState("Емайл*");
  const [phone, setPhone] = useState("Утас*");
  const [city, setCity] = useState("Хот*");
  const [message, setMessage] = useState("Зурвас*");

  useEffect(() => {
    if (selected == "MN") {
      setName("Нэр*");
      setEmail("И-мэйл*");
      setPhone("Утас*");
      setCity("Хот*");
      setMessage("Зурвас*");
    } else if (selected == "RU") {
      setName("Имя и фамилия*");
      setEmail("Рабочий email*");
      setPhone("Телефон*");
      setCity("Город, область*");
      setMessage("Интересующий вас продукт или услуга*");
    } else if (selected == "ENG") {
      setName("Name*");
      setEmail("Email*");
      setPhone("Phone number*");
      setCity("City*");
      setMessage("Message*");
    }
  });

  return (
    <section className={styles.formContainer}>
      <h3 className={styles.formQuestion}>
        {f({ id: "formQuestion" })}
      </h3>

      <div className={styles.formSentence}>
        {f({ id: "formSentence" })}
      </div>

      <form
        className={styles.form}
        action="https://formsubmit.co/ba1163bdf0ad84a3c300b9a6f1da7edf"
        method="POST"
      >
        <div className={styles.formInput}>
          <input
            className={styles.input}
            name="Name"
            type="text"
            placeholder={f({ id: "requestName" })}
            required
          />
          <input
            className={styles.input}
            name="Email"
            type="email"
            placeholder={f({ id: "requestEmail" })}
            required
          />
          <input
            className={styles.input}
            name="Phone number"
            type="tel"
            placeholder={f({ id: "requestNumber" })}
          />
          <input
            className={styles.input}
            name="City"
            type="text"
            placeholder={f({ id: "requestCity" })}
          />
        </div>
        <textarea
          className={styles.textArea}
          name="Message"
          placeholder={f({ id: "requestMessage" })}
          required
        />
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.formButton}>
            {f({ id: "formButton" })}
          </button>
        </div>
      </form>
    </section>
  );
}
