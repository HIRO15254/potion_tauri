import {MainPage} from "../pages/MainPage.tsx";
import {RouteProps} from "react-router-dom";
import {RouterTestPage} from "../pages/RouterTestPage.tsx";

export const routeData = [
  {
    path: "/",
    Component: MainPage
  },
  {
    path: "/router-test",
    Component: RouterTestPage
  }
] as const satisfies RouteProps[];

export type RoutePath = typeof routeData[number]["path"];
