import Image from "next/image";
import Script from "next/script";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "../components/requestForm.module.css";

export default function RequestForm({ selected }) {
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
      setMessage("Зурвас*")
    } else if (selected == "RU") {
      setName("Имя и фамилия*");
      setEmail("Рабочий email*");
      setPhone("Телефон*");
      setCity("Город, область*");
      setMessage("Интересующий вас продукт или услуга*")
    } else if (selected == "ENG") {
      setName("Name*");
      setEmail("Email*");
      setPhone("Phone number*");
      setCity("City*");
      setMessage("Message*")
    }
  });

  return (
    <section className={styles.formContainer}>
      <h3 className={styles.formQuestion}>Асуултаа энд бичнэ үү.</h3>

      <div className={styles.formSentence}>
        Бид таны и-мэйл рүү тодорхой хариу илгээх болно.
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
            placeholder={name}
            required
          />
          <input
            className={styles.input}
            name="Email"
            type="email"
            placeholder={email}
            required
          />
          <input
            className={styles.input}
            name="Phone number"
            type="tel"
            placeholder={phone}
          />
          <input
            className={styles.input}
            name="City"
            type="text"
            placeholder={city}
          />
        </div>
        <textarea
          className={styles.textArea}
          name="Message"
          placeholder={message}
          required
        />
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.formButton}>
            Зөвшөөрөх
          </button>
        </div>
      </form>
    </section>
  );
}
