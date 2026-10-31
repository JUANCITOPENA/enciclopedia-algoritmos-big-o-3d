/* =========================================================================
   1. DATA STRUCTURES & ALGORITHM REPOSITORY (COMPACT & COMPLETE)
   ========================================================================= */

let rawItems = [];
let currentDataType = 'numbers';
let currentTarget = 67;
let selectedAlgoId = 'bubble_sort';
let currentCategory = 'all';

let actionQueue = [];
let currentStepIndex = 0;
let isPlaying = false;
let timerId = null;
let animationSpeed = 220;
let startTime = 0;
let liveComparisons = 0;
let liveSwaps = 0;
let liveMemAccess = 0;
let recentEventsHistory = [];

let scene, camera, renderer, controls;
let threeBlocks = [];

const ALGORITHMS_CATALOG = {
  // --- SORTING ALGORITHMS ---
  'bubble_sort': {
    howItWorks: `Compara pares de elementos adyacentes de izquierda a derecha. Si el elemento de la izquierda es mayor que el de la derecha, los intercambia. En cada pasada completa, el elemento más grande flota como una burbuja hasta su posición final definitiva al extremo derecho.`,
    proTip: `Algoritmo estrictamente didáctico; evítalo en producción. Solo es útil cuando el arreglo ya está ordenado y usas una bandera de corte temprano en O(n).`,
    gif: 'assets/bubble_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Bubble Sort, el ordenamiento burbuja. Su funcionamiento recorre el arreglo comparando pares adyacentes e intercambiándolos si están desordenados, haciendo que el elemento mayor flote a la derecha en cada iteración. Su complejidad es cuadrática, O de n cuadrado, con memoria constante O de 1. Tip de Arquitectura del Ingeniero Juancito Peña: Nunca uses Bubble Sort en bases de datos o sistemas distribuidos; su lentitud cuadrática puede colapsar tu servidor. Es ideal exclusivamente para aprender la mecánica fundamental de los intercambios en memoria.`,
    name: 'Bubble Sort',
    category: 'sort',
    bigO: 'O(n²)',
    best: 'O(n)',
    avg: 'O(n²)',
    worst: 'O(n²)',
    space: 'O(1)',
    stable: 'Sí',
    calcOps: (n) => Math.round((n * (n - 1)) / 2),
    color: '#FFDE59',
    badge: 'bg-neoYellow',
    desc: 'Compara pares adyacentes continuos e intercambia si están en orden inverso.',
    code: `function bubbleSort(arr) {
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
for (let j = 0; j < n - i - 1; j++) {
  if (arr[j] > arr[j + 1]) {
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  }
}
}
return arr;
}`
  },
  'selection_sort': {
    howItWorks: `Divide el arreglo en una porción ordenada y otra desordenada. En cada ciclo, busca el valor mínimo absoluto en la zona desordenada y lo intercambia directamente con el primer elemento de dicha zona.`,
    proTip: `Realiza un máximo estricto de n intercambios de memoria en total. Es ideal para memorias Flash EEPROM donde las escrituras físicas son costosas o degradan el chip.`,
    gif: 'assets/selection_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Selection Sort. Este algoritmo busca en cada pasada el elemento de menor valor en toda la sección desordenada y lo coloca en su posición definitiva mediante un solo intercambio. Su complejidad temporal es inmutablemente cuadrática, O de n cuadrado, tanto en el mejor como en el peor caso. Tip de Arquitectura del Ingeniero Juancito Peña: Selection Sort destaca porque realiza un máximo estricto de n intercambios de memoria. Si programas dispositivos embebidos o microcontroladores con memorias flash donde escribir desgasta el chip físico, Selection Sort minimiza las escrituras frente a otros métodos.`,
    name: 'Selection Sort',
    category: 'sort',
    bigO: 'O(n²)',
    best: 'O(n²)',
    avg: 'O(n²)',
    worst: 'O(n²)',
    space: 'O(1)',
    stable: 'No',
    calcOps: (n) => Math.round((n * n) / 2),
    color: '#FF7A00',
    badge: 'bg-neoOrange',
    desc: 'Busca repetidamente el menor elemento en la porción no ordenada y lo ubica al inicio.',
    code: `function selectionSort(arr) {
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
let min = i;
for (let j = i + 1; j < n; j++) {
  if (arr[j] < arr[min]) min = j;
}
[arr[i], arr[min]] = [arr[min], arr[i]];
}
return arr;
}`
  },
  'insertion_sort': {
    howItWorks: `Construye la lista ordenada de forma incremental, tal como una persona ordena cartas en su mano. Toma cada elemento entrante y lo desplaza hacia la izquierda hasta encontrar su posición exacta entre los ya ordenados.`,
    proTip: `Es el más veloz en colecciones pequeñas (n < 32) y en datos casi ordenados con O(n). Motores como V8 (JavaScript) y Python lo usan como base interna en TimSort.`,
    gif: 'assets/insertion_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Insertion Sort. Funciona como un humano ordenando naipes: toma el siguiente elemento y lo inserta en su lugar correspondiente desplazando los mayores hacia la derecha. En arreglos casi ordenados logra tiempo lineal O de n. Tip de Arquitectura del Ingeniero Juancito Peña: Insertion Sort es sumamente veloz en colecciones pequeñas debido a su bajo factor constante y localidad de caché. De hecho, los motores de Python y JavaScript lo utilizan internamente en híbridos como TimSort cuando las particiones tienen menos de treinta y dos elementos.`,
    name: 'Insertion Sort',
    category: 'sort',
    bigO: 'O(n²)',
    best: 'O(n)',
    avg: 'O(n²)',
    worst: 'O(n²)',
    space: 'O(1)',
    stable: 'Sí',
    calcOps: (n) => Math.round((n * (n - 1)) / 4),
    color: '#FF7A00',
    badge: 'bg-neoOrange',
    desc: 'Inserta cada elemento en su posición relativa correspondiente desplazando los mayores.',
    code: `function insertionSort(arr) {
for (let i = 1; i < arr.length; i++) {
let key = arr[i], j = i - 1;
while (j >= 0 && arr[j] > key) {
  arr[j + 1] = arr[j];
  j--;
}
arr[j + 1] = key;
}
return arr;
}`
  },
  'shell_sort': {
    howItWorks: `Generaliza Insertion Sort permitiendo comparar e intercambiar elementos distantes mediante saltos decrecientes (gaps). Al reducir el salto hasta 1, elimina inversiones lejanas y termina a velocidad lineal.`,
    proTip: `Opera in-place con O(1) de memoria auxiliar y no utiliza recursión ni memoria de pila, siendo idóneo para microcontroladores y sistemas de tiempo real restringidos.`,
    gif: 'assets/shell_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Shell Sort. Inventado por Donald Shell, este algoritmo rompe la barrera cuadrática tradicional comparando elementos separados por intervalos o saltos decrecientes. Al reducir el salto progresivamente hasta uno, elimina rápidamente las inversiones distantes y deja el arreglo casi ordenado. Su complejidad promedio ronda O de n elevado a la uno punto tres con memoria auxiliar O de uno. Tip de Arquitectura del Ingeniero Juancito Peña: Shell Sort es perfecto para sistemas embebidos sin sistema operativo o con poca memoria RAM, ya que ofrece un rendimiento cercano a logarítmico sin consumir memoria de pila por llamadas recursivas.`,
    name: 'Shell Sort',
    category: 'sort',
    bigO: 'O(n log² n)',
    best: 'O(n log n)',
    avg: 'O(n¹.³)',
    worst: 'O(n²)',
    space: 'O(1)',
    stable: 'No',
    calcOps: (n) => Math.round(n * Math.pow(Math.log2(n), 2)),
    color: '#C084FC',
    badge: 'bg-neoPurple',
    desc: 'Generalización de Insertion Sort con saltos decrecientes (gaps) para mover datos distantes.',
    code: `function shellSort(arr) {
let n = arr.length;
for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
for (let i = gap; i < n; i++) {
  let temp = arr[i], j = i;
  while (j >= gap && arr[j - gap] > temp) {
    arr[j] = arr[j - gap];
    j -= gap;
  }
  arr[j] = temp;
}
}
return arr;
}`
  },
  'merge_sort': {
    howItWorks: `Aplica Divide y Vencerás. Divide recursivamente el arreglo a la mitad hasta tener elementos unitarios y luego los fusiona en orden comparando las cabezas de las sub-listas.`,
    proTip: `Garantiza O(n log n) determinista en el 100% de los casos y es completamente estable. Es el estándar de oro para ordenamiento externo de datos masivos en disco.`,
    gif: 'assets/merge_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Merge Sort, el ordenamiento por mezcla concebido por John von Neumann. Este algoritmo aplica el principio de divide y vencerás: parte la colección por la mitad de forma recursiva hasta llegar a elementos individuales y luego los mezcla en secuencia ordenada. Garantiza una complejidad asintótica imbatible de O de n log n en todos los escenarios posibles, tanto en el mejor como en el peor caso. Tip de Arquitectura del Ingeniero Juancito Peña: Merge Sort es el estándar indiscutible para ordenar datos masivos que no caben en memoria RAM física, como archivos en disco o flujos distribuidos en bases de datos, gracias a su acceso secuencial predecible y su estabilidad garantizada.`,
    name: 'Merge Sort',
    category: 'sort',
    bigO: 'O(n log n)',
    best: 'O(n log n)',
    avg: 'O(n log n)',
    worst: 'O(n log n)',
    space: 'O(n)',
    stable: 'Sí',
    calcOps: (n) => Math.round(n * Math.log2(n)),
    color: '#38E5FF',
    badge: 'bg-neoCyan',
    desc: 'Divide y vencerás: fragmenta hasta unidades atómicas y las mezcla ordenadamente.',
    code: `function mergeSort(arr) {
if (arr.length <= 1) return arr;
const mid = Math.floor(arr.length / 2);
const L = mergeSort(arr.slice(0, mid));
const R = mergeSort(arr.slice(mid));
return merge(L, R);
}`
  },
  'quick_sort': {
    howItWorks: `Elige un pivote y particiona el arreglo: menores a la izquierda, mayores a la derecha. Luego aplica la misma partición recursivamente sobre ambos lados.`,
    proTip: `En la práctica es el más veloz de propósito general gracias a su aprovechamiento de la memoria caché L1/L2. Usa siempre mediana de 3 o pivote aleatorio para evitar O(n²).`,
    gif: 'assets/quick_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Quick Sort con partición de Lomuto. Creado por Tony Hoare, Quick Sort elige un pivote y reubica los elementos: menores a la izquierda y mayores a la derecha. Luego ordena recursivamente ambas mitades. En promedio alcanza una impresionante velocidad de O de n log n con memoria auxiliar logarítmica. Tip de Arquitectura del Ingeniero Juancito Peña: Quick Sort es el algoritmo predilecto en librerías estándar de lenguajes como C y C++. Para blindarlo contra su peor caso cuadrático O de n cuadrado, utiliza siempre una técnica de pivote por mediana de tres o pivote aleatorio.`,
    name: 'Quick Sort (Lomuto)',
    category: 'sort',
    bigO: 'O(n log n)',
    best: 'O(n log n)',
    avg: 'O(n log n)',
    worst: 'O(n²)',
    space: 'O(log n)',
    stable: 'No',
    calcOps: (n) => Math.round(n * Math.log2(n) * 1.15),
    color: '#54F18F',
    badge: 'bg-neoGreen',
    desc: 'Elige un pivote, particiona los menores a la izquierda y mayores a la derecha recursivamente.',
    code: `function quickSort(arr, low = 0, high = arr.length - 1) {
if (low < high) {
let pi = partition(arr, low, high);
quickSort(arr, low, pi - 1);
quickSort(arr, pi + 1, high);
}
return arr;
}`
  },
  'heap_sort': {
    howItWorks: `Modela los datos como un árbol binario Max-Heap donde la raíz es siempre el máximo. Extrae repetidamente la raíz intercambiándola con el final y reajusta el montículo.`,
    proTip: `Combina la cota O(n log n) en el peor caso de Merge Sort con el uso de memoria O(1) in-place de Quick Sort, sin riesgo de degradación.`,
    gif: 'assets/heap_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Heap Sort, el ordenamiento por montículo. Este algoritmo estructura el arreglo en memoria como un árbol binario completo donde la raíz contiene siempre el valor máximo. Al extraer la raíz y reconstruir el montículo, ordena la colección garantizando O de n log n en cualquier circunstancia, utilizando únicamente O de uno de memoria auxiliar. Tip de Arquitectura del Ingeniero Juancito Peña: Heap Sort es la opción ideal para sistemas de misión crítica y tiempo real estricto, como aviónica automotriz o satélites, donde no se permite ninguna variación impredecible en el tiempo de ejecución ni consumo dinámico de memoria RAM.`,
    name: 'Heap Sort',
    category: 'sort',
    bigO: 'O(n log n)',
    best: 'O(n log n)',
    avg: 'O(n log n)',
    worst: 'O(n log n)',
    space: 'O(1)',
    stable: 'No',
    calcOps: (n) => Math.round(2 * n * Math.log2(n)),
    color: '#38E5FF',
    badge: 'bg-neoCyan',
    desc: 'Construye un árbol montículo máximo (Max-Heap) y extrae repetidamente la raíz.',
    code: `function heapSort(arr) {
let n = arr.length;
for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
for (let i = n - 1; i > 0; i--) {
[arr[0], arr[i]] = [arr[i], arr[0]];
heapify(arr, i, 0);
}
return arr;
}`
  },
  'radix_sort': {
    howItWorks: `Algoritmo no comparativo que procesa los números dígito a dígito desde el menos significativo (unidades) usando cubos de conteo estable (Counting Sort).`,
    proTip: `Opera en tiempo lineal O(n · k). Con enteros de 32/64 bits k es una constante fija pequeña, procesando millones de datos a velocidad lineal superando a Quick Sort.`,
    gif: 'assets/radix_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Radix Sort no comparativo. Este algoritmo rompe el límite teórico de orden n log n ordenando números a través de sus dígitos, desde el dígito menos significativo hasta el más representativo. Al apoyarse en cubos o conteo estable, su complejidad temporal es puramente lineal, O de n por k. Tip de Arquitectura del Ingeniero Juancito Peña: Radix Sort es la mejor opción cuando necesitas ordenar cientos de millones de enteros de longitud fija, como códigos postales, números de tarjetas de crédito o direcciones IP, superando ampliamente a cualquier método comparativo convencional.`,
    name: 'Radix Sort (LSD)',
    category: 'sort',
    bigO: 'O(n · k)',
    best: 'O(n · k)',
    avg: 'O(n · k)',
    worst: 'O(n · k)',
    space: 'O(n + k)',
    stable: 'Sí',
    calcOps: (n) => n * 3,
    color: '#54F18F',
    badge: 'bg-neoGreen',
    desc: 'Ordena de manera no comparativa procesando dígito por dígito desde el menos significativo.',
    code: `function radixSort(arr) {
let max = Math.max(...arr);
for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
countingSortByDigit(arr, exp);
}
return arr;
}`
  },
  'bogo_sort': {
    howItWorks: `Comprueba si el arreglo está ordenado. Si no lo está, baraja aleatoriamente todos los elementos y repite hasta que por suerte quede ordenado.`,
    proTip: `Antipatrón de complejidad factorial O((n+1)!). Con 15 elementos tardaría más de 1.3 millones de años. Muestra el peligro de la fuerza bruta descontrolada.`,
    gif: 'assets/bogo_sort.gif',
    speechText: `Bienvenido a la simulación interactiva de Bogo Sort, también conocido como ordenamiento de mono. Su estrategia consiste en verificar si la lista está ordenada y, de no estarlo, barajar todos los elementos al azar como una baraja de naipes y volver a probar. Su complejidad en el peor caso es infinita y en promedio es de orden factorial, O de n factorial. Tip de Arquitectura del Ingeniero Juancito Peña: Bogo Sort es el contraejemplo perfecto de ingeniería. Ilustra vívidamente el peligro de confiar en la fuerza bruta estocástica: mientras que con diez elementos puede tardar minutos, con quince elementos excedería el tiempo de vida de la civilización humana.`,
    name: 'Bogo Sort (Didáctico)',
    category: 'sort',
    bigO: 'O((n+1)!)',
    best: 'O(n)',
    avg: 'O(n · n!)',
    worst: 'O(∞)',
    space: 'O(1)',
    stable: 'No',
    calcOps: () => 999999,
    color: '#FF5757',
    badge: 'bg-neoRed',
    desc: 'Baraja aleatoriamente el arreglo hasta que por suerte quede ordenado (antipatrón).',
    code: `function bogoSort(arr) {
while (!isSorted(arr)) {
shuffle(arr);
}
return arr;
}`
  },

  // --- SEARCH ALGORITHMS ---
  'linear_search': {
    howItWorks: `Inspecciona secuencialmente cada celda del arreglo desde el índice 0 hasta dar con el objetivo o agotar los datos.`,
    proTip: `El único método universal para datos desordenados y sin indexar. Para más de 1000 consultas frecuentes, invierte en ordenar o indexar para buscar en O(log n).`,
    gif: 'assets/linear_search.gif',
    speechText: `Bienvenido a la simulación interactiva de Búsqueda Lineal. Es el método más intuitivo y directo: recorre el arreglo de inicio a fin inspeccionando cada celda hasta dar con el objetivo o agotar los elementos. Su complejidad es lineal O de n en el peor caso y O de 1 en el mejor. Tip de Arquitectura del Ingeniero Juancito Peña: La búsqueda lineal es perfecta para arreglos pequeños donde ordenar previamente representaría un desperdicio de ciclos de CPU. Sin embargo, para colecciones con más de mil consultas frecuentes, debes indexar o mantener los datos ordenados para usar búsqueda binaria.`,
    name: 'Búsqueda Lineal',
    category: 'search',
    bigO: 'O(n)',
    best: 'O(1)',
    avg: 'O(n)',
    worst: 'O(n)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => n,
    color: '#FFDE59',
    badge: 'bg-neoYellow',
    desc: 'Recorre celda a celda secuencialmente comprobando igualdad con el target.',
    code: `function linearSearch(arr, target) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] === target) return i;
}
return -1;
}`
  },
  'binary_search': {
    howItWorks: `En arreglo ordenado, compara el target con el punto medio. Si no coincide, descarta el 50% del espacio de búsqueda en cada paso.`,
    proTip: `Complejidad logarítmica O(log n). Con 30 comparaciones busca entre mil millones de registros. Es el pilar de los índices B-Tree en bases de datos.`,
    gif: 'assets/binary_search.gif',
    speechText: `Bienvenido a la simulación interactiva de Búsqueda Binaria. Requiere obligatoriamente que la colección esté ordenada. Compara el objetivo con el elemento central; si no coincide, descarta la mitad completa del espacio donde el elemento jamás podría estar y repite la bisección en el intervalo restante. Su complejidad es logarítmica O de log n. Tip de Arquitectura del Ingeniero Juancito Peña: La búsqueda binaria es uno de los algoritmos más poderosos de la informática. Con solo treinta comparaciones es capaz de encontrar un registro específico entre más de mil millones de datos en memoria. Es la base de los índices en todas las bases de datos modernas.`,
    name: 'Búsqueda Binaria',
    category: 'search',
    bigO: 'O(log n)',
    best: 'O(1)',
    avg: 'O(log n)',
    worst: 'O(log n)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => Math.ceil(Math.log2(n)),
    color: '#38E5FF',
    badge: 'bg-neoCyan',
    desc: 'En arreglo ordenado: descarta el 50% de los datos en cada paso comparando el medio.',
    code: `function binarySearch(arr, target) {
let low = 0, high = arr.length - 1;
while (low <= high) {
let mid = Math.floor((low + high) / 2);
if (arr[mid] === target) return mid;
if (arr[mid] < target) low = mid + 1;
else high = mid - 1;
}
return -1;
}`
  },
  'ternary_search': {
    howItWorks: `Divide el rango ordenado en 3 partes mediante 2 puntos medios y descarta dos tercios (el 66%) del espacio en cada paso.`,
    proTip: `Complejidad O(log₃ n). Su aplicación estelar es la optimización numérica para hallar máximos o mínimos en funciones unimodales continuas.`,
    gif: 'assets/binary_search.gif',
    speechText: `Bienvenido a la simulación interactiva de Búsqueda Ternaria. Este método divide el espacio de búsqueda ordenado en tres partes iguales utilizando dos puntos de división. Al evaluar ambos extremos, descarta dos tercios del conjunto de datos en cada iteración, alcanzando una complejidad logarítmica en base tres. Tip de Arquitectura del Ingeniero Juancito Peña: Aunque la búsqueda ternaria reduce el intervalo más rápido que la binaria, realiza dos comparaciones por paso. Su aplicación estelar no son los arreglos planos, sino la optimización numérica para encontrar máximos o mínimos en funciones unimodales continuas.`,
    name: 'Búsqueda Ternaria',
    category: 'search',
    bigO: 'O(log₃ n)',
    best: 'O(1)',
    avg: 'O(log₃ n)',
    worst: 'O(log₃ n)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => Math.ceil(Math.log(n) / Math.log(3)) * 2,
    color: '#38E5FF',
    badge: 'bg-neoCyan',
    desc: 'Divide el espacio de búsqueda en 3 tercios calculando 2 puntos medios (mid1 y mid2).',
    code: `function ternarySearch(arr, target, l = 0, r = arr.length - 1) {
if (r >= l) {
let mid1 = l + Math.floor((r - l) / 3);
let mid2 = r - Math.floor((r - l) / 3);
if (arr[mid1] === target) return mid1;
if (arr[mid2] === target) return mid2;
if (target < arr[mid1]) return ternarySearch(arr, target, l, mid1 - 1);
if (target > arr[mid2]) return ternarySearch(arr, target, mid2 + 1, r);
return ternarySearch(arr, target, mid1 + 1, mid2 - 1);
}
return -1;
}`
  },
  'jump_search': {
    howItWorks: `Avanza a saltos fijos de tamaño raíz cuadrada de n. Al sobrepasar el target, retrocede y aplica búsqueda lineal reducida dentro del bloque.`,
    proTip: `Complejidad O(√n). Muy útil cuando avanzar secuencialmente es barato pero retroceder o saltar arbitrariamente tiene penalización de hardware.`,
    gif: 'assets/beam_search.gif',
    speechText: `Bienvenido a la simulación interactiva de Búsqueda por Salto. Opera sobre arreglos ordenados dando pasos agigantados de longitud fija equivalente a la raíz cuadrada de n. Cuando sobrepasa el objetivo, retrocede y aplica una búsqueda lineal reducida dentro de ese único bloque. Su complejidad es de orden raíz de n. Tip de Arquitectura del Ingeniero Juancito Peña: La búsqueda por salto es especialmente útil en sistemas donde el acceso indexado aleatorio tiene penalización de hardware y donde solo es eficiente avanzar secuencialmente, como en estructuras de salto distribuido o cintas de almacenamiento.`,
    name: 'Búsqueda por Salto (Jump)',
    category: 'search',
    bigO: 'O(√n)',
    best: 'O(1)',
    avg: 'O(√n)',
    worst: 'O(√n)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => Math.round(2 * Math.sqrt(n)),
    color: '#C084FC',
    badge: 'bg-neoPurple',
    desc: 'Avanza en bloques de tamaño fijo m = √n y luego retrocede con búsqueda lineal corta.',
    code: `function jumpSearch(arr, target) {
let n = arr.length, step = Math.floor(Math.sqrt(n)), prev = 0;
while (arr[Math.min(step, n) - 1] < target) {
prev = step; step += Math.floor(Math.sqrt(n));
if (prev >= n) return -1;
}
while (arr[prev] < target) {
prev++;
if (prev === Math.min(step, n)) return -1;
}
return arr[prev] === target ? prev : -1;
}`
  },
  'interpolation_search': {
    howItWorks: `Calcula la posición estimada matemáticamente según el valor numérico relativo de la clave dentro del rango mínimo y máximo.`,
    proTip: `En datos ordenados con distribución uniforme logra una velocidad casi constante de O(log log n). Para 1 millón de datos requiere solo 2 a 4 pasos.`,
    gif: 'assets/nearest_neighbor_search.gif',
    speechText: `Bienvenido a la simulación interactiva de Búsqueda por Interpolación. A diferencia de la búsqueda binaria que siempre divide por la mitad, este algoritmo calcula la posición probable del elemento interpolando matemáticamente su valor entre los límites conocidos. Si los datos están uniformemente distribuidos, alcanza una sorprendente velocidad de O de logaritmo del logaritmo de n. Tip de Arquitectura del Ingeniero Juancito Peña: Si tus datos ordenados tienen una distribución numérica uniforme, como marcas de tiempo continuas o IDs secuenciales, la interpolación es entre tres y cuatro veces más rápida que la búsqueda binaria tradicional.`,
    name: 'Búsqueda por Interpolación',
    category: 'search',
    bigO: 'O(log log n)',
    best: 'O(1)',
    avg: 'O(log log n)',
    worst: 'O(n)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => Math.max(1, Math.ceil(Math.log2(Math.max(2, Math.log2(n))))),
    color: '#54F18F',
    badge: 'bg-neoGreen',
    desc: 'Calcula la posición estimada matemáticamente según el valor numérico relativo de la clave.',
    code: `function interpolationSearch(arr, target) {
let low = 0, high = arr.length - 1;
while (low <= high && target >= arr[low] && target <= arr[high]) {
let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
if (arr[pos] === target) return pos;
if (arr[pos] < target) low = pos + 1; else high = pos - 1;
}
return -1;
}`
  },
  'exponential_search': {
    howItWorks: `Duplica el rango exponencialmente en potencias de 2 (1, 2, 4, 8...) y luego aplica búsqueda binaria en el subrango delimitado.`,
    proTip: `El estándar para buscar en flujos de datos en streaming o arreglos ilimitados donde no se conoce el tamaño total n por anticipado.`,
    gif: 'assets/binary_search.gif',
    speechText: `Bienvenido a la simulación interactiva de Búsqueda Exponencial. Encuentra el rango donde se ubica el elemento multiplicando por dos la posición en cada salto: uno, dos, cuatro, ocho, dieciséis, y así sucesivamente. Una vez detectado el límite superior, aplica búsqueda binaria clásica dentro de ese intervalo. Su complejidad es O de log n. Tip de Arquitectura del Ingeniero Juancito Peña: La búsqueda exponencial es el estándar de oro para consultar flujos continuos de datos en streaming o arreglos ilimitados donde no se conoce el tamaño total n de la colección y el elemento objetivo suele encontrarse cerca del inicio.`,
    name: 'Búsqueda Exponencial',
    category: 'search',
    bigO: 'O(log n)',
    best: 'O(1)',
    avg: 'O(log n)',
    worst: 'O(log n)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => Math.ceil(Math.log2(n)) + 2,
    color: '#38E5FF',
    badge: 'bg-neoCyan',
    desc: 'Duplica el rango exponencialmente (1, 2, 4, 8...) y luego aplica búsqueda binaria en el subrango.',
    code: `function exponentialSearch(arr, target) {
if (arr[0] === target) return 0;
let i = 1;
while (i < arr.length && arr[i] <= target) i *= 2;
return binarySearchRange(arr, target, Math.floor(i / 2), Math.min(i, arr.length - 1));
}`
  },

  // --- PURE BIG-O THEORETICAL CLASSES ---
  'complexity_o1': {
    howItWorks: `Acceso directo a dirección de memoria física mediante dirección base + desplazamiento en un único ciclo de CPU.`,
    proTip: `El Santo Grial del rendimiento. Diseña tus flujos usando Maps, Hashes o índices directos para soportar millones de peticiones concurrentes.`,
    gif: 'assets/nearest_neighbor_search.gif',
    speechText: `Bienvenido a la demostración cinemática de complejidad O de 1, Tiempo Constante. En esta simulación observas cómo la CPU calcula la posición física exacta de un elemento en memoria mediante su dirección base y su desplazamiento numérico, en un solo ciclo atómico de procesamiento sin importar cuántos millones de elementos existan. Tip del Ingeniero Juancito Peña: El tiempo constante es el estándar supremo de arquitectura: estructura siempre tus datos en tablas hash o cachés en memoria para garantizar respuestas en microsegundos bajo cualquier volumen de carga.`,
    name: 'O(1) Acceso Directo',
    category: 'complexity',
    bigO: 'O(1)',
    best: 'O(1)',
    avg: 'O(1)',
    worst: 'O(1)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: () => 1,
    color: '#54F18F',
    badge: 'bg-neoGreen',
    desc: 'Acceso indexado por dirección de memoria base + offset en 1 ciclo de procesador.',
    code: `function directAccess(arr, index) {
// Cálculo de dirección: base + offset * 4 bytes
return arr[index];
}`
  },
  'complexity_linear': {
    howItWorks: `Procesa secuencialmente cada uno de los n elementos del arreglo acumulando operaciones en proporción directa a n.`,
    proTip: `Totalmente aceptable en producción masiva siempre que evites ejecutar operaciones bloqueantes de red o disco dentro de cada iteración.`,
    gif: 'assets/linear_search.gif',
    speechText: `Bienvenido a la demostración cinemática de complejidad O de n, Tiempo Lineal. Aquí puedes observar cómo el tiempo de ejecución y el consumo de ciclos de procesador crecen en proporción directa y exacta al número total de elementos. Si duplicas el tamaño de la entrada, se duplicará el tiempo de ejecución. Tip del Ingeniero Juancito Peña: La complejidad lineal es completamente aceptable en el procesamiento masivo de datos; el secreto de la buena ingeniería radica en asegurar que tus bucles lineales no oculten operaciones costosas de red o accesos a disco dentro de cada iteración.`,
    name: 'O(n) Recorrido Acumulativo',
    category: 'complexity',
    bigO: 'O(n)',
    best: 'O(n)',
    avg: 'O(n)',
    worst: 'O(n)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => n,
    color: '#FFDE59',
    badge: 'bg-neoYellow',
    desc: 'Operación que procesa cada uno de los n elementos exactamente una vez.',
    code: `function sumAll(arr) {
let total = 0;
for (let x of arr) total += x;
return total;
}`
  },
  'complexity_n2': {
    howItWorks: `Dos bucles anidados donde cada elemento interactúa con todos los demás de la colección, produciendo n² pasos.`,
    proTip: `Con mil elementos requiere 1 millón de pasos; con 100 mil requiere 10 mil millones. Refactoriza hacia O(n log n) usando partición o mapas.`,
    gif: 'assets/bubble_sort.gif',
    speechText: `Bienvenido a la demostración cinemática de complejidad O de n cuadrado, Tiempo Cuadrático. Esta simulación refleja el comportamiento de los bucles anidados donde cada elemento debe interactuar con todos los demás de la colección. El crecimiento de operaciones es parabólico y sumamente pronunciado. Tip del Ingeniero Juancito Peña: Un algoritmo de orden n cuadrado que responde en milisegundos durante las pruebas locales puede colapsar un servidor entero en producción cuando la base de datos supere los cien mil registros. Siempre que detectes bucles anidados en código crítico, refactoriza hacia orden n log n.`,
    name: 'O(n²) Comparación Matriz',
    category: 'complexity',
    bigO: 'O(n²)',
    best: 'O(n²)',
    avg: 'O(n²)',
    worst: 'O(n²)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => n * n,
    color: '#FF7A00',
    badge: 'bg-neoOrange',
    desc: 'Bucle anidado que evalúa todas las posibles combinaciones de pares de elementos.',
    code: `function printPairs(arr) {
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
  // n * n comparaciones directas
}
}
}`
  },
  'complexity_n3': {
    howItWorks: `Tres bucles anidados que evalúan tripletas completas de elementos (fuerza bruta en multiplicación de matrices o 3-SUM).`,
    proTip: `Zona de peligro roja en ingeniería. Con solo 1,000 elementos demanda 1,000,000,000 de operaciones. Usa programación dinámica o hashes.`,
    gif: 'assets/selection_sort.gif',
    speechText: `Bienvenido a la demostración cinemática de complejidad O de n al cubo, Tiempo Cúbico. Este escenario representa tres bucles completamente anidados, característico de algoritmos ingenuos de multiplicación de matrices o problemas combinatorios como 3-SUM por fuerza bruta. Tip del Ingeniero Juancito Peña: La complejidad cúbica es una zona de peligro roja en la ingeniería de software. Con apenas mil elementos la computadora debe realizar mil millones de cálculos. Evita siempre este enfoque recurriendo a técnicas de programación dinámica o estructuras de datos hash auxiliares.`,
    name: 'O(n³) Triple Bucle / Cúbico',
    category: 'complexity',
    bigO: 'O(n³)',
    best: 'O(n³)',
    avg: 'O(n³)',
    worst: 'O(n³)',
    space: 'O(1)',
    stable: 'N/A',
    calcOps: (n) => n * n * n,
    color: '#FF7A00',
    badge: 'bg-neoOrange',
    desc: 'Algoritmo de fuerza bruta para 3-SUM o multiplicación de matrices básica.',
    code: `function threeSumBrute(arr) {
let n = arr.length;
for (let i = 0; i < n; i++)
for (let j = i + 1; j < n; j++)
  for (let k = j + 1; k < n; k++) {
    if (arr[i] + arr[j] + arr[k] === 0) return true;
  }
return false;
}`
  },
  'complexity_exp': {
    howItWorks: `Árbol de recursión donde cada llamada genera 2 ramas secundarias, duplicando las operaciones con cada elemento añadido.`,
    proTip: `Inviable en producción. Aplica Programación Dinámica y Memoización para reducir el tiempo de O(2ⁿ) a tiempo lineal O(n).`,
    gif: 'assets/backtracking_search.gif',
    speechText: `Bienvenido a la demostración cinemática de complejidad O de dos a la n, Tiempo Exponencial. Observa cómo cada nuevo elemento añadido duplica instantáneamente la cantidad de ramas y de operaciones requeridas, como en la implementación ingenua de la sucesión de Fibonacci. Tip del Ingeniero Juancito Peña: La complejidad exponencial es inviable en entornos reales. Sin embargo, en la mayoría de los casos de negocio este cuello de botella se puede erradicar aplicando Programación Dinámica y memoización en caché, reduciendo el costo de dos a la n a un orden lineal O de n.`,
    name: 'O(2ⁿ) Árbol Exponencial',
    category: 'complexity',
    bigO: 'O(2ⁿ)',
    best: 'O(2ⁿ)',
    avg: 'O(2ⁿ)',
    worst: 'O(2ⁿ)',
    space: 'O(n)',
    stable: 'N/A',
    calcOps: (n) => Math.min(Math.pow(2, Math.min(n, 14)), 16384),
    color: '#FF90E8',
    badge: 'bg-neoPink',
    desc: 'Cada llamada genera dos sub-llamadas. Crece al doble con cada nuevo dato añadido.',
    code: `function fibonacci(n) {
if (n <= 1) return n;
return fibonacci(n - 1) + fibonacci(n - 2);
}`
  },
  'complexity_fact': {
    howItWorks: `Generación exhaustiva de todas las permutaciones posibles en problemas NP-Hard como el Problema del Agente Viajero (TSP).`,
    proTip: `La explosión combinatoria más rápida. En producción utiliza heurísticas, algoritmos genéticos o colonias de hormigas para hallar soluciones casi óptimas.`,
    gif: 'assets/bogo_sort.gif',
    speechText: `Bienvenido a la demostración cinemática de complejidad O de n factorial, Tiempo Factorial. Es el crecimiento más explosivo de toda la ciencia de la computación, típico de problemas donde se deben calcular todas las permutaciones de rutas o combinaciones posibles. Tip del Ingeniero Juancito Peña: Frente a problemas NP-Hard con crecimiento factorial, como el problema del agente viajero, jamás recurras a la fuerza bruta exhaustiva en producción. Emplea algoritmos heurísticos, algoritmos genéticos o aproximaciones de colonia de hormigas para encontrar soluciones casi óptimas en microsegundos.`,
    name: 'O(n!) Permutación Factorial',
    category: 'complexity',
    bigO: 'O(n!)',
    best: 'O(n!)',
    avg: 'O(n!)',
    worst: 'O(n!)',
    space: 'O(n)',
    stable: 'N/A',
    calcOps: (n) => {
      let r = 1;
      for (let i = 2; i <= Math.min(n, 7); i++) r *= i;
      return r;
    },
    color: '#FF5757',
    badge: 'bg-neoRed',
    desc: 'Generación exhaustiva de todas las permutaciones en problemas NP-Hard (TSP).',
    code: `function solveTSP(cities) {
// n! caminos evaluados por fuerza bruta
return permuteAll(cities);
}`
  }
};

