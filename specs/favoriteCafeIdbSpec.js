import { itActsAsFavoriteCafeModel } from "./contract/favoriteCafeContract";
import FavoriteCafeIdb from "../src/scripts/data/favoritecafe-idb";

describe("Favorite Cafe Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteCafeIdb.getAllCafe()).forEach(async (Cafe) => {
      await FavoriteCafeIdb.deleteCafe(Cafe.id);
    });
  });

  itActsAsFavoriteCafeModel(FavoriteCafeIdb);
});
