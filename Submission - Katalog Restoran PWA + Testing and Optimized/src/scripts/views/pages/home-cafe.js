import CafeSource from "../../data/cafe-source";
import { createCafeItemTemplate } from "../templates/template.creator";

const HomeCafe = {
  async render() {
    return `
      <section class="content">
            <div class="explore">
                <p class="explore__label">Explore Cafe</p>
            <div class="posts" id="post">
                
            </div>
        </section>
    `;
  },

  async afterRender() {
    const cafes = await CafeSource.listCafe();
    const cafesContainer = document.querySelector("#post");
    cafes.forEach((cafe) => {
      cafesContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default HomeCafe;