/* =========================================================================
   2. INITIALIZATION & DATASET GENERATION
   ========================================================================= */

window.onload = function() {
  initThreeScene();
  setDataType('numbers');
  renderAlgorithmCards();
  selectAlgorithm('bubble_sort');
  renderMatrixTable();
  setupDomEvents();
  populateModalAlgoDropdown();
};

/* =========================================================================
   UTILIDADES MATEMÁTICAS DE CONVERSIÓN Y COMPARACIÓN DE TARGETS (JPV PRO)
   Soporte universal para Números, Letras, Objetos (kg) y Colores (Hue)
   ========================================================================= */
function getComparableTargetValue(target, sampleItems) {
  if (target === null || target === undefined) return 0;
  if (typeof target === 'number' && !isNaN(target)) return target;
  const str = String(target).trim();
  const parsedNum = parseFloat(str.replace(/[^0-9.-]/g, ''));
  if (str.length === 1 && isNaN(parseInt(str))) {
    return str.toUpperCase().charCodeAt(0);
  }
  if (!isNaN(parsedNum)) return parsedNum;
  if (sampleItems && sampleItems.length > 0) {
    const found = sampleItems.find(it => it.display && it.display.toLowerCase().includes(str.toLowerCase()));
    if (found) return found.value;
  }
  return str.charCodeAt(0) || 0;
}

function isItemTargetMatch(item, target) {
  if (!item) return false;
  const numTarget = getComparableTargetValue(target, [item]);
  if (item.value === numTarget) return true;
  if (String(item.display).toLowerCase().trim() === String(target).toLowerCase().trim()) return true;
  if (String(item.display).toLowerCase().replace(/[^a-z0-9]/g, '') === String(target).toLowerCase().replace(/[^a-z0-9]/g, '')) return true;
  return false;
}

function setupDomEvents() {
  document.getElementById('animSpeedSlider').addEventListener('input', (e) => {
    animationSpeed = parseInt(e.target.value);
    document.getElementById('speedValueLabel').innerText = `${animationSpeed} ms`;
    if (isPlaying) {
      clearInterval(timerId);
      timerId = setInterval(executeNextAction, animationSpeed);
    }
  });

  const handleTargetChange = (val) => {
    const clean = val.trim();
    currentTarget = clean;
    const mainTgt = document.getElementById('targetValueInput');
    const modalTgt = document.getElementById('modalTargetValueInput');
    if (mainTgt) mainTgt.value = clean;
    if (modalTgt) modalTgt.value = clean;
    resetSimulationView();
  };

  const mainTargetInput = document.getElementById('targetValueInput');
  if (mainTargetInput) {
    mainTargetInput.addEventListener('change', (e) => handleTargetChange(e.target.value));
  }

  const modalTargetInput = document.getElementById('modalTargetValueInput');
  if (modalTargetInput) {
    modalTargetInput.addEventListener('change', (e) => handleTargetChange(e.target.value));
  }

  const modalBox = document.getElementById('modalDataInputBox');
  if (modalBox) {
    modalBox.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        applyModalCustomInput();
      }
    });
  }

  window.addEventListener('resize', onWindowResize);
}

function setDataType(type) {
  currentDataType = type;
  ['numbers', 'letters', 'objects', 'colors'].forEach(t => {
    const btn = document.getElementById(`btn-type-${t}`);
    const modalBtn = document.getElementById(`btn-modal-type-${t}`);
    const isAct = (t === type);
    if (btn) btn.className = isAct 
      ? 'neo-button bg-neoCyan px-3 py-1 text-xs uppercase' 
      : 'neo-button bg-white px-3 py-1 text-xs uppercase';
    if (modalBtn) modalBtn.className = isAct 
      ? 'neo-button bg-neoCyan px-2 py-0.5 text-xs uppercase font-mono font-bold' 
      : 'neo-button bg-white px-2 py-0.5 text-xs uppercase font-mono font-bold';
  });

  generateDatasetPreset('random');
  syncModalDatasetInputs();
}

function generateDatasetPreset(preset) {
  const n = 11;
  rawItems = [];

  if (currentDataType === 'numbers') {
    let nums = [];
    if (preset === 'random') {
      for (let i = 0; i < n; i++) nums.push(Math.floor(Math.random() * 90) + 8);
    } else if (preset === 'sorted') {
      nums = [10, 18, 25, 33, 42, 50, 61, 70, 78, 85, 94];
    } else if (preset === 'reverse') {
      nums = [95, 84, 76, 68, 59, 50, 41, 32, 23, 15, 8];
    } else if (preset === 'nearly') {
      nums = [12, 18, 24, 30, 45, 38, 55, 62, 70, 85, 92];
    }
    rawItems = nums.map((v, idx) => ({
      id: `item-${idx}`,
      value: v,
      display: `${v}`,
      icon: null,
      color: '#38E5FF'
    }));
    document.getElementById('dataInputBox').value = nums.join(', ');
    currentTarget = nums[Math.floor(n / 2)];

  } else if (currentDataType === 'letters') {
    let chars = [];
    if (preset === 'random') {
      const pool = 'KBZMPWFQTRLNAX';
      for (let i = 0; i < n; i++) chars.push(pool[i % pool.length]);
      chars.sort(() => Math.random() - 0.5);
    } else if (preset === 'sorted') {
      chars = ['B', 'D', 'F', 'H', 'K', 'M', 'P', 'R', 'T', 'W', 'Z'];
    } else if (preset === 'reverse') {
      chars = ['Z', 'W', 'T', 'R', 'P', 'M', 'K', 'H', 'F', 'D', 'B'];
    } else {
      chars = ['B', 'D', 'F', 'K', 'H', 'M', 'P', 'T', 'R', 'W', 'Z'];
    }
    rawItems = chars.map((c, idx) => ({
      id: `item-${idx}`,
      value: c.charCodeAt(0),
      display: c,
      icon: null,
      color: '#FFDE59'
    }));
    document.getElementById('dataInputBox').value = chars.join(', ');
    currentTarget = chars[Math.floor(n / 2)];

  } else if (currentDataType === 'objects') {
    const icons = ['📦', '💎', '🚀', '⚡', '🎮', '🔋', '🛡️', '🔑', '🏷️', '🍕', '☕'];
    let weights = [45, 12, 88, 30, 65, 19, 94, 7, 52, 77, 39];
    if (preset === 'sorted') weights.sort((a,b)=>a-b);
    if (preset === 'reverse') weights.sort((a,b)=>b-a);

    rawItems = weights.map((w, idx) => ({
      id: `item-${idx}`,
      value: w,
      display: `${w}kg`,
      icon: icons[idx % icons.length],
      color: '#FF90E8'
    }));
    document.getElementById('dataInputBox').value = rawItems.map(o => `${o.icon} ${o.display}`).join(', ');
    currentTarget = rawItems[Math.floor(n / 2)].value;

  } else if (currentDataType === 'colors') {
    let hues = [];
    for (let i = 0; i < n; i++) hues.push(Math.round((i * 360) / n));
    if (preset === 'random') hues.sort(() => Math.random() - 0.5);
    if (preset === 'reverse') hues.reverse();

    rawItems = hues.map((h, idx) => ({
      id: `item-${idx}`,
      value: h,
      display: `${h}°`,
      icon: '🎨',
      color: `hsl(${h}, 90%, 55%)`
    }));
    document.getElementById('dataInputBox').value = hues.map(h => `${h}°`).join(', ');
    currentTarget = hues[Math.floor(n / 2)];
  }

  document.getElementById('targetValueInput').value = currentTarget;
  updateHeaderAndCounts();
  syncModalDatasetInputs();
  build3DSceneBars();
  resetSimulationView();
}

function applyCustomInput() {
  const rawText = document.getElementById('dataInputBox').value;
  const parts = rawText.split(',').map(s => s.trim()).filter(s => s.length > 0);
  if (parts.length < 2) {
    alert('Ingresa al menos 2 elementos separados por coma.');
    return;
  }

  rawItems = parts.map((str, idx) => {
    let numVal = parseFloat(str);
    if (!isNaN(numVal)) {
      return { id: `item-${idx}`, value: numVal, display: `${numVal}`, color: '#38E5FF' };
    } else if (str.length === 1) {
      return { id: `item-${idx}`, value: str.toUpperCase().charCodeAt(0), display: str.toUpperCase(), color: '#FFDE59' };
    } else {
      return { id: `item-${idx}`, value: str.length * 10, display: str, color: '#C084FC' };
    }
  });

  currentTarget = rawItems[Math.floor(rawItems.length / 2)].value;
  document.getElementById('targetValueInput').value = currentTarget;
  updateHeaderAndCounts();
  syncModalDatasetInputs();
  build3DSceneBars();
  resetSimulationView();
}

function pickRandomTarget() {
  if (rawItems.length > 0) {
    const randItem = rawItems[Math.floor(Math.random() * rawItems.length)];
    currentTarget = randItem.value;
    const disp = randItem.display || randItem.value;
    document.getElementById('targetValueInput').value = disp;
    const modalTgt = document.getElementById('modalTargetValueInput');
    if (modalTgt) modalTgt.value = disp;
    resetSimulationView();
  }
}

function updateHeaderAndCounts() {
  const n = rawItems.length;
  document.getElementById('arrayLengthLabel').innerText = n;
  const modalN = document.getElementById('modalArrayLengthLabel');
  if (modalN) modalN.innerText = n;
  document.querySelectorAll('.activeNVal').forEach(el => el.innerText = n);
  renderMatrixTable();
}

/* =========================================================================
   3. ALGORITHM NAVIGATION & ZERO-SCROLL RENDERING
   ========================================================================= */

function filterAlgoCategory(cat) {
  currentCategory = cat;
  ['all', 'sort', 'search', 'complexity'].forEach(c => {
    const btn = document.getElementById(`tab-${c}`);
    if (btn) btn.className = (c === cat)
      ? 'neo-button bg-black text-white px-4 py-1.5 text-xs uppercase font-mono tracking-wider'
      : 'neo-button bg-white text-black px-4 py-1.5 text-xs uppercase font-mono tracking-wider';
  });
  renderAlgorithmCards();
}

function renderAlgorithmCards() {
  const grid = document.getElementById('algoCardsGrid');
  let html = '';
  let totalCount = 0;

  for (let key in ALGORITHMS_CATALOG) {
    totalCount++;
    const item = ALGORITHMS_CATALOG[key];
    if (currentCategory !== 'all' && item.category !== currentCategory) continue;

    const isSelected = (key === selectedAlgoId);
    html += `
      <div onclick="openAlgoModal('${key}')" id="card-${key}"
        class="neo-box p-2 text-left flex flex-col justify-between cursor-pointer hover:translate-y-[-2px] transition-transform ${isSelected ? 'active-card' : 'bg-white'}"
        title="Clic para abrir laboratorio y simulación interactiva de ${item.name}">
        <div>
          <div class="flex items-center justify-between mb-1 gap-1">
            <span class="neo-badge ${item.badge} text-black text-xs px-1.5 py-0.5 font-mono font-black">
              ${item.bigO}
            </span>
            <span class="text-xs font-mono font-bold uppercase text-gray-700">${item.category}</span>
          </div>
          <div class="font-black text-sm text-black leading-snug truncate mt-1">${item.name}</div>
        </div>
        <div class="mt-2 pt-1 border-t border-black/30 flex items-center justify-between text-xs font-mono font-bold text-gray-800">
          <span>Esp: ${item.space}</span>
          <span class="text-neoDark flex items-center gap-1 font-sans font-black text-xs">
            <i class="fa-solid fa-play text-neoOrange"></i> Simular
          </span>
        </div>
        <!-- 4 Botones Canónicos de Lenguajes con Iconos Oficiales -->
        <div class="mt-1.5 pt-1 border-t border-black/20 flex items-center justify-between gap-1 w-full" onclick="event.stopPropagation()">
          <button onclick="openMultiLangModal('${key}', 'pseint')" class="flex-1 py-0.5 px-0.5 text-[10px] font-mono font-black rounded bg-neoCyan text-black hover:brightness-110 flex items-center justify-center gap-0.5 shadow-sm border border-black" title="Ver pseudocódigo PSeInt y diagrama de flujo">
            <i class="fa-solid fa-diagram-project text-[9px]"></i> PSeInt
          </button>
          <button onclick="openMultiLangModal('${key}', 'python')" class="flex-1 py-0.5 px-0.5 text-[10px] font-mono font-black rounded bg-[#3776AB] text-white hover:brightness-110 flex items-center justify-center gap-0.5 shadow-sm border border-black" title="Ver script Python 3 y traza CLI">
            <i class="fa-brands fa-python text-[9px]"></i> Py
          </button>
          <button onclick="openMultiLangModal('${key}', 'web')" class="flex-1 py-0.5 px-0.5 text-[10px] font-mono font-black rounded bg-[#E44D26] text-white hover:brightness-110 flex items-center justify-center gap-0.5 shadow-sm border border-black" title="Ver código Web HTML/CSS/JS y sandbox">
            <i class="fa-brands fa-html5 text-[9px]"></i> Web
          </button>
          <button onclick="openMultiLangModal('${key}', 'csharp')" class="flex-1 py-0.5 px-0.5 text-[10px] font-mono font-black rounded bg-[#512BD4] text-white hover:brightness-110 flex items-center justify-center gap-0.5 shadow-sm border border-black" title="Ver código C# .NET y benchmark">
            <i class="fa-solid fa-code text-[9px]"></i> C#
          </button>
        </div>
      </div>
    `;
  }
  grid.innerHTML = html;
  document.getElementById('count-all').innerText = totalCount;
}

