let salirMenu = false
do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 - Calcular horas trabajadas.
        2 - Calcular sueldo.
        0 - Salir del menu`))

    switch(opcionIngresada){
        case 1:
            let respuestaHoras
            do{
                let nombreIngresado = prompt("Ingrese el nombre del trabajador")
                let cantidadDias = parseInt(prompt("Ingrese la cantidad de dias trabajados para " + nombreIngresado))
                let jornadaLabolar = parseInt(prompt("Ingrese la jornada labolar por día para " + nombreIngresado))
                while(isNaN(cantidadDias)){
                    cantidadDias = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese la cantidad de dias trabajados para " + nombreIngresado))
                }
                while(isNaN(jornadaLabolar)){
                    jornadaLabolar = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese la jornada labolar por día para " + nombreIngresado))
                }
                let resultado = 0
                function multiplicacion(num1, num2){
                    resultado = num1 * num2
                }
                multiplicacion(cantidadDias, jornadaLabolar)
                console.log(`El total de horas trabajadas de ${nombreIngresado} es ${resultado}`)
                respuestaHoras = prompt("Responda si desea calcular mas horas. ESC para salir")

            }while(respuestaHoras.toUpperCase() != "ESC")
        break
        case 2:
            let respuesta
            do{
                let nombreIngresado = prompt("Ingrese el nombre del trabajador")
                let cantidadHoras = parseInt(prompt("Ingrese la cantidad de Horas trabajadas para " + nombreIngresado))
                let precioHora = parseInt(prompt("Ingrese el precio por Hora para " + nombreIngresado))
                while(isNaN(cantidadHoras)){
                    cantidadHoras = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese la cantidad de horas para " + nombreIngresado))
                }
                while(isNaN(precioHora)){
                    precioHora = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese el precio por Hora para " + nombreIngresado))
                }
                let resultado = 0
                function multiplicacion(num1, num2){
                    resultado = num1 * num2
                }
                multiplicacion(cantidadHoras, precioHora)
                console.log(`El sueldo de ${nombreIngresado} es $${resultado.toFixed(2)}`)
                respuesta = prompt("Responda si desea calcular otros sueldos. ESC para salir")

            }while(respuesta.toUpperCase() != "ESC")
        break
        case 0:
            console.log("gracias por utilizar nuestra app")
            salirMenu = true
        break
        default:
            console.log("Ingrese una opción correcta")
        break
    }
}while(!salirMenu) 