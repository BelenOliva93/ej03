/*

EJERCICIO 01
Escribir un programa que imprima en la consola la fecha actual 
con el siguiente formato: “Hola, hoy es el día __ del mes __ del año __”
*/

const ejercicio01 = (time = (new Date).getTime()) => {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();


    let message = `Hola, hoy es el día ${day}, del mes  ${month}, del año ${year}`;

    return message;
};
console.log("El ejercicio 01: ");
console.log(ejercicio01());


/*

EJERCICIO 02
Escribir un programa que diga qué día de la semana es hoy “Hoy es día x”,
y que si es fin de semana diga “Hoy es Domingo, viva el fin de semana”
*/

const ejercicio_02 = () => {
    let time = new Date();
    let date = time.getDay();

    switch (date) {
        case 0:
            console.log(`Hoy es Domingo, viva el fin de semana`);
            break
        case 1:
            console.log(`Hoy es día lunes.`);
            break
        case 2:
            console.log(`Hoy es día martes.`);
            break
        case 3:
            console.log(`Hoy es día miercoles.`);
            break
        case 4:
            console.log(`Hoy es día jueves.`);
            break
        case 5:
            console.log(`Hoy es día viernes.`);
            break
        case 6:
            console.log(`Hoy es día sabado.`);
            break
    }
}
console.log("El ejercicio 02: ");
ejercicio_02()



/**
 EJERCICIO 03
 Escribir un programa que calcule el área de un triángulo
conociendo el tamaño de la base y de la altura. (b*a) / 2
 */

const ejercicio03 = () => {

    const base = prompt("base");
    const height = prompt("altura");

    let message = `El área del cuadrado es: ${base * height}`;
    return message;
};
console.log("El ejercicio 03: ");
console.log(ejercicio03());


/**
 * EJERCICIO 04
 Escribir un programa que imprima en consola si el año actual es bisiesto o 
 no lo es. Si lo es escribiremos un mensaje diciendo “Este año, 20…, no es bisiesto”, 
 o “Este año, 20…, es bisiesto”.
 */

const ejercicio_04 = () => {
    let time = new Date();
    date = time.getDate();
    year = time.getFullYear();
    leap_year = year % 4 == 0


    if (leap_year) {
        console.log(`Este año, ${year}, es bisiesto`)
    } else {
        console.log(`Este año, ${year}, no es bisiesto`)
    }

}
console.log("El ejercicio 04: ");
ejercicio_04();


/**
 * EJERCICIO 05
Escribir un programa que encuentre entre los años 2019 y 2050 el primer 1 de enero
 que sea domingo e imprimir en consola “El día 1 de enero del año x será domingo”.
 */


let ejercicio05 = () => {

    let yearSunday = [];
    for (let i = 2019; i <= 2050; i++) {
        let year = new Date(i, 0, 1, 0, 0, 0, 0);
        let isSunday = (year.getDay() == 0)
        if (isSunday) {
            yearSunday.push(i)
        }
    }
    let messageSunday = `El día 1 de enero del año ${yearSunday[0]} será domingo`
    return messageSunday
}
console.log("El ejercicio 05: ");
console.log(ejercicio05());


/*

EJERCICIO 06
Escribir un programa que calcule los días que faltan para navidad e 
imprimir en consola “Faltan x días para Navidad”
*/

let ejercicio_06 = () => {
    let date = new Date();
    let xmas = new Date(2020, 11, 25, 0, 0, 0, 0).getTime();
    let daysleft = xmas - date;
    let daysleftuntilxmas = Math.round(((daysleft / 1000) / 60 / 60 / 24));
    console.log(`Faltan ${daysleftuntilxmas} días para Navidad`)

}
console.log("El ejercicio 06: ");
ejercicio_06()


/**
 * EJERCICIO 07
 Escribir un programa que cree un string a partir de otro intercambiando la primera
 y última letras. Comprobar previamente que el string no está vacío y que su longitud
 es mayor que tres. Ejemplo: “Hola que tal” => “lola que taH”
 */

let ejercicio_07 = () => {

    let string = `Hola, qué tal estás`

    let stringStart = string.slice(0, 1);
    let stringEnd = string.slice(-1);
    let stringWithout = string.slice(1, -1);
    let stringFinal = stringEnd + stringWithout + stringStart;

    console.log(`${stringFinal}`)

}
console.log("El ejercicio 07: ");
ejercicio_07();


/**
 EJERCICIO 08
Escribir un programa que calcule si un número x metido es múltiplo de 3 y de 7. 
Imprimir en consola: “El número x es múltiplo de 3 y de 7” o “El número x no es 
múltiplo de 3 ni de 7” o “El número x es múltiplo de 3 pero no de 7” o “El número x 
no es múltiplo de 3 pero sí de 7”
 */