function selectAlgorithm(key) {
  pauseSimulation();
  selectedAlgoId = key;
  const meta = ALGORITHMS_CATALOG[key];

  renderAlgorithmCards();

  document.getElementById('activeBadge').className = `neo-badge ${meta.badge} text-black text-xs px-2.5 py-0.5 font-mono font-black`;
  document.getElementById('activeBadge').innerText = meta.bigO;
  document.getElementById('activeTypeBadge').innerText = meta.category;
  document.getElementById('activeTitle').innerText = meta.name;
  document.getElementById('activeDescription').innerText = meta.desc;
  
  document.getElementById('codePreview').innerText = meta.code;

  resetSimulationView();
}

function renderMatrixTable() {
  const tbody = document.getElementById('matrixTableBody');
  const n = rawItems.length;
  let html = '';

  for (let key in ALGORITHMS_CATALOG) {
    const item = ALGORITHMS_CATALOG[key];
    const ops = item.calcOps(n);
    html += `
      <tr class="hover:bg-neoYellow transition border-2 border-black cursor-pointer" onclick="selectAlgorithm('${key}')">
        <td class="p-2.5 sm:p-3 border-2 border-black font-black text-xs sm:text-sm flex items-center gap-2">
          <span class="w-2.5 h-2.5 border border-black ${item.badge}"></span>
          ${item.name}
        </td>
        <td class="p-2.5 sm:p-3 border-2 border-black text-gray-900 font-bold text-xs sm:text-sm uppercase">${item.category}</td>
        <td class="p-2.5 sm:p-3 border-2 border-black font-mono text-xs sm:text-sm text-emerald-700">${item.best}</td>
        <td class="p-2.5 sm:p-3 border-2 border-black font-mono text-xs sm:text-sm text-cyan-800">${item.avg}</td>
        <td class="p-2.5 sm:p-3 border-2 border-black font-mono text-xs sm:text-sm text-rose-800">${item.worst}</td>
        <td class="p-2.5 sm:p-3 border-2 border-black font-mono text-xs sm:text-sm font-black">${ops.toLocaleString()}</td>
        <td class="p-2.5 sm:p-3 border-2 border-black font-mono text-xs sm:text-sm">${item.space}</td>
        <td class="p-2.5 sm:p-3 border-2 border-black font-sans font-bold text-xs sm:text-sm">${item.stable}</td>
      </tr>
    `;
  }
  tbody.innerHTML = html;
}

/* =========================================================================
   4. ACTION QUEUE GENERATOR (REAL-TIME ENGINE)
   ========================================================================= */

function generateAlgorithmActions() {
  actionQueue = [];
  let arr = rawItems.map(item => ({ ...item }));
  const n = arr.length;

  switch(selectedAlgoId) {
    case 'bubble_sort': {
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          actionQueue.push({ type: 'compare', indices: [j, j + 1], msg: `Comparando [${j}] (${arr[j].display}) vs [${j+1}] (${arr[j+1].display})` });
          if (arr[j].value > arr[j + 1].value) {
            actionQueue.push({ type: 'swap', indices: [j, j + 1], msg: `Swap: ${arr[j].display} > ${arr[j+1].display} (desplazando hacia la derecha)` });
            let tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
          }
        }
        actionQueue.push({ type: 'sorted', indices: [n - i - 1], msg: `Elemento mayor fijado en su posición final [${n - i - 1}]` });
      }
      actionQueue.push({ type: 'sorted', indices: [0], msg: '¡Arreglo completamente ordenado con éxito!' });
      break;
    }

    case 'selection_sort': {
      for (let i = 0; i < n - 1; i++) {
        let min = i;
        actionQueue.push({ type: 'mark_min', indices: [min], msg: `Pivote mínimo asignado temporalmente en [${i}] = ${arr[i].display}` });
        for (let j = i + 1; j < n; j++) {
          actionQueue.push({ type: 'compare', indices: [min, j], msg: `Comparando actual mínimo [${min}] (${arr[min].display}) con candidato [${j}] (${arr[j].display})` });
          if (arr[j].value < arr[min].value) {
            min = j;
            actionQueue.push({ type: 'mark_min', indices: [min], msg: `Nuevo menor elemento encontrado: [${min}] = ${arr[min].display}` });
          }
        }
        if (min !== i) {
          actionQueue.push({ type: 'swap', indices: [i, min], msg: `Intercambiando elemento menor [${min}] con la posición libre [${i}]` });
          let tmp = arr[i]; arr[i] = arr[min]; arr[min] = tmp;
        }
        actionQueue.push({ type: 'sorted', indices: [i], msg: `Elemento [${i}] ordenado.` });
      }
      actionQueue.push({ type: 'sorted', indices: [n - 1], msg: 'Ordenamiento finalizado.' });
      break;
    }

    case 'insertion_sort': {
      actionQueue.push({ type: 'sorted', indices: [0], msg: 'El primer elemento se asume ordenado.' });
      for (let i = 1; i < n; i++) {
        let j = i;
        actionQueue.push({ type: 'highlight_key', indices: [i], msg: `Extrayendo clave: ${arr[i].display}` });
        while (j > 0) {
          actionQueue.push({ type: 'compare', indices: [j - 1, j], msg: `Evaluando [${j-1}] vs clave [${j}]` });
          if (arr[j - 1].value > arr[j].value) {
            actionQueue.push({ type: 'swap', indices: [j - 1, j], msg: `Desplazando elemento mayor a la derecha.` });
            let tmp = arr[j]; arr[j] = arr[j - 1]; arr[j - 1] = tmp;
            j--;
          } else {
            break;
          }
        }
        actionQueue.push({ type: 'sorted', indices: [j], msg: `Clave insertada en posición relativa ordenada.` });
      }
      for (let k = 0; k < n; k++) actionQueue.push({ type: 'sorted', indices: [k], msg: 'Completado' });
      break;
    }

    case 'shell_sort': {
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        actionQueue.push({ type: 'log', msg: `Nuevo tamaño de salto (gap) = ${gap}` });
        for (let i = gap; i < n; i++) {
          let j = i;
          while (j >= gap) {
            actionQueue.push({ type: 'compare', indices: [j - gap, j], msg: `Comparación con gap ${gap}: [${j - gap}] y [${j}]` });
            if (arr[j - gap].value > arr[j].value) {
              actionQueue.push({ type: 'swap', indices: [j - gap, j], msg: `Swap por salto: ${arr[j-gap].display} <-> ${arr[j].display}` });
              let tmp = arr[j]; arr[j] = arr[j - gap]; arr[j - gap] = tmp;
              j -= gap;
            } else {
              break;
            }
          }
        }
      }
      for (let k = 0; k < n; k++) actionQueue.push({ type: 'sorted', indices: [k], msg: 'Ordenado' });
      break;
    }

    case 'quick_sort': {
      function qsort(low, high) {
        if (low < high) {
          let pivotVal = arr[high].value;
          actionQueue.push({ type: 'highlight_pivot', indices: [high], msg: `Pivote seleccionado: [${high}] = ${arr[high].display}` });
          let i = low - 1;
          for (let j = low; j < high; j++) {
            actionQueue.push({ type: 'compare', indices: [j, high], msg: `Comparando [${j}] (${arr[j].display}) con pivote [${high}] (${pivotVal})` });
            if (arr[j].value < pivotVal) {
              i++;
              if (i !== j) {
                actionQueue.push({ type: 'swap', indices: [i, j], msg: `Partición: swap [${i}] <-> [${j}]` });
                let tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
              }
            }
          }
          actionQueue.push({ type: 'swap', indices: [i + 1, high], msg: `Posicionando pivote definitivo en [${i + 1}]` });
          let tmp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = tmp;
          let pi = i + 1;
          actionQueue.push({ type: 'sorted', indices: [pi], msg: `Pivote asegurado en su posición final.` });
          qsort(low, pi - 1);
          qsort(pi + 1, high);
        } else if (low === high) {
          actionQueue.push({ type: 'sorted', indices: [low], msg: `Elemento único base [${low}] fijado.` });
        }
      }
      qsort(0, n - 1);
      break;
    }

    case 'heap_sort': {
      function heapify(len, idx) {
        let largest = idx;
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;

        if (left < len) {
          actionQueue.push({ type: 'compare', indices: [left, largest], msg: `Heapify: comparando hijo izquierdo [${left}] con nodo [${largest}]` });
          if (arr[left].value > arr[largest].value) largest = left;
        }
        if (right < len) {
          actionQueue.push({ type: 'compare', indices: [right, largest], msg: `Heapify: comparando hijo derecho [${right}] con mayor [${largest}]` });
          if (arr[right].value > arr[largest].value) largest = right;
        }
        if (largest !== idx) {
          actionQueue.push({ type: 'swap', indices: [idx, largest], msg: `Ajuste Max-Heap: swap [${idx}] con [${largest}]` });
          let tmp = arr[idx]; arr[idx] = arr[largest]; arr[largest] = tmp;
          heapify(len, largest);
        }
      }

      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);
      for (let i = n - 1; i > 0; i--) {
        actionQueue.push({ type: 'swap', indices: [0, i], msg: `Extrayendo máximo del montículo a la posición final [${i}]` });
        let tmp = arr[0]; arr[0] = arr[i]; arr[i] = tmp;
        actionQueue.push({ type: 'sorted', indices: [i], msg: `Elemento máximo fijado en [${i}]` });
        heapify(i, 0);
      }
      actionQueue.push({ type: 'sorted', indices: [0], msg: 'Montículo ordenado por completo.' });
      break;
    }

    case 'merge_sort': {
      actionQueue.push({ type: 'log', msg: 'Iniciando Merge Sort: división recursiva y mezcla ordenada (Divide and Conquer)' });
      for (let curr_size = 1; curr_size < n; curr_size = 2 * curr_size) {
        for (let left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
          let mid = Math.min(left_start + curr_size - 1, n - 1);
          let right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
          if (mid < right_end) {
            actionQueue.push({ type: 'log', msg: `Mezclando sub-listas: [${left_start}..${mid}] y [${mid + 1}..${right_end}]` });
            let i = left_start;
            let j = mid + 1;
            while (i <= mid && j <= right_end) {
              actionQueue.push({ type: 'compare', indices: [i, j], msg: `Merge: comparando [${i}] (${arr[i].display}) vs [${j}] (${arr[j].display})` });
              if (arr[i].value <= arr[j].value) {
                i++;
              } else {
                let valueToShift = arr[j];
                let index = j;
                while (index !== i) {
                  actionQueue.push({ type: 'swap', indices: [index - 1, index], msg: `Desplazando ${arr[index - 1].display} para insertar ${valueToShift.display}` });
                  arr[index] = arr[index - 1];
                  index--;
                }
                arr[i] = valueToShift;
                i++;
                mid++;
                j++;
              }
            }
          }
        }
      }
      for (let k = 0; k < n; k++) actionQueue.push({ type: 'sorted', indices: [k], msg: `Elemento [${k}] ordenado y fusionado con éxito.` });
      break;
    }

    case 'radix_sort': {
      actionQueue.push({ type: 'log', msg: 'Iniciando Radix Sort (LSD): procesamiento posicional por dígitos (O(n · k))' });
      const maxVal = Math.max(...arr.map(el => Math.abs(el.value)), 1);
      for (let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {
        actionQueue.push({ type: 'log', msg: `Paso Radix LSD: Evaluando dígito en orden de magnitud 10^${Math.log10(exp)} (${exp})` });
        for (let i = 0; i < n; i++) {
          const digit = Math.floor(Math.abs(arr[i].value) / exp) % 10;
          actionQueue.push({ type: 'search_inspect', indices: [i], msg: `Elemento [${i}] (${arr[i].display}): dígito clave = ${digit}` });
        }
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            const digitA = Math.floor(Math.abs(arr[j].value) / exp) % 10;
            const digitB = Math.floor(Math.abs(arr[j + 1].value) / exp) % 10;
            if (digitA > digitB) {
              actionQueue.push({ type: 'swap', indices: [j, j + 1], msg: `Radix swap estable: ${arr[j].display} (dígito ${digitA}) > ${arr[j+1].display} (dígito ${digitB})` });
              let tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
            }
          }
        }
      }
      for (let k = 0; k < n; k++) actionQueue.push({ type: 'sorted', indices: [k], msg: `Posición [${k}] asegurada tras distribución de Radix.` });
      break;
    }

    case 'bogo_sort': {
      actionQueue.push({ type: 'log', msg: 'Iniciando Bogo Sort Didáctico: verificación de orden aleatorio (O((n+1)!))' });
      const isSorted = (items) => {
        for (let i = 0; i < items.length - 1; i++) {
          if (items[i].value > items[i + 1].value) return false;
        }
        return true;
      };

      let attempts = 0;
      const maxDidacticTrials = 4;
      while (!isSorted(arr) && attempts < maxDidacticTrials) {
        attempts++;
        actionQueue.push({ type: 'log', msg: `Trial Bogo #${attempts}: Mezcla estocástica simulada...` });
        let idx1 = Math.floor(Math.random() * n);
        let idx2 = Math.floor(Math.random() * n);
        if (idx1 !== idx2) {
          actionQueue.push({ type: 'swap', indices: [idx1, idx2], msg: `Permutación estocástica de prueba: [${idx1}] <-> [${idx2}]` });
          let tmp = arr[idx1]; arr[idx1] = arr[idx2]; arr[idx2] = tmp;
        }
        for (let i = 0; i < n - 1; i++) {
          actionQueue.push({ type: 'compare', indices: [i, i + 1], msg: `Verificando orden estocástico en [${i}] vs [${i + 1}]` });
          if (arr[i].value > arr[i + 1].value) {
            actionQueue.push({ type: 'log', msg: `Desorden detectado: ${arr[i].display} > ${arr[i+1].display}. Reintentando...` });
            break;
          }
        }
      }

      actionQueue.push({ type: 'log', msg: 'Demostración didáctica: Estabilizando arreglo con permutación final óptima.' });
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j].value > arr[j + 1].value) {
            actionQueue.push({ type: 'swap', indices: [j, j + 1], msg: `Ajuste determinista final: [${j}] <-> [${j + 1}]` });
            let tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
          }
        }
        actionQueue.push({ type: 'sorted', indices: [n - i - 1], msg: `Posición [${n - i - 1}] consolidada.` });
      }
      actionQueue.push({ type: 'sorted', indices: [0], msg: 'Bogo Sort: Didácticamente completado.' });
      break;
    }

    // --- SEARCHES ---
    case 'linear_search': {
      let found = false;
      for (let i = 0; i < n; i++) {
        actionQueue.push({ type: 'search_inspect', indices: [i], msg: `Inspección secuencial [${i}]: ${arr[i].display} vs Target '${currentTarget}'` });
        if (isItemTargetMatch(arr[i], currentTarget)) {
          actionQueue.push({ type: 'found', indices: [i], msg: `¡TARGET ENCONTRADO en índice [${i}] (${arr[i].display})!` });
          found = true;
          break;
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: `Target '${currentTarget}' no presente en la colección.` });
      break;
    }

    case 'binary_search': {
      arr.sort((a, b) => a.value - b.value);
      actionQueue.push({ type: 'log', msg: 'Colección ordenada previa requerida para Búsqueda Binaria (O(log n))' });
      let compTarget = getComparableTargetValue(currentTarget, arr);
      let low = 0, high = n - 1, found = false;

      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        actionQueue.push({ type: 'binary_range', indices: [low, mid, high], msg: `Ventana Binaria: Low=[${low}], Mid=[${mid}], High=[${high}]` });
        actionQueue.push({ type: 'search_inspect', indices: [mid], msg: `Evaluando centro arr[${mid}] (${arr[mid].display}) vs Target '${currentTarget}'` });

        if (isItemTargetMatch(arr[mid], currentTarget)) {
          actionQueue.push({ type: 'found', indices: [mid], msg: `¡Target localizado con éxito en el punto medio [${mid}] (${arr[mid].display})!` });
          found = true;
          break;
        }
        if (arr[mid].value < compTarget) {
          low = mid + 1;
          actionQueue.push({ type: 'log', msg: `${arr[mid].display} < Target: Descartando mitad inferior [${low - 1} e inferiores]` });
        } else {
          high = mid - 1;
          actionQueue.push({ type: 'log', msg: `${arr[mid].display} > Target: Descartando mitad superior [${high + 1} y superiores]` });
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: `Target '${currentTarget}' no encontrado en el rango binario.` });
      break;
    }

    case 'jump_search': {
      arr.sort((a, b) => a.value - b.value);
      actionQueue.push({ type: 'log', msg: 'Colección ordenada previa para Búsqueda por Salto (Jump Search O(√n))' });
      let compTarget = getComparableTargetValue(currentTarget, arr);
      let step = Math.floor(Math.sqrt(n));
      let prev = 0, found = false;

      while (arr[Math.min(step, n) - 1].value < compTarget) {
        let blockIdx = Math.min(step, n) - 1;
        actionQueue.push({ type: 'jump_step', indices: [blockIdx], msg: `Salto de bloque (√n=${Math.floor(Math.sqrt(n))}) a índice [${blockIdx}] (${arr[blockIdx].display})` });
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) break;
      }

      actionQueue.push({ type: 'log', msg: `Target acotado en sub-bloque [${prev}..${Math.min(step, n) - 1}]. Iniciando barrido lineal local:` });
      for (let i = prev; i < Math.min(step, n); i++) {
        actionQueue.push({ type: 'search_inspect', indices: [i], msg: `Sondeo lineal dentro del bloque en [${i}] (${arr[i].display})` });
        if (isItemTargetMatch(arr[i], currentTarget)) {
          actionQueue.push({ type: 'found', indices: [i], msg: `¡Target encontrado con Jump Search en posición [${i}] (${arr[i].display})!` });
          found = true;
          break;
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: `Target '${currentTarget}' no hallado en el bloque acotado.` });
      break;
    }

    case 'ternary_search': {
      arr.sort((a, b) => a.value - b.value);
      actionQueue.push({ type: 'log', msg: 'Colección ordenada para Búsqueda Ternaria (O(log₃ n)): Trisección del espacio' });
      let compTarget = getComparableTargetValue(currentTarget, arr);
      let low = 0, high = n - 1, found = false;

      while (low <= high) {
        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = high - Math.floor((high - low) / 3);
        actionQueue.push({ type: 'binary_range', indices: [low, mid1, mid2, high], msg: `Trisección: Rango [${low}..${high}] | Mid1=[${mid1}] (${arr[mid1].display}) | Mid2=[${mid2}] (${arr[mid2].display})` });

        actionQueue.push({ type: 'search_inspect', indices: [mid1], msg: `Comparando Mid1 [${mid1}] (${arr[mid1].display}) vs Target` });
        if (isItemTargetMatch(arr[mid1], currentTarget)) {
          actionQueue.push({ type: 'found', indices: [mid1], msg: `¡Target localizado en Mid1 [${mid1}] (${arr[mid1].display})!` });
          found = true;
          break;
        }

        actionQueue.push({ type: 'search_inspect', indices: [mid2], msg: `Comparando Mid2 [${mid2}] (${arr[mid2].display}) vs Target` });
        if (isItemTargetMatch(arr[mid2], currentTarget)) {
          actionQueue.push({ type: 'found', indices: [mid2], msg: `¡Target localizado en Mid2 [${mid2}] (${arr[mid2].display})!` });
          found = true;
          break;
        }

        if (compTarget < arr[mid1].value) {
          high = mid1 - 1;
          actionQueue.push({ type: 'log', msg: 'Target < Mid1: Descartando los 2/3 superiores del espacio.' });
        } else if (compTarget > arr[mid2].value) {
          low = mid2 + 1;
          actionQueue.push({ type: 'log', msg: 'Target > Mid2: Descartando los 2/3 inferiores del espacio.' });
        } else {
          low = mid1 + 1;
          high = mid2 - 1;
          actionQueue.push({ type: 'log', msg: 'Target en tercio medio: Descartando extremos externos.' });
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: `Target '${currentTarget}' ausente en el espacio trisecado.` });
      break;
    }

    case 'interpolation_search': {
      arr.sort((a, b) => a.value - b.value);
      actionQueue.push({ type: 'log', msg: 'Colección ordenada para Búsqueda por Interpolación (O(log log n)): Sondeo proporcional' });
      let compTarget = getComparableTargetValue(currentTarget, arr);
      let low = 0, high = n - 1, found = false;

      while (low <= high && compTarget >= arr[low].value && compTarget <= arr[high].value) {
        if (low === high) {
          actionQueue.push({ type: 'search_inspect', indices: [low], msg: `Sondeo en índice único [${low}] (${arr[low].display})` });
          if (isItemTargetMatch(arr[low], currentTarget)) {
            actionQueue.push({ type: 'found', indices: [low], msg: `¡Target localizado en [${low}]!` });
            found = true;
          }
          break;
        }

        let fraction = (compTarget - arr[low].value) / (arr[high].value - arr[low].value);
        let pos = low + Math.floor(fraction * (high - low));
        if (pos < low) pos = low;
        if (pos > high) pos = high;

        actionQueue.push({ type: 'binary_range', indices: [low, pos, high], msg: `Fórmula de Interpolación: posición estimada pos=[${pos}] en rango [${low}..${high}]` });
        actionQueue.push({ type: 'search_inspect', indices: [pos], msg: `Sondeo interpolado en arr[${pos}] (${arr[pos].display}) vs Target` });

        if (isItemTargetMatch(arr[pos], currentTarget)) {
          actionQueue.push({ type: 'found', indices: [pos], msg: `¡Target localizado con Interpolación en [${pos}] (${arr[pos].display})!` });
          found = true;
          break;
        }

        if (arr[pos].value < compTarget) {
          low = pos + 1;
          actionQueue.push({ type: 'log', msg: `arr[${pos}] < Target: Ajustando límite inferior low a ${low}` });
        } else {
          high = pos - 1;
          actionQueue.push({ type: 'log', msg: `arr[${pos}] > Target: Ajustando límite superior high a ${high}` });
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: `Target '${currentTarget}' no hallado mediante interpolación.` });
      break;
    }

    case 'exponential_search': {
      arr.sort((a, b) => a.value - b.value);
      actionQueue.push({ type: 'log', msg: 'Colección ordenada para Búsqueda Exponencial (O(log n)): Duplicación de rango 2^i' });
      let compTarget = getComparableTargetValue(currentTarget, arr);
      let found = false;

      actionQueue.push({ type: 'search_inspect', indices: [0], msg: `Inspección de base en arr[0] (${arr[0].display})` });
      if (isItemTargetMatch(arr[0], currentTarget)) {
        actionQueue.push({ type: 'found', indices: [0], msg: `¡Target localizado en la posición cero [0]!` });
        found = true;
      } else {
        let i = 1;
        while (i < n && arr[i].value <= compTarget) {
          actionQueue.push({ type: 'jump_step', indices: [i], msg: `Salto exponencial 2^k: índice [${i}] (${arr[i].display})` });
          if (isItemTargetMatch(arr[i], currentTarget)) {
            actionQueue.push({ type: 'found', indices: [i], msg: `¡Target localizado durante salto exponencial en [${i}]!` });
            found = true;
            break;
          }
          i = i * 2;
        }

        if (!found) {
          let low = Math.floor(i / 2);
          let high = Math.min(i, n - 1);
          actionQueue.push({ type: 'log', msg: `Límite detectado. Concluyendo con Búsqueda Binaria en ventana exponencial [${low}..${high}]:` });
          while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            actionQueue.push({ type: 'binary_range', indices: [low, mid, high], msg: `Ventana Binaria final: Low=[${low}], Mid=[${mid}], High=[${high}]` });
            actionQueue.push({ type: 'search_inspect', indices: [mid], msg: `Evaluando [${mid}] (${arr[mid].display}) vs Target` });
            if (isItemTargetMatch(arr[mid], currentTarget)) {
              actionQueue.push({ type: 'found', indices: [mid], msg: `¡Target confirmado en [${mid}] (${arr[mid].display})!` });
              found = true;
              break;
            }
            if (arr[mid].value < compTarget) {
              low = mid + 1;
            } else {
              high = mid - 1;
            }
          }
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: `Target '${currentTarget}' ausente en el espacio exponencial.` });
      break;
    }

    default: {
      const meta = ALGORITHMS_CATALOG[selectedAlgoId];
      const totalOps = Math.min(meta.calcOps(n), 35);
      for (let i = 0; i < totalOps; i++) {
        let idx = i % n;
        actionQueue.push({
          type: 'complexity_pulse',
          indices: [idx],
          msg: `Operación atómica ${i + 1}/${totalOps} [${meta.bigO}] computada.`
        });
      }
      actionQueue.push({ type: 'log', msg: `Evaluación de clase matemática ${meta.bigO} completada.` });
    }
  }
}

/* =========================================================================
   5. SIMULATION CONTROLLER & ZERO-SCROLL MONITOR ENGINE
   ========================================================================= */

