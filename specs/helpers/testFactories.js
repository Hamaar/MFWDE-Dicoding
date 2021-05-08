import LikeButtonPresenter from "../../src/scripts/utils/like-button-initiator";
import FavoriteCafeIdb from "../../src/scripts/data/favoritecafe-idb";

const createLikeButtonPresenterWithCafe = async (cafe) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteCafes: FavoriteCafeIdb,
    cafe,
  });
};

export { createLikeButtonPresenterWithCafe };
