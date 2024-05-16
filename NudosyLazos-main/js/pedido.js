document.addEventListener("DOMContentLoaded", function () {
  var formularioPedido = document.getElementById("pedidoForm")
  var errorPedido = document.getElementById("errorPedido")

  formularioPedido.addEventListener("submit", function (event) {
    event.preventDefault()

    var nombrePedido = document.getElementById("nombrePedido").value.trim()
    var correoPedido = document.getElementById("correoPedido").value.trim()
    var descripcionPedido = document
      .getElementById("descripcionPedido")
      .value.trim()
    var mensajesPedido = []

    if (nombrePedido === "") {
      mensajesPedido.push("Ingresa tu nombre")
    }

    if (correoPedido === "") {
      mensajesPedido.push("Ingresa tu correo electrónico")
    }

    if (descripcionPedido === "") {
      mensajesPedido.push("Ingresa la descripción del pedido")
    }

    if (mensajesPedido.length > 0) {
      errorPedido.innerHTML = mensajesPedido.join(", ")
      errorPedido.style.display = "block"
    } else {
      errorPedido.innerHTML = ""
      formularioPedido.submit()
      // Aquí puedes agregar la lógica para enviar el formulario a través de un servicio de correo electrónico o una API de backend.
    }
  })
})
