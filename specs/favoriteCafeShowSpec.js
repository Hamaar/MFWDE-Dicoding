import FavoriteCafeView from "../src/scripts/views/pages/favorite-cafes/favoriteCafeView";
import FavoriteCafeShowPresenter from "../src/scripts/views/pages/favorite-cafes/favorite-cafe-show-presenter";
import FavoriteCafeIdb from "../src/scripts/data/favoritecafe-idb";

describe("Showing all favorite Cafes", () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteCafeView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe("When no Cafes have been liked", () => {
    it("should ask for the favorite Cafes", () => {
      const favoriteCafes = spyOnAllFunctions(FavoriteCafeIdb);

      new FavoriteCafeShowPresenter({
        view,
        favoriteCafes,
      });

      expect(favoriteCafes.getAllCafe).toHaveBeenCalledTimes(1);
    });

    it("should show the information that no Cafes have been liked", (done) => {
      document.getElementById("post").addEventListener("post:updated", () => {
        expect(
          document.querySelectorAll(".Cafe-item__not__found").length
        ).toEqual(1);

        done();
      });

      const favoriteCafes = spyOnAllFunctions(FavoriteCafeIdb);
      favoriteCafes.getAllCafe.and.returnValues([]);

      new FavoriteCafeShowPresenter({
        view,
        favoriteCafes,
      });
    });
  });

  describe("When favorite Cafes exist", () => {
    it("should show the Cafes", (done) => {
      document.getElementById("post").addEventListener("post:updated", () => {
        expect(document.querySelectorAll(".cafe-item").length).toEqual(2);
        done();
      });

      const favoriteCafes = spyOnAllFunctions(FavoriteCafeIdb);
      favoriteCafes.getAllCafe.and.returnValues([
        {
          id: "rqdv5juczeskfw1e867",
          title: "Melting Pot",
          rating: 4.2,
          city: "Medan",
        },
        {
          id: "s1knt6za9kkfw1e867",
          title: "Kafe Kita",
          rating: 4,
          city: "Gorontalo",
        },
      ]);

      new FavoriteCafeShowPresenter({
        view,
        favoriteCafes,
      });
    });
  });
});