function resetSimulationView() {
  pauseSimulation();
  currentStepIndex = 0;
  liveComparisons = 0;
  liveSwaps = 0;
  liveMemAccess = 0;
  recentEventsHistory = [];
  generateAlgorithmActions();

  updateMonitorCard('STANDBY', 'Motor listo', `Algoritmo cargado: ${ALGORITHMS_CATALOG[selectedAlgoId].name} (${actionQueue.length} acciones)`, 'fa-circle-play', 'bg-black text-white');
  renderRecentHistory();
  updateStepCounter();
  updateMetricsHUD(0);
  render2DStage();
  reset3DPositionsAndColors();
}

function togglePlayPause() {
  if (isPlaying) {
    pauseSimulation();
  } else {
    playSimulation();
  }
}

function updatePlayPauseButtons(playing) {
  const btn = document.getElementById('btnRunSim');
  const modalBtn = document.getElementById('btnModalRunSim');
  const icon = playing ? 'fa-pause' : 'fa-play';
  const text = playing ? 'Pausar' : 'Ejecutar';
  const bg = playing ? 'bg-neoOrange' : 'bg-neoYellow';

  if (btn) {
    btn.className = `neo-button ${bg} px-3.5 py-2 text-xs uppercase flex items-center gap-1.5`;
    const i = document.getElementById('btnRunIcon');
    const t = document.getElementById('btnRunText');
    if (i) i.className = `fa-solid ${icon}`;
    if (t) t.innerText = text;
  }
  if (modalBtn) {
    modalBtn.className = `neo-button ${bg} px-3.5 py-1.5 text-xs uppercase flex items-center gap-1.5 font-black text-black`;
    const mi = document.getElementById('btnModalRunIcon');
    const mt = document.getElementById('btnModalRunText');
    if (mi) mi.className = `fa-solid ${icon}`;
    if (mt) mt.innerText = text;
  }
}

function playSimulation() {
  if (currentStepIndex >= actionQueue.length) {
    resetSimulationView();
  }
  isPlaying = true;
  startTime = performance.now();
  updatePlayPauseButtons(true);
  const badge = document.getElementById('simStatusBadge');
  if (badge) badge.innerHTML = `<span class="w-3 h-3 rounded-full bg-neoPink border-2 border-black inline-block animate-ping"></span> En Ejecución`;
  
  timerId = setInterval(executeNextAction, animationSpeed);
}

function pauseSimulation() {
  isPlaying = false;
  if (timerId) clearInterval(timerId);
  updatePlayPauseButtons(false);
  const badge = document.getElementById('simStatusBadge');
  if (badge) badge.innerHTML = `<span class="w-3 h-3 rounded-full bg-neoGreen border-2 border-black inline-block"></span> Listo`;
}

function stepForwardSimulation() {
  pauseSimulation();
  executeNextAction();
}

function executeNextAction() {
  if (currentStepIndex >= actionQueue.length) {
    pauseSimulation();
    updateMonitorCard('FINALIZADO', '¡Ejecución concluida!', 'Todos los pasos fueron procesados exitosamente.', 'fa-circle-check', 'bg-neoGreen text-black');
    document.getElementById('simStatusBadge').innerHTML = `<span class="w-3 h-3 rounded-full bg-neoGreen border-2 border-black inline-block"></span> Completado`;
    return;
  }

  const action = actionQueue[currentStepIndex];
  applyActionToView(action);
  currentStepIndex++;
  updateStepCounter();
  updateMetricsHUD(performance.now() - startTime);
}

function applyActionToView(action) {
  if (action.msg) {
    pushRecentHistory(action.msg, action.type);
  }

  document.querySelectorAll('.element-card-2d').forEach(el => {
    if (!el.classList.contains('bg-neoGreen')) {
      el.className = 'element-card-2d bg-white flex flex-col justify-between items-center p-1 font-mono font-bold';
    }
  });
  reset3DActiveColorsOnly();

  switch(action.type) {
    case 'compare': {
      liveComparisons++;
      liveMemAccess += 2;
      const [i, j] = action.indices;
      highlight2DCard(i, 'bg-neoYellow scale-105', 'CMP');
      highlight2DCard(j, 'bg-neoYellow scale-105', 'CMP');
      highlight3DBar(i, 0xFFDE59, 1.2);
      highlight3DBar(j, 0xFFDE59, 1.2);
      updateMonitorCard('COMPARACIÓN', `Evaluando [${i}] con [${j}]`, action.msg, 'fa-code-compare', 'bg-neoYellow text-black');
      break;
    }

    case 'swap': {
      liveSwaps++;
      liveMemAccess += 4;
      const [i, j] = action.indices;
      highlight2DCard(i, 'bg-neoPink scale-110', 'SWAP');
      highlight2DCard(j, 'bg-neoPink scale-110', 'SWAP');
      swap2DCardElements(i, j);
      animate3DSwap(i, j);
      updateMonitorCard('SWAP / INTERCAMBIO', `Intercambiando posición [${i}] con [${j}]`, action.msg, 'fa-arrows-rotate', 'bg-neoPink text-black');
      break;
    }

    case 'sorted': {
      action.indices.forEach(idx => {
        const el = document.getElementById(`card-2d-${idx}`);
        if (el) el.className = 'element-card-2d bg-neoGreen text-black flex flex-col justify-between items-center p-1 font-mono font-bold';
        highlight3DBar(idx, 0x54F18F, 1.0);
      });
      updateMonitorCard('FIJADO', 'Elemento asegurado en orden', action.msg, 'fa-circle-check', 'bg-neoGreen text-black');
      break;
    }

    case 'mark_min': {
      const idx = action.indices[0];
      highlight2DCard(idx, 'bg-neoOrange scale-110', 'MIN');
      highlight3DBar(idx, 0xFF7A00, 1.25);
      updateMonitorCard('MÍNIMO', `Nuevo valor mínimo en [${idx}]`, action.msg, 'fa-arrow-down-short-wide', 'bg-neoOrange text-black');
      break;
    }

    case 'highlight_pivot': {
      const idx = action.indices[0];
      highlight2DCard(idx, 'bg-neoPurple text-white scale-115', 'PIVOT');
      highlight3DBar(idx, 0xC084FC, 1.3);
      updateMonitorCard('PIVOTE', `Pivote activo fijado en [${idx}]`, action.msg, 'fa-bullseye', 'bg-neoPurple text-white');
      break;
    }

    case 'highlight_key': {
      const idx = action.indices[0];
      highlight2DCard(idx, 'bg-neoCyan scale-110', 'KEY');
      highlight3DBar(idx, 0x38E5FF, 1.2);
      updateMonitorCard('INSERCIÓN', `Clave extraída en [${idx}]`, action.msg, 'fa-key', 'bg-neoCyan text-black');
      break;
    }

    case 'search_inspect': {
      liveComparisons++;
      liveMemAccess++;
      const idx = action.indices[0];
      highlight2DCard(idx, 'bg-neoYellow scale-110', 'INSPECT');
      highlight3DBar(idx, 0xFFDE59, 1.25);
      updateMonitorCard('BÚSQUEDA', `Inspeccionando celda [${idx}]`, action.msg, 'fa-magnifying-glass', 'bg-neoYellow text-black');
      break;
    }

    case 'binary_range': {
      const [l, m, h] = action.indices;
      highlight2DCard(m, 'bg-neoCyan scale-115', 'MID');
      highlight3DBar(m, 0x38E5FF, 1.3);
      updateMonitorCard('SUB-RANGO', `División binaria activa (Low:${l}, Mid:${m}, High:${h})`, action.msg, 'fa-arrows-split-up-and-left', 'bg-neoCyan text-black');
      break;
    }

    case 'jump_step': {
      const idx = action.indices[0];
      highlight2DCard(idx, 'bg-neoPurple text-white scale-115', 'JUMP');
      highlight3DBar(idx, 0xC084FC, 1.3);
      updateMonitorCard('SALTO DE BLOQUE', `Salto √n a posición [${idx}]`, action.msg, 'fa-forward', 'bg-neoPurple text-white');
      break;
    }

    case 'found': {
      const idx = action.indices[0];
      highlight2DCard(idx, 'bg-neoGreen scale-125 border-4 border-black', 'FOUND!');
      highlight3DBar(idx, 0x54F18F, 1.4);
      updateMonitorCard('¡ENCONTRADO!', `Objetivo localizado en índice [${idx}]`, action.msg, 'fa-flag-checkered', 'bg-neoGreen text-black');
      break;
    }

    case 'complexity_pulse': {
      liveMemAccess++;
      const idx = action.indices[0];
      highlight2DCard(idx, 'bg-neoPink scale-110', 'OP');
      highlight3DBar(idx, 0xFF90E8, 1.25);
      updateMonitorCard('OPERACIÓN', `Paso computacional en [${idx}]`, action.msg, 'fa-microchip', 'bg-neoPink text-black');
      break;
    }

    case 'not_found': {
      updateMonitorCard('NO ENCONTRADO', 'Búsqueda finalizada sin coincidencias', action.msg, 'fa-circle-xmark', 'bg-neoRed text-white');
      break;
    }
  }
}

function updateMonitorCard(badgeText, mainText, subText, iconClass, badgeClass) {
  const badge = document.getElementById('spotlightActionBadge');
  const mainT = document.getElementById('spotlightMainText');
  const subT = document.getElementById('spotlightSubText');
  const icon = document.getElementById('spotlightIcon');
  if (badge) {
    badge.className = `neo-badge px-2 py-0.5 text-xs font-mono uppercase font-black ${badgeClass}`;
    badge.innerText = badgeText;
  }
  if (mainT) mainT.innerText = mainText;
  if (subT) subT.innerText = subText || '';
  if (icon) icon.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;

  const mBadge = document.getElementById('modalSpotlightActionBadge');
  const mMainT = document.getElementById('modalSpotlightMainText');
  const mSubT = document.getElementById('modalSpotlightSubText');
  const mIcon = document.getElementById('modalSpotlightIcon');
  if (mBadge) {
    mBadge.className = `neo-badge px-2 py-0.5 text-xs font-mono uppercase font-black ${badgeClass}`;
    mBadge.innerText = badgeText;
  }
  if (mMainT) mMainT.innerText = mainText;
  if (mSubT) mSubT.innerText = subText || '';
  if (mIcon) mIcon.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
}

function pushRecentHistory(msg, type) {
  recentEventsHistory.unshift({ msg, type });
  if (recentEventsHistory.length > 3) recentEventsHistory.pop();
  renderRecentHistory();
}

function renderRecentHistory() {
  const container = document.getElementById('liveStepHistory');
  if (recentEventsHistory.length === 0) {
    container.innerHTML = `
      <div class="p-1.5 bg-white border border-black flex items-center justify-between text-gray-500">
        <span>&bull; Esperando activación de algoritmo...</span>
        <span class="text-xs font-mono font-bold text-gray-700">0 ms</span>
      </div>`;
    return;
  }

  let html = '';
  recentEventsHistory.forEach((ev, i) => {
    const opacity = i === 0 ? 'opacity-100 font-bold bg-[#FFFDF0]' : (i === 1 ? 'opacity-75 bg-white' : 'opacity-50 bg-white');
    html += `
      <div class="p-1.5 border border-black flex items-center justify-between text-black ${opacity}">
        <span class="truncate pr-2">&bull; ${ev.msg}</span>
        <span class="text-xs uppercase neo-badge bg-black text-white px-2 py-0.5 font-bold">${ev.type}</span>
      </div>`;
  });
  container.innerHTML = html;
}

function render2DStage() {
  const container = document.getElementById('canvasViewport');
  const modalContainer = document.getElementById('modalCanvasViewport');
  const maxVal = Math.max(...rawItems.map(d => d.value), 1);
  
  let html = `<div class="flex items-end justify-between gap-1 w-full h-full pb-2 select-none" id="cardsTrack2D">`;
  let modalHtml = `<div class="flex items-end justify-between gap-1 w-full h-full pb-2 select-none" id="modalCardsTrack2D">`;

  rawItems.forEach((item, idx) => {
    const heightPct = Math.max(38, Math.round((item.value / maxVal) * 240));
    const modalHeightPct = Math.max(34, Math.round((item.value / maxVal) * 190));

    html += `
      <div id="card-col-${idx}" class="flex-1 flex flex-col items-center min-w-0">
        <span id="label-top-${idx}" class="text-xs sm:text-sm font-mono font-black mb-1 truncate w-full text-center">${item.display}</span>
        <div id="card-2d-${idx}" style="height: ${heightPct}px; background-color: ${item.color};"
          class="element-card-2d w-full flex flex-col justify-between items-center p-0.5 font-mono font-bold">
          <span id="tag-2d-${idx}" class="text-xs bg-black text-white px-1.5 py-0.5 font-mono font-black leading-none">-</span>
          <span class="text-sm sm:text-base leading-none mb-1">${item.icon || '▪'}</span>
        </div>
        <span class="text-xs font-mono font-bold text-gray-800 mt-1">[${idx}]</span>
      </div>
    `;

    modalHtml += `
      <div id="modal-card-col-${idx}" class="flex-1 flex flex-col items-center min-w-0">
        <span id="modal-label-top-${idx}" class="text-xs font-mono font-black mb-1 truncate w-full text-center">${item.display}</span>
        <div id="modal-card-2d-${idx}" style="height: ${modalHeightPct}px; background-color: ${item.color};"
          class="element-card-2d w-full flex flex-col justify-between items-center p-0.5 font-mono font-bold">
          <span id="modal-tag-2d-${idx}" class="text-xs bg-black text-white px-1.5 py-0.5 font-mono font-black leading-none">-</span>
          <span class="text-sm sm:text-base leading-none mb-1">${item.icon || '▪'}</span>
        </div>
        <span class="text-xs font-mono font-bold text-gray-800 mt-1">[${idx}]</span>
      </div>
    `;
  });

  html += `</div>`;
  modalHtml += `</div>`;
  if (container) container.innerHTML = html;
  if (modalContainer) modalContainer.innerHTML = modalHtml;
}

function highlight2DCard(index, classNames, tagText = '') {
  const card = document.getElementById(`card-2d-${index}`);
  const tag = document.getElementById(`tag-2d-${index}`);
  if (card) card.className = `element-card-2d w-full ${classNames}`;
  if (tag && tagText) tag.innerText = tagText;

  const modalCard = document.getElementById(`modal-card-2d-${index}`);
  const modalTag = document.getElementById(`modal-tag-2d-${index}`);
  if (modalCard) modalCard.className = `element-card-2d w-full ${classNames}`;
  if (modalTag && tagText) modalTag.innerText = tagText;
}

function swap2DCardElements(i, j) {
  const colI = document.getElementById(`card-col-${i}`);
  const colJ = document.getElementById(`card-col-${j}`);
  if (colI && colJ) {
    const temp = colI.innerHTML;
    colI.innerHTML = colJ.innerHTML;
    colJ.innerHTML = temp;

    colI.querySelector('[id^="card-2d-"]').id = `card-2d-${i}`;
    colJ.querySelector('[id^="card-2d-"]').id = `card-2d-${j}`;
    colI.querySelector('[id^="tag-2d-"]').id = `tag-2d-${i}`;
    colJ.querySelector('[id^="tag-2d-"]').id = `tag-2d-${j}`;
  }

  const mColI = document.getElementById(`modal-card-col-${i}`);
  const mColJ = document.getElementById(`modal-card-col-${j}`);
  if (mColI && mColJ) {
    const mTemp = mColI.innerHTML;
    mColI.innerHTML = mColJ.innerHTML;
    mColJ.innerHTML = mTemp;

    mColI.querySelector('[id^="modal-card-2d-"]').id = `modal-card-2d-${i}`;
    mColJ.querySelector('[id^="modal-card-2d-"]').id = `modal-card-2d-${j}`;
    mColI.querySelector('[id^="modal-tag-2d-"]').id = `modal-tag-2d-${i}`;
    mColJ.querySelector('[id^="modal-tag-2d-"]').id = `modal-tag-2d-${j}`;
  }
}

function updateStepCounter() {
  const text = `Paso: ${currentStepIndex} / ${actionQueue.length}`;
  const mainCounter = document.getElementById('currentStepCounter');
  const modalCounter = document.getElementById('modalCurrentStepCounter');
  if (mainCounter) mainCounter.innerText = text;
  if (modalCounter) modalCounter.innerText = text;
}

function updateMetricsHUD(elapsedMs = 0) {
  const meta = ALGORITHMS_CATALOG[selectedAlgoId];
  if (!meta) return;
  const n = rawItems.length;

  const mTime = document.getElementById('metricExecutionTime');
  const mComp = document.getElementById('metricComparisons');
  const mOps = document.getElementById('metricTheoreticalOps');
  const mSwap = document.getElementById('metricSwaps');
  const mMem = document.getElementById('metricMemAccess');
  const mSpace = document.getElementById('metricAuxSpace');
  const mWorst = document.getElementById('metricAuxDetail');
  const mScale = document.getElementById('metricScalability');
  const mFormula = document.getElementById('metricFormulaLabel');

  if (mTime) mTime.innerText = `${elapsedMs.toFixed(2)} ms`;
  if (mComp) mComp.innerText = liveComparisons;
  if (mOps) mOps.innerText = `Teórico: ~${meta.calcOps(n)}`;
  if (mSwap) mSwap.innerText = liveSwaps;
  if (mMem) mMem.innerText = liveMemAccess;
  if (mSpace) mSpace.innerText = meta.space;
  if (mWorst) mWorst.innerText = meta.worst;
  if (mScale) mScale.innerText = meta.bigO;
  if (mFormula) mFormula.innerText = meta.name;

  const modalComp = document.getElementById('modalMetricComparisons');
  const modalSwap = document.getElementById('modalMetricSwaps');
  const modalMem = document.getElementById('modalMetricMemAccess');
  const modalTime = document.getElementById('modalMetricExecutionTime');
  if (modalComp) modalComp.innerText = liveComparisons;
  if (modalSwap) modalSwap.innerText = liveSwaps;
  if (modalMem) modalMem.innerText = liveMemAccess;
  if (modalTime) modalTime.innerText = `${elapsedMs.toFixed(2)} ms`;
}

/* =========================================================================
   6. THREE.JS 3D SCENE & REAL KINEMATIC SWAP ANIMATION
   ========================================================================= */

