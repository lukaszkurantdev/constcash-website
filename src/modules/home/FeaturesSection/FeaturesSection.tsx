import { useTranslation } from "next-i18next";

import Image from "next/image";
import styles from "./FeaturesSection.module.css";

import { Typography } from "@/components/Typography/Typography";
import Link from "next/link";
import { Links } from "@/constants/Links";
import {
  ACCOUNTS_IMAGE_SIZE,
  ACCOUNTS_THEME_COLOR,
  BUDGETS_IMAGE_SIZE,
  BUDGETS_THEME_COLOR,
  FINANCIAL_GOALS_IMAGE_SIZE,
  FINANCIAL_GOALS_THEME_COLOR,
  RECURRING_PAYMENTS_IMAGE_SIZE,
  RECURRING_PAYMENTS_THEME_COLOR,
  TRANSACTIONS_IMAGE_SIZE,
  TRANSACTIONS_TEMPLATES_IMAGE_SIZE,
  TRANSACTIONS_TEMPLATES_THEME_COLOR,
  TRANSACTIONS_THEME_COLOR,
} from "./FeaturesSection.constants";
import classNames from "classnames";

export const FeaturesSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "features" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.column}>
          <div className={styles.card}>
            <Typography variant="h3" className={styles.aboutTitle}>
              {t("about.title")}
            </Typography>

            <Typography variant="h3">{t("about.header")}</Typography>

            <Typography className={styles.description}>
              {t("about.description")}
            </Typography>

            <Typography className={styles.aboutDescription}>
              {t("about.privacyDescription")}
            </Typography>

            <Typography className={styles.aboutDescription}>
              {t("about.moreAboutPrivacy")}
              <Link href={Links.PrivacyPolicy} className={styles.link}>
                {t("about.privacyPolicy")}
              </Link>
            </Typography>
          </div>

          <div className={classNames(styles.card, styles.transactionsCard)}>
            <Typography variant="h3" color={TRANSACTIONS_THEME_COLOR}>
              {t("transactions.title")}
            </Typography>

            <Typography className={styles.aboutDescription}>
              {t("transactions.description")}
            </Typography>

            <Image
              alt="transactions"
              src="/images/helpers/transactions.png"
              className={styles.transactionsImage}
              {...TRANSACTIONS_IMAGE_SIZE}
            />
          </div>

          <div className={styles.card}>
            <Typography variant="h3" color={BUDGETS_THEME_COLOR}>
              {t("budgets.title")}
            </Typography>

            <Typography className={styles.description}>
              {t("budgets.description")}
            </Typography>

            <Image
              alt="budgets"
              src="/images/helpers/budgets.png"
              className={styles.budgetsImage}
              {...BUDGETS_IMAGE_SIZE}
            />
          </div>

          <div
            className={classNames(styles.card, styles.transactionsCard)}
            style={{ backgroundColor: TRANSACTIONS_TEMPLATES_THEME_COLOR }}
          >
            <Typography variant="h3">
              {t("transactionTemplates.title")}
            </Typography>

            <Typography className={styles.aboutDescription}>
              {t("transactionTemplates.description")}
            </Typography>

            <Image
              alt="transactions-templates"
              src="/images/helpers/transactions-templates.png"
              className={styles.transactionsTemplatesImage}
              {...TRANSACTIONS_TEMPLATES_IMAGE_SIZE}
            />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <Typography variant="h3">{t("multiLanguage.title")}</Typography>

            <Typography className={styles.description}>
              {t("multiLanguage.description")}
            </Typography>

            <Typography fontSize={40} className={styles.description}>
              🇬🇧🇵🇱🇫🇷🇩🇪🇪🇸🇮🇹
            </Typography>
          </div>

          <div
            className={classNames(styles.card, styles.transactionsCard)}
            style={{ backgroundColor: ACCOUNTS_THEME_COLOR }}
          >
            <Image
              alt="accounts"
              src="/images/helpers/accounts.png"
              className={styles.accountsImage}
              {...ACCOUNTS_IMAGE_SIZE}
            />
            <Typography variant="h3">
              {t("accountsAndCategories.title")}
            </Typography>

            <Typography className={styles.aboutDescription}>
              {t("accountsAndCategories.accountsDescription")}
            </Typography>

            <Typography className={styles.aboutDescription}>
              {t("accountsAndCategories.categoriesDescription")}
            </Typography>
          </div>

          <div className={styles.card}>
            <Typography variant="h3" color={FINANCIAL_GOALS_THEME_COLOR}>
              {t("financialGoals.title")}
            </Typography>

            <Typography className={styles.description}>
              {t("financialGoals.description")}
            </Typography>

            <Image
              alt="financial-goals"
              src="/images/helpers/financial-goals.png"
              className={styles.financialGoalsImage}
              {...FINANCIAL_GOALS_IMAGE_SIZE}
            />
          </div>

          <div className={styles.card}>
            <Image
              alt="recurring-payments"
              src="/images/helpers/recurring-payments.png"
              className={styles.recurringPaymentsImage}
              {...RECURRING_PAYMENTS_IMAGE_SIZE}
            />

            <Typography variant="h3" color={RECURRING_PAYMENTS_THEME_COLOR}>
              {t("recurringPayments.title")}
            </Typography>

            <Typography className={styles.description}>
              {t("recurringPayments.description")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
