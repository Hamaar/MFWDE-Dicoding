class FavoriteCafeShowPresenter {
  constructor({ view, favoriteCafes }) {
    this._view = view;
    this._favoriteCafes = favoriteCafes;

    this._showFavoriteCafes();
  }

  async _showFavoriteCafes() {
    const Cafes = await this._favoriteCafes.getAllCafe();
    this._displayCafes(Cafes);
  }

  _displayCafes(Cafes) {
    this._view.showFavoriteCafes(Cafes);
  }
}

export default FavoriteCafeShowPresenter;
