# 🏛️ ESTATUS Y CHECKPOINT MAESTRO DEL PROYECTO
> **ALGO-MATRIX 3D: Enciclopedia & Laboratorio Interactivo de Algoritmos y Big-O**  
> **Fuente Única de Verdad (Single Source of Truth) para Continuidad Inmediata entre Sesiones de IA**  
> **Lead Architect & Docente:** Ing. Juancito Peña Vizcaíno  
> **Ubicación Raíz:** `C:\Users\User\Desktop\La Enciclopedia Interactiva de Algoritmos & Big-O`  
> **Fecha de Actualización:** 31 de Octubre de 2026  
> **Versión:** v3.4.0-PRO (Catálogo Multi-Lenguaje Blindado: PSeInt en Modo Estricto O&M con ';' Obligatorio, HTML5 Standalone Completo Monolítico, Python 3.12+ Tipado y C# .NET 9 con Zero-Alloc Span<T> en los 21 Algoritmos)  
> **Despliegue Oficial en GitHub Pages:** [https://juancitopena.github.io/enciclopedia-algoritmos-big-o-3d/](https://juancitopena.github.io/enciclopedia-algoritmos-big-o-3d/)

---

## 📌 1. PROPÓSITO DE ESTE DOCUMENTO
Este archivo permite que cualquier agente de Inteligencia Artificial (Antigravity CLI / IDE / Gemini) retome el proyecto de forma **instantánea y sin pérdida de contexto**, sin necesidad de volver a leer ni mapear los miles de líneas de código desde cero cuando ocurra un reinicio de sesión, rotación de modelo o interrupción por tokens.

---

## 🗺️ 2. MAPA MAESTRO DEL PROYECTO (ESTRUCTURA DE ARCHIVOS)

```
C:\Users\User\Desktop\La Enciclopedia Interactiva de Algoritmos & Big-O\
│
├── 📄 index.html                       # Documento principal (1452 líneas), Audio Toolbars, 17 Botones de Card, Navbar 100% Ancho y Drawer Responsive
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
* **31/10/2026 (v3.4.0-PRO) - Modo Estricto O&M en PSeInt & HTML5 Standalone Completo en los 21 Algoritmos:**
  - **PSeInt en Modo Estricto O&M Canónico (21/21 algoritmos):**
    * Todas las soluciones inician con `Proceso <Nombre_Proceso>` y finalizan con `FinProceso`.
    * Declaración obligatoria explícita al tope: `Definir var1, var2 Como Entero;`, `Definir flag Como Logico;`, etc.
    * Todas las líneas e instrucciones terminan obligatoriamente con punto y coma (`;`), incluyendo asignaciones (`=`), lecturas (`Leer`), escrituras (`Escribir`), llamadas a subprocesos y cierres de bloques (`FinPara;`, `FinSi;`, `FinMientras;`).
    * Uso de funciones matemáticas estrictas como `TRUNC(...)` para divisiones enteras de índices o pivotes, y `MOD` para operaciones de residuo.
  - **HTML5 / CSS / JS Standalone Completo Monolítico (21/21 algoritmos):**
    * Cada snippet web es un documento HTML5 completo y autosuficiente: comienza con `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>...</title><style>...</style></head><body>...<script>...</script></body></html>`.
    * Al hacer clic en "Copiar Código", cualquier estudiante o desarrollador puede pegar el contenido en un archivo `.html`, hacer doble clic y ejecutarlo inmediatamente en cualquier navegador web moderno sin dependencias externas ni configuración.
    * Incluye estilos Neo-Brutalistas integrados y animación fluida con `async/await` y manipulación del DOM.
  - **Python 3.12+ Tipado y C# .NET 9 LTS:**
    * Python con type hints `List[int]`, `Optional[int]` y bloque `if __name__ == '__main__':`.
    * C# con tipado fuerte, `ReadOnlySpan<T>`, `stackalloc` para asignación en stack (zero heap allocation) y benchmarks de hardware.
  - **QA & Testing Automatizado:**
    * Script de validación estricta `.backup/test_strict_om_and_html5.js`: 21/21 PSeInt Estricto O&M y 21/21 HTML5 Standalone validados con 0 errores.
    * Suite multi-lenguaje `.backup/test_multilang_system.js`: 84/84 bases de código verificadas con 0 errores.
    * Suite de simulación matricial `.backup/test_simulation_engine.js`: 336/336 combinaciones exitosas con 0 errores.
* **31/10/2026 (v3.3.0-PRO) - Laboratorio Multi-Lenguaje Canónico en 4 Lenguajes (PSeInt, Python, Web y C#), Diagramas SVG & 84/84 Suites Superadas:**
  - **4 Botones de Lenguaje en Cada Tarjeta del Grid Principal (`#algoCardsGrid`):**
    * Cada una de las tarjetas de los 21 algoritmos incorpora una botonera rápida en la base con sus badges e iconos canónicos:
      1. `[PSeInt]` (Cyan, `<i class="fa-solid fa-diagram-project"></i>`)
      2. `[Py]` (Azul Python, `<i class="fa-brands fa-python"></i>`)
      3. `[Web]` (Naranja HTML5, `<i class="fa-brands fa-html5"></i>`)
      4. `[C#]` (Púrpura .NET, `<i class="fa-solid fa-code"></i>`)
    * Al pulsar cualquiera de estos botones, se abre de forma instantánea el nuevo laboratorio enfocado en ese lenguaje exacto sin interferir con la simulación principal.
  - **Nuevo Modal Panorámico Dedicado de Pantalla Dividida (`#algoMultiLangModal`):**
    * *Columna Izquierda (Código Fuente Canónico):* Muestra el script completo y listo para producción, contador de líneas en tiempo real, badge de lenguaje, botón "Copiar Código" con feedback reactivo y tags de conceptos de arquitectura (e.g. `Span<T>`, `Tuple Unpacking`, `Zero Allocation`, `Early Exit`).
    * *Columna Derecha (Explicación Didáctica & Representación Visual Acompañante):*
      - **PSeInt:** Generador procedural de Diagramas de Flujo SVG canónicos (ISO 5807) con nodos de Inicio/Fin (óvalos esmeralda), Procesos (rectángulos), Decisiones (rombos amarillos) y flechas ortogonales con marcadores vectoriales.
      - **Python 3:** Terminal interactiva CLI oscura con la traza de ejecución paso a paso (salidas de pasadas, comparaciones y swaps formateados en tiempo real).
      - **HTML / CSS / JS:** Mini-Sandbox Web interactivo donde el algoritmo se ejecuta directamente en el DOM con barras animadas y botón *"Ejecutar Animación"*.
      - **C# .NET 9:** Tablero de Benchmark y Arquitectura de Memoria (asignación en Stackalloc 0 Bytes, residencia de caché L1/L2, target framework y complejidad).
  - **Actualización Multi-Pestaña en Modal de Simulación (`#algoSimulationModal`):**
    * La sección de código del modal de simulación ahora cuenta con 5 pestañas conmutables: `[GIF]`, `[PSeInt]`, `[Py]`, `[Web]`, `[C#]` y el botón de acceso directo `[Laboratorio Dividido]`.
  - **Módulo Independiente de Datos (`js/algo-multilang-data.js`):**
    * Archivo desacoplado de 144 KB que almacena la base de datos completa de los 21 algoritmos $\times$ 4 lenguajes (84 implementaciones completas).
  - **Doble Suite QA Automatizada (100% Éxito):**
    * Suite Multi-Lenguaje (`.backup/test_multilang_system.js`): **84/84 bases de código verificadas con 0 errores**.
    * Suite de Matriz de Simulación (`.backup/test_simulation_engine.js`): **336/336 combinaciones validadas con 0 errores**.
* **30/10/2026 (v3.2.0-PRO) - Auditoría Integral de Cinemática Algorítmica, Normalización Universal de Targets & Suite QA 336/336 Superada al 100%:**
  - **Auditoría Exhaustiva de Assets GIF & Cinemática Visual:**
    * Se comprobó la existencia y correspondencia semántica del 100% de los 50 archivos GIF en `assets/`.
    * Realineación precisa: `jump_search` actualizado a `assets/beam_search.gif` (ilustra saltos por intervalos de bloques $\sqrt{n}$), e `interpolation_search` actualizado a `assets/nearest_neighbor_search.gif` (ilustra sondeo proporcional).
  - **Desacoplamiento & Generación de Pasos Matemáticos Auténticos en `script.js`:**
    * *Merge Sort:* División iterativa bottom-up de sub-listas $[left..mid]$ y $[mid+1..right]$ con comparaciones y desplazamientos físicos reales reflejados en las barras 2D y bloques 3D.
    * *Radix Sort (LSD):* Procesamiento posicional por órdenes de magnitud ($10^0, 10^1, 10^2$) con distribución estable de cubetas.
    * *Bogo Sort:* Verificación formal de ordenación, simulaciones estocásticas controladas con registro de desorden y finalización didáctica determinista.
    * *Linear Search:* Búsqueda secuencial exhaustiva asistida por normalizador universal.
    * *Binary Search:* Validación de arreglo ordenado, ventana logarítmica activa $[low, mid, high]$ y bisección exacta.
    * *Jump Search:* Saltos de bloque de tamaño $\sqrt{n}$ seguidos de barrido lineal acotado en el intervalo.
    * *Ternary Search:* Trisección exacta del espacio con dos puntos medios ($m_1$ y $m_2$) y descarte de $2/3$ del rango por iteración.
    * *Interpolation Search:* Estimación matemática de posición mediante fórmula de sondeo proporcional de valores: $pos = low + \lfloor \frac{target - arr[low]}{arr[high] - arr[low]} \cdot (high - low) \rfloor$.
    * *Exponential Search:* Duplicación exponencial de frontera por potencias de 2 ($2^k$) acotando el intervalo para búsqueda binaria.
  - **Normalización Universal de Targets Multidominio (`getComparableTargetValue` & `isItemTargetMatch`):**
    * Soporte bidireccional perfecto para Números (19, 45, etc.), Letras ('B' -> 66), Objetos con peso ('45kg' -> 45) y Colores con ángulo de tono ('180°' -> 180). Erradicó el fallo donde las comparaciones estrictas de cadenas y números evaluaban a falso.
  - **Sincronización Bidireccional de Entradas (Modal <-> Interfaz Principal):**
    * Edición de Target y caja de datos manual en el modal ahora disparan la actualización en vivo en ambos monitores.
    * Inclusión de soporte para tecla `Enter` en `#modalDataInputBox`.
  - **Defensas WebGL / Three.js:**
    * Inyección de guardia defensiva `if (!scene) return;` en funciones de pintado y swaps 3D para prevenir excepciones si el contexto WebGL se pausa o ejecuta en entornos headless.
  - **Suite QA de Pruebas Automatizadas:**
    * Script `.backup/test_simulation_engine.js` ejecutó la matriz completa de 21 algoritmos $\times$ 4 tipos de datos $\times$ 4 presets (336 combinaciones). Resultado: **336/336 pruebas superadas (0 fallos, 100% éxito)**.
* **30/10/2026 (v3.1.0-PRO) - Calibración Responsiva Multidispositivo en 7 Rangos, Erradicación de Cortes & Pestañas de Código/GIF:**
  - **Erradicación Definitiva de Cortes y Objetos Ocultos en Laptops, iPads y Móviles:**
    * Se eliminó la clase restrictiva `lg:overflow-hidden` tanto en `#algoSimulationModal` como en `#bigOModal`, reemplazándola por `overflow-y-auto` y la clase personalizada `.custom-modal-scrollbar`.
    * En laptops (1366x768, 1280x800) y tablets (1024x768, 1180x820), los elementos inferiores (monitores, KPIs, botones y explicaciones) ya **nunca se cortan ni quedan inaccesibles**, permitiendo un desplazamiento táctil y de rueda ultra suave.
  - **Aprovechamiento Óptimo de Espacio: Pestañas Interactivas para Código y GIF:**
    * Se erradicó la sub-cuadrícula dividida 7/5 que comprimía el código a ~200px y encogía el GIF.
    * Se implementó un selector de pestañas Neo-Brutalista: `[💻 Código Canónico]` y `[🎬 Cinemática (.GIF)]` con la función `switchAlgoModalMediaTab(tab)`.
    * En modo *Código*: ocupa el 100% del ancho del contenedor con fondo `#0D1117`, sintaxis esmeralda `#54F18F`, padding generoso, `max-h-[220px]` y un nuevo botón de copiado rápido con feedback visual (`copyModalAlgoCode()`).
    * En modo *Cinemática*: el asset GIF oficial se muestra al 100% de ancho, centrado, nítido y con altura adaptativa de hasta 165px sin deformación.
  - **Cuadrícula de Tarjetas de Algoritmos Fluida (`#algoCardsGrid`):**
    * De `lg:grid-cols-7` (que apretaba las tarjetas a 130px en 1024px) a `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2.5`.
    * Escalado armónico: 1 col en móviles pequeños, 2 en phablets, 3 en tablets, 4 en laptops compactas, 6 en escritorios estándar y 7 en monitores panorámicos.
  - **Modal Big-O Panorámico Multidispositivo (`#bigOModal`):**
    * Reconfigurado de 3 columnas fijas en 1024px a: `col-span-12 lg:col-span-6 xl:col-span-4`.
    * En resoluciones medianas (1024px-1279px): Columna 1 y Columna 2 se presentan lado a lado al 50% de ancho y Columna 3 abarca el ancho completo abajo, eliminando el amontonamiento.
    * En pantallas `>= 1280px`: se mantiene la vista de 3 columnas simultáneas.
  - **Calibración CSS de 7 Rangos de Pantalla para Modales (`style.css`):**
    * Ultra Grandes (`>= 1920px`): `max-w: 1720px; height: 90vh`.
    * Desktops Estándar (`1440px - 1919px`): `width: 95vw; height: 92vh`.
    * Laptops Grandes (`1280px - 1439px`): `width: 96vw; height: 92vh`.
    * Laptops Compactas / iPad horizontal (`1024px - 1279px`): `width: 96vw; height: 93vh`.
    * Tablets Verticales / iPad portrait (`768px - 1023px`): `width: 96vw; height: 94vh`.
    * Móviles Grandes / Phablets (`481px - 767px`): `width: 98vw; height: 95vh`.
    * Móviles Pequeños (`<= 480px`): `width: 99vw; height: 96vh` con canvas calibrado a `180px-200px`.
  - **Limpieza de Código:** Eliminadas clases duplicadas (`sm:text-xs`) en el HUD de métricas y subtítulos del modal.
  - **Suite de QA Automatizada:** Aprobada al 100% (`test_responsive_opt_qa.py`).
* **30/10/2026 (v3.0.0-PRO) - Modal Panorámico de Simulación & Laboratorio Cinemático para los 21 Algoritmos:**
  - **Ventana Modal Panorámica de Simulación Interactiva (`#algoSimulationModal`):**
    * Integrado para cada una de las 21 tarjetas del catálogo (9 Ordenamientos, 6 Búsquedas, 6 Clases Big-O Puras) mediante `openAlgoModal(key)`.
    * Cada tarjeta en la cuadrícula incluye el botón interactivo directo `[▶ Simular]`.
    * Dispone de selector rápido desplegable (`#modalAlgoSelectDropdown`) con los 21 algoritmos agrupados para alternar al instante sin cerrar el modal.
  - **Controles de Dataset y Presets Sincronizados Dentro del Modal:**
    * Selector de tipo de datos: `123 Números`, `ABC Letras`, `📦 Objetos (Peso/ID)`, `🎨 Gráficos Arcoíris`.
    * Presets dinámicos: `Aleatorio`, `Ordenado`, `Invertido`, `Casi Ordenado`.
    * Arreglo editable (`#modalDataInputBox`) con botón `[Cargar]` y contador dinámico `(n)`.
    * Control de Target para algoritmos de búsqueda con botón de selección aleatoria `🎯`.
    * Sincronización bidireccional atómica con los controles del panel principal (`#panel-dataset`).
  - **Arena Visual 2D y Cinemática Activa en el Modal:**
    * Visualizador interactivo 2D (`#modalCanvasViewport`) que emula en tiempo real las tarjetas con altura proporcional, iconos (`📦`, `💎`, `🚀`, etc.), etiquetas de peso y tags de estado (`CMP`, `SWAP`, `PIVOT`, `FOUND`).
    * Controles completos de reproducción: `[▶ Ejecutar]` / `[⏸ Pausar]`, `[⏭ Paso a Paso]`, `[🔄 Reiniciar]` y control de velocidad deslizable (`20ms` a `600ms`).
    * Monitor de ejecución en vivo en el modal (`#modalSpotlightCard`) y 4 KPIs de rendimiento: Comparaciones, Intercambios, Accesos a Memoria y Tiempo CPU.
  - **Explicación Cinemática, Ficha Técnica y Tips de Oro de Arquitectura:**
    * Explicación de cómo funciona la lógica interna de cada algoritmo paso a paso (`howItWorks`).
    * Matriz de complejidades asintóticas: Mejor Caso, Caso Promedio, Peor Caso, Espacio Auxiliar y Estabilidad.
    * Tip de Oro de Arquitectura del **Ing. Juancito Peña** para cada uno de los 21 algoritmos.
    * Implementación en código canónico limpio en JavaScript/TypeScript y asset animado (.GIF).
  - **Motor de Narración por Voz TTS Dedicado:**
    * Toolbar de reproducción de voz con Play, Pausa, Reanudar, Detener, indicador de onda sonora y control de volumen táctil con slider sincronizado.
    * Locución completa de la mecánica del algoritmo, análisis matemático asintótico y consejos de arquitectura del Ing. Juancito Peña, blindado contra el timeout de Chromium mediante micro-chunks.
  - **Auditoría QA Automatizada:** Suite de pruebas en `.backup/test_algo_modal_qa.py` arrojó 100% de tests exitosos.
* **30/10/2026 (v2.9.1-PRO) - Dualidad Narrativa Blindada: 4 Pilares Exclusivos en Fundamentos & Modal Big-O Individual:**
  - **Aislamiento Semántico de la Narración de Fundamentos (`NARRACION_FUNDAMENTOS_TEXTO`):**
    * Se eliminó la lectura redundante de la escala inferior Big-O del audio de "Fundamentos Completos" para evitar invadir las tarjetas del semáforo.
    * La narración general se concentra exclusivamente en los **4 Pilares Teóricos** (Definición, Big-O Asintótico, Ordenamiento, Búsqueda) y los **Dos Tips de Oro de Arquitectura** del Ing. Juancito Peña, concluyendo con una invitación clara a interactuar con las tarjetas del semáforo inferior.
  - **Claridad de Interfaz en la Toolbar y Cards de Fundamentos:**
    * Botón maestro renombrado a: `Escuchar los 4 Pilares Teóricos` (`#btnFundamentosPlay`) con etiqueta de ayuda `Escucha los 4 juntos o individualmente en cada tarjeta`.
    * Cada uno de los 4 bloques cuenta con su botón individualizado: `[🔊 Oír Pilar 1]`, `[🔊 Oír Pilar 2]`, `[🔊 Oír Pilar 3]` y `[🔊 Oír Pilar 4]`.
  - **Escala Universal Big-O como Módulo Interactivo Autónomo:**
    * Las 6 tarjetas del semáforo ($O(1)$, $O(\log n)$, $O(n)$, $O(n \log n)$, $O(n^2)$, $O(2^n)$) abren su **Ficha Técnica Panorámica** (`openBigOModal`) al hacer clic, permitiendo inspeccionar la fórmula, cinemática, tabla de crecimiento, GIF animado y código.
    * Se integró la arquitectura de micro-chunks (`bigOChunkQueue` y `playNextBigOChunk`) en el reproductor de voz del modal (`narrarBigOActual`), blindando las explicaciones individuales de Big-O contra el corte de 15 segundos de Chromium.
  - **Auditoría QA Automatizada Superada:** Script de validación DOM y catálogo en `.backup/test_fundamentos_qa.py` arrojó 100% de tests exitosos.
* **30/10/2026 (v2.9.0-PRO) - Motor TTS Universal Blindado, Fix de Carrera Chromium & 17 Botones de Audio por Card:**
  - **Diagnóstico y Corrección de la Causa Raíz de Audio:**
    * *Condición de Carrera en Chromium (Chrome/Edge/Brave):* Al invocar síncronamente `speechSynthesis.cancel()` e inmediatamente `speechSynthesis.speak()`, el motor de audio descarta silenciosamente la locución. Se resolvió envolviendo la llamada en una cola asíncrona con un retardo defensivo de `60ms` y forzando `speechSynthesis.resume()` para despertar el hilo de audio si estaba congelado.
    * *Evasión del Timeout de 15s:* Implementación de `splitIntoAudioChunks()` que divide textos largos en micro-fragmentos secuenciales ($\le 170$ caracteres) conectados por `utterance.onend`.
  - **Modalidad Dual de Narración (Sección Completa vs Card Individual):**
    * *Opción 1 (Sección Completa):* Reproducción continua con los botones maestros de la barra de sonido (`#btnManifiestoPlay` y `#btnFundamentosPlay`), con soporte de Pausa, Reanudar y Detener.
    * *Opción 2 (Card / Bloque Individual):* Se insertaron 17 micro-botones interactivos (`[🔊 Oír] / [🔊 Escuchar Card]`) en cada una de las tarjetas:
      1. Minuto 1 (Colapso Financiero)
      2. Minuto 10 (Cielo Ciego & Apagón)
      3. Hora 1 (Parálisis Logística)
      4. Hora 6 (Crisis Hospitalaria)
      5. Día 1 (Edad de Piedra)
      6. Historia 1 (De Bagdad a Bletchley Park)
      7. Historia 2 (El Arte de Hablarle a la Materia)
      8. Historia 3 (Big-O Física del Silicio)
      9. Titán 1 (Búsqueda y Orden)
      10. Titán 2 (Tráfico GPS)
      11. Titán 3 (Criptografía)
      12. Titán 4 (Genética e IA)
      13. Cita Oficial del Lead Architect Ing. Juancito Peña
      14. Fundamentos Bloque 1 (¿Qué es un Algoritmo?)
      15. Fundamentos Bloque 2 (Complejidad Asintótica Big-O)
      16. Fundamentos Bloque 3 (Algoritmos de Ordenamiento)
      17. Fundamentos Bloque 4 (Algoritmos de Búsqueda)
  - **Catálogo de Audio en Memoria (`CARDS_SPEECH_CATALOG`):** Mapeo semántico 1:1 de cada tarjeta con textos pulidos, pedagogía matemática y feedback visual reactivo (`animate-pulse` en la card que está hablando).
  - **Backups Preventivos:** Almacenados en `.backup/index.html.pre_universal_tts.bak` y `.backup/script.js.pre_universal_tts.bak`.
* **30/10/2026 (v2.8.0-PRO) - Motor de Narración Pedagógica TTS por Secciones con Tips de Oro:**
  - **Toolbars de Audio Neo-Brutalistas en Secciones Principales:**
    * Se integró una barra de herramientas de reproducción de voz completa en `#manifiesto-algoritmos` ("El Motor del Mundo") y en `#fundamentos-teoria` ("Fundamentos Magistrales").
    * Incluye controles Play, Pausa, Reanudar, Detener, indicador de onda sonora verde pulsante y widget de volumen en vivo sincronizado con slider, microbotones `[-]`/`[+]` y porcentaje numérico.
  - **Textos Maestros Narrativos con Tips de Oro de Ingeniería:**
    * *Manifiesto (`NARRACION_MANIFIESTO_TEXTO`):* Narración exhaustiva e inmersiva del apagón de 24 horas minuto a minuto (minuto 1 colapso SWIFT/Visa, minuto 10 caos aéreo TCAS y apagón eléctrico, hora 1 parálisis logística Dijkstra/A*, hora 6 hospitales y comunicaciones, día 1 retorno a la Edad de Piedra), la historia (Al-Juarismi, Ada Lovelace, Alan Turing), qué es realmente programar, los 4 titanes invisibles, declaración del Lead Architect y el *Tip de Oro de Arquitectura* sobre cómo diseñar para escalar sin optimizar a ciegas.
    * *Fundamentos (`NARRACION_FUNDAMENTOS_TEXTO`):* Narración magistral y estructurada de los 4 pilares (definición de algoritmo y propiedades, complejidad asintótica Big-O, familias de ordenamiento comparativo vs no comparativo, algoritmos de búsqueda secuencial vs bisección logarítmica), desglose del semáforo Big-O ($O(1)$ a $O(2^n)$) y *Dos Tips de Oro de Ingeniería* del Ing. Juancito Peña sobre indexación previa para lecturas masivas y detección temprana de bucles cuadráticos anidados.
  - **Gestor Unificado de Audio Anticolisión & Keep-Alive:**
    * Se implementó `window.detenerTodasLasNarraciones()`, garantizando que al activar la voz en una sección, en el modal o entre secciones, el audio anterior se detenga de inmediato sin solapamiento de voces.
    * Mecanismo keep-alive para mitigar la pausa arbitraria de 15 segundos en motores Chromium/WebKit durante narraciones largas.
  - **Backups Preventivos:** Almacenados en `.backup/index.html.pre_section_audio.bak` y `.backup/script.js.pre_section_audio.bak`.
* **30/10/2026 (v2.7.0-PRO) - Navbar 100% Ancho, Menú Drawer Móvil/Tablet & Blindaje Total Anti-Zoom:**
  - **Menú de Navegación 100% del Ancho (`w-full`):** Se eliminó la restricción de ancho que comprimía los enlaces. En resoluciones grandes (`>= 1280px`), los 8 enlaces + marca DataIADev + botón *Simular* se distribuyen en una sola línea horizontal holgada con espaciado no destructivo (`flex-nowrap`, `gap-2.5`), sin solaparse ni encimarse.
  - **Menú Drawer Desplegable para Móviles y Tablets (`< 1280px`):** En pantallas medianas y móviles, el navbar presenta un botón táctil de menú con icono conmutable (`fa-bars` / `fa-xmark`) que despliega una cuadrícula de botones limpios de alto contraste (`#mobileNavDrawer`). Cada enlace incluye la función `closeMobileNavMenu()` para cerrarse automáticamente al navegar.
  - **Erradicación del 100% de Fuentes Diminutas (0 ocurrencias restantes):**
    * Se auditaron y eliminaron por completo todas las clases `text-[7px]`, `text-[8px]`, `text-[9px]`, `text-[10px]` y `text-[11px]` en `index.html` y `script.js`.
    * Tarjetas de algoritmos, 2D Stage, historial en vivo, métricas de hardware, semáforo Big-O, tabla comparativa y modal panorámico ahora emplean tamaños cómodos de lectura: `text-xs` (mínimo 13.6px), `text-sm` (15.2px) y `text-base` (16.8px).
  - **Sistema de Media Queries Líquido Anti-Zoom (`style.css`):**
    * Se integró la clase `.container-responsive` gobernada por 7 rangos precisos de media queries (Ultra grandes `>= 1920px`, Grandes `1440px-1919px`, Laptops `1280px-1439px`, Tablets horizontales `1024px-1279px`, Tablets verticales `768px-1023px`, Móviles grandes `481px-767px` y Móviles pequeños `<= 480px`).
    * Blindaje anti-zoom mediante `-webkit-text-size-adjust: 100%`, `overflow-wrap: break-word` y contenedores con márgenes fluidos, garantizando que el usuario pueda hacer zoom (`+` o `-`) libremente sin roturas de layout ni scroll horizontal parásito.
  - **Backups Preventivos:** Almacenados en `.backup/index.html.pre_nav_and_text_boost.bak`, `.backup/script.js.pre_nav_and_text_boost.bak` y `.backup/style.css.pre_nav_and_text_boost.bak`.
* **30/10/2026 (v2.6.0-PRO) - Mega Introducción 'El Motor del Mundo', Ancho al 70% & Jerarquía Tipográfica Aumentada:**
  - **Ampliación del Ancho de Contenido al 70%:** Se reconfiguraron los contenedores principales de navegación y cuerpo a `w-full max-w-[96%] sm:max-w-[92%] md:max-w-[88%] lg:max-w-[82%] xl:max-w-[75%] 2xl:max-w-[70%] mx-auto`, logrando una visualización espaciosa y panorámica en monitores de escritorio sin comprimir las columnas.
  - **Mega Introducción Narrativa (`#manifiesto-algoritmos`):** Nueva sección antes de Fundamentos con narrativa inmersiva sobre la programación y los algoritmos que mueven el mundo. Incluye:
    1. *Crónica del Gran Apagón Algorítmico:* Desglose cronológico de la caída de la civilización (Minuto 1: Caos financiero global; Minuto 10: Caos aéreo TCAS y apagón eléctrico; Hora 1: Parálisis de rutas Dijkstra/A* y hambruna; Hora 6: Colapso hospitalario y telecomunicaciones; Día 1: Retorno a la Edad de Piedra).
    2. *Línea de Evolución Histórica:* De Muhammad ibn Musa al-Juarismi y Ada Lovelace hasta Alan Turing y la física computacional.
    3. *Los 4 Titanes Invisibles:* Búsqueda/Ordenamiento masivo, Grafos/GPS, Criptografía cuántica y Genética/IA.
    4. *Cita de Principios de Ingeniería:* Manifiesto oficial del Lead Architect **Ing. Juancito Peña Vizcaíno**.
  - **Jerarquía Tipográfica Aumentada:** Textos de lectura general aumentados de `text-xs` (12px) a `text-sm` (14px) / `text-base` (16px) / `text-lg` (18px) con `leading-relaxed` en títulos, subtítulos, tarjetas teóricas, badges, consola de datasets, HUD de métricas y perfiles.
  - **Píldoras y Resaltados Neo-Brutalistas (`style.css`):** Clases `.neo-highlight`, `.neo-highlight-cyan`, `.neo-highlight-pink`, `.neo-highlight-green`, `.neo-highlight-orange` y `.neo-highlight-red` para énfasis visual y contraste WCAG 2.2 AAA.
  - **Ancla y Enlace en Navbar:** Agregado el botón directo `El Motor del Mundo` (`#manifiesto-algoritmos`) con icono de planeta en la barra superior.
  - **Backups Preventivos:** Almacenados en `.backup/index.html.pre_mega_intro.bak` y `.backup/style.css.pre_mega_intro.bak`.
* **30/10/2026 (v2.5.1-PRO) - Ampliación de Representación Animada (.GIF) al 100% de Ancho:**
  - La imagen representativa del GIF en la Columna 2 del Modal Panorámico ahora ocupa el **100% del ancho del marco contenedor** (`w-full`).
  - Blindaje anti-deformación: Se aplicó `h-auto` y `object-contain !important` en HTML y CSS (`#modalBigOGifImg`), garantizando que la relación de aspecto original nunca se distorsione ni se estire.
  - Calibración de altura: Marco del GIF calibrado a `min-h-[285px] max-h-[305px]` con altura de imagen `max-h-[265px]`, y lista de algoritmos compactada con `max-h-[80px]` para mantener estrictamente la regla de **cero scroll vertical en escritorios**.
  - Regla de renderizado `-webkit-optimize-contrast` agregada en `style.css` para máxima nitidez en pantallas de alta densidad.
  - Backup preventivo generado en `.backup/index.html.pre_gif_enlargement.bak`.
