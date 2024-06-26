/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre;
  let nacimiento;
  let ciudad;
  let interesJs;

  do {
    nombre = prompt("Ingresa tu nombre");
  } while (!nombre || nombre.length < 3);
  datosPersona.nombre = nombre.trim();

  do {
    nacimiento = parseInt(prompt("Ingresa el año en que naciste"));
  } while (isNaN(nacimiento) || nacimiento < 1900 || nacimiento > 2024);
  datosPersona.edad = 2024 - nacimiento;

  do {
    ciudad = prompt("Ingresa la ciudad donde vives");
  } while (!ciudad);
  datosPersona.ciudad = ciudad.trim();

  interesJs = confirm("Te interesa Javascript?");
  datosPersona.interesPorJs = interesJs ? "Si" : "No";

  profileBtn.removeEventListener("click", obtenerDatosDelUsuario);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerText = datosPersona.edad;
  document.getElementById("ciudad").innerText = datosPersona.ciudad;
  document.getElementById("javascript").innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let fila = document.getElementById("fila");

  for (let materia of listado) {
    let caja = document.createElement("div");
    caja.classList.add("caja");
    fila.appendChild(caja);

    caja.innerHTML = `
    <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
    <p class="lenguajes">Lenguajes: ${materia.lenguajes}</p>
    <p class="bimestre">Bimestre: ${materia.bimestre}</p>`;

    materiasBtn.removeEventListener(
      "click",
      recorrerListadoYRenderizarTarjetas
    );
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.getElementById("sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let sobreMi = document.getElementById("sobre-mi");

document.addEventListener("keypress", (event) => {
  if (event.key === "f" || event.key === "F")
    sobreMi.classList.remove("oculto");
});
