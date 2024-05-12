console.log("ESTOY HACIENDO PRUEBAS");


let body = document.body;

body.style.margin = "0";
body.style.padding = "0";
body.style.border = "0";


let main = document.createElement('main');
console.log(main);
document.body.insertAdjacentElement("afterbegin", main)

main.style.backgroundImage = "url(https://images.pexels.com/photos/14136568/pexels-photo-14136568.jpeg)";
main.style.backgroundSize = "cover"; // Para asegurarse de que la imagen se ajuste al tamaño del padre
main.style.backgroundPosition = "center";

let article = document.createElement('article');
console.log(article);
main.insertAdjacentElement("afterbegin", article);

article.style.backgroundColor= "none";
article.style.borderWidth ="2px";
article.style.borderColor = "none";
article.style.borderStyle = "solid";
article.style.height= "100vh";

let intro = document.createElement('h2') 
console.log(intro);
intro.textContent = "INTRO PRUEBA"
article.append(intro)

intro.style.fontFamily = ("Monserrat, sans-serif");
intro.style.fontSize = "40px";
intro.style.color = "white";
intro.style.textAlign = "center";
intro.style.marginTop = "15%"



let titulo = document.createElement('h1');
console.log(titulo);
titulo.textContent = "HELL DIVERS";
article.append(titulo);

titulo.style.fontFamily = ("Monserrat, sans-serif");
titulo.style.margin = "5%";
titulo.style.fontSize = "80px";
titulo.style.marginTop = "";
titulo.style.textAlign = "center";
titulo.style.marginTop = "-2%"
titulo.style.color = "white"




let boton1 = document.createElement("button")
console.log(boton1);
boton1.textContent = "TELL ME MORE";
article.append(boton1)

boton1.style.fontFamily = ("Monserrat, sans-serif");
boton1.style.borderRadius = ("4px")
boton1.style.color = "white";
boton1.style.backgroundColor ="rgba(1, 0, 0, 0.4)";
boton1.style.height = "6%"
boton1.style.width = "20%"
boton1.style.fontSize = "40px"
boton1.style.border = "none"
boton1.style.display = "block"
boton1.style.margin = "0 auto"
boton1.style.marginTop = "-5%"


boton1.addEventListener("mouseenter",() => {
    boton1.style.backgroundColor ="rgba(1, 0, 0, 0.6)";
})


boton1.addEventListener("mouseleave",() =>{
    boton1.style.backgroundColor ="rgba(1, 0, 0, 0.4)";
})




let logo = document.createElement('h4');
logo.textContent = "MurielEsneider";
logo.style.marginLeft = "auto";

let header = document.createElement('header');
console.log(header);
main.insertAdjacentElement("afterbegin", header);

header.style.display = "flex";
header.style.fontFamily = "Montserrat, sans-serif";
header.style.backgroundColor ="rgba(1, 0, 0, 0.4)";
header.style.height = "10vh";
header.style.borderWidth= "2px";
header.style.borderStyle= "solid";
header.style.borderBottom= "none";
header.style.fontWeight = "bold";


header.addEventListener("mouseenter", () => {
    header.style.cursor = "default"; 
});

header.append(logo);
logo.style.flex = "2";
logo.style.padding = "10px";
logo.style.marginLeft = "40px";

let ul = document.createElement('ul');
console.log("ul");
ul.style.justifyContent = "space-around"
ul.style.padding = "10px";
ul.style.marginRight = "40px";
let li1 = document.createElement('li');
console.log("li1");
let li2 = document.createElement('li');
console.log("li2");
let li3 = document.createElement('li');
console.log("li3");
let li4 = document.createElement('li');
console.log("li4");

a1 = document.createTextNode("SERVICIOS");
console.log(a1)
b2 = document.createTextNode("PORTFOLIO");
console.log(b2)
c3 = document.createTextNode("INFORMACIÓN");
console.log(c3)
d4 = document.createTextNode("CONTACTO");
console.log(d4)



li1.style.transition = "background-color 0.3s"; 
li1.addEventListener("mouseenter", () => {
    li1.style.backgroundColor = "whitesmoke";
    li1.style.borderRadius = "4px"
    li1.style.height = "20px"
    li1.style.width = "120px"
    li1.style.textAlign= "Center";
    li1.style.color = "black";

});
li1.addEventListener("mouseleave", () => {
    li1.style.backgroundColor = ""; 
    li1.style.color = "whitesmoke";
});

