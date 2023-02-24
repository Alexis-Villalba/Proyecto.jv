//constructora
class Empleado {
    constructor(legajo, nombre, puesto, sueldo, imagen) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.puesto = puesto;
        this.sueldo = sueldo;
        this.imagen = imagen;
    }

}

//array 
let empresa = []

const cargarEmpresa = async () => {
    const respuesta = await fetch("empleados.json")
    const info = await respuesta.json()
    for (let empleado of info) {
        let empleadoNuevo = new Empleado(empleado.legajo, empleado.nombre, empleado.puesto, empleado.sueldo, empleado.imagen)
        empresa.push(empleadoNuevo)
    }
    localStorage.setItem("empresa", JSON.stringify(empresa))
}

if (localStorage.getItem("empresa")) {

    for (let empleado of JSON.parse(localStorage.getItem("empresa"))) {
        let empleadoNuevo = new Empleado(empleado.legajo, empleado.nombre, empleado.puesto, empleado.sueldo, empleado.imagen)
        empresa.push(empleadoNuevo)
    }
} else {
    cargarEmpresa()
}