const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const listRef = document.querySelector('.gallery');

// const itemGallery = images.map(({ url, alt }) => {
//   const itemEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   imgEl.src = url;
//   imgEl.alt = alt;
//   itemEl.classList.add('item');
//   imgEl.width = "200";
//   imgEl.height = "200";
//   itemEl.appendChild(imgEl);
//   return itemEl;
// });

// // listRef.append(...itemGallery);
// // console.log(listRef);

const makeGalleryEL = (image) => {
  const { url, alt } = image;
  // return `<li class = "gallery-item"><img src = "${url}" alt = "${alt}" width = "150"height = "200"/> </li>`;
  return `<li><img src="${url}" alt="${alt}" width = "150" height = "150"/></li>`;
};
const listRef = document.querySelector('.gallery');
  const itemEl = images.map(makeGalleryEL).join("");
// console.log(makeGallerryList);
listRef.insertAdjacentHTML("beforeend", itemEl);
listRef.style.display = "flex";
listRef.style.gap = "15px";
listRef.style.listStyle = "none";




