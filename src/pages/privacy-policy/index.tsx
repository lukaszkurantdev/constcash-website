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
        <title>{t("policyTitle")}</title>
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
            {t("policyTitle")}
          </Typography>

          <Typography opacity>{ReactHtmlParser(t("description"))}</Typography>

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
