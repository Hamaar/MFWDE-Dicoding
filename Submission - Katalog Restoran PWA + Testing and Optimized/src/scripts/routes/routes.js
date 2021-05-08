import HomeCafe from "../views/pages/home-cafe";
import FavoriteCafe from "../views/pages/favorite-cafe";
import DetailCafe from "../views/pages/detail-cafe";

const routes = {
  "/": HomeCafe, // default page
  "/detail/:id": DetailCafe,
  "/favorite": FavoriteCafe,
};

export default routes;
