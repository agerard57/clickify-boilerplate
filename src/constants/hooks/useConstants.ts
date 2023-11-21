import { useContext } from "react";
import { ConstantsContext } from "../contexts";

export const useConstants = () => {
  return useContext(ConstantsContext);
};
