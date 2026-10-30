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
    span.className = 'badge bg-white text-black border border-black text-[11px] shadow-sm font-bold';
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
    const modal = document.getElementById('bigOModal');
    if (modal && !modal.classList.contains('hidden')) {
      closeBigOModal();
    }
  }
});

/* =========================================================================
   MOTOR DE NARRACIÓN POR VOZ TTS (WEB SPEECH API - JPV PRO)
   ========================================================================= */

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

  if (!currentBigOModalKey) return;
  const data = BIG_O_CATALOG[currentBigOModalKey];
  if (!data || !data.speechText) return;

  const utterance = new SpeechSynthesisUtterance(data.speechText);
  utterance.lang = 'es-ES';
  utterance.rate = 0.98;
  utterance.pitch = 1.0;
  utterance.volume = currentBigOVolume;

  // Búsqueda de voz en español natural
  const voices = synthBigO.getVoices();
  const esVoice = voices.find(v => v.lang.startsWith('es') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Helena') || v.name.includes('Pablo') || v.name.includes('Sabina')));
  if (esVoice) utterance.voice = esVoice;

  utterance.onstart = () => {
    setAudioButtonsState('speaking');
    document.getElementById('bigOStatusText').textContent = `Narrando ${data.name}...`;
  };

  utterance.onend = () => {
    setAudioButtonsState('idle');
  };

  utterance.onerror = () => {
    setAudioButtonsState('idle');
  };

  currentBigOUtterance = utterance;
  synthBigO.speak(utterance);
};

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
      document.getElementById('bigOStatusText').textContent = `Narrando ${BIG_O_CATALOG[currentBigOModalKey].name}...`;
    }
  }
};

window.detenerNarracionBigO = function() {
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
