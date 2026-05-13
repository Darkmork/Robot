
import { Problem, Difficulty } from '../../types';

export const listProblems: Problem[] = [
  // Fácil (10 problemas)
  {
    id: 'list-easy-1', topic: 'lists', title: 'Crear y Acceder',
    description: 'Crea una lista con los números 1, 2, 3. Luego, devuelve el segundo elemento.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: '2' }],
    defaultCode: 'def acceder_lista():\n  mi_lista = [1, 2, 3]\n  # Tu código aquí\n  return None',
    datasets: [{input: "", expectedOutput: "2"}],
    authorSignature: "<JGdev/>",
    hint: 'Las listas se crean con corchetes `[]`. Para acceder al segundo elemento, usa el índice `1` (ya que los índices empiezan en 0).'
  },
  {
    id: 'list-easy-2', topic: 'lists', title: 'Longitud de Lista',
    description: 'Dada una lista, devuelve cuántos elementos contiene.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = ['a', 'b', 'c', 'd']", output: '4' }],
    defaultCode: 'def longitud_de_lista(lista):\n  # Tu código aquí\n  return 0',
    datasets: [{input: "[1,2,3,4,5]", expectedOutput: "5"}, {input: "[]", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa la función incorporada `len(lista)`.'
  },
  {
    id: 'list-easy-3', topic: 'lists', title: 'Añadir Elemento al Final',
    description: 'Dada una lista y un elemento, añade el elemento al final de la lista y devuelve la lista modificada.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2], elemento = 3", output: '[1, 2, 3]' }],
    defaultCode: 'def agregar_al_final(lista, elemento):\n  # Tu código aquí\n  return lista',
    datasets: [{input: "['a'], 'b'", expectedOutput: "['a', 'b']"}, {input: "[], 1", expectedOutput: "[1]"}],
    authorSignature: "<JGdev/>",
    hint: 'Las listas tienen un método `.append(elemento)`.'
  },
  {
    id: 'list-easy-4', topic: 'lists', title: 'Último Elemento de Lista',
    description: 'Dada una lista no vacía, devuelve su último elemento.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [10, 20, 30]", output: '30' }],
    defaultCode: 'def ultimo_elemento_lista(lista):\n  # Tu código aquí\n  return None',
    datasets: [{input: "['x', 'y', 'z']", expectedOutput: "'z'"}, {input: "[True]", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: 'Puedes acceder al último elemento usando el índice `-1`, es decir, `lista[-1]`.'
  },
  {
    id: 'list-easy-5', topic: 'lists', title: 'Concatenar Listas',
    description: 'Dadas dos listas, devuelve una nueva lista que sea la concatenación de ambas.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "l1 = [1, 2], l2 = [3, 4]", output: '[1, 2, 3, 4]' }],
    defaultCode: 'def concatenar_listas_simple(lista1, lista2):\n  # Tu código aquí\n  return []',
    datasets: [{input: "['a'], ['b','c']", expectedOutput: "['a', 'b', 'c']"}, {input: "[], [1,2]", expectedOutput: "[1,2]"}],
    authorSignature: "<JGdev/>",
    hint: 'El operador `+` se puede usar para concatenar listas: `lista1 + lista2`.'
  },
  {
    id: 'list-easy-6', topic: 'lists', title: 'Verificar si Elemento Existe',
    description: 'Dada una lista y un elemento, devuelve `True` si el elemento está en la lista, `False` en caso contrario.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2, 3], elemento = 2", output: 'True' }, { input: "lista = [1, 2, 3], elemento = 4", output: 'False'}],
    defaultCode: 'def elemento_en_lista(lista, elemento):\n  # Tu código aquí\n  return False',
    datasets: [{input: "['apple', 'banana'], 'apple'", expectedOutput: "True"}, {input: "[10,20], 30", expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa el operador `in`: `elemento in lista`.'
  },
  {
    id: 'list-easy-7', topic: 'lists', title: 'Eliminar Elemento por Valor (Primera Ocurrencia)',
    description: 'Dada una lista y un valor, elimina la primera ocurrencia de ese valor. Si no existe, la lista no cambia. Devuelve la lista.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2, 3, 2], valor = 2", output: '[1, 3, 2]' }],
    defaultCode: 'def eliminar_valor_lista(lista, valor):\n  # Tu código aquí\n  return lista',
    datasets: [{input: "['a','b','a'], 'a'", expectedOutput: "['b', 'a']"}, {input: "[1,2,3], 4", expectedOutput: "[1,2,3]"}],
    authorSignature: "<JGdev/>",
    hint: 'Las listas tienen un método `.remove(valor)` que hace esto. Recuerda que modifica la lista original.'
  },
  {
    id: 'list-easy-8', topic: 'lists', title: 'Contar Ocurrencias de Elemento',
    description: 'Dada una lista y un elemento, cuenta cuántas veces aparece el elemento en la lista.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2, 2, 3, 2], elemento = 2", output: '3' }],
    defaultCode: 'def contar_ocurrencias_lista(lista, elemento):\n  # Tu código aquí\n  return 0',
    datasets: [{input: "['a','a','b','a'], 'a'", expectedOutput: "3"}, {input: "[1,2,3], 4", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Las listas tienen un método `.count(elemento)`.'
  },
  {
    id: 'list-easy-9', topic: 'lists', title: 'Slicing: Primeros Tres Elementos',
    description: 'Dada una lista, devuelve una nueva lista con sus primeros tres elementos. Si tiene menos de tres, devuelve los que tenga.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2, 3, 4, 5]", output: '[1, 2, 3]' }, { input: "lista = ['a', 'b']", output: "['a', 'b']"}],
    defaultCode: 'def primeros_tres_lista(lista):\n  # Tu código aquí\n  return []',
    datasets: [{input: "[10,20,30,40]", expectedOutput: "[10,20,30]"}, {input: "[1]", expectedOutput: "[1]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa slicing: `lista[:3]`.'
  },
  {
    id: 'list-easy-10', topic: 'lists', title: 'Invertir Lista (Simple)',
    description: 'Dada una lista, devuelve una nueva lista con los elementos en orden inverso (puedes usar slicing o método).',
    difficulty: Difficulty.EASY,
    examples: [{ input: "lista = [1, 2, 3]", output: '[3, 2, 1]' }],
    defaultCode: 'def invertir_lista_simple(lista):\n  # Tu código aquí\n  return []',
    datasets: [{input: "['a','b','c']", expectedOutput: "['c','b','a']"}, {input: "[]", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'El slicing `lista[::-1]` crea una copia invertida. También existe el método `.reverse()` que invierte la lista in-place.'
  },
  // Intermedio (5 problemas)
  {
    id: 'list-int-1', topic: 'lists', title: 'Encontrar Índice de Elemento',
    description: 'Dada una lista y un elemento, devuelve el índice de la primera ocurrencia del elemento. Si no está, devuelve -1.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "lista = ['a', 'b', 'c'], elemento = 'b'", output: '1' }, { input: "lista = [1, 2, 3], elemento = 4", output: '-1'}],
    defaultCode: 'def indice_de_elemento(lista, elemento):\n  # Tu código aquí\n  return -1',
    datasets: [{input: "[10,20,30,20], 20", expectedOutput: "1"}, {input: "['x'], 'y'", expectedOutput: "-1"}, {input: "[], 1", expectedOutput: "-1"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa el método `.index(elemento)`. Envuelve esto en un bloque `try-except ValueError` para manejar el caso en que el elemento no esté y devolver -1.'
  },
  {
    id: 'list-int-2', topic: 'lists', title: 'Ordenar Lista (Ascendente)',
    description: 'Dada una lista de números o cadenas, devuélvela ordenada de forma ascendente.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "lista = [3, 1, 4, 1, 5, 9]", output: '[1, 1, 3, 4, 5, 9]' }],
    defaultCode: 'def ordenar_lista_asc(lista):\n  # Tu código aquí\n  return lista',
    datasets: [{input: "['banana', 'apple', 'cherry']", expectedOutput: "['apple', 'banana', 'cherry']"}, {input: "[5,2,8,1]", expectedOutput: "[1,2,5,8]"}, {input: "[]", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Puedes usar la función `sorted(lista)` que devuelve una nueva lista ordenada, o el método `lista.sort()` que ordena la lista in-place.'
  },
  {
    id: 'list-int-3', topic: 'lists', title: 'Eliminar Elemento por Índice',
    description: 'Dada una lista y un índice, elimina el elemento en ese índice. Si el índice es inválido, no hagas nada. Devuelve la lista.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "lista = [10, 20, 30], indice = 1", output: '[10, 30]' }],
    defaultCode: 'def eliminar_por_indice_lista(lista, indice):\n  # Tu código aquí\n  return lista',
    datasets: [{input: "['a','b','c'], 0", expectedOutput: "['b','c']"}, {input: "[1,2,3], 5", expectedOutput: "[1,2,3]"}, {input: "[1,2,3], -1", expectedOutput: "[1,2]"} ],
    authorSignature: "<JGdev/>",
    hint: 'Verifica si el índice es válido (`0 <= indice < len(lista)` o manejo de índices negativos). Luego usa `del lista[indice]` o `lista.pop(indice)`.'
  },
  {
    id: 'list-int-4', topic: 'lists', title: 'Mapear Lista: Cuadrados',
    description: 'Dada una lista de números, devuelve una nueva lista donde cada número es el cuadrado del original.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "numeros = [1, 2, 3, 4]", output: '[1, 4, 9, 16]' }],
    defaultCode: 'def lista_cuadrados(numeros):\n  nueva_lista = []\n  # Tu código aquí\n  return nueva_lista',
    datasets: [{input: "[0, 5, -2]", expectedOutput: "[0, 25, 4]"}, {input: "[]", expectedOutput: "[]"}, {input: "[10]", expectedOutput: "[100]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa un bucle `for` para iterar sobre la lista de números. Para cada número, calcula su cuadrado (`numero ** 2`) y añádelo a `nueva_lista`.'
  },
  {
    id: 'list-int-5', topic: 'lists', title: 'Filtrar Lista: Mayores que N',
    description: 'Dada una lista de números y un número N, devuelve una nueva lista solo con los elementos mayores que N.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "numeros = [1, 5, 2, 8, 3], n = 3", output: '[5, 8]' }],
    defaultCode: 'def filtrar_mayores_que_n(numeros, n):\n  nueva_lista = []\n  # Tu código aquí\n  return nueva_lista',
    datasets: [{input: "[10,20,5,30], 15", expectedOutput: "[20,30]"}, {input: "[1,2,3], 5", expectedOutput: "[]"}, {input: "[], 0", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre la lista `numeros`. Si un elemento es mayor que `n`, añádelo a `nueva_lista`. Las comprensiones de lista también son una buena opción aquí: `[num for num in numeros if num > n]`.'
  },
  // Difícil (5 problemas)
  {
    id: 'list-hard-1', topic: 'lists', title: 'Rotar Lista K Posiciones',
    description: 'Dada una lista y un entero K, rota la lista K posiciones hacia la derecha. Si K es negativo, rota a la izquierda.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "lista = [1, 2, 3, 4, 5], k = 2", output: '[4, 5, 1, 2, 3]' }, { input: "lista = [1,2,3], k = -1", output: "[2,3,1]" }],
    defaultCode: 'def rotar_lista_k(lista, k):\n  # Tu código aquí\n  return lista',
    datasets: [{input: "[1,2,3,4,5,6], 3", expectedOutput: "[4,5,6,1,2,3]"}, {input: "['a','b','c'], 0", expectedOutput: "['a','b','c']"}, {input: "[10,20], 5", expectedOutput: "[20,10]"}], // 5 % 2 = 1
    authorSignature: "<JGdev/>",
    hint: 'Si la lista está vacía o k es 0, no hagas nada. Normaliza k: `k = k % len(lista)`. Una rotación a la derecha de k elementos es tomar los últimos k elementos y ponerlos al principio. Slicing: `lista[-k:] + lista[:-k]`.'
  },
  {
    id: 'list-hard-2', topic: 'lists', title: 'Producto Cartesiano de Dos Listas Pequeñas',
    description: 'Dadas dos listas A y B, calcula su producto cartesiano (una lista de todos los pares ordenados (a, b) donde a está en A y b está en B).',
    difficulty: Difficulty.HARD,
    examples: [{ input: "A = [1, 2], B = ['x', 'y']", output: "[(1, 'x'), (1, 'y'), (2, 'x'), (2, 'y')]" }],
    defaultCode: 'def producto_cartesiano_listas(lista_a, lista_b):\n  resultado = []\n  # Tu código aquí\n  return resultado',
    datasets: [
        {input: "[0], [1,2]", expectedOutput: "[(0,1), (0,2)]"},
        {input: "['a'], []", expectedOutput: "[]"},
        {input: "[True, False], [1]", expectedOutput: "[(True,1), (False,1)]"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Usa bucles anidados. El bucle exterior itera sobre `lista_a` y el interior sobre `lista_b`. En cada iteración interna, forma una tupla y añádela al resultado.'
  },
  {
    id: 'list-hard-3', topic: 'lists', title: 'Encontrar la Sublista de Suma Máxima (Kadane Simplificado)',
    description: 'Dada una lista de números (puede incluir negativos), encuentra la sublista contigua con la suma más grande. Devuelve la suma. (Versión simplificada de Kadane)',
    difficulty: Difficulty.HARD,
    examples: [{ input: "numeros = [-2, 1, -3, 4, -1, 2, 1, -5, 4]", output: '6 (de [4, -1, 2, 1])' }],
    defaultCode: 'def max_suma_sublista(numeros):\n  if not numeros: return 0\n  max_global = numeros[0]\n  max_actual = numeros[0]\n  # Tu código aquí\n  return max_global',
    datasets: [
        {input: "[1,2,3,4,5]", expectedOutput: "15"},
        {input: "[-1,-2,-3]", expectedOutput: "-1"},
        {input: "[2, -1, 3, -4, 5]", expectedOutput: "5"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Algoritmo de Kadane: itera por la lista manteniendo `max_actual` (la suma máxima de la sublista que termina en la posición actual) y `max_global` (la suma máxima encontrada hasta ahora). `max_actual = max(elemento_actual, max_actual + elemento_actual)`. Actualiza `max_global` si `max_actual` es mayor.'
  },
  {
    id: 'list-hard-4', topic: 'lists', title: 'Intersección de Dos Listas (sin repetidos)',
    description: 'Dadas dos listas, devuelve una nueva lista con los elementos comunes a ambas, sin repetidos.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "l1 = [1, 2, 2, 3, 4], l2 = [2, 3, 3, 5]", output: '[2, 3]' }],
    defaultCode: 'def interseccion_listas_sin_repetir(lista1, lista2):\n  # Tu código aquí\n  return []',
    datasets: [
        {input: "['a','b','c'], ['b','d','a']", expectedOutput: "['a','b'] o ['b','a'] (orden no importa)"},
        {input: "[1,2,3], [4,5,6]", expectedOutput: "[]"},
        {input: "[1,1,1], [1,1]", expectedOutput: "[1]"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Convierte una de las listas (o ambas) a un conjunto (set) para una búsqueda eficiente. Luego itera sobre la otra lista y verifica si cada elemento está en el conjunto. Añade los elementos comunes a una lista resultado (usando otro conjunto para evitar duplicados en el resultado final).'
  },
  {
    id: 'list-hard-5', topic: 'lists', title: 'Generar Todas las Sublistas (Power Set Simplificado)',
    description: 'Dada una lista, genera todas las posibles sublistas (incluyendo la lista vacía y la lista misma). Devuelve una lista de listas.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "lista = [1, 2]", output: '[[], [1], [2], [1, 2]] (el orden puede variar)' }],
    defaultCode: 'def generar_sublistas(lista):\n  resultado = [[]]\n  # Tu código aquí\n  return resultado',
    datasets: [
        {input: "[1]", expectedOutput: "[[], [1]]"},
        {input: "[]", expectedOutput: "[[]]"},
        {input: "['a']", expectedOutput: "[[], ['a']]"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre cada elemento de la lista original. Para cada elemento, itera sobre todas las sublistas encontradas hasta ahora y crea nuevas sublistas añadiendo el elemento actual a cada una de ellas. Añade estas nuevas sublistas al resultado.'
  }
];