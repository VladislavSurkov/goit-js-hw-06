const categoriesEl = document.querySelectorAll(".item");
console.log('Number of categories:', categoriesEl.length);


const firstCategoryTitleEl = categoriesEl[0].firstElementChild
const quantityFirstCategoryEl = categoriesEl[0].lastElementChild.children

console.log('Category:', firstCategoryTitleEl.textContent);
console.log('Elements:', quantityFirstCategoryEl.length);

const secondCategoryTitleEl = categoriesEl[1].firstElementChild
const quantitySecondCategoryEl = categoriesEl[1].lastElementChild.children

console.log('Category:', secondCategoryTitleEl.textContent);
console.log('Elements:', quantitySecondCategoryEl.length);

const thirdCategoryTitleEl = categoriesEl[2].firstElementChild
const quantityThirdCategoryEl = categoriesEl[2].lastElementChild.children

console.log('Category:', thirdCategoryTitleEl.textContent);
console.log('Elements:', quantityThirdCategoryEl.length);
