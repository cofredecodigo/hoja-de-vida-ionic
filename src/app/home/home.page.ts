import { Component, inject } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  briefcaseOutline,
  callOutline,
  checkmarkCircleOutline,
  constructOutline,
  languageOutline,
  locationOutline,
  logoLinkedin,
  mailOutline,
  peopleOutline,
  personOutline,
  schoolOutline,
} from 'ionicons/icons';

import type { HojaDeVida } from '../models/hoja-de-vida.model';
import { HojaDeVidaService } from '../services/hoja-de-vida.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  private readonly hojaDeVidaService = inject(HojaDeVidaService);

  datos: HojaDeVida = this.hojaDeVidaService.obtenerHojaDeVida();

  constructor() {
    addIcons({
      briefcaseOutline,
      callOutline,
      checkmarkCircleOutline,
      constructOutline,
      languageOutline,
      locationOutline,
      logoLinkedin,
      mailOutline,
      peopleOutline,
      personOutline,
      schoolOutline,
    });
  }

  get iniciales(): string {
    return this.datos.nombre
      .split(' ')
      .filter((palabra) => palabra.length > 0)
      .slice(0, 2)
      .map((palabra) => palabra[0].toUpperCase())
      .join('');
  }

  contactar(): void {
    window.location.href = `mailto:${this.datos.correo}`;
  }
}
