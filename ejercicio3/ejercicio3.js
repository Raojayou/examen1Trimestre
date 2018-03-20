let herramienta1 = {
    nombre: "Martillo",
    descripcion: "Para liarla parda con las paredes",
    reparaciones: 0,
    garantia: 5
};
let herramienta2 = {
    nombre: "Cepillo",
    descripcion: "Para barrer el suelo",
    reparaciones: 14,
    garantia: 5
};
let herramienta3 = {
    nombre: "Cuchillo",
    descripcion: "Para cortar carne",
    reparaciones: 2,
    garantia: 10
};
let herramienta4 = {
    nombre: "Alicates Universales",
    descripcion: "Sirven para cortar cables",
    reparaciones: 6,
    garantia: 5
};
let herramienta5 = {
    nombre: "Exprimidor",
    descripcion: "Para diseñado para poder extraer el jugo de los cítricos, naranjas, limones, pomelos.",
    reparaciones: 1,
    garantia: 8
};

let listadoHerramientas = [
    herramienta1,
    herramienta2,
    herramienta3,
    herramienta4,
    herramienta5,
]

function funcionEjecutar() {
    let nombre = document.getElementById("nombre").value;

    listadoHerramientas.filter(x => x.garantia < 10)
        .sort((x, y) => -x.nombre.localeCompare(y.descripcion))
        .filter(x => x.nombre.localeCompare(nombre) !== 0)
        .map(x => x.nombre.toUpperCase() + "-" + x.descripcion.toUpperCase())
        .forEach(x => console.log(x));

}
