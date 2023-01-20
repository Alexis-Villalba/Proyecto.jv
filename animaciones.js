class empleado {
    constructor(legajo, nombre, puesto, sueldo) {
        this.legajo = legajo,
            this.nombre = nombre,
            this.puesto = puesto,
            this.sueldo = sueldo
    }
    mostrarInfoEmpleado() {
        console.log(`El empleado es ${this.nombre}, su puesto de empleo es ${this.puesto} y su sueldo es ${this.sueldo}`)
    }
}

const empleado29395 = new empleado(29395, "Alexis Villalba", "Operario calificado", 100000)

const empleado32215 = new empleado(32215, "Juan Gomez", "Ingresante", 93000)

const empleado20018 = new empleado(20018, "Carlos Abrate", "Oficial Múltiple superior", 150000)

const empleado25849 = new empleado(25849, "Ignacio Quinteros", "Empleado administrativo de 2°", 120000)

const empleado21540 = new empleado(21540, "Ramon Perez", "Oficial", 130000)


const empleados = [empleado29395, empleado32215, empleado20018, empleado25849, empleado21540]


function multiplicacion(num1, num2) {
    let resultado = 0
    resultado = num1 * num2
    return (resultado)
}

function calcularHoras() {
    let respuestaHoras
    do {
        let nombreIngresado = prompt("Ingrese el nombre del trabajador")
        let cantidadDias = parseInt(prompt("Ingrese la cantidad de días trabajados para " + nombreIngresado))
        let jornadaLabolar = parseInt(prompt("Ingrese las horas trabajadas por día para " + nombreIngresado))
        while (isNaN(cantidadDias)) {
            cantidadDias = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese la cantidad de días trabajados para " + nombreIngresado))
        }
        while (isNaN(jornadaLabolar)) {
            jornadaLabolar = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese las horas trabajadas por día para " + nombreIngresado))
        }

        multiplicacion(cantidadDias, jornadaLabolar)
        alert(`El total de horas trabajadas de ${nombreIngresado} es ${multiplicacion(cantidadDias, jornadaLabolar)}`)
        respuestaHoras = prompt("Responda si desea calcular mas horas. ESC para salir")

    } while (respuestaHoras.toUpperCase() != "ESC")
}

function calcularSueldo() {
    let respuesta
    do {
        let nombreIngresado = prompt("Ingrese el nombre del trabajador")
        let cantidadHoras = parseInt(prompt("Ingrese la cantidad de Horas trabajadas para " + nombreIngresado))
        let precioHora = parseInt(prompt("Ingrese el precio por Hora para " + nombreIngresado))
        while (isNaN(cantidadHoras)) {
            cantidadHoras = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese la cantidad de horas para " + nombreIngresado))
        }
        while (isNaN(precioHora)) {
            precioHora = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese el precio por Hora para " + nombreIngresado))
        }
        alert(`El sueldo de ${nombreIngresado} es $ ${multiplicacion(cantidadHoras, precioHora).toFixed(2)}`)
        respuesta = prompt("Responda si desea calcular otros sueldos. ESC para salir")

    } while (respuesta.toUpperCase() != "ESC")
}

function agregarEmpleado() {
    let legajoIngresado = parseInt(prompt("Ingrese el legajo del empleado"))
    let nombreIngresado = prompt("Ingrese el nombre del empleado")
    let puestoIngresado = prompt("Ingrese el puesto del empleado")
    let sueldoIngresado = parseInt(prompt("Ingrese el sueldo del empleado"))
    const empleadoNuevo = new empleado(legajoIngresado, nombreIngresado, puestoIngresado, sueldoIngresado)
    console.log(empleadoNuevo)
    empleados.push(empleadoNuevo)
    console.log(empleados)
}