li2.style.transition = "background-color 0.3s"; 
li2.addEventListener("mouseenter", () => {
    li2.style.backgroundColor = "whitesmoke";
    li2.style.borderRadius = "4px"
    li2.style.height = "20px"
    li2.style.width = "120px"
    li2.style.textAlign= "Center";
    li2.style.color = "black";
});
li2.addEventListener("mouseleave", () => {
    li2.style.backgroundColor = ""; 
    li2.style.color = "whitesmoke";
});

li3.style.transition = "background-color 0.3s"; 
li3.addEventListener("mouseenter", () => {
    li3.style.backgroundColor = "whitesmoke";
    li3.style.borderRadius = "4px"
    li3.style.height = "20px"
    li3.style.width = "140px"
    li3.style.textAlign= "Center";
    li3.style.color = "black";
});
li3.addEventListener("mouseleave", () => {
    li3.style.backgroundColor = ""; 
    li3.style.color = "whitesmoke";
});

li4.style.transition = "background-color 0.3s"; 
li4.addEventListener("mouseenter", () => {
    li4.style.backgroundColor = "whitesmoke";
    li4.style.borderRadius = "4px"
    li4.style.height = "20px"
    li4.style.width = "120px"
    li4.style.textAlign= "Center";
    li4.style.color = "black";
});
li4.addEventListener("mouseleave", () => {
    li4.style.backgroundColor = ""; 
    li4.style.color = "whitesmoke";
});


li1.style.cursor = "pointer";
li2.style.cursor = "pointer";
li3.style.cursor = "pointer";
li4.style.cursor = "pointer";

li1.style.color = "white";
li2.style.color = "white";
li3.style.color = "white";
li4.style.color = "white";
li1.style.marginLeft = "20px"
li2.style.marginLeft = "20px"
li3.style.marginLeft = "20px"
li4.style.marginLeft = "20px"



ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

header.appendChild(ul);

li1.appendChild(a1);
li2.appendChild(b2);
li3.appendChild(c3);
li4.appendChild(d4);


ul.querySelectorAll("li").forEach(function(li) {
    li.style.display = "inline-block";
    li.style.marginRight = "10px"; 
});

header.style.display = "flex";
header.style.justifyContent = "flex-end";

let section2 = document.createElement("section");
console.log(section2);
main.insertAdjacentElement("afterend", section2);

section2.style.backgroundColor = "gray";
section2.style.height= "70vh";

let titulo2 = document.createElement('h1');
console.log(titulo2);
titulo2.textContent = "SERVICIOS";
section2.append(titulo2);

titulo2.style.fontFamily = ("Monserrat, sans-serif");
titulo2.style.fontSize = "40px";
titulo2.style.textAlign = "center";
titulo2.style.marginTop = "0%"
titulo2.style.paddingTop = "2%"
titulo2.style.color = "white"

let titulo3 = document.createElement('h1');
console.log(titulo3);
titulo3.textContent = "Subtitulo de ejemplo para contenido";
section2.append(titulo3);

titulo3.style.fontFamily = ("Monserrat, sans-serif");
titulo3.style.fontSize = "20px";
titulo3.style.textAlign = "center";
titulo3.style.marginTop = "-1%"
titulo3.style.color = "white"

let article5 = document.createElement("article");
console.log(article5);
section2.append(article5);

article5.style.width = "100%"
article5.style.height = "44vh"
article5.style.border = "1px solid black"
article5.style.display = "flex"
article5.style.justifyContent = "space-evenly"

let subsection1 = document.createElement("section")
console.log(subsection1);
article5.append(subsection1);

subsection1.style.margin = "1%"
subsection1.style.width = "20vw";
subsection1.style.height = "40vh"
subsection1.style.border = "1px solid black"


let subsection2 = document.createElement("section")
console.log(subsection2);
article5.append(subsection2);

subsection2.style.margin = "1%"
subsection2.style.width = "20vw";
subsection2.style.height = "40vh"
subsection2.style.border = "1px solid black"

let subsection3 = document.createElement("section")
console.log(subsection3);
article5.append(subsection3);

subsection3.style.margin = "1%"
subsection3.style.width = "20vw";
subsection3.style.height = "40vh"
subsection3.style.border = "1px solid black"


