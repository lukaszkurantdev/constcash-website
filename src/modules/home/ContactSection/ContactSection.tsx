import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./ContactSection.module.css";

import AppStoreIcon from "@/assets/icons/AppStore.svg";
import { Typography } from "@/components/Typography/Typography";
import { APP_STORE_LINK } from "../HeroSection/HeroSection.constants";

export const ContactSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "contact" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <Typography variant="h1" align="center">
          {t("title")}
        </Typography>
        <Typography className={styles.description} align="center">
          {t("description")}
        </Typography>

        <Link href={APP_STORE_LINK}>
          <AppStoreIcon className={styles.appStoreIcon} />
        </Link>
      </div>
    </div>
  );
};
