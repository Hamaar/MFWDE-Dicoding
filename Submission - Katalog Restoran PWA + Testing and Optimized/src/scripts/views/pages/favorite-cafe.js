import FavoriteCafeIdb from "../../data/favoritecafe-idb";
import FavoriteCafeShowPresenter from "../../views/pages/favorite-cafes/favorite-cafe-show-presenter";
import FavoriteCafeView from "../../views/pages/favorite-cafes/favoriteCafeView";
import { createCafeItemTemplate } from "../templates/template.creator";

const view = new FavoriteCafeView();

const FavoriteCafe = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    //   const cafes = await FavoriteCafeIdb.getAllCafe();
    //   const cafesContainer = document.querySelector("#post");
    //   cafes.forEach((cafe) => {
    //     cafesContainer.innerHTML += createCafeItemTemplate(cafe);
    //   });
    new FavoriteCafeShowPresenter({ view, favoriteCafes: FavoriteCafeIdb });
  },
};

export default FavoriteCafe;
