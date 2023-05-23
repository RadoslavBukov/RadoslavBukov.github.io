const menuBtn = document.querySelector(".header__menu-button");
const menuItems = document.querySelector(".header__menu");
const menuItem = document.querySelectorAll(".menu__link");

menuBtn.addEventListener("click", () => {
    toggle();
});

// toggle on item click if open

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (menuBtn.classList.contains("open")) {
            toggle();
        }
    });
});

function toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}

// toggle drop-down menu