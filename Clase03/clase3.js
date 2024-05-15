// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
console.log(document);

// Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
// - querySelector()
// - querySelectorAll()

// Obtenemos el titulo principal
const titulo = document.querySelector('h1');
// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo
console.log(titulo);

// nos traemos ahora un listado de nodos 👇
const itemsMenu = document.querySelectorAll('li');
console.log(itemsMenu);

// hacemos un selector más específico👇
const infoExtra = document.querySelector('.info .clima')
console.log(infoExtra);

/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
const articulos = document.querySelectorAll('article');

for (let i = 0; i < articulos.length; i++) {
    console.log(articulos[i]);
}

// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.
articulos.forEach( articulo =>{
    const titulo = articulo.querySelector('h2').innerText;
    console.log(titulo);
    // 💡 si quisieramos,acá podemos mutar los nodos, o cambiar algunas de sus propiedades
});


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview

// body
const body = document.querySelector('body');
console.log(body);

// header

const header = document.querySelector('header');
console.log(header);

const h1 = document.querySelector('header h1');
console.log(h1);

const nav = document.querySelector('nav');
console.log(nav);

const ul = document.querySelector('nav ul');
console.log(ul);

const li = document.querySelectorAll('ul li');
console.log(li);
console.log(li[0]);
console.log(li[1]);
console.log(li[2]);

const tema = document.querySelector('.tema');
console.log(tema);

const button = document.querySelector('.tema button');
console.log(button);

const info = document.querySelector('.info');
console.log(info);

const clima = document.querySelector('.clima');
console.log(clima);

const dolar = document.querySelector('.dolar');
console.log(dolar);

// main

const noticias = document.querySelector('.noticias');
console.log(noticias);

const articulo = document.querySelectorAll('article');
console.log(articulo);

articulo.forEach( articulo =>{
    const h2 = articulo.querySelector('h2').innerText;
    console.log(h2);

    const img = articulo.querySelector('img').src;
    console.log(img);

    const p = articulo.querySelector('p').innerText;
    console.log(p);
});

// footer

const footer = document.querySelector('footer');
console.log(footer);


