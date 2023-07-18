const fechaElement = document.querySelector('#fecha');
const reloj = document.querySelector('#reloj');

const mecanismo = () => {
  let tiempo = new Date();
  let horas = tiempo.getHours() % 12;
  let minutos = tiempo.getMinutes();
  let segundos = tiempo.getSeconds();
  let periodo = tiempo.getHours() >= 12 ? 'PM' : 'AM';

  if (horas < 10) {
    horas = '0' + horas;
  }

  if (minutos < 10) {
    minutos = '0' + minutos;
  }

  if (segundos < 10) {
    segundos = '0' + segundos;
  }

  let cadenaFecha = obtenerFechaActual();
  let cadenaTxt = horas + ' : ' + minutos + ' : ' + segundos + ' ' + periodo;

  fechaElement.textContent = cadenaFecha;
  reloj.textContent = cadenaTxt;
};

const obtenerFechaActual = () => {
   let fecha = new Date();
   let opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   let fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
   let primeraLetraMayuscula = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
   return primeraLetraMayuscula;
 };
 
setInterval(mecanismo, 1000);