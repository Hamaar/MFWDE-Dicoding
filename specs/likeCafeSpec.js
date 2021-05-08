import FavoriteCafeIdb from "../src/scripts/data/favoritecafe-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Cafe", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the Cafe has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="like this Cafe"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the Cafe has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="unlike this Cafe"]')
    ).toBeFalsy();
  });

  it("should be able to like the Cafe", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({
      id: "rqdv5juczeskfw1e867",
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const Cafe = await FavoriteCafeIdb.getCafe("rqdv5juczeskfw1e867");

    expect(Cafe).toEqual({ id: "rqdv5juczeskfw1e867" });

    FavoriteCafeIdb.deleteCafe("rqdv5juczeskfw1e867");
  });

  it("should not add a Cafe again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({
      id: "rqdv5juczeskfw1e867",
    });

    // Tambahkan film dengan ID "rqdv5juczeskfw1e867" ke daftar film yang disukai
    await FavoriteCafeIdb.putCafe({ id: "rqdv5juczeskfw1e867" });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    // tidak ada film yang ganda
    expect(await FavoriteCafeIdb.getAllCafe()).toEqual([
      { id: "rqdv5juczeskfw1e867" },
    ]);

    FavoriteCafeIdb.deleteCafe("rqdv5juczeskfw1e867");
  });

  it("should not add a Cafe when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteCafeIdb.getAllCafe()).toEqual([]);
  });
});
