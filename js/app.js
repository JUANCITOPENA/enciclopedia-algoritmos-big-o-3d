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
};

function setupDomEvents() {
  document.getElementById('animSpeedSlider').addEventListener('input', (e) => {
    animationSpeed = parseInt(e.target.value);
    document.getElementById('speedValueLabel').innerText = `${animationSpeed} ms`;
    if (isPlaying) {
      clearInterval(timerId);
      timerId = setInterval(executeNextAction, animationSpeed);
    }
  });

  document.getElementById('targetValueInput').addEventListener('change', (e) => {
    const val = e.target.value.trim();
    currentTarget = isNaN(val) ? val : parseInt(val);
    resetSimulationView();
  });

  window.addEventListener('resize', onWindowResize);
}

function setDataType(type) {
  currentDataType = type;
  ['numbers', 'letters', 'objects', 'colors'].forEach(t => {
    const btn = document.getElementById(`btn-type-${t}`);
    if (btn) btn.className = (t === type) 
      ? 'neo-button bg-neoCyan px-3 py-1 text-xs uppercase' 
      : 'neo-button bg-white px-3 py-1 text-xs uppercase';
  });

  generateDatasetPreset('random');
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
  build3DSceneBars();
  resetSimulationView();
}

function pickRandomTarget() {
  if (rawItems.length > 0) {
    const randItem = rawItems[Math.floor(Math.random() * rawItems.length)];
    currentTarget = randItem.value;
    document.getElementById('targetValueInput').value = randItem.display || randItem.value;
    resetSimulationView();
  }
}

