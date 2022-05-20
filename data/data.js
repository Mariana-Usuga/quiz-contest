export function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}


export const data = [
  {
    id: random(1, 1000),
    difficultyLevel: 1,
    question: "¿Como se llamaba la protagonista femenina de la serie de televisión Scrubs?",
    category: "entretenimiento",
    rightResponse: "Elliot",
    responses: ["Elliot","Sarah", "Jordan", "Molly"]
  },
  {
    id: random(1, 1000),
    difficultyLevel: 1,
    question: "Cómo se llamaba el personaje que interpretaba John Travolta en *Grease*",
    category: "entretenimiento",
    rightResponse: "Danny Zuko",
    responses: ["Danny Puño", "Danny Zuko","Danny Grease", "Danny Chulo"]
  },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 1,
  //   question: "¿n qué año se estrenó la película de Disney *Pinocho*?",
  //   category: "entretenimiento",
  //   rightResponse: "1940",
  //   responses: ["1940", "1950", "1952", "1946"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 1,
  //   question: "¿En qué país nació la Bauhaus?",
  //   category: "entretenimiento",
  //   rightResponse: "Alemania",
  //   responses: ["Alemania", "Holanda", "Rusia", "Estados Unidos"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 1,
  //   question: "Arroz con leche me quiero casar con una señorita de...",
  //   category: "entretenimiento",
  //   rightResponse: "San Nicolás",
  //   responses: ["San Nicolás", "San Martin", "San Justo", "San José"]
  // },
  //-------------------------------------------ARTE-------------------
  {
    id: random(1, 1000),
    difficultyLevel: 2,
    question: "¿Cuál era la nacionalidad de Heri Cartier-Bresson, considerado por muchos el padre del fotoreportaje?",
    category: "arte",
    rightResponse: "Francesa",
    responses: ["Británica", "Española", "Alemana", "Francesa"]
  },
  {
    id: random(1, 1000),
    difficultyLevel: 2,
    question: "¿Quién pintó el cuado *El jardín de las delicias*?",
    category: "arte",
    rightResponse: "El Bosco",
    responses: ["El Bosco", "Carvaggio", "Velázquez", "Arcimboldo"]
  },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 2,
  //   question: "¿Qué ciudades describe Italo Calvino en *Las ciudades invisibles*?",
  //   category: "arte",
  //   rightResponse: "Ciudades imaginadas por Marco Polo",
  //   responses: ["Ciudades asiáticas", "Las que Marco Polo visitó en sus viajes", "Ciudades europeas", "Ciudades imaginadas por Marco Polo"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 2,
  //   question: "¿Cuál es la ciudad fetiche del escritor Paul Auster?",
  //   category: "arte",
  //   rightResponse: "Nueva York",
  //   responses: ["Nueva York", "Londres", "París", "Chicago"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 2,
  //   question: "¿Quién escribió *El viejo y el mar*?",
  //   category: "arte",
  //   rightResponse: "Ernest Hemingway",
  //   responses: ["Ernest Hemingway", "Norman Mailer", "Gabriel García Márquez", "Truman Capote"]
  // },
  /*--------------------------SPORTS--------------------*/
  {
    id: random(1, 1000),
    difficultyLevel: 3,
    question: "¿Cuántos Km de distancia mide una maratón?",
    category: "sport",
    rightResponse: "42.16 km",
    responses: ["41.85 km", "42.16 km",  "43.77 km", "43.45 km"]
  },
  {
    id: random(1, 1000),
    difficultyLevel: 3,
    question: " ¿Cuáles son los cinco colores del anillo de los Juegos Olímpicos?",
    category: "sport",
    rightResponse: "Azul, rojo, amarillo, verde y negro",
    responses: ["Azul, rojo, amarillo, verde y negro", "Azul, rojo, amarillo, verde y violeta",
      "índigo, rojo, morado, verde y negro",
      "Azul, rojo, amarillo, naranja y verde"]
  },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 3,
  //   question: "¿Cuántas veces Michael Jordan ganó campeonatos para los Chicago Bulls?",
  //   category: "sport",    
  //   rightResponse: "6",
  //   responses: ["5", "7", "6", "4"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 3,
  //   question: "¿Qué deporte tiene un equipo llamado foil?",
  //   category: "sport",
  //   rightResponse: "Esgrima",
  //   responses: ["polo", "golf", "Esgrima", "boxeo"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 3,
  //   question: "¿Por qué deporte son conocidos los Cachorros de Chicago y los Medias Rojas de Boston?",
  //   category: "sport",
  //   rightResponse: "béisbol",
  //   responses: ["baloncesto", "béisbol", "tenis", "vóleibol",]
  // },
  /*-----------------history------------*/
  {
    id: random(1, 1000),
    difficultyLevel: 4,
    question: "¿De qué nacionalidad era Juana de Arco?",
    category: "history",
    rightResponse: "Francesa",
    responses: ["Inglesa", "Italiana", "Francesa", "Mexicana"]
  },
  {
    id: random(1, 1000),
    difficultyLevel: 4,
    question: "¿Quién dibujo al famoso Hombre de Vitruvio?",
    category: "history",
    rightResponse: "Leonardo da Vinci",
    responses: [ "Miguel Angel","Leonardo da Vinci","Rubens", "Pablo Picas"]
  },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 4,
  //   question: "¿Qué famoso filósofo fue maestro de Alejandro Magno durante cinco años?",
  //   category: "history",
  //   rightResponse: "Aristóteles",
  //   responses: ["Sócrates","Aristóteles","Platón", "Heraclito"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 4,
  //   question: "¿Quién fue el último zar de Rusia?",
  //   category: "history",
  //   rightResponse: "Nicolas II",
  //   responses: [ "Nicolas II", "Pedro I el Grande", "Alejandro II", "Ana"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 4,
  //   question: "¿Qué inició la Segunda Guerra Mundial?",
  //   category: "history",
  //   rightResponse: "Alemania invadió Polonia",
  //   responses: ["Alemania invadió Polonia", "El asesinato del archiduque Francisco Fernando",
  //   "Hitler invadió Austria", "Alemania invadió rusia"]
  // },
  /*------------------------Science----------*/
  {
    id: random(1, 1000),
    difficultyLevel: 5,
    question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    category: "science",
    rightResponse: "Célula",
    responses: ["Tejido", "Particula", "Célula", "Calcio"]
  },
  {
    id: random(1, 1000),
    difficultyLevel: 5,
    question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    category: "science",
    rightResponse: "Célula",
    responses: ["Tejido", "Particula", "Célula", "Calcio"]
  },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 5,
  //   question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
  //   category: "science",
  //   rightResponse: "Célula",
  //   responses: ["Tejido", "Particula", "Célula", "Calcio"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 5,
  //   question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
  //   category: "science",
  //   rightResponse: "Célula",
  //   responses: ["Tejido", "Particula", "Célula", "Calcio"]
  // },
  // {
  //   id: random(1, 1000),
  //   difficultyLevel: 5,
  //   question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
  //   category: "science",
  //   rightResponse: "Célula",
  //   responses: ["Tejido", "Particula", "Célula", "Calcio"]
  // },
]