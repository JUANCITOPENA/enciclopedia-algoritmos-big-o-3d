# 🏛️ ESTATUS Y CHECKPOINT MAESTRO DEL PROYECTO
> **ALGO-MATRIX 3D: Enciclopedia & Laboratorio Interactivo de Algoritmos y Big-O**  
> **Fuente Única de Verdad (Single Source of Truth) para Continuidad Inmediata entre Sesiones de IA**  
> **Lead Architect & Docente:** Ing. Juancito Peña Vizcaíno  
> **Ubicación Raíz:** `C:\Users\User\Desktop\La Enciclopedia Interactiva de Algoritmos & Big-O`  
> **Fecha de Actualización:** 30 de Octubre de 2026  
> **Versión:** v2.5.1-PRO (GIF Panorámico 100% Ancho & Zero-Scroll Preservado)  
> **Despliegue Oficial en GitHub Pages:** [https://juancitopena.github.io/enciclopedia-algoritmos-big-o-3d/](https://juancitopena.github.io/enciclopedia-algoritmos-big-o-3d/)

---

## 📌 1. PROPÓSITO DE ESTE DOCUMENTO
Este archivo permite que cualquier agente de Inteligencia Artificial (Antigravity CLI / IDE / Gemini) retome el proyecto de forma **instantánea y sin pérdida de contexto**, sin necesidad de volver a leer ni mapear los miles de líneas de código desde cero cuando ocurra un reinicio de sesión, rotación de modelo o interrupción por tokens.

---

## 🗺️ 2. MAPA MAESTRO DEL PROYECTO (ESTRUCTURA DE ARCHIVOS)

```
C:\Users\User\Desktop\La Enciclopedia Interactiva de Algoritmos & Big-O\
│
├── 📄 index.html                       # Documento principal (996 líneas), maquetación semántica, CDNs, UI Neo-Brutalista y Modal Panorámico
├── ⚡ script.js                         # Motor de simulación (Three.js 3D + 2D), catálogo de 21 algoritmos, BIG_O_CATALOG y motor TTS
├── 🎨 style.css                         # Estilos Neo-Brutalistas, reglas de contraste WCAG 2.2 AAA, animaciones y clases para modal panorámico
├── 📖 README.md                         # Documentación pública y técnica de la plataforma
├── 🏛️ ESTATUS_PROYECTO_CHECKPOINT.md     # ESTE ARCHIVO: Punto de restauración y memoria técnica viva
├── 📄 LICENSE                           # Licencia de código abierto MIT
├── 📄 .gitignore                        # Reglas de exclusión de git
├── 📄 prueba.psc                        # Algoritmo de prueba en PSeInt
│
├── 📁 assets/                           # Catálogo de 50 animaciones GIF y recursos gráficos
│   ├── 🖼️ LOGO_DATAIADEV.png           # Logo oficial de DataIADev
│   ├── 📖 CATALOGO_ALGORITMOS.md        # Tabla formal de correspondencia de nombres español / internacional
│   ├── 🎬 *.gif (50 archivos)          # Animaciones para Bubble, Merge, Quick, Binary Search, BFS, DFS, Dijkstra, Backtracking, etc.
│
├── 📁 .backup/                          # Puntos de restauración locales seguros (Aislamiento Sandbox)
│   ├── index.html.pre_panoramic_modal.bak
│   ├── script.js.pre_panoramic_modal.bak
│   ├── index.html.pre_bigo_modal.bak
│   ├── script.js.pre_bigo_modal.bak
│   └── style.css.pre_bigo_modal.bak
│
└── 📁 js/ & css/                        # Módulos auxiliares de respaldo y configuración previa
    ├── js/tailwind-config.js
    ├── js/app.js
    └── css/styles.css
```

---

## ⚙️ 3. STACK TECNOLÓGICO Y DEPENDENCIAS ACTIVAS
* **Framework CSS:** Tailwind CSS (vía CDN Oficial) con tema extendido Neo-Brutalista (`neoYellow: #FFDE59`, `neoCyan: #38E5FF`, `neoGreen: #54F18F`, `neoPink: #FF90E8`, `neoOrange: #FF7A00`, `neoRed: #FF5757`, `neoCream: #FFFDF0`, `neoDark: #0A0A0A`).
* **Iconografía:** FontAwesome 6.4.0 (CDN) + Bootstrap Icons 1.11.3 (CDN).
* **Motor 3D Espacial:** Three.js r128 + OrbitControls para manipulación de cámara orbital y rotación física en WebGL.
* **Tipografías Google Fonts:** `Space Grotesk` (encabezados, pesos 700/900) y `JetBrains Mono` (código y métricas, pesos 500/700/800).
* **Motor de Narración de Voz:** Web Speech API nativa (`window.speechSynthesis` y `SpeechSynthesisUtterance`) en español (`es-ES`), con selección automática de voz natural y soporte de control de volumen en vivo.

---

## 🧩 4. COMPONENTES Y MÓDULOS DE LA APLICACIÓN

### 1. Barra de Navegación Sticky (`#inicio`)
- Logo oficial de DataIADev, insignia `ALGO-MATRIX 3D`, menú hamburguesa móvil y anclas directas: `#inicio`, `#fundamentos-teoria`, `#panel-dataset`, `#laboratorio-algoritmos`, `#matriz-comparativa`, `#perfil-profesional`.
- Botón rápido de acción: `Simular` (`togglePlayPause()`).

### 2. Fundamentos Magistrales & Semáforo Big-O (`#fundamentos-teoria`)
- 4 Pilares teóricos en tarjetas Neo-Brutalistas:
  1. **¿Qué es un Algoritmo?:** Finitud, precisión y eficacia.
  2. **Complejidad Algorítmica (Big-O):** Costo asintótico, temporal ($T$), espacial ($S$), peor caso ($\mathcal{O}$).
  3. **Algoritmos de Ordenamiento:** Comparativos vs No Comparativos, estabilidad.
  4. **Algoritmos de Búsqueda:** Secuencial, Bisección, Estimativa.
- **Semáforo Interactivo de 6 Clases de Complejidad:**
  - `O(1)`: Verde (`bg-neoGreen`), Tiempo Constante.
  - `O(log n)`: Cian (`bg-neoCyan`), Tiempo Logarítmico.
  - `O(n)`: Amarillo (`bg-neoYellow`), Tiempo Lineal.
  - `O(n log n)`: Púrpura (`bg-[#C084FC]`), Tiempo Linealítmico.
  - `O(n²)`: Naranja (`bg-neoOrange`), Tiempo Cuadrático.
  - `O(2ⁿ)` / `O(n!)`: Rojo (`bg-neoRed`), Tiempo Exponencial y Factorial.
  - *Cada tarjeta ejecuta `onclick="openBigOModal('...')"` para abrir la ficha panorámica y activar la voz narrada.*

### 3. Consola del Dataset ($n$) & Parámetros (`#panel-dataset`)
- Selección de tipo de datos: `123 Números`, `ABC Letras`, `📦 Objetos (Peso/ID)`, `🎨 Gráficos Arcoíris`.
- Presets instantáneos: `Aleatorio`, `Ordenado`, `Invertido`, `Casi Ordenado`.
- Entrada manual de arreglos (`#dataInputBox`) con contador dinámico de elementos ($n$).
- Selector de Target para búsquedas (`#targetValueInput`) con botón aleatorio (`#pickRandomTarget`).
- Control de velocidad cinemática en milisegundos (`#animSpeedSlider`, rango 20ms a 600ms).

### 4. Laboratorio & Hub de 21 Algoritmos (`#laboratorio-algoritmos`)
- Filtros por pestañas: `Todos (21)`, `⚡ Ordenamientos (9)`, `🔍 Búsquedas (6)`, `📐 Clases Big-O Puras (6)`.
- Grid responsivo dinámico inyectado desde `ALGORITHMS_CATALOG` en `script.js`.
- **9 Algoritmos de Ordenamiento:** Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Shell Sort, Counting Sort, Radix Sort.
- **6 Algoritmos de Búsqueda:** Linear Search, Binary Search, BFS (Anchura), DFS (Profundidad), Dijkstra (Camino Mínimo), A* (A-Star).
- **6 Demostraciones de Complejidad Pura:** Constante O(1), Logarítmica O(log n), Lineal O(n), Linealítmica O(n log n), Cuadrática O(n²), Exponencial O(2ⁿ).

### 5. Arena Dual: 2D y 3D en Paralelo
- **Columna Izquierda (Arena 2D + Monitor en Vivo):**
  - Contenedor `#canvasViewport` adaptativo con barras de datos e indicadores de estado.
  - Monitor `#spotlightCard` con acción activa (`COMPARE`, `SWAP`, `PIVOT`, `DONE`), icono reactivo y textos dinámicos.
  - Historial fijo de los últimos 3 eventos procesados (`#liveStepHistory`) sin scrollbars.
  - Controles de reproducción: `Ejecutar / Pausar`, `Paso a Paso` y `Reiniciar`.
- **Columna Derecha (Cinemática Espacial 3D + Visor de Código):**
  - Lienzo WebGL Three.js (`#threeContainer`) con renderizado de barras tridimensionales y traslación en arco cinemático durante los swaps.
  - Leyenda 3D: Normal (Cian), Comparación (Amarillo), Swap/Arco (Rosa), Fijado (Verde).
  - Visor de código fuente canónico (`#codePreview`) con sintaxis completa en JavaScript visible vertical y horizontalmente.

### 6. HUD de Métricas de Hardware & Matriz Comparativa General
- 6 Métricas en tiempo real: Tiempo CPU (`performance.now()`), Comparaciones realizadas, Swaps/Intercambios, Accesos a Memoria (lectura/escritura), Espacio Auxiliar ($S$) y Grado de Escalabilidad.
- Tabla `#matrixTableBody` calculada dinámicamente en tiempo real para el tamaño $n$ activo.

### 7. Perfil Profesional del Autor & Footer Oficial JPV (`#perfil-profesional`)
- Ficha canónica del **Ing. Juancito Peña Vizcaíno**: Foto circular con borde y sombra dura, badges de rol (`Data Analyst`, `Full Stack Dev`, `AI & API Expert`, `Líder I+D+i`), trayectoria académica (O&M, Maestría y Postgrado), filosofía I+D+i y rol docente.
- Ecosistema tecnológico agrupado con iconos Devicon: Frontend, Backend/Móvil, Datos/Analítica, IA/APIs/Vercel.
- Enlaces oficiales: LinkedIn, canal educativo de YouTube **@JuancitoDevV**, GitHub, Twitter/X y correo directo.
- Pie de página institucional oficial Neo-Brutalista.

---

## 🪟 5. MODAL UNIVERSAL PANORÁMICO BIG-O (ESTÁNDAR ZERO-SCROLL)
* **ID Contenedor Principal:** `#bigOModal`
* **Dimensiones:** `max-w-[96vw] xl:max-w-[95vw] 2xl:max-w-[1720px] h-[92vh] max-h-[94vh]`
* **Comportamiento de Scroll:** En pantallas de escritorio (`≥ 1024px`) utiliza `lg:overflow-hidden` con un Bento Grid de 3 columnas paralelas. **Cero scroll vertical en monitores de escritorio**. En móviles conmuta a `overflow-y-auto`.

### Anatomía Interna (3 Columnas Paralelas de 4 cols cada una):
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ MODAL HEADER: Icono + Título + Badge + Subtítulo                      [✕ Cerrar (Esc)] │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ AUDIO TOOLBAR: [▶ Escuchar] [⏸ Pausar] [▶ Reanudar] [⏹ Detener] [● Narrando...]  Vol: [-] [===] [+] 100% │
├──────────────────────────┬─────────────────────────────┬───────────────────────────────┤
│ COLUMNA 1 (Teoría Pura)  │ COLUMNA 2 (Visual & GIF)    │ COLUMNA 3 (Código & Usos)     │
│ • Fundamento Formal      │ • Marco Animado .GIF Oficial│ • Código Modelo Canónico      │
│ • Cinemática T(n)        │ • Pie Descriptivo del GIF   │ • Explicación de Sintaxis     │
│ • Tabla Crecimiento N    │ • Badges Algoritmos Grupo   │ • Usos en Arquitectura Real   │
│ • Semáforo Viabilidad    │                             │ • Regla de Oro de Ingeniería  │
├──────────────────────────┴─────────────────────────────┴───────────────────────────────┤
│ MODAL FOOTER: Identidad Oficial ALGO-MATRIX 3D · Ing. Juancito Peña  [✔ Entendido, Cerrar] │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Lista de IDs Críticos del Modal:
`bigOModal`, `modalBigOHeader`, `modalBigOIcon`, `modalBigOTitle`, `modalBigOBadge`, `modalBigOSubtitle`, `modalBigODefinition`, `modalBigOKinetic`, `modalBigOGrowthTable`, `modalBigOViabilityBox`, `modalBigOViabilityIcon`, `modalBigOViabilityTitle`, `modalBigOViabilityDesc`, `modalBigOGifImg`, `modalBigOGifCaption`, `modalBigOAlgList`, `modalBigOCodeType`, `modalBigOCode`, `modalBigOCodeExplanation`, `modalBigOUsesList`, `modalBigOGoldenRule`, `btnBigOPlay`, `btnBigOPause`, `btnBigOResume`, `btnBigOStop`, `bigOStatusBadge`, `bigOStatusText`, `bigOVolumeIcon`, `bigOVolumeSlider`, `bigOVolumeBadge`.

---

## 🎙️ 6. MOTOR DE NARRACIÓN TTS (SPEECH SYNTHESIS JPV PRO)
* Implementado en `script.js` bajo funciones globales:
  - `window.narrarBigOActual()`: Instancia `SpeechSynthesisUtterance`, selecciona voz en español natural, sincroniza eventos `onstart`, `onend`, `onerror` y activa el ecualizador verde pulsante.
  - `window.pausarNarracionBigO()`: Pausa la reproducción y actualiza el badge a *"Pausado"*.
  - `window.reanudarNarracionBigO()`: Reanuda en el milisegundo exacto.
  - `window.detenerNarracionBigO()`: Cancela la locución y restablece los botones a standby.
  - `window.setVolumenBigO(val)` y `window.cambiarVolumenBigO(delta)`: Control de volumen en vivo sincronizado con `utterance.volume`, el slider visual, el porcentaje y los microbotones `[-]`/`[+]`.
  - **Cierre Seguro:** Al presionar `Esc`, el botón `✕ Cerrar` o hacer clic fuera del modal, se dispara `detenerNarracionBigO()` de forma automática.
* **Contenido de la Narración:**
  - Cada una de las 6 complejidades en `BIG_O_CATALOG` (`O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, `O(2ⁿ)`) contiene un texto exhaustivo que explica:
    1. La definición formal matemática.
    2. La tasa y cinemática de crecimiento.
    3. **La explicación explícita de la imagen animada (.GIF) mostrada en pantalla**, detallando paso a paso qué ocurre visualmente.
    4. Los algoritmos insignia que pertenecen a la familia.
    5. Las aplicaciones prácticas en microservicios, bases de datos y la regla de oro de la ingeniería.

---

## 🛡️ 7. GOBERNANZA EMPRESARIAL Y ESTÁNDARES CUMPLIDOS
* **`contraste-wcag-aaa`**: Cumplimiento del ratio de contraste $\ge 7:1$. Cero texto blanco sobre fondos claros, cero texto oscuro sobre fondos negros.
* **`neobrutalist-ui-design-system`**: Bordes duros negros de `2.5px/3px`, sombras de bloque sólido `3px/5px/8px`, botones físicos táctiles con efecto `active: translateY(2px)`.
* **`audio-tts-narracion-jpv`**: Web Speech API nativa, sin dependencias cloud de pago ni cuotas de terceros.
* **`autor-footer-oficial-jpv`**: Ficha de autor oficial estandarizada y enlaces directos homologados.
* **Sandbox & Aislamiento:** Backups locales confinados a `.backup/`, cero copias duplicadas fuera de la raíz.

---

## 🚀 8. INSTRUCCIONES PARA RETOMAR EL TRABAJO
Si una nueva IA o sesión se inicia en este proyecto:
1. **NO vuelvas a re-leer ni mapear los archivos enteros.** Lee directamente este archivo (`ESTATUS_PROYECTO_CHECKPOINT.md`).
2. La base del código reside en `index.html` (interfaz), `script.js` (lógica y TTS) y `style.css` (estilos).
3. Todas las funciones del modal y narración están sincronizadas y probadas con Node.js (`node -c script.js`).
4. Si realizas cambios en la estructura, estilos o catálogo, **actualiza de inmediato este archivo de estatus** para mantener la cadena de custodia y continuidad del proyecto.

---

## 📝 9. BITÁCORA DE ÚLTIMOS CAMBIOS Y CHECKPOINTS REALIZADOS
* **30/10/2026 (v2.5.1-PRO) - Ampliación de Representación Animada (.GIF) al 100% de Ancho:**
  - La imagen representativa del GIF en la Columna 2 del Modal Panorámico ahora ocupa el **100% del ancho del marco contenedor** (`w-full`).
  - Blindaje anti-deformación: Se aplicó `h-auto` y `object-contain !important` en HTML y CSS (`#modalBigOGifImg`), garantizando que la relación de aspecto original nunca se distorsione ni se estire.
  - Calibración de altura: Marco del GIF calibrado a `min-h-[285px] max-h-[305px]` con altura de imagen `max-h-[265px]`, y lista de algoritmos compactada con `max-h-[80px]` para mantener estrictamente la regla de **cero scroll vertical en escritorios**.
  - Regla de renderizado `-webkit-optimize-contrast` agregada en `style.css` para máxima nitidez en pantallas de alta densidad.
  - Backup preventivo generado en `.backup/index.html.pre_gif_enlargement.bak`.
