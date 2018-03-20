class Herramienta {
    constructor(nombre, descripcion, reparaciones, garantia) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.reparaciones = reparaciones;
        this.garantia = garantia;
    }

    getHerramienta() {
        return `Esta herramienta es un/una ${this.nombre}, descripción: ${this.descripcion} y ha sido reparado/a ${this.reparaciones} veces.`;
    }

    getHerramientaBuena() {
        return this.garantia > 5 ?
            `Usted tiene una herramienta de calidad extraordinaria` : `Le durará poco tiempo`;
    }
}

function funcionEjecutar() {
    //Así creamos la herramienta
    let martillo = new Herramienta("Martillo de Bola", "Ideal para mecánicos.", 0, 4);
    console.log(martillo);

    //Así recibimos el nombre, descripción y garantía de la herramienta y lo imprimimos por consola
    console.log(martillo.getHerramienta());

    //Asi vemos si la herramienta es buena o no.
    console.log(martillo.getHerramientaBuena());
}