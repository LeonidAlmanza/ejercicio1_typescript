import { equipos } from "./equipoDeFutbol";
import { CrearEquipo } from "./equipos";
import { Estadio } from "./estadio";
import { Jugador } from "./jugador";


class Equipo {
    public id: number;
    public nombre: string;
    public tipo: 'Futbol' | 'Basket' | 'Beisbol';
    public ciudad: string;
    public colores: ('Blanco' | 'Rojo' | 'Verde' | 'Negro' | 'Azul' | 'Naranja');
    public estadio: Estadio;
    public jugadores:Jugador[];

    constructor({id, nombre, tipo, ciudad, colores, estadio ,jugadores}:CrearEquipo){
        this.id         =   id;
        this.nombre     =   nombre;
        this.tipo       =   tipo;
        this.ciudad     =   ciudad;
        this.colores     =   colores;
        this.estadio    =   estadio;
        this.jugadores  =   jugadores;
    }

} 


let estadio1 : Estadio={id:1,nombre:"Metropolitano",capacidad:50000};
let estadio2 : Estadio={id:2,nombre:"El campin",capacidad:30000};
let estadio3 : Estadio={id:3,nombre:"Pascual Guerrero",capacidad:35000};
let estadio4 : Estadio={id:4,nombre:"Palo Grande",capacidad:25000};

const jugador1 : Jugador = {id:1, nombre:"Rene Higuita",  edad:20,  posición:"GK" };
const jugador2 : Jugador = { id:2, nombre:"Andres Escobar", edad:30, posición:"DFC"};
const jugador3 : Jugador = { id:3, nombre:"Mario Alberto Yepez", edad:20, posición:"DFC"};
const jugador4 : Jugador = { id:4, nombre:"Wilson Perez", edad:25, posición:"DFR"};
const jugador5 : Jugador = { id:5, nombre:"Jaider Palacios", edad:35, posición:"DFL"};                             
const jugador6 : Jugador = { id:6, nombre:"Freddy Rincon", edad:20, posición:"MC"};                             
const jugador7 : Jugador = { id:7, nombre:"Leonel Alvarez", edad:20, posición:"MC"};
const jugador8 : Jugador = { id:8, nombre:"Radamel Falcao Garcia", edad:20, posición:"MC"};                             
const jugador9 : Jugador = { id:9, nombre:"Luiz Diaz", edad:20, posición:"DC"};
const jugador10 : Jugador = { id:10, nombre:"Carlos Valerrama", edad:20, posición:"DFC"};
const jugador11 : Jugador = { id:11, nombre:"Faustino Asprilla", edad:20, posición:"DC"};
const jugador12 : Jugador = { id:12, nombre:"Ivan Valenciano", edad:20, posición:"DC"};

const arrJugadores1 = [jugador1, jugador2, jugador3, jugador4, jugador5];
const arrJugadores2 = [jugador6, jugador7, jugador8, jugador9, jugador10];
const arrJugadores3 = [jugador11, jugador12];


console.log(arrJugadores1);
console.log(arrJugadores2);
console.log(arrJugadores3);

let Equipo1 = new Equipo({id:1, nombre:'Colombia',ciudad:'Barranquilla', estadio:estadio1, jugadores:arrJugadores1,tipo:'Futbol', colores:'Azul' })
let Equipo2 = new Equipo({id:2, nombre:'Argentina',ciudad:'Barranquilla', estadio:estadio2, jugadores:arrJugadores2,tipo:'Futbol', colores:'Azul' })
let Equipo3 = new Equipo({id:3, nombre:'Brazil',ciudad:'Barranquilla', estadio:estadio3, jugadores:arrJugadores3,tipo:'Futbol', colores:'Azul' })
let Equipo4 = new Equipo({id:4, nombre:'Uruguay',ciudad:'Barranquilla', estadio:estadio4, jugadores:arrJugadores1,tipo:'Futbol', colores:'Azul' })


let EquiposArr = [Equipo1,Equipo2, Equipo3,Equipo4  ];
console.log(EquiposArr);


function filter<T>(vehicles: T[], property: keyof T, value: T[keyof T]): T[]{
    return vehicles.filter((vehicle)=> vehicle[property] === value);
  }

let propiedad:keyof Equipo  = "estadio"  ;
let valorBuscado:number = 1;

const resultado = filter(EquiposArr, propiedad, valorBuscado)

console.log("Resultado Final")
console.log(resultado);