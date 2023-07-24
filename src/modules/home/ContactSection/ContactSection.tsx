import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./ContactSection.module.css";

import AppStoreIcon from "@/assets/icons/AppStore.svg";
import Particle3 from "@/assets/illustrations/Particle3.svg";
import Particle4 from "@/assets/illustrations/Particle4.svg";
import { Typography } from "@/components/Typography/Typography";
import { APP_STORE_LINK } from "../HeroSection/HeroSection.constants";

export const ContactSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "contact" });

  return (
    <div className={styles.container}>
      <Particle3 className={styles.particle3} />
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
      <Particle4 className={styles.particle4} />
    </div>
  );
};
