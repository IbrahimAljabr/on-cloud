import { lazy } from "react";

/**
 * Objects of routes to determine correct component to load based on URL.
 *
 * @property {boolean} adminLayout Wrap the page with admin layout.
 * @property {JSX.Element} component React component to render.
 * @property {bool} disableFooter Whether footer disabled.
 * @property {bool} disableNavBar Whether navbar disabled.
 * @property {boolean} exact When true, will only match if the path matches the location.pathname exactly.
 * @property {string} label A name used for react `key` prop.
 * @property {string} path Any valid URL path.
 */
const routes = [
  {
    component: lazy(() => import("./components/shared/MainLayout/MainLayout")),
    exact: true,
    label: "home",
    path: "/",
    title: "Home"
  },
  {
    component: lazy(() => import("./pages/Login")),
    label: "login",
    path: "/login",
    title: "Login"
  },
  {
    component: lazy(() => import("./pages/SignUp/SignUp")),
    label: "sign-up",
    path: "/sign-up",
    title: "SignUp"
  },
  {
    component: lazy(() => import("../src/components/Items/AddItems")),
    label: "Add new item",
    path: "/items/add",
    title: "Add new item"
  },
  {
    component: lazy(() => import("../src/components/Items/AddItems")),
    label: "Edit item",
    path: "/items/add/:id",
    title: "Edit item"
  },
  {
    component: lazy(() => import("../src/components/Items/Details")),
    label: "Add new item",
    path: "/details/:id",
    title: "Add new item"
  },
  {
    component: lazy(() => import("../src/components/Items/Items")),
    label: "All items",
    path: "/items",
    title: "Items"
  },
  {
    component: lazy(() => import("./pages/NotFound")),
    label: "not-found",
    path: "*",
    title: "Not Found"
  },

];

export default routes;
