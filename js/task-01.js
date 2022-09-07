// 'use strict';
const listItemsRef = document.querySelectorAll(".item");
 console.log('Number of categories:',listItemsRef.length);
listItemsRef.forEach(item => {
    const categoryTitle = item.querySelector("h2");
    const elemsTitle = item.querySelectorAll("li");
    console.log(` Category: ${categoryTitle.textContent} \nElements: ${elemsTitle.length}`)
});

