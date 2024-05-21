import { Equipo } from "./equipos";

export const equipos: Equipo[] = [
    {
        id: 1,
        nombre: 'Equipo A',
        tipo: 'Futbol',
        ciudad: 'Ciudad A',
        colores: ['Blanco', 'Rojo'],
        estadio: {
            id: 1,
            nombre: 'Estadio A',
            capacidad: 50000
        },
        jugadores: [
            { id: 1, nombre: 'Jugador 1', edad: 25, posición: 'GK' },
            { id: 2, nombre: 'Jugador 2', edad: 28, posición: 'DC' }
        ]
    },
    {
        id: 2,
        nombre: 'Equipo B',
        tipo: 'Basket',
        ciudad: 'Ciudad B',
        colores: ['Verde', 'Negro'],
        estadio: {
            id: 2,
            nombre: 'Estadio B',
            capacidad: 20000
        },
        jugadores: [
            { id: 3, nombre: 'Jugador 3', edad: 30, posición: 'DFC' },
            { id: 4, nombre: 'Jugador 4', edad: 22, posición: 'MCO' }
        ]
    }
];
