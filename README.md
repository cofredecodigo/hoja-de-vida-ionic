# Hoja de Vida · Ionic + Angular

Aplicación móvil de una sola pantalla que muestra una hoja de vida: perfil, contacto, educación,
experiencia, habilidades, idiomas e información adicional. Está hecha con Ionic y Angular, y
Capacitor la empaqueta como app de Android (APK).

- **Autor:** Luis Felipe Saldarriaga Chavarro
- **Curso:** Programación de Dispositivos Móviles · Unidad 4: Capacitor y Android Studio

## Tecnologías

| Herramienta | Versión |
| --- | --- |
| Node.js | 24 |
| Ionic CLI | 7.2 |
| Ionic Framework | 9 |
| Angular | 22 (componentes standalone) |
| Capacitor | 8.6 |
| Gradle | 9.1 |
| Android | 7.0 o superior (minSdk 24) |

## Estructura

| Archivo | Qué contiene |
| --- | --- |
| `src/app/services/hoja-de-vida.service.ts` | Los datos de la hoja de vida (aquí se editan) |
| `src/app/models/hoja-de-vida.model.ts` | La forma de los datos (interfaces) |
| `src/app/home/home.page.ts` | La lógica de la pantalla: pide los datos al servicio |
| `src/app/home/home.page.html` | La vista (plantilla) con los componentes de Ionic |
| `src/app/home/home.page.scss` | Los estilos de la pantalla |
| `src/app/app.routes.ts` | Las rutas (carga diferida de la página) |
| `src/main.ts` | El arranque de la aplicación |
| `src/theme/variables.scss` | El color principal de la app |
| `capacitor.config.ts` | El nombre y el identificador de la app en Android |
| `android/` | El proyecto nativo de Android que genera Capacitor |

## Instalación y ejecución

Requisitos: Node.js, Ionic CLI (`npm install -g @ionic/cli`) y Android Studio.

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Ver la app en el navegador (se recarga sola al guardar):

   ```bash
   ionic serve
   ```

## Generar el APK

1. Compilar la app web en la carpeta `www`:

   ```bash
   ionic build
   ```

2. Copiar la app web al proyecto Android:

   ```bash
   npx cap sync android
   ```

3. Abrir el proyecto en Android Studio:

   ```bash
   npx cap open android
   ```

4. En Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
   En versiones nuevas el menú se llama **Build → Generate App Bundles or APKs → Generate APKs**.

5. El APK queda en `android/app/build/outputs/apk/debug/app-debug.apk`.

## Instalar en el teléfono

1. Pasar `app-debug.apk` al teléfono (cable USB, Drive o correo).
2. Abrir el archivo en el teléfono y permitir **Instalar apps desconocidas** para la app que lo abre.
3. Si aparece Google Play Protect, elegir **Instalar de todos modos**: es un APK de prueba sin firmar para la tienda.

## Comandos utilizados para crear el proyecto

```bash
ionic start "Hoja de Vida" blank --type=angular-standalone --capacitor --project-id=hoja-de-vida-ionic --package-id=com.universidad.hojadevida
npm install -E @capacitor/android@8.6.0
npm uninstall @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar
ionic build
npx cap add android
npx cap sync android
```

Además, en `android/gradle/wrapper/gradle-wrapper.properties` se subió Gradle de 8.14.3 a 9.1.0,
porque la 8.14.3 no funciona con el Java 25 que trae Android Studio.
