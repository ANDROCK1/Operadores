// Conjuncion (&&)(AND)
const Estudiante = true;
const tieneBuenPromedio = true;

if  (Estudiante && tieneBuenPromedio) {
    console.log("El estudiante es elegible para la beca");
    } else {
        console.log("El estudiante no es elegible para la beca");
    }

// Disyuccion (||)(OR)
const estaLloviendo =  true;
const estaNublado = false;

if (estaLloviendo || tengoParaguas) {
    console.log("no me mojare");
    } else {
        console.log("necesito paraguas");
        }

// Negacion
const esDeNoche = false;

if  (!esDeNoche) {
    console.log("es de dia");
    } else {
        console.log("es de noche");
        }

// Validar el acceso a un sistema
const usuario = "admin";
const contraseña = "1234";

if  (usuario === "admin" && contraseña === "1234") {
    console.log("acceso concedido");
    } else {
        console.log("acceso denegado");
        }

// Determinar si un numero es divisible por 3
const numero = 15;
if (numero % 3 === 0 && numero % 5 === 0)  {
    console.log("el numero es divisible por 3 y 5");
    } else {
        console.log("el numero no es divisible por 3 y 5");
        }

// Verificar si un estudiante tiene aprobado  un curso y si ha asistido al 80% de las clases
const notaExamen = 80;
const asistencia = 0.8;
const notaMinimaDeExamen = 70;
const AsistenciaMinimaRequerida = 0.75;

if  (notaExamen >= notaMinimaDeExamen && asistencia >= AsistenciaMinimaRequerida)  {
    console.log("el estudiante aprobó el curso");
    } else {
        console.log("el estudiante no aprobó el curso");
        }