function initThreeScene() {
  const container = document.getElementById('threeContainer');
  const width = container.clientWidth;
  const height = container.clientHeight;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xF4EFE6);

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 16, 26);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2 - 0.05;

  const ambient = new THREE.AmbientLight(0xffffff, 0.95);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0x000000, 0.35);
  sun.position.set(10, 30, 20);
  scene.add(sun);

  const grid = new THREE.GridHelper(30, 15, 0x000000, 0xCCC5B4);
  grid.position.y = 0;
  scene.add(grid);

  function animate() {
    requestAnimationFrame(animate);

    threeBlocks.forEach(b => {
      if (b.mesh) {
        b.mesh.position.x += (b.targetX - b.mesh.position.x) * 0.2;
        b.mesh.position.y += (b.targetY - b.mesh.position.y) * 0.2;
      }
    });

    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

function build3DSceneBars() {
  if (!scene) return;
  threeBlocks.forEach(b => scene.remove(b.mesh));
  threeBlocks = [];

  const n = rawItems.length;
  const barWidth = 1.1;
  const spacing = 1.7;
  const startX = -((n - 1) * spacing) / 2;
  const maxVal = Math.max(...rawItems.map(d => d.value), 1);

  rawItems.forEach((item, i) => {
    const height = Math.max(1.2, (item.value / maxVal) * 11);
    const geo = new THREE.BoxGeometry(barWidth, height, barWidth);
    const mat = new THREE.MeshLambertMaterial({ color: 0x38E5FF });
    const mesh = new THREE.Mesh(geo, mat);

    const targetX = startX + (i * spacing);
    const targetY = height / 2;
    mesh.position.set(targetX, targetY, 0);

    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
    mesh.add(line);

    scene.add(mesh);
    threeBlocks.push({
      mesh: mesh,
      index: i,
      baseHeight: height,
      targetX: targetX,
      targetY: targetY
    });
  });
}

function animate3DSwap(i, j) {
  if (i < 0 || j < 0 || i >= threeBlocks.length || j >= threeBlocks.length) return;

  const blockA = threeBlocks[i];
  const blockB = threeBlocks[j];

  const posXA = blockA.targetX;
  const posXB = blockB.targetX;

  blockA.mesh.position.y = blockA.baseHeight / 2 + 2.5;
  blockB.mesh.position.y = blockB.baseHeight / 2 + 2.5;

  blockA.targetX = posXB;
  blockB.targetX = posXA;
  blockA.targetY = blockA.baseHeight / 2;
  blockB.targetY = blockB.baseHeight / 2;

  threeBlocks[i] = blockB;
  threeBlocks[j] = blockA;
}

function highlight3DBar(index, hexColor, scaleY = 1.0) {
  if (index >= 0 && index < threeBlocks.length) {
    const b = threeBlocks[index];
    b.mesh.material.color.setHex(hexColor);
    b.mesh.scale.set(1.2, scaleY, 1.2);
  }
}

function reset3DActiveColorsOnly() {
  threeBlocks.forEach(b => {
    if (b.mesh.material.color.getHex() !== 0x54F18F) {
      b.mesh.material.color.setHex(0x38E5FF);
      b.mesh.scale.set(1, 1, 1);
    }
  });
}

function reset3DPositionsAndColors() {
  const n = rawItems.length;
  const spacing = 1.7;
  const startX = -((n - 1) * spacing) / 2;

  threeBlocks.forEach((b, i) => {
    b.targetX = startX + (i * spacing);
    b.targetY = b.baseHeight / 2;
    b.mesh.position.x = b.targetX;
    b.mesh.position.y = b.targetY;
    b.mesh.material.color.setHex(0x38E5FF);
    b.mesh.scale.set(1, 1, 1);
  });
}

function reset3DCamera() {
  if (controls && camera) {
    controls.reset();
    camera.position.set(0, 16, 26);
    controls.target.set(0, 4, 0);
  }
}

function onWindowResize() {
  if (!camera || !renderer) return;
  const container = document.getElementById('threeContainer');
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

/* =========================================================================
   SISTEMA MAESTRO DE MODALES BIG-O & NARRACIÓN DE VOZ TTS (ESTÁNDAR JPV PRO)
   Arquitectura: Web Speech API Nativo + Neo-Brutalist High-Contrast UI
   ========================================================================= */

const BIG_O_CATALOG = {
  'O(1)': {
    key: 'O(1)',
    title: 'O(1) · Tiempo Constante',
    name: 'Constante',
    icon: '🟢',
    badge: 'Óptimo Absoluto',
    headerColor: 'bg-neoGreen',
    definition: 'El tiempo de ejecución del algoritmo es estrictamente independiente del volumen total de datos de entrada (n). Ya sea que el conjunto contenga un elemento o diez mil millones de registros, la operación se completa en un número fijo y determinista de ciclos de CPU.',
    kinetic: 'Ecuación: T(n) = c (donde c es una constante fija de tiempo). La curva de crecimiento es una línea perfectamente horizontal paralela al eje de entrada. No experimenta degradación computacional.',
    growth: [
      { n: 'n = 10', ops: '1 operación', impact: 'Instantáneo (< 1 microsegundo)' },
      { n: 'n = 100', ops: '1 operación', impact: 'Instantáneo (< 1 microsegundo)' },
      { n: 'n = 1,000', ops: '1 operación', impact: 'Instantáneo (< 1 microsegundo)' },
      { n: 'n = 1,000,000', ops: '1 operación', impact: 'Instantáneo (< 1 microsegundo)' }
    ],
    viability: {
      title: 'Aprobado para Alta Escala Global',
      desc: 'El estándar de oro indiscutible para microservicios, bases de datos clave-valor y operaciones en memoria masiva.',
      bg: 'bg-neoGreen/20',
      icon: 'fa-circle-check text-green-700'
    },
    gif: 'assets/nearest_neighbor_search.gif',
    gifCaption: 'Acceso directo a posición en memoria sin recorridos iterativos.',
    algorithms: [
      'Acceso por Índice en Arreglo (arr[i])',
      'Inserción / Búsqueda en Hash Table (Map/Dictionary)',
      'Operaciones de Pila (Stack Push / Pop)',
      'Operaciones de Cola (Queue Enqueue / Dequeue)',
      'Comprobación de Paridad (n % 2 === 0)'
    ],
    codeType: 'Acceso Inmediato Directo',
    code: `// Acceso a memoria en tiempo constante O(1)
function getFirstElement(arr) {
  return arr[0]; // Operación única directa por dirección de memoria
}

// Búsqueda en tabla hash en O(1) amortizado
function getUserById(userMap, userId) {
  return userMap[userId] || null; // Cálculo hash directo
}`,
    codeExplanation: 'La CPU calcula la dirección física mediante la fórmula: DirecciónBase + (Índice * TamañoElemento) en una única instrucción atómica.',
    uses: [
      'Tablas de Hash y Cachés distribuidas en memoria (Redis, Memcached).',
      'Acceso a registros por Clave Primaria en índices hash de bases de datos.',
      'Planificación de interrupciones de hardware en sistemas operativos.',
      'Controladores de red y buffers circulares de alta frecuencia (trading).'
    ],
    goldenRule: 'Siempre que diseñes un sistema con millones de lecturas por segundo, estructura tus datos en Maps o Hashes para garantizar acceso O(1).',
    speechText: 'Bienvenido a la clase de complejidad O de uno, conocida como Tiempo Constante, la cima indiscutible de la eficiencia en la ciencia de la computación. En esta clase, el tiempo de ejecución y el consumo de CPU son estrictamente independientes del volumen total de datos de entrada. No importa si tu colección contiene diez elementos o diez mil millones de registros, la operación siempre se ejecuta en un número fijo y determinista de ciclos de procesador. Observa con atención la animación en pantalla: representa el acceso directo a una posición en memoria física mediante dirección base y desplazamiento, sin necesidad de recorrer ni iterar sobre los demás elementos. La computadora calcula la posición al instante. Es exactamente lo que sucede al consultar un arreglo por su índice numérico o al buscar una clave en una tabla hash o en una base de datos en memoria masiva como Redis. En la arquitectura moderna de sistemas, diseñar flujos de tiempo constante O de uno es el estándar de oro para garantizar respuestas en microsegundos y soportar millones de usuarios concurrentes.'
  },

  'O(log n)': {
    key: 'O(log n)',
    title: 'O(log n) · Tiempo Logarítmico',
    name: 'Logarítmica',
    icon: '💎',
    badge: 'Excelente Rendimiento',
    headerColor: 'bg-neoCyan',
    definition: 'El tiempo de ejecución crece de forma extremadamente lenta en relación con n. En cada iteración o paso del algoritmo, el espacio de búsqueda restante se reduce a la mitad (división por dos). Incluso con mil millones de elementos, solo se requieren aproximadamente 30 comparaciones.',
    kinetic: 'Ecuación: T(n) = c · log₂(n). La curva sube ligeramente al inicio y luego se aplana casi por completo. Duplicar el tamaño de la entrada solo añade una única operación adicional a la ejecución.',
    growth: [
      { n: 'n = 10', ops: '~ 3 a 4 operaciones', impact: 'Imperceptible (~ 0.001 ms)' },
      { n: 'n = 100', ops: '~ 6 a 7 operaciones', impact: 'Imperceptible (~ 0.002 ms)' },
      { n: 'n = 1,000', ops: '~ 10 operaciones', impact: 'Ultrarrápido (~ 0.005 ms)' },
      { n: 'n = 1,000,000', ops: '~ 20 operaciones', impact: 'Casi instantáneo (< 0.02 ms)' }
    ],
    viability: {
      title: 'Excelente para Big Data & Motores de Búsqueda',
      desc: 'Capaz de buscar entre billones de registros en cuestión de microsegundos mediante bisección o árboles balanceados.',
      bg: 'bg-neoCyan/20',
      icon: 'fa-circle-check text-cyan-700'
    },
    gif: 'assets/binary_search.gif',
    gifCaption: 'Búsqueda Binaria: Bisección continua y descarte del 50% en cada paso.',
    algorithms: [
      'Búsqueda Binaria (Binary Search)',
      'Búsqueda en Árboles Binarios Balanceados (AVL / Red-Black)',
      'Búsqueda en Índices B-Tree / B+Tree (SQL Server / PostgreSQL)',
      'Algoritmo de Exponenciación Rápida (Binary Exponentiation)',
      'Algoritmo de Euclides para el MCD'
    ],
    codeType: 'Bisección Logarítmica',
    code: `// Búsqueda Binaria O(log n) en arreglo ordenado
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid; // Encontrado
    if (arr[mid] < target) left = mid + 1; // Descartar mitad izquierda
    else right = mid - 1; // Descartar mitad derecha
  }
  return -1; // No existe
}`,
    codeExplanation: 'En cada ciclo while, el rango [left, right] se divide exactamente entre 2. Para n = 1,000,000, log₂(10⁶) ≈ 20 iteraciones máximas.',
    uses: [
      'Motores relacionales de bases de datos para búsqueda de índices (SQL Server, Oracle, MySQL).',
      'Sistemas de archivos (NTFS, ext4) para localizar inodos en discos duros.',
      'Búsqueda de versiones en Git mediante "git bisect" para aislar errores.',
      'Sistemas de renderizado y detección de colisiones espaciales (Octrees/BSP).'
    ],
    goldenRule: 'Si tus datos están previamente ordenados o indexados, utiliza siempre búsqueda binaria o estructuras arbóreas para garantizar tiempos logarítmicos O(log n).',
    speechText: 'Analizando la complejidad O de logaritmo de n, conocida como Tiempo Logarítmico, uno de los pilares matemáticos más poderosos para el procesamiento masivo de datos. Su enorme eficiencia se fundamenta en la estrategia de divide y vencerás: en cada iteración o comparación, el algoritmo descarta de inmediato el cincuenta por ciento del espacio de búsqueda restante. En la animación visual que estás observando en pantalla, se aprecia con claridad la Búsqueda Binaria sobre un arreglo ordenado. Fíjate cómo el algoritmo evalúa el elemento central: al verificar si el objetivo es menor o mayor, descarta inmediatamente toda la mitad que no puede contener el valor y continúa dividiendo la porción restante. Gracias a esta reducción exponencial del problema, buscar entre un millón de registros ordenados solo requiere unas veinte comparaciones, y buscar entre mil millones apenas treinta pasos. Esta es la estructura matemática que sustenta los árboles balanceados y los índices de bases de datos relacionales como SQL Server, PostgreSQL y Oracle, permitiendo consultas ultrarrápidas en tablas gigantescas.'
  },

  'O(n)': {
    key: 'O(n)',
    title: 'O(n) · Tiempo Lineal',
    name: 'Lineal',
    icon: '⚡',
    badge: 'Eficiencia Aceptable',
    headerColor: 'bg-neoYellow',
    definition: 'El tiempo de ejecución crece en proporción directa y lineal con el tamaño de los datos de entrada (n). Si la cantidad de elementos se duplica, el tiempo consumido también se duplicará exactamente. El algoritmo debe examinar cada elemento al menos una vez.',
    kinetic: 'Ecuación: T(n) = c · n. La curva es una línea diagonal perfecta con pendiente constante. Es el límite inferior teórico para cualquier algoritmo que requiera leer todos los datos de entrada.',
    growth: [
      { n: 'n = 10', ops: '10 operaciones', impact: 'Ultra fluido (< 0.01 ms)' },
      { n: 'n = 100', ops: '100 operaciones', impact: 'Fluido (~ 0.05 ms)' },
      { n: 'n = 1,000', ops: '1,000 operaciones', impact: 'Rápido (~ 0.5 ms)' },
      { n: 'n = 1,000,000', ops: '1,000,000 operaciones', impact: 'Aceptable (~ 5 a 15 ms en JS)' }
    ],
    viability: {
      title: 'Comportamiento Aceptable y Predecible',
      desc: 'Adecuado para procesamiento en lote, transformaciones de arreglos y lecturas completas de secuencias de datos.',
      bg: 'bg-neoYellow/20',
      icon: 'fa-triangle-exclamation text-amber-700'
    },
    gif: 'assets/linear_search.gif',
    gifCaption: 'Búsqueda Lineal: Inspección secuencial celda por celda de inicio a fin.',
    algorithms: [
      'Búsqueda Lineal / Secuencial',
      'Búsqueda del Valor Máximo o Mínimo en arreglo desordenado',
      'Conteo y Recorrido de Listas Enlazadas',
      'Algoritmo de Kadane (Subarreglo de suma máxima)',
      'Counting Sort (en el caso de rango finito)'
    ],
    codeType: 'Recorrido Secuencial Simple',
    code: `// Búsqueda Lineal O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // Inspección uno a uno
  }
  return -1;
}

// Búsqueda de máximo O(n)
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}`,
    codeExplanation: 'Un único bucle for que visita cada elemento del arreglo una sola vez. No existen bucles anidados ni divisiones de rango.',
    uses: [
      'Procesamiento de flujos de texto (Stream parsing) y pipelines de ETL.',
      'Transformaciones funcionales de colecciones (.map, .filter, .reduce).',
      'Escaneo de tablas completas (Table Scan) en bases de datos sin índice.',
      'Cálculo de estadísticas descriptivas (Media, Varianza, Suma total).'
    ],
    goldenRule: 'El tiempo lineal O(n) es perfectamente aceptable para colecciones en memoria, pero evita hacer Table Scans O(n) en tablas de bases de datos con millones de filas.',
    speechText: 'Pasamos a la complejidad O de n, denominada Tiempo Lineal. Aquí el costo computacional mantiene una proporción directa y uniforme con respecto al volumen de información procesada. Si la cantidad de datos se duplica, el tiempo consumido se duplica de manera exacta y predecible. En la animación gráfica en pantalla, se ilustra la Búsqueda Lineal o Secuencial. El puntero examina elemento por elemento, de izquierda a derecha, recorriendo celda por celda hasta encontrar el elemento buscado o alcanzar el final del arreglo. Es el procedimiento natural de fuerza bruta cuando los datos se encuentran desordenados o cuando no disponemos de un índice estructurado. El tiempo lineal representa el límite inferior insuperable para cualquier tarea que requiera procesar, inspeccionar o transformar la totalidad de los datos, tales como calcular sumas, promedios, filtros y mapeos funcionales. En la práctica de ingeniería, es un costo totalmente aceptable y habitual en memoria, pero en bases de datos a gran escala debe evitarse el escaneo completo de tablas creando índices adecuados.'
  },

  'O(n log n)': {
    key: 'O(n log n)',
    title: 'O(n log n) · Tiempo Linealítmico',
    name: 'Linealítmica',
    icon: '⚖️',
    badge: 'Estándar en Ordenamiento',
    headerColor: 'bg-[#C084FC]',
    definition: 'El tiempo de ejecución combina la división recursiva logarítmica (log n) con un procesamiento lineal (n) en cada nivel de recursión. Representa el límite inferior matemático demostrado para cualquier algoritmo de ordenamiento basado en comparaciones.',
    kinetic: 'Ecuación: T(n) = c · n · log₂(n). Crece un poco más rápido que O(n), pero exponencialmente más lento que O(n²). Para n = 1,000,000, n log n realiza alrededor de 20 millones de operaciones frente a un billón de O(n²).',
    growth: [
      { n: 'n = 10', ops: '~ 33 operaciones', impact: 'Instantáneo (< 0.05 ms)' },
      { n: 'n = 100', ops: '~ 664 operaciones', impact: 'Imperceptible (~ 0.2 ms)' },
      { n: 'n = 1,000', ops: '~ 9,966 operaciones', impact: 'Muy rápido (~ 2 a 4 ms)' },
      { n: 'n = 1,000,000', ops: '~ 19,931,568 operaciones', impact: 'Eficiente (~ 60 a 120 ms)' }
    ],
    viability: {
      title: 'El Estándar de Oro para Ordenamiento Masivo',
      desc: 'Es la cota de máxima eficiencia teórica para ordenar colecciones arbitrarias por comparación en la industria.',
      bg: 'bg-purple-100',
      icon: 'fa-circle-check text-purple-700'
    },
    gif: 'assets/merge_sort.gif',
    gifCaption: 'Merge Sort: División recursiva en mitades y combinación ordenada en O(n log n).',
    algorithms: [
      'Merge Sort (Ordenamiento por Mezcla - O(n log n) en todos los casos)',
      'Quick Sort (Caso Promedio y Mejor Caso)',
      'Heap Sort (Ordenamiento por Montículo)',
      'TimSort (Algoritmo nativo de Python y Java Arrays.sort)',
      'Transformada Rápida de Fourier (FFT)'
    ],
    codeType: 'Divide y Vencerás Recursivo',
    code: `// Estructura de Merge Sort O(n log n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // log n divisiones
  const right = mergeSort(arr.slice(mid));
  return merge(left, right); // Combinación lineal O(n)
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
    codeExplanation: 'El árbol de recursión tiene una profundidad de log₂(n) niveles. En cada nivel se procesan y mezclan los n elementos acumulados.',
    uses: [
      'Comando Array.prototype.sort() en navegadores (V8 usa TimSort).',
      'Procesamiento de señales de audio e imágenes (Fast Fourier Transform).',
      'Ordenamiento de tablas gigantes en motores SQL y Big Data (Apache Spark).',
      'Geometría computacional (Cálculo del casco convexo / Convex Hull).'
    ],
    goldenRule: 'Nunca utilices algoritmos cuadráticos como Bubble Sort en producción; reemplázalos siempre por Merge Sort, Quick Sort o TimSort que garantizan O(n log n).',
    speechText: 'Explorando la complejidad O de n log n, conocida como tiempo linealítmico o cuasi-lineal. Esta clase de complejidad representa la cota de máxima eficiencia matemática demostrada para ordenar colecciones arbitrarias mediante comparaciones. Mira atentamente la animación oficial en pantalla de Merge Sort u ordenamiento por mezcla. Nota cómo el proceso se divide en dos fases cinemáticas: primero, divide recursivamente la lista completa en mitades más pequeñas hasta llegar a elementos individuales, consumiendo log n niveles de profundidad; segundo, realiza una fase de mezcla o fusión lineal, combinando sub-listas de forma ordenada en tiempo proporcional a n. Algoritmos emblemáticos de la industria como Merge Sort, Quick Sort en su caso promedio, Heap Sort y el célebre TimSort implementado nativamente en Python y Java, operan en este orden de magnitud. Para ordenar un millón de registros, un algoritmo linealítmico realiza apenas unos veinte millones de operaciones, superando por miles de veces a los métodos cuadráticos y convirtiéndose en el estándar de oro de la ingeniería de software.'
  },

  'O(n²)': {
    key: 'O(n²)',
    title: 'O(n²) · Tiempo Cuadrático',
    name: 'Cuadrática',
    icon: '⚠️',
    badge: 'Ineficiente / Alerta',
    headerColor: 'bg-neoOrange',
    definition: 'El tiempo de ejecución crece con el cuadrado del tamaño de entrada. Es provocado típicamente por dos bucles anidados donde cada elemento del conjunto se compara contra todos los demás elementos. Duplicar la entrada multiplica el tiempo de cómputo por cuatro.',
    kinetic: 'Ecuación: T(n) = c · n². La curva se dispara hacia arriba en una parábola empinada. Para n = 1,000 realiza 1 millón de operaciones; para n = 1,000,000 demandaría un billón de operaciones (inviable en tiempo real).',
    growth: [
      { n: 'n = 10', ops: '100 operaciones', impact: 'Imperceptible (< 0.1 ms)' },
      { n: 'n = 100', ops: '10,000 operaciones', impact: 'Aceptable (~ 1 ms)' },
      { n: 'n = 1,000', ops: '1,000,000 operaciones', impact: 'Lento (~ 50 a 150 ms)' },
      { n: 'n = 100,000', ops: '10,000,000,000 operaciones', impact: 'Prohibitivo (> 30 segundos)' }
    ],
    viability: {
      title: 'Peligro de Cuello de Botella en Producción',
      desc: 'Solo aceptable para fines didácticos o conjuntos microscópicos de menos de 100 elementos.',
      bg: 'bg-neoOrange/20',
      icon: 'fa-triangle-exclamation text-amber-800'
    },
    gif: 'assets/bubble_sort.gif',
    gifCaption: 'Bubble Sort: Doble bucle anidado que compara e intercambia parejas adyacentes.',
    algorithms: [
      'Bubble Sort (Ordenamiento Burbuja)',
      'Selection Sort (Ordenamiento por Selección)',
      'Insertion Sort (En su caso promedio y peor caso)',
      'Comparación de todos contra todos (Naive Duplicate Detection)',
      'Multiplicación elemental de matrices cuadradas'
    ],
    codeType: 'Doble Bucle Anidado',
    code: `// Algoritmo Cuadrático O(n²) con bucles anidados
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {          // Bucle exterior: n veces
    for (let j = 0; j < n - i - 1; j++) { // Bucle interior: n veces
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    codeExplanation: 'Dos bucles for anidados que iteran sobre la longitud n. Total de pasos: (n * (n - 1)) / 2 ≈ n² / 2 operaciones de comparación.',
    uses: [
      'Enseñanza pedagógica inicial de lógica de control en escuelas y universidades.',
      'Arreglos diminutos en dispositivos embebidos con muy poca memoria RAM.',
      'Cálculo de matrices de correlación pequeñas en análisis estadístico.',
      'Detección básica de colisiones entre un número pequeño de sprites en videojuegos 2D.'
    ],
    goldenRule: 'Si detectas dos bucles anidados en tu código que operan sobre listas que pueden crecer con el tiempo, refactoriza a mapas O(1) o algoritmos O(n log n).',
    speechText: 'Atención a la complejidad O de n al cuadrado, conocida como Tiempo Cuadrático. Esta categoría marca una zona de alerta crítica en el diseño de software debido a su acelerada degradación de rendimiento. En la animación de Bubble Sort u ordenamiento burbuja que observas en pantalla, se muestra el comportamiento clásico de dos bucles anidados. El algoritmo compara de manera repetitiva parejas de elementos adyacentes y los intercambia cuando están desordenados, haciendo que los valores mayores asciendan gradualmente como burbujas hacia el extremo final. Esto implica comparar casi cada dato contra todos los demás miembros de la colección. Bajo esta complejidad, si el conjunto de datos se duplica, el tiempo de cómputo se cuadruplica. Con diez mil elementos ya se demandan cien millones de operaciones, generando congelamiento en la interfaz o saturación del procesador. Aunque Bubble Sort y Selection Sort son excelentes para la enseñanza pedagógica inicial, en entornos reales de producción deben erradicarse y reemplazarse por soluciones lineales o linealítmicas.'
  },

  'O(2ⁿ)': {
    key: 'O(2ⁿ)',
    title: 'O(2ⁿ) / O(n!) · Tiempo Exponencial & Factorial',
    name: 'Exponencial / Fact',
    icon: '💣',
    badge: 'Computacionalmente Prohibitivo',
    headerColor: 'bg-neoRed',
    definition: 'El tiempo de ejecución se duplica con cada elemento unitario adicional agregado a n en el caso exponencial, o se multiplica por n en el caso factorial. Representa la explosión combinatoria donde el número de operaciones supera rápidamente la cantidad de átomos en el universo observable.',
    kinetic: 'Ecuación: T(n) = c · 2ⁿ o T(n) = c · n!. La curva es prácticamente una pared vertical. Con n = 30 ya se requieren más de mil millones de operaciones; con n = 100, la computadora tardaría miles de millones de años en completarlo.',
    growth: [
      { n: 'n = 5', ops: '32 (2ⁿ) | 120 (n!)', impact: 'Rápido (< 0.1 ms)' },
      { n: 'n = 10', ops: '1,024 (2ⁿ) | 3,628,800 (n!)', impact: 'Notorio (~ 5 a 20 ms)' },
      { n: 'n = 20', ops: '1,048,576 (2ⁿ) | 2.43 × 10¹⁸ (n!)', impact: 'Crítico (Congelamiento de CPU)' },
      { n: 'n = 50', ops: '1.12 × 10¹⁵ (2ⁿ) | 3.04 × 10⁶⁴ (n!)', impact: 'Imposible (Siglos de cómputo)' }
    ],
    viability: {
      title: 'Inviable sin Técnicas Heurísticas o Poda',
      desc: 'Perteneciente al conjunto de problemas NP-Hard. Requiere programación dinámica, algoritmos genéticos o heurísticas.',
      bg: 'bg-neoRed/20',
      icon: 'fa-skull-crossbones text-red-700'
    },
    gif: 'assets/backtracking_search.gif',
    gifCaption: 'Backtracking / Búsqueda Exhaustiva: Exploración exponencial de combinaciones con poda.',
    algorithms: [
      'Fibonacci Recursivo sin memorización (Naive O(2ⁿ))',
      'Problema del Viajante de Comercio por fuerza bruta (TSP - O(n!))',
      'Generación de todos los Subconjuntos de un Set (Power Set - O(2ⁿ))',
      'Problema de las N Reinas por Backtracking exhaustivo',
      'Bogo Sort (Ordenamiento por permutación aleatoria - O(n!))'
    ],
    codeType: 'Bifurcación Recursiva Doble',
    code: `// Fibonacci recursivo ineficiente O(2ⁿ)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2); // 2 llamadas por nodo
}

// Bogo Sort O(n!)
function bogoSort(arr) {
  while (!isSorted(arr)) {
    shuffle(arr); // Permutaciones aleatorias infinitas
  }
  return arr;
}`,
    codeExplanation: 'Cada llamada a la función genera dos nuevas llamadas recursivas, creando un árbol binario completo de profundidad n con 2ⁿ nodos hojas.',
    uses: [
      'Criptografía y seguridad informática (la dificultad de romper claves RSA radica en la complejidad exponencial).',
      'Resolución de puzles complejos mediante poda (Sudoku Solver, Cubo de Rubik).',
      'Problemas de optimización combinatoria y logística (Rutas de camiones de reparto).',
      'Plegamiento de proteínas y simulaciones moleculares en bioinformática.'
    ],
    goldenRule: 'Nunca dejes un algoritmo exponencial en producción; utiliza Programación Dinámica (Memoization/Tabulation) para reducir O(2ⁿ) a O(n).',
    speechText: 'Llegamos al límite extremo del cálculo computacional: O de dos a la n y O de n factorial, correspondientes a los tiempos exponencial y factorial. Este es el territorio de la explosión combinatoria y los problemas computacionalmente intratables de la familia NP-Hard. Mira con detalle la animación en pantalla: representa la Búsqueda por Backtracking y Exploración Exhaustiva. En cada decisión o nivel, el algoritmo se bifurca en múltiples ramas alternativas, retrocediendo cuando encuentra una restricción inválida. Cada nuevo elemento que se incorpora al problema duplica o multiplica el número total de estados posibles. Para ilustrar su magnitud, intentar resolver el problema del viajante de comercio por fuerza bruta para apenas cincuenta ciudades requeriría más operaciones que los segundos transcurridos desde el origen del universo. En la ingeniería moderna, esta complejidad es la base que hace prácticamente inviolable la criptografía y la seguridad informática, como el cifrado RSA. Cuando los ingenieros debemos resolver problemas combinatorios en logística, rutas o bioinformática, recurrimos obligatoriamente a la programación dinámica con memorización, la poda heurística y técnicas de inteligencia artificial para obtener soluciones óptimas en tiempo real sin caer en la trampa del cálculo infinito.'
  }
};

/* =========================================================================
   CONTROLADOR DEL MODAL UNIVERSAL & SÍNTESIS DE VOZ TTS
   ========================================================================= */

let currentBigOModalKey = null;
const synthBigO = window.speechSynthesis;
let currentBigOUtterance = null;
let currentBigOVolume = 1.0;

// Normalización y aliases de claves Big-O
BIG_O_CATALOG['O(n^2)'] = BIG_O_CATALOG['O(n²)'];
BIG_O_CATALOG['O(2^n)'] = BIG_O_CATALOG['O(2ⁿ)'];
BIG_O_CATALOG['O(n!)'] = BIG_O_CATALOG['O(2ⁿ)'];

window.openBigOModal = function(key) {
  let data = BIG_O_CATALOG[key];
  if (!data && key) {
    if (key.includes('2') && (key.includes('n') || key.includes('^'))) data = BIG_O_CATALOG['O(2ⁿ)'];
    else if (key.includes('n') && (key.includes('2') || key.includes('²'))) data = BIG_O_CATALOG['O(n²)'];
    else if (key.includes('log') && key.includes('n log')) data = BIG_O_CATALOG['O(n log n)'];
    else if (key.includes('log')) data = BIG_O_CATALOG['O(log n)'];
    else if (key.includes('1')) data = BIG_O_CATALOG['O(1)'];
    else if (key === 'O(n)' || key.includes('n')) data = BIG_O_CATALOG['O(n)'];
  }
  if (!data) return;

  currentBigOModalKey = data.key || key;
  detenerNarracionBigO();
  if (typeof detenerTodasLasNarraciones === 'function') detenerTodasLasNarraciones();

  // Actualizar Header (compacto y panorámico)
  const header = document.getElementById('modalBigOHeader');
  header.className = `py-2 px-4 sm:px-5 border-b-3 border-black flex items-center justify-between flex-wrap gap-2 ${data.headerColor} transition-colors duration-200`;
  
  document.getElementById('modalBigOIcon').textContent = data.icon;
  document.getElementById('modalBigOTitle').textContent = data.title;
  document.getElementById('modalBigOBadge').textContent = data.badge;

  // Actualizar Definición y Cinemática
  document.getElementById('modalBigODefinition').textContent = data.definition;
  document.getElementById('modalBigOKinetic').textContent = data.kinetic;

  // Actualizar Tabla de Crecimiento
  const tbody = document.getElementById('modalBigOGrowthTable');
  tbody.innerHTML = '';
  data.growth.forEach(row => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-black/30';
    tr.innerHTML = `
      <td class="p-2 border-r border-black font-bold bg-white">${row.n}</td>
      <td class="p-2 border-r border-black font-black text-black">${row.ops}</td>
      <td class="p-2 font-bold text-gray-800">${row.impact}</td>
    `;
    tbody.appendChild(tr);
  });

  // Actualizar Semáforo de Viabilidad
  const viabBox = document.getElementById('modalBigOViabilityBox');
  viabBox.className = `mt-4 p-3 border-2 border-black ${data.viability.bg} flex items-center gap-3`;
  document.getElementById('modalBigOViabilityIcon').className = `fa-solid ${data.viability.icon} text-2xl`;
  document.getElementById('modalBigOViabilityTitle').textContent = data.viability.title;
  document.getElementById('modalBigOViabilityDesc').textContent = data.viability.desc;

  // Actualizar GIF y Algoritmos
  document.getElementById('modalBigOGifImg').src = data.gif;
  document.getElementById('modalBigOGifImg').alt = data.title;
  document.getElementById('modalBigOGifCaption').textContent = data.gifCaption;

  const algList = document.getElementById('modalBigOAlgList');
  algList.innerHTML = '';
  data.algorithms.forEach(alg => {
    const span = document.createElement('span');
    span.className = 'badge bg-white text-black border-2 border-black text-xs sm:text-sm shadow-sm font-bold px-2.5 py-1';
    span.textContent = alg;
    algList.appendChild(span);
  });

  // Actualizar Código y Explicación
  document.getElementById('modalBigOCodeType').textContent = data.codeType;
  document.getElementById('modalBigOCode').textContent = data.code;
  document.getElementById('modalBigOCodeExplanation').textContent = data.codeExplanation;

  // Actualizar Usos Industriales y Regla de Oro
  const usesList = document.getElementById('modalBigOUsesList');
  usesList.innerHTML = '';
  data.uses.forEach(useItem => {
    const li = document.createElement('li');
    li.textContent = useItem;
    usesList.appendChild(li);
  });
  document.getElementById('modalBigOGoldenRule').textContent = data.goldenRule;

  // Mostrar Modal con animación
  const modal = document.getElementById('bigOModal');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  // Restablecer botones de audio
  setAudioButtonsState('idle');
};

window.closeBigOModal = function() {
  detenerNarracionBigO();
  const modal = document.getElementById('bigOModal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.classList.remove('overflow-hidden');
  currentBigOModalKey = null;
};

window.handleModalBackdropClick = function(event) {
  if (event.target.id === 'bigOModal') {
    closeBigOModal();
  }
};

// Atajo de teclado: Escape cierra el modal y apaga el audio
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modalAlgo = document.getElementById('algoSimulationModal');
    if (modalAlgo && !modalAlgo.classList.contains('hidden')) {
      closeAlgoModal();
      return;
    }
    const modalBigO = document.getElementById('bigOModal');
    if (modalBigO && !modalBigO.classList.contains('hidden')) {
      closeBigOModal();
    }
  }
});

/* =========================================================================
   MOTOR DE NARRACIÓN POR VOZ TTS (WEB SPEECH API - JPV PRO)
   ========================================================================= */

let bigOChunkQueue = [];
let bigOChunkIndex = 0;

window.narrarBigOActual = function() {
  if (!synthBigO) {
    alert("Tu navegador no soporta síntesis de voz nativa (Web Speech API).");
    return;
  }

  if (synthBigO.paused) {
    synthBigO.resume();
    setAudioButtonsState('speaking');
    return;
  }

  detenerNarracionBigO();
  if (typeof detenerTodasLasNarraciones === 'function') detenerTodasLasNarraciones();

  if (!currentBigOModalKey) return;
  const data = BIG_O_CATALOG[currentBigOModalKey];
  if (!data || !data.speechText) return;

  bigOChunkQueue = splitIntoAudioChunks(data.speechText, 170);
  bigOChunkIndex = 0;

  setAudioButtonsState('speaking');
  document.getElementById('bigOStatusText').textContent = `Narrando ${data.name}...`;

  if (synthBigO.paused) synthBigO.resume();
  setTimeout(() => {
    playNextBigOChunk();
  }, 60);
};

function playNextBigOChunk() {
  if (!synthBigO) return;

  if (bigOChunkIndex >= bigOChunkQueue.length) {
    detenerNarracionBigO();
    return;
  }

  const chunkText = bigOChunkQueue[bigOChunkIndex];
  const utterance = new SpeechSynthesisUtterance(chunkText);
  utterance.lang = 'es-ES';
  utterance.rate = 0.98;
  utterance.pitch = 1.0;
  utterance.volume = currentBigOVolume;

  const voice = (typeof getSystemSpanishVoice === 'function') ? getSystemSpanishVoice() : null;
  if (voice) utterance.voice = voice;

  utterance.onstart = () => {
    if (typeof startKeepAlivePulse === 'function') startKeepAlivePulse();
    const data = BIG_O_CATALOG[currentBigOModalKey];
    const name = data ? data.name : 'Concepto';
    const progressLabel = bigOChunkQueue.length > 1 
      ? `Narrando ${name} (${bigOChunkIndex + 1}/${bigOChunkQueue.length})` 
      : `Narrando ${name}...`;
    const statusEl = document.getElementById('bigOStatusText');
    if (statusEl) statusEl.textContent = progressLabel;
  };

  utterance.onend = () => {
    bigOChunkIndex++;
    playNextBigOChunk();
  };

  utterance.onerror = (e) => {
    console.warn("BigO speech error:", e);
    bigOChunkIndex++;
    if (bigOChunkIndex < bigOChunkQueue.length) {
      playNextBigOChunk();
    } else {
      detenerNarracionBigO();
    }
  };

  currentBigOUtterance = utterance;
  window._activeBigOUtterance = utterance;
  synthBigO.speak(utterance);
}

window.pausarNarracionBigO = function() {
  if (synthBigO && synthBigO.speaking) {
    synthBigO.pause();
    setAudioButtonsState('paused');
    document.getElementById('bigOStatusText').textContent = 'Pausado';
  }
};

window.reanudarNarracionBigO = function() {
  if (synthBigO && synthBigO.paused) {
    synthBigO.resume();
    setAudioButtonsState('speaking');
    if (currentBigOModalKey && BIG_O_CATALOG[currentBigOModalKey]) {
      const data = BIG_O_CATALOG[currentBigOModalKey];
      const progressLabel = bigOChunkQueue.length > 1 
        ? `Narrando ${data.name} (${bigOChunkIndex + 1}/${bigOChunkQueue.length})` 
        : `Narrando ${data.name}...`;
      document.getElementById('bigOStatusText').textContent = progressLabel;
    }
  }
};

window.detenerNarracionBigO = function() {
  bigOChunkQueue = [];
  bigOChunkIndex = 0;
  if (synthBigO) {
    synthBigO.cancel();
  }
  setAudioButtonsState('idle');
};

function setAudioButtonsState(state) {
  const btnPlay = document.getElementById('btnBigOPlay');
  const btnPause = document.getElementById('btnBigOPause');
  const btnResume = document.getElementById('btnBigOResume');
  const btnStop = document.getElementById('btnBigOStop');
  const badge = document.getElementById('bigOStatusBadge');

  if (!btnPlay) return;

  if (state === 'speaking') {
    btnPlay.classList.add('hidden');
    btnPause.classList.remove('hidden');
    btnPause.classList.add('flex');
    btnResume.classList.add('hidden');
    btnStop.classList.remove('hidden');
    btnStop.classList.add('flex');
    badge.classList.remove('hidden');
    badge.classList.add('flex');
  } else if (state === 'paused') {
    btnPlay.classList.add('hidden');
    btnPause.classList.add('hidden');
    btnResume.classList.remove('hidden');
    btnResume.classList.add('flex');
    btnStop.classList.remove('hidden');
    btnStop.classList.add('flex');
    badge.classList.remove('hidden');
    badge.classList.add('flex');
  } else {
    btnPlay.classList.remove('hidden');
    btnPlay.classList.add('flex');
    btnPause.classList.add('hidden');
    btnResume.classList.add('hidden');
    btnStop.classList.add('hidden');
    badge.classList.add('hidden');
  }
}

window.setVolumenBigO = function(val) {
  currentBigOVolume = Math.max(0, Math.min(1, parseFloat(val)));
  actualizarUIVolumenBigO();
  if (synthBigO && synthBigO.speaking && currentBigOUtterance) {
    currentBigOUtterance.volume = currentBigOVolume;
  }
};

window.cambiarVolumenBigO = function(delta) {
  let nuevoVol = Math.round((currentBigOVolume + delta) * 100) / 100;
  nuevoVol = Math.max(0, Math.min(1, nuevoVol));
  window.setVolumenBigO(nuevoVol);
};

function actualizarUIVolumenBigO() {
  const slider = document.getElementById('bigOVolumeSlider');
  const badge = document.getElementById('bigOVolumeBadge');
  const icon = document.getElementById('bigOVolumeIcon');

  const porcentaje = Math.round(currentBigOVolume * 100);
  if (slider) slider.value = currentBigOVolume;
  if (badge) badge.textContent = porcentaje + '%';

  if (icon) {
    if (porcentaje === 0) icon.className = 'fa-solid fa-volume-xmark text-sm text-red-600';
    else if (porcentaje < 50) icon.className = 'fa-solid fa-volume-low text-sm text-black';
    else icon.className = 'fa-solid fa-volume-high text-sm text-black';
  }
}


// =========================================================================
// CONTROLADORES DE NAVEGACIÓN MÓVIL Y TABLET RESPONSIVE 100% ANCHO
// =========================================================================
window.toggleMobileNavMenu = function() {
  const drawer = document.getElementById('mobileNavDrawer');
  const icon = document.getElementById('mobileMenuIcon');
  if (!drawer) return;
  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    drawer.classList.remove('hidden');
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  } else {
    drawer.classList.add('hidden');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }
};

