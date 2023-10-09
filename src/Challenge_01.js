// Challenge 01 By Juan Esteban Fernandez Cuervo - 2211239

//1.Research difference between Arrow Functions and Regular Functions

// Sin embargo existe una diferencia bastante grande entre los dos tipos de función. 
//Hablamos del trato que cada tipo de función hace del elemento this en el cuerpo de la función.

const coche = {
    marca: 'Ford',
    modelo: 'Mustang',
    arrancar: function() {
      console.log(`Arrancando el coche ${this.marca} ${this.modelo}`);
    },
    parar: () => {
      console.log(`Parando el coche ${this.marca} ${this.modelo}`);
    }
  }

  console.log(coche.arrancar())

  console.log(coche.parar())

//2.Create a new function in Regular and Arrow types, which should receive a number and will print in console if that number is either odd or even.


// Regular Function

function RegularParoImpar(numeroRegular){
    if(numeroRegular % 2 === 0){
        console.log(numeroRegular + " es un numero par");
    } else {
        console.log(numeroRegular + " es impar");
    }
}
console.log(RegularParoImpar(3))


// Arrow Function 

const ArrowParoImpar = (numeroArrow) => {
    if(numeroArrow % 2 === 0){
        console.log(numeroArrow + " es un numero par");
    } else {
        console.log(numeroArrow + " es impar");
    }
}

console.log(ArrowParoImpar(6))


    





