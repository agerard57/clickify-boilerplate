import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { FullLogo } from "@/core/assets";
import { useLanguage } from "@/language";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { Button, Typography } from "@mui/material";

export const LandingPage: FC = () => {
  const { t } = useTranslation("LandingPage");
  const { language } = useLanguage();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, margin: 40 }}>
      <img src={FullLogo} style={{ width: 120 }} />
      <Typography variant={TypographyVariants.TITLE}>{t("title")}</Typography>
      <Button variant={ButtonVariants.TEXT}>{language}</Button>
    </div>
  );
};
