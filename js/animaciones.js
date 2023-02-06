//PROYECTO:

let empleados = document.getElementById("empleados")
let guardarEmpleadoBtn = document.getElementById("guardarEmpleadoBtn")
let verCatalogoBtn = document.getElementById("verCatalogoBtn")
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogoBtn")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")

//class constructora
class Empleado {
    constructor(legajo, nombre, puesto, sueldo, imagen) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.puesto = puesto;
        this.sueldo = sueldo;
        this.imagen = imagen;
    }
//métodos
mostrarInfoEmpleado() {
        console.log(`El empleado es ${this.nombre}, su puesto de empleo es ${this.puesto} y su sueldo es ${this.sueldo}`)
    }
}

const empleado29395 = new Empleado(29395, "Alexis Villalba", "Operario calificado", 100000, "Empleado.jpg")

const empleado32215 = new Empleado(32215, "Juan Gomez", "Ingresante", 93000, "Empleado.jpg")

const empleado20018 = new Empleado(20018, "Carlos Abrate", "Oficial Múltiple superior", 150000, "Empleado.jpg")

const empleado25849 = new Empleado(25849, "Ignacio Quinteros", "Empleado administrativo de 2°", 120000, "Empleado.jpg")

const empleado21540 = new Empleado(21540, "Ramon Perez", "Oficial", 130000, "Empleado.jpg")

//array de objetos:
let empresa = []
if (localStorage.getItem("empresa")) {
empresa = JSON.parse(localStorage.getItem("empresa"))
} else {
//entra por primera vez
console.log("Seteando catalogo de empresa")
empresa.push(empleado29395, empleado32215, empleado20018, empleado25849, empleado21540)
localStorage.setItem("empresas", JSON.stringify(empresa))
}

//FUNCTIONS PROYECTO:
function mostrarCatalogo(array) {
    empleados.innerHTML = ""
    for (let empleado of array) {
        let nuevoEmpleado = document.createElement("div")
        nuevoEmpleado.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")
        nuevoEmpleado.innerHTML = `
        <div id="${empleado.legajo}" class="card" style="width: 18rem;">
                <img class="card-img-top img-fluid" style="height: 200px;"src="img/Empleado.jpg" alt="${empleado.nombre}, puesto: ${empleado.puesto}">
                <div class="card-body">
                            <h4 class="card-title">${empleado.nombre}</h4>
                            <p>Puesto: ${empleado.puesto}</p>
                            <p>Legajo: ${empleado.legajo}</p>
                            <p class="">Sueldo: ${empleado.sueldo}</p>
                </div>
        </div>`
        empleados.appendChild(nuevoEmpleado)

        let btnAgregar = document.getElementById(`guardarEmpleadoBtn`)
        console.log(btnAgregar)
        btnAgregar.addEventListener("click", () => {
            console.log(empleado)
            console.log(`${empleado.nombre} fue agregado como nuevo empleado con el N°${empleado.legajo} de legajo con el puesto de ${empleado.puesto}. Su sueldo es ${empleado.sueldo}`)
        })
    }
}

function cargarEmpleado(array) {
    let inputLegajo = document.getElementById("legajoInput")
    let inputNombre = document.getElementById("nombreInput")
    let inputPuesto = document.getElementById("puestoInput")
    let inputSueldo = document.getElementById("sueldoInput")

    const empleadoNuevo = new Empleado(inputLegajo.value, inputNombre.value, inputPuesto.value, inputSueldo.value, "Empleado.jpg")
    console.log(empleadoNuevo)
    array.push(empleadoNuevo)
    console.log(array)
    localStorage.setItem("empresa", JSON.stringify(array))
    mostrarCatalogo(array)

    inputLegajo.value = ""
    inputNombre.value = ""
    inputPuesto.value = ""
    inputSueldo.value = ""
}

function buscarInfo(buscado, array) {
    let busquedaArray = array.filter(
        (empleado) => empleado.nombre.toLowerCase().includes(buscado.toLowerCase()) || empleado.legajo.toLowerCase().includes(buscado.toLowerCase())
    )
    if (busquedaArray.length == 0) {
        coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
        mostrarCatalogo(busquedaArray)
    } else {
        coincidencia.innerHTML = ""
        mostrarCatalogo(busquedaArray)

    }
}

//ordenamiento
function ordenarMenorMayor(array) {
    const menorMayor = [].concat(array)
    //ordena de menor a mayor
    menorMayor.sort((a, b) => a.legajo - b.legajo)
    mostrarCatalogo(menorMayor)
}

function ordenarMayorMenor(arr) {
    //ordenar de mayor a menor
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2) => {
        return param2.legajo - param1.legajo
    })
    mostrarCatalogo(mayorMenor)
}

function ordenarAlfabeticamenteNombre(array) {
    const ordenadoAlfabeticamente = [].concat(array)
    ordenadoAlfabeticamente.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0;
    })
    mostrarCatalogo(ordenadoAlfabeticamente)
}



//EVENTOS:
guardarEmpleadoBtn.addEventListener("click", () => {
    cargarEmpleado(empresa)
})

verCatalogoBtn.addEventListener("click", () => {mostrarCatalogo(empresa)})

ocultarCatalogoBtn.onclick = function () {
    empleados.innerHTML = ""
}

buscador.addEventListener("input", () => {
    buscarInfo(buscador.value, empresa)
})

selectOrden.addEventListener("change", () => {
    console.log(selectOrden.value)
    if (selectOrden.value == 1) {
        ordenarMayorMenor(empresa)
    } else if (selectOrden.value == 2) {
        ordenarMenorMayor(empresa)
    } else if (selectOrden.value == 3) {
        ordenarAlfabeticamenteNombre(empresa)
    } else {
        mostrarCatalogo(empresa)
    }
})