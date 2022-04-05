import { menu, categories } from "./db.js";
const btnContainer = document.querySelector(".btn-container");
const section = document.querySelector(".section-center");

const createBtns = () => {
  categories.forEach((category) => {
    btnContainer.innerHTML += /*html*/ `
      <button 
        class="btn btn-outline-dark btn-item" 
        id="${category}" data-id="${category}"
        >
        ${category}
      </button>
    `;
  });
};

const initClickEvents = () => {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.id === "All"
        ? createMenuItems(menu)
        : createMenuItems(
            menu.filter((item) => item.category === btn.dataset.id)
          );
    });
  });
};

const createMenuItems = (menu) => {
  section.innerHTML = "";
  menu.forEach((item) => {
    section.innerHTML += /*html*/ `
      <div class="menu-item col-6" data-id="${item.id}">
        <div class="menu-items">
          <img
            src=${item.img}
            alt=${item.title}
            class="photo"
          />
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
          </div>
        </div>
      </div>
    `;
  });
};

// INITIALIZE THE APP
createBtns();
initClickEvents();
createMenuItems(menu);
