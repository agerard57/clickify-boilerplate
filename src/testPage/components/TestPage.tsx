import { ConstantsContext } from "@/constants";
import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";
import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";

export const TestPage: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation("TestPage");
  const appConstants = useContext(ConstantsContext);

  const Text = styled(Typography)`
    color: ${theme.app.testPage.textColor};
  `;

  return <Text>{t(appConstants.testPage.title)}</Text>;
};
