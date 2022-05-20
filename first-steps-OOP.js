const Moviee1 = {
    name: "cryer",
    id : 1,
    reproducir(){
      return `reproduccion pelicula... ${this.name}`
    }
  }
  
  class Movie {
    #name
    constructor(name, id){
      this.#name= name; //Propiedades
      this.id= id;
    }
  
    get getName() { //obtener propiedad privada
      return this.#name
    }  
  
    set setName(name) {
      this.#name = name
    }  
  
    reproducir(){   //Metodo (this hace referencia a todo lo que esta en la clase)
      return `reproduccion pelicula... ${this.name}`
    }
  } 
  
  //HERENCIA
  class Serie extends Movie {
  
    #caps = [] //privado
  
    constructor(name, id){
      super(name, id);
      //this.caps= caps;
    }
  
    set setCaps(cap) {
      this.#caps.push(cap)
    }
  
    get getCaps() { 
      return this.#caps;
    } 
  
    reproducirCapitulo(){
      return `reproduccion Capitulo ${this.cap}... ${this.name}`
    }
  }
  
  const Movie1  = new Movie("cryer", 1)
  const Movie2  = new Movie("batman", 2)
  //const Serie1 = new Serie("elite", 03);
  //const Serie2 = new Serie("elite", 03, 80)
  
  
  //console.log('Movie1', Movie1)
  //console.log('Movie2', Movie2)
  //console.log('Movie2 repr', Movie2.reproducir())
  //console.log('Movie2 get name', Movie2.getName)
  //Movie2.setName = "cambiar peli"
  //console.log('Movie2 set name', Movie2.getName)
  //console.log('Movie1 set name', Movie1.getName)
  //console.log('Serie1 get caps', Serie1.getCaps)
  //Serie1.setCaps = 1
  //console.log('Serie1 set caps', Serie1.getCaps)
  //console.log('Serie1', Serie1)
  //console.log('Serie1 repr', Serie1.reproducirCapitulo())
  //console.log('Serie2', Serie2)