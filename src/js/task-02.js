const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');
const listElementElToAdd = [];
ingredients.forEach(ingredient => {
  const createLiEl = document.createElement('li');
  createLiEl.classList.add('item');
  createLiEl.textContent = ingredient;
  listElementElToAdd.push(createLiEl);
});

listEl.append(...listElementElToAdd);














  

