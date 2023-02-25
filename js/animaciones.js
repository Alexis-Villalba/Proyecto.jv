let empleados = document.getElementById("empleados")
let guardarEmpleadoBtn = document.getElementById("guardarEmpleadoBtn")
let verCatalogoBtn = document.getElementById("verCatalogoBtn")
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogoBtn")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")
let formEmpleado = document.getElementById("formEmpleado")
let cargandoTexto = document.getElementById("cargandoTexto")
let cargandoRuedita = document.getElementById("cargandoRuedita")



//FUNCTIONS:

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
                            <button class= "btn btn-danger" id="botonEliminar${empleado.legajo}"><i >Eliminar empleado</i></button>
                </div>
        </div>`
    empleados.appendChild(nuevoEmpleado)

        document.getElementById(`botonEliminar${empleado.legajo}`).addEventListener("click", () => {

            let cardProducto = document.getElementById(empleado.legajo)
            cardProducto.remove()

            let productoEliminar = array.find((emp) => emp.legajo == empleado.legajo)

            let posicion = array.indexOf(productoEliminar)

            array.splice(posicion, 1)

            localStorage.setItem("empresa", JSON.stringify(array))

        })
    }

    
}



function cargarEmpleado(empleado) {

    let inputLegajo = document.getElementById("legajoInput")
    let inputNombre = document.getElementById("nombreInput")
    let inputPuesto = document.getElementById("puestoInput")
    let inputSueldo = document.getElementById("sueldoInput")

    const empleadoNuevo = new Empleado(inputLegajo.value, inputNombre.value, inputPuesto.value, inputSueldo.value, "Empleado.jpg")

    let empleadoAgregado = empresa.find((elem) => elem.legajo == empleadoNuevo.legajo)
    if (isNaN(empleadoNuevo.legajo)) {
        Swal.fire({
            icon: 'error',
            title: 'Dato incorrecto',
            text: 'El dato en legajo no es un número! Por favor ingrese un dato correcto.',
            background: "#0bbaff"
        })
    } else if (isNaN(empleadoNuevo.sueldo)) {
        Swal.fire({
            icon: 'error',
            title: 'Dato incorrecto',
            text: 'El dato en sueldo no es un número! Por favor ingrese un dato correcto y sin signos.',
            background: "#0bbaff"
        })
    } else if ((empleadoAgregado == undefined)) {
        Toastify({
            text: `Usted ha agregado a ${empleadoNuevo.nombre} con el legajo N°${empleadoNuevo.legajo} en su catalogo como nuevo empleado`,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #0bbaff, #ffffff)",
                color: "black"
            },
            duration: 3000
        }).showToast();
        empleado.push(empleadoNuevo)
        localStorage.setItem("empresa", JSON.stringify(empleado))
        mostrarCatalogo(empleado)
        formEmpleado.reset()
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Dato incorrecto',
            text: 'Este numero de legajo ya existe! Por favor ingrese un dato correcto.',
            background: "#0bbaff"
        })
    }
}

function buscarInfo(buscado, array) {
    console.log(buscado)

    let busquedaArray = array.filter(
        (empleado) => empleado.nombre.toLowerCase().includes(buscado.toLowerCase()) || empleado.legajo.toString().includes(buscado)
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
    menorMayor.sort((a, b) => a.legajo - b.legajo)
    mostrarCatalogo(menorMayor)
}

function ordenarMayorMenor(arr) {
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
//búsqueda



//EVENTOS:
guardarEmpleadoBtn.addEventListener("click", () => {
    cargarEmpleado(empresa)
})

setTimeout(() => {
    cargandoTexto.innerHTML = ""
    cargandoRuedita.remove()
    mostrarCatalogo(empresa)
}, 1000)

buscador.addEventListener("input", () => {
    buscarInfo(buscador.value.toLowerCase(), empresa)
    // console.log(buscador.value)
})

selectOrden.addEventListener("change", () => {
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