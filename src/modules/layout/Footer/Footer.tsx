import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Footer.module.css";

import { CookiesAlert } from "@/components/CookiesAlert/CookiesAlert";
import { Links } from "@/constants/Links";
import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { BETA_LINK, CONTACT_LINK } from "./Footer.constants";

export const Footer = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer" });

  return (
    <>
      <div className={styles.mainContainer}>
        <nav className={styles.container}>
          <div className={styles.rightsContainer}>
            <span className={styles.particle} />
            <Typography variant="small-paragraph" opacity align="center">
              {t("rights1")}
              <Link href={Links.PersonalPage} className={styles.link}>
                {t("rights2")}
              </Link>
              {t("rights3")}
              {new Date().getFullYear()}
            </Typography>
          </div>

          <div className={styles.menu}>
            <Link href={Links.PrivacyPolicy}>
              <Button title={t("privacyPolicy")} variant="secondary" />
            </Link>
            <Link href={BETA_LINK} target="_blank" rel="noreferrer">
              <Button title={t("joinBeta")} variant="secondary" />
            </Link>
            <Link href={CONTACT_LINK}>
              <Button title={t("contact")} variant="secondary" />
            </Link>
          </div>
        </nav>
      </div>

      <CookiesAlert />
    </>
  );
};
