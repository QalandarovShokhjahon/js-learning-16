// 'use strict';

// // createElement → JavaScript-da yangi HTML elementi yaratish uchun ishlatiladigan metod. Bu metod yordamida JavaScript orqali dinamik ravishda element yaratib, uni sahifaga qo‘shish mumkin

// // classList.add metodi HTML elementiga yangi klass qo‘shish uchun ishlatiladi. Bu metod yordamida bir yoki bir nechta klasslarni dinamik ravishda qo‘shish mumkin.

// // append metodi JavaScript-da yangi element yoki matnni boshqa elementning oxiriga qo‘shish uchun ishlatiladi.

// // let yangiDiv = document.createElement("div")
// // yangiDiv.classList.add("heart")
// // yangiDiv.style.cssText = `
// //   background-color: lime;
// // `

// // let heartWrapper = document.querySelector(".heart-wrapper")
// // heartWrapper.append(yangiDiv)


// // prepend metodi yangi element yoki matnni boshqa elementning boshiga (ichidagi eng birinchi element sifatida) qo‘shish uchun ishlatiladi.
// // let yangiDiv = document.createElement("div")
// // yangiDiv.classList.add("heart")
// // yangiDiv.style.cssText = `
// //   background-color: lime;
// // `

// // let heartWrapper = document.querySelector(".heart-wrapper")
// // heartWrapper.prepend(yangiDiv)


// // remove metodi JavaScript-da HTML elementini butunlay olib tashlash uchun ishlatiladi. Bu metod yordamida sahifadagi istalgan elementni dinamik tarzda o‘chirish mumkin.
// // let circles = document.querySelectorAll(".circle")
// // circles[1].remove()


// // replaceWith tanlangan elementni o’chirib tashlab, uning joyiga ko’rsatilgan elementni joylashtiradi. Agar replaceWith() bu ko’rinishda ishlatsak remove() metodi kabi ishlaydi.
// // let circles = document.querySelectorAll(".circle")
// // let hearts = document.querySelectorAll(".heart")

// // hearts[1].replaceWith(circles[1])


// // textContent — JavaScript-da biror elementning faqat matn tarkibini olish yoki o‘zgartirish uchun ishlatiladigan xususiyatdir. U HTML teglari va ichki formatlashlarni e’tiborsiz qoldiradi va faqat matnni qaytaradi.
// // let headerElement = document.querySelector(".header")
// // let yangiDiv = document.createElement("div")
// // yangiDiv.style.cssText = `
// //   width: 300px;
// //   height: 100px;
// //   background-color: lime;
// //   margin: 10px auto;
// //   padding: 30px;
// //   font-size: 46px;
// // `
// // headerElement.append(yangiDiv)

// // yangiDiv.textContent = "Hello DOM"


// // innerHTML – JavaScript-da biror HTML elementining ichki tarkibini olish yoki o‘zgartirish uchun ishlatiladigan xususiyatdir. U matn bilan birga HTML teglari ni ham o‘qiydi va o‘zgartira oladi.
// // let headerElement = document.querySelector(".header")
// // let yangiDiv = document.createElement("div")
// // yangiDiv.style.cssText = `
// //   width: 300px;
// //   background-color: lime;
// //   margin: 10px auto;
// //   padding: 30px;
// // `
// // headerElement.append(yangiDiv)

// yangiDiv.innerHTML = `
//   <h1>Hello DOM</h1>
//   <p>Lorem ipsum dolor sit amet.</p>
// `


// // insertAdjacentHTML – JavaScript-da element ichiga yoki tashqarisiga HTML kod qo‘shish uchun ishlatiladigan metod. U innerHTML ga o‘xshash, lekin tejamkorroq va xavfsizroq ishlaydi, chunki avtomatik ravishda DOM daraxtini o‘zgartiradi va qo‘shilgan HTML kodni qayta ishlaydi.


// // beforebegin – Elementdan oldin HTML qo‘shish

// // let boxElement = document.querySelector("#box")

// // boxElement.insertAdjacentHTML("beforebegin", "<p>Men box ichida, oxirdaman</p>")


// // afterbegin – Element ichiga, boshiga qo‘shish
// // let boxElement = document.querySelector("#box")

// // boxElement.insertAdjacentHTML("afterbegin", "<p>Men box ichida, oxirdaman</p>")


// // beforeend – Element ichiga, oxiriga qo‘shish
// // let boxElement = document.querySelector("#box")

// // boxElement.insertAdjacentHTML("beforeend", "<p>Men box ichida, oxirdaman</p>")

// // afterend – Elementdan keyin HTML qo‘shish
// let boxElement = document.querySelector("#box")

// boxElement.insertAdjacentHTML("afterend", "<p>Men box ichida, oxirdaman</p>")


// // <script defer src="script.js"></script> → har doim javascriptni oxirida tekshiradi.



// // mousemove → mishka qimirlagandagi kordinatalari.
// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("mousemove", (event) => {
//   console.log(event.offsetX);
//   console.log(event.offsetY);
// });

// // <aside>
// // 💡 `pointer-events: none;` → linkning barcha hususiyatini yoq qilib beradi. masalan: bosilmaydi va miska qo’lcha ko’rinishi yoqoladi.

// // `pointer-events: auto;` → difolt qiymati.

// // </aside>


 
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");

  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.append(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});