

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
    inventario: [
        {
            id: 1,
            color: 'Rojo',
            cantiad: 5,
            precio: 1000000
        },
        {
            id: 1,
            color: 'Blanco',
            cantiad: 2,
            precio: 1600000
        },
        {
            id: 1,
            color: 'Amarillo',
            cantiad: 6,
            precio: 1000000
        },
    ],
    totalInventario : function () {
        let total = 0;
        this.inventario.forEach(inventario => {
            total = total + inventario.precio*inventario.precio;
        });
        return total;
    },
    costo: 1000000,
    saludo: function () {
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}

//carro.nombre = 'Centenario';
carro.costo = 2500000;
console.log(carro);

const salu = carro.saludo();
console.log(salu);
console.log(carro.totalInventario());