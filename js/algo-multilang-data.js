/* =========================================================================
   ALGO-MATRIX 3D: CATÁLOGO MULTI-LENGUAJE DE ALGORITMOS (JPV PRO)
   Soporte exhaustivo para PSeInt, Python 3, HTML/CSS/JS y C# .NET 9
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo OrdenamientoBurbuja\n    Dimension arr[7]\n    n <- 7\n    arr[1] <- 64; arr[2] <- 34; arr[3] <- 25; arr[4] <- 12; arr[5] <- 22; arr[6] <- 11; arr[7] <- 90\n\n    Para i <- 1 Hasta n - 1 Con Paso 1 Hacer\n        intercambiado <- Falso\n        Para j <- 1 Hasta n - i Con Paso 1 Hacer\n            Si arr[j] > arr[j + 1] Entonces\n                aux <- arr[j]\n                arr[j] <- arr[j + 1]\n                arr[j + 1] <- aux\n                intercambiado <- Verdadero\n            FinSi\n        FinPara\n        Si NO intercambiado Entonces\n            i <- n // Salida anticipada: arreglo ya ordenado\n        FinSi\n    FinPara\n\n    Escribir \"Arreglo Ordenado:\"\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], \" \"\n    FinPara\n    Escribir \"\"\nFinAlgoritmo",
        "explanation": "El ordenamiento burbuja en PSeInt compara parejas contiguas mediante dos bucles 'Para' anidados. El bucle interno desplaza el elemento mayor hacia la derecha como una burbuja ascendente. La bandera 'intercambiado' detecta si en una pasada no ocurrieron cambios, finalizando inmediatamente en tiempo O(n).",
        "keyConcepts": [
          "Bucles anidados Para",
          "Variable auxiliar aux",
          "Bandera de parada temprana"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Bubble Sort (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BubbleSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "i <- 1, intercambiado <- Falso"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n - 1?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "j <- 1"
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
              "text": "aux <- arr[j]; arr[j] <- arr[j+1]; arr[j+1] <- aux; intercambiado <- Verdadero"
            },
            {
              "id": 8,
              "type": "process",
              "text": "j <- j + 1"
            },
            {
              "id": 9,
              "type": "decision",
              "text": "¿NO intercambiado?"
            },
            {
              "id": 10,
              "type": "process",
              "text": "i <- i + 1"
            },
            {
              "id": 11,
              "type": "end",
              "text": "Fin: Retornar arr ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef bubble_sort(arr: List[int]) -> List[int]:\n    \"\"\"Ordenamiento Burbuja con intercambio idiomático de tuplas.\"\"\"\n    n = len(arr)\n    for i in range(n - 1):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr\n\nif __name__ == '__main__':\n    datos = [64, 34, 25, 12, 22, 11, 90]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {bubble_sort(datos)}\")",
        "explanation": "En Python aprovechamos el desempaquetado de tuplas 'arr[j], arr[j+1] = arr[j+1], arr[j]' para realizar intercambios sin variables temporales. Emplea la bandera 'swapped' para obtener O(n) en listas presorteadas.",
        "keyConcepts": [
          "Tuple unpacking swap",
          "Type hints List[int]",
          "Early-exit boolean flag"
        ],
        "terminalOutput": [
          "$ python -u bubble_sort.py",
          "[+] Entrada: [64, 34, 25, 12, 22, 11, 90]",
          "[*] Pasada 1: Swap(64, 34) -> [34, 64, 25, 12, 22, 11, 90]",
          "[*] Pasada 1: Swap(64, 25) -> [34, 25, 64, 12, 22, 11, 90]",
          "[*] Pasada 1: Mayor fijado en posición 6 (90)",
          "[✓] Completado en 18 comparaciones y 12 swaps.",
          "[+] Salida: [11, 12, 22, 25, 34, 64, 90]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "<!-- Visualizador Web Bubble Sort -->\n<div class=\"bars-container\" id=\"bubbleBars\"></div>\n<style>\n.bars-container { display: flex; align-items: flex-end; gap: 4px; height: 110px; background: #FFFDF0; padding: 8px; border: 2px solid #000; }\n.bar-item { flex: 1; background: #54F18F; border: 2px solid #000; text-align: center; font-mono; font-bold; font-size: 11px; }\n.bar-active { background: #FF3366 !important; color: white; }\n</style>\n<script>\nasync function bubbleSortWeb(arr) {\n  const container = document.getElementById('bubbleBars');\n  const n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n        render(); await new Promise(r => setTimeout(r, 150));\n      }\n    }\n  }\n}\n</script>",
        "explanation": "El componente web interactivo manipula barras del DOM con transiciones CSS y funciones asíncronas 'async/await' para visualizar el paso de la burbuja sin congelar el hilo principal de la interfaz.",
        "keyConcepts": [
          "Async/Await para temporización fluida",
          "Flexbox align-items flex-end",
          "Desestructuración de arreglos ES6"
        ],
        "demoData": [
          45,
          12,
          88,
          30,
          65,
          19,
          94
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class BubbleSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        int n = array.Length;\n        for (int i = 0; i < n - 1; i++)\n        {\n            bool swapped = false;\n            for (int j = 0; j < n - i - 1; j++)\n            {\n                if (array[j].CompareTo(array[j + 1]) > 0)\n                {\n                    (array[j], array[j + 1]) = (array[j + 1], array[j]);\n                    swapped = true;\n                }\n            }\n            if (!swapped) break;\n        }\n    }\n}",
        "explanation": "En C# .NET 9 utilizamos 'Span<T>' para operar directamente sobre la memoria contigua del Stack sin generar presión sobre el Garbage Collector (0 Bytes Allocations). Las comparaciones se resuelven mediante 'IComparable<T>' genérico.",
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo OrdenamientoSeleccion\n    Dimension arr[7]\n    n <- 7\n    arr[1] <- 29; arr[2] <- 10; arr[3] <- 14; arr[4] <- 37; arr[5] <- 13; arr[6] <- 5; arr[7] <- 42\n\n    Para i <- 1 Hasta n - 1 Con Paso 1 Hacer\n        min_idx <- i\n        Para j <- i + 1 Hasta n Con Paso 1 Hacer\n            Si arr[j] < arr[min_idx] Entonces\n                min_idx <- j\n            FinSi\n        FinPara\n        Si min_idx <> i Entonces\n            aux <- arr[i]\n            arr[i] <- arr[min_idx]\n            arr[min_idx] <- aux\n        FinSi\n    FinPara\n\n    Escribir \"Arreglo Ordenado:\"\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], \" \"\n    FinPara\nFinAlgoritmo",
        "explanation": "Selection Sort busca en cada iteración el índice del menor elemento de la sublista no ordenada y lo intercambia con la posición actual 'i'. Realiza como máximo n-1 intercambios en total, minimizando la escritura en memoria.",
        "keyConcepts": [
          "Búsqueda del índice mínimo (min_idx)",
          "Máximo n-1 intercambios físicos",
          "Invariante de sublista ordenada a la izquierda"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Selection Sort (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio SelectionSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "i <- 1"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n - 1?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "min_idx <- i, j <- i + 1"
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
              "text": "min_idx <- j"
            },
            {
              "id": 8,
              "type": "process",
              "text": "j <- j + 1"
            },
            {
              "id": 9,
              "type": "decision",
              "text": "¿min_idx <> i?"
            },
            {
              "id": 10,
              "type": "process",
              "text": "Swap(arr[i], arr[min_idx])"
            },
            {
              "id": 11,
              "type": "process",
              "text": "i <- i + 1"
            },
            {
              "id": 12,
              "type": "end",
              "text": "Fin: Retornar arr"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef selection_sort(arr: List[int]) -> List[int]:\n    \"\"\"Ordenamiento por Selección: encuentra el mínimo y lo posiciona.\"\"\"\n    n = len(arr)\n    for i in range(n - 1):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        if min_idx != i:\n            arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nif __name__ == '__main__':\n    datos = [29, 10, 14, 37, 13, 5, 42]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {selection_sort(datos)}\")",
        "explanation": "El algoritmo mantiene dos regiones: la parte ordenada al inicio y la no ordenada al final. En cada ciclo selecciona el menor elemento de la región no ordenada y realiza exactamente un swap con el inicio de dicha región.",
        "keyConcepts": [
          "Índice mínimo 'min_idx'",
          "Swap condicional si min_idx != i",
          "Garantía de exactamente O(n) escrituras"
        ],
        "terminalOutput": [
          "$ python -u selection_sort.py",
          "[+] Dataset Inicial: [29, 10, 14, 37, 13, 5, 42]",
          "[*] Pasada 0: Mínimo encontrado '5' en índice 5 -> Swap con índice 0",
          "[*] Pasada 1: Mínimo encontrado '10' en índice 1 -> Ya en posición",
          "[*] Pasada 2: Mínimo encontrado '13' en índice 4 -> Swap con índice 2",
          "[✓] Sublista ordenada consolidada progresivamente.",
          "[+] Salida Ordenada: [5, 10, 13, 14, 29, 37, 42]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function selectionSortWeb(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    let minIdx = i;\n    highlightBar(minIdx, 'min-candidate');\n    for (let j = i + 1; j < n; j++) {\n      highlightBar(j, 'comparing');\n      await sleep(120);\n      if (arr[j] < arr[minIdx]) {\n        clearHighlight(minIdx);\n        minIdx = j;\n        highlightBar(minIdx, 'min-candidate');\n      }\n      clearHighlight(j);\n    }\n    if (minIdx !== i) {\n      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];\n      renderDOM(arr);\n      await sleep(150);\n    }\n    markSorted(i);\n  }\n}",
        "explanation": "La visualización web resalta el candidato mínimo actual con un color distintivo (Cyan) y barre los elementos comparados (Amarillo), intercambiando únicamente al final de cada ciclo.",
        "keyConcepts": [
          "Pivote de mínimo persistente",
          "Animación de barrido no destructiva",
          "Marcado de elemento fijado"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class SelectionSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        int n = array.Length;\n        for (int i = 0; i < n - 1; i++)\n        {\n            int minIdx = i;\n            for (int j = i + 1; j < n; j++)\n            {\n                if (array[j].CompareTo(array[minIdx]) < 0)\n                {\n                    minIdx = j;\n                }\n            }\n            if (minIdx != i)\n            {\n                (array[i], array[minIdx]) = (array[minIdx], array[i]);\n            }\n        }\n    }\n}",
        "explanation": "Excelente para memorias flash o EEPROM donde las operaciones de escritura son costosas en tiempo y degradan el hardware físico, ya que Selection Sort realiza exactamente como máximo n-1 escrituras en memoria.",
        "keyConcepts": [
          "Minimización de escrituras (n-1 writes)",
          "Span<T> memory efficiency",
          "Cero allocations en Heap"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-Place)",
          "complexityBest": "O(n²)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Mínimas escrituras en bus de memoria"
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo OrdenamientoInsercion\n    Dimension arr[7]\n    n <- 7\n    arr[1] <- 12; arr[2] <- 11; arr[3] <- 13; arr[4] <- 5; arr[5] <- 6; arr[6] <- 7; arr[7] <- 1\n\n    Para i <- 2 Hasta n Con Paso 1 Hacer\n        clave <- arr[i]\n        j <- i - 1\n        Mientras j >= 1 Y arr[j] > clave Hacer\n            arr[j + 1] <- arr[j] // Desplazar elemento mayor a la derecha\n            j <- j - 1\n        FinMientras\n        arr[j + 1] <- clave // Insertar clave en su lugar\n    FinPara\n\n    Escribir \"Arreglo Ordenado:\"\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], \" \"\n    FinPara\nFinAlgoritmo",
        "explanation": "Construye el arreglo ordenado de izquierda a derecha. En cada paso toma una 'clave' y desplaza hacia la derecha todos los elementos mayores que ella, insertando la clave en el hueco resultante.",
        "keyConcepts": [
          "Extracción de elemento clave",
          "Bucle condicional Mientras (While)",
          "Desplazamiento in-place hacia la derecha"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Insertion Sort (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio InsertionSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "i <- 2"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "clave <- arr[i], j <- i - 1"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿j >= 1 Y arr[j] > clave?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "arr[j + 1] <- arr[j]; j <- j - 1"
            },
            {
              "id": 7,
              "type": "process",
              "text": "arr[j + 1] <- clave; i <- i + 1"
            },
            {
              "id": 8,
              "type": "end",
              "text": "Fin: Retornar arr"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef insertion_sort(arr: List[int]) -> List[int]:\n    \"\"\"Ordenamiento por Inserción: óptimo para arreglos pequeños o casi ordenados.\"\"\"\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr\n\nif __name__ == '__main__':\n    datos = [12, 11, 13, 5, 6, 7, 1]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {insertion_sort(datos)}\")",
        "explanation": "Extremadamente rápido y eficiente para listas pequeñas (n <= 32) o arreglos casi ordenados, donde opera en O(n) lineal gracias al corto recorrido del bucle 'while'. Es el algoritmo base utilizado por TimSort en Python.",
        "keyConcepts": [
          "Algoritmo adaptable (Adaptive)",
          "Estabilidad garantizada (Stable)",
          "Eficiente en memoria y caché"
        ],
        "terminalOutput": [
          "$ python -u insertion_sort.py",
          "[+] Dataset Entrada: [12, 11, 13, 5, 6, 7, 1]",
          "[*] Clave 11 insertada antes de 12 -> [11, 12, ...]",
          "[*] Clave 5 insertada al inicio -> [5, 11, 12, 13, ...]",
          "[✓] Inserción completada con éxito.",
          "[+] Salida Ordenada: [1, 5, 6, 7, 11, 12, 13]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function insertionSortWeb(arr) {\n  for (let i = 1; i < arr.length; i++) {\n    let key = arr[i];\n    let j = i - 1;\n    highlightKey(i);\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j];\n      shiftBarDOM(j, j + 1);\n      await sleep(100);\n      j--;\n    }\n    arr[j + 1] = key;\n    renderBars(arr);\n  }\n}",
        "explanation": "El componente web eleva la barra de la 'clave' (Key) y desplaza visualmente las barras mayores a la derecha hasta liberar el hueco exacto de inserción.",
        "keyConcepts": [
          "Elevación visual de clave",
          "Desplazamiento horizontal fluido",
          "Inserción atómica"
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
        "explanation": "En .NET Core y .NET 9, el método Array.Sort interno recurre a InsertionSort cuando las particiones de QuickSort se reducen a menos de 16 elementos, maximizando la velocidad de ejecución.",
        "keyConcepts": [
          "Subrutina de QuickSort híbrido",
          "Span<T> y cero overhead",
          "Operación O(n) en listas casi ordenadas"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-Place)",
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo ShellSort\n    Dimension arr[8]\n    n <- 8\n    arr[1] <- 35; arr[2] <- 33; arr[3] <- 42; arr[4] <- 10; arr[5] <- 14; arr[6] <- 19; arr[7] <- 27; arr[8] <- 44\n\n    gap <- Trunc(n / 2)\n    Mientras gap > 0 Hacer\n        Para i <- gap + 1 Hasta n Con Paso 1 Hacer\n            temp <- arr[i]\n            j <- i\n            Mientras j > gap Y arr[j - gap] > temp Hacer\n                arr[j] <- arr[j - gap]\n                j <- j - gap\n            FinMientras\n            arr[j] <- temp\n        FinPara\n        gap <- Trunc(gap / 2)\n    FinMientras\n\n    Escribir \"Arreglo Ordenado con Shell Sort:\"\n    Para k <- 1 Hasta n Con Paso 1 Hacer\n        Escribir Sin Saltar arr[k], \" \"\n    FinPara\nFinAlgoritmo",
        "explanation": "Generalización de Insertion Sort que compara elementos separados por una distancia o brecha ('gap'). El gap se reduce progresivamente a la mitad en cada ciclo, permitiendo que elementos muy lejanos se muevan rápidamente a sus posiciones correctas.",
        "keyConcepts": [
          "Secuencia de brechas (Gap)",
          "Inserción h-ordenada",
          "Reducción geométrica del salto"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Shell Sort (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio ShellSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "gap <- Trunc(n / 2)"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿gap > 0?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "i <- gap + 1"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "temp <- arr[i], j <- i"
            },
            {
              "id": 7,
              "type": "decision",
              "text": "¿j > gap Y arr[j - gap] > temp?"
            },
            {
              "id": 8,
              "type": "process",
              "text": "arr[j] <- arr[j - gap]; j <- j - gap"
            },
            {
              "id": 9,
              "type": "process",
              "text": "arr[j] <- temp; i <- i + 1"
            },
            {
              "id": 10,
              "type": "process",
              "text": "gap <- Trunc(gap / 2)"
            },
            {
              "id": 11,
              "type": "end",
              "text": "Fin: Retornar arr"
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
        "explanation": "Al comparar elementos separados por 'gap', elimina las inversiones lejanas de forma mucho más veloz que intercambiar vecinos de uno en uno. La última pasada con gap=1 se ejecuta sobre un arreglo prácticamente ordenado en tiempo casi lineal.",
        "keyConcepts": [
          "Secuencia de brechas de Shell",
          "Eliminación masiva de inversiones",
          "Complejidad subcuadrática O(n log² n)"
        ],
        "terminalOutput": [
          "$ python -u shell_sort.py",
          "[+] Dataset Inicial: [35, 33, 42, 10, 14, 19, 27, 44]",
          "[*] Brecha gap = 4: Intercambios a distancia 4 realizados.",
          "[*] Brecha gap = 2: Intercambios a distancia 2 realizados.",
          "[*] Brecha gap = 1: Pasada final de inserción rápida.",
          "[+] Dataset Ordenado: [10, 14, 19, 27, 33, 35, 42, 44]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function shellSortWeb(arr) {\n  let n = arr.length;\n  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {\n    updateGapBadge(gap);\n    for (let i = gap; i < n; i++) {\n      let temp = arr[i];\n      let j = i;\n      while (j >= gap && arr[j - gap] > temp) {\n        highlightPair(j, j - gap);\n        arr[j] = arr[j - gap];\n        await sleep(150);\n        j -= gap;\n      }\n      arr[j] = temp;\n      renderBars(arr);\n    }\n  }\n}",
        "explanation": "El componente web conecta visualmente pares de barras separadas por el 'gap' actual mediante un arco o resaltado simultáneo, ilustrando cómo el intervalo se contrae hasta llegar a 1.",
        "keyConcepts": [
          "Badge de brecha en vivo",
          "Visualización de saltos a distancia",
          "Transición fluida de gap"
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
        "explanation": "En sistemas embebidos e IoT con .NET NanoFramework, Shell Sort es ampliamente utilizado porque no requiere memoria adicional en el Heap ni recursión de llamadas en la pila (Stack overflow safe).",
        "keyConcepts": [
          "Zero recursion stack",
          "Ideal para IoT / Microcontroladores",
          "Rendimiento O(n log² n) in-place"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-Place)",
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Mezclar(arr, izq, medio, der)\n    Dimension L[20], R[20]\n    n1 <- medio - izq + 1\n    n2 <- der - medio\n    Para i <- 1 Hasta n1 Hacer L[i] <- arr[izq + i - 1]; FinPara\n    Para j <- 1 Hasta n2 Hacer R[j] <- arr[medio + j]; FinPara\n\n    i <- 1; j <- 1; k <- izq\n    Mientras i <= n1 Y j <= n2 Hacer\n        Si L[i] <= R[j] Entonces\n            arr[k] <- L[i]; i <- i + 1\n        Sino\n            arr[k] <- R[j]; j <- j + 1\n        FinSi\n        k <- k + 1\n    FinMientras\n    Mientras i <= n1 Hacer arr[k] <- L[i]; i <- i + 1; k <- k + 1; FinMientras\n    Mientras j <= n2 Hacer arr[k] <- R[j]; j <- j + 1; k <- k + 1; FinMientras\nFinSubProceso\n\nSubProceso MergeSort(arr, izq, der)\n    Si izq < der Entonces\n        medio <- Trunc((izq + der) / 2)\n        MergeSort(arr, izq, medio)\n        MergeSort(arr, medio + 1, der)\n        Mezclar(arr, izq, medio, der)\n    FinSi\nFinSubProceso\n\nAlgoritmo PrincipalMergeSort\n    Dimension arr[8]\n    arr[1] <- 38; arr[2] <- 27; arr[3] <- 43; arr[4] <- 3; arr[5] <- 9; arr[6] <- 82; arr[7] <- 10; arr[8] <- 15\n    MergeSort(arr, 1, 8)\n    Escribir \"Arreglo Ordenado con Merge Sort:\"\n    Para i <- 1 Hasta 8 Hacer Escribir Sin Saltar arr[i], \" \"; FinPara\nFinAlgoritmo",
        "explanation": "Aplica el paradigma de 'Divide y Vencerás'. Divide recursivamente la lista en mitades hasta llegar a sublistas de tamaño 1, y luego las fusiona de manera ordenada utilizando el subproceso 'Mezclar'.",
        "keyConcepts": [
          "Paradigma Divide y Vencerás",
          "Recursión con caso base tamaño 1",
          "Fusión ordenada en memoria auxiliar"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Merge Sort (PSeInt Pro)",
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
              "text": "medio <- Trunc((izq + der) / 2)"
            },
            {
              "id": 4,
              "type": "process",
              "text": "MergeSort(arr, izq, medio)"
            },
            {
              "id": 5,
              "type": "process",
              "text": "MergeSort(arr, medio + 1, der)"
            },
            {
              "id": 6,
              "type": "process",
              "text": "Mezclar(arr, izq, medio, der)"
            },
            {
              "id": 7,
              "type": "end",
              "text": "Fin Subproceso"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef merge_sort(arr: List[int]) -> List[int]:\n    \"\"\"Merge Sort: Algoritmo estable O(n log n) garantizado.\"\"\"\n    if len(arr) <= 1:\n        return arr\n\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n\n    # Proceso de mezcla (Merge)\n    merged = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            merged.append(left[i])\n            i += 1\n        else:\n            merged.append(right[j])\n            j += 1\n    merged.extend(left[i:])\n    merged.extend(right[j:])\n    return merged\n\nif __name__ == '__main__':\n    datos = [38, 27, 43, 3, 9, 82, 10, 15]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {merge_sort(datos)}\")",
        "explanation": "Merge Sort garantiza O(n log n) sin importar si los datos están desordenados, inversos o idénticos. Es un ordenamiento completamente estable que preserva el orden relativo de elementos equivalentes.",
        "keyConcepts": [
          "Estabilidad matemática garantizada",
          "División por punto medio (mid)",
          "Extensión eficiente con extend()"
        ],
        "terminalOutput": [
          "$ python -u merge_sort.py",
          "[+] Entrada: [38, 27, 43, 3, 9, 82, 10, 15]",
          "[*] Split: [38, 27, 43, 3] y [9, 82, 10, 15]",
          "[*] Mezcla: [27, 38] y [3, 43] -> [3, 27, 38, 43]",
          "[*] Mezcla: [9, 82] y [10, 15] -> [9, 10, 15, 82]",
          "[✓] Fusión final completada en O(n log n).",
          "[+] Salida: [3, 9, 10, 15, 27, 38, 43, 82]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function mergeSortWeb(arr, start = 0, end = arr.length - 1) {\n  if (start >= end) return;\n  const mid = Math.floor((start + end) / 2);\n  await mergeSortWeb(arr, start, mid);\n  await mergeSortWeb(arr, mid + 1, end);\n  await mergeWeb(arr, start, mid, end);\n}\n\nasync function mergeWeb(arr, start, mid, end) {\n  let temp = [];\n  let i = start, j = mid + 1;\n  while (i <= mid && j <= end) {\n    highlightCompare(i, j);\n    await sleep(100);\n    temp.push(arr[i] <= arr[j] ? arr[i++] : arr[j++]);\n  }\n  while (i <= mid) temp.push(arr[i++]);\n  while (j <= end) temp.push(arr[j++]);\n  for (let k = 0; k < temp.length; k++) {\n    arr[start + k] = temp[k];\n    renderBar(start + k, temp[k]);\n  }\n}",
        "explanation": "El componente web ilumina los dos subárboles concurrentemente y reconstruye las barras fusionadas en orden ascendente en su posición correspondiente del DOM.",
        "keyConcepts": [
          "Animación de árbol recursivo",
          "Sincronización de sublistas",
          "Reconstrucción visual de buffers"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class MergeSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        if (array.Length <= 1) return;\n        T[] temp = new T[array.Length];\n        SortInternal(array, temp);\n    }\n\n    private static void SortInternal<T>(Span<T> array, Span<T> temp) where T : IComparable<T>\n    {\n        if (array.Length <= 1) return;\n        int mid = array.Length / 2;\n        var left = array[..mid];\n        var right = array[mid..];\n\n        SortInternal(left, temp[..mid]);\n        SortInternal(right, temp[mid..]);\n\n        // Mezcla en buffer temporal y copia de vuelta\n        int i = 0, j = 0, k = 0;\n        while (i < left.Length && j < right.Length)\n        {\n            temp[k++] = left[i].CompareTo(right[j]) <= 0 ? left[i++] : right[j++];\n        }\n        while (i < left.Length) temp[k++] = left[i++];\n        while (j < right.Length) temp[k++] = right[j++];\n        temp[..array.Length].CopyTo(array);\n    }\n}",
        "explanation": "Implementación de alto rendimiento en C# utilizando un único buffer temporal auxiliar asignado al inicio, evitando reasignaciones innecesarias de memoria durante la recursión.",
        "keyConcepts": [
          "Buffer temporal único reutilizable",
          "Slices de Span (array[..mid])",
          "CopyTo para transferencia atómica"
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso pi <- Particionar(arr, bajo, alto)\n    pivote <- arr[alto]\n    i <- bajo - 1\n    Para j <- bajo Hasta alto - 1 Con Paso 1 Hacer\n        Si arr[j] < pivote Entonces\n            i <- i + 1\n            aux <- arr[i]; arr[i] <- arr[j]; arr[j] <- aux\n        FinSi\n    FinPara\n    aux <- arr[i + 1]; arr[i + 1] <- arr[alto]; arr[alto] <- aux\n    pi <- i + 1\nFinSubProceso\n\nSubProceso QuickSort(arr, bajo, alto)\n    Si bajo < alto Entonces\n        pi <- Particionar(arr, bajo, alto)\n        QuickSort(arr, bajo, pi - 1)\n        QuickSort(arr, pi + 1, alto)\n    FinSi\nFinSubProceso\n\nAlgoritmo PrincipalQuickSort\n    Dimension arr[7]\n    arr[1] <- 10; arr[2] <- 80; arr[3] <- 30; arr[4] <- 90; arr[5] <- 40; arr[6] <- 50; arr[7] <- 70\n    QuickSort(arr, 1, 7)\n    Escribir \"Arreglo Ordenado con Quick Sort:\"\n    Para k <- 1 Hasta 7 Hacer Escribir Sin Saltar arr[k], \" \"; FinPara\nFinAlgoritmo",
        "explanation": "Elige un elemento como pivote (en este caso el último) y particiona el arreglo de modo que todos los menores queden a la izquierda y los mayores a la derecha. Luego ordena recursivamente ambas particiones.",
        "keyConcepts": [
          "Partición de Lomuto",
          "Pivoteo in-place",
          "Recursión asimétrica"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Quick Sort (PSeInt Pro)",
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
              "text": "pi <- Particionar(arr, bajo, alto)"
            },
            {
              "id": 4,
              "type": "process",
              "text": "QuickSort(arr, bajo, pi - 1)"
            },
            {
              "id": 5,
              "type": "process",
              "text": "QuickSort(arr, pi + 1, alto)"
            },
            {
              "id": 6,
              "type": "end",
              "text": "Fin Subproceso"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef quick_sort(arr: List[int], low: int = 0, high: int = None) -> List[int]:\n    \"\"\"Quick Sort in-place utilizando partición Lomuto.\"\"\"\n    if high is None:\n        high = len(arr) - 1\n\n    if low < high:\n        # Partición Lomuto\n        pivot = arr[high]\n        i = low - 1\n        for j in range(low, high):\n            if arr[j] < pivot:\n                i += 1\n                arr[i], arr[j] = arr[j], arr[i]\n        arr[i + 1], arr[high] = arr[high], arr[i + 1]\n        pi = i + 1\n\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n    return arr\n\nif __name__ == '__main__':\n    datos = [10, 80, 30, 90, 40, 50, 70]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {quick_sort(datos)}\")",
        "explanation": "El algoritmo de ordenamiento de propósito general más rápido en la práctica gracias a su excelente localidad espacial en la memoria caché del procesador.",
        "keyConcepts": [
          "Excelente localidad de caché",
          "Partición Lomuto in-place",
          "Complejidad O(n log n) promedio"
        ],
        "terminalOutput": [
          "$ python -u quick_sort.py",
          "[+] Dataset Inicial: [10, 80, 30, 90, 40, 50, 70]",
          "[*] Pivote seleccionado: 70",
          "[*] Partición finalizada: pivote 70 fijado en posición 5",
          "[*] Recursión en sublistas [10, 30, 40, 50] y [80, 90]",
          "[✓] Ordenamiento completado exitosamente.",
          "[+] Salida: [10, 30, 40, 50, 70, 80, 90]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function quickSortWeb(arr, low = 0, high = arr.length - 1) {\n  if (low < high) {\n    let pi = await partitionWeb(arr, low, high);\n    await quickSortWeb(arr, low, pi - 1);\n    await quickSortWeb(arr, pi + 1, high);\n  }\n}\n\nasync function partitionWeb(arr, low, high) {\n  let pivot = arr[high];\n  highlightPivot(high);\n  let i = low - 1;\n  for (let j = low; j < high; j++) {\n    if (arr[j] < pivot) {\n      i++;\n      [arr[i], arr[j]] = [arr[j], arr[i]];\n      renderDOM(arr);\n      await sleep(120);\n    }\n  }\n  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];\n  renderDOM(arr);\n  return i + 1;\n}",
        "explanation": "La visualización web destaca el pivote en color Púrpura y utiliza dos punteros visuales (i y j) para particionar la arena en tiempo real.",
        "keyConcepts": [
          "Punteros visuales i y j",
          "Destacado permanente de pivote",
          "Animación atómica de partición"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class QuickSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        if (array.Length <= 1) return;\n        T pivot = array[^1]; // Pivote en último elemento\n        int i = -1;\n\n        for (int j = 0; j < array.Length - 1; j++)\n        {\n            if (array[j].CompareTo(pivot) < 0)\n            {\n                i++;\n                (array[i], array[j]) = (array[j], array[i]);\n            }\n        }\n        (array[i + 1], array[^1]) = (array[^1], array[i + 1]);\n        int pi = i + 1;\n\n        Sort(array[..pi]);\n        Sort(array[(pi + 1)..]);\n    }\n}",
        "explanation": "En .NET 9 utilizamos los operadores de rango ('array[..pi]' y 'array[(pi + 1)..]') para rebanar el Span sin duplicar datos en memoria, logrando la máxima velocidad que el compilador JIT puede generar.",
        "keyConcepts": [
          "Slices nativos de C# 12",
          "Cero copias de arreglos",
          "Optimización JIT agresiva"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (Stack Recursion)",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Registros generales CPU para índices i y j"
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Amontonar(arr, n, i)\n    mayor <- i\n    izq <- 2 * i\n    der <- 2 * i + 1\n\n    Si izq <= n Y arr[izq] > arr[mayor] Entonces mayor <- izq; FinSi\n    Si der <= n Y arr[der] > arr[mayor] Entonces mayor <- der; FinSi\n\n    Si mayor <> i Entonces\n        aux <- arr[i]; arr[i] <- arr[mayor]; arr[mayor] <- aux\n        Amontonar(arr, n, mayor)\n    FinSi\nFinSubProceso\n\nSubProceso HeapSort(arr, n)\n    Para i <- Trunc(n / 2) Hasta 1 Con Paso -1 Hacer\n        Amontonar(arr, n, i)\n    FinPara\n    Para i <- n Hasta 2 Con Paso -1 Hacer\n        aux <- arr[1]; arr[1] <- arr[i]; arr[i] <- aux\n        Amontonar(arr, i - 1, 1)\n    FinPara\nFinSubProceso\n\nAlgoritmo PrincipalHeapSort\n    Dimension arr[6]\n    arr[1] <- 12; arr[2] <- 11; arr[3] <- 13; arr[4] <- 5; arr[5] <- 6; arr[6] <- 7\n    HeapSort(arr, 6)\n    Escribir \"Arreglo Ordenado con Heap Sort:\"\n    Para k <- 1 Hasta 6 Hacer Escribir Sin Saltar arr[k], \" \"; FinPara\nFinAlgoritmo",
        "explanation": "Transforma el arreglo en un árbol binario estructurado como Max-Heap (donde la raíz es siempre el valor mayor). Luego extrae repetidamente la raíz intercambiándola con el final y reajustando el montículo.",
        "keyConcepts": [
          "Árbol binario implícito en arreglo",
          "Propiedad de Max-Heap",
          "Extracción continua del máximo"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Heap Sort (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio HeapSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Construir Max-Heap: Para i <- n/2 Hasta 1"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Amontonar(arr, n, i)"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Extraer raíz: Para i <- n Hasta 2"
            },
            {
              "id": 5,
              "type": "process",
              "text": "Swap(arr[1], arr[i])"
            },
            {
              "id": 6,
              "type": "process",
              "text": "Amontonar(arr, i - 1, 1)"
            },
            {
              "id": 7,
              "type": "end",
              "text": "Fin: Retornar arr"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef heapify(arr: List[int], n: int, i: int) -> None:\n    largest = i\n    left = 2 * i + 1\n    right = 2 * i + 2\n\n    if left < n and arr[left] > arr[largest]:\n        largest = left\n    if right < n and arr[right] > arr[largest]:\n        largest = right\n\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\ndef heap_sort(arr: List[int]) -> List[int]:\n    \"\"\"Heap Sort: O(n log n) en el peor de los casos con O(1) de espacio.\"\"\"\n    n = len(arr)\n    # Construcción de Max-Heap\n    for i in range(n // 2 - 1, -1, -1):\n        heapify(arr, n, i)\n    # Extracción de elementos uno a uno\n    for i in range(n - 1, 0, -1):\n        arr[0], arr[i] = arr[i], arr[0]\n        heapify(arr, i, 0)\n    return arr\n\nif __name__ == '__main__':\n    datos = [12, 11, 13, 5, 6, 7]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {heap_sort(datos)}\")",
        "explanation": "El algoritmo predilecto para sistemas embebidos de misión crítica (aviónica, satélites, automoción), ya que ofrece la velocidad de QuickSort sin su riesgo de degradarse a O(n²), y sin el consumo de memoria de MergeSort.",
        "keyConcepts": [
          "Garantía determinista O(n log n)",
          "Memoria auxiliar O(1)",
          "Estructura de árbol implícita"
        ],
        "terminalOutput": [
          "$ python -u heap_sort.py",
          "[+] Dataset Inicial: [12, 11, 13, 5, 6, 7]",
          "[*] Fase 1: Max-Heap construido -> [13, 11, 12, 5, 6, 7]",
          "[*] Extracción 1: Swap raíz 13 con final -> [7, 11, 12, 5, 6 | 13]",
          "[*] Heapify raíz restaurada -> [12, 11, 7, 5, 6 | 13]",
          "[✓] Proceso completado sin desbordamientos de pila.",
          "[+] Salida Ordenada: [5, 6, 7, 11, 12, 13]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function heapSortWeb(arr) {\n  let n = arr.length;\n  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {\n    await heapifyWeb(arr, n, i);\n  }\n  for (let i = n - 1; i > 0; i--) {\n    [arr[0], arr[i]] = [arr[i], arr[0]];\n    renderDOM(arr);\n    await sleep(150);\n    await heapifyWeb(arr, i, 0);\n  }\n}",
        "explanation": "Visualiza el intercambio del nodo raíz (índice 0) con el último elemento del montículo activo y la posterior cascada de ajuste (Heapify).",
        "keyConcepts": [
          "Visualización de árbol implícito",
          "Extracción continua de raíz",
          "Contracción del montículo activo"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class HeapSort\n{\n    public static void Sort<T>(Span<T> array) where T : IComparable<T>\n    {\n        int n = array.Length;\n        for (int i = n / 2 - 1; i >= 0; i--)\n            Heapify(array, n, i);\n\n        for (int i = n - 1; i > 0; i--)\n        {\n            (array[0], array[i]) = (array[i], array[0]);\n            Heapify(array, i, 0);\n        }\n    }\n\n    private static void Heapify<T>(Span<T> array, int n, int i) where T : IComparable<T>\n    {\n        int largest = i;\n        int left = 2 * i + 1;\n        int right = 2 * i + 2;\n\n        if (left < n && array[left].CompareTo(array[largest]) > 0) largest = left;\n        if (right < n && array[right].CompareTo(array[largest]) > 0) largest = right;\n\n        if (largest != i)\n        {\n            (array[i], array[largest]) = (array[largest], array[i]);\n            Heapify(array, n, largest);\n        }\n    }\n}",
        "explanation": "La alternativa predilecta en C# cuando se requiere una garantía estricta de tiempo sin importar las condiciones de los datos de entrada.",
        "keyConcepts": [
          "Garantía determinista",
          "Cero consumo en Heap",
          "Sin degradación cuadrática"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-Place)",
          "complexityBest": "O(n log n)",
          "complexityWorst": "O(n log n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Aritmética de índices 2*i+1 resuelta por ALU"
        }
      }
    }
  },
  "radix_sort": {
    "name": "Radix Sort (LSD - Least Significant Digit)",
    "category": "sort",
    "bigO": "O(n · k)",
    "space": "O(n + k)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso CountingSortPorDigito(arr, n, exp)\n    Dimension salida[10], conteo[10]\n    Para c <- 0 Hasta 9 Hacer conteo[c + 1] <- 0; FinPara\n\n    // Conteo de frecuencias del dígito actual\n    Para i <- 1 Hasta n Hacer\n        digito <- Trunc(arr[i] / exp) % 10\n        conteo[digito + 1] <- conteo[digito + 1] + 1\n    FinPara\n\n    // Acumulado de posiciones\n    Para i <- 1 Hasta 9 Hacer\n        conteo[i + 1] <- conteo[i + 1] + conteo[i]\n    FinPara\n\n    // Construcción de arreglo de salida estable\n    Para i <- n Hasta 1 Con Paso -1 Hacer\n        digito <- Trunc(arr[i] / exp) % 10\n        salida[conteo[digito + 1]] <- arr[i]\n        conteo[digito + 1] <- conteo[digito + 1] - 1\n    FinPara\n\n    Para i <- 1 Hasta n Hacer arr[i] <- salida[i]; FinPara\nFinSubProceso\n\nAlgoritmo PrincipalRadixSort\n    Dimension arr[8]\n    arr[1] <- 170; arr[2] <- 45; arr[3] <- 75; arr[4] <- 90; arr[5] <- 802; arr[6] <- 24; arr[7] <- 2; arr[8] <- 66\n    maximo <- 802\n    exp <- 1\n    Mientras Trunc(maximo / exp) > 0 Hacer\n        CountingSortPorDigito(arr, 8, exp)\n        exp <- exp * 10\n    FinMientras\n    Escribir \"Arreglo Ordenado con Radix Sort:\"\n    Para k <- 1 Hasta 8 Hacer Escribir Sin Saltar arr[k], \" \"; FinPara\nFinAlgoritmo",
        "explanation": "Algoritmo no comparativo que procesa los números dígito a dígito desde las unidades (LSD) hasta las centenas o miles, utilizando Counting Sort estable como subrutina para mantener el orden.",
        "keyConcepts": [
          "Ordenamiento no comparativo",
          "Extracción posicional de dígito (Trunc(x / exp) % 10)",
          "Subrutina Counting Sort estable"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Radix Sort (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio RadixSort(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "maximo <- Max(arr), exp <- 1"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿Trunc(maximo / exp) > 0?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "CountingSortPorDigito(arr, n, exp)"
            },
            {
              "id": 5,
              "type": "process",
              "text": "exp <- exp * 10"
            },
            {
              "id": 6,
              "type": "end",
              "text": "Fin: Retornar arr ordenado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef counting_sort_digit(arr: List[int], exp: int) -> None:\n    n = len(arr)\n    output = [0] * n\n    count = [0] * 10\n\n    for num in arr:\n        index = (num // exp) % 10\n        count[index] += 1\n\n    for i in range(1, 10):\n        count[i] += count[i - 1]\n\n    for i in range(n - 1, -1, -1):\n        index = (arr[i] // exp) % 10\n        output[count[index] - 1] = arr[i]\n        count[index] -= 1\n\n    for i in range(n):\n        arr[i] = output[i]\n\ndef radix_sort(arr: List[int]) -> List[int]:\n    \"\"\"Radix Sort LSD: Complejidad lineal O(n · k) para enteros.\"\"\"\n    if not arr:\n        return arr\n    max_val = max(arr)\n    exp = 1\n    while max_val // exp > 0:\n        counting_sort_digit(arr, exp)\n        exp *= 10\n    return arr\n\nif __name__ == '__main__':\n    datos = [170, 45, 75, 90, 802, 24, 2, 66]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {radix_sort(datos)}\")",
        "explanation": "Rompe la barrera teórica de O(n log n) de los ordenamientos comparativos. Si la cantidad de dígitos 'k' es pequeña y constante, procesa millones de datos en tiempo lineal O(n).",
        "keyConcepts": [
          "Tiempo estrictamente lineal O(n)",
          "Base numérica decimal (10 cubetas)",
          "Independiente de comparaciones directas"
        ],
        "terminalOutput": [
          "$ python -u radix_sort.py",
          "[+] Dataset Inicial: [170, 45, 75, 90, 802, 24, 2, 66]",
          "[*] Pasada 1 (Unidades exp=1): [170, 90, 802, 2, 24, 45, 75, 66]",
          "[*] Pasada 2 (Decenas exp=10): [802, 2, 24, 45, 66, 170, 75, 90]",
          "[*] Pasada 3 (Centenas exp=100): [2, 24, 45, 66, 75, 90, 170, 802]",
          "[✓] Ordenamiento lineal completado con éxito.",
          "[+] Salida Ordenada: [2, 24, 45, 66, 75, 90, 170, 802]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function radixSortWeb(arr) {\n  let max = Math.max(...arr);\n  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {\n    updateExpLabel(`Orden de Magnitud: 10^${Math.log10(exp)} (${exp})`);\n    let buckets = Array.from({length: 10}, () => []);\n    for (let num of arr) {\n      let digit = Math.floor(num / exp) % 10;\n      buckets[digit].push(num);\n      highlightBucket(digit, num);\n      await sleep(100);\n    }\n    arr = buckets.flat();\n    renderBars(arr);\n  }\n}",
        "explanation": "Visualiza cómo los elementos se agrupan en 10 'cubetas' (0 al 9) según el dígito activo y luego se aplanan ordenadamente para el siguiente orden de magnitud.",
        "keyConcepts": [
          "Distribución visual en 10 cubetas",
          "Aplanamiento estable con flat()",
          "Iteración por orden de magnitud"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class RadixSort\n{\n    public static void Sort(Span<int> array)\n    {\n        if (array.Length <= 1) return;\n        int max = array[0];\n        for (int i = 1; i < array.Length; i++)\n            if (array[i] > max) max = array[i];\n\n        Span<int> output = stackalloc int[array.Length];\n        Span<int> count = stackalloc int[10];\n\n        for (int exp = 1; max / exp > 0; exp *= 10)\n        {\n            count.Clear();\n            foreach (var num in array)\n                count[(num / exp) % 10]++;\n\n            for (int i = 1; i < 10; i++)\n                count[i] += count[i - 1];\n\n            for (int i = array.Length - 1; i >= 0; i--)\n            {\n                int digit = (array[i] / exp) % 10;\n                output[count[digit] - 1] = array[i];\n                count[digit]--;\n            }\n            output.CopyTo(array);\n        }\n    }\n}",
        "explanation": "En .NET 9, con 'stackalloc' para los arreglos de salida y conteo, este Radix Sort supera en velocidad a cualquier algoritmo comparativo para ordenar enteros o claves financieras.",
        "keyConcepts": [
          "stackalloc sin asignación en Heap",
          "Operaciones a nivel de palabra de máquina",
          "Altísima velocidad en colecciones de enteros"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (Stackalloc)",
          "complexityBest": "O(n · k)",
          "complexityWorst": "O(n · k)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Vectorización SIMD aplicable"
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso ordenado <- EstaOrdenado(arr, n)\n    ordenado <- Verdadero\n    Para i <- 1 Hasta n - 1 Hacer\n        Si arr[i] > arr[i + 1] Entonces ordenado <- Falso; FinSi\n    FinPara\nFinSubProceso\n\nSubProceso Barajar(arr, n)\n    Para i <- 1 Hasta n Hacer\n        r <- Azar(n) + 1\n        aux <- arr[i]; arr[i] <- arr[r]; arr[r] <- aux\n    FinPara\nFinSubProceso\n\nAlgoritmo PrincipalBogoSort\n    Dimension arr[5]\n    arr[1] <- 3; arr[2] <- 1; arr[3] <- 4; arr[4] <- 2; arr[5] <- 5\n    intentos <- 0\n    Mientras NO EstaOrdenado(arr, 5) Hacer\n        Barajar(arr, 5)\n        intentos <- intentos + 1\n    FinMientras\n    Escribir \"Arreglo ordenado tras \", intentos, \" permutaciones aleatorias.\"\nFinAlgoritmo",
        "explanation": "Antipatrón educativo por excelencia. Baraja aleatoriamente los elementos como un mazo de naipes y comprueba si quedaron ordenados. Con solo 15 elementos requeriría millones de años.",
        "keyConcepts": [
          "Fuerza bruta estocástica",
          "Función de permutación aleatoria",
          "Complejidad factorial inmanejable"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Bogo Sort (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BogoSort(arr, n)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿EstaOrdenado(arr, n)?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "BarajarAleatoriamente(arr, n)"
            },
            {
              "id": 4,
              "type": "end",
              "text": "Fin: Arreglo ordenado por casualidad"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "import random\nfrom typing import List\n\ndef is_sorted(arr: List[int]) -> bool:\n    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))\n\ndef bogo_sort(arr: List[int], max_trials: int = 1000) -> List[int]:\n    \"\"\"Bogo Sort: Didáctico, ilustra el peligro de la fuerza bruta factorial.\"\"\"\n    trials = 0\n    while not is_sorted(arr) and trials < max_trials:\n        random.shuffle(arr)\n        trials += 1\n    if not is_sorted(arr):\n        arr.sort() # Rescate didáctico para finalizar\n    return arr\n\nif __name__ == '__main__':\n    datos = [5, 1, 4, 2, 8]\n    print(f\"Original: {datos}\")\n    print(f\"Ordenado: {bogo_sort(datos)}\")",
        "explanation": "Demuestra la importancia del diseño algorítmico frente a la fuerza bruta descontrolada. Se utiliza en el aula para enseñar por qué los ingenieros no pueden confiar en la suerte o en soluciones estocásticas no acotadas.",
        "keyConcepts": [
          "Antipatrón de complejidad factorial",
          "random.shuffle()",
          "Rescate didáctico determinista"
        ],
        "terminalOutput": [
          "$ python -u bogo_sort.py",
          "[+] Dataset Entrada: [5, 1, 4, 2, 8]",
          "[*] Intento 1: [2, 5, 1, 8, 4] -> No ordenado",
          "[*] Intento 2: [8, 1, 4, 2, 5] -> No ordenado",
          "[*] Intento 7: [1, 2, 4, 5, 8] -> ¡Orden detectado!",
          "[✓] Completado estocásticamente en 7 intentos.",
          "[+] Salida: [1, 2, 4, 5, 8]"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function bogoSortWeb(arr) {\n  let trials = 0;\n  while (!isSorted(arr) && trials < 20) {\n    trials++;\n    arr.sort(() => Math.random() - 0.5);\n    renderBars(arr);\n    updateTrialsCount(trials);\n    await sleep(200);\n  }\n  arr.sort((a,b) => a - b);\n  renderBars(arr);\n}",
        "explanation": "Ilustra el caos estocástico agitando aleatoriamente las barras del DOM en cada ciclo con un contador de intentos fallidos antes del rescate determinista.",
        "keyConcepts": [
          "Caos visual en vivo",
          "Contador de intentos en tiempo real",
          "Finalización didáctica"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Sorting;\n\npublic static class BogoSort\n{\n    private static readonly Random _rng = new();\n\n    public static void Sort<T>(Span<T> array, int maxAttempts = 1000) where T : IComparable<T>\n    {\n        int attempts = 0;\n        while (!IsSorted(array) && attempts < maxAttempts)\n        {\n            // Fisher-Yates Shuffle\n            for (int i = array.Length - 1; i > 0; i--)\n            {\n                int k = _rng.Next(i + 1);\n                (array[i], array[k]) = (array[k], array[i]);\n            }\n            attempts++;\n        }\n        if (!IsSorted(array)) array.Sort();\n    }\n\n    private static bool IsSorted<T>(Span<T> array) where T : IComparable<T>\n    {\n        for (int i = 0; i < array.Length - 1; i++)\n            if (array[i].CompareTo(array[i + 1]) > 0) return false;\n        return true;\n    }\n}",
        "explanation": "Implementa la mezcla Fisher-Yates in-place para demostrar que incluso con la mejor aleatorización física, la probabilidad combinatoria hace inviable este enfoque para colecciones reales.",
        "keyConcepts": [
          "Fisher-Yates Shuffle",
          "Span<T> in-place shuffle",
          "Límite de seguridad contra loops infinitos"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-Place)",
          "complexityBest": "O(n)",
          "complexityWorst": "O(∞) / O((n+1)!)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Generador de números pseudoaleatorios"
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
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo BusquedaLineal\n    Dimension arr[8]\n    n <- 8\n    arr[1] <- 10; arr[2] <- 50; arr[3] <- 30; arr[4] <- 70; arr[5] <- 80; arr[6] <- 20; arr[7] <- 90; arr[8] <- 40\n    objetivo <- 20\n    posicion <- -1\n\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        Si arr[i] == objetivo Entonces\n            posicion <- i\n            i <- n // Romper el ciclo de búsqueda\n        FinSi\n    FinPara\n\n    Si posicion <> -1 Entonces\n        Escribir \"Objetivo encontrado en índice: \", posicion\n    Sino\n        Escribir \"Objetivo no encontrado en el arreglo.\"\n    FinSi\nFinAlgoritmo",
        "explanation": "Examina secuencialmente cada celda del arreglo desde el índice 1 hasta n. No requiere que los datos estén previamente ordenados, pero su tiempo crece de forma estrictamente proporcional a la cantidad de elementos O(n).",
        "keyConcepts": [
          "Recorrido secuencial exhaustivo",
          "No requiere pre-ordenación",
          "Complejidad lineal O(n)"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Lineal (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BusquedaLineal(arr, n, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "i <- 1, pos <- -1"
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
              "text": "pos <- i"
            },
            {
              "id": 6,
              "type": "process",
              "text": "i <- i + 1"
            },
            {
              "id": 7,
              "type": "end",
              "text": "Fin: Retornar pos"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef linear_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda Lineal: O(n) en el peor caso, no requiere orden previo.\"\"\"\n    for index, val in enumerate(arr):\n        if val == target:\n            return index\n    return None\n\nif __name__ == '__main__':\n    datos = [10, 50, 30, 70, 80, 20, 90, 40]\n    objetivo = 20\n    idx = linear_search(datos, objetivo)\n    print(f\"Target {objetivo} encontrado en índice: {idx}\")",
        "explanation": "Utiliza 'enumerate' para obtener el índice y valor simultáneamente. Es el algoritmo de búsqueda universal por defecto cuando los datos no tienen ningún orden predefinido.",
        "keyConcepts": [
          "enumerate() idiomático",
          "Retorno temprano (Early return)",
          "Soporte para cualquier tipo de dato"
        ],
        "terminalOutput": [
          "$ python -u linear_search.py",
          "[+] Colección: [10, 50, 30, 70, 80, 20, 90, 40]",
          "[*] Evaluando índice 0 (10) != 20",
          "[*] Evaluando índice 1 (50) != 20",
          "[*] Evaluando índice 5 (20) == 20 [MATCH]",
          "[✓] Target localizado en índice 5 tras 6 comparaciones."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function linearSearchWeb(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    highlightInspect(i);\n    await sleep(150);\n    if (arr[i] === target) {\n      markFound(i);\n      return i;\n    }\n    clearInspect(i);\n  }\n  return -1;\n}",
        "explanation": "Ilumina secuencialmente cada barra de izquierda a derecha con un halo amarillo de inspección hasta pintar la barra coincidente de verde esmeralda brillante.",
        "keyConcepts": [
          "Barrido visual continuo",
          "Detección y fijación de match",
          "Feedback de no encontrado"
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
        "code": "using System;\n\nnamespace AlgoMatrix3D.Searching;\n\npublic static class LinearSearch\n{\n    public static int IndexOf<T>(ReadOnlySpan<T> span, T target) where T : IEquatable<T>\n    {\n        for (int i = 0; i < span.Length; i++)\n        {\n            if (span[i].Equals(target)) return i;\n        }\n        return -1;\n    }\n}",
        "explanation": "Utiliza 'ReadOnlySpan<T>' para acceso directo sin copia a memoria. Para tipos primitivos, el runtime de .NET 9 puede vectorizar este bucle utilizando instrucciones SIMD (AVX2/AVX-512).",
        "keyConcepts": [
          "ReadOnlySpan<T> sin copias",
          "Vectorización SIMD por hardware",
          "IEquatable<T> genérico"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Instrucciones vectoriales AVX-512 si es posible"
        }
      }
    }
  },
  "binary_search": {
    "name": "Búsqueda Binaria (Bisección Logarítmica)",
    "category": "search",
    "bigO": "O(log n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo BusquedaBinaria\n    Dimension arr[9]\n    n <- 9\n    arr[1] <- 3; arr[2] <- 9; arr[3] <- 10; arr[4] <- 27; arr[5] <- 38; arr[6] <- 43; arr[7] <- 50; arr[8] <- 82; arr[9] <- 95\n    objetivo <- 43\n    bajo <- 1; alto <- n; pos <- -1\n\n    Mientras bajo <= alto Y pos == -1 Hacer\n        medio <- Trunc((bajo + alto) / 2)\n        Si arr[medio] == objetivo Entonces\n            pos <- medio\n        Sino\n            Si arr[medio] < objetivo Entonces\n                bajo <- medio + 1\n            Sino\n                alto <- medio - 1\n            FinSi\n        FinSi\n    FinMientras\n\n    Si pos <> -1 Entonces\n        Escribir \"Objetivo encontrado en índice: \", pos\n    Sino\n        Escribir \"Objetivo no encontrado.\"\n    FinSi\nFinAlgoritmo",
        "explanation": "Requiere que la colección esté ordenada. En cada paso calcula el punto medio 'medio'. Si el objetivo es mayor, descarta la mitad inferior; si es menor, descarta la superior. Reduce el espacio a la mitad en cada ciclo: O(log n).",
        "keyConcepts": [
          "Colección ordenada obligatoria",
          "Bisección por punto medio",
          "Descarte del 50% del espacio por ciclo"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Binaria (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio BinarySearch(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "bajo <- 1, alto <- n"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿bajo <= alto?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "medio <- Trunc((bajo + alto) / 2)"
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
              "text": "bajo <- medio + 1"
            },
            {
              "id": 8,
              "type": "process",
              "text": "alto <- medio - 1"
            },
            {
              "id": 9,
              "type": "end",
              "text": "Fin: Retornar medio (Match) o -1"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef binary_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda Binaria: O(log n) garantizado en arreglos ordenados.\"\"\"\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        # Previene desbordamiento aritmético en enteros grandes\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [3, 9, 10, 27, 38, 43, 50, 82, 95]\n    objetivo = 43\n    print(f\"Target {objetivo} en índice: {binary_search(datos, objetivo)}\")",
        "explanation": "Calcula el índice medio mediante 'low + (high - low) // 2' para prevenir desbordamientos aritméticos. Es capaz de encontrar un registro entre mil millones de elementos en tan solo 30 comparaciones.",
        "keyConcepts": [
          "Fórmula anti-overflow (low + (high-low)//2)",
          "División logarítmica",
          "Rendimiento O(log n) masivo"
        ],
        "terminalOutput": [
          "$ python -u binary_search.py",
          "[+] Colección Ordenada: [3, 9, 10, 27, 38, 43, 50, 82, 95] (n=9)",
          "[*] Paso 1: Rango [0..8], Mid=4 (38) < 43 -> Descartar mitad izquierda",
          "[*] Paso 2: Rango [5..8], Mid=6 (50) > 43 -> Descartar mitad derecha",
          "[*] Paso 3: Rango [5..5], Mid=5 (43) == 43 [MATCH]",
          "[✓] Encontrado en índice 5 en solo 3 evaluaciones."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function binarySearchWeb(arr, target) {\n  let low = 0, high = arr.length - 1;\n  while (low <= high) {\n    let mid = Math.floor((low + high) / 2);\n    highlightWindow(low, mid, high);\n    await sleep(200);\n    if (arr[mid] === target) {\n      markFound(mid);\n      return mid;\n    }\n    if (arr[mid] < target) {\n      dimRange(low, mid);\n      low = mid + 1;\n    } else {\n      dimRange(mid, high);\n      high = mid - 1;\n    }\n  }\n  return -1;\n}",
        "explanation": "Dibuja un visor de rango activo que oscurece dinámicamente las mitades descartadas y resalta con una flecha el punto medio examinado.",
        "keyConcepts": [
          "Atenuación visual de mitades descartadas",
          "Indicador flotante de Low, Mid y High",
          "Transición logarítmica"
        ],
        "demoData": [
          3,
          9,
          10,
          27,
          38,
          43,
          50,
          82,
          95
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Searching;\n\npublic static class BinarySearch\n{\n    public static int Search<T>(ReadOnlySpan<T> span, T target) where T : IComparable<T>\n    {\n        int low = 0, high = span.Length - 1;\n        while (low <= high)\n        {\n            int mid = low + ((high - low) >> 1); // Desplazamiento de bits\n            int comparison = span[mid].CompareTo(target);\n\n            if (comparison == 0) return mid;\n            if (comparison < 0) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n}",
        "explanation": "Utiliza un desplazamiento binario de bits '>> 1' para una división ultra veloz por 2 a nivel de microinstrucción de hardware, eliminando divisiones enteras costosas.",
        "keyConcepts": [
          "Bit shift '>> 1'",
          "ReadOnlySpan<T> y cero GC",
          "Uso de CompareTo"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(log n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Instrucción SAR (Shift Arithmetic Right)"
        }
      }
    }
  },
  "ternary_search": {
    "name": "Búsqueda Ternaria (Trisección del Espacio)",
    "category": "search",
    "bigO": "O(log₃ n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo BusquedaTernaria\n    Dimension arr[9]\n    n <- 9\n    arr[1] <- 2; arr[2] <- 5; arr[3] <- 8; arr[4] <- 12; arr[5] <- 16; arr[6] <- 23; arr[7] <- 38; arr[8] <- 56; arr[9] <- 72\n    objetivo <- 23\n    bajo <- 1; alto <- n; pos <- -1\n\n    Mientras bajo <= alto Y pos == -1 Hacer\n        mid1 <- bajo + Trunc((alto - bajo) / 3)\n        mid2 <- alto - Trunc((alto - bajo) / 3)\n\n        Si arr[mid1] == objetivo Entonces pos <- mid1; FinSi\n        Si arr[mid2] == objetivo Entonces pos <- mid2; FinSi\n\n        Si pos == -1 Entonces\n            Si objetivo < arr[mid1] Entonces\n                alto <- mid1 - 1\n            Sino\n                Si objetivo > arr[mid2] Entonces\n                    bajo <- mid2 + 1\n                Sino\n                    bajo <- mid1 + 1\n                    alto <- mid2 - 1\n                FinSi\n            FinSi\n        FinSi\n    FinMientras\n\n    Escribir \"Objetivo en índice: \", pos\nFinAlgoritmo",
        "explanation": "Divide el espacio de búsqueda en tres segmentos equivalentes mediante dos puntos de partición (mid1 y mid2). En cada iteración descarta dos tercios del espacio, reduciendo con base logarítmica 3.",
        "keyConcepts": [
          "Trisección del espacio",
          "Dos pivotes (mid1 y mid2)",
          "Descarte de 2/3 del conjunto"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Ternaria (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio TernarySearch(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "mid1 <- l + (r-l)/3, mid2 <- r - (r-l)/3"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿target == arr[mid1] O target == arr[mid2]?"
            },
            {
              "id": 4,
              "type": "decision",
              "text": "¿target < arr[mid1]?"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿target > arr[mid2]?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "Ajustar tercio medio: l <- mid1+1, r <- mid2-1"
            },
            {
              "id": 7,
              "type": "end",
              "text": "Fin: Match encontrado"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef ternary_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda Ternaria: divide el rango en 3 segmentos en O(log3 n).\"\"\"\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid1 = low + (high - low) // 3\n        mid2 = high - (high - low) // 3\n\n        if arr[mid1] == target: return mid1\n        if arr[mid2] == target: return mid2\n\n        if target < arr[mid1]:\n            high = mid1 - 1\n        elif target > arr[mid2]:\n            low = mid2 + 1\n        else:\n            low = mid1 + 1\n            high = mid2 - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [2, 5, 8, 12, 16, 23, 38, 56, 72]\n    print(f\"Target 23 en índice: {ternary_search(datos, 23)}\")",
        "explanation": "Muy popular en optimización de funciones unimodales (encontrar máximos o mínimos locales de curvas sin derivadas) además de la búsqueda en arreglos indexados.",
        "keyConcepts": [
          "Optimización unimodal",
          "Base logarítmica 3",
          "Evaluación simultánea de 2 centros"
        ],
        "terminalOutput": [
          "$ python -u ternary_search.py",
          "[+] Entrada: [2, 5, 8, 12, 16, 23, 38, 56, 72] (n=9)",
          "[*] Mid1 = arr[2] (8), Mid2 = arr[6] (38)",
          "[*] Target 23 está entre 8 y 38 -> Descartar extremos",
          "[*] Nuevo rango reducido al tercio central [3..5]",
          "[✓] Match exacto en arr[5] = 23"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function ternarySearchWeb(arr, target) {\n  let low = 0, high = arr.length - 1;\n  while (low <= high) {\n    let mid1 = low + Math.floor((high - low) / 3);\n    let mid2 = high - Math.floor((high - low) / 3);\n    highlightTernary(low, mid1, mid2, high);\n    await sleep(220);\n    if (arr[mid1] === target) return mid1;\n    if (arr[mid2] === target) return mid2;\n    if (target < arr[mid1]) high = mid1 - 1;\n    else if (target > arr[mid2]) low = mid2 + 1;\n    else { low = mid1 + 1; high = mid2 - 1; }\n  }\n}",
        "explanation": "La visualización resalta dos columnas simultáneas (mid1 en Amarillo y mid2 en Naranja) y apaga de golpe dos tercios del canvas.",
        "keyConcepts": [
          "Doble cursor simultáneo",
          "Trisección visual",
          "Atenuación agresiva del 66%"
        ],
        "demoData": [
          2,
          5,
          8,
          12,
          16,
          23,
          38,
          56,
          72
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Searching;\n\npublic static class TernarySearch\n{\n    public static int Search<T>(ReadOnlySpan<T> span, T target) where T : IComparable<T>\n    {\n        int low = 0, high = span.Length - 1;\n        while (low <= high)\n        {\n            int third = (high - low) / 3;\n            int mid1 = low + third;\n            int mid2 = high - third;\n\n            if (span[mid1].CompareTo(target) == 0) return mid1;\n            if (span[mid2].CompareTo(target) == 0) return mid2;\n\n            if (target.CompareTo(span[mid1]) < 0) high = mid1 - 1;\n            else if (target.CompareTo(span[mid2]) > 0) low = mid2 + 1;\n            else { low = mid1 + 1; high = mid2 - 1; }\n        }\n        return -1;\n    }\n}",
        "explanation": "Aunque hace más comparaciones por iteración que Binary Search (4 vs 2), Ternary Search reduce los saltos de memoria totales en un tercio.",
        "keyConcepts": [
          "Menos iteraciones totales",
          "Branch prediction optimizado",
          "ReadOnlySpan<T>"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(log₃ n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Registros CPU para mid1 y mid2"
        }
      }
    }
  },
  "jump_search": {
    "name": "Jump Search (Búsqueda por Salto de Bloques)",
    "category": "search",
    "bigO": "O(√n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo BusquedaPorSalto\n    Dimension arr[9]\n    n <- 9\n    arr[1] <- 0; arr[2] <- 1; arr[3] <- 1; arr[4] <- 2; arr[5] <- 3; arr[6] <- 5; arr[7] <- 8; arr[8] <- 13; arr[9] <- 21\n    objetivo <- 8\n    paso <- Trunc(rc(n)) // Salto óptimo raíz de n\n    prev <- 1\n\n    Mientras arr[min(paso, n)] < objetivo Hacer\n        prev <- paso\n        paso <- paso + Trunc(rc(n))\n        Si prev >= n Entonces\n            Escribir \"No encontrado\"; Salir\n        FinSi\n    FinMientras\n\n    // Búsqueda lineal en el bloque acotado\n    Mientras arr[prev] < objetivo Hacer\n        prev <- prev + 1\n        Si prev == min(paso, n) + 1 Entonces Salir; FinSi\n    FinMientras\n\n    Si arr[prev] == objetivo Entonces\n        Escribir \"Objetivo encontrado en índice: \", prev\n    FinSi\nFinAlgoritmo",
        "explanation": "Avanza a grandes zancadas de longitud fija m = √n hasta encontrar un elemento mayor que el objetivo. En ese momento retrocede al inicio de dicho bloque y realiza una búsqueda lineal corta dentro de él.",
        "keyConcepts": [
          "Paso óptimo raíz cuadrada (√n)",
          "Salto de bloques consecutivos",
          "Barrido lineal corto acotado"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Jump Search (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio JumpSearch(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "step <- Trunc(sqrt(n)), prev <- 0"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿arr[min(step, n)-1] < target?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "prev <- step, step <- step + sqrt(n)"
            },
            {
              "id": 5,
              "type": "process",
              "text": "Barrido lineal desde prev hasta step"
            },
            {
              "id": 6,
              "type": "end",
              "text": "Fin: Retornar índice"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "import math\nfrom typing import List, Optional\n\ndef jump_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Jump Search: Salta bloques de tamaño √n en O(√n).\"\"\"\n    n = len(arr)\n    step = int(math.sqrt(n))\n    prev = 0\n\n    while arr[min(step, n) - 1] < target:\n        prev = step\n        step += int(math.sqrt(n))\n        if prev >= n:\n            return None\n\n    for i in range(prev, min(step, n)):\n        if arr[i] == target:\n            return i\n    return None\n\nif __name__ == '__main__':\n    datos = [0, 1, 1, 2, 3, 5, 8, 13, 21]\n    print(f\"Target 8 en índice: {jump_search(datos, 8)}\")",
        "explanation": "Mejor opción que Binary Search cuando el salto hacia atrás es costoso en el medio físico (sistemas de almacenamiento magnético o cintas donde el rebobinado consume energía o tiempo).",
        "keyConcepts": [
          "Paso óptimo m = int(sqrt(n))",
          "Solo requiere un retroceso",
          "Eficiente en dispositivos de acceso secuencial"
        ],
        "terminalOutput": [
          "$ python -u jump_search.py",
          "[+] Arreglo Ordenado: [0, 1, 1, 2, 3, 5, 8, 13, 21] (n=9, √n=3)",
          "[*] Salto a bloque [2] (1) < 8 -> Avanzar",
          "[*] Salto a bloque [5] (5) < 8 -> Avanzar",
          "[*] Salto a bloque [8] (21) > 8 -> ¡Bloque delimitado [6..8]!",
          "[*] Búsqueda lineal en sub-bloque: arr[6] == 8 [MATCH]",
          "[✓] Encontrado en índice 6."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function jumpSearchWeb(arr, target) {\n  let n = arr.length;\n  let step = Math.floor(Math.sqrt(n));\n  let prev = 0;\n  while (arr[Math.min(step, n) - 1] < target) {\n    highlightJump(Math.min(step, n) - 1);\n    await sleep(200);\n    prev = step;\n    step += Math.floor(Math.sqrt(n));\n    if (prev >= n) return -1;\n  }\n  for (let i = prev; i < Math.min(step, n); i++) {\n    highlightLinearInspect(i);\n    await sleep(150);\n    if (arr[i] === target) return i;\n  }\n}",
        "explanation": "El componente web muestra una flecha de salto que sobrevuela 3 columnas a la vez, encendiendo un marco sobre el bloque delimitado antes de inspeccionar secuencialmente.",
        "keyConcepts": [
          "Visualización de zancada por arco",
          "Delimitación de bloque con marco",
          "Barrido local"
        ],
        "demoData": [
          0,
          1,
          1,
          2,
          3,
          5,
          8,
          13,
          21
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Searching;\n\npublic static class JumpSearch\n{\n    public static int Search<T>(ReadOnlySpan<T> span, T target) where T : IComparable<T>\n    {\n        int n = span.Length;\n        int step = (int)Math.Sqrt(n);\n        int prev = 0;\n\n        while (span[Math.Min(step, n) - 1].CompareTo(target) < 0)\n        {\n            prev = step;\n            step += (int)Math.Sqrt(n);\n            if (prev >= n) return -1;\n        }\n\n        for (int i = prev; i < Math.Min(step, n); i++)\n        {\n            if (span[i].CompareTo(target) == 0) return i;\n        }\n        return -1;\n    }\n}",
        "explanation": "Utiliza Math.Sqrt intrínseco del procesador, calculando el tamaño del salto en un único ciclo de CPU mediante instrucciones de punto flotante de hardware.",
        "keyConcepts": [
          "Math.Sqrt acelerado por hardware",
          "ReadOnlySpan<T>",
          "Cero copias de arreglos"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(√n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Instrucción SQRTSS x86/ARM"
        }
      }
    }
  },
  "interpolation_search": {
    "name": "Búsqueda por Interpolación (Sondeo Proporcional)",
    "category": "search",
    "bigO": "O(log log n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo BusquedaInterpolacion\n    Dimension arr[9]\n    n <- 9\n    arr[1] <- 10; arr[2] <- 20; arr[3] <- 30; arr[4] <- 40; arr[5] <- 50; arr[6] <- 60; arr[7] <- 70; arr[8] <- 80; arr[9] <- 90\n    objetivo <- 70\n    bajo <- 1; alto <- n; pos <- -1\n\n    Mientras bajo <= alto Y objetivo >= arr[bajo] Y objetivo <= arr[alto] Y pos == -1 Hacer\n        Si bajo == alto Entonces\n            Si arr[bajo] == objetivo Entonces pos <- bajo; FinSi\n        Sino\n            // Fórmula matemática de interpolación lineal\n            fraccion <- (objetivo - arr[bajo]) / (arr[alto] - arr[bajo])\n            pivote <- bajo + Trunc(fraccion * (alto - bajo))\n\n            Si arr[pivote] == objetivo Entonces\n                pos <- pivote\n            Sino\n                Si arr[pivote] < objetivo Entonces\n                    bajo <- pivote + 1\n                Sino\n                    alto <- pivote - 1\n                FinSi\n            FinSi\n        FinSi\n    FinMientras\n\n    Escribir \"Objetivo encontrado en índice: \", pos\nFinAlgoritmo",
        "explanation": "Emula cómo un ser humano busca en una guía telefónica: si buscamos la letra 'Z', no abrimos el libro a la mitad, sino casi al final. Calcula la posición probable interpolando los valores numéricos extremos.",
        "keyConcepts": [
          "Analogía del diccionario o directorio",
          "Fórmula de interpolación lineal",
          "Complejidad casi instantánea O(log log n)"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda por Interpolación (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio InterpolationSearch(arr, target)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "pos = low + ((target-arr[low])*(high-low))/(arr[high]-arr[low])"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿arr[pos] == target?"
            },
            {
              "id": 4,
              "type": "decision",
              "text": "¿arr[pos] < target?"
            },
            {
              "id": 5,
              "type": "process",
              "text": "low <- pos + 1"
            },
            {
              "id": 6,
              "type": "process",
              "text": "high <- pos - 1"
            },
            {
              "id": 7,
              "type": "end",
              "text": "Fin: Retornar pos"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef interpolation_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda por Interpolación: O(log log n) para datos distribuidos uniformemente.\"\"\"\n    low, high = 0, len(arr) - 1\n    while low <= high and target >= arr[low] and target <= arr[high]:\n        if low == high:\n            return low if arr[low] == target else None\n\n        # Estimación proporcional de la posición\n        pos = low + int(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))\n\n        if arr[pos] == target:\n            return pos\n        if arr[pos] < target:\n            low = pos + 1\n        else:\n            high = pos - 1\n    return None\n\nif __name__ == '__main__':\n    datos = [10, 20, 30, 40, 50, 60, 70, 80, 90]\n    print(f\"Target 70 en índice: {interpolation_search(datos, 70)}\")",
        "explanation": "Si la distribución de los datos es uniforme (como números de serie consecutivos o IDs autoincrementales), encuentra el elemento en tiempo O(log log n), lo que para mil millones de registros representa solo 2 a 4 pasos.",
        "keyConcepts": [
          "Distribución uniforme requerida",
          "Pendiente matemática de sondeo",
          "Velocidad O(log log n)"
        ],
        "terminalOutput": [
          "$ python -u interpolation_search.py",
          "[+] Arreglo Uniforme: [10, 20, 30, 40, 50, 60, 70, 80, 90]",
          "[*] Fórmula calculada: pos = 0 + int((70 - 10) * 8 / (90 - 10)) = 6",
          "[*] Sondeo directo en índice 6: arr[6] == 70 [MATCH DIRECTO]",
          "[✓] Localizado en un solo intento exacto."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function interpolationSearchWeb(arr, target) {\n  let low = 0, high = arr.length - 1;\n  while (low <= high && target >= arr[low] && target <= arr[high]) {\n    let fraction = (target - arr[low]) / (arr[high] - arr[low]);\n    let pos = low + Math.floor(fraction * (high - low));\n    highlightProbe(pos, fraction);\n    await sleep(250);\n    if (arr[pos] === target) return pos;\n    if (arr[pos] < target) low = pos + 1;\n    else high = pos - 1;\n  }\n}",
        "explanation": "El componente web dibuja una recta de interpolación visual que conecta el punto inferior y superior, apuntando directamente a la barra estimada.",
        "keyConcepts": [
          "Línea de interpolación geométrica",
          "Sondeo predictivo",
          "Localización acelerada"
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
          90
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Searching;\n\npublic static class InterpolationSearch\n{\n    public static int Search(ReadOnlySpan<int> span, int target)\n    {\n        int low = 0, high = span.Length - 1;\n        while (low <= high && target >= span[low] && target <= span[high])\n        {\n            if (low == high) return span[low] == target ? low : -1;\n\n            long numerator = (long)(target - span[low]) * (high - low);\n            int denominator = span[high] - span[low];\n            int pos = low + (int)(numerator / denominator);\n\n            if (span[pos] == target) return pos;\n            if (span[pos] < target) low = pos + 1;\n            else high = pos - 1;\n        }\n        return -1;\n    }\n}",
        "explanation": "Utiliza aritmética en enteros de 64 bits ('long numerator') para prevenir desbordamientos aritméticos al multiplicar grandes diferencias de índices por diferencias de valores.",
        "keyConcepts": [
          "Aritmética de 64 bits para numeradores",
          "ReadOnlySpan<int>",
          "Cero asignación"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(n) / O(log log n) uniforme",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Registros enteros RAX de 64 bits"
        }
      }
    }
  },
  "exponential_search": {
    "name": "Búsqueda Exponencial (Duplicación de Rango)",
    "category": "search",
    "bigO": "O(log n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo BusquedaExponencial\n    Dimension arr[9]\n    n <- 9\n    arr[1] <- 2; arr[2] <- 3; arr[3] <- 4; arr[4] <- 10; arr[5] <- 40; arr[6] <- 45; arr[7] <- 50; arr[8] <- 80; arr[9] <- 100\n    objetivo <- 45\n\n    Si arr[1] == objetivo Entonces\n        Escribir \"Encontrado en índice 1\"; Salir\n    FinSi\n\n    i <- 1\n    Mientras i < n Y arr[min(i, n)] <= objetivo Hacer\n        i <- i * 2 // Crecimiento exponencial en potencias de 2\n    FinMientras\n\n    // Búsqueda binaria en el rango acotado [i/2 .. min(i, n)]\n    bajo <- Trunc(i / 2)\n    alto <- min(i, n)\n    pos <- -1\n    Mientras bajo <= alto Y pos == -1 Hacer\n        mid <- Trunc((bajo + alto) / 2)\n        Si arr[mid] == objetivo Entonces pos <- mid\n        Sino\n            Si arr[mid] < objetivo Entonces bajo <- mid + 1 Sino alto <- mid - 1; FinSi\n        FinSi\n    FinMientras\n\n    Escribir \"Objetivo encontrado en índice: \", pos\nFinAlgoritmo",
        "explanation": "Encuentra el rango donde se ubica el elemento multiplicando por 2 la posición en cada salto: 1, 2, 4, 8, 16... Una vez acotado el límite superior, aplica búsqueda binaria clásica dentro de ese intervalo.",
        "keyConcepts": [
          "Potencias de dos (2^k)",
          "Ideal para flujos de datos o arreglos ilimitados",
          "Búsqueda binaria confinada"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: Búsqueda Exponencial (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio ExponentialSearch(arr, target)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿arr[0] == target?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "i <- 1"
            },
            {
              "id": 4,
              "type": "decision",
              "text": "¿i < n Y arr[i] <= target?"
            },
            {
              "id": 5,
              "type": "process",
              "text": "i <- i * 2"
            },
            {
              "id": 6,
              "type": "process",
              "text": "BinarySearch(arr, i/2, min(i, n-1))"
            },
            {
              "id": 7,
              "type": "end",
              "text": "Fin"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Optional\n\ndef binary_search_window(arr: List[int], target: int, low: int, high: int) -> Optional[int]:\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return None\n\ndef exponential_search(arr: List[int], target: int) -> Optional[int]:\n    \"\"\"Búsqueda Exponencial: O(log i) óptimo para streaming o arreglos ilimitados.\"\"\"\n    if not arr: return None\n    if arr[0] == target: return 0\n\n    i = 1\n    n = len(arr)\n    while i < n and arr[i] <= target:\n        i *= 2\n\n    return binary_search_window(arr, target, i // 2, min(i, n - 1))\n\nif __name__ == '__main__':\n    datos = [2, 3, 4, 10, 40, 45, 50, 80, 100]\n    print(f\"Target 45 en índice: {exponential_search(datos, 45)}\")",
        "explanation": "El estándar de oro para buscar en flujos continuos de datos en streaming o colecciones ilimitadas donde no se conoce el tamaño total 'n' por anticipado y el elemento suele estar cerca del inicio.",
        "keyConcepts": [
          "Flujos de streaming ilimitados",
          "Complejidad O(log i) proporcional a la posición",
          "Duplicación de índice con bitshift i << 1"
        ],
        "terminalOutput": [
          "$ python -u exponential_search.py",
          "[+] Dataset Entrada: [2, 3, 4, 10, 40, 45, 50, 80, 100]",
          "[*] Salto i=1 (arr[1]=3) <= 45",
          "[*] Salto i=2 (arr[2]=4) <= 45",
          "[*] Salto i=4 (arr[4]=40) <= 45",
          "[*] Salto i=8 (arr[8]=100) > 45 -> ¡Límite acotado en [4..8]!",
          "[*] Búsqueda binaria en sub-rango [4..8] -> Match en arr[5]=45",
          "[✓] Encontrado exitosamente."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "async function exponentialSearchWeb(arr, target) {\n  if (arr[0] === target) return 0;\n  let i = 1, n = arr.length;\n  while (i < n && arr[i] <= target) {\n    highlightExpStep(i);\n    await sleep(200);\n    i *= 2;\n  }\n  return await binarySearchWindowWeb(arr, target, Math.floor(i / 2), Math.min(i, n - 1));\n}",
        "explanation": "Muestra visualmente cómo el salto se duplica geométricamente (1, 2, 4, 8) expandiendo el foco de visión hasta encender la ventana binaria final.",
        "keyConcepts": [
          "Salto geométrico exponencial",
          "Transición a subventana binaria",
          "Animación progresiva"
        ],
        "demoData": [
          2,
          3,
          4,
          10,
          40,
          45,
          50,
          80,
          100
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Searching;\n\npublic static class ExponentialSearch\n{\n    public static int Search<T>(ReadOnlySpan<T> span, T target) where T : IComparable<T>\n    {\n        if (span.IsEmpty) return -1;\n        if (span[0].CompareTo(target) == 0) return 0;\n\n        int i = 1;\n        int n = span.Length;\n        while (i < n && span[i].CompareTo(target) <= 0)\n        {\n            i <<= 1; // Duplicación mediante bit-shift\n        }\n\n        int low = i >> 1;\n        int high = Math.Min(i, n - 1);\n        return BinarySearch.Search(span[low..(high + 1)], target) is int res and >= 0 ? low + res : -1;\n    }\n}",
        "explanation": "El desplazamiento a la izquierda 'i <<= 1' multiplica por 2 en un solo ciclo de CPU sin instrucciones de multiplicación en el procesador.",
        "keyConcepts": [
          "Bit-shift i <<= 1",
          "Slice de Span span[low..(high+1)]",
          "Cero Garbage Collection"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(log i)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Instrucción SHL (Shift Left) en CPU"
        }
      }
    }
  },
  "complexity_o1": {
    "name": "O(1) Complejidad Constante (Acceso Directo)",
    "category": "complexity",
    "bigO": "O(1)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo ComplejidadConstante\n    Dimension tablaHash[100]\n    tablaHash[42] <- 999 // Asignación O(1)\n    \n    // Acceso directo indexado por puntero\n    indice <- 42\n    valor <- tablaHash[indice] // Tiempo de respuesta independiente de n\n    \n    Escribir \"Valor obtenido en tiempo constante: \", valor\nFinAlgoritmo",
        "explanation": "El tiempo de ejecución es estrictamente independiente del tamaño n. Una tabla hash, un cálculo aritmético directo o indexar un arreglo toma exactamente el mismo tiempo con 10 o con 10 millones de elementos.",
        "keyConcepts": [
          "Independencia total del tamaño n",
          "Acceso directo a dirección de memoria",
          "Tiempo ideal en informática"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(1) Constante (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio AccesoConstante(arr, index)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "direccion = base + (index * tam_elemento)"
            },
            {
              "id": 3,
              "type": "process",
              "text": "valor = Memoria[direccion]"
            },
            {
              "id": 4,
              "type": "end",
              "text": "Fin: Retornar valor en 1 ciclo"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import Dict, Any\n\ndef get_constant_time(data_map: Dict[str, Any], key: str) -> Any:\n    \"\"\"Acceso a tabla Hash: O(1) promedio mediante cálculo de hash.\"\"\"\n    return data_map.get(key, None)\n\nif __name__ == '__main__':\n    tabla = {f\"usr_{i}\": f\"data_{i}\" for i in range(1_000_000)}\n    print(f\"Búsqueda O(1) entre 1 millón de elementos: {get_constant_time(tabla, 'usr_500000')}\")",
        "explanation": "Los diccionarios y conjuntos en Python implementan tablas Hash optimizadas en C que resuelven colisiones y consultan en tiempo constante O(1).",
        "keyConcepts": [
          "Tablas Hash en CPython",
          "Hash computation O(1)",
          "Lookup instantáneo"
        ],
        "terminalOutput": [
          "$ python -u complexity_o1.py",
          "[+] Diccionario inicializado con 1,000,000 de registros.",
          "[*] Consulta Hash('usr_500000') calculada en 18 nanosegundos.",
          "[✓] Resultado: 'data_500000' obtenido instantáneamente."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "const userCache = new Map();\nfunction getUser(id) {\n  // Map.get() en JavaScript V8 opera en O(1) constante\n  return userCache.get(id);\n}",
        "explanation": "La estructura 'Map' de JavaScript en el motor V8 utiliza almacenamiento contiguo indexado por hash para lograr accesos y escrituras en tiempo constante.",
        "keyConcepts": [
          "JavaScript Map & Set",
          "Motor V8 Hash Table",
          "Cero bucles iterativos"
        ],
        "demoData": [
          10,
          20,
          30,
          40,
          50
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System.Collections.Frozen;\n\nnamespace AlgoMatrix3D.Complexity;\n\npublic static class ConstantLookup\n{\n    // FrozenDictionary en .NET 9 compila a una tabla perfecta sin colisiones\n    public static FrozenDictionary<int, string> Cache = new Dictionary<int, string>\n    {\n        [1] = \"Administrador\",\n        [2] = \"Auditor\",\n        [3] = \"Operador\"\n    }.ToFrozenDictionary();\n\n    public static string? GetRole(int id) => Cache.GetValueOrDefault(id);\n}",
        "explanation": "En .NET 9, 'FrozenDictionary' genera un mapa inmutable optimizado en tiempo de compilación con acceso O(1) directo a memoria sin contención de hilos.",
        "keyConcepts": [
          "FrozenDictionary de .NET 9",
          "Hash perfecto sin colisiones",
          "Thread-safe sin bloqueos"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(1)",
          "complexityWorst": "O(1)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Instrucción MOV directa a dirección calculada"
        }
      }
    }
  },
  "complexity_linear": {
    "name": "O(n) Complejidad Lineal (Recorrido Acumulativo)",
    "category": "complexity",
    "bigO": "O(n)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo RecorridoLineal\n    Dimension arr[5]\n    arr[1] <- 10; arr[2] <- 20; arr[3] <- 30; arr[4] <- 40; arr[5] <- 50\n    suma <- 0\n    Para i <- 1 Hasta 5 Con Paso 1 Hacer\n        suma <- suma + arr[i] // 1 operación por cada elemento n\n    FinPara\n    Escribir \"Suma total acumulada: \", suma\nFinAlgoritmo",
        "explanation": "El tiempo de cómputo crece en proporción directa de 1 a 1 con respecto a la cantidad de elementos n. Si duplicamos n, el tiempo se duplica exactamente.",
        "keyConcepts": [
          "Un solo bucle iterativo",
          "Escalabilidad proporcional 1:1",
          "Acumulación y conteo"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n) Lineal (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio RecorridoLineal(arr, n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "suma <- 0, i <- 1"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "suma <- suma + arr[i]; i <- i + 1"
            },
            {
              "id": 5,
              "type": "end",
              "text": "Fin: Retornar suma"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef sum_array(arr: List[int]) -> int:\n    \"\"\"Recorrido lineal O(n): exactamente n operaciones de suma.\"\"\"\n    total = 0\n    for x in arr:\n        total += x\n    return total\n\nif __name__ == '__main__':\n    datos = list(range(1, 101))\n    print(f\"Suma O(n) de 1 a 100: {sum_array(datos)}\")",
        "explanation": "Un ciclo 'for' estándar recorre una sola vez la secuencia completa, realizando un número de instrucciones directamente proporcional a la longitud n.",
        "keyConcepts": [
          "Iterador directo",
          "Complejidad lineal O(n)",
          "Zero overhead"
        ],
        "terminalOutput": [
          "$ python -u complexity_linear.py",
          "[+] Procesando lista de n=100 elementos.",
          "[✓] 100 iteraciones completadas -> Suma = 5050"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "function calculateAverage(arr) {\n  // reduce() ejecuta una sola pasada O(n)\n  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;\n}",
        "explanation": "El método 'reduce' de Array en JavaScript realiza exactamente n invocaciones de la función reductora.",
        "keyConcepts": [
          "Array.prototype.reduce",
          "Procesamiento de stream O(n)",
          "Funciones puras"
        ],
        "demoData": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System.Numerics;\n\nnamespace AlgoMatrix3D.Complexity;\n\npublic static class LinearAccumulator\n{\n    public static long Sum(ReadOnlySpan<int> numbers)\n    {\n        long total = 0;\n        foreach (int val in numbers) total += val;\n        return total;\n    }\n}",
        "explanation": "En .NET 9 el compilador JIT desenrolla automáticamente bucles O(n) sobre Span (Loop Unrolling) procesando 4 u 8 elementos por instrucción.",
        "keyConcepts": [
          "Loop Unrolling por compilador JIT",
          "ReadOnlySpan<int>",
          "Optimización SIMD"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n)",
          "complexityWorst": "O(n)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Registro acumulador RDX"
        }
      }
    }
  },
  "complexity_n2": {
    "name": "O(n²) Complejidad Cuadrática (Comparación Matriz)",
    "category": "complexity",
    "bigO": "O(n²)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo ComplejidadCuadratica\n    Dimension matriz[4, 4]\n    n <- 4\n    operaciones <- 0\n    Para i <- 1 Hasta n Con Paso 1 Hacer\n        Para j <- 1 Hasta n Con Paso 1 Hacer\n            matriz[i, j] <- i * j\n            operaciones <- operaciones + 1 // n x n iteraciones\n        FinPara\n    FinPara\n    Escribir \"Total de operaciones para n=\", n, \": \", operaciones\nFinAlgoritmo",
        "explanation": "Se genera cuando un bucle está anidado dentro de otro bucle que también itera hasta n. Si n=1000, requiere 1 millón de operaciones; si n se duplica, el tiempo se multiplica por 4.",
        "keyConcepts": [
          "Dos bucles anidados",
          "Crecimiento cuadrático n²",
          "Peligro de degradación con n grande"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n²) Cuadrático (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio MatrizNxN(n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "i <- 1"
            },
            {
              "id": 3,
              "type": "decision",
              "text": "¿i <= n?"
            },
            {
              "id": 4,
              "type": "process",
              "text": "j <- 1"
            },
            {
              "id": 5,
              "type": "decision",
              "text": "¿j <= n?"
            },
            {
              "id": 6,
              "type": "process",
              "text": "op(i, j); j <- j + 1"
            },
            {
              "id": 7,
              "type": "process",
              "text": "i <- i + 1"
            },
            {
              "id": 8,
              "type": "end",
              "text": "Fin: n² operaciones"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List, Tuple\n\ndef find_duplicate_pairs(arr: List[int]) -> List[Tuple[int, int]]:\n    \"\"\"Compara todos contra todos en O(n^2).\"\"\"\n    pairs = []\n    n = len(arr)\n    for i in range(n):\n        for j in range(i + 1, n):\n            if arr[i] == arr[j]:\n                pairs.append((i, j))\n    return pairs\n\nif __name__ == '__main__':\n    datos = [1, 2, 3, 2, 4, 1]\n    print(f\"Pares duplicados: {find_duplicate_pairs(datos)}\")",
        "explanation": "El patrón clásico de comparar todos los elementos contra todos los demás ('All-Pairs Comparison'). Debe evitarse en producción para colecciones masivas mediante tablas Hash.",
        "keyConcepts": [
          "Comparación todos contra todos",
          "Bucles anidados i y j",
          "Antipatrón evitable con Hash"
        ],
        "terminalOutput": [
          "$ python -u complexity_n2.py",
          "[+] Dataset de entrada: n = 6 elementos",
          "[*] n * (n - 1) / 2 = 15 comparaciones evaluadas.",
          "[✓] Duplicados detectados en índices (0, 5) y (1, 3)."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "function buildMultiplicationTable(n) {\n  let table = [];\n  for (let r = 1; r <= n; r++) {\n    let row = [];\n    for (let c = 1; c <= n; c++) {\n      row.push(r * c);\n    }\n    table.push(row);\n  }\n  return table;\n}",
        "explanation": "La construcción de cuadrículas y tablas de doble entrada es el ejemplo canónico de tiempo cuadrático O(n²).",
        "keyConcepts": [
          "Cuadrícula bidimensional",
          "Filas y columnas sincronizadas",
          "Matriz n x n"
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
        "code": "namespace AlgoMatrix3D.Complexity;\n\npublic static class QuadraticMatrix\n{\n    public static int CountCommonPairs(ReadOnlySpan<int> a, ReadOnlySpan<int> b)\n    {\n        int matches = 0;\n        foreach (int x in a)\n        {\n            foreach (int y in b)\n            {\n                if (x == y) matches++;\n            }\n        }\n        return matches;\n    }\n}",
        "explanation": "El cruce de dos colecciones sin indexar produce una explosión cuadrática O(a.Length * b.Length) que debe advertirse en auditorías de código.",
        "keyConcepts": [
          "Producto cartesiano",
          "Alerta de rendimiento en QA",
          "Refactorización a HashSet recomendada"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes",
          "complexityBest": "O(n²)",
          "complexityWorst": "O(n²)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Registros de bucle RCX y RDX"
        }
      }
    }
  },
  "complexity_n3": {
    "name": "O(n³) Complejidad Cúbica (Triple Bucle)",
    "category": "complexity",
    "bigO": "O(n³)",
    "space": "O(1)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "Algoritmo ComplejidadCubica\n    Dimension C[3, 3]\n    n <- 3\n    // Multiplicación de matrices tradicional (Triple Bucle)\n    Para i <- 1 Hasta n Hacer\n        Para j <- 1 Hasta n Hacer\n            suma <- 0\n            Para k <- 1 Hasta n Hacer\n                suma <- suma + (i * k) // Simulación C[i,j] = sum(A[i,k] * B[k,j])\n            FinPara\n            C[i, j] <- suma\n        FinPara\n    FinPara\n    Escribir \"Multiplicación de matrices completada en n^3 pasos.\"\nFinAlgoritmo",
        "explanation": "Tres bucles profundamente anidados. Con n=100 se requieren 1 millón de operaciones; con n=1000 se alcanzan mil millones de ciclos. Es el coste de la multiplicación tradicional de matrices o el algoritmo de Floyd-Warshall.",
        "keyConcepts": [
          "Tres bucles anidados i, j, k",
          "Multiplicación de matrices estándar",
          "Inviable para n grande"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n³) Cúbico (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio TripleBucle(n)"
            },
            {
              "id": 2,
              "type": "process",
              "text": "Para i <- 1 Hasta n"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Para j <- 1 Hasta n"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Para k <- 1 Hasta n"
            },
            {
              "id": 5,
              "type": "process",
              "text": "op(i, j, k)"
            },
            {
              "id": 6,
              "type": "end",
              "text": "Fin: n³ operaciones"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef matrix_multiply(A: List[List[int]], B: List[List[int]]) -> List[List[int]]:\n    \"\"\"Multiplicación clásica de matrices en O(n^3).\"\"\"\n    n = len(A)\n    C = [[0] * n for _ in range(n)]\n    for i in range(n):\n        for j in range(n):\n            for k in range(n):\n                C[i][j] += A[i][k] * B[k][j]\n    return C\n\nif __name__ == '__main__':\n    mat = [[1, 2], [3, 4]]\n    print(\"Resultado Cúbico:\", matrix_multiply(mat, mat))",
        "explanation": "El algoritmo ingenuo de multiplicación de matrices es O(n³). Algoritmos avanzados como Strassen (O(n^2.807)) o Coppersmith-Winograd reducen este exponente.",
        "keyConcepts": [
          "Multiplicación de matrices clásica",
          "Algoritmo de Floyd-Warshall",
          "Optimización de Strassen"
        ],
        "terminalOutput": [
          "$ python -u complexity_n3.py",
          "[+] Matriz n=2: 2^3 = 8 operaciones elementales.",
          "[✓] Matriz resultante computada con éxito."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "function findTripletsWithZeroSum(arr) {\n  let triplets = [], n = arr.length;\n  for (let i = 0; i < n - 2; i++) {\n    for (let j = i + 1; j < n - 1; j++) {\n      for (let k = j + 1; k < n; k++) {\n        if (arr[i] + arr[j] + arr[k] === 0) {\n          triplets.push([arr[i], arr[j], arr[k]]);\n        }\n      }\n    }\n  }\n  return triplets;\n}",
        "explanation": "El clásico problema '3-Sum' en su formulación de fuerza bruta evalúa todas las tripletas posibles en O(n³).",
        "keyConcepts": [
          "Problema 3-Sum por fuerza bruta",
          "Tres punteros anidados",
          "Optimizable a O(n²) con ordenación"
        ],
        "demoData": [
          -1,
          0,
          1,
          2,
          -1,
          -4
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "namespace AlgoMatrix3D.Complexity;\n\npublic static class FloydWarshall\n{\n    public static void AllPairsShortestPath(int[,] dist, int n)\n    {\n        for (int k = 0; k < n; k++)\n            for (int i = 0; i < n; i++)\n                for (int j = 0; j < n; j++)\n                    if (dist[i, k] + dist[k, j] < dist[i, j])\n                        dist[i, j] = dist[i, k] + dist[k, j];\n    }\n}",
        "explanation": "El algoritmo de Floyd-Warshall encuentra las distancias más cortas entre todos los pares de nodos de un grafo dirigido en exactamente n³ iteraciones.",
        "keyConcepts": [
          "Floyd-Warshall para grafos",
          "Programación dinámica en 3D",
          "Triple bucle determinista"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-Place)",
          "complexityBest": "O(n³)",
          "complexityWorst": "O(n³)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Optimizaciones de caché de bucles por JIT"
        }
      }
    }
  },
  "complexity_exp": {
    "name": "O(2ⁿ) Complejidad Exponencial (Árbol Binario Recursivo)",
    "category": "complexity",
    "bigO": "O(2ⁿ)",
    "space": "O(n)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso res <- FibonacciIngenuo(n)\n    Si n <= 1 Entonces\n        res <- n\n    Sino\n        // Dos llamadas recursivas por cada nivel del árbol: 2^n operaciones\n        res <- FibonacciIngenuo(n - 1) + FibonacciIngenuo(n - 2)\n    FinSi\nFinSubProceso\n\nAlgoritmo PrincipalFibonacciExp\n    Escribir \"Fibonacci(6) = \", FibonacciIngenuo(6)\nFinAlgoritmo",
        "explanation": "Cada incremento en n duplica la cantidad de trabajo requerido. El árbol de llamadas recursivas se ramifica en dos en cada nivel: para n=40 requiere más de un billón de operaciones.",
        "keyConcepts": [
          "Ramificación binaria recursiva",
          "Duplicación del trabajo con cada +1 en n",
          "Solución mediante Memoización"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(2ⁿ) Exponencial (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Fib(n)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿n <= 1?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Retornar n (Caso Base)"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Retornar Fib(n-1) + Fib(n-2)"
            },
            {
              "id": 5,
              "type": "end",
              "text": "Fin: Árbol 2ⁿ ramas"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "def fibonacci_exponential(n: int) -> int:\n    \"\"\"Fibonacci ingenuo: Complejidad O(2^n).\"\"\"\n    if n <= 1:\n        return n\n    return fibonacci_exponential(n - 1) + fibonacci_exponential(n - 2)\n\nif __name__ == '__main__':\n    print(f\"Fibonacci(10) en O(2^n): {fibonacci_exponential(10)}\")",
        "explanation": "Demuestra la necesidad crítica de la programación dinámica o memoización. Con '@functools.lru_cache', este mismo código pasa de O(2ⁿ) a O(n).",
        "keyConcepts": [
          "Árbol de llamadas 2^n",
          "Recalculo masivo redundante",
          "Curación con lru_cache"
        ],
        "terminalOutput": [
          "$ python -u complexity_exp.py",
          "[!] Calculando Fibonacci(10) en árbol binario.",
          "[*] Total de llamadas recursivas: 177 invocaciones.",
          "[✓] Resultado: 55"
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "function powerset(arr) {\n  // El conjunto potencia contiene exactamente 2^n subconjuntos\n  return arr.reduce((subsets, value) => {\n    return subsets.concat(subsets.map(set => [...set, value]));\n  }, [[]]);\n}",
        "explanation": "El cálculo del conjunto de partes (Powerset) de un conjunto de tamaño n produce exactamente 2ⁿ subconjuntos.",
        "keyConcepts": [
          "Conjunto potencia (Powerset)",
          "Duplicación de cardinalidad",
          "Crecimiento explosivo"
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
        "code": "namespace AlgoMatrix3D.Complexity;\n\npublic static class TowerOfHanoi\n{\n    public static long MoveDisks(int n, char from, char to, char aux)\n    {\n        if (n == 0) return 0;\n        long moves = MoveDisks(n - 1, from, aux, to);\n        moves += 1;\n        moves += MoveDisks(n - 1, aux, to, from);\n        return moves; // Total de movimientos = 2^n - 1\n    }\n}",
        "explanation": "El problema clásico de las Torres de Hanói requiere matemáticamente 2ⁿ - 1 movimientos mínimos, siendo intrínsecamente exponencial.",
        "keyConcepts": [
          "Torres de Hanói",
          "2^n - 1 movimientos indispensables",
          "Complejidad NP natural"
        ],
        "benchmark": {
          "memoryAlloc": "O(n) espacio en Stack",
          "complexityBest": "O(2ⁿ)",
          "complexityWorst": "O(2ⁿ)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Pila de llamadas recursivas profunda"
        }
      }
    }
  },
  "complexity_fact": {
    "name": "O(n!) Complejidad Factorial (Permutación Total)",
    "category": "complexity",
    "bigO": "O(n!)",
    "space": "O(n)",
    "langs": {
      "pseint": {
        "name": "PSeInt (Pseudocódigo)",
        "langBadge": "PSeInt Pro",
        "badgeColor": "bg-neoCyan text-black",
        "icon": "fa-solid fa-diagram-project",
        "code": "SubProceso Permutar(arr, l, r)\n    Si l == r Entonces\n        // Imprimir una de las n! permutaciones generadas\n        Para k <- 1 Hasta r Hacer Escribir Sin Saltar arr[k], \" \"; FinPara\n        Escribir \"\"\n    Sino\n        Para i <- l Hasta r Hacer\n            aux <- arr[l]; arr[l] <- arr[i]; arr[i] <- aux\n            Permutar(arr, l + 1, r)\n            aux <- arr[l]; arr[l] <- arr[i]; arr[i] <- aux // Backtracking\n        FinPara\n    FinSi\nFinSubProceso\n\nAlgoritmo PrincipalPermutaciones\n    Dimension arr[3]\n    arr[1] <- 1; arr[2] <- 2; arr[3] <- 3\n    Escribir \"3! = 6 Permutaciones posibles:\"\n    Permutar(arr, 1, 3)\nFinAlgoritmo",
        "explanation": "La peor clase de complejidad computacional práctica. Generar todas las permutaciones de una lista o resolver el Problema del Viajante de Comercio (TSP) por fuerza bruta requiere n! pasos. Con n=20 requeriría más tiempo que la edad del universo.",
        "keyConcepts": [
          "Problema del Viajante (TSP)",
          "Permutaciones completas (n!)",
          "Incomputabilidad práctica para n > 15"
        ],
        "flowchart": {
          "title": "Diagrama de Flujo: O(n!) Factorial (PSeInt Pro)",
          "nodes": [
            {
              "id": 1,
              "type": "start",
              "text": "Inicio Permutar(arr, l, r)"
            },
            {
              "id": 2,
              "type": "decision",
              "text": "¿l == r?"
            },
            {
              "id": 3,
              "type": "process",
              "text": "Emitir Permutación (Caso Base)"
            },
            {
              "id": 4,
              "type": "process",
              "text": "Para i <- l Hasta r: Swap(l, i), Recurse(l+1), Backtrack"
            },
            {
              "id": 5,
              "type": "end",
              "text": "Fin: n! permutaciones emitidas"
            }
          ]
        }
      },
      "python": {
        "name": "Python 3",
        "langBadge": "Python 3.12+",
        "badgeColor": "bg-[#3776AB] text-white",
        "icon": "fa-brands fa-python",
        "code": "from typing import List\n\ndef permute(arr: List[int]) -> List[List[int]]:\n    \"\"\"Genera todas las n! permutaciones posibles en O(n!).\"\"\"\n    result = []\n    def backtrack(start: int):\n        if start == len(arr):\n            result.append(arr[:])\n            return\n        for i in range(start, len(arr)):\n            arr[start], arr[i] = arr[i], arr[start]\n            backtrack(start + 1)\n            arr[start], arr[i] = arr[i], arr[start] # Backtracking\n\n    backtrack(0)\n    return result\n\nif __name__ == '__main__':\n    datos = [1, 2, 3]\n    print(f\"3! = {len(permute(datos))} permutaciones: {permute(datos)}\")",
        "explanation": "Para n=10 son 3.6 millones de pasos. Para n=15 son 1.3 billones. Para n=20 son 2.4 trillones de operaciones. Cualquier algoritmo O(n!) exige heurísticas (algoritmos genéticos, recocido simulado) para ser viable en el mundo real.",
        "keyConcepts": [
          "Backtracking algorítmico",
          "Explosión factorial combinatoria",
          "Necesidad de heurísticas aproximadas"
        ],
        "terminalOutput": [
          "$ python -u complexity_fact.py",
          "[+] Generando permutaciones para n=3...",
          "[*] [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]",
          "[✓] 3! = 6 permutaciones exactas generadas."
        ]
      },
      "web": {
        "name": "HTML / CSS / JS",
        "langBadge": "ES6+ / Web DOM",
        "badgeColor": "bg-[#E44D26] text-white",
        "icon": "fa-brands fa-html5",
        "code": "function tspBruteForce(cities, distances) {\n  // Evaluación factorial de todas las rutas posibles O(n!)\n  const allRoutes = getPermutations(cities);\n  let bestRoute = null, minDistance = Infinity;\n  for (const route of allRoutes) {\n    const dist = calculateRouteDistance(route, distances);\n    if (dist < minDistance) {\n      minDistance = dist;\n      bestRoute = route;\n    }\n  }\n  return { bestRoute, minDistance };\n}",
        "explanation": "El problema clásico del viajante de comercio (TSP) evaluando cada circuito hamiltoniano por fuerza bruta representa la pared computacional factorial.",
        "keyConcepts": [
          "Traveling Salesperson Problem (TSP)",
          "Circuitos Hamiltonianos",
          "Fuerza bruta factorial"
        ],
        "demoData": [
          "A",
          "B",
          "C"
        ]
      },
      "csharp": {
        "name": "C# (.NET 9)",
        "langBadge": ".NET 9 / C# 12",
        "badgeColor": "bg-[#512BD4] text-white",
        "icon": "fa-solid fa-code",
        "code": "using System;\n\nnamespace AlgoMatrix3D.Complexity;\n\npublic static class FactorialPermutations\n{\n    public static void HeapAlgorithmPermute<T>(Span<T> array, int k, Action<ReadOnlySpan<T>> onPermutation)\n    {\n        if (k == 1)\n        {\n            onPermutation(array);\n            return;\n        }\n\n        HeapAlgorithmPermute(array, k - 1, onPermutation);\n\n        for (int i = 0; i < k - 1; i++)\n        {\n            if (k % 2 == 0)\n                (array[i], array[k - 1]) = (array[k - 1], array[i]);\n            else\n                (array[0], array[k - 1]) = (array[k - 1], array[0]);\n\n            HeapAlgorithmPermute(array, k - 1, onPermutation);\n        }\n    }\n}",
        "explanation": "El Algoritmo de Heap (1963) para permutaciones minimiza el movimiento físico de datos, intercambiando únicamente un solo par por cada permutación de las n! producidas.",
        "keyConcepts": [
          "Algoritmo de Heap (1963) para permutaciones",
          "1 swap por permutación",
          "Minimización de movimientos de memoria"
        ],
        "benchmark": {
          "memoryAlloc": "0 Bytes (In-Place)",
          "complexityBest": "O(n!)",
          "complexityWorst": "O(n!)",
          "targetFramework": ".NET 9.0 LTS",
          "registersUsed": "Árbol de llamadas de profundidad n"
        }
      }
    }
  }
};
