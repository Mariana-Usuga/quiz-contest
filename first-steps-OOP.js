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
  
  