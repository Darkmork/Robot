
import { Problem, Difficulty } from '../../types';

export const algorithmProblems: Problem[] = [
  // Fácil (10 problemas)
  {
    id: 'algo-easy-1', topic: 'algorithms', title: 'Búsqueda Lineal Simple',
    description: 'Implementa una búsqueda lineal: dada una lista y un valor, devuelve `True` si el valor está en la lista, `False` en caso contrario.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2, 3, 4], valor = 3", output: 'True' }],
    defaultCode: 'def busqueda_lineal_simple(lista, valor):\n  # Tu código aquí\n  return False',
    datasets: [{input: "['a','b','c'], 'c'", expectedOutput: "True"}, {input: "[10,20], 15", expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre cada elemento de la lista. Si encuentras un elemento igual al `valor` buscado, devuelve `True` inmediatamente. Si terminas el bucle sin encontrarlo, devuelve `False`.'
  },
  {
    id: 'algo-easy-2', topic: 'algorithms', title: 'Encontrar Máximo (Algoritmo)',
    description: 'Dada una lista de números no vacía, encuentra el valor máximo sin usar la función `max()` incorporada.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 5, 2, 8, 3]", output: '8' }],
    defaultCode: 'def encontrar_maximo_algo(lista):\n  if not lista: return None # Considerar lista vacía\n  max_valor = lista[0]\n  # Tu código aquí\n  return max_valor',
    datasets: [{input: "[-1,-5,-2]", expectedOutput: "-1"}, {input: "[100]", expectedOutput: "100"}],
    authorSignature: "<JGdev/>",
    hint: 'Asume que el primer elemento es el máximo (`max_valor`). Luego, itera por el resto de la lista. Si encuentras un elemento mayor que `max_valor`, actualiza `max_valor`.'
  },
  {
    id: 'algo-easy-3', topic: 'algorithms', title: 'Suma de Elementos (Algoritmo)',
    description: 'Dada una lista de números, calcula la suma de todos sus elementos usando un enfoque algorítmico (bucle).',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2, 3, 4, 5]", output: '15' }],
    defaultCode: 'def suma_elementos_algo(lista):\n  suma = 0\n  # Tu código aquí\n  return suma',
    datasets: [{input: "[10, -5, 3]", expectedOutput: "8"}, {input: "[]", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Inicializa una variable `suma` a 0. Itera sobre la lista y, en cada paso, añade el elemento actual a `suma`.'
  },
  {
    id: 'algo-easy-4', topic: 'algorithms', title: 'Invertir Cadena (Algoritmo)',
    description: 'Invierte una cadena de texto usando un algoritmo (ej. construyendo una nueva cadena).',
    difficulty: Difficulty.EASY,
    examples: [{ input: "cadena = 'hola'", output: "'aloh'" }],
    defaultCode: 'def invertir_cadena_algo(cadena):\n  invertida = ""\n  # Tu código aquí\n  return invertida',
    datasets: [{input: "'robot'", expectedOutput: "'tobor'"}, {input: "''", expectedOutput: "''"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre la `cadena` original de atrás hacia adelante (o de adelante hacia atrás y concatena al inicio de la cadena `invertida`).'
  },
  {
    id: 'algo-easy-5', topic: 'algorithms', title: 'Verificar si Lista está Ordenada (Ascendente)',
    description: 'Dada una lista de números, verifica si está ordenada de forma ascendente. Devuelve `True` o `False`.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2, 3, 4]", output: 'True' }, { input: "lista = [1, 3, 2]", output: 'False'}],
    defaultCode: 'def lista_esta_ordenada_asc(lista):\n  # Tu código aquí\n  return True # Asume True para listas vacías o de 1 elemento',
    datasets: [{input: "[1,1,2,3]", expectedOutput: "True"}, {input: "[5,4,3]", expectedOutput: "False"}, {input: "[10]", expectedOutput: "True"}, {input: "[]", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre la lista desde el primer elemento hasta el penúltimo. En cada paso `i`, compara `lista[i]` con `lista[i+1]`. Si alguna vez `lista[i] > lista[i+1]`, la lista no está ordenada.'
  },
  {
    id: 'algo-easy-6', topic: 'algorithms', title: 'Calcular Promedio (Algoritmo)',
    description: 'Dada una lista de números, calcula su promedio. Si la lista está vacía, devuelve 0.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "[1, 2, 3]", output: '2.0' }],
    defaultCode: 'def promedio_algo(lista):\n  if not lista: return 0\n  suma = 0\n  # ... Tu código aquí\n  return 0.0',
    datasets: [{input: "[10,20,30,40]", expectedOutput: "25.0"}, {input: "[]", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Calcula la suma de los elementos de la lista (ver problema "Suma de Elementos"). Luego divide la suma por la cantidad de elementos (`len(lista)`). Maneja el caso de lista vacía para evitar división por cero.'
  },
  {
    id: 'algo-easy-7', topic: 'algorithms', title: 'Contador Simple (Algoritmo)',
    description: 'Simula un contador que va de 1 a N. Devuelve N.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N = 5", output: '5' }],
    defaultCode: 'def contador_simple_algo(n):\n  contador_val = 0\n  for i in range(1, n + 1):\n    contador_val = i \n  return contador_val',
    datasets: [{input: "10", expectedOutput: "10"}, {input: "1", expectedOutput: "1"}],
    authorSignature: "<JGdev/>",
    hint: 'Un simple bucle `for` que asigne el valor de iteración a una variable será suficiente. El último valor asignado será `N`.'
  },
  {
    id: 'algo-easy-8', topic: 'algorithms', title: 'Duplicar Elementos de Lista',
    description: 'Dada una lista, crea una nueva lista donde cada elemento de la original aparece dos veces consecutivas.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "[1, 2, 3]", output: '[1, 1, 2, 2, 3, 3]' }],
    defaultCode: 'def duplicar_elementos_lista_algo(lista):\n  nueva_lista = []\n  # Tu código aquí\n  return nueva_lista',
    datasets: [{input: "['a']", expectedOutput: "['a','a']"}, {input: "[]", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre la lista original. Para cada elemento, añádelo dos veces a la `nueva_lista`.'
  },
  {
    id: 'algo-easy-9', topic: 'algorithms', title: 'Mover Ceros al Final (Simple)',
    description: 'Dada una lista de números, mueve todos los ceros al final de la lista, manteniendo el orden relativo de los elementos no nulos.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "[0, 1, 0, 3, 12]", output: '[1, 3, 12, 0, 0]' }],
    defaultCode: 'def mover_ceros_final_simple(lista):\n  # no_ceros = []\n  # ceros_count = 0\n  # ... Tu código aquí ...\n  # return no_ceros + [0] * ceros_count\n  pass',
    datasets: [{input: "[1,0,2,0,0,3]", expectedOutput: "[1,2,3,0,0,0]"}, {input: "[0,0,0]", expectedOutput: "[0,0,0]"}, {input: "[1,2,3]", expectedOutput: "[1,2,3]"}],
    authorSignature: "<JGdev/>",
    hint: 'Crea una nueva lista para los no ceros. Itera sobre la original: si el elemento no es cero, añádelo a la nueva lista. Luego, añade la cantidad correcta de ceros al final de la nueva lista.'
  },
  {
    id: 'algo-easy-10', topic: 'algorithms', title: 'Comprobar Subcadena (Simple)',
    description: 'Dadas dos cadenas, `texto` y `sub`, comprueba si `sub` es una subcadena de `texto`. Devuelve `True` o `False`. (Puedes usar el operador `in`).',
    difficulty: Difficulty.EASY,
    examples: [{ input: "texto='holamundo', sub='mundo'", output: 'True' }, { input: "texto='abc', sub='x'", output: 'False'}],
    defaultCode: 'def es_subcadena_simple(texto, subcadena):\n  # Tu código aquí\n  return False',
    datasets: [{input: "'abcdef', 'cde'", expectedOutput: "True"}, {input: "'test', 'tests'", expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'El operador `in` de Python funciona para verificar si una cadena es subcadena de otra: `subcadena in texto`.'
  },
  // Intermedio (5 problemas)
  {
    id: 'algo-int-1', topic: 'algorithms', title: 'Búsqueda Binaria (Lista Ordenada)',
    description: 'Implementa la búsqueda binaria en una lista ordenada. Devuelve el índice del elemento si se encuentra, o -1 si no.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "lista_ordenada = [2, 5, 7, 8, 11, 12], valor = 7", output: '2' }, { input: "lista_ordenada = [1,2,3], valor = 4", output: '-1'}],
    defaultCode: 'def busqueda_binaria(lista_ordenada, valor):\n  bajo = 0\n  alto = len(lista_ordenada) - 1\n  # ... Tu código aquí ...\n  return -1',
    datasets: [{input: "[1,3,5,7,9], 9", expectedOutput: "4"}, {input: "[10,20,30], 5", expectedOutput: "-1"}, {input: "[1,2,3,4,5], 1", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Mantén punteros `bajo` y `alto`. Mientras `bajo <= alto`, calcula `medio`. Si `lista[medio]` es el valor, devuelves `medio`. Si es menor, ajusta `bajo`. Si es mayor, ajusta `alto`.'
  },
  {
    id: 'algo-int-2', topic: 'algorithms', title: 'Ordenamiento Burbuja (Simple)',
    description: 'Implementa el algoritmo de ordenamiento Burbuja para ordenar una lista de números en forma ascendente.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "lista = [5, 1, 4, 2, 8]", output: '[1, 2, 4, 5, 8]' }],
    defaultCode: 'def ordenamiento_burbuja(lista):\n  n = len(lista)\n  # ... Tu código aquí ...\n  return lista',
    datasets: [{input: "[3,2,1]", expectedOutput: "[1,2,3]"}, {input: "[1,2,3]", expectedOutput: "[1,2,3]"}, {input: "[]", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa bucles anidados. El bucle exterior se repite n-1 veces. El bucle interior compara elementos adyacentes y los intercambia si están en el orden incorrecto, "burbujeando" el elemento más grande hacia el final en cada pasada.'
  },
  {
    id: 'algo-int-3', topic: 'algorithms', title: 'Máximo Común Divisor (Euclides)',
    description: 'Calcula el Máximo Común Divisor (MCD) de dos números enteros positivos usando el algoritmo de Euclides.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "a = 48, b = 18", output: '6' }],
    defaultCode: 'def mcd_euclides(a, b):\n  while b:\n    a, b = b, a % b\n  return a',
    datasets: [{input: "60, 48", expectedOutput: "12"}, {input: "17, 5", expectedOutput: "1"}, {input: "10, 10", expectedOutput: "10"}],
    authorSignature: "<JGdev/>",
    hint: 'El algoritmo de Euclides se basa en la propiedad de que MCD(a, b) = MCD(b, a % b). Repite este proceso hasta que el segundo número sea 0, entonces el MCD es el primer número.'
  },
  {
    id: 'algo-int-4', topic: 'algorithms', title: 'Anagramas (Algoritmo)',
    description: 'Dadas dos cadenas, determina si son anagramas (contienen las mismas letras, misma cantidad, ignorando espacios y mayúsculas/minúsculas).',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "s1 = 'Roma', s2 = 'amor'", output: 'True' }, { input: "s1 = 'Hola', s2 = 'Aloha'", output: 'False'}],
    defaultCode: 'def son_anagramas_algo(cadena1, cadena2):\n  # Procesa cadenas (minúsculas, sin espacios)\n  # Ordena o cuenta caracteres\n  # ... Tu código aquí ...\n  return False',
    datasets: [{input: "'listen', 'silent'", expectedOutput: "True"}, {input: "'Debit card', 'Bad credit'", expectedOutput: "True"}, {input: "'apple', 'apply'", expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'Normaliza ambas cadenas (minúsculas, sin espacios). Una forma es ordenar los caracteres de ambas cadenas normalizadas y comparar si son iguales. Otra es contar la frecuencia de cada carácter en ambas y verificar si las cuentas coinciden.'
  },
  {
    id: 'algo-int-5', topic: 'algorithms', title: 'Encontrar el Elemento Faltante (1 a N)',
    description: 'Te dan una lista de N-1 números únicos en el rango de 1 a N. Encuentra el número que falta.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "lista = [1, 2, 4, 6, 3, 7, 8], N=8", output: '5' }],
    defaultCode: 'def encontrar_faltante_1_a_n(lista, n_total):\n  # suma_esperada = n_total * (n_total + 1) // 2\n  # suma_real = sum(lista)\n  # return suma_esperada - suma_real\n  pass',
    datasets: [{input: "[1,3], 3", expectedOutput: "2"}, {input: "[2,3,4,5], 5", expectedOutput: "1"}, {input: "[1,2,3,4,5,7,8,9,10], 10", expectedOutput: "6"}],
    authorSignature: "<JGdev/>",
    hint: 'Calcula la suma esperada de todos los números de 1 a `n_total` (usando la fórmula `n*(n+1)/2`). Luego, calcula la suma real de los elementos en la `lista`. La diferencia entre estas dos sumas es el número faltante.'
  },
  // Difícil (5 problemas)
  {
    id: 'algo-hard-1', topic: 'algorithms', title: 'Ordenamiento por Selección',
    description: 'Implementa el algoritmo de ordenamiento por Selección para ordenar una lista de números en forma ascendente.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "lista = [64, 25, 12, 22, 11]", output: '[11, 12, 22, 25, 64]' }],
    defaultCode: 'def ordenamiento_seleccion(lista):\n  n = len(lista)\n  for i in range(n):\n    min_idx = i\n    for j in range(i+1, n):\n      if lista[min_idx] > lista[j]:\n        min_idx = j\n    lista[i], lista[min_idx] = lista[min_idx], lista[i]\n  return lista',
    datasets: [{input: "[5,1,9,3,7]", expectedOutput: "[1,3,5,7,9]"}, {input: "[1]", expectedOutput: "[1]"}, {input: "[9,8,7,6]", expectedOutput: "[6,7,8,9]"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera `n-1` veces. En cada iteración `i`, encuentra el índice del elemento mínimo en la sublista no ordenada (desde `i` hasta el final). Intercambia el elemento en `i` con este mínimo encontrado.'
  },
  {
    id: 'algo-hard-2', topic: 'algorithms', title: 'Torres de Hanói (Recursivo Simplificado)',
    description: 'Simula la solución al problema de las Torres de Hanói para N discos. La función debe imprimir los movimientos (ej. "Mover disco X de A a C"). No necesitas devolver una estructura compleja, solo simular las llamadas recursivas e imprimir.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N = 2", output: "Movimientos impresos para 2 discos" }],
    defaultCode: 'def torres_hanoi(n_discos, origen, destino, auxiliar, movimientos_lista=None):\n  if movimientos_lista is None: movimientos_lista = []\n  if n_discos == 1:\n    movimientos_lista.append(f"Mover disco 1 de {origen} a {destino}")\n    return movimientos_lista\n  torres_hanoi(n_discos-1, origen, auxiliar, destino, movimientos_lista)\n  movimientos_lista.append(f"Mover disco {n_discos} de {origen} a {destino}")\n  torres_hanoi(n_discos-1, auxiliar, destino, origen, movimientos_lista)\n  return movimientos_lista',
    datasets: [
        {input: "1, 'A', 'C', 'B'", expectedOutput: "Lista con: ['Mover disco 1 de A a C']"},
        {input: "2, 'A', 'C', 'B'", expectedOutput: "Lista con: ['Mover disco 1 de A a B', 'Mover disco 2 de A a C', 'Mover disco 1 de B a C']"},
    ],
    authorSignature: "<JGdev/>",
    hint: 'El problema tiene una solución recursiva clásica: 1. Mueve N-1 discos de Origen a Auxiliar (usando Destino como temporal). 2. Mueve el disco N de Origen a Destino. 3. Mueve N-1 discos de Auxiliar a Destino (usando Origen como temporal). El caso base es N=1.'
  },
  {
    id: 'algo-hard-3', topic: 'algorithms', title: 'Problema de la Mochila (0/1 - Simplificado, Dinámico Básico)',
    description: 'Dados N ítems, cada uno con un peso y un valor, y una mochila con capacidad máxima W, encuentra el valor máximo que se puede llevar. (Versión simplificada, podrías usar un enfoque de DP con una tabla pequeña para pocos ítems).',
    difficulty: Difficulty.HARD,
    examples: [{ input: "valores=[60,100,120], pesos=[10,20,30], W=50", output: '220 (ítems 2 y 3)' }],
    defaultCode: 'def mochila_01_simple(valores, pesos, capacidad_max):\n  n = len(valores)\n  # dp[i][w] almacenará el valor máximo usando los primeros i ítems con capacidad w\n  dp = [[0 for _ in range(capacidad_max + 1)] for _ in range(n + 1)]\n  # ... lógica de Programación Dinámica ...\n  return dp[n][capacidad_max]',
    datasets: [
        {input: "[10,40,30,50], [5,4,6,3], 10", expectedOutput: "90"},
        {input: "[1,2,3], [4,5,1], 4", expectedOutput: "3"},
        {input: "[1,2,3], [4,5,6], 3", expectedOutput: "0"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Usa programación dinámica. Crea una tabla `dp[i][w]` donde `i` es el ítem y `w` es la capacidad. Para cada ítem `i` y capacidad `w`: si `pesos[i-1] <= w`, `dp[i][w] = max(valores[i-1] + dp[i-1][w-pesos[i-1]], dp[i-1][w])`. Sino, `dp[i][w] = dp[i-1][w]`.'
  },
  {
    id: 'algo-hard-4', topic: 'algorithms', title: 'Merge Sort (Simplificado)',
    description: 'Implementa el algoritmo Merge Sort para ordenar una lista. Debes implementar la función de merge también.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "[38, 27, 43, 3, 9, 82, 10]", output: '[3, 9, 10, 27, 38, 43, 82]' }],
    defaultCode: 'def merge_sort(lista):\n  if len(lista) <= 1:\n    return lista\n  \n  mid = len(lista) // 2\n  L = lista[:mid]\n  R = lista[mid:]\n  \n  merge_sort(L)\n  merge_sort(R)\n  \n  # Lógica de merge (i,j,k)\n  i = j = k = 0\n  while i < len(L) and j < len(R):\n    if L[i] < R[j]:\n      lista[k] = L[i]\n      i += 1\n    else:\n      lista[k] = R[j]\n      j += 1\n    k += 1\n  \n  while i < len(L):\n    lista[k] = L[i]\n    i += 1\n    k += 1\n  \n  while j < len(R):\n    lista[k] = R[j]\n    j += 1\n    k += 1\n  return lista',
    datasets: [
        {input: "[5,2,4,7,1,3,2,6]", expectedOutput: "[1,2,2,3,4,5,6,7]"},
        {input: "[1]", expectedOutput: "[1]"},
        {input: "[]", expectedOutput: "[]"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Merge Sort es un algoritmo de "divide y vencerás". Divide la lista recursivamente hasta tener sublistas de 1 elemento. Luego, fusiona (merge) estas sublistas ordenadamente.'
  },
  {
    id: 'algo-hard-5', topic: 'algorithms', title: 'Validar Paréntesis Balanceados (Pilas)',
    description: "Dada una cadena con solo '(', ')', '{', '}', '[' y ']', determina si los paréntesis están balanceados. Ej: '(){}[]' es válido, '([)]' no.",
    difficulty: Difficulty.HARD,
    examples: [{ input: "'{[()]}'", output: 'True' }, { input: "'{[(])}'", output: 'False' }, { input: "'{{{'", output: 'False'} ],
    defaultCode: 'def parentesis_balanceados(cadena):\n  pila = []\n  mapa_parentesis = {")": "(", "}": "{", "]": "["}\n  # ... Tu código aquí ...\n  return not pila',
    datasets: [
        {input: "()", expectedOutput: "True"},
        {input: "())", expectedOutput: "False"},
        {input: "[[[]]]", expectedOutput: "True"},
        {input: "", expectedOutput: "True"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Usa una pila (stack). Itera sobre la cadena. Si encuentras un paréntesis de apertura, añádelo a la pila. Si es de cierre, verifica si la pila está vacía o si el tope de la pila no es el correspondiente de apertura. Al final, la pila debe estar vacía.'
  }
];