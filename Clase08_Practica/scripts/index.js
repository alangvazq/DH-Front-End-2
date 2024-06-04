const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", (e) => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  e.preventDefault();
  // 1. Obtenemos el valor ingresado en el input de email
  let email = document.querySelector("#email-input").value;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    alert("Email no valido");
    return;
  }
  // 2. Obtenemos los datos ingresados en el input de password
  let passwordInput = document.getElementById("password-input").value;
  // 3. Obtenemos el valor del input radio
  let legalAgeYes = document.getElementById("age_yes").checked;
  let legalAgeNo = document.getElementById("age_no").checked;

  // 4. Obtenemos el valor del input checkbox
  let tycInput = document.querySelector("#tyc-input").checked;

  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"

  if (legalAgeNo) {
    alert("Debes ser mayor de edad para registrarte en el sitio");
    return;
  }

  // 6 Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  if (!tycInput) {
    alert("Debes aceptar los TyCs para registrarte en el sitio");
    return;
  }
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  let info = { email: "", password: "", legalAge: false, tycAccepted: false };

  info.email = email;
  info.password = passwordInput;
  info.legalAge = legalAgeYes;
  info.tycAccepted = tycInput;

  console.log(info);
});
