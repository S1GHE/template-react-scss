import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { DocsPage } from "./docs";
import { Layout } from "@/shared/layout";
import { NavEnum } from "@/shared/enum/nav/nav-enum";

export const Routing = () => {
  const paths = [
    {
      path: NavEnum.HOME,
      element: <HomePage />,
    },
    {
      path: NavEnum.DOCS,
      element: <DocsPage />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {paths.map((el) => (
            <Route key={el.path} path={el.path} element={el.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
