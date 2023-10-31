import Head from "next/head";
import { useTranslation } from "next-i18next";
import ReactHtmlParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import Particle1 from "@/assets/illustrations/Particle1.svg";
import { Typography } from "@/components/Typography/Typography";
import type { ServerSideProps } from "@/types/ServerSideProps";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";
import { LOGO_SIZE } from "@/modules/home/HeroSection/HeroSection.constants";
import { Links } from "@/constants/Links";

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacyPolicy");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{t("termsTitle")}</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.column}>
          <Link href={Links.About}>
            <Image
              alt="constcash-logo"
              src="/images/logos/constcash-dark.webp"
              className={styles.logo}
              {...LOGO_SIZE}
            />
          </Link>

          <Typography
            variant="h1"
            fontSize={50}
            weight="bold"
            className={styles.title}
          >
            {t("termsTitle")}
          </Typography>

          <Typography opacity>{ReactHtmlParser(t("rules.p1"))}</Typography>
          <Typography variant="h2" weight="bold">
            {t("rules.h2")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p2"))}</Typography>
          <Typography variant="h3" weight="bold">
            {t("rules.h3")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p3"))}</Typography>

          <Typography variant="h3" weight="bold">
            {t("rules.h4")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p4"))}</Typography>

          <Typography variant="h3">{t("rules.h5")}</Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p5"))}</Typography>

          <Typography variant="h2" weight="bold">
            {t("rules.h6")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p6"))}</Typography>

          <Typography variant="h2" weight="bold">
            {t("rules.h7")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p7"))}</Typography>

          <Typography variant="h2" weight="bold">
            {t("rules.h8")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p8"))}</Typography>

          <Typography variant="h2" weight="bold">
            {t("rules.h9")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p9"))}</Typography>

          <Typography variant="h2" weight="bold">
            {t("rules.h10")}
          </Typography>
          <Typography opacity>{ReactHtmlParser(t("rules.p10"))}</Typography>

          <Particle1 />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, [
    "privacyPolicy",
  ]);

  return {
    props: {
      ...translations,
    },
  };
}
