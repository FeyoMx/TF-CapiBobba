# Proyecto: Tarjeta de Fidelidad Digital CapiBobba

## Descripción General
Aplicación Web Progresiva (PWA) diseñada como sistema de tarjeta de fidelidad digital para CapiBobba, una tienda de bebidas de tapioca. El sistema permite generar tarjetas visuales personalizadas que muestran el progreso del cliente en el programa de recompensas.

## Objetivo del Negocio
Aumentar la retención y el engagement de clientes a través de un sistema de recompensas transparente y fácil de usar. La promoción ofrece una bebida gratis en la sexta compra.

## Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Estilos**: Tailwind CSS (vía CDN)
- **Tipografía**: Google Fonts (Poppins)
- **PWA**: Web App Manifest + Service Worker
- **Hosting**: GitHub Pages

### Estructura de Archivos
```
TF-CapiBobba/
├── index.html          # Aplicación principal con UI de tarjeta
├── manifest.json       # Configuración PWA
├── service-worker.js   # Gestión de caché offline
└── README.md          # Documentación
```

## Características Principales

### 1. Sistema de Sellos Digitales
- **Capacidad**: 6 sellos de compra + 1 sello de recompensa
- **Visualización**: Círculos numerados (1-6) + píldora alargada para recompensa
- **Estados**: Vacío (borde punteado gris) / Lleno (fondo morado con efecto glow)
- **Animación**: Efecto pulse en el sello de recompensa cuando se gana

### 2. Identidad Visual
- **Paleta de colores**:
  - Morado primario: `#8b5cf6`
  - Morado claro: `#a78bfa`
  - Rosa/Morado fondo: `#f6e6f6`
- **Logo**: Marca de agua al 5% de opacidad centrada
- **Diseño**: Responsive con breakpoints móvil/desktop

### 3. Funcionalidades PWA
- ✅ Instalable en pantalla de inicio
- ✅ Modo standalone (sin barra del navegador)
- ✅ Soporte offline mediante caché
- ✅ Estrategia cache-first para recursos estáticos
- ✅ Orientación portrait

### 4. Panel de Control (Personal)
- **Ubicación**: Panel fijo en la parte inferior
- **Controles**:
  - Input de texto para nombre/ID del cliente
  - Input numérico para cantidad de sellos (0-7)
  - Botón "Actualizar Tarjeta"
  - Botón "Ocultar Controles"
- **Uso**: Permite generar tarjetas personalizadas para captura de pantalla

## Flujo de Uso

### Para el Personal de CapiBobba
1. Acceder a la PWA desde móvil (https://feyomx.github.io/TF-CapiBobba/)
2. Opcional: Instalar la app en la pantalla de inicio
3. Ingresar nombre/ID del cliente en el panel de control
4. Establecer el número de sellos acumulados (0-7)
5. Hacer clic en "Actualizar Tarjeta"
6. Ocultar controles con el botón correspondiente
7. Tomar captura de pantalla de la tarjeta limpia
8. Enviar la imagen al cliente

### Para el Cliente
- Recibe la tarjeta personalizada como imagen
- Visualiza su progreso en el programa
- Identifica cuántas compras faltan para la recompensa

## Detalles de Implementación

### Gestión de Estado
- No hay persistencia de datos (por diseño)
- Estado local mediante inputs del DOM
- Renderizado reactivo con `renderStamps(stampsCollected, clientName)`

### Sistema de Validación
- Fecha de expiración fija: 30 de septiembre de 2025
- Validación de inputs: Min 0, Max 7 sellos
- Formato de fecha: `toLocaleDateString('es-ES')`

### Caché Strategy (Service Worker)
```javascript
CACHE_NAME: 'capibobba-loyalty-card-v1'
Recursos cacheados:
- index.html, manifest.json
- Logo de marca de agua
- Íconos PWA (placeholder)
- Tailwind CSS CDN
- Google Fonts (Poppins)
```

### Responsive Design
- Desktop: Max width 450px, centrado
- Mobile (< 640px):
  - Grid 3 columnas (vs 6 en desktop)
  - Sellos 45x45px (vs 50x50px)
  - Sello recompensa 130x40px (vs 150x45px)

## Configuración PWA

### Manifest.json
```json
{
  "name": "CapiBobba Fidelidad",
  "short_name": "CapiBobba",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#8b5cf6",
  "background_color": "#f6e6f6"
}
```

### Service Worker
- Evento `install`: Precaché de recursos
- Evento `activate`: Limpieza de cachés antiguos
- Evento `fetch`: Cache-first, network fallback

## Roadmap Futuro

### Mejoras Técnicas Propuestas
1. **Persistencia de Datos**
   - Integración con Firebase Firestore
   - Sincronización multi-dispositivo
   - Historial de transacciones

2. **Autenticación**
   - Sistema de login para clientes
   - Perfiles de usuario personalizados

3. **Notificaciones**
   - Push notifications al ganar recompensa
   - Alertas de expiración de promoción

4. **Integración POS**
   - Conexión con sistema de punto de venta
   - Registro automático de compras
   - QR codes para redención

5. **Analytics**
   - Tracking de uso de recompensas
   - Métricas de retención de clientes
   - Dashboard administrativo

## Consideraciones de Seguridad
- No se almacenan datos sensibles del cliente
- Sin procesamiento de pagos
- Recursos externos (CDN) con HTTPS
- CORS configurado para GitHub Pages

## Deployment
- **Plataforma**: GitHub Pages
- **URL**: https://feyomx.github.io/TF-CapiBobba/
- **Branch**: main
- **Auto-deploy**: Habilitado via GitHub Actions

## Mantenimiento
- Actualizar fecha de expiración manualmente en `index.html:283`
- Incrementar versión de caché en `service-worker.js:1` al hacer cambios
- Probar PWA en Chrome DevTools > Application

## Limitaciones Actuales
- No hay backend (solo frontend)
- No hay persistencia de datos
- Requiere intervención manual del staff
- Dependencia de CDNs externos para offline
- Íconos PWA son placeholders (no logo real)

## Compatibilidad
- ✅ Chrome/Edge (Android/Desktop)
- ✅ Safari (iOS/macOS)
- ✅ Firefox (limitado soporte PWA)
- ⚠️ Requiere HTTPS o localhost para PWA

## Métricas de Éxito (Propuestas)
- Tasa de instalación de la PWA
- Número de tarjetas generadas por día
- Tasa de redención de recompensas
- Tiempo promedio entre visitas de clientes recurrentes
