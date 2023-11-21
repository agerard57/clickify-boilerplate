import { Pages } from "./Pages";
import { AuthStatuses } from "./AuthStatuses";

export type Routes = {
  [Page in Pages]: {
    name: Page;
    path: string;
    element: JSX.Element;
    sections?: string[];
    authentificationMode?: AuthStatuses;
  };
};
