function corregir() {
    // respuestas correctas
    let respuestas = ["c", "a", "b", "c", "a"];

    // Inicializa el número de preguntas correctas a 0
    let numCorrectas = 0;

    // Recorre cada pregunta
    for (let i = 1; i <= 5; i++) {
        // Obtiene las respuestas del usuario para esta pregunta
        let respuestaUsuario = document.querySelector(
            'input[name="respuesta' + i + '"]:checked'
        );

        // Si el usuario no ha seleccionado una respuesta, muestra un mensaje de error
        if (!respuestaUsuario) {
            alert(
                "Por favor responda todas las preguntas antes de corregir el quiz."
            );
            return;
        }

        // Si la respuesta del usuario es correcta, incrementa el número de preguntas correctas
        if (respuestaUsuario.value === respuestas[i - 1]) {
            numCorrectas++;
            respuestaUsuario.parentNode.style.backgroundColor = '#4ee94940';
        } else {
            respuestaUsuario.parentNode.style.backgroundColor = '#e949497d';
        }
    }

    // Crea un mensaje con el número de preguntas correctas
    let mensaje = "Obtuvo " + numCorrectas + " de 5 preguntas correctas.";

    // Muestra el mensaje en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = mensaje;
}
