import { useTranslation } from "next-i18next";

import Image from "next/image";
import styles from "./HeroSection.module.css";

import { Typography } from "@/components/Typography/Typography";
import AppStoreIcon from "@/assets/icons/AppStore.svg";
import { APP_STORE_LINK, LOGO_SIZE } from "./HeroSection.constants";
import Link from "next/link";

export const HeroSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "hero" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.column}>
          {/* <Image
            alt="avatar"
            src="/images/lk2.png"
            className={styles.image}
            priority
            {...AVATAR_SIZE}
          /> */}
        </div>

        <div className={styles.textContainer}>
          <Image
            alt="constcash-logo"
            src="/images/logos/constcash-dark.webp"
            className={styles.logo}
            {...LOGO_SIZE}
          />

          <Typography variant="h1" fontSize={38}>
            {t("title")}
          </Typography>

          <Typography variant="h2" className={styles.description}>
            {t("description")}
          </Typography>

          <Link href={APP_STORE_LINK}>
            <AppStoreIcon className={styles.appStoreIcon} />
          </Link>

          <Typography>{t("cost")}</Typography>
        </div>
      </div>
    </div>
  );
};
