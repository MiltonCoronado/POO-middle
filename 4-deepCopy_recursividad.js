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

//validar si es un array.
function isArray(subject) {
    return Array.isArray(subject);
}

//Validar si es un objeto.
function isObject(subject) {
    return typeof subject == "object";
}


//deep copy.
function deepCopy(subject) {
   let copySubject;
  
   const subjectIsObject = isObject(subject);
   const subjectIsArray = isArray(subject);
  
   if (subjectIsArray) {
      copySubject = [];
   } else if (subjectIsObject) {
      copySubject = {};
   } else {
      return subject;
   }
  
   for (key in subject) {
     const keyIsObject = isObject(subject[key]);
  
     if (keyIsObject) {
       copySubject[key] = deepCopy(subject[key]);
     } else {
       if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
  
  const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      twitter: undefined,
      instagram: undefined,
      facebook: undefined,
    },
  };
  
  const juan = deepCopy(studentBase);
  Object.seal(juan);
  // juan.name = "Juanito";

  
  