let ejercicio_08 = () => {

    let num_01 = prompt("Número");
    let num_insert = new String(num_01);
    let correct_number = (num_01 % 3 == 0 && num_01 % 7 == 0);
    let incorrect_number = (num_01 % 3 != 0 && num_01 % 7 != 0);
    let correct_number3 = (num_01 % 3 == 0 && num_01 % 7 != 0);
    let correct_number7 = (num_01 % 3 != 0 && num_01 % 7 == 0);

    if (correct_number) {
        console.log(`El número ${num_insert} es múltiplo de 3 y de 7`);
    }
    else if (incorrect_number) {
        console.log(`El número ${num_insert} no es múltiplo de 3 y de 7`);
    }
    else if (correct_number3) {
        console.log(`El número ${num_insert} es múltiplo de 3 pero no de 7`)
    }
    else if (correct_number7) {
        console.log(`El número ${num_insert} no es múltiplo de 3 pero si de 7`)
    }

}

console.log("El ejercicio 08: ");
ejercicio_08();


/**
 EJERCICIO 09
Dado un array de números naturales, escribir un programa que calcule el mayor y el menor, 
e imprimir por consola: “Dado un array con números x, y, z, a, …. El mayor es el x y el menor es el y”.
 */

let ejercicio_09 = () => {

    let numbers = [
        1,
        5,
        3,
        9,
        6,
        2
    ];

    let numbersOrder = numbers.sort();
    let numbersReverse = numbersOrder.reverse();
    let numbersList = numbersReverse.length;

    let numbersFirst = numbers[0];
    let numbersLast = numbers[numbersList - 1];

    let numberMessage = console.log(`Dado un array con números ${numbers} ….
     El mayor es el ${numbersFirst} y el menor es el ${numbersLast}`);

    return numberMessage;
}

console.log("El ejercicio 09: ");
ejercicio_09();


/**
 EJERCICIO 10
 Dados dos números a y b, ver cuál de ellos es más cercano a 100 e imprimir en consola:
“El número a es más cercano que el b a 100 por x diferencia”
 */

let ejercicio_10 = () => {

    let a = prompt(`Número a`);
    let b = prompt(`Número b`);

    let distanceA = a - 100
    let distanceB = b - 100

    if (Math.abs(distanceA) < Math.abs(distanceB)) {
        console.log(`El número ${a} es más cercano que el ${b} a 100 por ${Math.abs(distanceA)} diferencia`)
    } else {
        console.log(`El número ${b} es más cercano que el ${a} a 100 por ${Math.abs(distanceB)} diferencia`)
    }
}
console.log("El ejercicio 10: ");
ejercicio_10();


/**
 EJERCICIO 11
Crear un número random entre 0 y 100, calcular si este número está el rango entre 30 y 50, calcular si
está en el rango entre 50 y 70, ambos incluidos e imprimir en consola: “Hemos creado un número aleatorio x,
que (no) está en el primer rango y que (no) está en el segundo rango”
 */
let ejercicio_11 = () => {

    let randomNumC = Math.floor(Math.random() * 89);
    let firstRange = 30 <= randomNumC <= 50;
    let secondRange = 50 <= randomNumC <= 70;

    if (firstRange) {
        console.log(`Hemos creado un numero aleatorio x, que es ${randomNumC} y que está en el primer rango pero no en el segundo.`);
    } else {
        console.log(`Hemos creado un numero aleatorio x, que es ${randomNumC} y que no está en el primer rango pero tampoco en el segundo.`);
    };

    if (secondRange) {
        console.log(`Hemos creado un numero aleatorio x, que es ${randomNumC} y que no está en el primer rango pero si en el segundo.`);
    } else {
        console.log(`Hemos creado un numero aleatorio x, que es ${randomNumC} y que no está en el primer rango pero tampoco en el segundo.`);
    };
}
console.log("El ejercicio 11: ");
ejercicio_11();



/**
 EJERCICIO 12
Crear un número random entre 0 y 10. Imprimir en consola “El alumno sacó Matrícula” si es igual a 10;
 “El alumno sacó Sobresaliente” si es mayor o igual a 9 y menor que 10, así sucesivamente.
 */

let ejercicio_12 = () => {

    let randNumber = Math.floor(Math.random() * (100 + 1)) / 10;

    if (randNumber == 10) {
        console.log('El alumno sacó matrícula!!!');
    } else if (randNumber < 10 && randNumber >= 9) {
        console.log('El alumno sacó un sobresaliente');
    } else if (randNumber < 9 && randNumber >= 7) {
        console.log('El alumno sacó un notable');
    } else if (randNumber < 7 && randNumber >= 5) {
        console.log('El alumno sacó un aprobado');
    } else if (randNumber < 5) {
        console.log('El alumno suspendió');
    }
    let randNumberMessage = console.log(`La nota del alumno es ${randNumber}`);

    return randNumberMessage;

}

console.log("El ejercicio 12: ");
ejercicio_12();


/*
EJERCICIO 13
Crear un string largo (un párrafo de largo más o menos). Escribir un programa que retorne
la porción del string hasta encontrar la primera e. “Muerto el perro se acabó la rabia” => “Mue”
*/
let ejercicio_13 = () => {


    let str = `El próximo domingo, los ciudadanos tendrán ocasión de hacer política, 
    de participar en la toma de decisiones públicas, cuando depositen su voto para elegir
    a 194 diputados de mayoría y tal vez cincuenta de partido. La democracia electoral les permite,
    de ese modo ejercer  funciones de gobierno.`

    let findLetter = str.indexOf(`e`) + 1;
    let findSlice = str.slice(0, findLetter);
    console.log(`${findSlice}`);


}
console.log("El ejercicio 13: ");
ejercicio_13();