let section = document.createElement('section');
console.log(section);
section2.insertAdjacentElement("afterend", section);

section.style.height = "121vh"
section.style.backgroundColor ="rgba(1, 0, 0, 0.8)";
section.style.justifyContent = "center"


let article2 = document.createElement("article");
console.log(article2);
section.append(article2);

article2.style.height = "40vh"
article2.style.border = "1px solid red"
article2.style.width = "100vw"
article2.style.display = "flex"
article2.style.justifyContent = "center"



let img1 = document.createElement("button");
console.log(img1);
article2.append(img1);

img1.style.borderRadius = "100%"
img1.style.width = "14%";
img1.style.height = "30vh";
img1.style.backgroundColor = "gray";
img1.style.border = "2px solid white"
img1.style.marginTop= "1.5%"


let lista2 = document.createElement("ul");
console.log(lista2);
article2.append(lista2);

lista2.style.fontFamily = "Montserrat, sans-serif";
lista2.style.marginTop = "6%"
lista2.style.fontWeight = "800"
lista2.style.color = "white"
lista2.style.listStyleType = "none"

let ul11 = document.createElement("li");
console.log(ul11)
ul11.textContent = "NOMBRE"
lista2.append(ul11);

ul11.style.paddingBottom = "8%"

let ul12 = document.createElement("li");
console.log(ul12)
ul12.textContent = "DIRECTION"
lista2.append(ul12);

ul12.style.paddingBottom = "8%"


let ul13 = document.createElement("li");
console.log(ul13)
ul13.textContent = "ABOUT"
lista2.append(ul13);

let article3 = document.createElement("article");
console.log(article3);
section.append(article3);

article3.style.height = "40vh"
article3.style.border = "1px solid red"
article3.style.width = "100vw"
article3.style.display = "flex"
article3.style.justifyContent = "center"


let lista3 = document.createElement("ul");
console.log(lista3);
article3.append(lista3);

lista3.style.fontFamily = "Montserrat, sans-serif";
lista3.style.marginRight = "4%"
lista3.style.marginTop = "6%"
lista3.style.fontWeight = "800"
lista3.style.color = "white"
lista3.style.listStyleType = "none"


let ul21 = document.createElement("li");
console.log(ul21)
ul21.textContent = "NOMBRE"
lista3.append(ul21);

ul21.style.paddingBottom = "8%"

let ul22 = document.createElement("li");
console.log(ul22)
ul22.textContent = "DIRECTION"
lista3.append(ul22);

ul22.style.paddingBottom = "8%"


let ul23 = document.createElement("li");
console.log(ul23)
ul23.textContent = "ABOUT"
lista3.append(ul23);



let img2 = document.createElement("button");
console.log(img2);
article3.append(img2);

img2.style.borderRadius = "100%"
img2.style.width = "14%";
img2.style.height = "30vh";
img2.style.backgroundColor = "gray";
img2.style.border = "2px solid white"
img2.style.marginTop= "1.5%"

let article4 = document.createElement("article");
console.log(article4);
section.append(article4);

article4.style.height = "40vh"
article4.style.border = "1px solid red"
article4.style.width = "100vw"
article4.style.display = "flex"
article4.style.justifyContent = "center"


let img3 = document.createElement("button");
console.log(img3);
article4.append(img3);

img3.style.borderRadius = "100%"
img3.style.width = "14%";
img3.style.height = "30vh";
img3.style.backgroundColor = "gray";
img3.style.border = "2px solid white"
img3.style.marginTop= "1.5%"


let lista4 = document.createElement("ul");
console.log(lista4);
article4.append(lista4);

lista4.style.fontFamily = "Montserrat, sans-serif";
lista4.style.marginTop = "6%"
lista4.style.fontWeight = "800"
lista4.style.color = "white"
lista4.style.listStyleType = "none"

let ul31 = document.createElement("li");
console.log(ul31)
ul31.textContent = "NOMBRE"
lista4.append(ul31);

ul31.style.paddingBottom = "8%"

let ul32 = document.createElement("li");
console.log(ul32)
ul32.textContent = "DIRECTION"
lista4.append(ul32);

ul32.style.paddingBottom = "8%"


let ul33 = document.createElement("li");
console.log(ul33)
ul33.textContent = "ABOUT"
lista4.append(ul33);


let footer = document.createElement('footer');
console.log(footer);
main.insertAdjacentElement("afterend", footer);
