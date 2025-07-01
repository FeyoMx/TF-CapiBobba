🥤 Tarjeta de Fidelidad Digital CapiBobba
Este proyecto es una Tarjeta de Fidelidad Digital diseñada para CapiBobba, una tienda de bebidas de tapioca, con el objetivo de aumentar la retención y el engagement de los clientes a través de un sistema de recompensas transparente y fácil de usar.
La tarjeta está diseñada para ser generada y enviada como una imagen a los clientes después de cada compra, mostrando su progreso en el programa de fidelización. Además, está implementada como una Aplicación Web Progresiva (PWA) para una experiencia de usuario fluida y accesible.
✨ Características
 * Diseño Responsive: Se adapta perfectamente a dispositivos móviles y de escritorio.
 * Estilo de Marca CapiBobba: Utiliza la paleta de colores, la tipografía (Poppins) y el logo de CapiBobba para una identidad visual cohesiva.
 * Logo como Marca de Agua: El logo de CapiBobba aparece sutilmente como una marca de agua en el fondo de la tarjeta, reforzando la marca sin distraer.
 * Programa de Recompensa Claro: "¡En tu sexta compra recibe una boba GRATIS! Cada compra te da un sello."
 * Sistema de Sellos Digitales:
   * Muestra visualmente el progreso de las compras del cliente (hasta 6 sellos).
   * El sello de recompensa final ("Boba Gratis 🧋") tiene una forma de píldora alargada con doble espaciado y una animación de pulso cuando se ha ganado la recompensa.
 * Identificación del Cliente: Permite mostrar el nombre o ID del cliente en la tarjeta para una personalización instantánea.
 * Fecha de Validez: Muestra claramente la fecha de caducidad de la promoción (fijada al 31 de julio del año actual).
 * Panel de Control (Solo para Staff): Un panel ocultable en la parte inferior permite al personal establecer el número de sellos y la identidad del cliente para generar la imagen de la tarjeta.
 * Capacidades PWA:
   * Instalable: Los usuarios pueden añadir la tarjeta a su pantalla de inicio como una aplicación nativa.
   * Soporte Offline: Funciona incluso sin conexión a internet (una vez instalada y con los recursos en caché).
   * Experiencia Inmersiva: Se abre en modo de pantalla completa sin la barra de direcciones del navegador.
🛠️ Tecnologías Utilizadas
 * HTML5: Estructura de la tarjeta.
 * CSS3 (Tailwind CSS): Estilos y diseño responsivo.
 * JavaScript: Lógica para el sistema de sellos, actualización de datos y funcionalidad del panel de control.
 * Web App Manifest (manifest.json): Configuración para la PWA.
 * Service Worker (service-worker.js): Gestión del caché para el soporte offline y la instalación de la PWA.
🚀 Cómo Usar (Para el Personal de CapiBobba)
 * Accede a la PWA: Abre la URL de la tarjeta de fidelidad en tu dispositivo móvil (por ejemplo, https://feyomx.github.io/TF-CapiBobba/).
 * Instala la PWA: Si tu navegador lo permite, verás una opción para "Añadir a la pantalla de inicio" o "Instalar aplicación". Haz clic en ella para una experiencia más rápida y sin la barra del navegador.
 * Usa el Panel de Control:
   * En la parte inferior de la pantalla, verás un panel con campos para "Cliente" y "Sellos".
   * Introduce el nombre o ID del cliente en el campo "Cliente".
   * Introduce el número de sellos que el cliente ha acumulado en el campo "Sellos" (de 0 a 7, donde 7 es la boba gratis).
   * Haz clic en "Actualizar Tarjeta" para que la tarjeta muestre el progreso correspondiente.
 * Toma la Captura de Pantalla:
   * Haz clic en el botón "Ocultar Controles" para que el panel inferior desaparezca de la vista.
   * Ahora, la tarjeta estará limpia y ajustada a la pantalla, lista para que tomes una captura de pantalla y la envíes al cliente.
   * Para volver a mostrar los controles, simplemente desliza la pantalla hacia abajo o recarga la página.
🌐 Despliegue
La tarjeta de fidelidad está desplegada y accesible a través de GitHub Pages en el siguiente enlace:
https://feyomx.github.io/TF-CapiBobba/
💡 Posibles Mejoras Futuras
 * Persistencia de Datos Centralizada: Implementar una base de datos (ej. Firebase Firestore) para almacenar el progreso de los sellos de cada cliente de forma segura y persistente, permitiendo que el cliente vea su progreso desde cualquier dispositivo.
 * Sistema de Autenticación: Permitir que los clientes se registren o inicien sesión para acceder a su tarjeta personalizada.
 * Notificaciones Push: Enviar notificaciones a los clientes cuando ganen una recompensa o cuando la promoción esté a punto de caducar.
 * Integración con POS: Conectar el sistema de sellos con el sistema de punto de venta de CapiBobba para un registro automático de las compras.

