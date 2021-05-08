import UrlParser from "../../routes/url-parser";
import CafeSource from "../../data/cafe-source";
import { createCafeDetailTemplate } from "../templates/template.creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const DetailCafe = {
  async render() {
    return `
      <div id="detail-cafe" class="detail-cafe"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cafe = await CafeSource.detailCafe(url.id);
    const cafeContainer = document.querySelector("#detail-cafe");
    cafeContainer.innerHTML = createCafeDetailTemplate(cafe);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      cafe: {
        id: cafe.id,
        name: cafe.name,
        description: cafe.description,
        pictureId: cafe.pictureId,
        rating: cafe.rating,
        city: cafe.city,
      },
    });
  },
};

export default DetailCafe;
