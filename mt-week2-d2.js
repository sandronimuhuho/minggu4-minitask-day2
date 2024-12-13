// nomor 1

// function kontentext() {
//     const textInput = document.querySelector("section textarea");
//     const paragraph = document.querySelector(".container > p");
//     paragraph.innerHTML = textInput.value;
// }

// nnomor 2
function kontentext() {
    const textInput = document.querySelector("section textarea");
    const paragraph = document.querySelector(".container > p");

    paragraph.textContent = textInput.value;

    // nomor 3
   const gantibg =  document.querySelector(".container");
//   
 gantibg.style.background="blue";

}

// nomor 4
function listNama() {
    const namaInput = document.querySelector(".container > div > input[type=number]");
    const listnem = namaInput.value;

    const ul = document.querySelector(".container > ul");
    const arrLi = [];
    for (let i = 0; i < listnem; i++) {
        const li = document.createElement("li");
        arrLi.push(li);
        ul.append(li);
        ul.appendChild(li)
    }
    ul.append(...arrLi);
}
function reset() {
   
    const ul = document.querySelector(".container > ul");

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    const li = document.createElement("li");
    li.textContent = "list Nama";
    ul.appendChild(li);
}

// nomor 5
function insert(options) {
    const text = "Tambahkan Text";
    const p = document.querySelector(".text");

    p.insertAdjacentText(options, text);
}


