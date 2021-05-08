import FavoriteCafeIdb from "../../data/favoritecafe-idb";
import { createCafeItemTemplate } from "../templates/template.creator";

const FavoriteCafe = {
  async render() {
    return `
      <section class="content">
            <div class="explore">
                <p class="explore__label">Favorite Cafe</p>
            <div class="posts" id="post">
                
            </div>
        </section>
    `;
  },

  async afterRender() {
    const cafes = await FavoriteCafeIdb.getAllCafe();
    const cafesContainer = document.querySelector("#post");
    cafes.forEach((cafe) => {
      cafesContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default FavoriteCafe;
