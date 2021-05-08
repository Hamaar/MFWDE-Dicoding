import FavoriteCafeIdb from "../src/scripts/data/favoritecafe-idb";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking A Cafe", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteCafeIdb.putCafe({ id: "rqdv5juczeskfw1e867" });
  });

  afterEach(async () => {
    await FavoriteCafeIdb.deleteCafe("rqdv5juczeskfw1e867");
  });

  it("should display unlike widget when the Cafe has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="unlike this Cafe"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the Cafe has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({
      id: "rqdv5juczeskfw1e867",
    });

    expect(document.querySelector('[aria-label="like this Cafe"]')).toBeFalsy();
  });

  it("should be able to remove liked Cafe from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({
      id: "rqdv5juczeskfw1e867",
    });

    document
      .querySelector('[aria-label="unlike this Cafe"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteCafeIdb.getAllCafe()).toEqual([]);
  });

  it("should not throw error if the unliked Cafe is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({
      id: "rqdv5juczeskfw1e867",
    });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteCafeIdb.deleteCafe("rqdv5juczeskfw1e867");

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this Cafe"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteCafeIdb.getAllCafe()).toEqual([]);
  });
});
