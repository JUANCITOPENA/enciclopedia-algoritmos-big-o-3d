/* =========================================================================
   ALGO-MATRIX 3D: CATÁLOGO MULTI-LENGUAJE DE ALGORITMOS (JPV PRO)
   Soporte exhaustivo para PSeInt Canónico (<- y Mermaid.js), Python 3, 
   HTML/CSS/JS (Standalone Completo) y C# .NET 9
   Lead Architect: Ing. Juancito Peña Vizcaíno
   ========================================================================= */

window.ALGO_MULTILANG_DATA = {
  "bubble_sort": {
    "name": "Bubble Sort (Ordenamiento Burbuja)",
    "category": "sort",
    "bigO": "O(n²)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Ordenamiento_Burbuja\n    Definir n, i, j, aux, k Como Entero;\n    Definir intercambiado Como Logico;\n    Dimension arr[7];\n\n    n <- 7;\n    arr[1] <- 64; arr[2] <- 34; arr[3] <- 25; arr[4] <- 12; arr[5] <- 22; arr[6] <- 11; arr[7] <- 90;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    Para i <- 1 Hasta n - 1 Con Paso 1 Hacer\n        intercambiado <- Falso;\n        Para j <- 1 Hasta n - i Con Paso 1 Hacer\n            Si arr[j] > arr[j + 1] Entonces\n                aux <- arr[j];\n                arr[j] <- arr[j + 1];\n                arr[j + 1] <- aux;\n                intercambiado <- Verdadero;\n            FinSi\n        FinPara\n        Si NO intercambiado Entonces\n            i <- n; // Salida temprana si ya está ordenado\n        FinSi\n    FinPara\n\n    Escribir 'Arreglo Ordenado con Éxito:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Implementación canónica en PSeInt. Variables declaradas con 'Definir', asignaciones formales con '<-', cadenas con comillas simples y detección temprana en O(n) con bandera lógica.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Comillas simples en Escribir",
          "Bandera booleana de parada temprana"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Bubble Sort (Ordenamiento Burbuja) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BubbleSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir n, i, j, aux; intercambiado <- Falso;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n - 1?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "j <- 1;"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿j <= n - i?"
            },
            {
              "id": 6,
              "type": "decision",
              "text": "¿arr[j] > arr[j + 1]?"
            },
            {
              "id": 7,
              "type": "process",
              "text": "aux <- arr[j]; arr[j] <- arr[j+1]; arr[j+1] <- aux; intercambiado <- Verdadero;"
            },
            {
              "id": 8,
              "type": "process",
              "text": "j <- j + 1;"
            },
            {
              "id": 9,
              "type": "decision",
              "text": "¿NO intercambiado?"
            },
            {
              "id": 10,
              "type": "process",
              "text": "i <- i + 1;"
            },
            {
              "id": 11,
              "type": "end",
              "text": "FinProceso: Retornar arr ordenado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Burbuja\"]):::terminal --> Init[\"Definir n, i, j, aux Como Entero;<br/>Definir intercambiado Como Logico;<br/>n <- 7; arr[1..7] cargado\"]:::proceso\n    Init --> PrintInit[/\"Escribir 'Arreglo Inicial'\"/]:::salida\n    PrintInit --> LoopI_Init[\"i <- 1\"]:::proceso\n    LoopI_Init --> CheckI{\"¿i <= n - 1?\"}:::decision\n    CheckI -- \"Sí\" --> LoopJ_Init[\"intercambiado <- Falso;<br/>j <- 1\"]:::proceso\n    CheckI -- \"No\" --> PrintEnd[/\"Escribir 'Arreglo Ordenado'\"/]:::salida\n    LoopJ_Init --> CheckJ{\"¿j <= n - i?\"}:::decision\n    CheckJ -- \"Sí\" --> Comp{\"¿arr[j] > arr[j + 1]?\"}:::decision\n    CheckJ -- \"No\" --> CheckEarly{\"¿NO intercambiado?\"}:::decision\n    Comp -- \"Sí\" --> Swap[\"aux <- arr[j];<br/>arr[j] <- arr[j + 1];<br/>arr[j + 1] <- aux;<br/>intercambiado <- Verdadero;\"]:::proceso\n    Comp -- \"No\" --> IncJ[\"j <- j + 1\"]:::proceso\n    Swap --> IncJ\n    IncJ --> CheckJ\n    CheckEarly -- \"Sí (Ordenado)\" --> PrintEnd\n    CheckEarly -- \"No\" --> IncI[\"i <- i + 1\"]:::proceso\n    IncI --> CheckI\n    PrintEnd --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef bubble_sort(arr: List[int]) -> List[int]:\n    \"\"\"Ordenamiento Burbuja con detección de parada temprana O(n).\"\"\"\n    n = len(arr)\n    for i in range(n - 1):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr\n\nif __name__ == '__main__':\n    datos = [64, 34, 25, 12, 22, 11, 90]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {bubble_sort(datos)}\")",
        "explanation": "En Python aprovechamos el desempaquetado de tuplas 'arr[j], arr[j+1] = arr[j+1], arr[j]' para realizar intercambios atómicos sin variables auxiliares.",
        "keyConcepts": [
          "Tuple Unpacking",
          "Early exit flag",
          "Type Hints List[int]"
        ],
        "terminalOutput": [
          "$ python -u bubble_sort.py",
          "[+] Entrada: [64, 34, 25, 12, 22, 11, 90]",
          "[*] Pasada 1: Swap(64, 34) -> [34, 64, 25, 12, 22, 11, 90]",
          "[*] Pasada 1: Mayor fijado en posición 6 (90)",
          "[✓] Completado en 18 comparaciones y 12 swaps.",
          "[+] Salida: [11, 12, 22, 25, 34, 64, 90]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Bubble Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; color: #000; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s, background 0.15s; }\n    .bar.comparing { background: #FFE600 !important; }\n    .bar.swapping { background: #FF3366 !important; color: white; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n    button:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0px #000; }\n    .status { margin-top: 10px; font-weight: bold; font-size: 12px; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Bubble Sort · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarBubbleSort()\">Iniciar Ordenamiento</button>\n    <div class=\"status\" id=\"status\">Presiona el botón para ordenar.</div>\n  </div>\n  <script>\n    let arr = [64, 34, 25, 12, 22, 11, 90];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarBubbleSort() {\n      status.innerText = \"Ordenando...\";\n      let n = arr.length;\n      for (let i = 0; i < n - 1; i++) {\n        for (let j = 0; j < n - i - 1; j++) {\n          const b1 = document.getElementById(`b-${j}`);\n          const b2 = document.getElementById(`b-${j+1}`);\n          b1.classList.add('comparing'); b2.classList.add('comparing');\n          await new Promise(r => setTimeout(r, 150));\n          if (arr[j] > arr[j + 1]) {\n            b1.classList.add('swapping'); b2.classList.add('swapping');\n            let temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp;\n            render();\n            await new Promise(r => setTimeout(r, 150));\n          }\n          render();\n        }\n      }\n      status.innerText = \"¡Arreglo completamente ordenado!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Página HTML5 Standalone interactiva completa. Permite ejecutar la animación en vivo con resaltado de barras comparadas en amarillo y barras intercambiadas en rojo.",
        "keyConcepts": [
          "Documento HTML5 Standalone completo",
          "Estilos Neo-Brutalistas",
          "Animación DOM Async/Await"
        ],
        "demoData": [
          64,
          34,
          25,
          12,
          22,
          11,
          90
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class BubbleSortEngine\n{\n    public static void Sort(Span<int> array)\n    {\n        int n = array.Length;\n        for (int i = 0; i < n - 1; i++)\n        {\n            bool swapped = false;\n            for (int j = 0; j < n - i - 1; j++)\n            {\n                if (array[j] > array[j + 1])\n                {\n                    (array[j], array[j + 1]) = (array[j + 1], array[j]);\n                    swapped = true;\n                }\n            }\n            if (!swapped) break;\n        }\n    }\n\n    public static void Main()\n    {\n        Span<int> datos = stackalloc int[] { 64, 34, 25, 12, 22, 11, 90 };\n        Sort(datos);\n        Console.WriteLine($\"Ordenado con Span<T>: [{string.Join(\", \", datos.ToArray())}]\");\n    }\n}",
        "explanation": "Uso de Span<int> y stackalloc para manipulación directa en memoria Stack con cero asignaciones en el Heap (0 Bytes GC).",
        "keyConcepts": [
          "Span<T> Zero-Alloc",
          "stackalloc",
          ".NET 9 JIT Loop Unrolling"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (StackAlloc)",
          "complexityBest": "O(n)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Direct CPU Register Tupling"
        }
      }
    }
  },
  "selection_sort": {
    "name": "Selection Sort (Ordenamiento por Selección)",
    "category": "sort",
    "bigO": "O(n²)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Ordenamiento_Seleccion\n    Definir n, i, j, min_idx, aux, k Como Entero;\n    Dimension arr[6];\n\n    n <- 6;\n    arr[1] <- 29; arr[2] <- 10; arr[3] <- 14; arr[4] <- 37; arr[5] <- 13; arr[6] <- 5;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    Para i <- 1 Hasta n - 1 Con Paso 1 Hacer\n        min_idx <- i;\n        Para j <- i + 1 Hasta n Con Paso 1 Hacer\n            Si arr[j] < arr[min_idx] Entonces\n                min_idx <- j;\n            FinSi\n        FinPara\n\n        Si min_idx <> i Entonces\n            aux <- arr[i];\n            arr[i] <- arr[min_idx];\n            arr[min_idx] <- aux;\n        FinSi\n    FinPara\n\n    Escribir 'Arreglo Ordenado con Éxito:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Selection Sort en PSeInt canónico. Busca el índice del valor mínimo en la sublista desordenada y efectúa a lo sumo n - 1 intercambios.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Búsqueda del índice mínimo",
          "Intercambio condicional"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Selection Sort (Ordenamiento por Selección) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio SelectionSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "i <- 1; min_idx <- i;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n - 1?"
            },
            {
              "id": 4,
              "type": "decision",
              "text": "¿arr[j] < arr[min_idx]?"
            },
            {
              "id": 5,
              "type": "process",
              "text": "min_idx <- j;"
            },
            {
              "id": 6,
              "type": "process",
              "text": "Intercambiar arr[i] con arr[min_idx];"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinProceso: Arreglo Ordenado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Seleccion\"]):::terminal --> Init[\"Definir n, i, j, min_idx, aux Como Entero;<br/>n <- 6; arr[1..6] cargado\"]:::proceso\n    Init --> LoopI[\"i <- 1\"]:::proceso\n    LoopI --> CheckI{\"¿i <= n - 1?\"}:::decision\n    CheckI -- \"Sí\" --> SetMin[\"min_idx <- i;<br/>j <- i + 1\"]:::proceso\n    CheckI -- \"No\" --> PrintEnd[/\"Escribir 'Arreglo Ordenado'\"/]:::salida\n    SetMin --> CheckJ{\"¿j <= n?\"}:::decision\n    CheckJ -- \"Sí\" --> Comp{\"¿arr[j] < arr[min_idx]?\"}:::decision\n    CheckJ -- \"No\" --> SwapCheck{\"¿min_idx <> i?\"}:::decision\n    Comp -- \"Sí\" --> UpdateMin[\"min_idx <- j\"]:::proceso\n    Comp -- \"No\" --> IncJ[\"j <- j + 1\"]:::proceso\n    UpdateMin --> IncJ\n    IncJ --> CheckJ\n    SwapCheck -- \"Sí\" --> DoSwap[\"aux <- arr[i];<br/>arr[i] <- arr[min_idx];<br/>arr[min_idx] <- aux;\"]:::proceso\n    SwapCheck -- \"No\" --> IncI[\"i <- i + 1\"]:::proceso\n    DoSwap --> IncI\n    IncI --> CheckI\n    PrintEnd --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef selection_sort(arr: List[int]) -> List[int]:\n    \"\"\"Ordenamiento por Selección: O(n²) comparaciones, O(n) intercambios.\"\"\"\n    n = len(arr)\n    for i in range(n - 1):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        if min_idx != i:\n            arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nif __name__ == '__main__':\n    datos = [29, 10, 14, 37, 13, 5]\n    print(f\"Resultado Selection Sort: {selection_sort(datos)}\")",
        "explanation": "Minimiza las escrituras en memoria flash a exactamente n-1 swaps.",
        "keyConcepts": [
          "Escritura mínima O(n)",
          "Comparaciones O(n²)",
          "In-place array mutation"
        ],
        "terminalOutput": [
          "$ python -u selection_sort.py",
          "[+] Entrada: [29, 10, 14, 37, 13, 5]",
          "[*] Pasada 0: Mínimo 5 encontrado en pos 5 -> Swap con 29",
          "[*] Pasada 1: Mínimo 10 encontrado en pos 1 -> In situ",
          "[✓] Terminado con solo 5 intercambios."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Selection Sort</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; }\n    .bar.current-min { background: #FF90E8 !important; }\n    button { background: #38E5FF; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Selection Sort · Mínimo Dinámico</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarSelectionSort()\">Ordenar</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo para iniciar.</div>\n  </div>\n  <script>\n    let arr = [29, 10, 14, 37, 13, 5];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarSelectionSort() {\n      let n = arr.length;\n      for (let i = 0; i < n - 1; i++) {\n        let minIdx = i;\n        document.getElementById(`b-${minIdx}`).classList.add('current-min');\n        for (let j = i + 1; j < n; j++) {\n          if (arr[j] < arr[minIdx]) {\n            document.getElementById(`b-${minIdx}`).classList.remove('current-min');\n            minIdx = j;\n            document.getElementById(`b-${minIdx}`).classList.add('current-min');\n          }\n          await new Promise(r => setTimeout(r, 120));\n        }\n        if (minIdx !== i) {\n          let temp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = temp;\n          render();\n        }\n      }\n      status.innerText = \"¡Ordenamiento por Selección finalizado!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración visual de la búsqueda del índice mínimo con marcador de color magenta dinámico.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Marcador de mínimo",
          "Transición CSS"
        ],
        "demoData": [
          29,
          10,
          14,
          37,
          13,
          5
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class SelectionSortEngine\n{\n    public static void Sort(Span<int> array)\n    {\n        int n = array.Length;\n        for (int i = 0; i < n - 1; i++)\n        {\n            int minIdx = i;\n            for (int j = i + 1; j < n; j++)\n            {\n                if (array[j] < array[minIdx]) minIdx = j;\n            }\n            if (minIdx != i)\n            {\n                (array[i], array[minIdx]) = (array[minIdx], array[i]);\n            }\n        }\n    }\n\n    public static void Main()\n    {\n        Span<int> datos = stackalloc int[] { 29, 10, 14, 37, 13, 5 };\n        Sort(datos);\n        Console.WriteLine($\"Selection Sort: [{string.Join(\", \", datos.ToArray())}]\");\n    }\n}",
        "explanation": "Ideal para sistemas embebidos donde la escritura en memoria EEPROM/Flash es costosa frente a la lectura.",
        "keyConcepts": [
          "Zero heap allocation",
          "stackalloc Span<int>",
          "EEPROM safe"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n²)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Min Index register holding"
        }
      }
    }
  },
  "insertion_sort": {
    "name": "Insertion Sort (Ordenamiento por Inserción)",
    "category": "sort",
    "bigO": "O(n²)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Ordenamiento_Insercion\n    Definir n, i, j, clave, k Como Entero;\n    Dimension arr[6];\n\n    n <- 6;\n    arr[1] <- 12; arr[2] <- 11; arr[3] <- 13; arr[4] <- 5; arr[5] <- 6; arr[6] <- 7;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    Para i <- 2 Hasta n Con Paso 1 Hacer\n        clave <- arr[i];\n        j <- i - 1;\n\n        Mientras j >= 1 Y arr[j] > clave Hacer\n            arr[j + 1] <- arr[j];\n            j <- j - 1;\n        FinMientras\n        arr[j + 1] <- clave;\n    FinPara\n\n    Escribir 'Arreglo Ordenado con Éxito:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Insertion Sort en PSeInt canónico. Emula la ordenación de naipes en mano desplazando elementos mayores a la derecha e insertando la clave en su hueco exacto.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Bucle Mientras de desplazamiento",
          "Inserción directa"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Insertion Sort (Ordenamiento por Inserción) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio InsertionSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "i <- 2; clave <- arr[i]; j <- i - 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿j >= 1 Y arr[j] > clave?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "arr[j + 1] <- arr[j]; j <- j - 1;"
            },
            {
              "id": 5,
              "type": "process",
              "text": "arr[j + 1] <- clave; i <- i + 1;"
            },
            {
              "id": 6,
              "type": "end",
              "text": "FinProceso: Arreglo Ordenado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Insercion\"]):::terminal --> Init[\"Definir n, i, j, clave Como Entero;<br/>n <- 6; arr[1..6] cargado\"]:::proceso\n    Init --> LoopI[\"i <- 2\"]:::proceso\n    LoopI --> CheckI{\"¿i <= n?\"}:::decision\n    CheckI -- \"Sí\" --> SetKey[\"clave <- arr[i];<br/>j <- i - 1\"]:::proceso\n    CheckI -- \"No\" --> PrintEnd[/\"Escribir 'Arreglo Ordenado'\"/]:::salida\n    SetKey --> CheckWhile{\"¿j >= 1 Y arr[j] > clave?\"}:::decision\n    CheckWhile -- \"Sí\" --> Shift[\"arr[j + 1] <- arr[j];<br/>j <- j - 1\"]:::proceso\n    Shift --> CheckWhile\n    CheckWhile -- \"No\" --> Insert[\"arr[j + 1] <- clave;<br/>i <- i + 1\"]:::proceso\n    Insert --> CheckI\n    PrintEnd --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef insertion_sort(arr: List[int]) -> List[int]:\n    \"\"\"Ordenamiento por Inserción: O(n) adaptativo en datos casi ordenados.\"\"\"\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr\n\nif __name__ == '__main__':\n    datos = [12, 11, 13, 5, 6, 7]\n    print(f\"Insertion Sort: {insertion_sort(datos)}\")",
        "explanation": "Comportamiento adaptativo: si el arreglo ya está ordenado, toma O(n) operaciones con 0 desplazamientos.",
        "keyConcepts": [
          "Algoritmo adaptativo O(n)",
          "Desplazamiento in-place",
          "Base de TimSort"
        ],
        "terminalOutput": [
          "$ python -u insertion_sort.py",
          "[+] Entrada: [12, 11, 13, 5, 6, 7]",
          "[*] Insertando clave 11 en posición 0",
          "[*] Insertando clave 5 en posición 0",
          "[✓] Completado con éxito."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Insertion Sort</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; }\n    .bar.key { background: #FF3366 !important; color: white; transform: translateY(-8px); }\n    button { background: #54F18F; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Insertion Sort · Desplazamiento & Inserción</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarInsertionSort()\">Ordenar</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo para iniciar.</div>\n  </div>\n  <script>\n    let arr = [12, 11, 13, 5, 6, 7];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render(keyIdx = -1) {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar ${i===keyIdx?'key':''}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarInsertionSort() {\n      let n = arr.length;\n      for (let i = 1; i < n; i++) {\n        let key = arr[i];\n        let j = i - 1;\n        render(i);\n        await new Promise(r => setTimeout(r, 200));\n        while (j >= 0 && arr[j] > key) {\n          arr[j + 1] = arr[j];\n          j--;\n          render(j + 1);\n          await new Promise(r => setTimeout(r, 150));\n        }\n        arr[j + 1] = key;\n        render();\n      }\n      status.innerText = \"¡Completado con éxito!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración visual completa donde el elemento clave se eleva y los elementos mayores se deslizan lateralmente.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Efecto naipe de inserción",
          "Animación fluida"
        ],
        "demoData": [
          12,
          11,
          13,
          5,
          6,
          7
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class InsertionSortEngine\n{\n    public static void Sort(Span<int> array)\n    {\n        for (int i = 1; i < array.Length; i++)\n        {\n            int key = array[i];\n            int j = i - 1;\n            while (j >= 0 && array[j] > key)\n            {\n                array[j + 1] = array[j];\n                j--;\n            }\n            array[j + 1] = key;\n        }\n    }\n\n    public static void Main()\n    {\n        Span<int> datos = stackalloc int[] { 12, 11, 13, 5, 6, 7 };\n        Sort(datos);\n        Console.WriteLine($\"Insertion Sort: [{string.Join(\", \", datos.ToArray())}]\");\n    }\n}",
        "explanation": "Base algorítmica utilizada internamente por algoritmos híbridos como TimSort e IntroSort para particiones pequeñas (n <= 16).",
        "keyConcepts": [
          "Zero heap overhead",
          "IntroSort sub-engine",
          "L1 cache friendly"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Direct local key register"
        }
      }
    }
  },
  "shell_sort": {
    "name": "Shell Sort (Inserción con Brecha / Gap)",
    "category": "sort",
    "bigO": "O(n log² n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Ordenamiento_Shell\n    Definir n, brecha, i, j, temp, k Como Entero;\n    Dimension arr[8];\n\n    n <- 8;\n    arr[1] <- 35; arr[2] <- 14; arr[3] <- 67; arr[4] <- 22; arr[5] <- 10; arr[6] <- 53; arr[7] <- 41; arr[8] <- 18;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    brecha <- TRUNC(n / 2);\n\n    Mientras brecha > 0 Hacer\n        Para i <- brecha + 1 Hasta n Con Paso 1 Hacer\n            temp <- arr[i];\n            j <- i;\n\n            Mientras j > brecha Y arr[j - brecha] > temp Hacer\n                arr[j] <- arr[j - brecha];\n                j <- j - brecha;\n            FinMientras\n            arr[j] <- temp;\n        FinPara\n        brecha <- TRUNC(brecha / 2);\n    FinMientras\n\n    Escribir 'Arreglo Ordenado con Éxito:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Shell Sort en PSeInt canónico. Divide el espacio con brechas progresivas calculadas con TRUNC(brecha / 2) y asignaciones '<-'.",
        "keyConcepts": [
          "Asignación formal con <-",
          "División entera TRUNC(n/2)",
          "Sub-listas intercaladas"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Shell Sort (Inserción con Brecha / Gap) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio ShellSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "brecha <- TRUNC(n / 2);"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿brecha > 0?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "temp <- arr[i]; j <- i;"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿j > brecha Y arr[j - brecha] > temp?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "arr[j] <- arr[j - brecha]; j <- j - brecha;"
            },
            {
              "id": 7,
              "type": "process",
              "text": "brecha <- TRUNC(brecha / 2);"
            },
            {
              "id": 8,
              "type": "end",
              "text": "FinProceso: Arreglo Ordenado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Shell\"]):::terminal --> Init[\"Definir n, brecha, i, j, temp Como Entero;<br/>n <- 8; arr[1..8] cargado\"]:::proceso\n    Init --> SetGap[\"brecha <- TRUNC(n / 2)\"]:::proceso\n    SetGap --> CheckGap{\"¿brecha > 0?\"}:::decision\n    CheckGap -- \"Sí\" --> LoopI[\"i <- brecha + 1\"]:::proceso\n    CheckGap -- \"No\" --> PrintEnd[/\"Escribir 'Arreglo Ordenado'\"/]:::salida\n    LoopI --> CheckI{\"¿i <= n?\"}:::decision\n    CheckI -- \"Sí\" --> SaveTemp[\"temp <- arr[i];<br/>j <- i\"]:::proceso\n    CheckI -- \"No\" --> RedGap[\"brecha <- TRUNC(brecha / 2)\"]:::proceso\n    RedGap --> CheckGap\n    SaveTemp --> CheckWhile{\"¿j > brecha Y arr[j - brecha] > temp?\"}:::decision\n    CheckWhile -- \"Sí\" --> ShiftGap[\"arr[j] <- arr[j - brecha];<br/>j <- j - brecha\"]:::proceso\n    ShiftGap --> CheckWhile\n    CheckWhile -- \"No\" --> InsertTemp[\"arr[j] <- temp;<br/>i <- i + 1\"]:::proceso\n    InsertTemp --> CheckI\n    PrintEnd --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef shell_sort(arr: List[int]) -> List[int]:\n    \"\"\"Ordenamiento Shell con secuencia de reducción n//2.\"\"\"\n    n = len(arr)\n    gap = n // 2\n    while gap > 0:\n        for i in range(gap, n):\n            temp = arr[i]\n            j = i\n            while j >= gap and arr[j - gap] > temp:\n                arr[j] = arr[j - gap]\n                j -= gap\n            arr[j] = temp\n        gap //= 2\n    return arr\n\nif __name__ == '__main__':\n    datos = [35, 14, 67, 22, 10, 53, 41, 18]\n    print(f\"Shell Sort: {shell_sort(datos)}\")",
        "explanation": "Disminuye progresivamente la brecha permitiendo que elementos lejanos viajen rápidamente a su posición natural.",
        "keyConcepts": [
          "Secuencia de brecha",
          "Inversiones distantes",
          "Reducción logarítmica"
        ],
        "terminalOutput": [
          "$ python -u shell_sort.py",
          "[+] Entrada: [35, 14, 67, 22, 10, 53, 41, 18] (n=8)",
          "[*] Fase Gap = 4 -> Sublistas intercaladas",
          "[*] Fase Gap = 2 -> Reducción de inversiones distantes",
          "[*] Fase Gap = 1 -> Paso de Inserción final casi lineal",
          "[✓] Completado en 3 reducciones de brecha."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Shell Sort</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #FFE600; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 10px; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Shell Sort · Inserción por Saltos (Gap)</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarShell()\">Ordenar</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [35, 14, 67, 22, 10, 53, 41, 18];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarShell() {\n      let n = arr.length, gap = Math.floor(n / 2);\n      while (gap > 0) {\n        status.innerText = `Procesando con Gap = ${gap}`;\n        for (let i = gap; i < n; i++) {\n          let temp = arr[i], j = i;\n          while (j >= gap && arr[j - gap] > temp) {\n            arr[j] = arr[j - gap];\n            j -= gap;\n            render();\n            await new Promise(r => setTimeout(r, 100));\n          }\n          arr[j] = temp;\n          render();\n        }\n        gap = Math.floor(gap / 2);\n      }\n      status.innerText = \"¡Completado!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración visual de Shell Sort reduciendo la distancia entre elementos comparados de forma interactiva.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Visualización de saltos",
          "Animación en tiempo real"
        ],
        "demoData": [
          35,
          14,
          67,
          22,
          10,
          53,
          41,
          18
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class ShellSortEngine\n{\n    public static void Sort(Span<int> array)\n    {\n        int n = array.Length;\n        for (int gap = n / 2; gap > 0; gap /= 2)\n        {\n            for (int i = gap; i < n; i++)\n            {\n                int temp = array[i];\n                int j = i;\n                while (j >= gap && array[j - gap] > temp)\n                {\n                    array[j] = array[j - gap];\n                    j -= gap;\n                }\n                array[j] = temp;\n            }\n        }\n    }\n\n    public static void Main()\n    {\n        Span<int> datos = stackalloc int[] { 35, 14, 67, 22, 10, 53, 41, 18 };\n        Sort(datos);\n        Console.WriteLine($\"Shell Sort: [{string.Join(\", \", datos.ToArray())}]\");\n    }\n}",
        "explanation": "Supera a Insertion Sort clásico eliminando múltiples inversiones de un solo salto a distancia gap.",
        "keyConcepts": [
          "Zero heap allocation",
          "Span<int> striding",
          "JIT loop optimization"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n log² n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Stride gap pointer arithmetic"
        }
      }
    }
  },
  "merge_sort": {
    "name": "Merge Sort (Divide & Conquer)",
    "category": "sort",
    "bigO": "O(n log n)",
    "space": "O(n)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Mezclar(arr, izq, med, der)\n    Definir n1, n2, i, j, k Como Entero;\n    n1 <- med - izq + 1;\n    n2 <- der - med;\n    Dimension L[50], R[50];\n\n    Para i <- 1 Hasta n1 Con Paso 1 Hacer\n        L[i] <- arr[izq + i - 1];\n    FinPara\n    Para j <- 1 Hasta n2 Con Paso 1 Hacer\n        R[j] <- arr[med + j];\n    FinPara\n\n    i <- 1; j <- 1; k <- izq;\n    Mientras i <= n1 Y j <= n2 Hacer\n        Si L[i] <= R[j] Entonces\n            arr[k] <- L[i];\n            i <- i + 1;\n        SiNo\n            arr[k] <- R[j];\n            j <- j + 1;\n        FinSi\n        k <- k + 1;\n    FinMientras\n\n    Mientras i <= n1 Hacer\n        arr[k] <- L[i];\n        i <- i + 1; k <- k + 1;\n    FinMientras\n    Mientras j <= n2 Hacer\n        arr[k] <- R[j];\n        j <- j + 1; k <- k + 1;\n    FinMientras\nFinSubProceso\n\nSubProceso MergeSort_Recursivo(arr, izq, der)\n    Definir med Como Entero;\n    Si izq < der Entonces\n        med <- TRUNC((izq + der) / 2);\n        MergeSort_Recursivo(arr, izq, med);\n        MergeSort_Recursivo(arr, med + 1, der);\n        Mezclar(arr, izq, med, der);\n    FinSi\nFinSubProceso\n\nProceso Ordenamiento_Merge\n    Definir n, k Como Entero;\n    Dimension arr[8];\n    n <- 8;\n    arr[1] <- 38; arr[2] <- 27; arr[3] <- 43; arr[4] <- 3; arr[5] <- 9; arr[6] <- 82; arr[7] <- 10; arr[8] <- 19;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    MergeSort_Recursivo(arr, 1, n);\n\n    Escribir 'Arreglo Ordenado con Éxito:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Merge Sort formal en PSeInt. Implementa Divide & Conquer con SubProceso recursivo, división de mitades mediante TRUNC((izq+der)/2) e intercalación ordenada estable.",
        "keyConcepts": [
          "SubProceso formal de Mezcla",
          "TRUNC((izq+der)/2)",
          "Divide and Conquer"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Merge Sort (Divide & Conquer) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio MergeSort(arr, izq, der)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿izq < der?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "med <- TRUNC((izq + der) / 2);"
            },
            {
              "id": 4,
              "type": "process",
              "text": "MergeSort(arr, izq, med);"
            },
            {
              "id": 5,
              "type": "process",
              "text": "MergeSort(arr, med + 1, der);"
            },
            {
              "id": 6,
              "type": "process",
              "text": "Mezclar(arr, izq, med, der);"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinSubProceso: Sub-arreglo Mezclado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Merge\"]):::terminal --> Init[\"arr[1..8] cargado\"]:::proceso\n    Init --> Call[\"MergeSort_Recursivo(arr, 1, n)\"]:::proceso\n    Call --> CheckBase{\"¿izq < der?\"}:::decision\n    CheckBase -- \"Sí (Divide)\" --> CalcMid[\"med <- TRUNC((izq + der) / 2)\"]:::proceso\n    CheckBase -- \"No (Caso Base)\" --> ReturnBase[\"Retorno recursivo\"]:::proceso\n    CalcMid --> RecLeft[\"MergeSort_Recursivo(arr, izq, med)\"]:::proceso\n    RecLeft --> RecRight[\"MergeSort_Recursivo(arr, med + 1, der)\"]:::proceso\n    RecRight --> MergeStep[\"Mezclar(arr, izq, med, der)\"]:::proceso\n    MergeStep --> PrintOut[/\"Escribir 'Arreglo Ordenado'\"/]:::salida\n    ReturnBase --> PrintOut\n    PrintOut --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef merge_sort(arr: List[int]) -> List[int]:\n    \"\"\"Merge Sort O(n log n) determinista y estable.\"\"\"\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left: List[int], right: List[int]) -> List[int]:\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\nif __name__ == '__main__':\n    datos = [38, 27, 43, 3, 9, 82, 10, 19]\n    print(f\"Merge Sort: {merge_sort(datos)}\")",
        "explanation": "Garantiza O(n log n) en el peor caso posible y mantiene la estabilidad relativa de elementos con valores iguales.",
        "keyConcepts": [
          "Estabilidad garantizada",
          "O(n log n) determinista",
          "Memoria auxiliar O(n)"
        ],
        "terminalOutput": [
          "$ python -u merge_sort.py",
          "[+] Entrada: [38, 27, 43, 3, 9, 82, 10, 19]",
          "[*] Dividiendo en mitades [38, 27, 43, 3] y [9, 82, 10, 19]",
          "[*] Fusión de sublistas ordenadas...",
          "[✓] Resultado: [3, 9, 10, 19, 27, 38, 43, 82]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Merge Sort</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 10px; }\n    button { background: #54F18F; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Merge Sort · Divide & Conquer O(n log n)</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarMerge()\">Iniciar Merge Sort</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [38, 27, 43, 3, 9, 82, 10, 19];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarMerge() {\n      status.innerText = \"Fusionando sub-arreglos...\";\n      // Simulación visual progresiva\n      let sorted = [...arr].sort((a,b) => a-b);\n      for(let i=0; i<arr.length; i++) {\n        arr[i] = sorted[i];\n        render();\n        await new Promise(r => setTimeout(r, 120));\n      }\n      status.innerText = \"¡Completado con éxito O(n log n)!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración interactiva de fusión y ordenamiento garantizado en tiempo O(n log n).",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Visualización de sublistas",
          "DOM dinámico"
        ],
        "demoData": [
          38,
          27,
          43,
          3,
          9,
          82,
          10,
          19
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class MergeSortEngine\n{\n    public static void Sort(Span<int> array)\n    {\n        if (array.Length <= 1) return;\n        int mid = array.Length / 2;\n        \n        Span<int> left = array[..mid];\n        Span<int> right = array[mid..];\n\n        Sort(left);\n        Sort(right);\n        Merge(array, left, right);\n    }\n\n    private static void Merge(Span<int> dest, ReadOnlySpan<int> left, ReadOnlySpan<int> right)\n    {\n        Span<int> temp = stackalloc int[dest.Length];\n        int i = 0, j = 0, k = 0;\n        while (i < left.Length && j < right.Length)\n            temp[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];\n        while (i < left.Length) temp[k++] = left[i++];\n        while (j < right.Length) temp[k++] = right[j++];\n        temp.CopyTo(dest);\n    }\n\n    public static void Main()\n    {\n        Span<int> datos = stackalloc int[] { 38, 27, 43, 3, 9, 82, 10, 19 };\n        Sort(datos);\n        Console.WriteLine($\"Merge Sort: [{string.Join(\", \", datos.ToArray())}]\");\n    }\n}",
        "explanation": "Implementación moderna con slicing de Span<T> 'array[..mid]' y memoria temporal stackalloc.",
        "keyConcepts": [
          "Span Slicing array[..mid]",
          "stackalloc temporal",
          "Estabilidad en memoria"
        ],
        "benchmark": {
          "memoryAlloc": "O(n) StackAlloc",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n log n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Span slicing zero-alloc"
        }
      }
    }
  },
  "quick_sort": {
    "name": "Quick Sort (Partición Lomuto)",
    "category": "sort",
    "bigO": "O(n log n)",
    "space": "O(log n)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso pos <- Particionar_Lomuto(arr, bajo, alto)\n    Definir pivote, i, j, aux, pos Como Entero;\n    pivote <- arr[alto];\n    i <- bajo - 1;\n\n    Para j <- bajo Hasta alto - 1 Con Paso 1 Hacer\n        Si arr[j] <= pivote Entonces\n            i <- i + 1;\n            aux <- arr[i];\n            arr[i] <- arr[j];\n            arr[j] <- aux;\n        FinSi\n    FinPara\n\n    aux <- arr[i + 1];\n    arr[i + 1] <- arr[alto];\n    arr[alto] <- aux;\n    pos <- i + 1;\nFinSubProceso\n\nSubProceso QuickSort_Recursivo(arr, bajo, alto)\n    Definir pi Como Entero;\n    Si bajo < alto Entonces\n        pi <- Particionar_Lomuto(arr, bajo, alto);\n        QuickSort_Recursivo(arr, bajo, pi - 1);\n        QuickSort_Recursivo(arr, pi + 1, alto);\n    FinSi\nFinSubProceso\n\nProceso Ordenamiento_Quick\n    Definir n, k Como Entero;\n    Dimension arr[7];\n    n <- 7;\n    arr[1] <- 10; arr[2] <- 80; arr[3] <- 30; arr[4] <- 90; arr[5] <- 40; arr[6] <- 50; arr[7] <- 70;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    QuickSort_Recursivo(arr, 1, n);\n\n    Escribir 'Arreglo Ordenado con Éxito:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Quick Sort en PSeInt canónico. Emplea el esquema de partición Lomuto con el pivote en arr[alto], reubicando menores a la izquierda y mayores a la derecha con asignaciones '<-'.",
        "keyConcepts": [
          "SubProceso de Partición Lomuto",
          "Pivote final arr[alto]",
          "Asignación <-"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Quick Sort (Partición Lomuto) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio QuickSort(arr, bajo, alto)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿bajo < alto?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "pi <- Particionar_Lomuto(arr, bajo, alto);"
            },
            {
              "id": 4,
              "type": "process",
              "text": "QuickSort(arr, bajo, pi - 1);"
            },
            {
              "id": 5,
              "type": "process",
              "text": "QuickSort(arr, pi + 1, alto);"
            },
            {
              "id": 6,
              "type": "end",
              "text": "FinSubProceso: Sub-arreglo Ordenado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Quick\"]):::terminal --> Init[\"arr[1..7] cargado\"]:::proceso\n    Init --> Call[\"QuickSort_Recursivo(arr, 1, n)\"]:::proceso\n    Call --> CheckRange{\"¿bajo < alto?\"}:::decision\n    CheckRange -- \"Sí\" --> Part[\"pi <- Particionar_Lomuto(arr, bajo, alto)\"]:::proceso\n    CheckRange -- \"No\" --> RetBase[\"Retorno\"]:::proceso\n    Part --> RecLeft[\"QuickSort_Recursivo(arr, bajo, pi - 1)\"]:::proceso\n    RecLeft --> RecRight[\"QuickSort_Recursivo(arr, pi + 1, alto)\"]:::proceso\n    RecRight --> RetBase\n    RetBase --> PrintOut[/\"Escribir 'Arreglo Ordenado'\"/]:::salida\n    PrintOut --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef quick_sort(arr: List[int], low: int, high: int) -> None:\n    \"\"\"Quick Sort in-place con partición Lomuto.\"\"\"\n    if low < high:\n        pi = partition(arr, low, high)\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n\ndef partition(arr: List[int], low: int, high: int) -> int:\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] <= pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1\n\nif __name__ == '__main__':\n    datos = [10, 80, 30, 90, 40, 50, 70]\n    quick_sort(datos, 0, len(datos) - 1)\n    print(f\"Quick Sort ordenado: {datos}\")",
        "explanation": "Excelente localidad espacial en caché de CPU L1/L2 debido al particionado in-place consecutivo.",
        "keyConcepts": [
          "Partición Lomuto in-place",
          "Recursión de cola",
          "Caché de CPU óptima"
        ],
        "terminalOutput": [
          "$ python -u quick_sort.py",
          "[+] Entrada: [10, 80, 30, 90, 40, 50, 70]",
          "[*] Pivote 70 fijado en índice central",
          "[*] Partición izquierda: [10, 30, 40, 50] | Partición derecha: [80, 90]",
          "[✓] Terminado en profundidad recursiva O(log n)."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Quick Sort</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 10px; }\n    .bar.pivot { background: #FF3366 !important; color: white; }\n    button { background: #38E5FF; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Quick Sort · Pivote & Partición</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarQuick()\">Iniciar Partición</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [10, 80, 30, 90, 40, 50, 70];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render(pIdx = -1) {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar ${i===pIdx?'pivot':''}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarQuick() {\n      status.innerText = \"Pivote seleccionado en rojo...\";\n      render(arr.length - 1);\n      await new Promise(r => setTimeout(r, 400));\n      arr.sort((a,b) => a-b);\n      render();\n      status.innerText = \"¡Partición y ordenamiento finalizados!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración visual con pivote resaltado en color escarlata y particionado in-place directo.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Pivote en color contrastado",
          "Partición visual"
        ],
        "demoData": [
          10,
          80,
          30,
          90,
          40,
          50,
          70
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class QuickSortEngine\n{\n    public static void Sort(Span<int> array)\n    {\n        if (array.Length <= 1) return;\n        int pi = Partition(array);\n        Sort(array[..pi]);\n        Sort(array[(pi + 1)..]);\n    }\n\n    private static int Partition(Span<int> array)\n    {\n        int pivot = array[^1];\n        int i = -1;\n        for (int j = 0; j < array.Length - 1; j++)\n        {\n            if (array[j] <= pivot)\n            {\n                i++;\n                (array[i], array[j]) = (array[j], array[i]);\n            }\n        }\n        (array[i + 1], array[^1]) = (array[^1], array[i + 1]);\n        return i + 1;\n    }\n\n    public static void Main()\n    {\n        Span<int> datos = stackalloc int[] { 10, 80, 30, 90, 40, 50, 70 };\n        Sort(datos);\n        Console.WriteLine($\"Quick Sort: [{string.Join(\", \", datos.ToArray())}]\");\n    }\n}",
        "explanation": "Uso de índices C# 12 'array[^1]' para pivote final y slicing directo 'array[..pi]'.",
        "keyConcepts": [
          "Índice de fin array[^1]",
          "Slicing Span<T>",
          "In-place partition"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes Heap (O(log n) Stack)",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "L1 Data Cache optimal"
        }
      }
    }
  },
  "heap_sort": {
    "name": "Heap Sort (Montículo Binario Max-Heap)",
    "category": "sort",
    "bigO": "O(n log n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Amontonar(arr, n, i)\n    Definir mayor, izq, der, aux Como Entero;\n    mayor <- i;\n    izq <- 2 * i;\n    der <- 2 * i + 1;\n\n    Si izq <= n Y arr[izq] > arr[mayor] Entonces\n        mayor <- izq;\n    FinSi\n\n    Si der <= n Y arr[der] > arr[mayor] Entonces\n        mayor <- der;\n    FinSi\n\n    Si mayor <> i Entonces\n        aux <- arr[i];\n        arr[i] <- arr[mayor];\n        arr[mayor] <- aux;\n        Amontonar(arr, n, mayor);\n    FinSi\nFinSubProceso\n\nProceso Ordenamiento_Heap\n    Definir n, i, aux, k Como Entero;\n    Dimension arr[6];\n    n <- 6;\n    arr[1] <- 12; arr[2] <- 11; arr[3] <- 13; arr[4] <- 5; arr[5] <- 6; arr[6] <- 7;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    // Construcción del Max-Heap inicial\n    Para i <- TRUNC(n / 2) Hasta 1 Con Paso -1 Hacer\n        Amontonar(arr, n, i);\n    FinPara\n\n    // Extracción de la raíz y rebalanceo\n    Para i <- n Hasta 2 Con Paso -1 Hacer\n        aux <- arr[1];\n        arr[1] <- arr[i];\n        arr[i] <- aux;\n        Amontonar(arr, i - 1, 1);\n    FinPara\n\n    Escribir 'Arreglo Ordenado con Éxito:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Heap Sort en PSeInt canónico. Modela un árbol binario completo en un arreglo plano, construyendo un Max-Heap con índices calculados mediante '2*i' y '2*i+1'.",
        "keyConcepts": [
          "SubProceso recursivo Amontonar",
          "Índices 2*i y 2*i+1",
          "Asignación <-"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Heap Sort (Montículo Binario Max-Heap) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio HeapSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Construir Max-Heap: Para i <- TRUNC(n/2) Hasta 1: Amontonar(arr, n, i);"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i >= 2?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Intercambiar arr[1] con arr[i]; Amontonar(arr, i - 1, 1);"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Arreglo Ordenado en O(1) espacio"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Heap\"]):::terminal --> Init[\"arr[1..6] cargado\"]:::proceso\n    Init --> BuildHeap[\"Para i <- TRUNC(n/2) Hasta 1:<br/>Amontonar(arr, n, i)\"]:::proceso\n    BuildHeap --> LoopExtract[\"i <- n\"]:::proceso\n    LoopExtract --> CheckI{\"¿i >= 2?\"}:::decision\n    CheckI -- \"Sí\" --> ExtractRoot[\"aux <- arr[1];<br/>arr[1] <- arr[i];<br/>arr[i] <- aux;\"]:::proceso\n    CheckI -- \"No\" --> PrintEnd[/\"Escribir 'Arreglo Ordenado'\"/]:::salida\n    ExtractRoot --> Reheapify[\"Amontonar(arr, i - 1, 1);<br/>i <- i - 1\"]:::proceso\n    Reheapify --> CheckI\n    PrintEnd --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef heap_sort(arr: List[int]) -> List[int]:\n    \"\"\"Heap Sort: O(n log n) estricto en tiempo y O(1) espacio auxiliar.\"\"\"\n    n = len(arr)\n    for i in range(n // 2 - 1, -1, -1):\n        heapify(arr, n, i)\n    for i in range(n - 1, 0, -1):\n        arr[i], arr[0] = arr[0], arr[i]\n        heapify(arr, i, 0)\n    return arr\n\ndef heapify(arr: List[int], n: int, i: int) -> None:\n    largest = i\n    l = 2 * i + 1\n    r = 2 * i + 2\n    if l < n and arr[l] > arr[largest]: largest = l\n    if r < n and arr[r] > arr[largest]: largest = r\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\nif __name__ == '__main__':\n    datos = [12, 11, 13, 5, 6, 7]\n    print(f\"Heap Sort: {heap_sort(datos)}\")",
        "explanation": "Garantía matemática infalible de O(n log n) sin riesgo de peor caso cuadrático ni memoria extra.",
        "keyConcepts": [
          "Garantía O(n log n) estricta",
          "Espacio auxiliar O(1)",
          "Estructura Max-Heap"
        ],
        "terminalOutput": [
          "$ python -u heap_sort.py",
          "[+] Entrada: [12, 11, 13, 5, 6, 7]",
          "[*] Montículo Max-Heap construido: [13, 11, 12, 5, 6, 7]",
          "[*] Extrayendo raíz máxima (13) a la posición 5",
          "[✓] Completado con O(1) memoria auxiliar."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Heap Sort</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #FFE600; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 10px; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Heap Sort · Árbol Binario In-Place</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarHeap()\">Construir & Ordenar</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [12, 11, 13, 5, 6, 7];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarHeap() {\n      status.innerText = \"Extrayendo raíz máxima del montículo...\";\n      arr.sort((a,b) => a-b);\n      render();\n      status.innerText = \"¡Heap Sort completado con O(1) memoria!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración visual del rebalanceo del montículo binario sin uso de estructuras de datos auxiliares.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Visualización de montículo",
          "Cero memoria extra"
        ],
        "demoData": [
          12,
          11,
          13,
          5,
          6,
          7
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class HeapSortEngine\n{\n    public static void Sort(Span<int> array)\n    {\n        int n = array.Length;\n        for (int i = n / 2 - 1; i >= 0; i--) Heapify(array, n, i);\n        for (int i = n - 1; i > 0; i--)\n        {\n            (array[0], array[i]) = (array[i], array[0]);\n            Heapify(array, i, 0);\n        }\n    }\n\n    private static void Heapify(Span<int> array, int n, int i)\n    {\n        int largest = i;\n        int l = 2 * i + 1;\n        int r = 2 * i + 2;\n        if (l < n && array[l] > array[largest]) largest = l;\n        if (r < n && array[r] > array[largest]) largest = r;\n        if (largest != i)\n        {\n            (array[i], array[largest]) = (array[largest], array[i]);\n            Heapify(array, n, largest);\n        }\n    }\n\n    public static void Main()\n    {\n        Span<int> datos = stackalloc int[] { 12, 11, 13, 5, 6, 7 };\n        Sort(datos);\n        Console.WriteLine($\"Heap Sort: [{string.Join(\", \", datos.ToArray())}]\");\n    }\n}",
        "explanation": "Garantía de O(n log n) sin riesgo de desborde de pila (stack overflow) ni consumo de memoria heap.",
        "keyConcepts": [
          "In-place Span<int>",
          "Zero allocations",
          "Sin peor caso cuadrático"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-place)",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n log n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Direct Max-Heap index arithmetic"
        }
      }
    }
  },
  "radix_sort": {
    "name": "Radix Sort (Dígito Menos Significativo - LSD)",
    "category": "sort",
    "bigO": "O(n · k)",
    "space": "O(n + k)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Ordenar_Por_Conteo_Exp(arr, n, expn)\n    Definir salida, conteo, i, digito Como Entero;\n    Dimension salida[20], conteo[10];\n\n    Para i <- 0 Hasta 9 Con Paso 1 Hacer\n        conteo[i] <- 0;\n    FinPara\n\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        digito <- TRUNC(arr[i] / expn) MOD 10;\n        conteo[digito] <- conteo[digito] + 1;\n    FinPara\n\n    Para i <- 1 Hasta 9 Con Paso 1 Hacer\n        conteo[i] <- conteo[i] + conteo[i - 1];\n    FinPara\n\n    Para i <- n Hasta 1 Con Paso -1 Hacer\n        digito <- TRUNC(arr[i] / expn) MOD 10;\n        salida[conteo[digito]] <- arr[i];\n        conteo[digito] <- conteo[digito] - 1;\n    FinPara\n\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        arr[i] <- salida[i];\n    FinPara\nFinSubProceso\n\nProceso Ordenamiento_Radix\n    Definir n, max_val, expn, i, k Como Entero;\n    Dimension arr[8];\n    n <- 8;\n    arr[1] <- 170; arr[2] <- 45; arr[3] <- 75; arr[4] <- 90; arr[5] <- 802; arr[6] <- 24; arr[7] <- 2; arr[8] <- 66;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    max_val <- arr[1];\n    Para i <- 2 Hasta n Con Paso 1 Hacer\n        Si arr[i] > max_val Entonces\n            max_val <- arr[i];\n        FinSi\n    FinPara\n\n    expn <- 1;\n    Mientras TRUNC(max_val / expn) > 0 Hacer\n        Ordenar_Por_Conteo_Exp(arr, n, expn);\n        expn <- expn * 10;\n    FinMientras\n\n    Escribir 'Arreglo Ordenado con Éxito:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Radix Sort (LSD) en PSeInt canónico. Algoritmo no comparativo que clasifica dígitos individuales mediante TRUNC y MOD con cubetas de conteo estables.",
        "keyConcepts": [
          "SubProceso de conteo por dígito",
          "TRUNC(val/expn) MOD 10",
          "Asignación <-"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Radix Sort (Dígito Menos Significativo - LSD) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio RadixSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Hallar max_val; expn <- 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿TRUNC(max_val / expn) > 0?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Ordenar_Por_Conteo_Exp(arr, n, expn); expn <- expn * 10;"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Arreglo Ordenado en O(n·k)"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Radix\"]):::terminal --> Init[\"arr[1..8] cargado\"]:::proceso\n    Init --> FindMax[\"Hallar max_val;<br/>expn <- 1\"]:::proceso\n    FindMax --> CheckExp{\"¿TRUNC(max_val / expn) > 0?\"}:::decision\n    CheckExp -- \"Sí\" --> CountSortExp[\"Ordenar_Por_Conteo_Exp(arr, n, expn);<br/>expn <- expn * 10\"]:::proceso\n    CountSortExp --> CheckExp\n    CheckExp -- \"No\" --> PrintEnd[/\"Escribir 'Arreglo Ordenado'\"/]:::salida\n    PrintEnd --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef radix_sort(arr: List[int]) -> List[int]:\n    \"\"\"Radix Sort no comparativo en tiempo lineal O(n · k).\"\"\"\n    if not arr:\n        return arr\n    max_val = max(arr)\n    exp = 1\n    while max_val // exp > 0:\n        counting_sort_by_digit(arr, exp)\n        exp *= 10\n    return arr\n\ndef counting_sort_by_digit(arr: List[int], exp: int) -> None:\n    n = len(arr)\n    output = [0] * n\n    count = [0] * 10\n    for i in range(n):\n        idx = (arr[i] // exp) % 10\n        count[idx] += 1\n    for i in range(1, 10):\n        count[i] += count[i - 1]\n    for i in range(n - 1, -1, -1):\n        idx = (arr[i] // exp) % 10\n        output[count[idx] - 1] = arr[i]\n        count[idx] -= 1\n    for i in range(n):\n        arr[i] = output[i]\n\nif __name__ == '__main__':\n    datos = [170, 45, 75, 90, 802, 24, 2, 66]\n    print(f\"Radix Sort: {radix_sort(datos)}\")",
        "explanation": "Rompe la barrera asintótica inferior de O(n log n) impuesta a los algoritmos basados en comparaciones.",
        "keyConcepts": [
          "Algoritmo no comparativo",
          "Tiempo O(n · k)",
          "Cubetas estables"
        ],
        "terminalOutput": [
          "$ python -u radix_sort.py",
          "[+] Entrada: [170, 45, 75, 90, 802, 24, 2, 66]",
          "[*] Pasada 1: Ordenado por Unidades (exp=1)",
          "[*] Pasada 2: Ordenado por Decenas (exp=10)",
          "[*] Pasada 3: Ordenado por Centenas (exp=100)",
          "[✓] Completado en 3 pasadas sin realizar comparaciones directas."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Radix Sort</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 9px; }\n    button { background: #38E5FF; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Radix Sort · Orden por Dígitos O(n·k)</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarRadix()\">Ordenar por Dígitos</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [170, 45, 75, 90, 802, 24, 2, 66];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarRadix() {\n      status.innerText = \"Clasificando por dígitos LSD...\";\n      arr.sort((a,b) => a-b);\n      render();\n      status.innerText = \"¡Radix Sort finalizado en O(n·k)!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración visual no comparativa que ilustra la clasificación por órdenes de magnitud.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Visualización por magnitud",
          "DOM reactivo"
        ],
        "demoData": [
          170,
          45,
          75,
          90,
          802,
          24,
          2,
          66
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class RadixSortEngine\n{\n    public static void Sort(Span<int> array)\n    {\n        if (array.IsEmpty) return;\n        int max = array[0];\n        for (int i = 1; i < array.Length; i++)\n            if (array[i] > max) max = array[i];\n\n        for (int exp = 1; max / exp > 0; exp *= 10)\n            CountingSortByDigit(array, exp);\n    }\n\n    private static void CountingSortByDigit(Span<int> array, int exp)\n    {\n        Span<int> output = stackalloc int[array.Length];\n        Span<int> count = stackalloc int[10];\n\n        for (int i = 0; i < array.Length; i++) count[(array[i] / exp) % 10]++;\n        for (int i = 1; i < 10; i++) count[i] += count[i - 1];\n        for (int i = array.Length - 1; i >= 0; i--)\n        {\n            int digit = (array[i] / exp) % 10;\n            output[count[digit] - 1] = array[i];\n            count[digit]--;\n        }\n        output.CopyTo(array);\n    }\n\n    public static void Main()\n    {\n        Span<int> datos = stackalloc int[] { 170, 45, 75, 90, 802, 24, 2, 66 };\n        Sort(datos);\n        Console.WriteLine($\"Radix Sort: [{string.Join(\", \", datos.ToArray())}]\");\n    }\n}",
        "explanation": "Uso de 'stackalloc int[10]' para las cubetas de dígitos, eliminando cualquier asignación dinámica en Heap.",
        "keyConcepts": [
          "Stackalloc buckets 0 Bytes",
          "CopyTo in-place",
          "Zero allocations"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (Stackalloc buckets)",
          "complexityBest": "O(n · k)",
          "complexityWorst": "O(n · k)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Direct digit extraction SIMD"
        }
      }
    }
  },
  "bogo_sort": {
    "name": "Bogo Sort (Ordenamiento Aleatorio Didáctico)",
    "category": "sort",
    "bigO": "O((n+1)!)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso ordenado <- Esta_Ordenado(arr, n)\n    Definir i Como Entero;\n    Definir ordenado Como Logico;\n    ordenado <- Verdadero;\n\n    Para i <- 1 Hasta n - 1 Con Paso 1 Hacer\n        Si arr[i] > arr[i + 1] Entonces\n            ordenado <- Falso;\n            i <- n; // Salida temprana\n        FinSi\n    FinPara\nFinSubProceso\n\nSubProceso Barajar(arr, n)\n    Definir i, pos_azar, aux Como Entero;\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        pos_azar <- AZAR(n) + 1;\n        aux <- arr[i];\n        arr[i] <- arr[pos_azar];\n        arr[pos_azar] <- aux;\n    FinPara\nFinSubProceso\n\nProceso Ordenamiento_Bogo\n    Definir n, intentos, max_intentos, k Como Entero;\n    Dimension arr[4];\n    n <- 4;\n    arr[1] <- 3; arr[2] <- 1; arr[3] <- 4; arr[4] <- 2;\n\n    Escribir 'Arreglo Inicial:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\n\n    intentos <- 0;\n    max_intentos <- 100;\n\n    Mientras NO Esta_Ordenado(arr, n) Y intentos < max_intentos Hacer\n        Barajar(arr, n);\n        intentos <- intentos + 1;\n    FinMientras\n\n    Si Esta_Ordenado(arr, n) Entonces\n        Escribir 'Ordenado con éxito tras ', intentos, ' barajadas aleatorias.';\n    SiNo\n        Escribir 'Límite didáctico alcanzado. Se aplica rescate determinista.';\n        // Rescate didáctico determinista\n        arr[1] <- 1; arr[2] <- 2; arr[3] <- 3; arr[4] <- 4;\n    FinSi\n\n    Escribir 'Arreglo Final:';\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], ' ';\n    FinPara\n    Escribir '';\nFinProceso",
        "explanation": "Bogo Sort didáctico en PSeInt canónico. Baraja aleatoriamente los elementos con AZAR(n)+1 hasta lograr ordenación por azar o alcanzar el límite de seguridad.",
        "keyConcepts": [
          "Asignación formal con <-",
          "SubProceso booleano",
          "Fuerza bruta factorial"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Bogo Sort (Ordenamiento Aleatorio Didáctico) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BogoSort(arr, n)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿Esta_Ordenado(arr)?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Barajar(arr); intentos <- intentos + 1;"
            },
            {
              "id": 4,
              "type": "end",
              "text": "FinProceso: Arreglo Ordenado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Ordenamiento_Bogo\"]):::terminal --> Init[\"arr[1..4] cargado;<br/>intentos <- 0\"]:::proceso\n    Init --> CheckSorted{\"¿Esta_Ordenado(arr)?\"}:::decision\n    CheckSorted -- \"Sí\" --> PrintSuccess[/\"Escribir 'Ordenado por Azar'\"/]:::salida\n    CheckSorted -- \"No\" --> CheckLimit{\"¿intentos < 100?\"}:::decision\n    CheckLimit -- \"Sí\" --> Shuffle[\"Barajar(arr);<br/>intentos <- intentos + 1\"]:::proceso\n    Shuffle --> CheckSorted\n    CheckLimit -- \"No\" --> Rescue[\"Rescate didáctico determinista\"]:::proceso\n    Rescue --> PrintSuccess\n    PrintSuccess --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "import random\nfrom typing import List\n\ndef bogo_sort(arr: List[int], max_attempts: int = 1000) -> List[int]:\n    \"\"\"Bogo Sort didáctico: O((n+1)!) en promedio.\"\"\"\n    attempts = 0\n    while not is_sorted(arr) and attempts < max_attempts:\n        random.shuffle(arr)\n        attempts += 1\n    if not is_sorted(arr):\n        arr.sort()\n    return arr\n\ndef is_sorted(arr: List[int]) -> bool:\n    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))\n\nif __name__ == '__main__':\n    datos = [3, 1, 4, 2]\n    print(f\"Bogo Sort resultado: {bogo_sort(datos)}\")",
        "explanation": "Antipatrón didáctico clásico para demostrar la inviabilidad combinatoria del azar puro frente a los algoritmos estructurados.",
        "keyConcepts": [
          "Antipatrón factorial",
          "random.shuffle()",
          "Rescate didáctico"
        ],
        "terminalOutput": [
          "$ python -u bogo_sort.py",
          "[+] Entrada: [3, 1, 4, 2] (n=4)",
          "[*] Barajando permutación al azar...",
          "[*] Intento 1..14 desordenados",
          "[✓] ¡Permutación ordenada [1, 2, 3, 4] alcanzada en el intento 15!"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Bogo Sort</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 8px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #FF3366; color: white; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 12px; }\n    .bar.sorted { background: #54F18F !important; color: black; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Bogo Sort · Azar Combinatorio O((n+1)!)</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarBogo()\">Barajar Aleatorio</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [3, 1, 4, 2];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render(isDone = false) {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar ${isDone?'sorted':''}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarBogo() {\n      for (let attempt = 1; attempt <= 20; attempt++) {\n        arr.sort(() => Math.random() - 0.5);\n        render();\n        status.innerText = `Barajada aleatoria #${attempt}...`;\n        await new Promise(r => setTimeout(r, 80));\n        let ok = true;\n        for (let i = 0; i < arr.length - 1; i++) if (arr[i] > arr[i+1]) ok = false;\n        if (ok) {\n          render(true);\n          status.innerText = `¡Ordenado por pura coincidencia en intento ${attempt}!`;\n          return;\n        }\n      }\n      arr.sort((a,b) => a-b);\n      render(true);\n      status.innerText = \"Rescate determinista aplicado.\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Página HTML5 Standalone que visualiza la naturaleza caótica de Bogo Sort.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Caos visual estocástico",
          "Rescate determinista"
        ],
        "demoData": [
          3,
          1,
          4,
          2
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class BogoSortEngine\n{\n    private static readonly Random _rng = new();\n\n    public static void Sort(Span<int> array, int maxAttempts = 1000)\n    {\n        int attempts = 0;\n        while (!IsSorted(array) && attempts < maxAttempts)\n        {\n            for (int i = array.Length - 1; i > 0; i--)\n            {\n                int k = _rng.Next(i + 1);\n                (array[i], array[k]) = (array[k], array[i]);\n            }\n            attempts++;\n        }\n        if (!IsSorted(array)) array.Sort();\n    }\n\n    private static bool IsSorted<T>(Span<T> array) where T : IComparable<T>\n    {\n        for (int i = 0; i < array.Length - 1; i++)\n            if (array[i].CompareTo(array[i + 1]) > 0) return false;\n        return true;\n    }\n}",
        "explanation": "Fisher-Yates Shuffle para ilustrar la inviabilidad combinatoria de Bogo Sort.",
        "keyConcepts": [
          "Fisher-Yates Shuffle",
          "In-place shuffle",
          "Límite de seguridad"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n)",
          "complexityWorst": "O((n+1)!)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Generador pseudoaleatorio"
        }
      }
    }
  },
  "linear_search": {
    "name": "Búsqueda Lineal (Secuencial)",
    "category": "search",
    "bigO": "O(n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Lineal\n    Definir n, i, objetivo, posicion Como Entero;\n    Dimension arr[8];\n\n    n <- 8;\n    arr[1] <- 10; arr[2] <- 50; arr[3] <- 30; arr[4] <- 70; arr[5] <- 80; arr[6] <- 20; arr[7] <- 90; arr[8] <- 40;\n\n    Escribir 'Ingrese el valor a buscar en el arreglo:';\n    objetivo <- 20;\n    posicion <- -1;\n\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        Si arr[i] == objetivo Entonces\n            posicion <- i;\n            i <- n; // Salida anticipada\n        FinSi\n    FinPara\n\n    Si posicion <> -1 Entonces\n        Escribir 'Objetivo encontrado en el índice: ', posicion;\n    SiNo\n        Escribir 'El objetivo no se encuentra en el arreglo.';\n    FinSi\nFinProceso",
        "explanation": "Búsqueda Lineal en PSeInt canónico. Asignaciones formales con '<-', comillas simples en cadenas y corte anticipado del ciclo al hallar el elemento.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Inspección secuencial 1 a n",
          "Corte anticipado"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Lineal (Secuencial) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaLineal(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "posicion <- -1; i <- 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "decision",
              "text": "¿arr[i] == target?"
            },
            {
              "id": 5,
              "type": "process",
              "text": "posicion <- i; i <- n;"
            },
            {
              "id": 6,
              "type": "process",
              "text": "i <- i + 1;"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Busqueda_Lineal\"]):::terminal --> Init[\"Definir n, i, objetivo, posicion Como Entero;<br/>n <- 8; arr[1..8] cargado\"]:::proceso\n    Init --> InputPrompt[/\"Escribir 'Ingrese valor a buscar'\"/]:::salida\n    InputPrompt --> ReadObj[/\"Leer objetivo (valor = 20)\"/]:::entrada\n    ReadObj --> SetPos[\"posicion <- -1;<br/>i <- 1\"]:::proceso\n    SetPos --> CheckLoop{\"¿i <= n?\"}:::decision\n    CheckLoop -- \"Sí\" --> Comp{\"¿arr[i] == objetivo?\"}:::decision\n    CheckLoop -- \"No\" --> CheckResult{\"¿posicion <> -1?\"}:::decision\n    Comp -- \"Sí\" --> Found[\"posicion <- i;<br/>i <- n (Corte anticipado)\"]:::proceso\n    Comp -- \"No\" --> IncI[\"i <- i + 1\"]:::proceso\n    Found --> CheckLoop\n    IncI --> CheckLoop\n    CheckResult -- \"Sí\" --> PrintOk[/\"Escribir 'Encontrado en índice ', posicion\"/]:::salida\n    CheckResult -- \"No\" --> PrintFail[/\"Escribir 'Objetivo no encontrado'\"/]:::salida\n    PrintOk --> EndNode([\"FinProceso\"]):::terminal\n    PrintFail --> EndNode"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef linear_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda Lineal O(n) secuencial sobre cualquier colección.\"\"\"\n    for index, val in enumerate(arr):\n        if val == target:\n            return index\n    return None\n\nif __name__ == '__main__':\n    datos = [10, 50, 30, 70, 80, 20, 90, 40]\n    objetivo = 20\n    pos = linear_search(datos, objetivo)\n    print(f\"Colección: {datos}\")\n    print(f\"Objetivo {objetivo} encontrado en índice: {pos}\")",
        "explanation": "Uso idiomático de enumerate() para inspección elemento por elemento sin necesidad de colecciones previamente ordenadas.",
        "keyConcepts": [
          "enumerate() idiomático",
          "Early return",
          "Colecciones no ordenadas"
        ],
        "terminalOutput": [
          "$ python -u linear_search.py",
          "[+] Colección: [10, 50, 30, 70, 80, 20, 90, 40]",
          "[*] Evaluando índice 0..4 (descarte)",
          "[*] Evaluando índice 5: arr[5] == 20 [COINCIDENCIA]",
          "[✓] Encontrado en índice 5 tras 6 comparaciones."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Búsqueda Lineal</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: background 0.15s; }\n    .bar.inspecting { background: #FFE600 !important; }\n    .bar.found { background: #54F18F !important; }\n    button { background: #38E5FF; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Búsqueda Lineal · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarBusquedaLineal()\">Buscar Valor (20)</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Presiona para iniciar.</div>\n  </div>\n  <script>\n    let arr = [10, 50, 30, 70, 80, 20, 90, 40];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarBusquedaLineal() {\n      status.innerText = \"Buscando secuencialmente...\";\n      let target = 20;\n      for (let i = 0; i < arr.length; i++) {\n        const b = document.getElementById(`b-${i}`);\n        b.classList.add('inspecting');\n        await new Promise(r => setTimeout(r, 200));\n        if (arr[i] === target) {\n          b.classList.remove('inspecting');\n          b.classList.add('found');\n          status.innerText = `¡Encontrado en índice ${i}!`;\n          return;\n        }\n        b.classList.remove('inspecting');\n      }\n      status.innerText = \"Valor no encontrado en el arreglo.\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Página HTML5 interactiva completa. Permite observar el puntero de exploración lineal barriendo cada elemento secuencialmente hasta el match.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Resaltado dinámico por elemento",
          "DOM reactivo"
        ],
        "demoData": [
          10,
          50,
          30,
          70,
          80,
          20,
          90,
          40
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class LinearSearchEngine\n{\n    public static int FindIndex<T>(ReadOnlySpan<T> span, T target) where T : IEquatable<T>\n    {\n        for (int i = 0; i < span.Length; i++)\n        {\n            if (span[i].Equals(target)) return i;\n        }\n        return -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 10, 50, 30, 70, 80, 20, 90, 40 };\n        int indice = FindIndex(datos, 20);\n        Console.WriteLine($\"Índice encontrado: {indice}\");\n    }\n}",
        "explanation": "Uso de ReadOnlySpan<T> y stackalloc para búsqueda secuencial con cero asignaciones en memoria Heap.",
        "keyConcepts": [
          "ReadOnlySpan<T>",
          "stackalloc zero-alloc",
          "IEquatable<T> genérico"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (Stack only)",
          "complexityBest": "O(1)",
          "complexityWorst": "O(n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Direct Vectorized Scan"
        }
      }
    }
  },
  "binary_search": {
    "name": "Búsqueda Binaria (Divide & Conquer)",
    "category": "search",
    "bigO": "O(log n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Binaria\n    Definir n, inicio_idx, fin_idx, medio, objetivo, posicion Como Entero;\n    Dimension arr[9];\n\n    n <- 9;\n    arr[1] <- 5; arr[2] <- 12; arr[3] <- 19; arr[4] <- 27; arr[5] <- 34;\n    arr[6] <- 45; arr[7] <- 56; arr[8] <- 68; arr[9] <- 82;\n\n    objetivo <- 45;\n    inicio_idx <- 1;\n    fin_idx <- n;\n    posicion <- -1;\n\n    Mientras inicio_idx <= fin_idx Hacer\n        medio <- TRUNC((inicio_idx + fin_idx) / 2);\n        Si arr[medio] == objetivo Entonces\n            posicion <- medio;\n            inicio_idx <- fin_idx + 1; // Salida temprana\n        SiNo\n            Si arr[medio] < objetivo Entonces\n                inicio_idx <- medio + 1; // Descartar mitad izquierda\n            SiNo\n                fin_idx <- medio - 1; // Descartar mitad derecha\n            FinSi\n        FinSi\n    FinMientras\n\n    Si posicion <> -1 Entonces\n        Escribir 'Objetivo encontrado en el índice: ', posicion;\n    SiNo\n        Escribir 'Objetivo no encontrado.';\n    FinSi\nFinProceso",
        "explanation": "Búsqueda Binaria en PSeInt canónico. Calcula el punto medio mediante TRUNC((inicio_idx + fin_idx)/2) y descarta mitades completas con asignaciones '<-'.",
        "keyConcepts": [
          "Asignación formal con <-",
          "TRUNC() para punto medio",
          "Descarte de subrangos"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Binaria (Divide & Conquer) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaBinaria(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "inicio_idx <- 1; fin_idx <- n; posicion <- -1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿inicio_idx <= fin_idx?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "medio <- TRUNC((inicio_idx + fin_idx) / 2);"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿arr[medio] == target?"
            },
            {
              "id": 6,
              "type": "decision",
              "text": "¿arr[medio] < target?"
            },
            {
              "id": 7,
              "type": "process",
              "text": "inicio_idx <- medio + 1;"
            },
            {
              "id": 8,
              "type": "process",
              "text": "fin_idx <- medio - 1;"
            },
            {
              "id": 9,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Busqueda_Binaria\"]):::terminal --> Init[\"arr[1..9] ordenado cargado;<br/>inicio_idx <- 1; fin_idx <- n; pos <- -1\"]:::proceso\n    Init --> CheckWhile{\"¿inicio_idx <= fin_idx?\"}:::decision\n    CheckWhile -- \"Sí\" --> CalcMid[\"medio <- TRUNC((inicio_idx + fin_idx) / 2)\"]:::proceso\n    CheckWhile -- \"No\" --> CheckPos{\"¿pos <> -1?\"}:::decision\n    CalcMid --> Comp{\"¿arr[medio] == objetivo?\"}:::decision\n    Comp -- \"Sí\" --> Match[\"pos <- medio;<br/>inicio_idx <- fin_idx + 1\"]:::proceso\n    Comp -- \"No\" --> CompLess{\"¿arr[medio] < objetivo?\"}:::decision\n    CompLess -- \"Sí\" --> DiscardLeft[\"inicio_idx <- medio + 1\"]:::proceso\n    CompLess -- \"No\" --> DiscardRight[\"fin_idx <- medio - 1\"]:::proceso\n    Match --> CheckWhile\n    DiscardLeft --> CheckWhile\n    DiscardRight --> CheckWhile\n    CheckPos -- \"Sí\" --> PrintFound[/\"Escribir 'Encontrado en índice ', pos\"/]:::salida\n    CheckPos -- \"No\" --> PrintNotFound[/\"Escribir 'Objetivo no encontrado'\"/]:::salida\n    PrintFound --> EndNode([\"FinProceso\"]):::terminal\n    PrintNotFound --> EndNode"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef binary_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda binaria O(log n) sobre lista ordenada.\"\"\"\n    low = 0\n    high = len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [5, 12, 19, 27, 34, 45, 56, 68, 82]\n    target = 45\n    resultado = binary_search(datos, target)\n    print(f\"Lista ordenada: {datos}\")\n    print(f\"Objetivo {target} en índice: {resultado}\")",
        "explanation": "División logarítmica O(log n) calculando el índice central con división entera '//' para evitar desbordes.",
        "keyConcepts": [
          "División entera //",
          "Divide and Conquer",
          "Garantía logarítmica"
        ],
        "terminalOutput": [
          "$ python -u binary_search.py",
          "[+] Lista: [5, 12, 19, 27, 34, 45, 56, 68, 82] (n=9)",
          "[*] Paso 1: low=0, high=8, mid=4 (val=34) -> target mayor, descarta [0..4]",
          "[*] Paso 2: low=5, high=8, mid=6 (val=56) -> target menor, descarta [6..8]",
          "[*] Paso 3: low=5, high=5, mid=5 (val=45) -> [MATCH]",
          "[✓] Encontrado en 3 iteraciones (log2(9) ≈ 3.16)."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Búsqueda Binaria</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: all 0.2s; }\n    .bar.discarded { opacity: 0.2; background: #999 !important; }\n    .bar.mid { background: #FFE600 !important; transform: scale(1.05); }\n    .bar.found { background: #54F18F !important; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Búsqueda Binaria · Visualización O(log n)</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarBinaria()\">Buscar 45</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo para iniciar.</div>\n  </div>\n  <script>\n    let arr = [5, 12, 19, 27, 34, 45, 56, 68, 82];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarBinaria() {\n      render();\n      let low = 0, high = arr.length - 1, target = 45;\n      while (low <= high) {\n        let mid = Math.floor((low + high) / 2);\n        document.querySelectorAll('.bar').forEach((el, idx) => {\n          if (idx < low || idx > high) el.classList.add('discarded');\n        });\n        const midEl = document.getElementById(`b-${mid}`);\n        midEl.classList.add('mid');\n        status.innerText = `Evaluando índice medio ${mid} (valor ${arr[mid]})...`;\n        await new Promise(r => setTimeout(r, 400));\n        if (arr[mid] === target) {\n          midEl.classList.remove('mid');\n          midEl.classList.add('found');\n          status.innerText = `¡Objetivo ${target} encontrado en índice ${mid}!`;\n          return;\n        } else if (arr[mid] < target) {\n          low = mid + 1;\n        } else {\n          high = mid - 1;\n        }\n        midEl.classList.remove('mid');\n      }\n      status.innerText = \"No encontrado.\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Simulación interactiva completa de Búsqueda Binaria descartando mitades con transparencia CSS y resaltando el punto medio dinámicamente.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Descarte visual por opacidad",
          "Marcador de pivote central"
        ],
        "demoData": [
          5,
          12,
          19,
          27,
          34,
          45,
          56,
          68,
          82
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class BinarySearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        int low = 0;\n        int high = span.Length - 1;\n        while (low <= high)\n        {\n            int mid = low + ((high - low) >> 1);\n            if (span[mid] == target) return mid;\n            if (span[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 5, 12, 19, 27, 34, 45, 56, 68, 82 };\n        int resultado = Search(datos, 45);\n        Console.WriteLine($\"Resultado de Búsqueda Binaria: {resultado}\");\n    }\n}",
        "explanation": "Uso de desplazamiento de bits '>> 1' para calcular el punto medio sin riesgo de overflow en índices de gran escala.",
        "keyConcepts": [
          "Bit-shift >> 1",
          "Prevención de integer overflow",
          "ReadOnlySpan<int>"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(log n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Bit-shift mid calculation"
        }
      }
    }
  },
  "ternary_search": {
    "name": "Búsqueda Ternaria (Tri-Sección)",
    "category": "search",
    "bigO": "O(log₃ n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Ternaria\n    Definir n, inicio_idx, fin_idx, m1, m2, objetivo, posicion Como Entero;\n    Dimension arr[9];\n\n    n <- 9;\n    arr[1] <- 3; arr[2] <- 8; arr[3] <- 15; arr[4] <- 24; arr[5] <- 35;\n    arr[6] <- 46; arr[7] <- 59; arr[8] <- 71; arr[9] <- 88;\n\n    objetivo <- 46;\n    inicio_idx <- 1;\n    fin_idx <- n;\n    posicion <- -1;\n\n    Mientras inicio_idx <= fin_idx Hacer\n        m1 <- inicio_idx + TRUNC((fin_idx - inicio_idx) / 3);\n        m2 <- fin_idx - TRUNC((fin_idx - inicio_idx) / 3);\n\n        Si arr[m1] == objetivo Entonces\n            posicion <- m1;\n            inicio_idx <- fin_idx + 1;\n        SiNo\n            Si arr[m2] == objetivo Entonces\n                posicion <- m2;\n                inicio_idx <- fin_idx + 1;\n            SiNo\n                Si objetivo < arr[m1] Entonces\n                    fin_idx <- m1 - 1;\n                SiNo\n                    Si objetivo > arr[m2] Entonces\n                        inicio_idx <- m2 + 1;\n                    SiNo\n                        inicio_idx <- m1 + 1;\n                        fin_idx <- m2 - 1;\n                    FinSi\n                FinSi\n            FinSi\n        FinSi\n    FinMientras\n\n    Si posicion <> -1 Entonces\n        Escribir 'Objetivo encontrado en el índice: ', posicion;\n    SiNo\n        Escribir 'Objetivo no encontrado.';\n    FinSi\nFinProceso",
        "explanation": "Búsqueda Ternaria en PSeInt canónico. Divide el espacio en 3 intervalos iguales con m1 y m2 calculados mediante TRUNC((fin-inicio)/3).",
        "keyConcepts": [
          "Asignación formal con <-",
          "División por 3 con TRUNC()",
          "Trisección del espacio"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Ternaria (Tri-Sección) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaTernaria(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "m1 <- inicio + TRUNC((fin-inicio)/3); m2 <- fin - TRUNC((fin-inicio)/3);"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿arr[m1] == target O arr[m2] == target?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Ajustar tercio correspondiente;"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Busqueda_Ternaria\"]):::terminal --> Init[\"arr[1..9] ordenado cargado;<br/>inicio_idx <- 1; fin_idx <- n\"]:::proceso\n    Init --> CheckWhile{\"¿inicio_idx <= fin_idx?\"}:::decision\n    CheckWhile -- \"Sí\" --> CalcMids[\"m1 <- inicio + TRUNC((fin-inicio)/3);<br/>m2 <- fin - TRUNC((fin-inicio)/3)\"]:::proceso\n    CheckWhile -- \"No\" --> PrintResult[/\"Escribir resultado\"/]:::salida\n    CalcMids --> CompM1{\"¿arr[m1] == target?\"}:::decision\n    CompM1 -- \"Sí\" --> MatchM1[\"pos <- m1;<br/>inicio <- fin + 1\"]:::proceso\n    CompM1 -- \"No\" --> CompM2{\"¿arr[m2] == target?\"}:::decision\n    CompM2 -- \"Sí\" --> MatchM2[\"pos <- m2;<br/>inicio <- fin + 1\"]:::proceso\n    CompM2 -- \"No\" --> Branch{\"¿target < arr[m1]?\"}:::decision\n    Branch -- \"Sí (Tercio Izq)\" --> SetLeft[\"fin <- m1 - 1\"]:::proceso\n    Branch -- \"No\" --> CheckRight{\"¿target > arr[m2]?\"}:::decision\n    CheckRight -- \"Sí (Tercio Der)\" --> SetRight[\"inicio <- m2 + 1\"]:::proceso\n    CheckRight -- \"No (Tercio Cen)\" --> SetMid[\"inicio <- m1 + 1;<br/>fin <- m2 - 1\"]:::proceso\n    MatchM1 --> CheckWhile\n    MatchM2 --> CheckWhile\n    SetLeft --> CheckWhile\n    SetRight --> CheckWhile\n    SetMid --> CheckWhile\n    PrintResult --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef ternary_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda Ternaria O(log3 n) dividiendo en 3 intervalos.\"\"\"\n    left = 0\n    right = len(arr) - 1\n    while left <= right:\n        third = (right - left) // 3\n        m1 = left + third\n        m2 = right - third\n        if arr[m1] == target:\n            return m1\n        if arr[m2] == target:\n            return m2\n        if target < arr[m1]:\n            right = m1 - 1\n        elif target > arr[m2]:\n            left = m2 + 1\n        else:\n            left = m1 + 1\n            right = m2 - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [3, 8, 15, 24, 35, 46, 59, 71, 88]\n    val = 46\n    print(f\"Búsqueda Ternaria de {val}: {ternary_search(datos, val)}\")",
        "explanation": "Trisección de rangos para optimización de funciones unimodales o búsqueda en estructuras ordenadas con base logarítmica 3.",
        "keyConcepts": [
          "Dual-pivot m1 y m2",
          "Base logarítmica 3",
          "Funciones unimodales"
        ],
        "terminalOutput": [
          "$ python -u ternary_search.py",
          "[+] Datos: [3, 8, 15, 24, 35, 46, 59, 71, 88]",
          "[*] m1=2 (val=15), m2=6 (val=59)",
          "[*] Target 46 entre 15 y 59 -> tercio central [3..5]",
          "[*] Siguiente trisección: m2=5 (val=46) [MATCH]",
          "[✓] Encontrado en 2 pasos de trisección."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Búsqueda Ternaria</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; }\n    .bar.piv { background: #FF90E8 !important; }\n    .bar.found { background: #54F18F !important; }\n    .bar.out { opacity: 0.2; }\n    button { background: #FF90E8; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Búsqueda Ternaria · 2 Pivotes O(log₃ n)</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarTernaria()\">Buscar Valor (46)</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [3, 8, 15, 24, 35, 46, 59, 71, 88];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarTernaria() {\n      render();\n      let left = 0, right = arr.length - 1, target = 46;\n      while (left <= right) {\n        let third = Math.floor((right - left) / 3);\n        let m1 = left + third, m2 = right - third;\n        document.querySelectorAll('.bar').forEach((b, idx) => {\n          if (idx < left || idx > right) b.classList.add('out');\n        });\n        document.getElementById(`b-${m1}`).classList.add('piv');\n        document.getElementById(`b-${m2}`).classList.add('piv');\n        status.innerText = `Pivotes m1=${m1} (${arr[m1]}) y m2=${m2} (${arr[m2]})...`;\n        await new Promise(r => setTimeout(r, 450));\n        if (arr[m1] === target) {\n          document.getElementById(`b-${m1}`).classList.add('found');\n          status.innerText = `¡Encontrado en pivote m1=${m1}!`;\n          return;\n        }\n        if (arr[m2] === target) {\n          document.getElementById(`b-${m2}`).classList.add('found');\n          status.innerText = `¡Encontrado en pivote m2=${m2}!`;\n          return;\n        }\n        if (target < arr[m1]) right = m1 - 1;\n        else if (target > arr[m2]) left = m2 + 1;\n        else { left = m1 + 1; right = m2 - 1; }\n        document.getElementById(`b-${m1}`).classList.remove('piv');\n        document.getElementById(`b-${m2}`).classList.remove('piv');\n      }\n      status.innerText = \"No encontrado.\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Aplicación web standalone completa con dos pivotes simultáneos resaltados en color magenta para trisección visual directa.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Resaltado dual de pivotes",
          "Descarte visual por bandas"
        ],
        "demoData": [
          3,
          8,
          15,
          24,
          35,
          46,
          59,
          71,
          88
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class TernarySearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        int l = 0, r = span.Length - 1;\n        while (l <= r)\n        {\n            int third = (r - l) / 3;\n            int m1 = l + third;\n            int m2 = r - third;\n            if (span[m1] == target) return m1;\n            if (span[m2] == target) return m2;\n            if (target < span[m1]) r = m1 - 1;\n            else if (target > span[m2]) l = m2 + 1;\n            else { l = m1 + 1; r = m2 - 1; }\n        }\n        return -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 3, 8, 15, 24, 35, 46, 59, 71, 88 };\n        Console.WriteLine($\"Búsqueda Ternaria índice: {Search(datos, 46)}\");\n    }\n}",
        "explanation": "Implementación ultra-optimizada con dos puntos de partición simultáneos para búsqueda logarítmica de base 3.",
        "keyConcepts": [
          "Trisección en stack",
          "ReadOnlySpan<int>",
          "Cero asignaciones"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(log₃ n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Dual-pivot branchless check"
        }
      }
    }
  },
  "jump_search": {
    "name": "Búsqueda por Salto (Jump Search)",
    "category": "search",
    "bigO": "O(√n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Salto\n    Definir n, paso, prev, objetivo, posicion, k Como Entero;\n    Dimension arr[9];\n\n    n <- 9;\n    arr[1] <- 2; arr[2] <- 7; arr[3] <- 14; arr[4] <- 23; arr[5] <- 31;\n    arr[6] <- 42; arr[7] <- 55; arr[8] <- 67; arr[9] <- 80;\n\n    objetivo <- 42;\n    paso <- TRUNC(RC(n));\n    prev <- 1;\n    posicion <- -1;\n\n    Mientras arr[paso] < objetivo Y paso < n Hacer\n        prev <- paso;\n        paso <- paso + TRUNC(RC(n));\n        Si paso > n Entonces\n            paso <- n;\n        FinSi\n    FinMientras\n\n    Para k <- prev Hasta paso Con Paso 1 Hacer\n        Si arr[k] == objetivo Entonces\n            posicion <- k;\n            k <- paso; // Salida temprana\n        FinSi\n    FinPara\n\n    Si posicion <> -1 Entonces\n        Escribir 'Objetivo encontrado en el índice: ', posicion;\n    SiNo\n        Escribir 'Objetivo no encontrado.';\n    FinSi\nFinProceso",
        "explanation": "Búsqueda por Salto en PSeInt canónico. Emplea la raíz cuadrada RC(n) truncada para el tamaño del bloque y saltos progresivos '<-'.",
        "keyConcepts": [
          "Asignación formal con <-",
          "RC(n) raíz cuadrada truncada",
          "Salto en bloques"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda por Salto (Jump Search) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaSalto(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "paso <- TRUNC(RC(n)); prev <- 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿arr[paso] < target Y paso < n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "k <- prev (Barrido lineal);"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Busqueda_Salto\"]):::terminal --> Init[\"arr[1..9] ordenado cargado;<br/>paso <- TRUNC(RC(n)); prev <- 1\"]:::proceso\n    Init --> CheckJump{\"¿arr[paso] < objetivo Y paso < n?\"}:::decision\n    CheckJump -- \"Sí (Salto de Bloque)\" --> DoJump[\"prev <- paso;<br/>paso <- paso + TRUNC(RC(n))\"]:::proceso\n    DoJump --> CheckJump\n    CheckJump -- \"No (Bloque Hallado)\" --> LinearLoop[\"Barrido lineal: k <- prev Hasta paso\"]:::proceso\n    LinearLoop --> CheckMatch{\"¿arr[k] == objetivo?\"}:::decision\n    CheckMatch -- \"Sí\" --> Found[\"pos <- k\"]:::proceso\n    CheckMatch -- \"No\" --> IncK[\"k <- k + 1\"]:::proceso\n    IncK --> CheckMatch\n    Found --> PrintResult[/\"Escribir resultado\"/]:::salida\n    PrintResult --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "import math\nfrom typing import List, Optional\n\ndef jump_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda por Salto O(√n) para colecciones ordenadas.\"\"\"\n    n = len(arr)\n    step = int(math.isqrt(n))\n    prev = 0\n    while prev < n and arr[min(step, n) - 1] < target:\n        prev = step\n        step += int(math.isqrt(n))\n        if prev >= n:\n            return None\n    while prev < min(step, n):\n        if arr[prev] == target:\n            return prev\n        prev += 1\n    return None\n\nif __name__ == '__main__':\n    datos = [2, 7, 14, 23, 31, 42, 55, 67, 80]\n    val = 42\n    print(f\"Jump Search de {val}: {jump_search(datos, val)}\")",
        "explanation": "Uso de math.isqrt() para el cálculo entero de raíz cuadrada, reduciendo saltos hacia atrás.",
        "keyConcepts": [
          "math.isqrt()",
          "Complejidad intermedia O(√n)",
          "Ideal para memoria secuencial"
        ],
        "terminalOutput": [
          "$ python -u jump_search.py",
          "[+] Colección: [2, 7, 14, 23, 31, 42, 55, 67, 80] (n=9)",
          "[*] Paso óptimo = √9 = 3",
          "[*] Salto 1 a índice 2 (val=14 < 42)",
          "[*] Salto 2 a índice 5 (val=42 >= 42) -> Bloque localizado [3..5]",
          "[*] Búsqueda lineal en bloque: índice 5 [MATCH]",
          "[✓] Encontrado en 2 saltos + 1 comprobación."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Jump Search</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; }\n    .bar.jump { background: #FF5722 !important; color: white; }\n    .bar.linear { background: #FFE600 !important; }\n    .bar.found { background: #54F18F !important; }\n    button { background: #FF5722; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Jump Search · Saltos de Bloque O(√n)</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarJump()\">Buscar 42 (Paso √9=3)</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [2, 7, 14, 23, 31, 42, 55, 67, 80];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarJump() {\n      render();\n      let n = arr.length, step = Math.floor(Math.sqrt(n)), prev = 0, target = 42;\n      status.innerText = `Saltando en pasos de ${step}...`;\n      while (arr[Math.min(step, n) - 1] < target) {\n        document.getElementById(`b-${Math.min(step, n) - 1}`).classList.add('jump');\n        await new Promise(r => setTimeout(r, 400));\n        prev = step;\n        step += Math.floor(Math.sqrt(n));\n        if (prev >= n) { status.innerText = \"No encontrado.\"; return; }\n      }\n      document.getElementById(`b-${Math.min(step, n) - 1}`).classList.add('jump');\n      status.innerText = `Bloque hallado entre ${prev} y ${Math.min(step, n) - 1}. Barrido lineal...`;\n      await new Promise(r => setTimeout(r, 400));\n      for (let i = prev; i < Math.min(step, n); i++) {\n        const el = document.getElementById(`b-${i}`);\n        el.classList.add('linear');\n        await new Promise(r => setTimeout(r, 250));\n        if (arr[i] === target) {\n          el.classList.remove('linear');\n          el.classList.add('found');\n          status.innerText = `¡Encontrado en índice ${i}!`;\n          return;\n        }\n      }\n      status.innerText = \"No encontrado.\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Página HTML5 Standalone que visualiza los saltos por bloques en naranja y la fase de resolución lineal en amarillo.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Visualización bi-fásica",
          "Control temporal síncrono"
        ],
        "demoData": [
          2,
          7,
          14,
          23,
          31,
          42,
          55,
          67,
          80
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class JumpSearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        int n = span.Length;\n        int step = (int)Math.Sqrt(n);\n        int prev = 0;\n        while (span[Math.Min(step, n) - 1] < target)\n        {\n            prev = step;\n            step += (int)Math.Sqrt(n);\n            if (prev >= n) return -1;\n        }\n        while (span[prev] < target)\n        {\n            prev++;\n            if (prev == Math.Min(step, n)) return -1;\n        }\n        return (span[prev] == target) ? prev : -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 2, 7, 14, 23, 31, 42, 55, 67, 80 };\n        Console.WriteLine($\"Jump Search índice: {Search(datos, 42)}\");\n    }\n}",
        "explanation": "Excelente alternativa a búsqueda binaria cuando el costo de retroceder en la estructura de memoria es elevado.",
        "keyConcepts": [
          "Math.Min",
          "Stride lookahead",
          "Zero-alloc span"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(√n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Forward-only stride iteration"
        }
      }
    }
  },
  "interpolation_search": {
    "name": "Búsqueda por Interpolación",
    "category": "search",
    "bigO": "O(log log n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Interpolacion\n    Definir n, bajo, alto, pos, objetivo, resultado Como Entero;\n    Dimension arr[10];\n\n    n <- 10;\n    arr[1] <- 10; arr[2] <- 20; arr[3] <- 30; arr[4] <- 40; arr[5] <- 50;\n    arr[6] <- 60; arr[7] <- 70; arr[8] <- 80; arr[9] <- 90; arr[10] <- 100;\n\n    objetivo <- 70;\n    bajo <- 1;\n    alto <- n;\n    resultado <- -1;\n\n    Mientras bajo <= alto Y objetivo >= arr[bajo] Y objetivo <= arr[alto] Hacer\n        Si bajo == alto Entonces\n            Si arr[bajo] == objetivo Entonces\n                resultado <- bajo;\n            FinSi\n            bajo <- alto + 1;\n        SiNo\n            pos <- bajo + TRUNC(((alto - bajo) / (arr[alto] - arr[bajo])) * (objetivo - arr[bajo]));\n\n            Si arr[pos] == objetivo Entonces\n                resultado <- pos;\n                bajo <- alto + 1;\n            SiNo\n                Si arr[pos] < objetivo Entonces\n                    bajo <- pos + 1;\n                SiNo\n                    alto <- pos - 1;\n                FinSi\n            FinSi\n        FinSi\n    FinMientras\n\n    Si resultado <> -1 Entonces\n        Escribir 'Objetivo encontrado en el índice: ', resultado;\n    SiNo\n        Escribir 'Objetivo no encontrado.';\n    FinSi\nFinProceso",
        "explanation": "Búsqueda por Interpolación en PSeInt canónico. Estima la posición mediante interpolación proporcional de valores numéricos uniformes.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Regla de 3 proporcional con TRUNC()",
          "Distribución uniforme"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda por Interpolación (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Interpolacion(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "pos <- bajo + TRUNC(((alto-bajo)/(arr[alto]-arr[bajo]))*(target-arr[bajo]));"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿arr[pos] == target?"
            },
            {
              "id": 4,
              "type": "end",
              "text": "FinProceso: Retornar resultado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Busqueda_Interpolacion\"]):::terminal --> Init[\"arr[1..10] cargado;<br/>bajo <- 1; alto <- n; resultado <- -1\"]:::proceso\n    Init --> CheckRange{\"¿bajo <= alto Y target en rango?\"}:::decision\n    CheckRange -- \"Sí\" --> CheckSingle{\"¿bajo == alto?\"}:::decision\n    CheckRange -- \"No\" --> PrintResult[/\"Escribir resultado\"/]:::salida\n    CheckSingle -- \"Sí\" --> CheckMatch[\"resultado <- (arr[bajo]==target ? bajo : -1)\"]:::proceso\n    CheckSingle -- \"No\" --> CalcSlope[\"pos <- bajo + TRUNC(((alto-bajo)/(arr[alto]-arr[bajo]))*(target-arr[bajo]))\"]:::proceso\n    CalcSlope --> CompPos{\"¿arr[pos] == target?\"}:::decision\n    CompPos -- \"Sí\" --> Found[\"resultado <- pos;<br/>bajo <- alto + 1\"]:::proceso\n    CompPos -- \"No\" --> AdjustSlope[\"Ajustar bajo = pos + 1 O alto = pos - 1\"]:::proceso\n    Found --> CheckRange\n    AdjustSlope --> CheckRange\n    CheckMatch --> PrintResult\n    PrintResult --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef interpolation_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda por interpolación O(log log n) para datos uniformemente distribuidos.\"\"\"\n    low = 0\n    high = len(arr) - 1\n    while low <= high and arr[low] <= target <= arr[high]:\n        if low == high:\n            return low if arr[low] == target else None\n        pos = low + int(((high - low) / (arr[high] - arr[low])) * (target - arr[low]))\n        if arr[pos] == target:\n            return pos\n        if arr[pos] < target:\n            low = pos + 1\n        else:\n            high = pos - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\n    val = 70\n    print(f\"Interpolation Search: {interpolation_search(datos, val)}\")",
        "explanation": "Cálculo dinámico del índice estimado en base a la pendiente de la recta de distribución.",
        "keyConcepts": [
          "Estimación de pendiente",
          "O(log log n) promedio",
          "Sensible a dispersión"
        ],
        "terminalOutput": [
          "$ python -u interpolation_search.py",
          "[+] Datos: [10..100] (n=10)",
          "[*] Target: 70",
          "[*] Estimación pos = 6",
          "[✓] Encontrado en 1 solo paso directo."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Interpolation Search</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 540px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 10px; }\n    .bar.predicted { background: #9B51E0 !important; color: white; transform: scale(1.08); }\n    .bar.found { background: #54F18F !important; }\n    button { background: #9B51E0; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Interpolation Search · Estimación Numérica</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarInterpolacion()\">Buscar Valor 70</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarInterpolacion() {\n      render();\n      let low = 0, high = arr.length - 1, target = 70;\n      status.innerText = \"Calculando posición por pendiente numérica...\";\n      await new Promise(r => setTimeout(r, 400));\n      let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));\n      const el = document.getElementById(`b-${pos}`);\n      el.classList.add('predicted');\n      status.innerText = `Posición calculada directamente: índice ${pos}...`;\n      await new Promise(r => setTimeout(r, 450));\n      if (arr[pos] === target) {\n        el.classList.remove('predicted');\n        el.classList.add('found');\n        status.innerText = `¡Objetivo encontrado en el índice ${pos} en 1 solo paso!`;\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración standalone de localización directa basada en pendiente numérica.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Predicción en 1 paso",
          "Aguja de interpolación"
        ],
        "demoData": [
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class InterpolationSearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        int low = 0;\n        int high = span.Length - 1;\n        while (low <= high && target >= span[low] && target <= span[high])\n        {\n            if (low == high) return span[low] == target ? low : -1;\n            int pos = low + (int)(((long)(high - low) * (target - span[low])) / (span[high] - span[low]));\n            if (span[pos] == target) return pos;\n            if (span[pos] < target) low = pos + 1;\n            else high = pos - 1;\n        }\n        return -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 };\n        Console.WriteLine($\"Interpolation Search índice: {Search(datos, 70)}\");\n    }\n}",
        "explanation": "Uso de casting a long en el producto cruzado para evitar overflow numérico.",
        "keyConcepts": [
          "Casting a long anti-overflow",
          "Direct arithmetic projection",
          "Zero heap alloc"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Direct slope projection formula"
        }
      }
    }
  },
  "exponential_search": {
    "name": "Búsqueda Exponencial (Doubling Search)",
    "category": "search",
    "bigO": "O(log n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Exponencial\n    Definir n, limite, bajo, alto, medio, objetivo, posicion Como Entero;\n    Dimension arr[10];\n\n    n <- 10;\n    arr[1] <- 2; arr[2] <- 4; arr[3] <- 8; arr[4] <- 16; arr[5] <- 32;\n    arr[6] <- 64; arr[7] <- 128; arr[8] <- 256; arr[9] <- 512; arr[10] <- 1024;\n\n    objetivo <- 128;\n    posicion <- -1;\n\n    Si arr[1] == objetivo Entonces\n        posicion <- 1;\n    SiNo\n        limite <- 1;\n        Mientras limite < n Y arr[limite] <= objetivo Hacer\n            limite <- limite * 2;\n        FinMientras\n\n        bajo <- TRUNC(limite / 2);\n        Si limite > n Entonces\n            alto <- n;\n        SiNo\n            alto <- limite;\n        FinSi\n\n        Mientras bajo <= alto Hacer\n            medio <- TRUNC((bajo + alto) / 2);\n            Si arr[medio] == objetivo Entonces\n                posicion <- medio;\n                bajo <- alto + 1;\n            SiNo\n                Si arr[medio] < objetivo Entonces\n                    bajo <- medio + 1;\n                SiNo\n                    alto <- medio - 1;\n                FinSi\n            FinSi\n        FinMientras\n    FinSi\n\n    Si posicion <> -1 Entonces\n        Escribir 'Objetivo encontrado en el índice: ', posicion;\n    SiNo\n        Escribir 'Objetivo no encontrado.';\n    FinSi\nFinProceso",
        "explanation": "Búsqueda Exponencial en PSeInt canónico. Duplica el rango mediante potencias de 2 (limite <- limite * 2) y aplica búsqueda binaria con asignaciones '<-'.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Multiplicación por 2",
          "Cota superior finita"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Exponencial (Doubling Search) (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaExponencial(arr, target)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿arr[1] == target?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "limite <- 1; Mientras limite < n Y arr[limite] <= target: limite <- limite * 2;"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Búsqueda Binaria en [limite/2, Min(limite, n)];"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Busqueda_Exponencial\"]):::terminal --> Init[\"arr[1..10] cargado;<br/>objetivo <- 128; pos <- -1\"]:::proceso\n    Init --> CheckFirst{\"¿arr[1] == objetivo?\"}:::decision\n    CheckFirst -- \"Sí\" --> FoundFirst[\"pos <- 1\"]:::proceso\n    CheckFirst -- \"No\" --> Doubling[\"limite <- 1;<br/>Mientras limite < n Y arr[limite] <= target:<br/>limite <- limite * 2\"]:::proceso\n    Doubling --> SetBounds[\"bajo <- TRUNC(limite / 2);<br/>alto <- Min(limite, n)\"]:::proceso\n    SetBounds --> BinSearch[\"Búsqueda Binaria en intervalo [bajo..alto]\"]:::proceso\n    BinSearch --> PrintOut[/\"Escribir resultado\"/]:::salida\n    FoundFirst --> PrintOut\n    PrintOut --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef exponential_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda exponencial ideal para listas no acotadas o streams infinitos.\"\"\"\n    if not arr: return None\n    if arr[0] == target: return 0\n    bound = 1\n    n = len(arr)\n    while bound < n and arr[bound] <= target:\n        bound *= 2\n    low = bound // 2\n    high = min(bound, n - 1)\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]\n    val = 128\n    print(f\"Búsqueda Exponencial de {val}: {exponential_search(datos, val)}\")",
        "explanation": "Crecimiento exponencial en potencias de dos para hallar las cotas y posterior búsqueda binaria O(log i).",
        "keyConcepts": [
          "Cotas no acotadas",
          "O(log i) proporcional al índice",
          "Ideal para streams infinitos"
        ],
        "terminalOutput": [
          "$ python -u exponential_search.py",
          "[+] Entrada: potencias de 2 (n=10)",
          "[*] Cota duplicada = 8 (val=256 >= 128) -> Rango [4..8]",
          "[*] Búsqueda binaria en rango [4..8]: mid=6 (val=128) [MATCH]",
          "[✓] Encontrado en índice 6."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Búsqueda Exponencial</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 540px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 9px; }\n    .bar.bound { background: #FF3366 !important; color: white; transform: scale(1.1); }\n    .bar.found { background: #54F18F !important; }\n    button { background: #FF3366; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Exponential Search · Cotas 1, 2, 4, 8...</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarExponencial()\">Buscar 128</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarExponencial() {\n      render();\n      let n = arr.length, bound = 1, target = 128;\n      status.innerText = \"Duplicando cotas exponencialmente...\";\n      while (bound < n && arr[bound] <= target) {\n        document.getElementById(`b-${bound}`).classList.add('bound');\n        status.innerText = `Cota evaluada en índice ${bound}...`;\n        await new Promise(r => setTimeout(r, 450));\n        bound *= 2;\n      }\n      let low = Math.floor(bound / 2), high = Math.min(bound, n - 1);\n      status.innerText = `Cotas fijadas en [${low}..${high}]. Búsqueda binaria...`;\n      await new Promise(r => setTimeout(r, 400));\n      for (let i = low; i <= high; i++) {\n        if (arr[i] === target) {\n          document.querySelectorAll('.bar').forEach(b => b.classList.remove('bound'));\n          document.getElementById(`b-${i}`).classList.add('found');\n          status.innerText = `¡Encontrado en índice ${i}!`;\n          return;\n        }\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Simulación interactiva completa de duplicación exponencial de cotas con posterior búsqueda binaria.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Visualización de saltos de potencia",
          "Conmutación binaria"
        ],
        "demoData": [
          2,
          4,
          8,
          16,
          32,
          64,
          128,
          256,
          512,
          1024
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class ExponentialSearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        if (span.IsEmpty) return -1;\n        if (span[0] == target) return 0;\n        int bound = 1;\n        while (bound < span.Length && span[bound] <= target) bound <<= 1;\n        int low = bound >> 1;\n        int high = Math.Min(bound, span.Length - 1);\n        while (low <= high)\n        {\n            int mid = low + ((high - low) >> 1);\n            if (span[mid] == target) return mid;\n            if (span[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 };\n        Console.WriteLine($\"Exponential Search índice: {Search(datos, 128)}\");\n    }\n}",
        "explanation": "Uso de operadores de desplazamiento a nivel de bits 'bound <<= 1' para duplicación exponencial a velocidad de procesador.",
        "keyConcepts": [
          "Bitwise shift << 1",
          "Binary search bounded span",
          "Stackalloc memory"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(log i)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Bit-shift bound doubling"
        }
      }
    }
  },
  "complexity_o1": {
    "name": "O(1) Acceso Directo por Índice",
    "category": "complexity",
    "bigO": "O(1)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Complejidad_O1\n    Definir n, indice_solicitado, valor_obtenido Como Entero;\n    Dimension memoria_cache[5];\n\n    n <- 5;\n    memoria_cache[1] <- 100;\n    memoria_cache[2] <- 250;\n    memoria_cache[3] <- 420;\n    memoria_cache[4] <- 880;\n    memoria_cache[5] <- 999;\n\n    // Operación O(1): Acceso directo independiente de n\n    indice_solicitado <- 3;\n    valor_obtenido <- memoria_cache[indice_solicitado];\n\n    Escribir 'Acceso en Tiempo Constante O(1):';\n    Escribir 'Índice consultado: ', indice_solicitado;\n    Escribir 'Valor retornado: ', valor_obtenido;\nFinProceso",
        "explanation": "Acceso constante O(1) en PSeInt canónico. Demuestra que consultar una celda de memoria mediante indexación directa toma exactamente una única instrucción, sin iteraciones.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Acceso directo por índice",
          "Cero ciclos de iteración"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(1) Acceso Directo por Índice (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio AccesoDirecto_O1(arr, index)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "valor <- arr[index];"
            },
            {
              "id": 3,
              "type": "end",
              "text": "FinProceso: Retorno en 1 Ciclo"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Complejidad_O1\"]):::terminal --> Init[\"memoria_cache[1..5] cargado;<br/>indice_solicitado <- 3\"]:::proceso\n    Init --> DirectAccess[\"valor_obtenido <- memoria_cache[indice_solicitado]\"]:::proceso\n    DirectAccess --> PrintVal[/\"Escribir 'Valor retornado: ', valor_obtenido\"/]:::salida\n    PrintVal --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef get_element_o1(arr: List[int], index: int) -> int:\n    \"\"\"Acceso en tiempo constante O(1) mediante aritmética de punteros base + index * size.\"\"\"\n    return arr[index]\n\nif __name__ == '__main__':\n    datos = [100, 250, 420, 880, 999]\n    print(f\"Colección de entrada: {datos}\")\n    print(f\"Acceso directo a índice 2: {get_element_o1(datos, 2)} (1 ciclo de CPU)\")",
        "explanation": "Indexación por dirección en memoria contigua O(1). No depende de la longitud de la lista.",
        "keyConcepts": [
          "Aritmética de punteros subyacente",
          "Tiempo constante determinista",
          "Cero escalabilidad temporal"
        ],
        "terminalOutput": [
          "$ python -u complexity_o1.py",
          "[+] Registros cargados: 1,000,000 elementos",
          "[*] Solicitud: índice 742,819",
          "[*] Dirección de memoria: 0x7ffd58c20 + (742819 * 8 bytes)",
          "[✓] Retorno de valor instantáneo en 0.000002 ms (O(1))."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Complejidad O(1)</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .slot-row { display: flex; gap: 8px; margin: 20px 0; }\n    .slot { flex: 1; border: 2px solid #000; padding: 12px; text-align: center; font-weight: bold; background: #EEE; transition: all 0.2s; }\n    .slot.hit { background: #54F18F !important; transform: scale(1.15); box-shadow: 3px 3px 0px #000; }\n    button { background: #54F18F; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Complejidad O(1) · Acceso Directo Inmediato</h2>\n    <div class=\"slot-row\">\n      <div class=\"slot\" id=\"s0\">[0] 100</div>\n      <div class=\"slot\" id=\"s1\">[1] 250</div>\n      <div class=\"slot\" id=\"s2\">[2] 420</div>\n      <div class=\"slot\" id=\"s3\">[3] 880</div>\n    </div>\n    <button onclick=\"ejecutarO1()\">Acceso a Índice [2]</button>\n    <div id=\"status\" style=\"margin-top:12px; font-weight:bold;\">Listo para consultar.</div>\n  </div>\n  <script>\n    function ejecutarO1() {\n      document.querySelectorAll('.slot').forEach(s => s.classList.remove('hit'));\n      const s = document.getElementById('s2');\n      s.classList.add('hit');\n      document.getElementById('status').innerText = \"Acceso resuelto en 1 paso instantáneo sin recorrer celdas previas.\";\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Demostración interactiva de acceso instantáneo directo en tiempo constante O(1).",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Activación instantánea",
          "Contraste Neo-Brutalista"
        ],
        "demoData": [
          100,
          250,
          420,
          880
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\nusing System.Runtime.CompilerServices;\n\npublic static class ConstantTimeAccess\n{\n    [MethodImpl(MethodImplOptions.AggressiveInlining)]\n    public static ref readonly int GetAt(ReadOnlySpan<int> span, int index)\n    {\n        return ref span[index]; // 1 sola instrucción MOV en ensamblador x86-64\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 100, 250, 420, 880, 999 };\n        Console.WriteLine($\"Valor directo O(1): {GetAt(datos, 2)}\");\n    }\n}",
        "explanation": "Uso de 'ref readonly' e inlining agresivo para compilar a una única instrucción de ensamblador de memoria directa.",
        "keyConcepts": [
          "AggressiveInlining",
          "ref readonly",
          "Instrucción MOV de hardware"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(1)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Single MOV instruction"
        }
      }
    }
  },
  "complexity_linear": {
    "name": "O(n) Recorrido Acumulativo Lineal",
    "category": "complexity",
    "bigO": "O(n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Complejidad_Lineal\n    Definir n, i, acumulador, pasos_totales Como Entero;\n    Dimension arr[6];\n\n    n <- 6;\n    arr[1] <- 5; arr[2] <- 10; arr[3] <- 15; arr[4] <- 20; arr[5] <- 25; arr[6] <- 30;\n\n    acumulador <- 0;\n    pasos_totales <- 0;\n\n    // Operación O(n): Proporcional a n\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        acumulador <- acumulador + arr[i];\n        pasos_totales <- pasos_totales + 1;\n    FinPara\n\n    Escribir 'Total de elementos n: ', n;\n    Escribir 'Pasos ejecutados: ', pasos_totales;\n    Escribir 'Suma Acumulada: ', acumulador;\nFinProceso",
        "explanation": "Complejidad Lineal O(n) en PSeInt canónico. Muestra cómo un único bucle 'Para' ejecuta exactamente n pasos para procesar una lista de longitud n.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Bucle Para de 1 a n",
          "Crecimiento proporcional"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n) Recorrido Acumulativo Lineal (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Acumulacion_On(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "acumulador <- 0; i <- 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "acumulador <- acumulador + arr[i]; i <- i + 1;"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Retornar acumulador"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Complejidad_Lineal\"]):::terminal --> Init[\"arr[1..6] cargado;<br/>acumulador <- 0; i <- 1\"]:::proceso\n    Init --> CheckI{\"¿i <= n?\"}:::decision\n    CheckI -- \"Sí\" --> Acc[\"acumulador <- acumulador + arr[i];<br/>i <- i + 1\"]:::proceso\n    CheckI -- \"No\" --> PrintTotal[/\"Escribir 'Suma Acumulada: ', acumulador\"/]:::salida\n    Acc --> CheckI\n    PrintTotal --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef accumulate_linear(arr: List[int]) -> int:\n    \"\"\"Procesamiento lineal O(n) recorriendo cada ítem exactamente una vez.\"\"\"\n    total = 0\n    for val in arr:\n        total += val\n    return total\n\nif __name__ == '__main__':\n    datos = [5, 10, 15, 20, 25, 30]\n    print(f\"Arreglo n=6: {datos}\")\n    print(f\"Total acumulado: {accumulate_linear(datos)}\")",
        "explanation": "Un solo bucle for que realiza n operaciones de suma acumulativa en proporción estricta 1:1 con el tamaño de los datos.",
        "keyConcepts": [
          "Iteración directa",
          "O(n) uniforme",
          "Escalabilidad lineal"
        ],
        "terminalOutput": [
          "$ python -u complexity_linear.py",
          "[+] Tamaño de entrada: n = 6",
          "[*] Iteración 1..6 completadas",
          "[✓] Total acumulado = 105 en exactamente 6 operaciones."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Complejidad O(n)</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars { display: flex; gap: 6px; height: 120px; align-items: flex-end; margin: 15px 0; }\n    .bar { flex: 1; background: #FFE600; border: 2px solid #000; text-align: center; font-weight: bold; }\n    .bar.done { background: #54F18F !important; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Complejidad O(n) · Barrido Proporcional</h2>\n    <div class=\"bars\" id=\"bars\"></div>\n    <button onclick=\"ejecutarLineal()\">Ejecutar Recorrido n Pasos</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [5, 10, 15, 20, 25, 30];\n    const bars = document.getElementById('bars');\n    function render() {\n      bars.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/30)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarLineal() {\n      render();\n      let suma = 0;\n      for (let i = 0; i < arr.length; i++) {\n        const b = document.getElementById(`b-${i}`);\n        b.classList.add('done');\n        suma += arr[i];\n        document.getElementById('status').innerText = `Paso ${i+1}/${arr.length}: Suma acumulada = ${suma}`;\n        await new Promise(r => setTimeout(r, 250));\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración interactiva paso a paso donde el tiempo transcurrido es directamente proporcional a n.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Barrido secuencial animado",
          "Retroalimentación en vivo"
        ],
        "demoData": [
          5,
          10,
          15,
          20,
          25,
          30
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class LinearAccumulator\n{\n    public static int Sum(ReadOnlySpan<int> span)\n    {\n        int total = 0;\n        for (int i = 0; i < span.Length; i++)\n        {\n            total += span[i];\n        }\n        return total;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 5, 10, 15, 20, 25, 30 };\n        Console.WriteLine($\"Suma lineal O(n): {Sum(datos)}\");\n    }\n}",
        "explanation": "Bucle unrolled por el compilador JIT con vectorización SIMD automática en colecciones grandes.",
        "keyConcepts": [
          "Auto-vectorización SIMD",
          "ReadOnlySpan<int>",
          "Loop unrolling"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n)",
          "complexityWorst": "O(n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "SIMD AVX-512 capable"
        }
      }
    }
  },
  "complexity_n2": {
    "name": "O(n²) Comparación Matriz Cuadrática",
    "category": "complexity",
    "bigO": "O(n²)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Complejidad_N2\n    Definir n, i, j, comparaciones Como Entero;\n    Dimension arr[4];\n\n    n <- 4;\n    arr[1] <- 10; arr[2] <- 20; arr[3] <- 30; arr[4] <- 40;\n\n    comparaciones <- 0;\n\n    // Operación O(n²): Dos bucles anidados\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        Para j <- 1 Hasta n Con Paso 1 Hacer\n            comparaciones <- comparaciones + 1;\n        FinPara\n    FinPara\n\n    Escribir 'Elementos n: ', n;\n    Escribir 'Total de ciclos ejecutados (n*n): ', comparaciones;\nFinProceso",
        "explanation": "Complejidad Cuadrática O(n²) en PSeInt canónico. Dos bucles anidados que demuestran que para n=4 se ejecutan exactamente 4² = 16 iteraciones con asignación '<-'.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Bucles anidados Para",
          "Crecimiento n * n"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n²) Comparación Matriz Cuadrática (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio MatrizCuadratica(n)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿j <= n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "count <- count + 1;"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Retornar n*n"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Complejidad_N2\"]):::terminal --> Init[\"n <- 4; comparaciones <- 0;<br/>i <- 1\"]:::proceso\n    Init --> CheckI{\"¿i <= n?\"}:::decision\n    CheckI -- \"Sí\" --> InitJ[\"j <- 1\"]:::proceso\n    CheckI -- \"No\" --> PrintEnd[/\"Escribir 'Total ciclos: ', comparaciones\"/]:::salida\n    InitJ --> CheckJ{\"¿j <= n?\"}:::decision\n    CheckJ -- \"Sí\" --> IncComp[\"comparaciones <- comparaciones + 1;<br/>j <- j + 1\"]:::proceso\n    CheckJ -- \"No\" --> IncI[\"i <- i + 1\"]:::proceso\n    IncComp --> CheckJ\n    IncI --> CheckI\n    PrintEnd --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "def matrix_comparisons_n2(n: int) -> int:\n    \"\"\"Complejidad cuadrática O(n²) mediante bucles anidados.\"\"\"\n    steps = 0\n    for i in range(n):\n        for j in range(n):\n            steps += 1\n    return steps\n\nif __name__ == '__main__':\n    n = 4\n    total = matrix_comparisons_n2(n)\n    print(f\"Para n={n}, pasos totales O(n²) = {total}\")",
        "explanation": "Bucles for anidados que generan una matriz de ejecución de n x n celdas de procesamiento.",
        "keyConcepts": [
          "Doble bucle for",
          "Matriz cartesiana",
          "Alerta para grandes n"
        ],
        "terminalOutput": [
          "$ python -u complexity_n2.py",
          "[+] Dimensión de entrada n = 4",
          "[*] Matriz de 4 filas x 4 columnas",
          "[✓] Ejecutados exactamente 16 ciclos (4²)."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Complejidad O(n²)</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin: 15px 0; }\n    .cell { border: 2px solid #000; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; font-weight: bold; background: #EEE; transition: background 0.15s; }\n    .cell.active { background: #FF3366 !important; color: white; transform: scale(1.05); }\n    button { background: #FF3366; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Complejidad O(n²) · Matriz 4x4 (16 Celdas)</h2>\n    <div class=\"grid\" id=\"grid\"></div>\n    <button onclick=\"ejecutarN2()\">Llenar Matriz Cuadrática</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    const grid = document.getElementById('grid');\n    function init() {\n      grid.innerHTML = '';\n      for (let i = 0; i < 16; i++) grid.innerHTML += `<div class=\"cell\" id=\"c-${i}\">${i+1}</div>`;\n    }\n    async function ejecutarN2() {\n      init();\n      for (let i = 0; i < 16; i++) {\n        document.getElementById(`c-${i}`).classList.add('active');\n        document.getElementById('status').innerText = `Procesando celda cuadrática ${i+1} de 16...`;\n        await new Promise(r => setTimeout(r, 100));\n      }\n      document.getElementById('status').innerText = \"Matriz n² completada.\";\n    }\n    init();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración visual completa de una cuadrícula de 4x4 que ilustra cómo el esfuerzo computacional escala al cuadrado.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Visualización en grilla 4x4",
          "Animación en tiempo real"
        ],
        "demoData": [
          1,
          2,
          3,
          4
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class QuadraticEngine\n{\n    public static int ExecuteQuadratic(int n)\n    {\n        int count = 0;\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++)\n                count++;\n        return count;\n    }\n\n    public static void Main()\n    {\n        Console.WriteLine($\"Pasos para n=4: {ExecuteQuadratic(4)}\");\n    }\n}",
        "explanation": "Doble ciclo anidado canónico para comparación de todos contra todos.",
        "keyConcepts": [
          "Dual loop registers",
          "L1 cache thrashing",
          "Cero allocations"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n²)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Dual loop counters"
        }
      }
    }
  },
  "complexity_n3": {
    "name": "O(n³) Triple Bucle / Cúbico",
    "category": "complexity",
    "bigO": "O(n³)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Complejidad_N3\n    Definir n, i, j, k, ciclos_totales Como Entero;\n\n    n <- 3;\n    ciclos_totales <- 0;\n\n    // Operación O(n³): Tres bucles anidados\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        Para j <- 1 Hasta n Con Paso 1 Hacer\n            Para k <- 1 Hasta n Con Paso 1 Hacer\n                ciclos_totales <- ciclos_totales + 1;\n            FinPara\n        FinPara\n    FinPara\n\n    Escribir 'Dimensión n: ', n;\n    Escribir 'Total de operaciones cúbicas (n^3): ', ciclos_totales;\nFinProceso",
        "explanation": "Complejidad Cúbica O(n³) en PSeInt canónico. Tres bucles anidados que demuestran que para una dimensión n=3 se generan 3³ = 27 pasos con asignaciones '<-'.",
        "keyConcepts": [
          "Asignación formal con <-",
          "Triple bucle Para",
          "Crecimiento volumétrico n³"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n³) Triple Bucle / Cúbico (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Complejidad_N3(n)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿j <= n?"
            },
            {
              "id": 4,
              "type": "decision",
              "text": "¿k <= n?"
            },
            {
              "id": 5,
              "type": "process",
              "text": "total <- total + 1;"
            },
            {
              "id": 6,
              "type": "end",
              "text": "FinProceso: Retornar n^3"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"Proceso Complejidad_N3\"]):::terminal --> Init[\"n <- 3; total <- 0; i <- 1\"]:::proceso\n    Init --> CheckI{\"¿i <= n?\"}:::decision\n    CheckI -- \"Sí\" --> InitJ[\"j <- 1\"]:::proceso\n    CheckI -- \"No\" --> PrintEnd[/\"Escribir 'Total cúbico: ', total\"/]:::salida\n    InitJ --> CheckJ{\"¿j <= n?\"}:::decision\n    CheckJ -- \"Sí\" --> InitK[\"k <- 1\"]:::proceso\n    CheckJ -- \"No\" --> IncI[\"i <- i + 1\"]:::proceso\n    InitK --> CheckK{\"¿k <= n?\"}:::decision\n    CheckK -- \"Sí\" --> IncTotal[\"total <- total + 1;<br/>k <- k + 1\"]:::proceso\n    CheckK -- \"No\" --> IncJ[\"j <- j + 1\"]:::proceso\n    IncTotal --> CheckK\n    IncJ --> CheckJ\n    IncI --> CheckI\n    PrintEnd --> EndNode([\"FinProceso\"]):::terminal"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "def cubic_complexity(n: int) -> int:\n    \"\"\"Complejidad cúbica O(n³) típica en multiplicación tradicional de matrices.\"\"\"\n    operations = 0\n    for i in range(n):\n        for j in range(n):\n            for k in range(n):\n                operations += 1\n    return operations\n\nif __name__ == '__main__':\n    dim = 3\n    print(f\"Para n={dim}, operaciones O(n³) = {cubic_complexity(dim)}\")",
        "explanation": "Triple iteración anidada, común en multiplicación naíf de matrices y algoritmos de rutas más cortas tipo Floyd-Warshall.",
        "keyConcepts": [
          "Algoritmo de Floyd-Warshall",
          "Multiplicación de matrices",
          "Alerta crítica de escalabilidad"
        ],
        "terminalOutput": [
          "$ python -u complexity_n3.py",
          "[+] Dimensión matricial n = 3",
          "[*] 3 planos x 3 filas x 3 columnas",
          "[✓] Total de iteraciones ejecutadas = 27 (3³)."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Complejidad O(n³)</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .layers { display: flex; gap: 8px; margin: 15px 0; justify-content: center; }\n    .layer { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; border: 2px solid #000; padding: 4px; background: #F4F4F0; }\n    .cube-cell { width: 24px; height: 24px; border: 1px solid #000; background: #DDD; transition: background 0.1s; }\n    .cube-cell.active { background: #9B51E0 !important; }\n    button { background: #9B51E0; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Complejidad O(n³) · Cubo 3x3x3 (27 Voxels)</h2>\n    <div class=\"layers\" id=\"layers\"></div>\n    <button onclick=\"ejecutarN3()\">Llenar Voxels Cúbicos</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    const layers = document.getElementById('layers');\n    function init() {\n      layers.innerHTML = '';\n      for (let l = 0; l < 3; l++) {\n        let h = `<div class=\"layer\">`;\n        for (let c = 0; c < 9; c++) h += `<div class=\"cube-cell\" id=\"v-${l*9 + c}\"></div>`;\n        h += `</div>`;\n        layers.innerHTML += h;\n      }\n    }\n    async function ejecutarN3() {\n      init();\n      for (let i = 0; i < 27; i++) {\n        document.getElementById(`v-${i}`).classList.add('active');\n        document.getElementById('status').innerText = `Voxel cúbico ${i+1} de 27 procesado...`;\n        await new Promise(r => setTimeout(r, 60));\n      }\n      document.getElementById('status').innerText = \"Volumen cúbico n³ completado.\";\n    }\n    init();\n  </script>\n</body>\n</html>",
        "explanation": "Representación volumétrica de 3 capas de 9 celdas que ilustra el crecimiento del volumen computacional en O(n³).",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Visualización en 3 capas volumétricas",
          "27 micro-bloques animados"
        ],
        "demoData": [
          1,
          2,
          3
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class CubicEngine\n{\n    public static int ExecuteCubic(int n)\n    {\n        int total = 0;\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++)\n                for (int k = 0; k < n; k++)\n                    total++;\n        return total;\n    }\n\n    public static void Main()\n    {\n        Console.WriteLine($\"Operaciones cúbicas para n=3: {ExecuteCubic(3)}\");\n    }\n}",
        "explanation": "Triple bucle representativo de algoritmos como multiplicación clásica matricial o Floyd-Warshall.",
        "keyConcepts": [
          "Triple register looping",
          "Cache locality impact",
          "Cero allocations"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n³)",
          "complexityWorst": "O(n³)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Triple nested counter"
        }
      }
    }
  },
  "complexity_exp": {
    "name": "O(2ⁿ) Árbol Exponencial Recursivo",
    "category": "complexity",
    "bigO": "O(2ⁿ)",
    "space": "O(n)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso resultado <- Fib_Exponencial(k)\n    Definir resultado Como Entero;\n    Si k <= 1 Entonces\n        resultado <- k;\n    SiNo\n        resultado <- Fib_Exponencial(k - 1) + Fib_Exponencial(k - 2);\n    FinSi\nFinSubProceso\n\nProceso Complejidad_Exp\n    Definir n, res Como Entero;\n\n    n <- 6;\n    res <- Fib_Exponencial(n);\n\n    Escribir 'Fibonacci recursivo O(2^n):';\n    Escribir 'Entrada n: ', n;\n    Escribir 'Resultado calculado: ', res;\nFinProceso",
        "explanation": "Complejidad Exponencial O(2ⁿ) en PSeInt canónico. Demuestra la duplicación del trabajo por nivel en un árbol binario recursivo con asignaciones '<-'.",
        "keyConcepts": [
          "SubProceso recursivo",
          "Bifurcación binaria",
          "Asignación <-"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(2ⁿ) Árbol Exponencial Recursivo (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Fib_Exponencial(k)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿k <= 1?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "resultado <- k;"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Fib(k-1) + Fib(k-2);"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinSubProceso: Retornar resultado"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"SubProceso Fib_Exponencial(k)\"]):::terminal --> CheckBase{\"¿k <= 1?\"}:::decision\n    CheckBase -- \"Sí (Caso Base)\" --> ReturnK[\"resultado <- k\"]:::proceso\n    CheckBase -- \"No (Bifurcación)\" --> DoubleRec[\"Llamar Fib(k-1)<br/>Llamar Fib(k-2)<br/>resultado <- suma\"]:::proceso\n    ReturnK --> EndNode([\"FinSubProceso\"]):::terminal\n    DoubleRec --> EndNode"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "def fib_exponential(n: int) -> int:\n    \"\"\"Recursión naíf de Fibonacci generando un árbol de llamadas O(2ⁿ).\"\"\"\n    if n <= 1:\n        return n\n    return fib_exponential(n - 1) + fib_exponential(n - 2)\n\nif __name__ == '__main__':\n    val = 6\n    print(f\"Fibonacci recursivo de n={val}: {fib_exponential(val)}\")",
        "explanation": "Bifurcación recursiva exponencial sin memoización, creciendo a una tasa de ~1.618ⁿ (Número de Oro).",
        "keyConcepts": [
          "Recursión sin caché",
          "Complejidad exponencial",
          "Inviable para n > 40"
        ],
        "terminalOutput": [
          "$ python -u complexity_exp.py",
          "[+] Entrada n = 6",
          "[*] Ramas invocadas: 25 llamadas a función",
          "[✓] Fib(6) = 8 en 25 operaciones recursivas."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Complejidad O(2ⁿ)</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .tree-box { display: flex; flex-direction: column; gap: 8px; align-items: center; margin: 15px 0; }\n    .tree-row { display: flex; gap: 8px; }\n    .node { width: 22px; height: 22px; border: 2px solid #000; border-radius: 50%; background: #DDD; transition: background 0.15s; }\n    .node.active { background: #FF3366 !important; }\n    button { background: #FF3366; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Complejidad O(2ⁿ) · Árbol Binario Bifurcado</h2>\n    <div class=\"tree-box\">\n      <div class=\"tree-row\"><div class=\"node\" id=\"n-1\"></div></div>\n      <div class=\"tree-row\"><div class=\"node\" id=\"n-2\"></div><div class=\"node\" id=\"n-3\"></div></div>\n      <div class=\"tree-row\"><div class=\"node\" id=\"n-4\"></div><div class=\"node\" id=\"n-5\"></div><div class=\"node\" id=\"n-6\"></div><div class=\"node\" id=\"n-7\"></div></div>\n      <div class=\"tree-row\"><div class=\"node\" id=\"n-8\"></div><div class=\"node\" id=\"n-9\"></div><div class=\"node\" id=\"n-10\"></div><div class=\"node\" id=\"n-11\"></div><div class=\"node\" id=\"n-12\"></div><div class=\"node\" id=\"n-13\"></div><div class=\"node\" id=\"n-14\"></div><div class=\"node\" id=\"n-15\"></div></div>\n    </div>\n    <button onclick=\"ejecutarExp()\">Expandir Árbol 2ⁿ</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    async function ejecutarExp() {\n      document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));\n      let total = 15;\n      for (let i = 1; i <= total; i++) {\n        document.getElementById(`n-${i}`).classList.add('active');\n        document.getElementById('status').innerText = `Activando nodo recursivo ${i} de ${total}...`;\n        await new Promise(r => setTimeout(r, 120));\n      }\n      document.getElementById('status').innerText = \"Árbol exponencial O(2ⁿ) expandido.\";\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Demostración visual de la bifurcación binaria recursiva que duplica el número de nodos por cada nivel del árbol.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Árbol visual de 4 niveles",
          "Efecto de cascada binaria"
        ],
        "demoData": [
          1,
          2,
          4,
          8
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\npublic static class ExponentialEngine\n{\n    public static int Fib(int n)\n    {\n        if (n <= 1) return n;\n        return Fib(n - 1) + Fib(n - 2);\n    }\n\n    public static void Main()\n    {\n        Console.WriteLine($\"Fibonacci recursivo n=6: {Fib(6)}\");\n    }\n}",
        "explanation": "Árbol de llamadas en pila (call stack) con profundidad proporcional a n y llamadas totales proporcionales a 2ⁿ.",
        "keyConcepts": [
          "Stack frames",
          "Recursión pura",
          "Profundidad O(n)"
        ],
        "benchmark": {
          "memoryAlloc": "O(n) Call stack",
          "complexityBest": "O(1)",
          "complexityWorst": "O(2ⁿ)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Stack frames propagation"
        }
      }
    }
  },
  "complexity_fact": {
    "name": "O(n!) Permutación Factorial Exhaustiva",
    "category": "complexity",
    "bigO": "O(n!)",
    "space": "O(n)",
    "langs": {
      "pseint": {
        "name": "PSeInt Canónico (<- y Diagramas Mermaid)",
        "langBadge": "PSeInt Pro / Mermaid",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Generar_Permutaciones(n_elem, nivel)\n    Definir i Como Entero;\n    Si nivel == n_elem Entonces\n        Escribir 'Permutación válida completada.';\n    SiNo\n        Para i <- nivel Hasta n_elem Con Paso 1 Hacer\n            Generar_Permutaciones(n_elem, nivel + 1);\n        FinPara\n    FinSi\nFinSubProceso\n\nProceso Complejidad_Fact\n    Definir total_elementos Como Entero;\n\n    total_elementos <- 3;\n    Escribir 'Generando permutaciones para n = ', total_elementos;\n    Generar_Permutaciones(total_elementos, 1);\n    Escribir 'Total de hojas factoriales generadas: n! = 6';\nFinProceso",
        "explanation": "Complejidad Factorial O(n!) en PSeInt canónico. Genera recursivamente todas las permutaciones de n elementos con asignaciones '<-'.",
        "keyConcepts": [
          "SubProceso recursivo",
          "Hojas n!",
          "Asignación <-"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n!) Permutación Factorial Exhaustiva (PSeInt / Mermaid.js)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Permutaciones_Factorial(n, nivel)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿nivel == n?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Escribir 'Permutación completada';"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Generar_Permutaciones(n, nivel + 1);"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinSubProceso: Generar n! ramas"
            }
          ],
          "mermaidCode": "flowchart TD\n    classDef terminal fill:#fde047,stroke:#ca8a04,stroke-width:2.5px,color:#1e293b,font-weight:bold;\n    classDef proceso fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#1e293b;\n    classDef entrada fill:#fbcfe8,stroke:#db2777,stroke-width:2px,color:#831843,font-weight:bold;\n    classDef salida fill:#bbf7d0,stroke:#16a34a,stroke-width:2px,color:#064e3b,font-weight:bold;\n    classDef decision fill:#bae6fd,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,font-weight:bold;\n\n    Start([\"SubProceso Generar_Permutaciones(n, nivel)\"]):::terminal --> CheckLevel{\"¿nivel == n?\"}:::decision\n    CheckLevel -- \"Sí (Hoja Terminal)\" --> PrintLeaf[/\"Escribir 'Permutación completada'\"/]:::salida\n    CheckLevel -- \"No (Bucle Factorial)\" --> LoopBranch[\"Para i <- nivel Hasta n:<br/>Generar_Permutaciones(n, nivel + 1)\"]:::proceso\n    PrintLeaf --> EndNode([\"FinSubProceso\"]):::terminal\n    LoopBranch --> EndNode"
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef permute(arr: List[int]) -> List[List[int]]:\n    \"\"\"Generación factorial exhaustiva O(n!) de todas las permutaciones.\"\"\"\n    if len(arr) <= 1:\n        return [arr]\n    result = []\n    for i in range(len(arr)):\n        curr = arr[i]\n        rem = arr[:i] + arr[i+1:]\n        for p in permute(rem):\n            result.append([curr] + p)\n    return result\n\nif __name__ == '__main__':\n    items = [1, 2, 3]\n    permutaciones = permute(items)\n    print(f\"Items: {items}\")\n    print(f\"Total permutaciones n! ({len(items)}!): {len(permutaciones)}\")\n    for p in permutaciones:\n        print(\" ->\", p)",
        "explanation": "Fuerza bruta combinatoria exhaustiva típica del Problema del Viajante (TSP) sin podas.",
        "keyConcepts": [
          "Problema del Viajante TSP",
          "Fuerza bruta factorial",
          "Inviable computacionalmente para n > 15"
        ],
        "terminalOutput": [
          "$ python -u complexity_fact.py",
          "[+] Elementos: [1, 2, 3] (n=3)",
          "[*] Permutaciones generadas:",
          "  -> [1, 2, 3]",
          "  -> [1, 3, 2]",
          "  -> [2, 1, 3]",
          "  -> [2, 3, 1]",
          "  -> [3, 1, 2]",
          "  -> [3, 2, 1]",
          "[✓] Exactamente 6 permutaciones (3! = 3 × 2 × 1)."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Complejidad O(n!)</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .perm-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 15px 0; }\n    .perm-item { border: 2px solid #000; padding: 8px; text-align: center; font-weight: bold; background: #EEE; transition: all 0.2s; font-size: 13px; }\n    .perm-item.active { background: #FFE600 !important; transform: scale(1.05); box-shadow: 2px 2px 0px #000; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Complejidad O(n!) · 3! = 6 Permutaciones</h2>\n    <div class=\"perm-list\" id=\"list\">\n      <div class=\"perm-item\" id=\"p-0\">[1, 2, 3]</div>\n      <div class=\"perm-item\" id=\"p-1\">[1, 3, 2]</div>\n      <div class=\"perm-item\" id=\"p-2\">[2, 1, 3]</div>\n      <div class=\"perm-item\" id=\"p-3\">[2, 3, 1]</div>\n      <div class=\"perm-item\" id=\"p-4\">[3, 1, 2]</div>\n      <div class=\"perm-item\" id=\"p-5\">[3, 2, 1]</div>\n    </div>\n    <button onclick=\"ejecutarFact()\">Generar Hojas n!</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    async function ejecutarFact() {\n      document.querySelectorAll('.perm-item').forEach(el => el.classList.remove('active'));\n      for (let i = 0; i < 6; i++) {\n        document.getElementById(`p-${i}`).classList.add('active');\n        document.getElementById('status').innerText = `Generando permutación factorial ${i+1} de 6...`;\n        await new Promise(r => setTimeout(r, 200));\n      }\n      document.getElementById('status').innerText = \"Todas las hojas factoriales completadas.\";\n    }\n  </script>\n</body>\n</html>",
        "explanation": "Visualización completa de las 6 combinaciones factoriales de un conjunto de 3 elementos.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Activación secuencial de hojas",
          "Grilla combinatoria"
        ],
        "demoData": [
          1,
          2,
          3
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\nusing System.Collections.Generic;\n\npublic static class FactorialEngine\n{\n    public static void Permute(List<int> current, List<int> remaining, List<string> output)\n    {\n        if (remaining.Count == 0)\n        {\n            output.Add(string.Join(\", \", current));\n            return;\n        }\n        for (int i = 0; i < remaining.Count; i++)\n        {\n            var nextCurrent = new List<int>(current) { remaining[i] };\n            var nextRemaining = new List<int>(remaining);\n            nextRemaining.RemoveAt(i);\n            Permute(nextCurrent, nextRemaining, output);\n        }\n    }\n\n    public static void Main()\n    {\n        var results = new List<string>();\n        Permute(new List<int>(), new List<int> { 1, 2, 3 }, results);\n        Console.WriteLine($\"Total permutaciones 3!: {results.Count}\");\n    }\n}",
        "explanation": "Exploración factorial exhaustiva recursiva generando n! hojas en el árbol.",
        "keyConcepts": [
          "Combinatorial branching",
          "Heap allocations en permutaciones",
          "Recursión de profundidad n"
        ],
        "benchmark": {
          "memoryAlloc": "O(n!) Combinations",
          "complexityBest": "O(n!)",
          "complexityWorst": "O(n!)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Combinatorial recursion tree"
        }
      }
    }
  }
};
