window.addEventListener('load', () => {
   const reloj = document.querySelector('#reloj');
 
   const mecanismo = () => {
    
     let tiempo = new Date();
     let horas = (tiempo.getHours() % 12);
     let minutos = tiempo.getMinutes();
     let segundos = tiempo.getSeconds();
 
     if (horas.length < 2) {
       horas = '0' + horas;
     }
 
     if (minutos.length < 2) {
       minutos = '0' + minutos;
     }
 
     if (segundos.length < 2) {
       segundos = '0' + segundos;
     }
 
     let cadenaTxt = tiempo.toLocaleTimeString([], { hour : '2-digit', minute : '2-digit', second : '2-digit', hour12: true })
     .toUpperCase()
     .replace('AM', 'AM ')
     .replace('PM', 'PM ')
     .replace(/:/g, ' : ');
    
     reloj.textContent = cadenaTxt;
   };
 
   setInterval(mecanismo, 1000);
 });
 