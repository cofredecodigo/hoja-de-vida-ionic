import { Injectable } from '@angular/core';

import type { HojaDeVida } from '../models/hoja-de-vida.model';

@Injectable({ providedIn: 'root' })
export class HojaDeVidaService {
  private readonly datos: HojaDeVida = {
    nombre: 'Luis Felipe Saldarriaga Chavarro',
    profesion: 'Estudiante de Ingeniería de Software',
    foto: '',
    perfil:
      'Estudiante de quinto semestre de Ingeniería de Software en la Universidad Surcolombiana, ' +
      'con nivel de inglés C1. Me interesa el desarrollo web y móvil, y he creado proyectos ' +
      'académicos como Finance Rank. Busco una oportunidad para aportar a un equipo de trabajo, ' +
      'seguir aprendiendo y crecer profesionalmente.',
    correo: 'luisfelipesaldarriagachavarro@gmail.com',
    telefono: '+57 324 428 5259',
    ciudad: 'Neiva, Huila, Colombia',
    linkedin: '',
    estudios: [
      {
        titulo: 'Ingeniería de Software',
        institucion: 'Universidad Surcolombiana (USCO)',
        fechas: '2024-2 - Actualidad',
        detalle: 'Cursando quinto semestre',
      },
      {
        titulo: 'Bachiller',
        institucion: 'Colegio Anglocanadiense de Neiva',
        fechas: '2022',
        detalle: 'Graduado',
      },
    ],
    experiencias: [
      {
        cargo: 'Desarrollador web (proyecto universitario)',
        empresa: 'Universidad Surcolombiana',
        fechas: 'Curso de Programación Web',
        descripcion: 'Desarrollo de Finance Rank, una página web hecha como proyecto de la clase.',
      },
    ],
    habilidadesTecnicas: [
      'HTML y CSS',
      'JavaScript y TypeScript',
      'Angular e Ionic',
      'Git y GitHub',
      'Bases de datos SQL',
      'Microsoft Excel',
    ],
    habilidadesBlandas: [
      'Trabajo en equipo',
      'Comunicación',
      'Responsabilidad',
      'Resolución de problemas',
      'Adaptabilidad',
      'Puntualidad',
    ],
    idiomas: [
      { nombre: 'Español', nivel: 'Nativo' },
      { nombre: 'Inglés', nivel: 'C1' },
    ],
    disponibilidad: 'Inmediata',
    modalidad: 'Presencial, híbrida o remota',
    referencias: 'Disponibles a solicitud',
  };

  obtenerHojaDeVida(): HojaDeVida {
    return this.datos;
  }
}
