export function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}


export const data = [
  {
    id: random(1, 1000),
    level: 1,
    question: "¿Como se llamaba la protagonista femenina de la serie de televisión Scrubs?",
    category: "entretenimiento",
    answer: "Elliot",
    choices: ["Elliot","Sarah", "Jordan", "Molly"]
  },
  {
    id: random(1, 1000),
    level: 1,
    question: "Cómo se llamaba el personaje que interpretaba John Travolta en *Grease*",
    category: "entretenimiento",
    answer: "Danny Zuko",
    choices: ["Danny Puño", "Danny Zuko","Danny Grease", "Danny Chulo"]
  },
  {
    id: random(1, 1000),
    level: 1,
    question: "¿n qué año se estrenó la película de Disney *Pinocho*?",
    category: "entretenimiento",
    answer: "1940",
    choices: ["1940", "1950", "1952", "1946"]
  },
  {
    id: random(1, 1000),
    level: 1,
    question: "¿En qué país nació la Bauhaus?",
    category: "entretenimiento",
    answer: "Alemania",
    choices: ["Alemania", "Holanda", "Rusia", "Estados Unidos"]
  },
  {
    id: random(1, 1000),
    level: 1,
    question: "Arroz con leche me quiero casar con una señorita de...",
    category: "entretenimiento",
    answer: "San Nicolás",
    choices: ["San Nicolás", "San Martin", "San Justo", "San José"]
  },
  //-------------------------------------------ARTE-------------------
  {
    id: random(1, 1000),
    level: 2,
    question: "¿Cuál era la nacionalidad de Heri Cartier-Bresson, considerado por muchos el padre del fotoreportaje?",
    category: "arte",
    answer: "Francesa",
    choices: ["Británica", "Española", "Alemana", "Francesa"]
  },
  {
    id: random(1, 1000),
    level: 2,
    question: "¿Quién pintó el cuado *El jardín de las delicias*?",
    category: "arte",
    answer: "El Bosco",
    choices: ["El Bosco", "Carvaggio", "Velázquez", "Arcimboldo"]
  },
  {
    id: random(1, 1000),
    level: 2,
    question: "¿Qué ciudades describe Italo Calvino en *Las ciudades invisibles*?",
    category: "arte",
    answer: "Ciudades imaginadas por Marco Polo",
    choices: ["Ciudades asiáticas", "Las que Marco Polo visitó en sus viajes", "Ciudades europeas", "Ciudades imaginadas por Marco Polo"]
  },
  {
    id: random(1, 1000),
    level: 2,
    question: "¿Cuál es la ciudad fetiche del escritor Paul Auster?",
    category: "arte",
    answer: "Nueva York",
    choices: ["Nueva York", "Londres", "París", "Chicago"]
  },
  {
    id: random(1, 1000),
    level: 2,
    question: "¿Quién escribió *El viejo y el mar*?",
    category: "arte",
    answer: "Ernest Hemingway",
    choices: ["Ernest Hemingway", "Norman Mailer", "Gabriel García Márquez", "Truman Capote"]
  },
  /*--------------------------SPORTS--------------------*/
  {
    id: random(1, 1000),
    level: 3,
    question: "¿Cuántos Km de distancia mide una maratón?",
    category: "sport",
    answer: "42.16 km",
    choices: ["41.85 km", "42.16 km",  "43.77 km", "43.45 km"]
  },
  {
    id: random(1, 1000),
    level: 3,
    question: " ¿Cuáles son los cinco colores del anillo de los Juegos Olímpicos?",
    category: "sport",
    answer: "Azul, rojo, amarillo, verde y negro",
    choices: ["Azul, rojo, amarillo, verde y negro", "Azul, rojo, amarillo, verde y violeta",
      "índigo, rojo, morado, verde y negro",
      "Azul, rojo, amarillo, naranja y verde"]
  },
  {
    id: random(1, 1000),
    level: 3,
    question: "¿Cuántas veces Michael Jordan ganó campeonatos para los Chicago Bulls?",
    category: "sport",    
    answer: "6",
    choices: ["5", "7", "6", "4"]
  },
  {
    id: random(1, 1000),
    level: 3,
    question: "¿Qué deporte tiene un equipo llamado foil?",
    category: "sport",
    answer: "Esgrima",
    choices: ["polo", "golf", "Esgrima", "boxeo"]
  },
  {
    id: random(1, 1000),
    level: 3,
    question: "¿Por qué deporte son conocidos los Cachorros de Chicago y los Medias Rojas de Boston?",
    category: "sport",
    answer: "béisbol",
    choices: ["baloncesto", "béisbol", "tenis", "vóleibol",]
  },
  /*-----------------history------------*/
  {
    id: random(1, 1000),
    level: 4,
    question: "¿De qué nacionalidad era Juana de Arco?",
    category: "history",
    answer: "Francesa",
    choices: ["Inglesa", "Italiana", "Francesa", "Mexicana"]
  },
  {
    id: random(1, 1000),
    level: 4,
    question: "¿Quién dibujo al famoso Hombre de Vitruvio?",
    category: "history",
    answer: "Leonardo da Vinci",
    choices: [ "Miguel Angel","Leonardo da Vinci","Rubens", "Pablo Picas"]
  },
  {
    id: random(1, 1000),
    level: 4,
    question: "¿Qué famoso filósofo fue maestro de Alejandro Magno durante cinco años?",
    category: "history",
    answer: "Aristóteles",
    choices: ["Sócrates","Aristóteles","Platón", "Heraclito"]
  },
  {
    id: random(1, 1000),
    level: 4,
    question: "¿Quién fue el último zar de Rusia?",
    category: "history",
    answer: "Nicolas II",
    choices: [ "Nicolas II", "Pedro I el Grande", "Alejandro II", "Ana"]
  },
  {
    id: random(1, 1000),
    level: 4,
    question: "¿Qué inició la Segunda Guerra Mundial?",
    category: "history",
    answer: "Alemania invadió Polonia",
    choices: ["Alemania invadió Polonia", "El asesinato del archiduque Francisco Fernando",
    "Hitler invadió Austria", "Alemania invadió rusia"]
  },
  /*------------------------Science----------*/
  {
    id: random(1, 1000),
    level: 5,
    question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    category: "science",
    answer: "Célula",
    choices: ["Tejido", "Particula", "Célula", "Calcio"]
  },
  {
    id: random(1, 1000),
    level: 5,
    question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    category: "science",
    answer: "Célula",
    choices: ["Tejido", "Particula", "Célula", "Calcio"]
  },
  {
    id: random(1, 1000),
    level: 5,
    question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    category: "science",
    answer: "Célula",
    choices: ["Tejido", "Particula", "Célula", "Calcio"]
  },
  {
    id: random(1, 1000),
    level: 5,
    question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    category: "science",
    answer: "Célula",
    choices: ["Tejido", "Particula", "Célula", "Calcio"]
  },
  {
    id: random(1, 1000),
    level: 5,
    question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    category: "science",
    answer: "Célula",
    choices: ["Tejido", "Particula", "Célula", "Calcio"]
  },
]