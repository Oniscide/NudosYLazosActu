document.addEventListener("DOMContentLoaded", function () {
  var formularioContacto = document.getElementById("contactoForm")
  var errorContacto = document.getElementById("errorContacto")

  formularioContacto.addEventListener("submit", function (event) {
    event.preventDefault()

    var nombreContacto = document.getElementById("nombreContacto").value.trim()
    var correoContacto = document.getElementById("correoContacto").value.trim()
    var mensajeContacto = document
      .getElementById("mensajeContacto")
      .value.trim()
    var mensajesContacto = []

    if (nombreContacto === "") {
      mensajesContacto.push("Ingresa tu nombre")
    }

    if (correoContacto === "") {
      mensajesContacto.push("Ingresa tu correo electrónico")
    }

    if (mensajeContacto === "") {
      mensajesContacto.push("Ingresa tu mensaje")
    }

    if (mensajesContacto.length > 0) {
      errorContacto.innerHTML = mensajesContacto.join(", ")
      errorContacto.style.display = "block"
    } else {
      errorContacto.innerHTML = ""
      formularioContacto.submit()
      // Aquí puedes agregar la lógica para enviar el formulario a través de un servicio de correo electrónico o una API de backend.
    }
  })
})
