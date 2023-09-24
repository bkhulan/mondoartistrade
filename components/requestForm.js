import Image from "next/image";
import Script from "next/script";

import styles from "../components/requestForm.module.css";

export default function RequestForm() {
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
            placeholder="Name*"
            required
          />
          <input
            className={styles.input}
            name="Email"
            type="email"
            placeholder="Email*"
            required
          />
          <input
            className={styles.input}
            name="Phone number"
            type="tel"
            placeholder="Phone number*"
          />
          <input
            className={styles.input}
            name="City"
            type="text"
            placeholder="City*"
          />
        </div>
        <textarea
          className={styles.textArea}
          name="Message"
          placeholder="Message*"
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
