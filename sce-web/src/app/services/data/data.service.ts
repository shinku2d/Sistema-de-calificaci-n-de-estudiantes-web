import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  estudentsList = [{
    "nombre": "Carlos Mora",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
  },
  {
    "nombre": "Angela García",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
  },
  {
    "nombre": "Cristhian Brenes",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "8"
  },
  {
    "nombre": "Luis Rodriguez",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
  },
  {
    "nombre": "Alejandra Godinez",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
  },
  {
    "nombre": "Esteban Saenz",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
  },
  {
    "nombre": "Maria Cordero",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
  },
  {
    "nombre": "Angel Vargas",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
  },
  {
    "nombre": "Pedro Escobar",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "8"
  },
  {
    "nombre": "Jaime Celeita",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9.5"
  },
  {
    "nombre": "Ileana Salas",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
  },
  {
    "nombre": "",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
  }
  ];

  coursesList = [{
    "nombre": "Programación Web",
    "profesor": "Randall Corrales",
    "año": 2019,
    "Semestre": "I"
  },
  {
    "nombre": "Análisis en cloud Computing",
    "profesor": "Jorge Chinchilla",
    "año": 2019,
    "Semestre": "II"
  },
  {
    "nombre": "Investigación de proyectos",
    "profesor": "Carlos Benavides",
    "año": 2019,
    "Semestre": "II"
  },
  {
    "nombre": "Sistemas de información distribuidos",
    "profesor": "Ana Fuentes",
    "año": 2019,
    "Semestre": "I"
  },
  {
    "nombre": "Bases de datos Web",
    "profesor": "Krissia Navarro",
    "año": 2019,
    "Semestre": "I"
  },
  {
    "nombre": "Diseño Web",
    "profesor": "Kembly Calderon",
    "año": 2019,
    "Semestre": "II"
  },
  {
    "nombre": "Analisis de Bases de datos",
    "profesor": "Jorge Mora",
    "año": 2019,
    "Semestre": "II"
  }
  ];

  constructor() { }

  getStudentList = () => {
    console.log(2);
    return this.estudentsList
  };

  getCoursesList = () => this.coursesList;
}