window.closeMobileNavMenu = function() {
  const drawer = document.getElementById('mobileNavDrawer');
  const icon = document.getElementById('mobileMenuIcon');
  if (drawer && !drawer.classList.contains('hidden')) {
    drawer.classList.add('hidden');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }
};

/* =========================================================================
   MOTOR UNIVERSAL DE SÍNTESIS DE VOZ ROBUSTO (WEB SPEECH API JPV PRO)
   - Resuelve el congelamiento de 15s de Chromium mediante Chunking secuencial
   - Elimina la carrera de cancelación síncrona mediante delay defensivo
   - Soporta Narración Completa por Sección o Narración Individual por Card
   - Anticolisión universal con control de volumen en vivo
   ========================================================================= */

const CARDS_SPEECH_CATALOG = {
  // MANIFIESTO: CRÓNICA DE 24 HORAS
  'manifiesto_minuto1': {
    title: 'Minuto 1: Colapso Financiero Global',
    context: 'manifiesto',
    text: 'Minuto uno tras el apagón algorítmico: Colapso Financiero Global. Las redes bancarias SWIFT, Visa, Mastercard y los sistemas de alta frecuencia de Wall Street se congelan al instante. El noventa y siete por ciento del dinero del mundo existe únicamente en forma digital y desaparece del plano operacional. Los cajeros automáticos mueren. Cero liquidez global en sesenta segundos.'
  },
  'manifiesto_minuto10': {
    title: 'Minuto 10: Cielo Ciego y Apagón Continental',
    context: 'manifiesto',
    text: 'Minuto diez: Cielo Ciego y Apagón Continental. Más de doce mil aviones comerciales en vuelo pierden la asistencia de radar y el sistema algorítmico anticolisión TCAS. Al mismo tiempo, las redes eléctricas inteligentes, o Smart Grids, pierden su sincronización de fase en microsegundos, provocando apagones en cascada que dejan continentes enteros a oscuras.'
  },
  'manifiesto_hora1': {
    title: 'Hora 1: Parálisis Logística y Hambruna',
    context: 'manifiesto',
    text: 'Hora uno: Parálisis Logística y Desabastecimiento Alimentario. Los algoritmos de optimización de rutas como Dijkstra y A-Star dejan de coordinar barcos cargueros, trenes y camiones de distribución. Los almacenes robotizados de comida, agua y combustible quedan sellados herméticamente. Las ciudades quedan sin suministros.'
  },
  'manifiesto_hora6': {
    title: 'Hora 6: Crisis Hospitalaria y Telecomunicaciones',
    context: 'manifiesto',
    text: 'Hora seis: Crisis Hospitalaria y Telecomunicaciones en Silencio. Los respiradores artificiales, máquinas de diálisis y monitores de cuidados intensivos pierden su calibración algorítmica. La fibra óptica transoceánica y la constelación GPS caen mudas, incomunicando al planeta entero.'
  },
  'manifiesto_dia1': {
    title: 'Día 1: Retorno a la Edad de Piedra',
    context: 'manifiesto',
    text: 'Día uno: Retorno a la Edad de Piedra. Las bombas de agua potable automatizadas dejan de operar. Sin agua corriente, sin electricidad, sin comida distribuida, sin telecomunicaciones y sin medicina, la civilización humana retrocede mil años de evolución en tan solo veinticuatro horas.'
  },

  // MANIFIESTO: HISTORIA DEL FUEGO DIGITAL
  'manifiesto_historia1': {
    title: 'De Bagdad a Bletchley Park',
    context: 'manifiesto',
    text: 'De Bagdad a Bletchley Park: La palabra Algoritmo rinde honor al sabio persa Muhammad ibn Musa al-Juarismi en el siglo noveno. En 1843, Ada Lovelace concibió el primer algoritmo computacional del mundo para la máquina analítica de Babbage. Un siglo después, Alan Turing usó algoritmos para descifrar la máquina nazi Enigma, salvando más de catorce millones de vidas. Los algoritmos siempre han sido herramientas de supervivencia humana.'
  },
  'manifiesto_historia2': {
    title: 'El Arte de Hablarle a la Materia',
    context: 'manifiesto',
    text: 'El Arte de Hablarle a la Materia: Programar no es teclear palabras con llaves en un editor. Programar es el arte supremo de enseñarle a una roca de silicio con impulsos eléctricos a razonar con lógica matemática pura. Un algoritmo es una receta perfecta e infalible: Entrada de datos, Proceso lógico finito, y Solución predecible.'
  },
  'manifiesto_historia3': {
    title: 'Big-O: La Física del Silicio',
    context: 'manifiesto',
    text: 'Big-O: La Física del Silicio. Un mal algoritmo puede tardar diez mil años en resolver lo que un buen algoritmo resuelve en tres milisegundos. La Notación Big-O es la ley de gravedad del software: dicta si tu arquitectura escalará a millones de usuarios o si implosionará quemando servidores.'
  },

  // MANIFIESTO: LOS 4 TITANES
  'manifiesto_titan1': {
    title: 'Titán 1: Búsqueda y Orden Masivo',
    context: 'manifiesto',
    text: 'Primer Titán: Búsqueda y Orden Masivo. Cada búsqueda en Google, cada filtro de productos en Amazon o consulta en tu móvil utiliza algoritmos como QuickSort, MergeSort y árboles B-Plus para ordenar y recuperar miles de millones de registros en microsegundos, operando en tiempo logarítmico y linealítmico.'
  },
  'manifiesto_titan2': {
    title: 'Titán 2: Tráfico, GPS & Enrutamiento Global',
    context: 'manifiesto',
    text: 'Segundo Titán: Tráfico, GPS y Enrutamiento Global. Cuando pides un transporte, recibes un paquete o vuelas entre continentes, algoritmos de grafos como Dijkstra y A-Star evalúan millones de combinaciones para darte la ruta más rápida y barata en tiempo real.'
  },
  'manifiesto_titan3': {
    title: 'Titán 3: Criptografía & Seguridad Cuántica',
    context: 'manifiesto',
    text: 'Tercer Titán: Criptografía y Seguridad Cuántica. Tus compras bancarias, chats privados y la soberanía de las naciones están protegidos por algoritmos como RSA, AES-256 y curvas elípticas, fundamentados en la imposibilidad matemática de factorizar números primos gigantescos.'
  },
  'manifiesto_titan4': {
    title: 'Titán 4: Genética, Salud & Inteligencia Artificial',
    context: 'manifiesto',
    text: 'Cuarto Titán: Genética, Salud e Inteligencia Artificial. Desde secuenciar el genoma humano y predecir el plegamiento de proteínas con AlphaFold, hasta el reconocimiento precoz de tumores en radiografías: los algoritmos salvan millones de vidas diagnosticando enfermedades antes de que ocurran.'
  },
  'manifiesto_cita': {
    title: 'Declaración de Principios de Ingeniería',
    context: 'manifiesto',
    text: 'Declaración de Principios de Ingeniería del Lead Architect Ingeniero Juancito Peña Vizcaíno: Aprender algoritmos y análisis de complejidad Big-O no es memorizar sintaxis para una entrevista técnica de trabajo: es aprender a dominar las leyes fundamentales de la física computacional que gobiernan nuestro planeta. Quien comprende los algoritmos, domina los engranajes secretos del mundo moderno.'
  },

  // FUNDAMENTOS: 4 PILARES
  'fundamentos_bloque1': {
    title: 'Pilar 1: ¿Qué es un Algoritmo?',
    context: 'fundamentos',
    text: 'Primer Pilar: ¿Qué es un Algoritmo? Es un conjunto finito, ordenado y determinista de instrucciones no ambiguas que recibe una entrada de datos, ejecuta transformaciones lógicas precisas y genera una solución predecible. Posee tres propiedades inviolables: Finitud, porque siempre debe terminar en pasos definidos; Precisión, porque cada paso carece de ambigüedades; y Eficacia, porque cada instrucción es computacionalmente realizable con recursos finitos.'
  },
  'fundamentos_bloque2': {
    title: 'Pilar 2: Complejidad Algorítmica y Big-O',
    context: 'fundamentos',
    text: 'Segundo Pilar: Complejidad Algorítmica y Notación Big-O. Mide el costo asintótico de ejecución a medida que el tamaño de los datos de entrada, n, tiende hacia el infinito. No mide segundos de reloj, sino la tasa de crecimiento de operaciones. Evalúa la complejidad temporal T de n en ciclos de CPU, la complejidad espacial S de n en memoria RAM auxiliar requerida, y la cota superior garantizada u O grande.'
  },
  'fundamentos_bloque3': {
    title: 'Pilar 3: Algoritmos de Ordenamiento',
    context: 'fundamentos',
    text: 'Tercer Pilar: Algoritmos de Ordenamiento. Reorganizan una colección en secuencia ascendente o descendente bajo una relación de orden estricta. Los comparativos como Bubble, Quick y Merge Sort tienen un límite inferior infranqueable de orden n log n en el peor de los casos. Los no comparativos como Counting y Radix Sort alcanzan orden lineal n por frecuencias de conteo. La estabilidad conserva el orden relativo original entre claves idénticas.'
  },
  'fundamentos_bloque4': {
    title: 'Pilar 4: Algoritmos de Búsqueda',
    context: 'fundamentos',
    text: 'Cuarto Pilar: Algoritmos de Búsqueda. Localizan una clave objetivo o confirman su ausencia en memoria. La búsqueda secuencial revisa uno a uno con costo de orden n. La búsqueda binaria requiere orden estricto y utiliza divide y vencerás para descartar el cincuenta por ciento del espacio en cada paso, alcanzando orden logarítmico log n. Con sólo veinte comparaciones puede buscar entre un millón de elementos.'
  }
};

// TEXTO COMPLETO PARA MANIFIESTO
const NARRACION_MANIFIESTO_TEXTO = 
`Bienvenidos al Manifiesto Computacional de la Humanidad en ALGO-MATRIX 3D, bajo la dirección del Ingeniero Juancito Peña Vizcaíno.

Hagámonos una pregunta radical: ¿Qué pasaría si los algoritmos se detuvieran mañana?

El mundo moderno no se sostiene sobre el hormigón, el acero ni el petróleo: se sostiene sobre algoritmos. Cada latido de nuestra civilización está gobernado por fórmulas matemáticas transformadas en código de máquina. Si todo el software del planeta dejara de ejecutarse por solo veinticuatro horas continuas, la sociedad colapsaría de forma irreversible y regresaríamos instantáneamente a la Edad de Piedra.

Analicemos la caída de la civilización, minuto a minuto:
En el minuto uno tras el apagón algorítmico, ocurre el colapso financiero global. Las redes bancarias internacionales como SWIFT, Visa, Mastercard y los sistemas de alta frecuencia de Wall Street se congelan por completo. El noventa y siete por ciento del dinero del mundo existe únicamente en forma digital, en balances de bases de datos relacionales; por lo tanto, el dinero desaparecería en el vacío, los cajeros automáticos morirían y el comercio mundial quedaría en cero.

En el minuto diez, el caos aéreo y el apagón continental se desatan. Más de doce mil aviones comerciales en pleno vuelo pierden la asistencia de radar y el sistema algorítmico anticolisión TCAS. Al mismo tiempo, las redes eléctricas inteligentes, o Smart Grids, pierden su sincronización de fase en microsegundos, provocando apagones en cascada que dejan continentes enteros sumidos en la oscuridad.

En la primera hora, sobreviene la parálisis logística y la escasez de alimentos. Los algoritmos de optimización de rutas como Dijkstra y A-Star dejan de coordinar barcos portacontenedores, trenes de carga y flotas de distribución. Los almacenes robotizados de comida, agua y medicamentos quedan sellados herméticamente.

A las seis horas, los hospitales colapsan y las telecomunicaciones mueren. Los respiradores artificiales, máquinas de diálisis y monitores cardíacos en cuidados intensivos pierden su calibración en tiempo real. La fibra óptica transoceánica y la constelación de satélites GPS caen mudas, incomunicando al planeta.

Al cumplirse veinticuatro horas, la bienvenida a la Edad de Piedra es total. Las bombas de agua potable automatizadas dejan de operar. Sin agua corriente, sin energía eléctrica, sin alimentos distribuidos, sin comunicaciones y sin atención médica, la especie humana retrocede mil años de evolución en un solo día solar.

Pero, ¿de dónde proviene este fuego digital?
La palabra algoritmo rinde homenaje al sabio persa Muhammad ibn Musa al-Juarismi en el siglo noveno. En 1843, Ada Lovelace concibió el primer algoritmo informático de la historia para la máquina analítica de Babbage. Y un siglo después, Alan Turing sentó las bases de la máquina universal y utilizó algoritmos para descifrar la máquina nazi Enigma, acortando la Segunda Guerra Mundial y salvando más de catorce millones de vidas.

¿Qué es programar realmente? No es teclear sintaxis con llaves y corchetes en un editor. Programar es el arte supremo de enseñarle a una roca de silicio con impulsos eléctricos a razonar con lógica matemática pura.

En nuestro día a día, cuatro titanes algorítmicos sostienen tu existencia: primero, los algoritmos de búsqueda y ordenamiento masivo como QuickSort, MergeSort y árboles B-Plus, que permiten a Google y Amazon procesar millones de registros en microsegundos. Segundo, los algoritmos de grafos como Dijkstra y A-Star, que calculan cada trayecto en tu GPS y dirigen los paquetes de Internet. Tercero, la criptografía con RSA, AES-256 y curvas elípticas, que protegen tus finanzas y contraseñas. Y cuarto, la bioinformática y la inteligencia artificial, como AlphaFold, que descifran el genoma humano y predicen el plegamiento de proteínas para salvar millones de vidas.

Y ahora, escuchen este tip de oro de ingeniería computacional del Ingeniero Juancito Peña:
Tip de Oro de Arquitectura: Cuando diseñes un sistema de software, nunca optimices a ciegas. Recuerda que la complejidad algorítmica no mide los segundos del reloj de tu computadora actual, sino cómo escalará tu sistema cuando pase de diez usuarios a diez millones. Quien domina la notación Big-O, domina la física del silicio y construye software inmortal.

Como afirma el Ingeniero Juancito Peña: Estudiar algoritmos no es memorizar código para una entrevista técnica, es aprender a dominar las leyes fundamentales que mueven nuestro planeta. Bienvenidos a ALGO-MATRIX 3D.`;

