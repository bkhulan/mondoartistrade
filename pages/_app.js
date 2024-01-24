import "../styles/globals.css";
import { IntlProvider } from "react-intl";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import mn from "../intl/mn.json";
import en from "../intl/en.json";
import ru from "../intl/ru.json";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname, asPath, query } = useRouter();

  const messages = useMemo(() => {
    switch (locale) {
      case "mn":
        return mn;
      case "en":
        return en;
      case "ru":
        return ru;
      default:
        return mn;
    }
  }, [locale]);

  return (
    <IntlProvider
      messages={messages}
      locale={locale || "mn"}
      defaultLocale={defaultLocale}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

// create khulan branch