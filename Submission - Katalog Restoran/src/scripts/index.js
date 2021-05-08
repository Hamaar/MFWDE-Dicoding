import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

const menu = document.querySelector("#menu");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("navbar__toggleShow");
  event.stopPropagation();
});

const renderAllCafe = (cafe) => {
  const cafeListElement = document.querySelector("#post");
  cafeListElement.innerHTML = "";

  cafe.restaurants.forEach((cafe) => {
    cafeListElement.innerHTML += `
               <style>
.cafe-item {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
}
.image-text{
    position: relative;
  
  color: white;
}
.img-picture {
    width: 100%;
    height: 250px;
}

.cafe__kota{
    background: #2c3e50;
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;
}

.post-item__content {
    padding: 16px;
}

.cafe__title {
    font-weight: 500px;
    font-size: 16px;
    margin-top: 16px;
    transition: 0.3s opacity;
}
.cafe__desc{
margin-top: 16px;
    font-size: 12px;
    line-height: 1.5em;
}

       </style>
                 <article class="cafe-item">
              <div class="image-text">
              <img
                class="img-picture"
                src="${cafe.pictureId}"
                alt="${cafe.name}"
              />
              <div class="cafe__kota">Kota ${cafe.city}</div>
              </div>
                 
              <div class="post-item__content">
              <div class="text-cafe">
              <p>Rating : ${cafe.rating}</p>  
              <h3 class="cafe__title">${cafe.name}</h3>
              <p class="cafe__desc">${cafe.description}</p>
              </div>
              </div>
            
          </article>

            `;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderAllCafe(data);
});
