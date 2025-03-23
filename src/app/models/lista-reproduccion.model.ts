export interface Cancion {
    titulo: string;
    artista: string;
    album: string;
    anno: number;
    genero: string;
  }
  
  export interface ListaReproduccion {
    nombre: string;
    descripcion: string;
    canciones: Cancion[];
  }
  