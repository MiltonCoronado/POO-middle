//validar si es un objeto.
function isObject(subject) {
    return typeof subject == "object";
  }
  
//validar si es un array.
function isArray(subject) {
    return Array.isArray(subject);
  }
  
//validar si existe el parametro
function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }

function LearningPath({
    name = requiredParam("name"),
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
  
  function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  
    const private = {
      "_learningPaths": [],
    };
  
    Object.defineProperty(this, "learningPaths", {
      get() {
        return private["_learningPaths"];
      },
      set(newLp) {
        if (newLp instanceof LearningPath) {
          private["_learningPaths"].push(newLp);
        } else {
          console.warn("Alguno de los LPs no es una instancia dell prototipo LearningPath");
        }
      },
    });
  
    for (learningPathIndex in learningPaths) {
      this.learningPaths = learningPaths[learningPathIndex];
    }
  }
  
  
  const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
  const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
  const juan = new Student({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });