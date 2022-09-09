const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients');
const itemIngredients = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = option;
  return itemEl;
})
listRef.append(...itemIngredients)



