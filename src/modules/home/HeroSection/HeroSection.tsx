import { useTranslation } from "next-i18next";
import Image from "next/image";

import styles from "./HeroSection.module.css";

import Particle1 from "@/assets/illustrations/Particle1.svg";
import Particle2 from "@/assets/illustrations/Particle2.svg";
import { Typography } from "@/components/Typography/Typography";
import AppStoreIcon from "@/assets/icons/AppStore.svg";
import {
  APP_STORE_LINK,
  LOGO_SIZE,
  MAIN_RENDER_SIZE,
} from "./HeroSection.constants";
import Link from "next/link";

export const HeroSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "hero" });

  return (
    <div className={styles.container}>
      <Particle1 className={styles.particle1} />
      <Particle2 className={styles.particle2} />

      <div className={styles.insideContainer}>
        <div className={styles.column}>
          <Image
            alt="ConstCash app"
            src="/images/helpers/main.webp"
            priority
            {...MAIN_RENDER_SIZE}
            className={styles.image}
          />
        </div>

        <div className={styles.textContainer}>
          <Image
            alt="constcash-logo"
            src="/images/logos/constcash-dark.webp"
            className={styles.logo}
            {...LOGO_SIZE}
          />

          <Typography variant="h1" weight="bold" fontSize={38}>
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