/*
EJERCICIO 14
Crear un string largo. Escribir un programa que corte el string a partir de un número x de caracteres
y añadir “…”. “En un lugar de la mancha cuyo nombre” => “En un lug…”
*/

let ejercicio_14 = () => {

    let string = `El próximo domingo, los ciudadanos tendrán ocasión de hacer política, de participar en la toma
     de decisiones públicas, cuando depositen su voto para elegir a 194 diputados.`

    let stringSlice = string.slice(-10);
    let stringReplace = string.replace(stringSlice, `...`);
    let stringFull = stringReplace;

    console.log(`${stringFull}`)

}
console.log("El ejercicio 14: ");
ejercicio_14();



/*
EJERCICIO 15
Crear un programa que tome un string y lo corte en trozos de cuatro caracteres.
Imprimir en consola el array resultante y escribir “El string se puede dividir en x trozos de 4 caracteres”
*/

let ejercicio_15 = () => {

    let str = `Roboto tiene una naturaleza dual. Tiene un esqueleto mecánico 
    y las formas son en gran parte geométricas.`

    let strLength = str.length;
    let strDivide = Math.round(strLength / 4);

    console.log(`El string se puede dividir en ${strDivide} trozos de 4 caracteres`);

}
console.log("El ejercicio 15: ");
ejercicio_15();


/**
EJERCICIO 16
Dado un array de número, crear un programa que almacene los números mayores de 10 en ese array,
y escribir en consola: “Los número x, y, z, w son mayores que 10, el resto, no”
 */
let ejercicio16 = () => {

    let nums = [20, 13, 5, 3, 15];
    let numsOver10 = []; // 13, 15, 20

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 10) {

            numsOver10.push(nums[i]);
        }
    }
    console.log(`Los números ${numsOver10} son mayores que 10, el resto, no`);

}
console.log(`Ejercicio 16`);
ejercicio16();

/**
EJERCICIO 17
Dado un párrafo largo, contar las veces que esté la preposición “de”. Imprimir por consola un mensaje que diga: 
“La palabra de, salió x veces”
 */
const ejercicio17 = () => {

    let count = 0; //espera

    let text = `Cuando la legislación del Estado miembro de residencia no contemple
     el seguro contra el riesgo de desempleo para las personas que trabajen por cuenta propia`;
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i] == "de") {
            count = count + 1;
        }
    }

    console.log(`La preposición "de" se repite ${count} veces`);
}
console.log(`Ejercicio 17`);
ejercicio17();


/*
EJERCICIO 18
Dado un array de números naturales, crear un programa que diga si hay algún número duplicado. 
En caso de que sí imprimir por consola “El número x está duplicado”
b) si hay más de uno “Los números x, y, z están duplicados”
*/
const ejercicio18 = () => {
    let numbers = [0, 3, 6, 2, 12, 2, 5, 7, 21];
    let repeated = [];


    for (let i = 0; i < numbers.lenght; i++) {
        if (numbers.filter(numbers => numbers == numbers[i]).lenght > 1) {
            repeated.push(numbers[i])
        };
    };
    let deleteRepeated = repeated.filter((array, numbers) => {
        return repeated.indexOf(array) == numbers;
    });
    if (repeated > 2) {
        mensj = `el numero ${deleteRepeated} esta repetido`

    } else {
        mensj = `los numeros ${deleteRepeated} están repetidos`
    };
    return mensj;

}
console.log("El ejercicio 18: ");
ejercicio18();


/**
 EJERCICIO 19
 Dado el array del ejercicio anterior, Crear un programa que devuelva un array nuevo
sin los números duplicados y ordenados de mayor a menor. Imprimir por consola el array.
 */

let ejercicio_19 = () => {


}
console.log("El ejercicio 19: ");
ejercicio_19();

/**
EJERCICIO 20
Almacena en un array todos los números que pueden ser submúltiplos de 21230.
Escribe en consola: “Los números 1, x, y, z, w, … son submúltiplos de 21230”.
*/
let ejercicio_20 = () => {

    let numbers = [];
    let topNumber = 21230
    for (let i = 0; i <= topNumber; i++) {
        if (topNumber % i == 0) {
            numbers.push(i)
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        console.log(`${numbers[i]} es submultiplo`)
    }

}
console.log("El ejercicio 20: ");
ejercicio_20();

/**
EJERCICIO 21
Dado un array de números reales (enteros y decimales),
devolver la media y escribir en consola: “La media de los números
a, b, c, d, e… es x”
*/
let ejercicio_21 = () => {

    let sum = 0
    let array = [
        2, 6, 1, 2, 6, 7, 9, 6, 4, 1, 3
    ]

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    let average = sum / array.length
    console.log(`La media de los números ${array}… es ${average}`)
}
console.log("El ejercicio 21: ");
ejercicio_21();