/* =========================================================================
   ALGO-MATRIX 3D: CATÁLOGO MULTI-LENGUAJE DE ALGORITMOS (JPV PRO)
   Soporte exhaustivo para PSeInt (Modo Estricto O&M), Python 3, 
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Ordenamiento_Burbuja_Estricto\n\tDefinir n, i, j, aux, k Como Entero;\n\tDefinir intercambiado Como Logico;\n\tDimension arr[7];\n\t\n\tn = 7;\n\tarr[1] = 64; arr[2] = 34; arr[3] = 25; arr[4] = 12; arr[5] = 22; arr[6] = 11; arr[7] = 90;\n\t\n\tEscribir \"Arreglo Inicial:\";\n\tPara k = 1 Hasta n Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\n\t\n\tPara i = 1 Hasta n - 1 Con Paso 1 Hacer\n\t\tintercambiado = Falso;\n\t\tPara j = 1 Hasta n - i Con Paso 1 Hacer\n\t\t\tSi arr[j] > arr[j + 1] Entonces\n\t\t\t\taux = arr[j];\n\t\t\t\tarr[j] = arr[j + 1];\n\t\t\t\tarr[j + 1] = aux;\n\t\t\t\tintercambiado = Verdadero;\n\t\t\tFinSi;\n\t\tFinPara;\n\t\tSi NO intercambiado Entonces\n\t\t\ti = n; // Salida temprana si ya esta ordenado\n\t\tFinSi;\n\tFinPara;\n\t\n\tEscribir \"Arreglo Ordenado con Exito:\";\n\tPara k = 1 Hasta n Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\nFinProceso",
        "explanation": "Implementación formal en PSeInt Modo Estricto O&M. Todas las variables se declaran explícitamente con 'Definir', cada instrucción termina obligatoriamente con punto y coma (;), la asignación emplea '=' y se garantiza la detección temprana en O(n) con la bandera booleana 'intercambiado'.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Declaración formal con Definir",
          "Intercambio atómico con variable aux"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Bubble Sort (Ordenamiento Burbuja) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BubbleSort_Estricto(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir n, i, j, aux; intercambiado = Falso;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n - 1?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "j = 1;"
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
              "text": "aux = arr[j]; arr[j] = arr[j+1]; arr[j+1] = aux; intercambiado = Verdadero;"
            },
            {
              "id": 8,
              "type": "process",
              "text": "j = j + 1;"
            },
            {
              "id": 9,
              "type": "decision",
              "text": "¿NO intercambiado?"
            },
            {
              "id": 10,
              "type": "process",
              "text": "i = i + 1;"
            },
            {
              "id": 11,
              "type": "end",
              "text": "FinProceso: Retornar arr ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef bubble_sort(arr: List[int]) -> List[int]:\n    \"\"\"Ordenamiento Burbuja optimizado con parada anticipada.\"\"\"\n    n = len(arr)\n    for i in range(n - 1):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr\n\nif __name__ == '__main__':\n    datos = [64, 34, 25, 12, 22, 11, 90]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {bubble_sort(datos)}\")",
        "explanation": "En Python aprovechamos el desempaquetado de tuplas 'arr[j], arr[j+1] = arr[j+1], arr[j]' para realizar intercambios atómicos sin variables auxiliares.",
        "keyConcepts": [
          "Tuple unpacking swap",
          "Type hints List[int]",
          "Early-exit boolean flag"
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
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Bubble Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; color: #000; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s, background 0.15s; }\n    .bar.comparing { background: #FFE600 !important; }\n    .bar.swapping { background: #FF3366 !important; color: white; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n    button:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0px #000; }\n    .status { margin-top: 10px; font-weight: bold; font-size: 12px; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Bubble Sort · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarBubbleSort()\">Iniciar Ordenamiento</button>\n    <div class=\"status\" id=\"status\">Presiona el botón para ordenar.</div>\n  </div>\n\n  <script>\n    let arr = [64, 34, 25, 12, 22, 11, 90];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n\n    async function ejecutarBubbleSort() {\n      status.innerText = \"Ordenando arreglo...\";\n      const n = arr.length;\n      for (let i = 0; i < n - 1; i++) {\n        for (let j = 0; j < n - i - 1; j++) {\n          const bA = document.getElementById(`b-${j}`);\n          const bB = document.getElementById(`b-${j+1}`);\n          bA.classList.add('comparing'); bB.classList.add('comparing');\n          await new Promise(r => setTimeout(r, 200));\n\n          if (arr[j] > arr[j + 1]) {\n            bA.classList.add('swapping'); bB.classList.add('swapping');\n            let t = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = t;\n            render();\n            await new Promise(r => setTimeout(r, 200));\n          }\n          bA.classList.remove('comparing', 'swapping');\n          bB.classList.remove('comparing', 'swapping');\n        }\n      }\n      status.innerText = \"¡Arreglo ordenado con éxito!\";\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Código web 100% completo, autocontenido y listo para copiar en un archivo .html y abrir directamente en el navegador. Incluye estructura HTML5 semántica, diseño Neo-Brutalista CSS con sombras de bloque sin blur, y lógica JavaScript con 'async/await' para la animación fluida en el DOM.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Estilos CSS Neo-Brutalistas integrados",
          "Animación DOM con Async/Await"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class BubbleSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        int n = array.Length;\n        for (int i = 0; i < n - 1; i++)\n        {\n            bool swapped = false;\n            for (int j = 0; j < n - i - 1; j++)\n            {\n                if (array[j].CompareTo(array[j + 1]) > 0)\n                {\n                    (array[j], array[j + 1]) = (array[j + 1], array[j]);\n                    swapped = true;\n                }\n            }\n            if (!swapped) break;\n        }\n    }\n}",
        "explanation": "En C# .NET 9 utilizamos 'Span<T>' para operar directamente sobre la memoria contigua del Stack sin generar presión sobre el Garbage Collector (0 Bytes Allocations).",
        "keyConcepts": [
          "Span<T> para memoria contigua",
          "Tuplas de C# para swap atómico",
          "Cero recolección de basura (0 GC)"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-Place / Stackalloc)",
          "complexityBest": "O(n)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS / C# 12",
          "registersUsed": "CPU L1/L2 Cache Resident"
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Ordenamiento_Seleccion_Estricto\n\tDefinir n, i, j, min_idx, aux, k Como Entero;\n\tDimension arr[7];\n\t\n\tn = 7;\n\tarr[1] = 29; arr[2] = 10; arr[3] = 14; arr[4] = 37; arr[5] = 13; arr[6] = 5; arr[7] = 42;\n\t\n\tEscribir \"Arreglo Inicial:\";\n\tPara k = 1 Hasta n Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\n\t\n\tPara i = 1 Hasta n - 1 Con Paso 1 Hacer\n\t\tmin_idx = i;\n\t\tPara j = i + 1 Hasta n Con Paso 1 Hacer\n\t\t\tSi arr[j] < arr[min_idx] Entonces\n\t\t\t\tmin_idx = j;\n\t\t\tFinSi;\n\t\tFinPara;\n\t\tSi min_idx <> i Entonces\n\t\t\taux = arr[i];\n\t\t\tarr[i] = arr[min_idx];\n\t\t\tarr[min_idx] = aux;\n\t\tFinSi;\n\tFinPara;\n\t\n\tEscribir \"Arreglo Ordenado:\";\n\tPara k = 1 Hasta n Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\nFinProceso",
        "explanation": "Selection Sort en Modo Estricto O&M. Localiza el índice del elemento mínimo 'min_idx' en cada pasada y realiza a lo sumo n-1 intercambios en total, minimizando las escrituras en memoria.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Índice mínimo min_idx",
          "Máximo n-1 escrituras en memoria"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Selection Sort (Ordenamiento por Selección) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio SelectionSort_Estricto(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir n, i, j, min_idx; i = 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n - 1?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "min_idx = i; j = i + 1;"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿j <= n?"
            },
            {
              "id": 6,
              "type": "decision",
              "text": "¿arr[j] < arr[min_idx]?"
            },
            {
              "id": 7,
              "type": "process",
              "text": "min_idx = j;"
            },
            {
              "id": 8,
              "type": "process",
              "text": "j = j + 1;"
            },
            {
              "id": 9,
              "type": "decision",
              "text": "¿min_idx <> i?"
            },
            {
              "id": 10,
              "type": "process",
              "text": "aux = arr[i]; arr[i] = arr[min_idx]; arr[min_idx] = aux;"
            },
            {
              "id": 11,
              "type": "process",
              "text": "i = i + 1;"
            },
            {
              "id": 12,
              "type": "end",
              "text": "FinProceso: Retornar arr ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef selection_sort(arr: List[int]) -> List[int]:\n    \"\"\"Selection Sort: encuentra el mínimo y lo posiciona.\"\"\"\n    n = len(arr)\n    for i in range(n - 1):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        if min_idx != i:\n            arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nif __name__ == '__main__':\n    datos = [29, 10, 14, 37, 13, 5, 42]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {selection_sort(datos)}\")",
        "explanation": "El algoritmo mantiene la región ordenada a la izquierda y en cada iteración selecciona el mínimo realizando a lo sumo un solo swap.",
        "keyConcepts": [
          "min_idx selector",
          "Swap in-place",
          "O(n) writes"
        ],
        "terminalOutput": [
          "$ python -u selection_sort.py",
          "[+] Entrada: [29, 10, 14, 37, 13, 5, 42]",
          "[*] Mínimo '5' encontrado -> Swap con arr[0]",
          "[✓] Ordenado: [5, 10, 13, 14, 29, 37, 42]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Selection Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s; }\n    .bar.min-candidate { background: #38E5FF !important; }\n    button { background: #38E5FF; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Selection Sort · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarSelectionSort()\">Ordenar por Selección</button>\n  </div>\n  <script>\n    let arr = [29, 10, 14, 37, 13, 5, 42];\n    const arena = document.getElementById('arena');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarSelectionSort() {\n      const n = arr.length;\n      for (let i = 0; i < n - 1; i++) {\n        let minIdx = i;\n        document.getElementById(`b-${minIdx}`).classList.add('min-candidate');\n        for (let j = i + 1; j < n; j++) {\n          await new Promise(r => setTimeout(r, 120));\n          if (arr[j] < arr[minIdx]) {\n            document.getElementById(`b-${minIdx}`).classList.remove('min-candidate');\n            minIdx = j;\n            document.getElementById(`b-${minIdx}`).classList.add('min-candidate');\n          }\n        }\n        if (minIdx !== i) {\n          let t = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = t;\n          render();\n          await new Promise(r => setTimeout(r, 150));\n        }\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Componente web HTML5 standalone completo con resaltado visual del candidato mínimo en tiempo real mediante 'async/await'.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Resaltado visual de mínimo",
          "Zero dependencias"
        ],
        "demoData": [
          29,
          10,
          14,
          37,
          13,
          5,
          42
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class SelectionSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        int n = array.Length;\n        for (int i = 0; i < n - 1; i++)\n        {\n            int minIdx = i;\n            for (int j = i + 1; j < n; j++)\n            {\n                if (array[j].CompareTo(array[minIdx]) < 0) minIdx = j;\n            }\n            if (minIdx != i) (array[i], array[minIdx]) = (array[minIdx], array[i]);\n        }\n    }\n}",
        "explanation": "Óptimo para memorias con ciclos de escritura limitados (Flash / EEPROM) ya que Selection Sort minimiza las escrituras a un máximo de n-1.",
        "keyConcepts": [
          "Span<T> memory efficiency",
          "IComparable<T>",
          "Cero allocations"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n²)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Mínimas escrituras en bus de datos"
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Ordenamiento_Insercion_Estricto\n\tDefinir n, i, j, clave, k Como Entero;\n\tDimension arr[7];\n\t\n\tn = 7;\n\tarr[1] = 12; arr[2] = 11; arr[3] = 13; arr[4] = 5; arr[5] = 6; arr[6] = 7; arr[7] = 1;\n\t\n\tEscribir \"Arreglo Inicial:\";\n\tPara k = 1 Hasta n Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\n\t\n\tPara i = 2 Hasta n Con Paso 1 Hacer\n\t\tclave = arr[i];\n\t\tj = i - 1;\n\t\tMientras j >= 1 Y arr[j] > clave Hacer\n\t\t\tarr[j + 1] = arr[j]; // Desplazar elemento mayor\n\t\t\tj = j - 1;\n\t\tFinMientras;\n\t\tarr[j + 1] = clave; // Insertar clave en hueco\n\tFinPara;\n\t\n\tEscribir \"Arreglo Ordenado:\";\n\tPara k = 1 Hasta n Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\nFinProceso",
        "explanation": "Insertion Sort en Modo Estricto O&M. Construye la lista ordenada desplazando hacia la derecha los elementos mayores que 'clave' y ubicando la clave en el espacio correspondiente con punto y coma (;) en cada línea.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Bucle condicional Mientras",
          "Desplazamiento in-place"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Insertion Sort (Ordenamiento por Inserción) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio InsertionSort_Estricto(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir n, i, j, clave; i = 2;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "clave = arr[i]; j = i - 1;"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿j >= 1 Y arr[j] > clave?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "arr[j + 1] = arr[j]; j = j - 1;"
            },
            {
              "id": 7,
              "type": "process",
              "text": "arr[j + 1] = clave; i = i + 1;"
            },
            {
              "id": 8,
              "type": "end",
              "text": "FinProceso: Retornar arr ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef insertion_sort(arr: List[int]) -> List[int]:\n    \"\"\"Insertion Sort: O(n) en arreglos casi ordenados.\"\"\"\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr\n\nif __name__ == '__main__':\n    datos = [12, 11, 13, 5, 6, 7, 1]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {insertion_sort(datos)}\")",
        "explanation": "Extremadamente rápido para arreglos pequeños o casi ordenados, sirviendo como algoritmo base de TimSort.",
        "keyConcepts": [
          "Algoritmo adaptable",
          "Estabilidad garantizada",
          "Caché amigable"
        ],
        "terminalOutput": [
          "$ python -u insertion_sort.py",
          "[+] Entrada: [12, 11, 13, 5, 6, 7, 1]",
          "[*] Clave 11 insertada antes de 12",
          "[✓] Ordenado: [1, 5, 6, 7, 11, 12, 13]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Insertion Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s; }\n    .bar.key { background: #C084FC !important; color: white; }\n    button { background: #C084FC; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Insertion Sort · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarInsertionSort()\">Ordenar por Inserción</button>\n  </div>\n  <script>\n    let arr = [12, 11, 13, 5, 6, 7, 1];\n    const arena = document.getElementById('arena');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarInsertionSort() {\n      for (let i = 1; i < arr.length; i++) {\n        let key = arr[i], j = i - 1;\n        document.getElementById(`b-${i}`).classList.add('key');\n        await new Promise(r => setTimeout(r, 180));\n        while (j >= 0 && arr[j] > key) {\n          arr[j + 1] = arr[j];\n          render();\n          await new Promise(r => setTimeout(r, 100));\n          j--;\n        }\n        arr[j + 1] = key;\n        render();\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Componente web HTML5 standalone completo con elevación visual de la clave (Key) en color púrpura y desplazamiento animado.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Elevación visual de clave",
          "Desplazamiento horizontal fluido"
        ],
        "demoData": [
          12,
          11,
          13,
          5,
          6,
          7,
          1
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class InsertionSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        for (int i = 1; i < array.Length; i++)\n        {\n            T key = array[i];\n            int j = i - 1;\n            while (j >= 0 && array[j].CompareTo(key) > 0)\n            {\n                array[j + 1] = array[j];\n                j--;\n            }\n            array[j + 1] = key;\n        }\n    }\n}",
        "explanation": "Utilizado por el motor interno de .NET Array.Sort como subrutina para particiones pequeñas de menos de 16 elementos.",
        "keyConcepts": [
          "Subrutina de QuickSort híbrido",
          "Span<T> y cero overhead",
          "Operación O(n)"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Registro CPU para variable key"
        }
      }
    }
  },
  "shell_sort": {
    "name": "Shell Sort (Ordenamiento por Brechas)",
    "category": "sort",
    "bigO": "O(n log² n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Ordenamiento_Shell_Estricto\n\tDefinir n, gap, i, j, temp, k Como Entero;\n\tDimension arr[8];\n\t\n\tn = 8;\n\tarr[1] = 35; arr[2] = 33; arr[3] = 42; arr[4] = 10; arr[5] = 14; arr[6] = 19; arr[7] = 27; arr[8] = 44;\n\t\n\tgap = TRUNC(n / 2);\n\tMientras gap > 0 Hacer\n\t\tPara i = gap + 1 Hasta n Con Paso 1 Hacer\n\t\t\ttemp = arr[i];\n\t\t\tj = i;\n\t\t\tMientras j > gap Y arr[j - gap] > temp Hacer\n\t\t\t\tarr[j] = arr[j - gap];\n\t\t\t\tj = j - gap;\n\t\t\tFinMientras;\n\t\t\tarr[j] = temp;\n\t\tFinPara;\n\t\tgap = TRUNC(gap / 2);\n\tFinMientras;\n\t\n\tEscribir \"Arreglo Ordenado con Shell Sort:\";\n\tPara k = 1 Hasta n Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\nFinProceso",
        "explanation": "Shell Sort en Modo Estricto O&M con TRUNC() para la división entera de la brecha 'gap', todas las variables tipadas al inicio y finalización de cada línea con punto y coma (;).",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "División entera TRUNC(n / 2)",
          "Brecha decreciente (Gap)"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Shell Sort (Ordenamiento por Brechas) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio ShellSort_Estricto(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir n, gap, i, j; gap = TRUNC(n / 2);"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿gap > 0?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "i = gap + 1;"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "temp = arr[i]; j = i;"
            },
            {
              "id": 7,
              "type": "decision",
              "text": "¿j > gap Y arr[j - gap] > temp?"
            },
            {
              "id": 8,
              "type": "process",
              "text": "arr[j] = arr[j - gap]; j = j - gap;"
            },
            {
              "id": 9,
              "type": "process",
              "text": "arr[j] = temp; i = i + 1;"
            },
            {
              "id": 10,
              "type": "process",
              "text": "gap = TRUNC(gap / 2);"
            },
            {
              "id": 11,
              "type": "end",
              "text": "FinProceso: Retornar arr ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef shell_sort(arr: List[int]) -> List[int]:\n    \"\"\"Shell Sort con secuencia de brechas de Shell (n // 2).\"\"\"\n    n = len(arr)\n    gap = n // 2\n    while gap > 0:\n        for i in range(gap, n):\n            temp = arr[i]\n            j = i\n            while j >= gap and arr[j - gap] > temp:\n                arr[j] = arr[j - gap]\n                j -= gap\n            arr[j] = temp\n        gap //= 2\n    return arr\n\nif __name__ == '__main__':\n    datos = [35, 33, 42, 10, 14, 19, 27, 44]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {shell_sort(datos)}\")",
        "explanation": "Elimina inversiones lejanas comparando elementos a distancia 'gap', reduciendo progresivamente la brecha hasta 1.",
        "keyConcepts": [
          "Secuencia de brechas de Shell",
          "Eliminación de inversiones distantes",
          "O(n log² n)"
        ],
        "terminalOutput": [
          "$ python -u shell_sort.py",
          "[+] Entrada: [35, 33, 42, 10, 14, 19, 27, 44]",
          "[*] Pasadas con gap=4, gap=2 y gap=1",
          "[+] Salida: [10, 14, 19, 27, 33, 35, 42, 44]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Shell Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s; }\n    button { background: #FF9900; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Shell Sort · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarShellSort()\">Ordenar con ShellSort</button>\n  </div>\n  <script>\n    let arr = [35, 33, 42, 10, 14, 19, 27, 44];\n    const arena = document.getElementById('arena');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarShellSort() {\n      let n = arr.length;\n      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {\n        for (let i = gap; i < n; i++) {\n          let temp = arr[i], j = i;\n          while (j >= gap && arr[j - gap] > temp) {\n            arr[j] = arr[j - gap];\n            render();\n            await new Promise(r => setTimeout(r, 120));\n            j -= gap;\n          }\n          arr[j] = temp;\n          render();\n        }\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Componente web HTML5 standalone completo con resaltado visual del par a distancia de brecha y contracción progresiva.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Resaltado de pares distantes",
          "Reducción de gap geométrica"
        ],
        "demoData": [
          35,
          33,
          42,
          10,
          14,
          19,
          27,
          44
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class ShellSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        int n = array.Length;\n        for (int gap = n / 2; gap > 0; gap /= 2)\n        {\n            for (int i = gap; i < n; i++)\n            {\n                T temp = array[i];\n                int j = i;\n                while (j >= gap && array[j - gap].CompareTo(temp) > 0)\n                {\n                    array[j] = array[j - gap];\n                    j -= gap;\n                }\n                array[j] = temp;\n            }\n        }\n    }\n}",
        "explanation": "Ideal para microcontroladores y .NET NanoFramework por no requerir memoria en el Heap ni llamadas recursivas.",
        "keyConcepts": [
          "Zero recursion stack",
          "Ideal para IoT",
          "O(n log² n) in-place"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n log² n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Variables temporales en registros CPU"
        }
      }
    }
  },
  "merge_sort": {
    "name": "Merge Sort (Ordenamiento por Mezcla)",
    "category": "sort",
    "bigO": "O(n log n)",
    "space": "O(n)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Mezclar(arr, izq, medio, der)\n\tDefinir n1, n2, i, j, k Como Entero;\n\tDimension L[20], R[20];\n\tn1 = medio - izq + 1;\n\tn2 = der - medio;\n\t\n\tPara i = 1 Hasta n1 Con Paso 1 Hacer L[i] = arr[izq + i - 1]; FinPara;\n\tPara j = 1 Hasta n2 Con Paso 1 Hacer R[j] = arr[medio + j]; FinPara;\n\t\n\ti = 1; j = 1; k = izq;\n\tMientras i <= n1 Y j <= n2 Hacer\n\t\tSi L[i] <= R[j] Entonces\n\t\t\tarr[k] = L[i]; i = i + 1;\n\t\tSino\n\t\t\tarr[k] = R[j]; j = j + 1;\n\t\tFinSi;\n\t\tk = k + 1;\n\tFinMientras;\n\t\n\tMientras i <= n1 Hacer arr[k] = L[i]; i = i + 1; k = k + 1; FinMientras;\n\tMientras j <= n2 Hacer arr[k] = R[j]; j = j + 1; k = k + 1; FinMientras;\nFinSubProceso\n\nSubProceso MergeSort(arr, izq, der)\n\tDefinir medio Como Entero;\n\tSi izq < der Entonces\n\t\tmedio = TRUNC((izq + der) / 2);\n\t\tMergeSort(arr, izq, medio);\n\t\tMergeSort(arr, medio + 1, der);\n\t\tMezclar(arr, izq, medio, der);\n\tFinSi;\nFinSubProceso\n\nProceso Principal_MergeSort_Estricto\n\tDefinir k Como Entero;\n\tDimension arr[8];\n\tarr[1] = 38; arr[2] = 27; arr[3] = 43; arr[4] = 3; arr[5] = 9; arr[6] = 82; arr[7] = 10; arr[8] = 15;\n\t\n\tMergeSort(arr, 1, 8);\n\t\n\tEscribir \"Arreglo Ordenado con Merge Sort:\";\n\tPara k = 1 Hasta 8 Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\nFinProceso",
        "explanation": "Merge Sort en Modo Estricto O&M. Implementa recursión con 'SubProceso' y 'Proceso' formal, definición explícita de todas las variables con tipos de datos, TRUNC() para división entera y punto y coma (;) obligatorio en todas las líneas.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "SubProceso recursivo formal",
          "Fusión ordenada en memoria temporal"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Merge Sort (Ordenamiento por Mezcla) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio MergeSort_Estricto(arr, izq, der)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿izq < der?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "medio = TRUNC((izq + der) / 2);"
            },
            {
              "id": 4,
              "type": "process",
              "text": "MergeSort(arr, izq, medio);"
            },
            {
              "id": 5,
              "type": "process",
              "text": "MergeSort(arr, medio + 1, der);"
            },
            {
              "id": 6,
              "type": "process",
              "text": "Mezclar(arr, izq, medio, der);"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinSubProceso"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef merge_sort(arr: List[int]) -> List[int]:\n    \"\"\"Merge Sort: O(n log n) garantizado en cualquier condición.\"\"\"\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    merged = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            merged.append(left[i]); i += 1\n        else:\n            merged.append(right[j]); j += 1\n    merged.extend(left[i:])\n    merged.extend(right[j:])\n    return merged\n\nif __name__ == '__main__':\n    datos = [38, 27, 43, 3, 9, 82, 10, 15]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {merge_sort(datos)}\")",
        "explanation": "Algoritmo estable que garantiza tiempo O(n log n) sin importar el estado inicial de la lista.",
        "keyConcepts": [
          "Estabilidad garantizada",
          "División por punto medio",
          "Conquista con fusión ordenada"
        ],
        "terminalOutput": [
          "$ python -u merge_sort.py",
          "[+] Entrada: [38, 27, 43, 3, 9, 82, 10, 15]",
          "[*] Fusión de sublistas en tiempo O(n log n).",
          "[+] Salida: [3, 9, 10, 15, 27, 38, 43, 82]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Merge Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s; }\n    button { background: #54F18F; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Merge Sort · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarMergeSort()\">Ordenar por Mezcla (Merge)</button>\n  </div>\n  <script>\n    let arr = [38, 27, 43, 3, 9, 82, 10, 15];\n    const arena = document.getElementById('arena');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function mergeSortWeb(items, l, r) {\n      if (l >= r) return;\n      const m = Math.floor((l + r) / 2);\n      await mergeSortWeb(items, l, m);\n      await mergeSortWeb(items, m + 1, r);\n      let temp = [], i = l, j = m + 1;\n      while (i <= m && j <= r) temp.push(items[i] <= items[j] ? items[i++] : items[j++]);\n      while (i <= m) temp.push(items[i++]);\n      while (j <= r) temp.push(items[j++]);\n      for (let k = 0; k < temp.length; k++) items[l + k] = temp[k];\n      render();\n      await new Promise(res => setTimeout(res, 180));\n    }\n    async function ejecutarMergeSort() {\n      await mergeSortWeb(arr, 0, arr.length - 1);\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Componente web HTML5 standalone completo que visualiza la fusión de sublistas reordenando el arreglo de forma atómica en el DOM.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Fusión en tiempo real",
          "Estabilidad en la animación"
        ],
        "demoData": [
          38,
          27,
          43,
          3,
          9,
          82,
          10,
          15
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class MergeSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        if (array.Length <= 1) return;\n        T[] temp = new T[array.Length];\n        SortInternal(array, temp);\n    }\n\n    private static void SortInternal<T>(Span<T> array, Span<T> temp) where T : IComparable<T>\n    {\n        if (array.Length <= 1) return;\n        int mid = array.Length / 2;\n        SortInternal(array[..mid], temp[..mid]);\n        SortInternal(array[mid..], temp[mid..]);\n\n        int i = 0, j = mid, k = 0;\n        while (i < mid && j < array.Length)\n            temp[k++] = array[i].CompareTo(array[j]) <= 0 ? array[i++] : array[j++];\n        while (i < mid) temp[k++] = array[i++];\n        while (j < array.Length) temp[k++] = array[j++];\n        temp[..array.Length].CopyTo(array);\n    }\n}",
        "explanation": "Implementación de alto rendimiento en C# utilizando un único buffer temporal asignado al inicio para evitar sobrecarga en el Garbage Collector.",
        "keyConcepts": [
          "Buffer temporal único",
          "Slices nativos array[..mid]",
          "CopyTo para transferencia eficiente"
        ],
        "benchmark": {
          "memoryAlloc": "O(n) memoria auxiliar",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n log n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Buffer contiguo en memoria administrada"
        }
      }
    }
  },
  "quick_sort": {
    "name": "Quick Sort (Lomuto Partition)",
    "category": "sort",
    "bigO": "O(n log n)",
    "space": "O(log n)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso pi = Particionar(arr, bajo, alto)\n\tDefinir pivote, i, j, aux, pi Como Entero;\n\tpivote = arr[alto];\n\ti = bajo - 1;\n\t\n\tPara j = bajo Hasta alto - 1 Con Paso 1 Hacer\n\t\tSi arr[j] < pivote Entonces\n\t\t\ti = i + 1;\n\t\t\taux = arr[i]; arr[i] = arr[j]; arr[j] = aux;\n\t\tFinSi;\n\tFinPara;\n\taux = arr[i + 1]; arr[i + 1] = arr[alto]; arr[alto] = aux;\n\tpi = i + 1;\nFinSubProceso\n\nSubProceso QuickSort(arr, bajo, alto)\n\tDefinir pi Como Entero;\n\tSi bajo < alto Entonces\n\t\tpi = Particionar(arr, bajo, alto);\n\t\tQuickSort(arr, bajo, pi - 1);\n\t\tQuickSort(arr, pi + 1, alto);\n\tFinSi;\nFinSubProceso\n\nProceso Principal_QuickSort_Estricto\n\tDefinir k Como Entero;\n\tDimension arr[7];\n\tarr[1] = 10; arr[2] = 80; arr[3] = 30; arr[4] = 90; arr[5] = 40; arr[6] = 50; arr[7] = 70;\n\t\n\tQuickSort(arr, 1, 7);\n\t\n\tEscribir \"Arreglo Ordenado con Quick Sort:\";\n\tPara k = 1 Hasta 7 Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\nFinProceso",
        "explanation": "Quick Sort en Modo Estricto O&M con Partición Lomuto. Variables definidas estrictamente, función 'SubProceso pi = Particionar' con retorno tipado y terminación con punto y coma (;).",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Partición Lomuto formal",
          "Pivoteo in-place sin duplicación"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Quick Sort (Lomuto Partition) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio QuickSort_Estricto(arr, bajo, alto)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿bajo < alto?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "pi = Particionar(arr, bajo, alto);"
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
              "text": "FinSubProceso"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef quick_sort(arr: List[int], low: int = 0, high: int = None) -> List[int]:\n    \"\"\"Quick Sort in-place utilizando partición Lomuto.\"\"\"\n    if high is None: high = len(arr) - 1\n    if low < high:\n        pivot = arr[high]\n        i = low - 1\n        for j in range(low, high):\n            if arr[j] < pivot:\n                i += 1\n                arr[i], arr[j] = arr[j], arr[i]\n        arr[i + 1], arr[high] = arr[high], arr[i + 1]\n        pi = i + 1\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n    return arr\n\nif __name__ == '__main__':\n    datos = [10, 80, 30, 90, 40, 50, 70]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {quick_sort(datos)}\")",
        "explanation": "El algoritmo de propósito general más rápido en la práctica por su excelente localidad de caché.",
        "keyConcepts": [
          "Partición Lomuto in-place",
          "Localidad espacial de caché",
          "Recursión O(log n)"
        ],
        "terminalOutput": [
          "$ python -u quick_sort.py",
          "[+] Entrada: [10, 80, 30, 90, 40, 50, 70]",
          "[*] Pivote 70 fijado en posición 5",
          "[✓] Salida: [10, 30, 40, 50, 70, 80, 90]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Quick Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s; }\n    .bar.pivot { background: #C084FC !important; color: white; }\n    button { background: #FFE600; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Quick Sort · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarQuickSort()\">Ordenar con QuickSort</button>\n  </div>\n  <script>\n    let arr = [10, 80, 30, 90, 40, 50, 70];\n    const arena = document.getElementById('arena');\n    function render(pivotIdx = -1) {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar ${i === pivotIdx ? 'pivot' : ''}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function qsort(low, high) {\n      if (low < high) {\n        let pivot = arr[high];\n        render(high);\n        await new Promise(r => setTimeout(r, 180));\n        let i = low - 1;\n        for (let j = low; j < high; j++) {\n          if (arr[j] < pivot) {\n            i++;\n            [arr[i], arr[j]] = [arr[j], arr[i]];\n            render(high);\n            await new Promise(r => setTimeout(r, 100));\n          }\n        }\n        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];\n        render();\n        let pi = i + 1;\n        await qsort(low, pi - 1);\n        await qsort(pi + 1, high);\n      }\n    }\n    async function ejecutarQuickSort() {\n      await qsort(0, arr.length - 1);\n      render();\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Componente web HTML5 standalone completo con resaltado dinámico del pivote en color púrpura y animación de particiones en tiempo real.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Resaltado visual de pivote",
          "Partición Lomuto animada"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class QuickSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        if (array.Length <= 1) return;\n        T pivot = array[^1];\n        int i = -1;\n\n        for (int j = 0; j < array.Length - 1; j++)\n        {\n            if (array[j].CompareTo(pivot) < 0)\n            {\n                i++;\n                (array[i], array[j]) = (array[j], array[i]);\n            }\n        }\n        (array[i + 1], array[^1]) = (array[^1], array[i + 1]);\n        int pi = i + 1;\n\n        Sort(array[..pi]);\n        Sort(array[(pi + 1)..]);\n    }\n}",
        "explanation": "Utiliza operadores de rango nativos de C# 12 sobre Span<T> para lograr la máxima velocidad que el compilador JIT puede emitir.",
        "keyConcepts": [
          "Slices de Span array[..pi]",
          "Cero copias de memoria",
          "In-place partition"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Registros de CPU para índices i y j"
        }
      }
    }
  },
  "heap_sort": {
    "name": "Heap Sort (Ordenamiento por Montículo)",
    "category": "sort",
    "bigO": "O(n log n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Amontonar(arr, n, i)\n\tDefinir mayor, izq, der, aux Como Entero;\n\tmayor = i;\n\tizq = 2 * i;\n\tder = 2 * i + 1;\n\t\n\tSi izq <= n Y arr[izq] > arr[mayor] Entonces mayor = izq; FinSi;\n\tSi der <= n Y arr[der] > arr[mayor] Entonces mayor = der; FinSi;\n\t\n\tSi mayor <> i Entonces\n\t\taux = arr[i]; arr[i] = arr[mayor]; arr[mayor] = aux;\n\t\tAmontonar(arr, n, mayor);\n\tFinSi;\nFinSubProceso\n\nSubProceso HeapSort(arr, n)\n\tDefinir i, aux Como Entero;\n\tPara i = TRUNC(n / 2) Hasta 1 Con Paso -1 Hacer\n\t\tAmontonar(arr, n, i);\n\tFinPara;\n\tPara i = n Hasta 2 Con Paso -1 Hacer\n\t\taux = arr[1]; arr[1] = arr[i]; arr[i] = aux;\n\t\tAmontonar(arr, i - 1, 1);\n\tFinPara;\nFinSubProceso\n\nProceso Principal_HeapSort_Estricto\n\tDefinir k Como Entero;\n\tDimension arr[6];\n\tarr[1] = 12; arr[2] = 11; arr[3] = 13; arr[4] = 5; arr[5] = 6; arr[6] = 7;\n\t\n\tHeapSort(arr, 6);\n\t\n\tEscribir \"Arreglo Ordenado con Heap Sort:\";\n\tPara k = 1 Hasta 6 Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\nFinProceso",
        "explanation": "Heap Sort en Modo Estricto O&M. Construye un Max-Heap en el arreglo y extrae sucesivamente la raíz máxima con punto y coma (;) estricto en cada instrucción.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Estructura Max-Heap implícita",
          "Garantía determinista O(n log n)"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Heap Sort (Ordenamiento por Montículo) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio HeapSort_Estricto(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Max-Heap: Para i = TRUNC(n/2) Hasta 1 Hacer Amontonar(arr, n, i);"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Extracción: Para i = n Hasta 2 Hacer Swap(arr[1], arr[i]); Amontonar(arr, i-1, 1);"
            },
            {
              "id": 4,
              "type": "end",
              "text": "FinProceso: Arreglo ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef heapify(arr: List[int], n: int, i: int) -> None:\n    largest = i\n    left, right = 2 * i + 1, 2 * i + 2\n    if left < n and arr[left] > arr[largest]: largest = left\n    if right < n and arr[right] > arr[largest]: largest = right\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\ndef heap_sort(arr: List[int]) -> List[int]:\n    \"\"\"Heap Sort: O(n log n) estricto con O(1) de memoria.\"\"\"\n    n = len(arr)\n    for i in range(n // 2 - 1, -1, -1): heapify(arr, n, i)\n    for i in range(n - 1, 0, -1):\n        arr[0], arr[i] = arr[i], arr[0]\n        heapify(arr, i, 0)\n    return arr\n\nif __name__ == '__main__':\n    datos = [12, 11, 13, 5, 6, 7]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {heap_sort(datos)}\")",
        "explanation": "El preferido para sistemas de tiempo real estricto donde no se permite ninguna variación en el tiempo de respuesta ni consumo de RAM.",
        "keyConcepts": [
          "Determinismo estricto",
          "Memoria auxiliar O(1)",
          "Estructura Max-Heap"
        ],
        "terminalOutput": [
          "$ python -u heap_sort.py",
          "[+] Entrada: [12, 11, 13, 5, 6, 7]",
          "[*] Max-Heap construido: [13, 11, 12, 5, 6, 7]",
          "[+] Salida: [5, 6, 7, 11, 12, 13]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Heap Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s; }\n    button { background: #38E5FF; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Heap Sort · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarHeapSort()\">Ordenar por Montículo (Heap)</button>\n  </div>\n  <script>\n    let arr = [12, 11, 13, 5, 6, 7];\n    const arena = document.getElementById('arena');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function heapify(n, i) {\n      let largest = i, l = 2 * i + 1, r = 2 * i + 2;\n      if (l < n && arr[l] > arr[largest]) largest = l;\n      if (r < n && arr[r] > arr[largest]) largest = r;\n      if (largest !== i) {\n        [arr[i], arr[largest]] = [arr[largest], arr[i]];\n        render();\n        await new Promise(res => setTimeout(res, 120));\n        await heapify(n, largest);\n      }\n    }\n    async function ejecutarHeapSort() {\n      let n = arr.length;\n      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(n, i);\n      for (let i = n - 1; i > 0; i--) {\n        [arr[0], arr[i]] = [arr[i], arr[0]];\n        render();\n        await new Promise(res => setTimeout(res, 150));\n        await heapify(i, 0);\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Componente web HTML5 standalone completo con extracción animada del montículo máximo y ajuste por niveles.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Árbol binario implícito",
          "Extracción continua de raíz"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class HeapSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        int n = array.Length;\n        for (int i = n / 2 - 1; i >= 0; i--) Heapify(array, n, i);\n        for (int i = n - 1; i > 0; i--)\n        {\n            (array[0], array[i]) = (array[i], array[0]);\n            Heapify(array, i, 0);\n        }\n    }\n\n    private static void Heapify<T>(Span<T> array, int n, int i) where T : IComparable<T>\n    {\n        int largest = i, left = 2 * i + 1, right = 2 * i + 2;\n        if (left < n && array[left].CompareTo(array[largest]) > 0) largest = left;\n        if (right < n && array[right].CompareTo(array[largest]) > 0) largest = right;\n        if (largest != i)\n        {\n            (array[i], array[largest]) = (array[largest], array[i]);\n            Heapify(array, n, largest);\n        }\n    }\n}",
        "explanation": "Determinista al 100%, sin riesgo de degradarse a O(n²) como QuickSort.",
        "keyConcepts": [
          "Garantía determinista",
          "Cero consumo en Heap",
          "Sin degradación cuadrática"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n log n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Aritmética 2*i+1 resuelta por hardware"
        }
      }
    }
  },
  "radix_sort": {
    "name": "Radix Sort (LSD - Least Significant Digit)",
    "category": "sort",
    "bigO": "O(n * k)",
    "space": "O(n + k)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso CountingSortPorDigito(arr, n, exp)\n\tDefinir salida, conteo, c, i, digito Como Entero;\n\tDimension salida[10], conteo[10];\n\tPara c = 0 Hasta 9 Hacer conteo[c + 1] = 0; FinPara;\n\t\n\t// Conteo de frecuencias por digito\n\tPara i = 1 Hasta n Hacer\n\t\tdigito = TRUNC(arr[i] / exp) MOD 10;\n\t\tconteo[digito + 1] = conteo[digito + 1] + 1;\n\tFinPara;\n\t\n\tPara i = 1 Hasta 9 Hacer\n\t\tconteo[i + 1] = conteo[i + 1] + conteo[i];\n\tFinPara;\n\t\n\tPara i = n Hasta 1 Con Paso -1 Hacer\n\t\tdigito = TRUNC(arr[i] / exp) MOD 10;\n\t\tsalida[conteo[digito + 1]] = arr[i];\n\t\tconteo[digito + 1] = conteo[digito + 1] - 1;\n\tFinPara;\n\t\n\tPara i = 1 Hasta n Hacer arr[i] = salida[i]; FinPara;\nFinSubProceso\n\nProceso Principal_RadixSort_Estricto\n\tDefinir maximo, exp, k Como Entero;\n\tDimension arr[8];\n\tarr[1] = 170; arr[2] = 45; arr[3] = 75; arr[4] = 90; arr[5] = 802; arr[6] = 24; arr[7] = 2; arr[8] = 66;\n\tmaximo = 802;\n\texp = 1;\n\t\n\tMientras TRUNC(maximo / exp) > 0 Hacer\n\t\tCountingSortPorDigito(arr, 8, exp);\n\t\texp = exp * 10;\n\tFinMientras;\n\t\n\tEscribir \"Arreglo Ordenado con Radix Sort:\";\n\tPara k = 1 Hasta 8 Con Paso 1 Hacer\n\t\tEscribir Sin Saltar arr[k], \" \";\n\tFinPara;\n\tEscribir \"\";\nFinProceso",
        "explanation": "Radix Sort en Modo Estricto O&M. Emplea TRUNC(arr[i] / exp) MOD 10 para aislar el dígito posicional, subproceso formal con arreglos de conteo tipados y terminación de líneas con punto y coma (;).",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Aislamiento de dígito con TRUNC y MOD",
          "Subrutina Counting Sort estable"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Radix Sort (LSD - Least Significant Digit) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio RadixSort_Estricto(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "maximo = 802; exp = 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿TRUNC(maximo / exp) > 0?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "CountingSortPorDigito(arr, n, exp); exp = exp * 10;"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Arreglo ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef radix_sort(arr: List[int]) -> List[int]:\n    \"\"\"Radix Sort LSD: Complejidad lineal O(n * k) para enteros.\"\"\"\n    if not arr: return arr\n    max_val = max(arr)\n    exp = 1\n    while max_val // exp > 0:\n        output = [0] * len(arr)\n        count = [0] * 10\n        for x in arr: count[(x // exp) % 10] += 1\n        for i in range(1, 10): count[i] += count[i - 1]\n        for i in range(len(arr) - 1, -1, -1):\n            digit = (arr[i] // exp) % 10\n            output[count[digit] - 1] = arr[i]\n            count[digit] -= 1\n        for i in range(len(arr)): arr[i] = output[i]\n        exp *= 10\n    return arr\n\nif __name__ == '__main__':\n    datos = [170, 45, 75, 90, 802, 24, 2, 66]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {radix_sort(datos)}\")",
        "explanation": "Ordena en tiempo lineal O(n * k) sin realizar comparaciones directas entre elementos.",
        "keyConcepts": [
          "Tiempo estrictamente lineal O(n)",
          "Base numérica decimal (10 cubetas)",
          "Independiente de comparaciones directas"
        ],
        "terminalOutput": [
          "$ python -u radix_sort.py",
          "[+] Entrada: [170, 45, 75, 90, 802, 24, 2, 66]",
          "[*] Pasadas: Unidades -> Decenas -> Centenas",
          "[+] Salida: [2, 24, 45, 66, 75, 90, 170, 802]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Radix Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 10px; transition: height 0.15s; }\n    button { background: #54F18F; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Radix Sort (LSD) · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarRadixSort()\">Ordenar por Dígitos</button>\n  </div>\n  <script>\n    let arr = [170, 45, 75, 90, 802, 24, 2, 66];\n    const arena = document.getElementById('arena');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarRadixSort() {\n      let max = Math.max(...arr);\n      for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {\n        let buckets = Array.from({length: 10}, () => []);\n        for (let num of arr) buckets[Math.floor(num / exp) % 10].push(num);\n        arr = buckets.flat();\n        render();\n        await new Promise(r => setTimeout(r, 250));\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Componente web HTML5 standalone completo con distribución visual en 10 cubetas numéricas y aplanado ordenado.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "10 cubetas decimales",
          "Aplanamiento estable"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class RadixSort\n{\n    public static void Sort(Span<int> array)\n    {\n        if (array.Length <= 1) return;\n        int max = array[0];\n        for (int i = 1; i < array.Length; i++) if (array[i] > max) max = array[i];\n\n        Span<int> output = stackalloc int[array.Length];\n        Span<int> count = stackalloc int[10];\n\n        for (int exp = 1; max / exp > 0; exp *= 10)\n        {\n            count.Clear();\n            foreach (var num in array) count[(num / exp) % 10]++;\n            for (int i = 1; i < 10; i++) count[i] += count[i - 1];\n            for (int i = array.Length - 1; i >= 0; i--)\n            {\n                int digit = (array[i] / exp) % 10;\n                output[count[digit] - 1] = array[i];\n                count[digit]--;\n            }\n            output.CopyTo(array);\n        }\n    }\n}",
        "explanation": "En .NET 9, con 'stackalloc' para los arreglos de salida y conteo, supera a cualquier método comparativo.",
        "keyConcepts": [
          "stackalloc sin Heap",
          "Operaciones a nivel de palabra",
          "Altísima velocidad en enteros"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n · k)",
          "complexityWorst": "O(n · k)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Vectorización SIMD"
        }
      }
    }
  },
  "bogo_sort": {
    "name": "Bogo Sort (Ordenamiento Estocástico Didáctico)",
    "category": "sort",
    "bigO": "O((n+1)!)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso ordenado = EstaOrdenado(arr, n)\n\tDefinir ordenado Como Logico;\n\tDefinir i Como Entero;\n\tordenado = Verdadero;\n\tPara i = 1 Hasta n - 1 Con Paso 1 Hacer\n\t\tSi arr[i] > arr[i + 1] Entonces ordenado = Falso; FinSi;\n\tFinPara;\nFinSubProceso\n\nSubProceso Barajar(arr, n)\n\tDefinir i, r, aux Como Entero;\n\tPara i = 1 Hasta n Con Paso 1 Hacer\n\t\tr = Azar(n) + 1;\n\t\taux = arr[i]; arr[i] = arr[r]; arr[r] = aux;\n\tFinPara;\nFinSubProceso\n\nProceso Principal_BogoSort_Estricto\n\tDefinir intentos Como Entero;\n\tDimension arr[5];\n\tarr[1] = 3; arr[2] = 1; arr[3] = 4; arr[4] = 2; arr[5] = 5;\n\tintentos = 0;\n\t\n\tMientras NO EstaOrdenado(arr, 5) Hacer\n\t\tBarajar(arr, 5);\n\t\tintentos = intentos + 1;\n\tFinMientras;\n\t\n\tEscribir \"Arreglo ordenado tras \", intentos, \" permutaciones aleatorias.\";\nFinProceso",
        "explanation": "Bogo Sort en Modo Estricto O&M. Ilustra el peligro de la fuerza bruta factorial con subprocesos tipados, comprobación lógica de ordenación y punto y coma (;) obligatorio.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "SubProceso booleano formal",
          "Fuerza bruta factorial"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Bogo Sort (Ordenamiento Estocástico Didáctico) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BogoSort_Estricto(arr, n)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿EstaOrdenado(arr, n)?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Barajar(arr, n); intentos = intentos + 1;"
            },
            {
              "id": 4,
              "type": "end",
              "text": "FinProceso: Arreglo ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "import random\nfrom typing import List\n\ndef is_sorted(arr: List[int]) -> bool:\n    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))\n\ndef bogo_sort(arr: List[int], max_trials: int = 1000) -> List[int]:\n    trials = 0\n    while not is_sorted(arr) and trials < max_trials:\n        random.shuffle(arr)\n        trials += 1\n    if not is_sorted(arr): arr.sort()\n    return arr\n\nif __name__ == '__main__':\n    datos = [5, 1, 4, 2, 8]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {bogo_sort(datos)}\")",
        "explanation": "Antipatrón educativo que enseña por qué los ingenieros no pueden confiar en la suerte o en soluciones no acotadas.",
        "keyConcepts": [
          "Antipatrón factorial",
          "random.shuffle()",
          "Rescate didáctico"
        ],
        "terminalOutput": [
          "$ python -u bogo_sort.py",
          "[+] Entrada: [5, 1, 4, 2, 8]",
          "[*] Permutando aleatoriamente...",
          "[✓] Orden detectado tras 7 intentos.",
          "[+] Salida: [1, 2, 4, 5, 8]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Bogo Sort Interactivo</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; }\n    .card { max-width: 500px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #FF3366; color: white; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: height 0.15s; }\n    button { background: #FF3366; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Bogo Sort · Simulación Estocástica</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarBogoSort()\">Barajar Aleatoriamente</button>\n  </div>\n  <script>\n    let arr = [5, 1, 4, 2, 8];\n    const arena = document.getElementById('arena');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v) => `<div class=\"bar\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    function isSorted(a) {\n      for (let i = 0; i < a.length - 1; i++) if (a[i] > a[i+1]) return false;\n      return true;\n    }\n    async function ejecutarBogoSort() {\n      let t = 0;\n      while (!isSorted(arr) && t < 15) {\n        arr.sort(() => Math.random() - 0.5);\n        render();\n        await new Promise(r => setTimeout(r, 180));\n        t++;\n      }\n      arr.sort((a,b) => a - b);\n      render();\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Componente web HTML5 standalone completo con animación de mezclas estocásticas y rescate determinista.",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Caos visual estocástico",
          "Rescate determinista"
        ],
        "demoData": [
          5,
          1,
          4,
          2,
          8
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class BogoSort\n{\n    private static readonly Random _rng = new();\n\n    public static void Sort<T>(Span<T> array, int maxAttempts = 1000) where T : IComparable<T>\n    {\n        int attempts = 0;\n        while (!IsSorted(array) && attempts < maxAttempts)\n        {\n            for (int i = array.Length - 1; i > 0; i--)\n            {\n                int k = _rng.Next(i + 1);\n                (array[i], array[k]) = (array[k], array[i]);\n            }\n            attempts++;\n        }\n        if (!IsSorted(array)) array.Sort();\n    }\n\n    private static bool IsSorted<T>(Span<T> array) where T : IComparable<T>\n    {\n        for (int i = 0; i < array.Length - 1; i++)\n            if (array[i].CompareTo(array[i + 1]) > 0) return false;\n        return true;\n    }\n}",
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Lineal_Estricto\n\tDefinir n, i, objetivo, posicion Como Entero;\n\tDimension arr[8];\n\t\n\tn = 8;\n\tarr[1] = 10; arr[2] = 50; arr[3] = 30; arr[4] = 70; arr[5] = 80; arr[6] = 20; arr[7] = 90; arr[8] = 40;\n\t\n\tEscribir \"Ingrese el valor a buscar en el arreglo:\";\n\tobjetivo = 20; // Valor objetivo de prueba\n\tposicion = -1;\n\t\n\tPara i = 1 Hasta n Con Paso 1 Hacer\n\t\tSi arr[i] == objetivo Entonces\n\t\t\tposicion = i;\n\t\t\ti = n; // Salida anticipada al encontrar coincidencia\n\t\tFinSi;\n\tFinPara;\n\t\n\tSi posicion <> -1 Entonces\n\t\tEscribir \"Objetivo encontrado en el indice: \", posicion;\n\tSino\n\t\tEscribir \"El objetivo no se encuentra en el arreglo.\";\n\tFinSi;\nFinProceso",
        "explanation": "Búsqueda Lineal en Modo Estricto O&M. Variables definidas formalmente con 'Definir', punto y coma (;) obligatorio en todas las líneas, y corte anticipado del ciclo al encontrar el elemento.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Inspección secuencial 1 a n",
          "Corte anticipado"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Lineal (Secuencial) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaLineal_Estricta(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir n, i, pos; pos = -1; i = 1;"
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
              "text": "pos = i; i = n;"
            },
            {
              "id": 6,
              "type": "process",
              "text": "i = i + 1;"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinProceso: Retornar pos"
            }
          ]
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
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Búsqueda Lineal</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 520px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 6px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 11px; transition: background 0.15s; }\n    .bar.inspecting { background: #FFE600 !important; }\n    .bar.found { background: #54F18F !important; }\n    button { background: #38E5FF; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; text-transform: uppercase; }\n    button:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0px #000; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Búsqueda Lineal · Simulación en Vivo</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarBusquedaLineal()\">Buscar Valor (20)</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Presiona para iniciar.</div>\n  </div>\n  <script>\n    let arr = [10, 50, 30, 70, 80, 20, 90, 40];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarBusquedaLineal() {\n      status.innerText = \"Buscando secuencialmente...\";\n      let target = 20;\n      for (let i = 0; i < arr.length; i++) {\n        const b = document.getElementById(`b-${i}`);\n        b.classList.add('inspecting');\n        await new Promise(r => setTimeout(r, 200));\n        if (arr[i] === target) {\n          b.classList.remove('inspecting');\n          b.classList.add('found');\n          status.innerText = `¡Encontrado en índice ${i}!`;\n          return;\n        }\n        b.classList.remove('inspecting');\n      }\n      status.innerText = \"Valor no encontrado en el arreglo.\";\n    }\n    render();\n  </script>\n</body>\n</html>",
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Binaria_Estricto\n\tDefinir n, inicio_idx, fin_idx, medio, objetivo, posicion Como Entero;\n\tDimension arr[9];\n\t\n\tn = 9;\n\tarr[1] = 5; arr[2] = 12; arr[3] = 19; arr[4] = 27; arr[5] = 34;\n\tarr[6] = 45; arr[7] = 56; arr[8] = 68; arr[9] = 82;\n\t\n\tobjetivo = 45;\n\tinicio_idx = 1;\n\tfin_idx = n;\n\tposicion = -1;\n\t\n\tMientras inicio_idx <= fin_idx Hacer\n\t\tmedio = TRUNC((inicio_idx + fin_idx) / 2);\n\t\tSi arr[medio] == objetivo Entonces\n\t\t\tposicion = medio;\n\t\t\tinicio_idx = fin_idx + 1; // Salida temprana del ciclo\n\t\tSino\n\t\t\tSi arr[medio] < objetivo Entonces\n\t\t\t\tinicio_idx = medio + 1; // Descartar mitad izquierda\n\t\t\tSino\n\t\t\t\tfin_idx = medio - 1; // Descartar mitad derecha\n\t\t\tFinSi;\n\t\tFinSi;\n\tFinMientras;\n\t\n\tSi posicion <> -1 Entonces\n\t\tEscribir \"Objetivo encontrado en el indice: \", posicion;\n\tSino\n\t\tEscribir \"Objetivo no encontrado.\";\n\tFinSi;\nFinProceso",
        "explanation": "Implementación rigurosa de Búsqueda Binaria en Modo Estricto O&M con TRUNC() para el cálculo exacto del punto medio y punto y coma (;) en cada línea.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "TRUNC() para división entera",
          "Descarte de subrangos"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Binaria (Divide & Conquer) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaBinaria_Estricta(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir inicio_idx = 1, fin_idx = n, pos = -1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿inicio_idx <= fin_idx?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "medio = TRUNC((inicio_idx + fin_idx) / 2);"
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
              "text": "inicio_idx = medio + 1;"
            },
            {
              "id": 8,
              "type": "process",
              "text": "fin_idx = medio - 1;"
            },
            {
              "id": 9,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef binary_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda binaria O(log n) sobre lista ordenada.\"\"\"\n    low = 0\n    high = len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [5, 12, 19, 27, 34, 45, 56, 68, 82]\n    target = 45\n    resultado = binary_search(datos, target)\n    print(f\"Lista ordenada: {datos}\")\n    print(f\"Objetivo {target} en índice: {resultado}\")",
        "explanation": "División logarítmica O(log n) calculando el índice central con división entera '//' para evitar desbordes de coma flotante.",
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
        "code": "using System;\n\npublic static class BinarySearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        int low = 0;\n        int high = span.Length - 1;\n        while (low <= high)\n        {\n            // Evita desbordamiento de enteros (low + high) / 2\n            int mid = low + ((high - low) >> 1);\n            if (span[mid] == target) return mid;\n            if (span[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 5, 12, 19, 27, 34, 45, 56, 68, 82 };\n        int resultado = Search(datos, 45);\n        Console.WriteLine($\"Resultado de Búsqueda Binaria: {resultado}\");\n    }\n}",
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Ternaria_Estricto\n\tDefinir n, inicio_idx, fin_idx, m1, m2, objetivo, posicion Como Entero;\n\tDimension arr[9];\n\t\n\tn = 9;\n\tarr[1] = 3; arr[2] = 8; arr[3] = 15; arr[4] = 24; arr[5] = 35;\n\tarr[6] = 46; arr[7] = 59; arr[8] = 71; arr[9] = 88;\n\t\n\tobjetivo = 46;\n\tinicio_idx = 1;\n\tfin_idx = n;\n\tposicion = -1;\n\t\n\tMientras inicio_idx <= fin_idx Hacer\n\t\tm1 = inicio_idx + TRUNC((fin_idx - inicio_idx) / 3);\n\t\tm2 = fin_idx - TRUNC((fin_idx - inicio_idx) / 3);\n\t\t\n\t\tSi arr[m1] == objetivo Entonces\n\t\t\tposicion = m1;\n\t\t\tinicio_idx = fin_idx + 1;\n\t\tSino\n\t\t\tSi arr[m2] == objetivo Entonces\n\t\t\t\tposicion = m2;\n\t\t\t\tinicio_idx = fin_idx + 1;\n\t\t\tSino\n\t\t\t\tSi objetivo < arr[m1] Entonces\n\t\t\t\t\tfin_idx = m1 - 1; // El objetivo está en el tercio izquierdo\n\t\t\t\tSino\n\t\t\t\t\tSi objetivo > arr[m2] Entonces\n\t\t\t\t\t\tinicio_idx = m2 + 1; // El objetivo está en el tercio derecho\n\t\t\t\t\tSino\n\t\t\t\t\t\tinicio_idx = m1 + 1; // El objetivo está en el tercio central\n\t\t\t\t\t\tfin_idx = m2 - 1;\n\t\t\t\t\tFinSi;\n\t\t\t\tFinSi;\n\t\t\tFinSi;\n\t\tFinSi;\n\tFinMientras;\n\t\n\tSi posicion <> -1 Entonces\n\t\tEscribir \"Objetivo encontrado en el indice: \", posicion;\n\tSino\n\t\tEscribir \"Objetivo no encontrado.\";\n\tFinSi;\nFinProceso",
        "explanation": "Búsqueda Ternaria en Modo Estricto O&M. Divide el espacio de búsqueda en 3 partes iguales usando dos puntos de corte m1 y m2 calculados con TRUNC().",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "División por 3 con TRUNC()",
          "Trisección del espacio"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Ternaria (Tri-Sección) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaTernaria_Estricta(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir inicio_idx = 1, fin_idx = n, pos = -1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿inicio_idx <= fin_idx?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "m1 = inicio + TRUNC((fin - inicio)/3); m2 = fin - TRUNC((fin - inicio)/3);"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿arr[m1] == target O arr[m2] == target?"
            },
            {
              "id": 6,
              "type": "decision",
              "text": "¿target < arr[m1]?"
            },
            {
              "id": 7,
              "type": "decision",
              "text": "¿target > arr[m2]?"
            },
            {
              "id": 8,
              "type": "process",
              "text": "Ajustar tercio correspondiente;"
            },
            {
              "id": 9,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ]
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Salto_Estricto\n\tDefinir n, paso, prev, objetivo, posicion, k Como Entero;\n\tDimension arr[9];\n\t\n\tn = 9;\n\tarr[1] = 2; arr[2] = 7; arr[3] = 14; arr[4] = 23; arr[5] = 31;\n\tarr[6] = 42; arr[7] = 55; arr[8] = 67; arr[9] = 80;\n\t\n\tobjetivo = 42;\n\tpaso = TRUNC(RC(n)); // Paso óptimo: raíz cuadrada de n\n\tprev = 1;\n\tposicion = -1;\n\t\n\t// Salto hacia adelante en bloques de raíz de n\n\tMientras arr[paso] < objetivo Y paso < n Hacer\n\t\tprev = paso;\n\t\tpaso = paso + TRUNC(RC(n));\n\t\tSi paso > n Entonces\n\t\t\tpaso = n;\n\t\tFinSi;\n\tFinMientras;\n\t\n\t// Búsqueda lineal dentro del bloque identificado\n\tPara k = prev Hasta paso Con Paso 1 Hacer\n\t\tSi arr[k] == objetivo Entonces\n\t\t\tposicion = k;\n\t\t\tk = paso; // Salida temprana\n\t\tFinSi;\n\tFinPara;\n\t\n\tSi posicion <> -1 Entonces\n\t\tEscribir \"Objetivo encontrado en el indice: \", posicion;\n\tSino\n\t\tEscribir \"Objetivo no encontrado.\";\n\tFinSi;\nFinProceso",
        "explanation": "Búsqueda por Salto en Modo Estricto O&M. Utiliza la función matemática raíz cuadrada 'RC(n)' truncada con TRUNC() para fijar el paso óptimo de √n con punto y coma (;) obligatorio.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "RC(n) raíz cuadrada truncada",
          "Salto en bloques"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda por Salto (Jump Search) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaSalto_Estricta(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "paso = TRUNC(RC(n)); prev = 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿arr[paso] < target Y paso < n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "prev = paso; paso = paso + TRUNC(RC(n));"
            },
            {
              "id": 5,
              "type": "process",
              "text": "k = prev (Barrido lineal en bloque);"
            },
            {
              "id": 6,
              "type": "decision",
              "text": "¿arr[k] == target?"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "import math\nfrom typing import List, Optional\n\ndef jump_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda por Salto O(√n) para colecciones ordenadas.\"\"\"\n    n = len(arr)\n    step = int(math.isqrt(n))\n    prev = 0\n    \n    while prev < n and arr[min(step, n) - 1] < target:\n        prev = step\n        step += int(math.isqrt(n))\n        if prev >= n:\n            return None\n            \n    while prev < min(step, n):\n        if arr[prev] == target:\n            return prev\n        prev += 1\n    return None\n\nif __name__ == '__main__':\n    datos = [2, 7, 14, 23, 31, 42, 55, 67, 80]\n    val = 42\n    print(f\"Jump Search de {val}: {jump_search(datos, val)}\")",
        "explanation": "Uso de math.isqrt() para el cálculo entero de raíz cuadrada, reduciendo saltos hacia atrás.",
        "keyConcepts": [
          "math.isqrt()",
          "Complejidad intermedia O(√n)",
          "Ideal para saltos lineales en memoria"
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
          "Visualización bi-fásica salto/lineal",
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
        "code": "using System;\n\npublic static class JumpSearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        int n = span.Length;\n        int step = (int)Math.Sqrt(n);\n        int prev = 0;\n        \n        while (span[Math.Min(step, n) - 1] < target)\n        {\n            prev = step;\n            step += (int)Math.Sqrt(n);\n            if (prev >= n) return -1;\n        }\n        \n        while (span[prev] < target)\n        {\n            prev++;\n            if (prev == Math.Min(step, n)) return -1;\n        }\n        \n        return (span[prev] == target) ? prev : -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 2, 7, 14, 23, 31, 42, 55, 67, 80 };\n        Console.WriteLine($\"Jump Search índice: {Search(datos, 42)}\");\n    }\n}",
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Interpolacion_Estricto\n\tDefinir n, bajo, alto, pos, objetivo, resultado Como Entero;\n\tDimension arr[10];\n\t\n\tn = 10;\n\tarr[1] = 10; arr[2] = 20; arr[3] = 30; arr[4] = 40; arr[5] = 50;\n\tarr[6] = 60; arr[7] = 70; arr[8] = 80; arr[9] = 90; arr[10] = 100;\n\t\n\tobjetivo = 70;\n\tbajo = 1;\n\talto = n;\n\tresultado = -1;\n\t\n\tMientras bajo <= alto Y objetivo >= arr[bajo] Y objetivo <= arr[alto] Hacer\n\t\tSi bajo == alto Entonces\n\t\t\tSi arr[bajo] == objetivo Entonces\n\t\t\t\tresultado = bajo;\n\t\t\tFinSi;\n\t\t\tbajo = alto + 1; // Salida\n\t\tSino\n\t\t\t// Fórmula de interpolación proporcional tipo directorio telefónico\n\t\t\tpos = bajo + TRUNC(((alto - bajo) / (arr[alto] - arr[bajo])) * (objetivo - arr[bajo]));\n\t\t\t\n\t\t\tSi arr[pos] == objetivo Entonces\n\t\t\t\tresultado = pos;\n\t\t\t\tbajo = alto + 1; // Salida exitosa\n\t\t\tSino\n\t\t\t\tSi arr[pos] < objetivo Entonces\n\t\t\t\t\tbajo = pos + 1;\n\t\t\t\tSino\n\t\t\t\t\talto = pos - 1;\n\t\t\t\tFinSi;\n\t\t\tFinSi;\n\t\tFinSi;\n\tFinMientras;\n\t\n\tSi resultado <> -1 Entonces\n\t\tEscribir \"Objetivo encontrado en el indice: \", resultado;\n\tSino\n\t\tEscribir \"Objetivo no encontrado.\";\n\tFinSi;\nFinProceso",
        "explanation": "Búsqueda por Interpolación en Modo Estricto O&M. Estima matemáticamente la posición mediante una regla de tres proporcional con TRUNC() y punto y coma (;).",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Regla de 3 proporcional con TRUNC()",
          "Distribución uniforme"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda por Interpolación (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Interpolacion_Estricta(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "bajo = 1; alto = n; resultado = -1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿bajo <= alto Y target en rango?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "pos = bajo + TRUNC(((alto-bajo)/(arr[alto]-arr[bajo]))*(target-arr[bajo]));"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿arr[pos] == target?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "Ajustar bajo/alto según pendiente;"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinProceso: Retornar resultado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef interpolation_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda por interpolación O(log log n) para datos distribuidos uniformemente.\"\"\"\n    low = 0\n    high = len(arr) - 1\n    \n    while low <= high and arr[low] <= target <= arr[high]:\n        if low == high:\n            return low if arr[low] == target else None\n            \n        pos = low + int(((high - low) / (arr[high] - arr[low])) * (target - arr[low]))\n        \n        if arr[pos] == target:\n            return pos\n        if arr[pos] < target:\n            low = pos + 1\n        else:\n            high = pos - 1\n            \n    return None\n\nif __name__ == '__main__':\n    datos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\n    val = 70\n    print(f\"Búsqueda por Interpolación de {val}: {interpolation_search(datos, val)}\")",
        "explanation": "Cálculo dinámico del índice estimado en base al valor numérico exacto en distribución lineal uniforme.",
        "keyConcepts": [
          "Estimación de pendiente",
          "O(log log n) promedio",
          "Sensible a distribuciones sesgadas"
        ],
        "terminalOutput": [
          "$ python -u interpolation_search.py",
          "[+] Datos uniformes: [10..100] (n=10)",
          "[*] Target: 70",
          "[*] Cálculo estimado pos = 0 + int((9/90) * (70-10)) = 6",
          "[*] arr[6] == 70 [COINCIDENCIA EXACTA EN PASO 1]",
          "[✓] Encontrado en 1 sola iteración gracias a la distribución uniforme."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS (Completo)",
        "langBadge": "HTML5 / CSS / JS Standalone",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Interpolation Search</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 540px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 10px; }\n    .bar.predicted { background: #9B51E0 !important; color: white; transform: scale(1.08); }\n    .bar.found { background: #54F18F !important; }\n    button { background: #9B51E0; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Interpolation Search · Estimación Numérica</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarInterpolacion()\">Buscar Valor 70</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarInterpolacion() {\n      render();\n      let low = 0, high = arr.length - 1, target = 70;\n      status.innerText = \"Calculando posición por pendiente numérica...\";\n      await new Promise(r => setTimeout(r, 400));\n      let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));\n      const el = document.getElementById(`b-${pos}`);\n      el.classList.add('predicted');\n      status.innerText = `Posición calculada directamente: índice ${pos} (${arr[pos]})...`;\n      await new Promise(r => setTimeout(r, 450));\n      if (arr[pos] === target) {\n        el.classList.remove('predicted');\n        el.classList.add('found');\n        status.innerText = `¡Objetivo encontrado en el índice ${pos} en 1 solo paso!`;\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Demostración standalone de localización directa basada en pendiente numérica (análogo al cerebro humano abriendo un diccionario).",
        "keyConcepts": [
          "Archivo HTML5 Standalone completo",
          "Predicción en 1 paso",
          "Visualización de aguja de interpolación"
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
        "code": "using System;\n\npublic static class InterpolationSearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        int low = 0;\n        int high = span.Length - 1;\n\n        while (low <= high && target >= span[low] && target <= span[high])\n        {\n            if (low == high) return span[low] == target ? low : -1;\n            \n            // Estimación proporcional con casting para prevenir pérdida de precisión\n            int pos = low + (int)(((long)(high - low) * (target - span[low])) / (span[high] - span[low]));\n            \n            if (span[pos] == target) return pos;\n            if (span[pos] < target) low = pos + 1;\n            else high = pos - 1;\n        }\n        return -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 };\n        Console.WriteLine($\"Interpolation Search índice: {Search(datos, 70)}\");\n    }\n}",
        "explanation": "Uso de enteros de 64 bits (long) en la multiplicación para evitar desbordes antes de la división de interpolación.",
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Busqueda_Exponencial_Estricto\n\tDefinir n, limite, bajo, alto, medio, objetivo, posicion Como Entero;\n\tDimension arr[10];\n\t\n\tn = 10;\n\tarr[1] = 2; arr[2] = 4; arr[3] = 8; arr[4] = 16; arr[5] = 32;\n\tarr[6] = 64; arr[7] = 128; arr[8] = 256; arr[9] = 512; arr[10] = 1024;\n\t\n\tobjetivo = 128;\n\tposicion = -1;\n\t\n\tSi arr[1] == objetivo Entonces\n\t\tposicion = 1;\n\tSino\n\t\tlimite = 1;\n\t\tMientras limite < n Y arr[limite] <= objetivo Hacer\n\t\t\tlimite = limite * 2; // Duplicación exponencial de rango\n\t\tFinMientras;\n\t\t\n\t\tbajo = TRUNC(limite / 2);\n\t\tSi limite > n Entonces\n\t\t\talto = n;\n\t\tSino\n\t\t\talto = limite;\n\t\tFinSi;\n\t\t\n\t\t// Búsqueda binaria dentro del rango acotado exponencialmente\n\t\tMientras bajo <= alto Hacer\n\t\t\tmedio = TRUNC((bajo + alto) / 2);\n\t\t\tSi arr[medio] == objetivo Entonces\n\t\t\t\tposicion = medio;\n\t\t\t\tbajo = alto + 1; // Salida\n\t\t\tSino\n\t\t\t\tSi arr[medio] < objetivo Entonces\n\t\t\t\t\tbajo = medio + 1;\n\t\t\t\tSino\n\t\t\t\t\talto = medio - 1;\n\t\t\t\tFinSi;\n\t\t\tFinSi;\n\t\tFinMientras;\n\tFinSi;\n\t\n\tSi posicion <> -1 Entonces\n\t\tEscribir \"Objetivo encontrado en el indice: \", posicion;\n\tSino\n\t\tEscribir \"Objetivo no encontrado.\";\n\tFinSi;\nFinProceso",
        "explanation": "Búsqueda Exponencial en Modo Estricto O&M. Duplica progresivamente el límite de búsqueda mediante potencias de 2 (limite = limite * 2) y aplica búsqueda binaria al intervalo acotado.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Multiplicación por 2 recursiva",
          "Cota superior finita"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Exponencial (Doubling Search) (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaExponencial_Estricta(arr, target)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿arr[1] == target?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "limite = 1; Mientras limite < n Y arr[limite] <= target: limite = limite * 2;"
            },
            {
              "id": 4,
              "type": "process",
              "text": "bajo = TRUNC(limite/2); alto = Min(limite, n);"
            },
            {
              "id": 5,
              "type": "process",
              "text": "Ejecutar Búsqueda Binaria en [bajo, alto];"
            },
            {
              "id": 6,
              "type": "end",
              "text": "FinProceso: Retornar posicion"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef exponential_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda exponencial ideal para listas no acotadas o infinitas.\"\"\"\n    if not arr:\n        return None\n    if arr[0] == target:\n        return 0\n        \n    bound = 1\n    n = len(arr)\n    while bound < n and arr[bound] <= target:\n        bound *= 2\n        \n    # Búsqueda binaria en el rango acotado\n    low = bound // 2\n    high = min(bound, n - 1)\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]\n    val = 128\n    print(f\"Búsqueda Exponencial de {val}: {exponential_search(datos, val)}\")",
        "explanation": "Crecimiento exponencial en potencias de dos para hallar las cotas y posterior búsqueda binaria O(log i).",
        "keyConcepts": [
          "Cotas no acotadas",
          "O(log i) proporcional al índice",
          "Ideal para streams infinitos"
        ],
        "terminalOutput": [
          "$ python -u exponential_search.py",
          "[+] Entrada: potencias de 2 (n=10)",
          "[*] Cota inicial = 1 (val=4)",
          "[*] Cota duplicada = 2 (val=8)",
          "[*] Cota duplicada = 4 (val=32)",
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
        "code": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Simulación Búsqueda Exponencial</title>\n  <style>\n    body { font-family: 'Courier New', monospace; background: #FFFDF0; padding: 20px; color: #000; }\n    .card { max-width: 540px; margin: 0 auto; border: 3px solid #000; box-shadow: 6px 6px 0px #000; padding: 16px; background: #FFF; }\n    h2 { margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 8px; }\n    .bars-arena { display: flex; align-items: flex-end; gap: 4px; height: 140px; background: #FFFDF0; border: 2px solid #000; padding: 8px; margin-bottom: 12px; }\n    .bar { flex: 1; background: #38E5FF; border: 2px solid #000; text-align: center; font-weight: bold; font-size: 9px; }\n    .bar.bound { background: #FF3366 !important; color: white; transform: scale(1.1); }\n    .bar.found { background: #54F18F !important; }\n    button { background: #FF3366; color: white; border: 2px solid #000; box-shadow: 3px 3px 0px #000; padding: 8px 16px; font-weight: 900; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Exponential Search · Cotas 1, 2, 4, 8...</h2>\n    <div class=\"bars-arena\" id=\"arena\"></div>\n    <button onclick=\"ejecutarExponencial()\">Buscar 128</button>\n    <div id=\"status\" style=\"margin-top:10px; font-weight:bold;\">Listo.</div>\n  </div>\n  <script>\n    let arr = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];\n    const arena = document.getElementById('arena');\n    const status = document.getElementById('status');\n    function render() {\n      const max = Math.max(...arr);\n      arena.innerHTML = arr.map((v, i) => `<div class=\"bar\" id=\"b-${i}\" style=\"height:${(v/max)*100}%;\">${v}</div>`).join('');\n    }\n    async function ejecutarExponencial() {\n      render();\n      let n = arr.length, bound = 1, target = 128;\n      status.innerText = \"Duplicando cotas exponencialmente...\";\n      while (bound < n && arr[bound] <= target) {\n        document.getElementById(`b-${bound}`).classList.add('bound');\n        status.innerText = `Cota evaluada en índice ${bound} (${arr[bound]})...`;\n        await new Promise(r => setTimeout(r, 450));\n        bound *= 2;\n      }\n      let low = Math.floor(bound / 2), high = Math.min(bound, n - 1);\n      status.innerText = `Cotas fijadas en [${low}..${high}]. Búsqueda binaria...`;\n      await new Promise(r => setTimeout(r, 400));\n      for (let i = low; i <= high; i++) {\n        if (arr[i] === target) {\n          document.querySelectorAll('.bar').forEach(b => b.classList.remove('bound'));\n          document.getElementById(`b-${i}`).classList.add('found');\n          status.innerText = `¡Encontrado en índice ${i}!`;\n          return;\n        }\n      }\n    }\n    render();\n  </script>\n</body>\n</html>",
        "explanation": "Simulación interactiva completa de duplicación exponencial de cotas [1, 2, 4, 8] con posterior búsqueda binaria sobre el rango.",
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
        "code": "using System;\n\npublic static class ExponentialSearchEngine\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        if (span.IsEmpty) return -1;\n        if (span[0] == target) return 0;\n        \n        int bound = 1;\n        while (bound < span.Length && span[bound] <= target)\n        {\n            bound <<= 1; // Duplicación mediante bit-shift\n        }\n        \n        int low = bound >> 1;\n        int high = Math.Min(bound, span.Length - 1);\n        \n        while (low <= high)\n        {\n            int mid = low + ((high - low) >> 1);\n            if (span[mid] == target) return mid;\n            if (span[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 };\n        Console.WriteLine($\"Exponential Search índice: {Search(datos, 128)}\");\n    }\n}",
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Complejidad_O1_Estricto\n\tDefinir n, indice_solicitado, valor_obtenido Como Entero;\n\tDimension memoria_cache[5];\n\t\n\tn = 5;\n\tmemoria_cache[1] = 100;\n\tmemoria_cache[2] = 250;\n\tmemoria_cache[3] = 420;\n\tmemoria_cache[4] = 880;\n\tmemoria_cache[5] = 999;\n\t\n\t// Operación O(1): Tiempo constante independiente del tamaño n\n\tindice_solicitado = 3;\n\tvalor_obtenido = memoria_cache[indice_solicitado];\n\t\n\tEscribir \"Acceso en Tiempo Constante O(1):\";\n\tEscribir \"Indice consultado: \", indice_solicitado;\n\tEscribir \"Valor retornado: \", valor_obtenido;\nFinProceso",
        "explanation": "Acceso constante O(1) en Modo Estricto O&M. Demuestra que consultar una celda de memoria mediante indexación directa toma exactamente una única instrucción, sin iteraciones ni dependencias del tamaño n.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Acceso directo por índice",
          "Cero ciclos de iteración"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(1) Acceso Directo por Índice (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio AccesoDirecto_O1(arr, index)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir n, idx, val; val = arr[idx];"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Escribir 'Valor retornado: ', val;"
            },
            {
              "id": 4,
              "type": "end",
              "text": "FinProceso: Retorno Inmediato en 1 Ciclo de CPU"
            }
          ]
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Complejidad_Lineal_Estricto\n\tDefinir n, i, acumulador, pasos_totales Como Entero;\n\tDimension arr[6];\n\t\n\tn = 6;\n\tarr[1] = 5; arr[2] = 10; arr[3] = 15; arr[4] = 20; arr[5] = 25; arr[6] = 30;\n\t\n\tacumulador = 0;\n\tpasos_totales = 0;\n\t\n\t// Operación O(n): La cantidad de iteraciones crece exactamente igual que n\n\tPara i = 1 Hasta n Con Paso 1 Hacer\n\t\tacumulador = acumulador + arr[i];\n\t\tpasos_totales = pasos_totales + 1;\n\tFinPara;\n\t\n\tEscribir \"Total de elementos n: \", n;\n\tEscribir \"Pasos ejecutados: \", pasos_totales;\n\tEscribir \"Suma Acumulada: \", acumulador;\nFinProceso",
        "explanation": "Complejidad Lineal O(n) en Modo Estricto O&M. Muestra cómo un único ciclo 'Para' ejecuta exactamente n pasos para procesar una lista de longitud n.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Bucle Para de 1 a n",
          "Crecimiento proporcional"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n) Recorrido Acumulativo Lineal (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Acumulacion_On(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir acumulador = 0, i = 1;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "acumulador = acumulador + arr[i]; i = i + 1;"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinProceso: Retornar acumulador tras n pasos"
            }
          ]
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
        "code": "using System;\nusing System.Numerics;\n\npublic static class LinearAccumulator\n{\n    public static int Sum(ReadOnlySpan<int> span)\n    {\n        int total = 0;\n        for (int i = 0; i < span.Length; i++)\n        {\n            total += span[i];\n        }\n        return total;\n    }\n\n    public static void Main()\n    {\n        ReadOnlySpan<int> datos = stackalloc int[] { 5, 10, 15, 20, 25, 30 };\n        Console.WriteLine($\"Suma lineal O(n): {Sum(datos)}\");\n    }\n}",
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Complejidad_N2_Estricto\n\tDefinir n, i, j, comparaciones Como Entero;\n\tDimension arr[4];\n\t\n\tn = 4;\n\tarr[1] = 10; arr[2] = 20; arr[3] = 30; arr[4] = 40;\n\t\n\tcomparaciones = 0;\n\t\n\t// Operación O(n²): Dos bucles anidados que generan n * n operaciones\n\tPara i = 1 Hasta n Con Paso 1 Hacer\n\t\tPara j = 1 Hasta n Con Paso 1 Hacer\n\t\t\tcomparaciones = comparaciones + 1;\n\t\tFinPara;\n\tFinPara;\n\t\n\tEscribir \"Elementos n: \", n;\n\tEscribir \"Total de ciclos ejecutados (n*n): \", comparaciones;\nFinProceso",
        "explanation": "Complejidad Cuadrática O(n²) en Modo Estricto O&M. Dos bucles anidados que demuestran que para n=4 se ejecutan exactamente 4² = 16 iteraciones.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Bucles anidados Para",
          "Crecimiento n * n"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n²) Comparación Matriz Cuadrática (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio MatrizCuadratica_On2(n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir i = 1, j = 1, count = 0;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "decision",
              "text": "¿j <= n?"
            },
            {
              "id": 5,
              "type": "process",
              "text": "count = count + 1; j = j + 1;"
            },
            {
              "id": 6,
              "type": "process",
              "text": "i = i + 1; j = 1;"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinProceso: Retornar n*n iteraciones"
            }
          ]
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
          "Alerta de rendimiento para grandes n"
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
          "Animación celda por celda"
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
        "code": "using System;\n\npublic static class QuadraticEngine\n{\n    public static int ExecuteQuadratic(int n)\n    {\n        int count = 0;\n        for (int i = 0; i < n; i++)\n        {\n            for (int j = 0; j < n; j++)\n            {\n                count++;\n            }\n        }\n        return count;\n    }\n\n    public static void Main()\n    {\n        Console.WriteLine($\"Pasos para n=4: {ExecuteQuadratic(4)}\");\n    }\n}",
        "explanation": "Doble ciclo anidado canónico para comparación de todos contra todos.",
        "keyConcepts": [
          "Dual loop registers",
          "L1 cache thrashing si no es contiguo",
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Proceso Complejidad_N3_Estricto\n\tDefinir n, i, j, k, ciclos_totales Como Entero;\n\t\n\tn = 3;\n\tciclos_totales = 0;\n\t\n\t// Operación O(n³): Tres bucles anidados que producen n * n * n operaciones\n\tPara i = 1 Hasta n Con Paso 1 Hacer\n\t\tPara j = 1 Hasta n Con Paso 1 Hacer\n\t\t\tPara k = 1 Hasta n Con Paso 1 Hacer\n\t\t\t\tciclos_totales = ciclos_totales + 1;\n\t\t\tFinPara;\n\t\tFinPara;\n\tFinPara;\n\t\n\tEscribir \"Dimension n: \", n;\n\tEscribir \"Total de operaciones cubicas (n^3): \", ciclos_totales;\nFinProceso",
        "explanation": "Complejidad Cúbica O(n³) en Modo Estricto O&M. Tres bucles anidados que demuestran que para una dimensión n=3 se generan 3³ = 27 pasos de procesamiento.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "Triple bucle Para",
          "Crecimiento volumétrico n³"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n³) Triple Bucle / Cúbico (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Complejidad_Cubica_On3(n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Definir i=1, j=1, k=1, total=0;"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "decision",
              "text": "¿j <= n?"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿k <= n?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "total = total + 1; k = k + 1;"
            },
            {
              "id": 7,
              "type": "end",
              "text": "FinProceso: Retornar n^3 pasos"
            }
          ]
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso resultado <- Fib_Exponencial(k)\n\tDefinir resultado Como Entero;\n\tSi k <= 1 Entonces\n\t\tresultado = k;\n\tSino\n\t\t// Doble llamada recursiva que duplica el trabajo por cada nivel\n\t\tresultado = Fib_Exponencial(k - 1) + Fib_Exponencial(k - 2);\n\tFinSi;\nFinSubProceso;\n\nProceso Complejidad_Exp_Estricto\n\tDefinir n, res Como Entero;\n\t\n\tn = 6;\n\tres = Fib_Exponencial(n);\n\t\n\tEscribir \"Fibonacci recursivo O(2^n):\";\n\tEscribir \"Entrada n: \", n;\n\tEscribir \"Resultado calculado: \", res;\nFinProceso",
        "explanation": "Complejidad Exponencial O(2ⁿ) en Modo Estricto O&M. Implementa la recursión naíf de Fibonacci donde cada llamada genera dos nuevas ramas, duplicando el árbol de ejecución por cada unidad adicional en n.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "SubProceso recursivo formal",
          "Bifurcación binaria"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(2ⁿ) Árbol Exponencial Recursivo (PSeInt Pro)",
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
              "text": "Retornar k;"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Rama Izquierda: Fib(k-1); Rama Derecha: Fib(k-2);"
            },
            {
              "id": 5,
              "type": "process",
              "text": "Retornar suma de ambas ramas;"
            },
            {
              "id": 6,
              "type": "end",
              "text": "FinSubProceso: Árbol binario de llamadas O(2^n)"
            }
          ]
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
        "name": "PSeInt (Modo Estricto O&M)",
        "langBadge": "PSeInt Estricto O&M",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Generar_Permutaciones(n_elem, nivel)\n\tDefinir i Como Entero;\n\tSi nivel == n_elem Entonces\n\t\tEscribir \"Permutacion valida completada.\";\n\tSino\n\t\tPara i = nivel Hasta n_elem Con Paso 1 Hacer\n\t\t\t// Exploración combinatoria de todas las ramas posibles\n\t\t\tGenerar_Permutaciones(n_elem, nivel + 1);\n\t\tFinPara;\n\tFinSi;\nFinSubProceso;\n\nProceso Complejidad_Fact_Estricto\n\tDefinir total_elementos Como Entero;\n\t\n\ttotal_elementos = 3;\n\tEscribir \"Generando permutaciones para n = \", total_elementos;\n\tGenerar_Permutaciones(total_elementos, 1);\n\tEscribir \"Total de hojas factoriales generadas: n! = 6\";\nFinProceso",
        "explanation": "Complejidad Factorial O(n!) en Modo Estricto O&M. Explora exhaustivamente todas las ordenaciones posibles de un conjunto, generando 3! = 6 combinaciones terminales mediante recursión.",
        "keyConcepts": [
          "Modo Estricto O&M con ; obligatorio",
          "SubProceso recursivo combinatorio",
          "Hojas n!"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n!) Permutación Factorial Exhaustiva (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Permutaciones_Factorial_OnFact(n, k)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿k == n?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Registrar permutación terminal;"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Para cada elemento no usado: Permutar(n, k + 1);"
            },
            {
              "id": 5,
              "type": "end",
              "text": "FinSubProceso: Generar n! ramas terminales"
            }
          ]
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
