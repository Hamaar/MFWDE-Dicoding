import CONFIG from "../../global/config";

const createCafeDetailTemplate = (cafe) =>
  `
  <p class="label_detail">Detail Cafe</p>
  <img crossorigin="anonymous" class="img-detail" src="${
    CONFIG.BASE_IMAGE_URL + cafe.pictureId
  }" alt="${cafe.name}" />
  <div class="cafe__info">
  <p class="cafe__title">${cafe.name}</p>
    <p class="judul-detail">Rating</p>
    <p>${cafe.rating}</p>
  <p class="info-detail">Informasi</p>
    <p class="judul-detail">Alamat Lengkap</p>
    <p>${cafe.address}</p>
    <p class="judul-detail">Kota</p>
    <p>${cafe.city}</p>
    <p class="judul-detail">Kategori Menu</p>
    ${cafe.categories
      .map((subCat) => {
        return `<li class="list-group-item">${subCat.name}</li>`;
      })
      .join("")}
    <p class="judul-detail">Menu Makanan</p>
    ${cafe.menus.foods
      .map((foods) => {
        return `<li class="list-group-item">${foods.name}</li>`;
      })
      .join("")}
    <p class="judul-detail">Menu Minuman</p>
    ${cafe.menus.drinks
      .map((foods) => {
        return `<li class="list-group-item">${foods.name}</li>`;
      })
      .join("")}
  </div>
  <div class="cafe__overview">
    <p class="judul-detail">Deskripsi</p>
    <p>${cafe.description}</p>
  </div>

  <div class="cafe__review">
    <p class="judul-detail">Customer Reviews</p>
    ${cafe.customerReviews
      .map((review) => {
        return `<div class="review_cust">
        <p>Nama : ${review.name}</p>
        <p>Ulasan : ${review.review}</p>
        <p>Tanggal : ${review.date}</p>
        </div>`;
      })
      .join("")}
  </div>
`;

const createCafeItemTemplate = (cafe) => `
  <article class="cafe-item">
              <div class="image-text">
              <img
              crossorigin="anonymous"
                class="img-picture"
                src="${CONFIG.BASE_IMAGE_URL + cafe.pictureId}"
                alt="${cafe.name}"
              />
              <div class="cafe__kota">Kota ${cafe.city}</div>
              </div>
                 
              <div class="post-item__content">
              <div class="text-cafe">
              <p>Rating : ${cafe.rating}</p>  
              <a class="cafe__title" href="${`/#/detail/${cafe.id}`}">${
  cafe.name
}</a>
              <p class="cafe__desc">${cafe.description}</p>
              </div>
              </div>
            
          </article>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCafeItemTemplate,
  createCafeDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
