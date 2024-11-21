import "./style/index.scss";
import { Suspense } from "react";
import { Routing } from "@/pages";

export const App = () => {
  return (
    <Suspense>
      <Routing />
    </Suspense>
  );
};
