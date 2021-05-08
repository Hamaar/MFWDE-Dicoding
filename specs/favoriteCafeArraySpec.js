import { itActsAsFavoriteCafeModel } from "./contract/favoriteCafeContract";

let favoriteCafes = [];

const FavoriteCafeArray = {
  getCafe(id) {
    if (!id) {
      return;
    }

    return favoriteCafes.find((Cafe) => Cafe.id === id);
  },

  getAllCafe() {
    return favoriteCafes;
  },

  putCafe(Cafe) {
    if (!Cafe.hasOwnProperty("id")) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteCafes
    if (this.getCafe(Cafe.id)) {
      return;
    }

    favoriteCafes.push(Cafe);
  },

  deleteCafe(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteCafes = favoriteCafes.filter((Cafe) => Cafe.id !== id);
  },
};

describe("Favorite Cafe Array Contract Test Implementation", () => {
  afterEach(() => (favoriteCafes = []));

  itActsAsFavoriteCafeModel(FavoriteCafeArray);
});
