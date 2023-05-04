const juan = {
    name: "juanito",
    age: 18,
    approvedCourses: ["curso 1"],
    addCourse(newCourse) {
        console.log("This", this)
        console.log("this.approvedCourses", this.approvedCourses)
        this.approvedCourses.push(newCourse);
    }
}
 


console.log(Object.getOwnPropertyDescriptors(juan));//este metodo devuelve un "OBJETO" dentro de otro objeto, el cual contiene cada key y retorna 4 valores por key, configurable, enumerable, writable (todas en true) y el value de la key.  
console.log(Object.getOwnPropertyNames(juan));//devuelve un "ARRAY" de strings con el nombre de las keys.
Object.seal(juan)//con esto tadas las propiedasdes configurable del objeto se ponen como false.
Object.isSealed(juan)//pregunta si todas las propiedades configurable del objeto estan en false y devuelve un dato booleano.
Object.freeze(juan)//con esto tadas las propiedasdes writable del objeto se ponen como false.
Object.isFrozen(juan)//pregunta si todas las propiedades writable del objeto estan en false y devuelve un dato booleano.
console.log(Object.keys(juan));//devuelve un "ARRAY" de strings con el nombre de las keys.
console.log(Object.values(juan));//devuelve los values de un objeto en strings dentro de un Array.
console.log(Object.entries(juan));//este metodo devuelve las keys y values en strings separados dentro de un array de arrays

Object.defineProperty(juan, "navigator", {
    value: "chrome",
    enumerable: true,//para listarla, enumerarla y aparesca en consola (en false no aparece)
    writable: true,//para editar el value (en false no se puede editar) 
    configurable: true,// para eliminar la propiedad escribiendo "delete" antes del objeto y su propiedad en la consola. (en false no se puede eliminar la propiedad)
});


 

