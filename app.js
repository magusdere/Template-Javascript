const template = document.querySelector("#template");
const ul = document.querySelector(".ul");
const fragment = document.createDocumentFragment();

const frutas = []
const fruta = prompt("Ingresa Frutas");
frutas.push(fruta)

while(confirm("Ingresa otra fruta")) {
    const fruta = prompt("Ingresa otra fruta");
    frutas.push(fruta);
}

frutas.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector("span").textContent = item;
    fragment.appendChild(clone);
})

ul.appendChild(fragment);