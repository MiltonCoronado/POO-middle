//objeto literal.
const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA() {
        this.a = "AAAAAA";
    }
};

const obj2 = {};//editar al objeto 1 y al objeto 2 no afecta a ambos, son independientes. excepto cuando existen objetos dentro de objetos. 
for (index in obj1) {
    obj2[index] = obj1[index]
}

const obj3 = Object.assign({}, obj1);//editar al objeto 1 y al objeto 3 no afecta a ambos, son independientes. excepto cuando existen objetos dentro de objetos. 
const obj4 = Object.create(obj1); //si edito el objeto 4 no afecta al objeto 1 pero si edito objeto 1 si afecta a objeto 4, tb cuando existen objetos dentro de objetos son afectados.
const string = JSON.stringify(obj1);//crea un string del objeto, que se guarda en la memoria stack y no en la memoria heap.
const object = JSON.parse(string);//crea un objeto a partir de un string en JSON que esta en la memoria stack y como es un objeto se guarda en la memoria heap, por lo tanto no afecta al objeto original si se edita y viceversa.
console.log(obj5);


//estos metodos de shallow copy si funcionan pero tal como su nombre lo dice es solo una copia superficial, si queremos que no afecten a los metodos se tiene que utilizar el deep copy.

