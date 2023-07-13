// MOBILE NAV
const closeBtn = document.querySelector(".mobile-nav__close")
const openBtn = document.querySelector("#mobile-nav__open")
const mobileNav = document.querySelector(".mobile-nav__links")
const overlay = document.querySelector(".overlay-dark")

closeBtn.addEventListener("click", function () {
  mobileNav.style.transform = "scaleX(0)"
  openBtn.checked = false
})

overlay.addEventListener("click", function () {
  openBtn.checked = false
})

// RECENT

// ITEMS SCROLL
const carouselList = document.querySelector('.recent__items');
const carouselItems = document.querySelectorAll('.recent__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.recent__item');

  if (!isItem || newActive.classList.contains('recent__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('recent__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

// SET BACKGROUND IMAGE

const activeItem = document.querySelector(".recent__item[data-pos='0']")
const sectionRecent = document.querySelector(".section-recent")
sectionRecent.style.backgroundImage = `linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url("${activeItem.children[0].src}")`

const allItems = document.querySelectorAll(".recent__item")

allItems.forEach(item => {
  item.addEventListener("click", function () {
    if (this.getAttribute("data-pos") != 0) {
      sectionRecent.style.backgroundImage = `linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url("${this.children[0].src}")`
    }
  })
})