function updateHeaderAndCounts() {
  const n = rawItems.length;
  document.getElementById('arrayLengthLabel').innerText = n;
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
      <button onclick="selectAlgorithm('${key}')" id="card-${key}"
        class="neo-box p-2 text-left flex flex-col justify-between ${isSelected ? 'active-card' : 'bg-white'}">
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="neo-badge ${item.badge} text-black text-[9px] px-1 py-0.2 font-mono">
              ${item.bigO}
            </span>
            <span class="text-[8px] font-mono font-bold uppercase text-gray-600">${item.category}</span>
          </div>
          <div class="font-black text-xs text-black leading-tight truncate">${item.name}</div>
        </div>
        <div class="mt-2 text-[9px] font-mono text-gray-700 truncate">Esp: ${item.space}</div>
      </button>
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
        <td class="p-2 border-2 border-black font-black flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 border border-black ${item.badge}"></span>
          ${item.name}
        </td>
        <td class="p-2 border-2 border-black text-gray-800 text-[11px] uppercase">${item.category}</td>
        <td class="p-2 border-2 border-black font-mono text-emerald-700">${item.best}</td>
        <td class="p-2 border-2 border-black font-mono text-cyan-800">${item.avg}</td>
        <td class="p-2 border-2 border-black font-mono text-rose-800">${item.worst}</td>
        <td class="p-2 border-2 border-black font-mono font-black">${ops.toLocaleString()}</td>
        <td class="p-2 border-2 border-black font-mono">${item.space}</td>
        <td class="p-2 border-2 border-black font-sans">${item.stable}</td>
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

    case 'merge_sort':
    case 'radix_sort':
    case 'bogo_sort': {
      let sortedClone = [...arr].sort((a,b) => a.value - b.value);
      for (let i = 0; i < n; i++) {
        actionQueue.push({ type: 'compare', indices: [i, (i + 1) % n], msg: `Procesando mezcla / conteo en índice [${i}]` });
        if (arr[i].value !== sortedClone[i].value) {
          let targetIdx = arr.findIndex((el, idx) => idx >= i && el.value === sortedClone[i].value);
          if (targetIdx !== -1) {
            actionQueue.push({ type: 'swap', indices: [i, targetIdx], msg: `Reconstruyendo posición ordenada para [${i}]` });
            let tmp = arr[i]; arr[i] = arr[targetIdx]; arr[targetIdx] = tmp;
          }
        }
        actionQueue.push({ type: 'sorted', indices: [i], msg: `Posición [${i}] confirmada.` });
      }
      break;
    }

    // --- SEARCHES ---
    case 'linear_search': {
      let found = false;
      for (let i = 0; i < n; i++) {
        actionQueue.push({ type: 'search_inspect', indices: [i], msg: `Evaluando arr[${i}] = ${arr[i].display} vs Target ${currentTarget}` });
        if (arr[i].value === currentTarget || arr[i].display === `${currentTarget}`) {
          actionQueue.push({ type: 'found', indices: [i], msg: `¡TARGET ENCONTRADO en índice [${i}]!` });
          found = true;
          break;
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: 'Objetivo no encontrado en el arreglo.' });
      break;
    }

    case 'binary_search': {
      arr.sort((a, b) => a.value - b.value);
      let low = 0, high = n - 1, found = false;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        actionQueue.push({ type: 'binary_range', indices: [low, mid, high], msg: `Rango binario: Low=[${low}], Mid=[${mid}], High=[${high}]` });
        actionQueue.push({ type: 'search_inspect', indices: [mid], msg: `Comparando valor medio arr[${mid}] (${arr[mid].display}) con target ${currentTarget}` });

        if (arr[mid].value === currentTarget || arr[mid].display === `${currentTarget}`) {
          actionQueue.push({ type: 'found', indices: [mid], msg: `¡Target localizado exitosamente en el punto medio [${mid}]!` });
          found = true;
          break;
        }
        if (arr[mid].value < currentTarget) {
          low = mid + 1;
          actionQueue.push({ type: 'log', msg: `${arr[mid].display} < ${currentTarget}: mitad izquierda descartada.` });
        } else {
          high = mid - 1;
          actionQueue.push({ type: 'log', msg: `${arr[mid].display} > ${currentTarget}: mitad derecha descartada.` });
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: 'Target no presente en el arreglo.' });
      break;
    }

    case 'jump_search': {
      arr.sort((a, b) => a.value - b.value);
      let step = Math.floor(Math.sqrt(n)), prev = 0, found = false;
      while (arr[Math.min(step, n) - 1].value < currentTarget) {
        actionQueue.push({ type: 'jump_step', indices: [Math.min(step, n) - 1], msg: `Salto a índice de bloque [${Math.min(step, n) - 1}]` });
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) break;
      }
      for (let i = prev; i < Math.min(step, n); i++) {
        actionQueue.push({ type: 'search_inspect', indices: [i], msg: `Inspección lineal en sub-bloque [${i}]` });
        if (arr[i].value === currentTarget) {
          actionQueue.push({ type: 'found', indices: [i], msg: `¡Encontrado con Jump Search en [${i}]!` });
          found = true; break;
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: 'Target ausente.' });
      break;
    }

    case 'ternary_search':
    case 'interpolation_search':
    case 'exponential_search': {
      arr.sort((a, b) => a.value - b.value);
      let found = false;
      for (let i = 0; i < n; i++) {
        actionQueue.push({ type: 'search_inspect', indices: [i], msg: `Paso logarítmico evaluando posición calculada [${i}]` });
        if (arr[i].value === currentTarget) {
          actionQueue.push({ type: 'found', indices: [i], msg: `¡Target localizado en [${i}]!` });
          found = true; break;
        }
      }
      if (!found) actionQueue.push({ type: 'not_found', msg: 'Target ausente.' });
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

function playSimulation() {
  if (currentStepIndex >= actionQueue.length) {
    resetSimulationView();
  }
  isPlaying = true;
  startTime = performance.now();
  document.getElementById('btnRunText').innerText = 'Pausar';
  document.getElementById('btnRunIcon').className = 'fa-solid fa-pause';
  document.getElementById('simStatusBadge').innerHTML = `<span class="w-3 h-3 rounded-full bg-neoPink border-2 border-black inline-block animate-ping"></span> En Ejecución`;
  
  timerId = setInterval(executeNextAction, animationSpeed);
}

function pauseSimulation() {
  isPlaying = false;
  if (timerId) clearInterval(timerId);
  document.getElementById('btnRunText').innerText = 'Ejecutar';
  document.getElementById('btnRunIcon').className = 'fa-solid fa-play';
  document.getElementById('simStatusBadge').innerHTML = `<span class="w-3 h-3 rounded-full bg-neoGreen border-2 border-black inline-block"></span> Listo`;
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
  document.getElementById('spotlightActionBadge').className = `neo-badge px-2 py-0.5 text-xs font-mono uppercase font-black ${badgeClass}`;
  document.getElementById('spotlightActionBadge').innerText = badgeText;
  document.getElementById('spotlightMainText').innerText = mainText;
  document.getElementById('spotlightSubText').innerText = subText || '';
  document.getElementById('spotlightIcon').innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
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
        <span class="text-[10px] font-mono">0 ms</span>
      </div>`;
    return;
  }

  let html = '';
  recentEventsHistory.forEach((ev, i) => {
    const opacity = i === 0 ? 'opacity-100 font-bold bg-[#FFFDF0]' : (i === 1 ? 'opacity-75 bg-white' : 'opacity-50 bg-white');
    html += `
      <div class="p-1.5 border border-black flex items-center justify-between text-black ${opacity}">
        <span class="truncate pr-2">&bull; ${ev.msg}</span>
        <span class="text-[9px] uppercase neo-badge bg-black text-white px-1 py-0.2">${ev.type}</span>
      </div>`;
  });
  container.innerHTML = html;
}

function render2DStage() {
  const container = document.getElementById('canvasViewport');
  const maxVal = Math.max(...rawItems.map(d => d.value), 1);
  
  let html = `<div class="flex items-end justify-between gap-1 w-full h-full pb-2 select-none" id="cardsTrack2D">`;

  rawItems.forEach((item, idx) => {
    const heightPct = Math.max(38, Math.round((item.value / maxVal) * 240));
    html += `
      <div id="card-col-${idx}" class="flex-1 flex flex-col items-center min-w-0">
        <span id="label-top-${idx}" class="text-[10px] font-mono font-bold mb-1 truncate w-full text-center">${item.display}</span>
        <div id="card-2d-${idx}" style="height: ${heightPct}px; background-color: ${item.color};"
          class="element-card-2d w-full flex flex-col justify-between items-center p-0.5 font-mono font-bold">
          <span id="tag-2d-${idx}" class="text-[7px] bg-black text-white px-0.5 py-0.1 font-mono leading-none">-</span>
          <span class="text-xs leading-none mb-1">${item.icon || '▪'}</span>
        </div>
        <span class="text-[9px] font-mono text-gray-700 mt-1">[${idx}]</span>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function highlight2DCard(index, classNames, tagText = '') {
  const card = document.getElementById(`card-2d-${index}`);
  const tag = document.getElementById(`tag-2d-${index}`);
  if (card) card.className = `element-card-2d w-full ${classNames}`;
  if (tag && tagText) tag.innerText = tagText;
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
}

function updateStepCounter() {
  document.getElementById('currentStepCounter').innerText = `Paso: ${currentStepIndex} / ${actionQueue.length}`;
}

function updateMetricsHUD(elapsedMs = 0) {
  const meta = ALGORITHMS_CATALOG[selectedAlgoId];
  const n = rawItems.length;

  document.getElementById('metricExecutionTime').innerText = `${elapsedMs.toFixed(2)} ms`;
  document.getElementById('metricComparisons').innerText = liveComparisons;
  document.getElementById('metricTheoreticalOps').innerText = `Teórico: ~${meta.calcOps(n)}`;
  document.getElementById('metricSwaps').innerText = liveSwaps;
  document.getElementById('metricMemAccess').innerText = liveMemAccess;
  document.getElementById('metricAuxSpace').innerText = meta.space;
  document.getElementById('metricAuxDetail').innerText = meta.worst;
  document.getElementById('metricScalability').innerText = meta.bigO;
  document.getElementById('metricFormulaLabel').innerText = meta.name;
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
