//RECURSIVIDAD.


const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


//imprimir numeros con un ciclo for.
for (let index = 0; index < numbersArray.length; index++){
    let iterative = numbersArray[index];
    console.log({index, iterative})
}


//imprimir numeros con una funcion recursiva.
function recursiva(numbersArray){
    if (numbersArray.length != 0){
        let firstNumb = numbersArray[0];
        console.log(firstNumb);
        numbersArray.shift();
        recursiva(numbersArray); 
    };  
};
