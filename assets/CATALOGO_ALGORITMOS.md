# 📚 Catálogo Visual de Algoritmos de Ordenamiento y Búsqueda (.GIF)

Este directorio contiene las representaciones animadas oficiales (.gif) de los algoritmos de ordenamiento y búsqueda más importantes de la ciencia de la computación, listos para su integración en prácticas de laboratorio, simuladores y visualizaciones en PSeInt / Web.

---

## 🔀 1. Algoritmos de Ordenamiento (Sorting Algorithms)

| # | Algoritmo | Archivo Español | Archivo Internacional | Complejidad Promedio | Descripción Visual |
|---|---|---|---|---|---|
| 1 | **Burbuja (Bubble Sort)** | `ordenamiento_burbuja.gif` | `bubble_sort.gif` | $O(n^2)$ | Intercambios adyacentes hasta que el elemento mayor sube como una burbuja. |
| 2 | **Selección (Selection Sort)** | `ordenamiento_seleccion.gif` | `selection_sort.gif` | $O(n^2)$ | Búsqueda iterativa del mínimo para ubicarlo en la posición inicial ordenada. |
| 3 | **Inserción (Insertion Sort)** | `ordenamiento_insercion.gif` | `insertion_sort.gif` | $O(n^2)$ | Inserción secuencial en la sub-lista ordenada izquierda (como ordenar barajas). |
| 4 | **Mezcla (Merge Sort)** | `ordenamiento_mezcla_merge_sort.gif` | `merge_sort.gif` | $O(n \log n)$ | Divide y vencerás: división recursiva y posterior fusión ordenada. |
| 5 | **Rápido (Quick Sort)** | `ordenamiento_rapido_quicksort.gif` | `quick_sort.gif` | $O(n \log n)$ | Partición basada en pivote y particionamiento en sub-arreglos menores y mayores. |
| 6 | **Montículo (Heap Sort)** | `ordenamiento_monticulo_heapsort.gif` | `heap_sort.gif` | $O(n \log n)$ | Construcción de un árbol montículo máximo y extracción sucesiva de la raíz. |
| 7 | **Shell Sort** | `ordenamiento_shell_sort.gif` | `shell_sort.gif` | $O(n \log^2 n)$ | Inserción con incrementos decrecientes (gaps) para mover elementos distantes. |
| 8 | **Conteo (Counting Sort)** | `ordenamiento_conteo_counting_sort.gif` | `counting_sort.gif` | $O(n + k)$ | Conteo de frecuencias y mapeo aritmético de posiciones (no comparativo). |
| 9 | **Radix Sort** | `ordenamiento_radix_sort.gif` | `radix_sort.gif` | $O(nk)$ | Procesamiento posicional dígito por dígito de menor a mayor peso. |
| 10 | **Cóctel / Shaker (Cocktail Sort)** | `ordenamiento_coctel_cocktail_sort.gif` | `cocktail_sort.gif` | $O(n^2)$ | Burbuja bidireccional que recorre el arreglo alternando izquierda y derecha. |
| 11 | **Peine (Comb Sort)** | `ordenamiento_peine_comb_sort.gif` | `comb_sort.gif` | $O(n^2 / 2^p)$ | Variación rápida de la burbuja usando factor de reducción gap (1.3). |
| 12 | **Gnomo (Gnome Sort)** | `ordenamiento_gnomo_gnome_sort.gif` | `gnome_sort.gif` | $O(n^2)$ | Avance y retroceso paso a paso intercambiando posiciones incorrectas. |
| 13 | **Par-Impar (Odd-Even Sort)** | `ordenamiento_par_impar_odd_even_sort.gif` | `odd_even_sort.gif` | $O(n^2)$ | Fases alternadas de comparación entre índices pares e impares contiguos. |
| 14 | **Bogo Sort** | `ordenamiento_bogo_sort.gif` | `bogo_sort.gif` | $O((n+1)!)$ | Algoritmo estocástico/aleatorio (permutación al azar hasta estar ordenado). |
| 15 | **Stooge Sort** | `ordenamiento_stooge_sort.gif` | `stooge_sort.gif` | $O(n^{2.71})$ | Algoritmo recursivo que ordena los dos primeros tercios, los dos últimos y repite. |

---

## 🔍 2. Algoritmos de Búsqueda (Search Algorithms)

| # | Algoritmo | Archivo Español | Archivo Internacional | Complejidad Promedio | Descripción Visual |
|---|---|---|---|---|---|
| 1 | **Búsqueda Lineal / Secuencial** | `busqueda_lineal.gif` | `linear_search.gif` | $O(n)$ | Recorrido elemento a elemento de izquierda a derecha. |
| 2 | **Búsqueda Binaria** | `busqueda_binaria.gif` | `binary_search.gif` | $O(\log n)$ | Bisección continua del espacio de búsqueda en arreglo ordenado. |
| 3 | **Búsqueda en Anchura (BFS)** | `busqueda_en_anchura_bfs.gif` | `bfs_search.gif` | $O(V + E)$ | Exploración nivel por nivel usando cola (FIFO) en árbol/grafo. |
| 4 | **Búsqueda en Profundidad (DFS)** | `busqueda_en_profundidad_dfs.gif` | `dfs_search.gif` | $O(V + E)$ | Exploración de ramas hasta hojas máximas usando pila (LIFO) / recursión. |
| 5 | **Búsqueda en Grafo** | `busqueda_en_grafo.gif` | `graph_search.gif` | $O(V + E)$ | Recorrido visual de nodos y aristas de un grafo interconectado. |
| 6 | **Búsqueda en Haz (Beam Search)** | `busqueda_en_haz_beam_search.gif` | `beam_search.gif` | Heurístico | Mantiene un conjunto limitado ($k$) de los mejores nodos evaluados. |
| 7 | **Búsqueda con Backtracking (Sudoku)** | `busqueda_backtracking_sudoku.gif` | `backtracking_search.gif` | Exponencial | Prueba y retroceso sistemático ante violaciones de restricciones. |
| 8 | **Camino Mínimo Dijkstra** | `busqueda_camino_minimo_dijkstra.gif` | `dijkstra_search.gif` | $O((V+E) \log V)$ | Determinación de la ruta más corta desde un nodo origen a los demás. |
| 9 | **Búsqueda A* (A-Star)** | `busqueda_camino_a_estrella_astar.gif` | `astar_search.gif` | $O(b^d)$ | Búsqueda informada $f(n) = g(n) + h(n)$ orientada hacia el objetivo. |
| 10 | **Vecino Más Cercano (Nearest Neighbor)** | `busqueda_vecino_mas_cercano.gif` | `nearest_neighbor_search.gif` | $O(n^2)$ | Heurística voraz para problemas de ruteo y agrupamiento en el plano. |
