import { lazy } from "react";

export const DocsPage = lazy(() =>
  import("./ui/index").then((m) => ({ default: m.DocsFC })),
);
