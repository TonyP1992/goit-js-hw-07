const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Кількість категорій: ${categoriesList.length}`);


categoriesList.forEach(category => {
  
  const categoryTitle = category.querySelector('h2').textContent;
  
 
  const categoryItems = category.querySelectorAll('ul > li');
  
  
  console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${categoryItems.length}`);
});