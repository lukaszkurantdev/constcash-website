import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import TextTransition from "react-text-transition";
import Image from "next/image";
import Link from "next/link";

import {
  AVATAR_SIZE,
  TITLE_TRANSITION_INTERVAL,
  TITLE_WORDS_KEYS,
  TRANSITION_SPRING_CONFIG,
} from "./HeroSection.constants";
import styles from "./HeroSection.module.css";

import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";

const HeroTitle = () => {
  const { t } = useTranslation("home", { keyPrefix: "hero" });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      TITLE_TRANSITION_INTERVAL
    );
    return () => clearTimeout(intervalId);
  }, []);

  const titleWords = TITLE_WORDS_KEYS.map((word) => t(`titleWord.${word}`));

  return (
    <TextTransition
      springConfig={TRANSITION_SPRING_CONFIG}
      direction="down"
      className="text-center xl:text-left"
    >
      {titleWords[index % titleWords.length]}
    </TextTransition>
  );
};

export const HeroSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "hero" });

  return (
    <div className={styles.container}>
      <div className={styles.availableContainer}>
        <div className={styles.availableIconContainer}></div>
        <Typography>{t("availableToWork1")}</Typography>
      </div>

      <div className={styles.insideContainer}>
        <div className={styles.textContainer}>
          <Typography variant="h1" fontSize={50}>
            {t("title")}
            <HeroTitle />
          </Typography>

          <Typography variant="h2" className={styles.header}>
            {t("header")}
          </Typography>
          <Typography>
            {t("description1")}
            <span className={styles.primaryText}>{t("description2")}</span>
            {t("description3")}
          </Typography>

          <Link href={""} aria-label="contact">
            <Button className={styles.button} title={t("button")} />
          </Link>
        </div>
        <div className={styles.column}>
          {/* <Image
            alt="avatar"
            src="/images/lk2.png"
            className={styles.image}
            priority
            {...AVATAR_SIZE}
          /> */}
        </div>
      </div>
    </div>
  );
};
