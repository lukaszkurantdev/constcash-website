import Head from "next/head";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import { HeroSection } from "@/modules/home/HeroSection/HeroSection";
import { ContactSection } from "@/modules/home/ContactSection/ContactSection";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";
import type { ServerSideProps } from "@/types/ServerSideProps";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <div className={styles.home}>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>
      <HeroSection />

      <ContactSection />
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, [
    "home",
    "blog",
  ]);

  return {
    props: {
      ...translations,
    },
  };
}
