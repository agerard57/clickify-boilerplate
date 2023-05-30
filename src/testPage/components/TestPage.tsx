import { Typography } from "@mui/material";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

export const TestPage: FC = () => {
  const { t } = useTranslation("TestPage");

  return <Typography fontWeight={700}> {t("title")}</Typography>;
};
