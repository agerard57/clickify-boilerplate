import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ButtonVariants, TypographyVariants } from "@/theme";
import { Button, Typography } from "@mui/material";
import { FullLogo } from "@/core/assets";
import { useLanguage } from "@/language";

export const LandingPage: FC = () => {
  const { t } = useTranslation("LandingPage");
  const { language } = useLanguage();

  return (
    <div>
      <FullLogo />
      <Typography variant={TypographyVariants.TITLE}>{t("title")}</Typography>;
      <Button variant={ButtonVariants.TEXT}>{language}</Button>
    </div>
  );
};
