import { useTranslation } from "next-i18next";

import Image from "next/image";
import styles from "./FAQSection.module.css";

import { Typography } from "@/components/Typography/Typography";
import AppStoreIcon from "@/assets/icons/AppStore.svg";
import Link from "next/link";

export const FAQSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "faq" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <Typography variant="h2" weight="bold" fontSize={24}>
          {t("title")}
        </Typography>

        <div className={styles.questionsContainer}>
          <div className={styles.questionContainer}>
            <Typography variant="h3">{t("question1.title")}</Typography>
            <Typography className={styles.description}>
              {t("question1.description")}
            </Typography>
          </div>
          <div className={styles.questionContainer}>
            <Typography variant="h3">{t("question2.title")}</Typography>
            <Typography className={styles.description}>
              {t("question2.description")}
            </Typography>
          </div>
          <div className={styles.questionContainer}>
            <Typography variant="h3">{t("question3.title")}</Typography>
            <Typography className={styles.description}>
              {t("question3.description")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
