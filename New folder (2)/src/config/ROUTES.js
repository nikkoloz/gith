import AuthGuard from "../components/AuthGuard";
import GuestGuard from "../components/GuestGuard";
import { Dashboard, Favorites, SignIn, CreateAcc, Search, Preview } from "../page";

const ROUTES = {
  DASHBOARD: "/",
  SIGNIN: "signin",
  CREATEACC: "create-account",
  SEARCH: "search",
  FAVORITES: "favorites",
  PREVIEW: "preview/:name",
};

const ROUTES_CONFIG = [
  {
    path: ROUTES.SIGNIN,
    guard: GuestGuard,
    page: SignIn,
  },
  {
    path: ROUTES.CREATEACC,
    guard: GuestGuard,
    page: CreateAcc,
  },
  {
    path: ROUTES.DASHBOARD,
    guard: AuthGuard,
    page: Dashboard,
  },

  {
    path: ROUTES.SEARCH,
    guard: AuthGuard,
    page: Search,
  },
  {
    path: ROUTES.FAVORITES,
    guard: AuthGuard,
    page: Favorites,
  },
  {
    path: ROUTES.PREVIEW,
    guard: AuthGuard,
    page: Preview,
  },
];

export default ROUTES;
export { ROUTES_CONFIG };
