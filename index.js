// Generar un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinaNumero() {
  // Obtener el valor introducido por el usuario
  const numeroUsuario = parseInt(document.getElementById("numeroInput").value);

  // Verificar si el número es correcto
  if (numeroUsuario === numeroSecreto) {
    document.getElementById("resultado").innerHTML = "¡Adivinaste! El número secreto era " + numeroSecreto + ".";
  } else {
    document.getElementById("resultado").innerHTML = "Intenta de nuevo. ¡Ese no era el número!";
  } 
}
function resetForm() {
 document.getElementById("resultado").textContent = "";
}