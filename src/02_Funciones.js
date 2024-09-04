function obtenerInfo(name = 'Erick', apellido = 'Martinez'){
    const info = `${name} ${apellido}`

    return info;
}

const info = obtenerInfo('Mia', 'Lucio');

console.log(info);