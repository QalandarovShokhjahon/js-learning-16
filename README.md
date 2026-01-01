# 🧠 JavaScript Day 16 — DOM Manipulation Methods

Bu darsda men JavaScript’da **DOM elementlarini yaratish va boshqarish** uchun ishlatiladigan asosiy methodlarni o‘rgandim.
Amaliy misollar orqali sahifaga yangi element qo‘shish, class’lar bilan ishlash va matnni dinamik o‘zgartirishni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

### createElement()

`createElement()` — JavaScript orqali **yangi HTML element yaratish** uchun ishlatiladi.

```
const div = document.createElement('div');
div.textContent = 'Salom DOM';
```

---

### textContent

`textContent` — element ichidagi **faqat matnni** o‘zgartiradi (HTML ishlamaydi).

```
const title = document.querySelector('h1');
title.textContent = 'Yangi sarlavha';
```

---

### innerHTML

`innerHTML` — element ichiga **HTML bilan birga** matn qo‘shadi.

```
const box = document.querySelector('.box');
box.innerHTML = '<strong>Qalin matn</strong>';
```

---

### classList

`classList` — element class’larini boshqarish uchun ishlatiladi.

```
const btn = document.querySelector('button');

btn.classList.add('active');
btn.classList.remove('active');
btn.classList.toggle('active');
```

---

### append()

`append()` — element oxiriga yangi element yoki matn qo‘shadi.

```
const list = document.querySelector('ul');
const li = document.createElement('li');

li.textContent = 'Yangi item';
list.append(li);
```

---

### prepend()

`prepend()` — element boshiga yangi element yoki matn qo‘shadi.

```
const list = document.querySelector('ul');
const li = document.createElement('li');

li.textContent = 'Birinchi item';
list.prepend(li);
```

---

## 💻 Kod namunasi / Example code

```
const container = document.querySelector('#container');

const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = '<h3>DOM Card</h3><p>createElement ishladi</p>';

container.append(card);
```

---

## 🧩 Qisqacha nazariya / Short Theory

* `createElement()` → yangi element yaratadi
* `textContent` → xavfsiz matn qo‘shadi
* `innerHTML` → HTML bilan ishlaydi
* `classList` → class’larni boshqaradi
* `append()` → oxiriga qo‘shadi
* `prepend()` → boshiga qo‘shadi

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da **DOM’ni dinamik boshqarish**ni o‘rganish.

Buning yordamida:

* Sahifaga yangi elementlar yaratish
* Dizayn va holatlarni class orqali boshqarish
* Interaktiv UI’lar tayyorlash
  mumkin bo‘ladi.

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 16-kun — DOM Manipulation