// TEXTO COMPLETO PARA FUNDAMENTOS (EXCLUSIVO PARA LAS 4 TARJETAS TEÓRICAS Y CONSEJOS DE ARQUITECTURA)
const NARRACION_FUNDAMENTOS_TEXTO =
`Bienvenidos a la sección de Fundamentos Magistrales de la Computación en ALGO-MATRIX 3D.

Antes de interactuar con el laboratorio cinemático tridimensional, es indispensable comprender los cuatro pilares fundamentales de las ciencias de la computación presentados en estas cuatro tarjetas:

Primer pilar: ¿Qué es un Algoritmo?
Un algoritmo es un conjunto finito, ordenado y determinista de instrucciones no ambiguas que recibe una entrada de datos, realiza una serie de transformaciones lógicas precisas y produce una salida o solución predecible. Sus tres propiedades inviolables son: Finitud, lo que significa que el algoritmo siempre debe terminar tras un número determinado de pasos; Precisión, donde cada paso está definido con exactitud matemática sin ambigüedades; y Eficacia, donde cada instrucción es computacionalmente realizable con recursos finitos.

Segundo pilar: Complejidad Algorítmica y Notación Big-O.
La notación Big-O es la herramienta formal de las matemáticas discretas para medir la eficiencia asintótica de un algoritmo. No mide el tiempo en segundos de reloj, porque eso depende de la velocidad del procesador, de la memoria RAM y del sistema operativo. La notación Big-O mide la tasa de crecimiento del número de operaciones a medida que el tamaño de los datos de entrada, denotado por la letra n, tiende hacia el infinito.
Distingue tres aspectos críticos: la complejidad temporal T de n, que mide la cantidad de ciclos de CPU; la complejidad espacial S de n, que mide la memoria auxiliar requerida en RAM; y el peor caso o cota superior asintótica O grande, que garantiza que el algoritmo jamás rendirá peor que esa función.

Tercer pilar: Algoritmos de Ordenamiento.
Ordenar consiste en reorganizar una colección de elementos en una secuencia homogénea, ya sea ascendente o descendente. Se dividen en dos grandes familias:
Los algoritmos comparativos, como Bubble Sort, Insertion Sort, Merge Sort y Quick Sort. La teoría computacional demuestra matemáticamente que ningún algoritmo comparativo puede romper el límite inferior de orden n log n en el peor de los casos.
Y los algoritmos no comparativos, como Counting Sort y Radix Sort, que aprovechan propiedades numéricas o frecuencias de dígitos para lograr un rendimiento lineal de orden n.
Además, evaluamos la estabilidad: un algoritmo es estable si conserva el orden relativo original entre elementos con claves idénticas.

Cuarto pilar: Algoritmos de Búsqueda.
Tienen por objetivo localizar un valor clave o confirmar su ausencia en memoria.
La búsqueda secuencial o lineal revisa uno a uno los elementos con un costo de orden n, útil cuando los datos no están ordenados.
La búsqueda binaria requiere que el arreglo esté estrictamente ordenado. Utiliza la técnica de divide y vencerás para descartar el cincuenta por ciento del espacio de búsqueda en cada paso, alcanzando una velocidad logarítmica de orden log n. Para buscar entre un millón de elementos, solo necesita realizar un máximo de veinte comparaciones.

Y aquí tienes dos tips de oro de ingeniería computacional del Ingeniero Juancito Peña:
Tip de Oro Número Uno: Si tu aplicación realiza más lecturas que escrituras, mantén siempre los datos ordenados en una estructura indexada. Invertir tiempo en un ordenamiento previo de orden n log n te permitirá realizar millones de búsquedas posteriores en tiempo logarítmico O de log n.
Tip de Oro Número Dos: Desconfía de los bucles anidados en colecciones dinámicas. Un algoritmo de orden n cuadrado que tarda medio segundo con mil usuarios, tardará varias semanas y colapsará tus servidores cuando alcances un millón de registros.

Para analizar en detalle cada una de las complejidades de la escala universal, haz clic en cualquiera de las seis tarjetas del semáforo inferior para abrir su ficha técnica panorámica interactiva y escuchar su análisis cinemático individual. ¡Bienvenidos a ALGO-MATRIX 3D!`;

/* =========================================================================
   ESTADO Y CONTROL DEL REPRODUCTOR ATÓMICO
   ========================================================================= */
let activeChunkQueue = [];
let activeChunkIndex = 0;
let activeTTSContext = null; // 'manifiesto' | 'fundamentos'
let activeTTSLabel = '';
let activeCardIdPlaying = null;
let currentVolumeManifiesto = 1.0;
let currentVolumeFundamentos = 1.0;
let ttsKeepAliveTimer = null;

// Chunker de oraciones: fragmenta textos largos en bloques de 150 a 180 caracteres
function splitIntoAudioChunks(rawText, maxLen = 170) {
  const lines = rawText.split('\n');
  const chunks = [];
  for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    // Dividir por signos de puntuación (. ! ? :)
    const sentences = line.split(/(?<=[.?!;:])\s+/);
    let buf = '';
    for (let s of sentences) {
      s = s.trim();
      if (!s) continue;
      if ((buf + ' ' + s).trim().length <= maxLen) {
        buf = (buf + ' ' + s).trim();
      } else {
        if (buf) chunks.push(buf);
        buf = s;
      }
    }
    if (buf) chunks.push(buf);
  }
  return chunks;
}

