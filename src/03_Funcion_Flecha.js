const obtenerInfo = (name = 'Erick', apellido = 'Martinez') => `${name} ${apellido}`;
const sum = (a = 0, b = 0) => a + b;

const info = obtenerInfo('Mia', 'Lucio');

console.log(info);
console.log(sum(20,10));