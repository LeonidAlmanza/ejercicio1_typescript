export interface Jugador {
    id: number;
    nombre: string;
    edad: number;
    posición: 'GK' | 'DFC' | 'DFL' | 'DFR' | 'MCD' | 'MCO' | 'MC' | 'ST' | 'DC' | 'RF' | 'LF';
  }