// Detener todo de forma atómica y restablecer estados visuales
window.detenerTodasLasNarraciones = function() {
  activeChunkQueue = [];
  activeChunkIndex = 0;
  activeCardIdPlaying = null;
  activeTTSLabel = '';

  if (ttsKeepAliveTimer) {
    clearInterval(ttsKeepAliveTimer);
    ttsKeepAliveTimer = null;
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  setSectionAudioUI('manifiesto', 'idle');
  setSectionAudioUI('fundamentos', 'idle');
  resetAllCardPlayButtons();
};

function startKeepAlivePulse() {
  if (ttsKeepAliveTimer) clearInterval(ttsKeepAliveTimer);
  ttsKeepAliveTimer = setInterval(() => {
    if (window.speechSynthesis && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 9000);
}

function getSystemSpanishVoice() {
  if (!window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find(v => v.lang.startsWith('es') && (
    v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Helena') || 
    v.name.includes('Pablo') || v.name.includes('Sabina') || v.name.includes('Laura') || v.name.includes('Jorge')
  )) || voices.find(v => v.lang.startsWith('es')) || null;
}

// Iniciar cola de reproducción a prueba de fallos con setTimeout defensivo
function startSpeechQueue(chunks, context, label, cardId = null) {
  // 1. Cancelar cualquier reproducción previa
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  if (ttsKeepAliveTimer) {
    clearInterval(ttsKeepAliveTimer);
    ttsKeepAliveTimer = null;
  }

  activeChunkQueue = chunks;
  activeChunkIndex = 0;
  activeTTSContext = context;
  activeTTSLabel = label;
  activeCardIdPlaying = cardId;

  // Actualizar UI
  setSectionAudioUI(context, 'speaking', label);
  if (cardId) updateCardButtonUI(cardId, true);

  // WAKE UP Chromium audio engine si estuviera en pausa
  if (window.speechSynthesis && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  // Retardo defensivo de 60ms para evitar que Chromium descarte el nuevo speak() tras cancel()
  setTimeout(() => {
    playNextQueueChunk();
  }, 60);
}

function playNextQueueChunk() {
  if (!window.speechSynthesis) return;

  if (activeChunkIndex >= activeChunkQueue.length) {
    // Finalizó la cola completa
    window.detenerTodasLasNarraciones();
    return;
  }

  const chunkText = activeChunkQueue[activeChunkIndex];
  const utterance = new SpeechSynthesisUtterance(chunkText);
  utterance.lang = 'es-ES';
  utterance.rate = 0.98;
  utterance.pitch = 1.0;

  // Volumen según el contexto
  const vol = (activeTTSContext === 'manifiesto') ? currentVolumeManifiesto : currentVolumeFundamentos;
  utterance.volume = vol;

  const voice = getSystemSpanishVoice();
  if (voice) utterance.voice = voice;

  utterance.onstart = () => {
    startKeepAlivePulse();
    const progressLabel = activeChunkQueue.length > 1 
      ? `${activeTTSLabel} (${activeChunkIndex + 1}/${activeChunkQueue.length})` 
      : activeTTSLabel;
    setSectionAudioUI(activeTTSContext, 'speaking', progressLabel);
  };

  utterance.onend = () => {
    activeChunkIndex++;
    playNextQueueChunk();
  };

  utterance.onerror = (e) => {
    console.warn("Speech chunk end/error:", e);
    activeChunkIndex++;
    if (activeChunkIndex < activeChunkQueue.length) {
      playNextQueueChunk();
    } else {
      window.detenerTodasLasNarraciones();
    }
  };

  // Evitar garbage collection en V8
  window._activeJPVUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

// -------------------------------------------------------------
// NARRACIÓN DE SECCIONES COMPLETAS
// -------------------------------------------------------------
window.narrarManifiesto = function() {
  if (!window.speechSynthesis) {
    alert("Tu navegador no soporta síntesis de voz nativa.");
    return;
  }

  if (activeTTSContext === 'manifiesto' && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    setSectionAudioUI('manifiesto', 'speaking', activeTTSLabel || 'Manifiesto Completo');
    return;
  }

  const chunks = splitIntoAudioChunks(NARRACION_MANIFIESTO_TEXTO);
  startSpeechQueue(chunks, 'manifiesto', 'Manifiesto Completo');
};

window.pausarNarracionManifiesto = function() {
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
    setSectionAudioUI('manifiesto', 'paused');
  }
};

window.reanudarNarracionManifiesto = function() {
  if (window.speechSynthesis && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    setSectionAudioUI('manifiesto', 'speaking', activeTTSLabel || 'Manifiesto Completo');
  }
};

window.detenerNarracionManifiesto = function() {
  window.detenerTodasLasNarraciones();
};

window.narrarFundamentos = function() {
  if (!window.speechSynthesis) {
    alert("Tu navegador no soporta síntesis de voz nativa.");
    return;
  }

  if (activeTTSContext === 'fundamentos' && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    setSectionAudioUI('fundamentos', 'speaking', activeTTSLabel || '4 Pilares Teóricos');
    return;
  }

  const chunks = splitIntoAudioChunks(NARRACION_FUNDAMENTOS_TEXTO);
  startSpeechQueue(chunks, 'fundamentos', '4 Pilares Teóricos');
};

window.pausarNarracionFundamentos = function() {
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
    setSectionAudioUI('fundamentos', 'paused');
  }
};

window.reanudarNarracionFundamentos = function() {
  if (window.speechSynthesis && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    setSectionAudioUI('fundamentos', 'speaking', activeTTSLabel || 'Fundamentos Completos');
  }
};

window.detenerNarracionFundamentos = function() {
  window.detenerTodasLasNarraciones();
};

// -------------------------------------------------------------
// NARRACIÓN DE CARDS / BLOQUES INDIVIDUALES
// -------------------------------------------------------------
window.narrarCardIndividual = function(cardId) {
  if (!window.speechSynthesis) {
    alert("Tu navegador no soporta síntesis de voz nativa.");
    return;
  }

  // Si ya se estaba reproduciendo esta misma card y está hablando, detenerla (toggle)
  if (activeCardIdPlaying === cardId && window.speechSynthesis.speaking) {
    window.detenerTodasLasNarraciones();
    return;
  }

  const item = CARDS_SPEECH_CATALOG[cardId];
  if (!item) return;

  const chunks = splitIntoAudioChunks(item.text);
  startSpeechQueue(chunks, item.context, item.title, cardId);
};

// -------------------------------------------------------------
// VOLUMEN SINCRONIZADO
// -------------------------------------------------------------
window.setVolumenManifiesto = function(val) {
  currentVolumeManifiesto = parseFloat(val);
  const pct = Math.round(currentVolumeManifiesto * 100);
  const badge = document.getElementById('manifiestoVolumeBadge');
  const icon = document.getElementById('manifiestoVolumeIcon');
  if (badge) badge.textContent = `${pct}%`;
  if (icon) {
    icon.className = currentVolumeManifiesto === 0 
      ? 'fa-solid fa-volume-xmark text-sm text-red-600'
      : (currentVolumeManifiesto < 0.5 ? 'fa-solid fa-volume-low text-sm text-black' : 'fa-solid fa-volume-high text-sm text-black');
  }
};

window.cambiarVolumenManifiesto = function(delta) {
  const slider = document.getElementById('manifiestoVolumeSlider');
  if (!slider) return;
  let nuevo = Math.min(1, Math.max(0, parseFloat(slider.value) + delta));
  nuevo = Math.round(nuevo * 20) / 20;
  slider.value = nuevo;
  window.setVolumenManifiesto(nuevo);
};

window.setVolumenFundamentos = function(val) {
  currentVolumeFundamentos = parseFloat(val);
  const pct = Math.round(currentVolumeFundamentos * 100);
  const badge = document.getElementById('fundamentosVolumeBadge');
  const icon = document.getElementById('fundamentosVolumeIcon');
  if (badge) badge.textContent = `${pct}%`;
  if (icon) {
    icon.className = currentVolumeFundamentos === 0 
      ? 'fa-solid fa-volume-xmark text-sm text-red-600'
      : (currentVolumeFundamentos < 0.5 ? 'fa-solid fa-volume-low text-sm text-black' : 'fa-solid fa-volume-high text-sm text-black');
  }
};

window.cambiarVolumenFundamentos = function(delta) {
  const slider = document.getElementById('fundamentosVolumeSlider');
  if (!slider) return;
  let nuevo = Math.min(1, Math.max(0, parseFloat(slider.value) + delta));
  nuevo = Math.round(nuevo * 20) / 20;
  slider.value = nuevo;
  window.setVolumenFundamentos(nuevo);
};

// -------------------------------------------------------------
// ACTUALIZACIÓN DE INTERFAZ DE USUARIO
// -------------------------------------------------------------
function setSectionAudioUI(section, state, labelText = '') {
  const prefix = section === 'manifiesto' ? 'Manifiesto' : 'Fundamentos';
  const btnPlay = document.getElementById(`btn${prefix}Play`);
  const btnPause = document.getElementById(`btn${prefix}Pause`);
  const btnResume = document.getElementById(`btn${prefix}Resume`);
  const btnStop = document.getElementById(`btn${prefix}Stop`);
  const badge = document.getElementById(`${section}StatusBadge`);
  const statusText = document.getElementById(`${section}StatusText`);

  if (!btnPlay) return;

  if (state === 'speaking') {
    btnPlay.classList.add('hidden');
    btnPause.classList.remove('hidden');
    btnPause.classList.add('flex');
    btnResume.classList.add('hidden');
    btnStop.classList.remove('hidden');
    btnStop.classList.add('flex');

    if (badge) {
      badge.classList.remove('hidden');
      badge.classList.add('flex');
    }
    if (statusText) {
      statusText.textContent = labelText ? `Narrando: ${labelText}` : `Narrando ${prefix}...`;
    }
  } else if (state === 'paused') {
    btnPlay.classList.add('hidden');
    btnPause.classList.add('hidden');
    btnResume.classList.remove('hidden');
    btnResume.classList.add('flex');
    btnStop.classList.remove('hidden');
    btnStop.classList.add('flex');

    if (badge) {
      badge.classList.remove('hidden');
      badge.classList.add('flex');
    }
    if (statusText) {
      statusText.textContent = `Pausado: ${labelText || prefix}`;
    }
  } else {
    // idle
    btnPlay.classList.remove('hidden');
    btnPlay.classList.add('flex');
    btnPause.classList.add('hidden');
    btnResume.classList.add('hidden');
    btnStop.classList.add('hidden');

    if (badge) {
      badge.classList.add('hidden');
      badge.classList.remove('flex');
    }
    if (statusText) {
      statusText.textContent = 'Listo para narrar';
    }
  }
}

function updateCardButtonUI(cardId, isPlaying) {
  resetAllCardPlayButtons();
  const btn = document.getElementById(`btnCard_${cardId}`);
  const icon = document.getElementById(`iconCard_${cardId}`);
  if (!btn) return;

  if (isPlaying) {
    btn.classList.remove('bg-white');
    btn.classList.add('bg-neoYellow', 'animate-pulse');
    if (icon) {
      icon.className = 'fa-solid fa-volume-high text-black';
    }
  }
}

function resetAllCardPlayButtons() {
  for (let cardId in CARDS_SPEECH_CATALOG) {
    const btn = document.getElementById(`btnCard_${cardId}`);
    const icon = document.getElementById(`iconCard_${cardId}`);
    if (btn) {
      btn.classList.remove('bg-neoYellow', 'animate-pulse');
      btn.classList.add('bg-white');
    }
    if (icon) {
      icon.className = 'fa-solid fa-volume-high text-neoOrange';
    }
  }
}


/* =========================================================================
   CONTROLADOR DEL MODAL DE SIMULACIÓN DE ALGORITMOS & LABORATORIO 2D (JPV PRO)
   ========================================================================= */

window.openAlgoModal = function(key) {
  if (typeof detenerTodasLasNarraciones === 'function') detenerTodasLasNarraciones();
  if (typeof detenerNarracionBigO === 'function') detenerNarracionBigO();
  detenerNarracionAlgoModal();

  selectAlgorithm(key);
  populateAlgoModalData(key);

  const modal = document.getElementById('algoSimulationModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  syncModalDatasetInputs();
  render2DStage();
};

window.closeAlgoModal = function() {
  pauseSimulation();
  detenerNarracionAlgoModal();
  const modal = document.getElementById('algoSimulationModal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.classList.remove('overflow-hidden');
};

window.handleAlgoModalBackdropClick = function(event) {
  if (event.target.id === 'algoSimulationModal') {
    closeAlgoModal();
  }
};

function populateModalAlgoDropdown() {
  const dropdown = document.getElementById('modalAlgoSelectDropdown');
  if (!dropdown) return;
  dropdown.innerHTML = '';

  const groups = {
    sort: '⚡ Ordenamientos (9)',
    search: '🔍 Búsquedas (6)',
    complexity: '📐 Clases Big-O Puras (6)'
  };

  for (let cat in groups) {
    const optgroup = document.createElement('optgroup');
    optgroup.label = groups[cat];
    for (let k in ALGORITHMS_CATALOG) {
      if (ALGORITHMS_CATALOG[k].category === cat) {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = `${ALGORITHMS_CATALOG[k].name} [${ALGORITHMS_CATALOG[k].bigO}]`;
        optgroup.appendChild(opt);
      }
    }
    dropdown.appendChild(optgroup);
  }
}

function syncModalDatasetInputs() {
  ['numbers', 'letters', 'objects', 'colors'].forEach(t => {
    const modalBtn = document.getElementById(`btn-modal-type-${t}`);
    if (modalBtn) {
      modalBtn.className = (t === currentDataType)
        ? 'neo-button bg-neoCyan px-2 py-0.5 text-xs uppercase font-mono font-bold'
        : 'neo-button bg-white px-2 py-0.5 text-xs uppercase font-mono font-bold';
    }
  });

  const mainBox = document.getElementById('dataInputBox');
  const modalBox = document.getElementById('modalDataInputBox');
  if (mainBox && modalBox) modalBox.value = mainBox.value;

  const modalN = document.getElementById('modalArrayLengthLabel');
  if (modalN) modalN.innerText = rawItems.length;

  const modalTgt = document.getElementById('modalTargetValueInput');
  const mainTgt = document.getElementById('targetValueInput');
  if (modalTgt && mainTgt) modalTgt.value = mainTgt.value;

  const modalSlider = document.getElementById('modalAnimSpeedSlider');
  if (modalSlider) modalSlider.value = animationSpeed;
  const modalSpeedLbl = document.getElementById('modalSpeedValueLabel');
  if (modalSpeedLbl) modalSpeedLbl.innerText = `${animationSpeed} ms`;
}

window.applyModalCustomInput = function() {
  const modalBox = document.getElementById('modalDataInputBox');
  const mainBox = document.getElementById('dataInputBox');
  if (modalBox && mainBox) {
    mainBox.value = modalBox.value;
    applyCustomInput();
    const modalN = document.getElementById('modalArrayLengthLabel');
    if (modalN) modalN.innerText = rawItems.length;
  }
};

window.setSimulationSpeed = function(val) {
  animationSpeed = parseInt(val);
  const mainSlider = document.getElementById('animSpeedSlider');
  const modalSlider = document.getElementById('modalAnimSpeedSlider');
  const mainLabel = document.getElementById('speedValueLabel');
  const modalLabel = document.getElementById('modalSpeedValueLabel');

  if (mainSlider) mainSlider.value = val;
  if (modalSlider) modalSlider.value = val;
  if (mainLabel) mainLabel.innerText = `${animationSpeed} ms`;
  if (modalLabel) modalLabel.innerText = `${animationSpeed} ms`;

  if (isPlaying) {
    clearInterval(timerId);
    timerId = setInterval(executeNextAction, animationSpeed);
  }
};

function populateAlgoModalData(key) {
  const meta = ALGORITHMS_CATALOG[key];
  if (!meta) return;

  const header = document.getElementById('modalAlgoHeader');
  if (header) {
    header.className = `py-2.5 px-4 sm:px-5 border-b-3 border-black flex items-center justify-between flex-wrap gap-2 ${meta.badge} transition-colors duration-200`;
  }

  const iconEl = document.getElementById('modalAlgoIcon');
  if (iconEl) {
    iconEl.textContent = (meta.category === 'sort') ? '⚡' : (meta.category === 'search' ? '🔍' : '📐');
  }

  const titleEl = document.getElementById('modalAlgoTitle');
  if (titleEl) titleEl.textContent = meta.name;

  const bigOEl = document.getElementById('modalAlgoBigOBadge');
  if (bigOEl) bigOEl.textContent = meta.bigO;

  const catEl = document.getElementById('modalAlgoCategoryBadge');
  if (catEl) catEl.textContent = meta.category === 'sort' ? 'Ordenamiento' : (meta.category === 'search' ? 'Búsqueda' : 'Clase Big-O');

  const spaceEl = document.getElementById('modalAlgoSpaceBadge');
  if (spaceEl) spaceEl.textContent = `Esp: ${meta.space}`;

  const howEl = document.getElementById('modalAlgoHowItWorks');
  if (howEl) howEl.textContent = meta.howItWorks || meta.desc;

  const stableEl = document.getElementById('modalAlgoStableBadge');
  if (stableEl) stableEl.textContent = `Estabilidad: ${meta.stable}`;

  const bestEl = document.getElementById('modalAlgoBest');
  if (bestEl) bestEl.textContent = meta.best;

  const avgEl = document.getElementById('modalAlgoAvg');
  if (avgEl) avgEl.textContent = meta.avg;

  const worstEl = document.getElementById('modalAlgoWorst');
  if (worstEl) worstEl.textContent = meta.worst;

  const spaceMetricEl = document.getElementById('modalAlgoSpace');
  if (spaceMetricEl) spaceMetricEl.textContent = meta.space;

  const proTipEl = document.getElementById('modalAlgoProTip');
  if (proTipEl) proTipEl.textContent = meta.proTip || 'Optimiza siempre considerando el caso promedio y la localidad espacial de caché.';

  const codeEl = document.getElementById('modalAlgoCode');
  if (codeEl) codeEl.textContent = (meta.code || '').trim();

  const gifEl = document.getElementById('modalAlgoGifImg');
  if (gifEl) {
    gifEl.src = meta.gif || 'assets/nearest_neighbor_search.gif';
    gifEl.alt = meta.name;
  }
  const gifCap = document.getElementById('modalAlgoGifCaption');
  if (gifCap) gifCap.textContent = `${meta.name} · Asset Cinemático Oficial`;

  const dropdown = document.getElementById('modalAlgoSelectDropdown');
  if (dropdown) dropdown.value = key;

  setAlgoModalAudioButtonsState('idle');
  switchAlgoModalMediaTab('code');
}

/* =========================================================================
   SISTEMA DE PESTAÑAS (TABS) PARA CÓDIGO Y GIF EN EL MODAL DE ALGORITMOS (JPV PRO)
   ========================================================================= */
window.switchAlgoModalMediaTab = function(tab) {
  const btnGif = document.getElementById('tabBtnAlgoGif');
  const btnPseint = document.getElementById('tabBtnAlgoPseint');
  const btnPython = document.getElementById('tabBtnAlgoPython');
  const btnWeb = document.getElementById('tabBtnAlgoWeb');
  const btnCsharp = document.getElementById('tabBtnAlgoCsharp');

  const contentCode = document.getElementById('tabContentAlgoCode');
  const contentGif = document.getElementById('tabContentAlgoGif');
  const codeEl = document.getElementById('modalAlgoCode');
  const badgeEl = document.getElementById('modalAlgoLangBadge');
  const btnCopy = document.getElementById('btnCopyAlgoCode');

  const allBtns = [
    { el: btnGif, id: 'gif', activeCls: 'bg-neoPurple text-white' },
    { el: btnPseint, id: 'pseint', activeCls: 'bg-neoCyan text-black' },
    { el: btnPython, id: 'python', activeCls: 'bg-[#3776AB] text-white' },
    { el: btnWeb, id: 'web', activeCls: 'bg-[#E44D26] text-white' },
    { el: btnCsharp, id: 'csharp', activeCls: 'bg-[#512BD4] text-white' }
  ];

  allBtns.forEach(b => {
    if (b.el) {
      if (b.id === tab) {
        b.el.className = `neo-button ${b.activeCls} px-2 py-1 text-xs font-mono font-black flex items-center gap-1 shadow-neoSm transition-all`;
      } else {
        b.el.className = 'neo-button bg-white text-black px-2 py-1 text-xs font-mono font-black flex items-center gap-1 hover:bg-gray-100 transition-all';
      }
    }
  });

  if (tab === 'gif') {
    if (contentCode) contentCode.classList.add('hidden');
    if (contentGif) contentGif.classList.remove('hidden');
    if (btnCopy) btnCopy.style.display = 'none';
    if (badgeEl) badgeEl.style.display = 'none';
  } else {
    if (contentCode) contentCode.classList.remove('hidden');
    if (contentGif) contentGif.classList.add('hidden');
    if (btnCopy) btnCopy.style.display = 'inline-flex';
    if (badgeEl) badgeEl.style.display = 'inline-block';

    const algoData = window.ALGO_MULTILANG_DATA && window.ALGO_MULTILANG_DATA[selectedAlgoId];
    if (algoData && algoData.langs && algoData.langs[tab]) {
      const langObj = algoData.langs[tab];
      if (codeEl) codeEl.textContent = langObj.code.trim();
      if (badgeEl) {
        badgeEl.textContent = langObj.langBadge;
        badgeEl.className = `badge font-mono text-xs font-bold px-2 py-0.5 ${langObj.badgeColor}`;
      }
    } else {
      // Fallback
      const meta = ALGORITHMS_CATALOG[selectedAlgoId];
      if (codeEl && meta) codeEl.textContent = (meta.code || '').trim();
      if (badgeEl) { badgeEl.textContent = 'ES6+ / TS'; badgeEl.className = 'badge bg-black text-white font-mono text-xs font-bold px-2 py-0.5'; }
    }
  }
};

/* =========================================================================
   COPIADO RÁPIDO DE CÓDIGO AL PORTAPAPELES CON FEEDBACK VISUAL (JPV PRO)
   ========================================================================= */
window.copyModalAlgoCode = function() {
  const codeEl = document.getElementById('modalAlgoCode');
  const text = codeEl ? codeEl.textContent : '';
  if (!text) return;

  const btnIcon = document.getElementById('copyAlgoCodeIcon');
  const btnText = document.getElementById('copyAlgoCodeText');

  const showFeedback = () => {
    if (btnIcon) btnIcon.className = 'fa-solid fa-check text-black';
    if (btnText) btnText.textContent = '¡Copiado!';
    setTimeout(() => {
      if (btnIcon) btnIcon.className = 'fa-solid fa-copy';
      if (btnText) btnText.textContent = 'Copiar';
    }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showFeedback).catch(() => {
      fallbackCopyText(text);
      showFeedback();
    });
  } else {
    fallbackCopyText(text);
    showFeedback();
  }
};

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (e) {
    console.error('Error al copiar texto', e);
  }
  document.body.removeChild(textArea);
}

/* =========================================================================
   MOTOR DE NARRACIÓN POR VOZ TTS DEL MODAL DE ALGORITMOS (JPV PRO)
   ========================================================================= */

let algoModalChunkQueue = [];
let algoModalChunkIndex = 0;
let currentAlgoModalVolume = 1.0;

window.narrarAlgoModalActual = function() {
  if (!window.speechSynthesis) {
    alert("Tu navegador no soporta síntesis de voz nativa (Web Speech API).");
    return;
  }

  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    setAlgoModalAudioButtonsState('speaking');
    return;
  }

  detenerNarracionAlgoModal();
  if (typeof detenerTodasLasNarraciones === 'function') detenerTodasLasNarraciones();
  if (typeof detenerNarracionBigO === 'function') detenerNarracionBigO();

  const meta = ALGORITHMS_CATALOG[selectedAlgoId];
  if (!meta || !meta.speechText) return;

  algoModalChunkQueue = splitIntoAudioChunks(meta.speechText, 170);
  algoModalChunkIndex = 0;

  setAlgoModalAudioButtonsState('speaking');
  const statusEl = document.getElementById('modalSpeechStatusText');
  if (statusEl) statusEl.textContent = `Narrando ${meta.name}...`;

  if (window.speechSynthesis.paused) window.speechSynthesis.resume();
  setTimeout(() => {
    playNextAlgoModalChunk();
  }, 60);
};

function playNextAlgoModalChunk() {
  if (!window.speechSynthesis) return;

  if (algoModalChunkIndex >= algoModalChunkQueue.length) {
    detenerNarracionAlgoModal();
    return;
  }

  const chunkText = algoModalChunkQueue[algoModalChunkIndex];
  const utterance = new SpeechSynthesisUtterance(chunkText);
  utterance.lang = 'es-ES';
  utterance.rate = 0.98;
  utterance.pitch = 1.0;
  utterance.volume = currentAlgoModalVolume;

  const voice = (typeof getSystemSpanishVoice === 'function') ? getSystemSpanishVoice() : null;
  if (voice) utterance.voice = voice;

  utterance.onstart = () => {
    if (typeof startKeepAlivePulse === 'function') startKeepAlivePulse();
    const meta = ALGORITHMS_CATALOG[selectedAlgoId];
    const name = meta ? meta.name : 'Algoritmo';
    const progressLabel = algoModalChunkQueue.length > 1 
      ? `Narrando ${name} (${algoModalChunkIndex + 1}/${algoModalChunkQueue.length})` 
      : `Narrando ${name}...`;
    const statusEl = document.getElementById('modalSpeechStatusText');
    if (statusEl) statusEl.textContent = progressLabel;
  };

  utterance.onend = () => {
    algoModalChunkIndex++;
    playNextAlgoModalChunk();
  };

  utterance.onerror = (e) => {
    console.warn("Algo modal speech error:", e);
    algoModalChunkIndex++;
    if (algoModalChunkIndex < algoModalChunkQueue.length) {
      playNextAlgoModalChunk();
    } else {
      detenerNarracionAlgoModal();
    }
  };

  window._activeAlgoModalUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

window.pausarNarracionAlgoModal = function() {
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
    setAlgoModalAudioButtonsState('paused');
    const statusEl = document.getElementById('modalSpeechStatusText');
    if (statusEl) statusEl.textContent = 'Pausado';
  }
};

window.reanudarNarracionAlgoModal = function() {
  if (window.speechSynthesis && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    setAlgoModalAudioButtonsState('speaking');
    const meta = ALGORITHMS_CATALOG[selectedAlgoId];
    if (meta) {
      const progressLabel = algoModalChunkQueue.length > 1 
        ? `Narrando ${meta.name} (${algoModalChunkIndex + 1}/${algoModalChunkQueue.length})` 
        : `Narrando ${meta.name}...`;
      const statusEl = document.getElementById('modalSpeechStatusText');
      if (statusEl) statusEl.textContent = progressLabel;
    }
  }
};

window.detenerNarracionAlgoModal = function() {
  algoModalChunkQueue = [];
  algoModalChunkIndex = 0;
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  setAlgoModalAudioButtonsState('idle');
};

function setAlgoModalAudioButtonsState(state) {
  const btnPlay = document.getElementById('btnModalSpeechPlay');
  const btnPause = document.getElementById('btnModalSpeechPause');
  const btnResume = document.getElementById('btnModalSpeechResume');
  const btnStop = document.getElementById('btnModalSpeechStop');
  const badge = document.getElementById('modalSpeechStatusBadge');

  if (!btnPlay) return;

  if (state === 'speaking') {
    btnPlay.classList.add('hidden');
    btnPause.classList.remove('hidden');
    btnPause.classList.add('flex');
    btnResume.classList.add('hidden');
    btnStop.classList.remove('hidden');
    btnStop.classList.add('flex');
    if (badge) {
      badge.classList.remove('hidden');
      badge.classList.add('flex');
    }
  } else if (state === 'paused') {
    btnPlay.classList.add('hidden');
    btnPause.classList.add('hidden');
    btnResume.classList.remove('hidden');
    btnResume.classList.add('flex');
    btnStop.classList.remove('hidden');
    btnStop.classList.add('flex');
    if (badge) {
      badge.classList.remove('hidden');
      badge.classList.add('flex');
    }
  } else {
    btnPlay.classList.remove('hidden');
    btnPlay.classList.add('flex');
    btnPause.classList.add('hidden');
    btnResume.classList.add('hidden');
    btnStop.classList.add('hidden');
    if (badge) {
      badge.classList.add('hidden');
      badge.classList.remove('flex');
    }
  }
}

window.setVolumenAlgoModal = function(val) {
  currentAlgoModalVolume = Math.max(0, Math.min(1, parseFloat(val)));
  const pct = Math.round(currentAlgoModalVolume * 100);
  const badge = document.getElementById('modalSpeechVolumeBadge');
  const icon = document.getElementById('modalSpeechVolumeIcon');
  if (badge) badge.textContent = `${pct}%`;
  if (icon) {
    icon.className = currentAlgoModalVolume === 0 
      ? 'fa-solid fa-volume-xmark text-sm text-red-600' 
      : (currentAlgoModalVolume < 0.5 ? 'fa-solid fa-volume-low text-sm text-black' : 'fa-solid fa-volume-high text-sm text-black');
  }
};

window.cambiarVolumenAlgoModal = function(delta) {
  const slider = document.getElementById('modalSpeechVolumeSlider');
  if (!slider) return;
  let nuevo = Math.min(1, Math.max(0, parseFloat(slider.value) + delta));
  nuevo = Math.round(nuevo * 20) / 20;
  slider.value = nuevo;
  window.setVolumenAlgoModal(nuevo);
};

/* =========================================================================
   6. MOTOR MAESTRO MULTI-LENGUAJE & LABORATORIO DIVIDIDO (JPV PRO)
   Soporte para PSeInt (SVG Flowchart), Python (CLI Trace), Web Sandbox y C# Benchmark
   Lead Architect: Ing. Juancito Peña Vizcaíno
   ========================================================================= */

window.currentMultiLang = 'pseint';
window.currentMultiLangAlgoId = 'bubble_sort';

window.openMultiLangModal = function(algoId, langId) {
  if (algoId && window.ALGO_MULTILANG_DATA && window.ALGO_MULTILANG_DATA[algoId]) {
    window.currentMultiLangAlgoId = algoId;
  } else if (!window.currentMultiLangAlgoId) {
    window.currentMultiLangAlgoId = selectedAlgoId || 'bubble_sort';
  }

  if (langId) {
    window.currentMultiLang = langId;
  }

  const modal = document.getElementById('algoMultiLangModal');
  if (!modal) return;

  // Poblar dropdown de algoritmos si está vacío
  const select = document.getElementById('multiLangAlgoSelect');
  if (select && select.options.length === 0 && window.ALGO_MULTILANG_DATA) {
    let opts = '';
    for (const k in window.ALGO_MULTILANG_DATA) {
      opts += `<option value="${k}">${window.ALGO_MULTILANG_DATA[k].name}</option>`;
    }
    select.innerHTML = opts;
  }
  if (select) select.value = window.currentMultiLangAlgoId;

  // Actualizar datos del algoritmo activo
  const data = window.ALGO_MULTILANG_DATA[window.currentMultiLangAlgoId];
  if (!data) return;

  const titleEl = document.getElementById('multiLangModalTitle');
  if (titleEl) titleEl.textContent = data.name;

  const bigOEl = document.getElementById('multiLangBigOBadge');
  if (bigOEl) bigOEl.textContent = data.bigO;

  const catEl = document.getElementById('multiLangCategoryBadge');
  if (catEl) catEl.textContent = data.category.toUpperCase();

  const spaceEl = document.getElementById('multiLangSpaceBadge');
  if (spaceEl) spaceEl.textContent = `Esp: ${data.space}`;

  // Actualizar pestaña de lenguaje
  window.switchMultiLangTab(window.currentMultiLang);

  // Mostrar modal y bloquear scroll de fondo
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

window.closeMultiLangModal = function() {
  const modal = document.getElementById('algoMultiLangModal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
};

window.handleMultiLangBackdropClick = function(e) {
  if (e.target && e.target.id === 'algoMultiLangModal') {
    closeMultiLangModal();
  }
};

window.openMultiLangModalFromCurrent = function() {
  openMultiLangModal(selectedAlgoId, window.currentMultiLang || 'pseint');
};

window.openAlgoSimulationFromMultiLang = function() {
  closeMultiLangModal();
  openAlgoModal(window.currentMultiLangAlgoId);
};

window.switchMultiLangTab = function(langId) {
  window.currentMultiLang = langId;
  const data = window.ALGO_MULTILANG_DATA[window.currentMultiLangAlgoId];
  if (!data || !data.langs || !data.langs[langId]) return;

  const langData = data.langs[langId];

  // Actualizar estado visual de los botones de pestañas
  const tabPseint = document.getElementById('btnLangTabPseint');
  const tabPython = document.getElementById('btnLangTabPython');
  const tabWeb = document.getElementById('btnLangTabWeb');
  const tabCsharp = document.getElementById('btnLangTabCsharp');

  const tabs = [
    { el: tabPseint, id: 'pseint', active: 'bg-neoCyan text-black' },
    { el: tabPython, id: 'python', active: 'bg-[#3776AB] text-white' },
    { el: tabWeb, id: 'web', active: 'bg-[#E44D26] text-white' },
    { el: tabCsharp, id: 'csharp', active: 'bg-[#512BD4] text-white' }
  ];

  tabs.forEach(t => {
    if (t.el) {
      if (t.id === langId) {
        t.el.className = `neo-button ${t.active} px-3 py-1.5 text-xs font-mono font-black flex items-center gap-1.5 shadow-neoSm transition-all`;
      } else {
        t.el.className = 'neo-button bg-white text-black px-3 py-1.5 text-xs font-mono font-black flex items-center gap-1.5 hover:bg-gray-100 transition-all';
      }
    }
  });

  // Actualizar Badge del Lenguaje Activo
  const langBadgeEl = document.getElementById('multiLangActiveLangBadge');
  if (langBadgeEl) {
    langBadgeEl.textContent = langData.langBadge;
    langBadgeEl.className = `badge font-mono text-xs font-black px-2.5 py-0.5 ${langData.badgeColor}`;
  }

  // Código Fuente
  const codeEl = document.getElementById('multiLangCodeDisplay');
  if (codeEl) {
    codeEl.textContent = langData.code.trim();
  }

  // Contador de Líneas
  const lineCountEl = document.getElementById('multiLangLineCount');
  if (lineCountEl) {
    const lines = langData.code.trim().split('\n').length;
    lineCountEl.textContent = `${lines} líneas de código`;
  }

  // Conceptos Clave
  const conceptsEl = document.getElementById('multiLangKeyConcepts');
  if (conceptsEl && langData.keyConcepts) {
    conceptsEl.innerHTML = langData.keyConcepts.map(c => 
      `<span class="neo-badge bg-[#FFFDF0] text-black border border-black text-[11px] font-mono font-bold px-2 py-0.5">${c}</span>`
    ).join('');
  }

  // Explicación Didáctica
  const expEl = document.getElementById('multiLangExplanationText');
  if (expEl) expEl.textContent = langData.explanation;

  // Selector del Contenedor Visual según el Lenguaje
  const visualPseint = document.getElementById('visualPseintFlowchart');
  const visualPython = document.getElementById('visualPythonTerminal');
  const visualWeb = document.getElementById('visualWebSandbox');
  const visualCsharp = document.getElementById('visualCsharpBenchmark');
  const visualTypeBadge = document.getElementById('multiLangVisualTypeBadge');

  if (visualPseint) visualPseint.classList.add('hidden');
  if (visualPython) visualPython.classList.add('hidden');
  if (visualWeb) visualWeb.classList.add('hidden');
  if (visualCsharp) visualCsharp.classList.add('hidden');

  if (langId === 'pseint') {
    if (visualPseint) visualPseint.classList.remove('hidden');
    if (visualTypeBadge) visualTypeBadge.textContent = 'Diagrama de Flujo (SVG Canónico)';
    renderMultiLangFlowchart(langData.flowchart);
  } else if (langId === 'python') {
    if (visualPython) visualPython.classList.remove('hidden');
    if (visualTypeBadge) visualTypeBadge.textContent = 'Traza de Terminal Interactiva';
    renderMultiLangTerminal(langData.terminalOutput);
  } else if (langId === 'web') {
    if (visualWeb) visualWeb.classList.remove('hidden');
    if (visualTypeBadge) visualTypeBadge.textContent = 'Sandbox Web DOM Interactivo';
    renderMultiLangWebSandbox(langData.demoData || [45, 12, 88, 30, 65, 19, 94], window.currentMultiLangAlgoId);
  } else if (langId === 'csharp') {
    if (visualCsharp) visualCsharp.classList.remove('hidden');
    if (visualTypeBadge) visualTypeBadge.textContent = 'Benchmark & Memoria .NET 9';
    renderMultiLangBenchmark(langData.benchmark);
  }
};

/* =========================================================================
   GENERADOR SVG PROCEDURAL DE DIAGRAMAS DE FLUJO (PSeInt Pro - ISO 5807)
   ========================================================================= */
window.renderMultiLangFlowchart = function(flowchart) {
  const container = document.getElementById('flowchartSvgContainer');
  if (!container || !flowchart || !flowchart.nodes) return;

  const nodes = flowchart.nodes;
  const nodeWidth = 240;
  const nodeHeight = 36;
  const verticalSpacing = 28;
  const totalHeight = nodes.length * (nodeHeight + verticalSpacing) + 20;

  let svg = `<svg width="100%" height="${totalHeight}" viewBox="0 0 280 ${totalHeight}" xmlns="http://www.w3.org/2000/svg" class="overflow-visible font-mono font-bold text-[11px]">
    <defs>
      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="#000" />
      </marker>
    </defs>`;

  nodes.forEach((node, idx) => {
    const y = 15 + idx * (nodeHeight + verticalSpacing);
    const x = 20;

    // Conectar nodo con el siguiente si no es el último
    if (idx < nodes.length - 1) {
      const nextY = 15 + (idx + 1) * (nodeHeight + verticalSpacing);
      svg += `<line x1="140" y1="${y + nodeHeight}" x2="140" y2="${nextY}" stroke="#000" stroke-width="2.5" marker-end="url(#arrowhead)" />`;
    }

    if (node.type === 'start' || node.type === 'end') {
      // Óvalo o píldora de inicio / fin
      const fill = node.type === 'start' ? '#54F18F' : '#FF3366';
      const textColor = node.type === 'start' ? '#000' : '#FFF';
      svg += `
        <rect x="${x}" y="${y}" rx="18" ry="18" width="${nodeWidth}" height="${nodeHeight}" fill="${fill}" stroke="#000" stroke-width="2.5" filter="drop-shadow(2px 2px 0px #000)" />
        <text x="140" y="${y + 22}" text-anchor="middle" fill="${textColor}" font-size="11" font-weight="900">${node.text}</text>
      `;
    } else if (node.type === 'decision') {
      // Rombo de decisión
      svg += `
        <polygon points="140,${y} 255,${y + 18} 140,${y + 36} 25,${y + 18}" fill="#FFE600" stroke="#000" stroke-width="2.5" filter="drop-shadow(2px 2px 0px #000)" />
        <text x="140" y="${y + 22}" text-anchor="middle" fill="#000" font-size="10.5" font-weight="900">${node.text}</text>
      `;
    } else {
      // Rectángulo de proceso
      svg += `
        <rect x="${x}" y="${y}" width="${nodeWidth}" height="${nodeHeight}" fill="#FFF" stroke="#000" stroke-width="2.5" filter="drop-shadow(2px 2px 0px #000)" />
        <text x="140" y="${y + 22}" text-anchor="middle" fill="#000" font-size="10.5" font-weight="800">${node.text}</text>
      `;
    }
  });

  svg += `</svg>`;
  container.innerHTML = svg;
};

/* =========================================================================
   SIMULADOR DE TERMINAL CLI INTERACTIVA (PYTHON)
   ========================================================================= */
window.renderMultiLangTerminal = function(logs) {
  const container = document.getElementById('pythonTerminalOutput');
  if (!container || !logs) return;

  container.innerHTML = logs.map(line => {
    let colorClass = 'text-gray-300';
    if (line.startsWith('$')) colorClass = 'text-neoYellow font-black';
    else if (line.startsWith('[+]')) colorClass = 'text-neoCyan font-bold';
    else if (line.startsWith('[*]')) colorClass = 'text-neoOrange';
    else if (line.startsWith('[✓]')) colorClass = 'text-neoGreen font-bold';
    return `<div class="${colorClass}">${line}</div>`;
  }).join('');
};

/* =========================================================================
   SANDBOX WEB DOM INTERACTIVO (HTML / CSS / JS)
   ========================================================================= */
window.webSandboxItems = [];
window.renderMultiLangWebSandbox = function(data, algoId) {
  window.webSandboxItems = [...data];
  const arena = document.getElementById('webSandboxBarsArena');
  const status = document.getElementById('webSandboxStatus');
  if (!arena) return;

  const maxVal = Math.max(...window.webSandboxItems, 1);
  arena.innerHTML = window.webSandboxItems.map((val, idx) => {
    const heightPercent = Math.max(Math.round((val / maxVal) * 100), 15);
    return `<div id="webBar-${idx}" class="flex-1 bg-neoGreen border-2 border-black flex flex-col justify-end items-center text-[10px] font-mono font-black transition-all duration-150" style="height: ${heightPercent}%;">
      <span class="mb-0.5">${val}</span>
    </div>`;
  }).join('');

  if (status) status.textContent = `Colección cargada con ${window.webSandboxItems.length} elementos. Presiona 'Ejecutar Animación'.`;
};

window.runWebSandboxDemo = async function() {
  const status = document.getElementById('webSandboxStatus');
  if (status) status.textContent = 'Ejecutando simulación en el DOM...';
  const n = window.webSandboxItems.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const barA = document.getElementById(`webBar-${j}`);
      const barB = document.getElementById(`webBar-${j + 1}`);
      if (barA) barA.className = barA.className.replace('bg-neoGreen', 'bg-neoYellow');
      if (barB) barB.className = barB.className.replace('bg-neoGreen', 'bg-neoYellow');
      await new Promise(r => setTimeout(r, 120));

      if (window.webSandboxItems[j] > window.webSandboxItems[j + 1]) {
        if (barA) barA.className = barA.className.replace('bg-neoYellow', 'bg-neoRed text-white');
        if (barB) barB.className = barB.className.replace('bg-neoYellow', 'bg-neoRed text-white');

        let tmp = window.webSandboxItems[j];
        window.webSandboxItems[j] = window.webSandboxItems[j + 1];
        window.webSandboxItems[j + 1] = tmp;

        // Re-render
        renderMultiLangWebSandbox(window.webSandboxItems, window.currentMultiLangAlgoId);
        await new Promise(r => setTimeout(r, 120));
      }

      if (barA) barA.className = barA.className.replace('bg-neoYellow', 'bg-neoGreen').replace('bg-neoRed text-white', 'bg-neoGreen');
      if (barB) barB.className = barB.className.replace('bg-neoYellow', 'bg-neoGreen').replace('bg-neoRed text-white', 'bg-neoGreen');
    }
  }

  if (status) status.textContent = '¡Demostración finalizada con éxito en el Sandbox Web!';
};

/* =========================================================================
   DASHBOARD DE BENCHMARK & MEMORIA (C# .NET 9)
   ========================================================================= */
window.renderMultiLangBenchmark = function(bench) {
  if (!bench) return;
  const memEl = document.getElementById('csharpBenchMem');
  const cacheEl = document.getElementById('csharpBenchCache');
  const runtimeEl = document.getElementById('csharpBenchRuntime');
  const bestEl = document.getElementById('csharpBenchBest');
  const worstEl = document.getElementById('csharpBenchWorst');

  if (memEl) memEl.textContent = bench.memoryAlloc || '0 Bytes';
  if (cacheEl) cacheEl.textContent = bench.registersUsed || 'CPU L1 Cache';
  if (runtimeEl) runtimeEl.textContent = bench.targetFramework || '.NET 9.0 LTS';
  if (bestEl) bestEl.textContent = bench.complexityBest || 'O(n)';
  if (worstEl) worstEl.textContent = bench.complexityWorst || 'O(n²)';
};

/* =========================================================================
   COPIADO RÁPIDO CON FEEDBACK EN VISOR MULTI-LENGUAJE
   ========================================================================= */
window.copyMultiLangCode = function() {
  const codeEl = document.getElementById('multiLangCodeDisplay');
  const text = codeEl ? codeEl.textContent : '';
  if (!text) return;

  const btnIcon = document.getElementById('copyMultiLangIcon');
  const btnText = document.getElementById('copyMultiLangText');

  const showFeedback = () => {
    if (btnIcon) btnIcon.className = 'fa-solid fa-check text-black';
    if (btnText) btnText.textContent = '¡Código Copiado!';
    setTimeout(() => {
      if (btnIcon) btnIcon.className = 'fa-solid fa-copy';
      if (btnText) btnText.textContent = 'Copiar Código';
    }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showFeedback).catch(() => {
      fallbackCopyText(text);
      showFeedback();
    });
  } else {
    fallbackCopyText(text);
    showFeedback();
  }
};

// Listener global de teclado para cerrar modal con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('algoMultiLangModal');
    if (modal && !modal.classList.contains('hidden')) {
      closeMultiLangModal();
    }
  }
});
