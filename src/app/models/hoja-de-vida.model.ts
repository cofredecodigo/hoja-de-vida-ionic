export interface Estudio {
  titulo: string;
  institucion: string;
  fechas: string;
  detalle: string;
}

export interface Experiencia {
  cargo: string;
  empresa: string;
  fechas: string;
  descripcion: string;
}

export interface Idioma {
  nombre: string;
  nivel: string;
}

export interface HojaDeVida {
  nombre: string;
  profesion: string;
  foto: string;
  perfil: string;
  correo: string;
  telefono: string;
  ciudad: string;
  linkedin: string;
  estudios: Estudio[];
  experiencias: Experiencia[];
  habilidadesTecnicas: string[];
  habilidadesBlandas: string[];
  idiomas: Idioma[];
  disponibilidad: string;
  modalidad: string;
  referencias: string;
}
