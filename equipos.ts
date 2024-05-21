import { Estadio } from "./estadio";
import { Jugador } from "./jugador";


export interface Equipo {
    id: number;
    nombre: string;
    tipo: 'Futbol' | 'Basket' | 'Beisbol';
    ciudad: string;
    colores: ('Blanco' | 'Rojo' | 'Verde' | 'Negro' | 'Azul' | 'Naranja');
    estadio: Estadio;
    jugadores: Jugador[];
  }

  export interface CrearEquipo{
    id: number;
    nombre: string;
    tipo: 'Futbol' | 'Basket' | 'Beisbol';
    ciudad: string;
    colores: ('Blanco' | 'Rojo' | 'Verde' | 'Negro' | 'Azul' | 'Naranja');
    estadio: Estadio;
    jugadores: Jugador[];
  }