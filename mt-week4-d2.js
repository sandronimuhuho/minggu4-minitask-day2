// nomor 1

// const inner = document.getElementById("conten");
   // inner.innerHTML='Selamat Datang Di Kelas FGH';

   // nomor 2
const conten = document.getElementById("conten");
   conten.textContent= 'Selamat Datang Di Kelas FGH';
// nomor 3
  conten.style.color="white";
  conten.style.fontSize="30px";
  conten.style.display="flex";
  conten.style.justifyContent="center";

  // nomor 4

  const number4 = document.querySelector("section > ul");

  for (let i = 1; i<=10; i++) {
   const nomor = document.createElement('li');
   nomor.textContent= `nomor${i}`;
   number4.append(nomor);
  }

  //nomor 5
  const number5 = document.querySelector("section > div");

  for (let i = 1; i<=5; i++) {
   const nomor = document.createElement('li');
   nomor.textContent= `juara${i}`;
   number5.appendChild(nomor);
  }
   // nomor 6
   function resetMenu() {
      // node.removeChild(child)
      const ul = document.querySelector("section > div");
  
      while (ul.firstChild) {
          ul.removeChild(ul.firstChild);
      }
  const insert = document.querySelector("section > div");
   insert.insertAdjacentText("beforebegin", "Juara 1");
   insert.insertAdjacentText("afterbegin", "Juara 2");
   insert.insertAdjacentText("beforeend", "Juara 3");
   insert.insertAdjacentText("afterend", "Juara 4");


   }