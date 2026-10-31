# 🌌 ESTATUS Y CHECKPOINT MAESTRO DEL PROYECTO
> **ALGO-MATRIX 3D: Enciclopedia & Laboratorio Interactivo de Algoritmos y Big-O**  
> **Fuente Única de Verdad (Single Source of Truth) para Continuidad Inmediata entre Sesiones de IA**  
> **Lead Architect & Docente:** Ing. Juancito Peña Vizcaíno  
> **Ubicación Raíz:** `C:\Users\User\Desktop\La Enciclopedia Interactiva de Algoritmos & Big-O`  
> **Fecha de Actualización:** 31 de Octubre de 2026  
> **Versión:** `v3.6.0-PRO` (Sintaxis Oficial Estricta: PSeInt con Algoritmo/FinAlgoritmo, 'arr' declarado en Definir, asignación '<-' por línea, C# .NET 9 con Program.Main ejecutable y Span<T>, Mermaid.js interactivo y 100% de cobertura en los 21 algoritmos)  
> **Despliegue Oficial en GitHub Pages:** [https://juancitopena.github.io/enciclopedia-algoritmos-big-o-3d/](https://juancitopena.github.io/enciclopedia-algoritmos-big-o-3d/)  
> **Repositorio Oficial:** [https://github.com/JUANCITOPENA/enciclopedia-algoritmos-big-o-3d](https://github.com/JUANCITOPENA/enciclopedia-algoritmos-big-o-3d)

---

## 📌 1. PROPÓSITO DE ESTE DOCUMENTO
Este archivo permite que cualquier agente de Inteligencia Artificial (Antigravity CLI / IDE / Gemini) retome el proyecto de forma **instantánea y sin pérdida de contexto**, sin necesidad de volver a leer ni mapear los miles de líneas de código desde cero cuando ocurra un reinicio de sesión, rotación de modelo o interrupción por tokens.

---

## 📁 2. MAPA MAESTRO DEL PROYECTO (ESTRUCTURA DE ARCHIVOS)

```
C:\Users\User\Desktop\La Enciclopedia Interactiva de Algoritmos & Big-O\
│
├── 📄 index.html                       # Documento principal, modales panorámicos, UI Neo-Brutalista y Mermaid.js
├── 📜 script.js                         # Motor de simulación cinemática (Three.js 3D + 2D), BIG_O_CATALOG y motor TTS
├── 🎨 style.css                         # Estilos Neo-Brutalistas, reglas de contraste WCAG 2.2 AAA y diseño responsive
├── 📚 README.md                         # Documentación pública y técnica de la plataforma
├── 📑 ESTATUS_PROYECTO_CHECKPOINT.md     # ESTE ARCHIVO: Punto de restauración y memoria técnica viva
├── ⚖️ LICENSE                           # Licencia de código abierto MIT
├── 🚫 .gitignore                        # Reglas de exclusión de git
├── 📝 prueba.psc                        # Algoritmo de prueba en PSeInt
│
├── 📂 js/
│   ├── 📦 algo-multilang-data.js        # Catálogo maestro de 21 algoritmos x 4 lenguajes (84 bases de código) + Mermaid
│   ├── ⚙️ tailwind-config.js            # Configuración de colores y sombras Neo-Brutalistas
│   └── 📄 app.js                        # Scripts complementarios
│
├── 📂 assets/                           # Catálogo de 50 animaciones GIF y recursos gráficos
│   ├── 🖼️ LOGO_DATAIADEV.png           # Logo oficial de DataIADev
│   ├── 📋 CATALOGO_ALGORITMOS.md        # Tabla formal de correspondencia de nombres español / internacional
│   └── 🎞️ *.gif (50 archivos)          # Animaciones para Bubble, Merge, Quick, Binary Search, BFS, DFS, etc.
│
└── 📂 .backup/                          # Puntos de restauración locales seguros y suites de QA
    ├── test_multilang_v2_strict.js      # QA Gobernanza Estricta V2 (21/21)
    ├── test_multilang_system.js         # QA Catálogo Multi-Lenguaje (84/84)
    ├── test_simulation_engine.js        # QA Matriz Cinemática (336/336)
    ├── test_mermaid_and_pseint_syntax.js# QA Mermaid.js & PSeInt Syntax (21/21)
    └── multilang_strict/                # Generadores modulares V2 (sorting, searching, complexity)
```

---

## 💻 3. STACK TECNOLÓGICO Y DEPENDENCIAS ACTIVAS
* **Framework CSS:** Tailwind CSS (vía CDN Oficial) con tema extendido Neo-Brutalista (`neoYellow: #FFDE59`, `neoCyan: #38E5FF`, `neoGreen: #54F18F`, `neoPink: #FF90E8`, `neoOrange: #FF7A00`, `neoRed: #FF5757`, `neoCream: #FFFDF0`, `neoDark: #0A0A0A`).
* **Iconografía:** FontAwesome 6.4.0 (CDN) + Bootstrap Icons 1.11.3 (CDN).
* **Motor 3D Espacial:** Three.js r128 + OrbitControls para manipulación de cámara orbital y rotación física en WebGL.
* **Diagramas de Flujo:** Mermaid.js v10 CDN (`flowchart TD`) con paleta canónica ISO 5807 / PSeInt Pro.
* **Tipografías Google Fonts:** `Space Grotesk` (encabezados, pesos 700/900) y `JetBrains Mono` (código y métricas, pesos 500/700/800).
* **Motor de Narración de Voz:** Web Speech API nativa (`window.speechSynthesis` y `SpeechSynthesisUtterance`) en español (`es-ES`), con selección automática de voz natural y control de volumen reactivo.

---

## 🏛️ 4. COMPONENTES Y MÓDULOS DE LA APLICACIÓN

### 1. Barra de Navegación Sticky (`#inicio`)
- Logo oficial de DataIADev, insignia `ALGO-MATRIX 3D`, menú hamburguesa móvil y anclas directas: `#inicio`, `#fundamentos-teoria`, `#panel-dataset`, `#laboratorio-algoritmos`, `#matriz-comparativa`, `#perfil-profesional`.
- Botón rápido de acción: `Simular` (`togglePlayPause()`).

### 2. Fundamentos Magistrales & Semáforo Big-O (`#fundamentos-teoria`)
- 4 Pilares teóricos en tarjetas Neo-Brutalistas: ¿Qué es un Algoritmo?, Complejidad Algorítmica (Big-O), Algoritmos de Ordenamiento y Algoritmos de Búsqueda.
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
- Filtros por pestañas: `Todos (21)`, `📊 Ordenamientos (9)`, `🔍 Búsquedas (6)`, `⚡ Clases Big-O Puras (6)`.
- Grid responsivo dinámico inyectado desde `ALGORITHMS_CATALOG` en `script.js`.
- **9 Algoritmos de Ordenamiento:** Bubble Sort, Selection Sort, Insertion Sort, Shell Sort, Merge Sort, Quick Sort (Lomuto), Heap Sort, Radix Sort (LSD), Bogo Sort (Didáctico).
- **6 Algoritmos de Búsqueda:** Búsqueda Lineal, Búsqueda Binaria, Búsqueda Ternaria, Búsqueda por Salto (Jump), Búsqueda por Interpolación, Búsqueda Exponencial.
- **6 Demostraciones de Complejidad Pura:** Constante O(1), Lineal O(n), Cuadrática O(n²), Cúbica O(n³), Exponencial O(2ⁿ), Factorial O(n!).

### 5. Arena Dual: 2D y 3D en Paralelo
- **Columna Izquierda (Arena 2D + Monitor en Vivo):** Contenedor `#canvasViewport` adaptativo, monitor `#spotlightCard` con acción activa (`COMPARE`, `SWAP`, `PIVOT`, `DONE`), historial fijo `#liveStepHistory` y controles de reproducción.
- **Columna Derecha (Cinemática Espacial 3D + Visor de Código):** Lienzo WebGL Three.js (`#threeContainer`) con renderizado de barras espaciales y visor de código fuente en tiempo real.

### 6. Visor Multi-Lenguaje 4-en-1 & Diagramas Mermaid.js (`#algoMultiLangModal`)
- Modal interactivo con 4 pestañas de lenguaje por cada uno de los 21 algoritmos:
  1. **PSeInt Pro / Mermaid:** Código canónico con `Algoritmo / FinAlgoritmo`, `arr` en `Definir`, asignación `arr[k] <- v;` en líneas independientes, comillas simples y diagrama de flujo Mermaid.js interactivo con botón "Copiar Mermaid".
  2. **Python 3.12+:** Script completo con tipado fuerte, docstrings y bloque `if __name__ == '__main__':`.
  3. **HTML5 / CSS / JS Standalone:** Archivo web monolítico completo con interfaz interactiva y animación asíncrona en el DOM.
  4. **C# 13 / .NET 9:** Namespace temático `AlgoMatrix3D`, punto de entrada `Program.Main` ejecutable de consola y clase estática optimizada con `Span<int>` / `ReadOnlySpan<int>`.

---

## 🧪 5. RESULTADOS DE LA SUITE DE CALIDAD Y QA (100% ÉXITO)

| Test Suite | Archivo de Prueba | Cobertura | Resultado |
| :--- | :--- | :--- | :--- |
| **Gobernanza Estricta V2** | `.backup/test_multilang_v2_strict.js` | 21 Algoritmos x Reglas PSeInt / C# | **21 / 21 Aprobados (100%)** |
| **Catálogo Multi-Lenguaje** | `.backup/test_multilang_system.js` | 21 Algoritmos x 4 Lenguajes (84 Bases) | **84 / 84 Verificados (100%)** |
| **Matriz Cinemática 3D/2D** | `.backup/test_simulation_engine.js` | 21 Algoritmos x 4 Presets x 4 Tipos de Dato | **336 / 336 Exitosos (100%)** |
| **Diagramas Mermaid & Sintaxis** | `.backup/test_mermaid_and_pseint_syntax.js` | 21 Diagramas Mermaid.js | **21 / 21 Verificados (100%)** |

Comandos de ejecución inmediata:
```bash
node .backup/test_multilang_v2_strict.js
node .backup/test_multilang_system.js
node .backup/test_simulation_engine.js
node .backup/test_mermaid_and_pseint_syntax.js
```

---

## 📜 6. HISTORIAL DE HITOS Y VERSIONES (LOG MAESTRO)

### 🚀 Hito v3.6.0-PRO (31 de Octubre de 2026): Estándar Estricto de PSeInt, C# .NET 9 con Program.Main y Mermaid.js
1. **PSeInt Modo Estricto Canónico:**
   - Cada algoritmo inicia con `Algoritmo <Nombre>` y cierra con `FinAlgoritmo` (o `SubAlgoritmo ... FinSubAlgoritmo`).
   - En la sentencia `Definir`, la variable del arreglo (`arr`) se declara obligatoriamente junto a las variables escalares: `Definir n, i, j, clave, k, arr Como Entero; Dimension arr[6];`.
   - Cada posición del arreglo se asigna en su propia línea independiente con el operador canónico `<-` (ej. `arr[1] <- 12; arr[2] <- 11; ...`).
   - Cadenas de texto con comillas simples `'...'` y terminación estricta con `;` en instrucciones simples.
2. **C# 13 / .NET 9 Ejecutable y de Alto Rendimiento:**
   - Incorporación obligatoria de `using System;` y `namespace AlgoMatrix3D.<Sorting|Searching|Complexity>;`.
   - Clase principal ejecutable `public class Program { public static void Main(string[] args) { ... } }` con datos de prueba, impresión en consola de estado inicial y final.
   - Clase estática del algoritmo optimizada con `Span<int>` / `ReadOnlySpan<int>` y `stackalloc` para latencia ultra-baja y cero asignaciones de recolección de basura.
3. **Diagramas de Flujo Mermaid.js Interactivos:**
   - Renderizado vectorial en vivo de diagramas `flowchart TD` con paleta canónica PSeInt / ISO 5807 (`:::terminal`, `:::proceso`, `:::decision`, `:::salida`, `:::entrada`).
   - Botón directo "Copiar Mermaid" para copiar el código del diagrama y usarlo en cualquier visor Mermaid.
4. **Validación Exhaustiva al 100%:**
   - Test de Gobernanza Estricta V2 (`test_multilang_v2_strict.js`): **21/21 Aprobados (100%)**.
   - Suite Multilenguaje (`test_multilang_system.js`): **84/84 implementaciones verificadas (100%)**.
   - Suite de Simulación (`test_simulation_engine.js`): **336/336 combinaciones validadas (100%)**.
   - Suite de Mermaid & Sintaxis (`test_mermaid_and_pseint_syntax.js`): **21/21 diagramas verificados (100%)**.

### 🚀 Hito v3.5.0-PRO (31 de Octubre de 2026): Integración de Mermaid.js y Operador Canónico `<-`
- Integración de Mermaid.js v10 para grafos de flujo en el visor multilenguaje.
- Estandarización de comillas simples `'...'` en mensajes de `Escribir`.

### 🚀 Hito v3.4.0-PRO (31 de Octubre de 2026): PSeInt Estricto O&M y HTML5 Standalone Completo
- Estructuración de scripts web monolíticos autosuficientes con DOM interactivo.

### 🚀 Hito v3.3.0-PRO (31 de Octubre de 2026): Laboratorio Multi-Lenguaje 4-en-1
- Botonera rápida de 4 lenguajes (PSeInt, Python, HTML/JS, C#) en cada una de las tarjetas algorítmicas.

### 🚀 Hito v3.2.0-PRO (30 de Octubre de 2026): Modal Panorámico Big-O y Motor TTS
- Ficha panorámica zero-scroll en Bento Grid de 3 columnas con síntesis de voz Web Speech API.

---

## 🧭 7. INSTRUCCIONES PARA RETOMAR EL TRABAJO
Si una nueva IA o desarrollador se une a este proyecto:
1. **NO vuelvas a re-leer ni mapear los archivos enteros.** Lee directamente este archivo (`ESTATUS_PROYECTO_CHECKPOINT.md`).
2. Los puntos neurálgicos son:
   - `index.html`: Estructura DOM y modales panorámicos.
   - `script.js`: Motor cinemático Three.js, control de simulación y TTS.
   - `js/algo-multilang-data.js`: Catálogo de 21 algoritmos en 4 lenguajes y Mermaid.js.
   - `style.css`: Estilos Neo-Brutalistas y accesibilidad WCAG AAA.
3. Para validar cualquier cambio futuro, corre siempre las 4 suites de QA en `.backup/`.
4. Si realizas cambios en el código o en la arquitectura, **actualiza de inmediato este archivo de estatus** para mantener la cadena de custodia y continuidad del proyecto.
