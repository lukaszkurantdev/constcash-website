import Head from "next/head";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import ReactHtmlParser from "html-react-parser";
import Image from "next/image";

import styles from "./styles.module.css";

import { Typography } from "@/components/Typography/Typography";
import type { ServerSideProps } from "@/types/ServerSideProps";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";
import { LOGO_SIZE } from "@/modules/home/HeroSection/HeroSection.constants";

export default function Cookies() {
  const { t } = useTranslation("cookies");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.column}>
          <Image
            alt="constcash-logo"
            src="/images/logos/constcash-dark.webp"
            className={styles.logo}
            {...LOGO_SIZE}
          />

          <Typography
            variant="h1"
            fontSize={50}
            weight="bold"
            className={styles.title}
          >
            {t("title")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("description"))}</Typography>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, ["cookies"]);

  return {
    props: {
      ...translations,
    },
  };
}
