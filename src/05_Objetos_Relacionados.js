const carro = {
    id: 1,
    nombre: 'Lamborghini',
    date: new Date(),
    marca:{
        id: 1,
        nombre: 'Lamborghini',
        Ubicacion: 'Inglaterra',
        age: 100
    },
    costo: 1000000,
    saludo: function () {
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}

//carro.nombre = 'Centenario';
carro.coste = 2500000;
console.log(carro);

const salu = carro.saludo();
console.log(salu);