function eliminarEmpleado(array) {
    console.log("A partir del catalogo ingrese el legajo que desea eliminar")
    for (let elem of array) {
        console.log(`${elem.legajo} - ${elem.puesto} del empleado ${elem.nombre}`)
    }
    let legajoEliminar = parseInt(prompt("Ingrese el legajo a eliminar"))
    let arrayLegajo = array.map((empleado) => empleado.legajo)
    console.log(arrayLegajo)
    let indice = arrayLegajo.indexOf(legajoEliminar)
    array.splice(indice, 1)
    verCatalogo(array)
}

function verCatalogo(array) {
    console.log("Bienvenido! Nuestro catalogo de empleados es:")
    array.forEach((empleado) => {
        console.log(empleado.legajo, empleado.nombre, empleado.puesto, empleado.sueldo)
    })
}

function buscarEmpleado(array) {
    let opcionPuesta = parseInt(prompt(`Por favor ingrese de que manera quiere buscar.
    1 - Por N° de legajo del empleado
    2 - Por nombre del empleado`))
    switch (opcionPuesta) {
        case 1:
            buscarPorLegajo(array)
            break
        case 2:
            buscarPorNombre(array)
            break
        default:
            alert("ingrese una opcion correcta")
            break
    }
}

function buscarPorLegajo(array) {
    let legajoBuscado = prompt("Ingrese el legajo del empleado que desea buscar")
    let legajoEncontrado = array.find(
        (book) => book.legajo == legajoBuscado
    )
    if (legajoEncontrado == undefined) {
        alert(`La persona con el N° ${legajoBuscado} de legajo no existe`)
    } else {
        console.log(legajoEncontrado)
    }
}

function buscarPorNombre(arr) {
    let empleadoBuscado = prompt("Ingrese el nombre del empleado que está buscando")
    let búsqueda = arr.filter((empleado) => empleado.nombre.toLowerCase() == empleadoBuscado.toLowerCase())
    if (búsqueda.length == 0) {
        alert(`No hay coincidencias para el empleado/a ${empleadoBuscado}`)
    } else {
        console.log(búsqueda)
        verCatalogo(búsqueda)
    }

}

function ordenarMenorMayor(array) {
    const menorMayor = [].concat(array)
    menorMayor.sort((a, b) => a.legajo - b.legajo)
    verCatalogo(menorMayor)
}

function ordenarMayorMenor(arr) {
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2) => {
        return param2.legajo - param1.legajo
    })
    verCatalogo(mayorMenor)
}

function ordenarAlfabeticamente(array) {
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
    verCatalogo(ordenadoAlfabeticamente)
}

function ordenar(array) {
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabéticamente `))
    switch (opcion) {
        case 1:
            ordenarMenorMayor(array)
            break
        case 2:
            ordenarMayorMenor(array)
            break
        case 3:
            ordenarAlfabeticamente(array)
            break
        default:
            alert(`${opcion} no es válida para ordenar, por favor ingrese una opcion correcta.`)
            break
    }
}

function menu() {
    let salirMenu = false
    do {
        salirMenu = preguntarOpcion(salirMenu)
    } while (!salirMenu)
}

function preguntarOpcion(salir) {
    let opcionIngresada = parseInt(prompt(`Hola! Este es un simulador de sueldos, por favor ingrese la opción deseada
            1 - Calcular horas trabajadas:
            2 - Calcular sueldos:
            3 - Agregar empleado:
            4 - Borrar empleado:
            5 - Consultar libro de empleados:
            6 - Ordenar libro de empleados:
            7 - Encontrar empleado:
            0 - Salir del menu`))

    switch (opcionIngresada) {
        case 1:
            calcularHoras()
            break
        case 2:
            calcularSueldo()
            break
        case 3:
            agregarEmpleado()
            break
        case 4:
            eliminarEmpleado(empleados)
            break
        case 5:
            verCatalogo(empleados)
            break
        case 6:
            ordenar(empleados)
            break
        case 7:
            buscarEmpleado(empleados)
            break
        case 0:
            alert("Gracias por utilizar nuestra app")
            salir = true
            return salir
            break
        default:
            alert("Ingrese una opción correcta")
            break
    }
}

menu()