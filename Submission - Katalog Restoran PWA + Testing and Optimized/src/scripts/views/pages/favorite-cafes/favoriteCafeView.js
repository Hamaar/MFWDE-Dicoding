import { createCafeItemTemplate } from "../../templates/template.creator";

class FavoriteCafeView {
  getTemplate() {
    return `
       <section class="content">
            <div class="explore">
                <p class="explore__label">Favorite Cafe</p>
            <div class="posts" id="post">
                
            </div>
        </section>
   `;
  }

  showCafes(Cafes) {
    this.showFavoriteCafes(Cafes);
  }

  showFavoriteCafes(Cafes = []) {
    let html;
    if (Cafes.length) {
      html = Cafes.reduce(
        (carry, Cafe) => carry.concat(createCafeItemTemplate(Cafe)),
        ""
      );
    } else {
      html = this._getEmptyCafeTemplate();
    }

    document.getElementById("post").innerHTML = html;

    document.getElementById("post").dispatchEvent(new Event("post:updated"));
  }

  _getEmptyCafeTemplate() {
    return '<div class="Cafe-item__not__found Cafes__not__found">Tidak ada film untuk ditampilkan</div>';
  }
}

export default FavoriteCafeView;
