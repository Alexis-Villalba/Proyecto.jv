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

// const empleado29395 = new Empleado('29395', "Alexis Villalba", "Operario calificado", 100000, "Empleado.jpg")

// const empleado32215 = new Empleado('32215', "Juan Gomez", "Ingresante", 93000, "Empleado.jpg")

// const empleado20018 = new Empleado('20018', "Carlos Abrate", "Oficial Múltiple superior", 150000, "Empleado.jpg")

// const empleado25849 = new Empleado('25849', "Ignacio Quinteros", "Empleado administrativo de 2°", 120000, "Empleado.jpg")

// const empleado21540 = new Empleado('21540', "Ramon Perez", "Oficial", 130000, "Empleado.jpg")

//array de objetos:
let empresa = []

const cargarEmpresa = async ()=>{
    const respuesta = await fetch("empleados.json")
    const info = await respuesta.json()
    for(let empleado of info){
        let empleadoNuevo = new Empleado(empleado.legajo, empleado.nombre, empleado.puesto, empleado.sueldo, empleado.imagen)
        empresa.push(empleadoNuevo)
    }
    localStorage.setItem("empresa", JSON.stringify(empresa))
}

// if (localStorage.getItem("empresa")) {
//     empresa = JSON.parse(localStorage.getItem("empresa"))
// } else {
//     empresa.push(empleado29395, empleado32215, empleado20018, empleado25849, empleado21540)
//     localStorage.setItem("empresa", JSON.stringify(empresa))
// }

if(localStorage.getItem("empresa")){
    
    for(let empleado of JSON.parse(localStorage.getItem("empresa"))){
        let empleadoNuevo = new Empleado(empleado.legajo, empleado.nombre, empleado.puesto, empleado.sueldo, empleado.imagen)
        empresa.push(empleadoNuevo)
    }
}else{
    console.log("Seteando stock de empleados")
    cargarEmpresa()    
}