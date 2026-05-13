
import { Problem, Difficulty } from '../../types';

export const dataScienceProblems: Problem[] = [
  // Fácil (10 problemas) - Pandas
  {
    id: 'dataScience-easy-1', topic: 'dataScience', title: 'Crear Serie Pandas',
    description: 'Crea una Serie de Pandas a partir de la lista `[10, 20, 30]` con índices `["a", "b", "c"]`. Devuelve el valor en el índice "b".',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: '20' }],
    defaultCode: 'import pandas as pd\n\ndef crear_y_acceder_serie():\n  datos = [10, 20, 30]\n  indices = ["a", "b", "c"]\n  # Tu código aquí para crear la Serie y obtener el valor\n  serie = pd.Series(datos, index=indices)\n  return serie["b"]',
    datasets: [{input: "crear_y_acceder_serie()", expectedOutput: "20"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa `pd.Series(data=lista_datos, index=lista_indices)`. Luego accede al elemento con `serie["indice"]`.'
  },
  {
    id: 'dataScience-easy-2', topic: 'dataScience', title: 'Crear DataFrame Pandas',
    description: 'Crea un DataFrame de Pandas a partir del diccionario `{"col1": [1, 2], "col2": [3, 4]}`. Devuelve la columna "col1".',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: 'Serie con [1, 2] y nombre "col1".' }],
    defaultCode: 'import pandas as pd\n\ndef crear_y_acceder_df():\n  datos_dict = {"col1": [1, 2], "col2": [3, 4]}\n  # Tu código aquí\n  df = pd.DataFrame(datos_dict)\n  return df["col1"]\n\n# resultado_serie = crear_y_acceder_df()\n# print(resultado_serie.tolist()) # Para validación sencilla',
    datasets: [{input: "crear_y_acceder_df().tolist()", expectedOutput: "[1, 2]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa `pd.DataFrame(diccionario_datos)`. Para acceder a una columna: `df["nombre_columna"]`.'
  },
  {
    id: 'dataScience-easy-3', topic: 'dataScience', title: 'Seleccionar Fila con `loc`',
    description: 'Dado un DataFrame (creado con `{"A":[1,2,3], "B":[4,5,6]}` e índices `[0,1,2]`), selecciona la fila con índice 1 usando `loc`. Devuelve el valor de la columna "A" de esa fila.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: '2' }],
    defaultCode: 'import pandas as pd\n\ndef seleccionar_fila_loc():\n  df = pd.DataFrame({"A":[1,2,3], "B":[4,5,6]}, index=[0,1,2])\n  # Tu código aquí\n  return df.loc[1, "A"]',
    datasets: [{input: "seleccionar_fila_loc()", expectedOutput: "2"}],
    authorSignature: "<JGdev/>",
    hint: '`df.loc[etiqueta_fila]` selecciona una fila. Para un valor específico: `df.loc[etiqueta_fila, etiqueta_columna]`.'
  },
  // Fácil - NumPy
  {
    id: 'dataScience-easy-4', topic: 'dataScience', title: 'Crear Array NumPy',
    description: 'Crea un array de NumPy a partir de la lista `[1, 2, 3, 4, 5]`. Devuelve el array.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: 'array([1, 2, 3, 4, 5])' }],
    defaultCode: 'import numpy as np\n\ndef crear_array_np():\n  lista = [1, 2, 3, 4, 5]\n  # Tu código aquí\n  arr = np.array(lista)\n  return arr\n\n# print(crear_array_np())',
    datasets: [{input: "crear_array_np().tolist()", expectedOutput: "[1, 2, 3, 4, 5]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa `np.array(lista_python)`.'
  },
  {
    id: 'dataScience-easy-5', topic: 'dataScience', title: 'Operación Básica NumPy',
    description: 'Dado un array de NumPy `a = np.array([1, 2, 3])`, calcula `a * 2`. Devuelve el resultado.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: 'array([2, 4, 6])' }],
    defaultCode: 'import numpy as np\n\ndef operacion_np():\n  a = np.array([1, 2, 3])\n  # Tu código aquí\n  resultado = a * 2\n  return resultado\n\n# print(operacion_np())',
    datasets: [{input: "operacion_np().tolist()", expectedOutput: "[2, 4, 6]"}],
    authorSignature: "<JGdev/>",
    hint: 'Las operaciones aritméticas en arrays NumPy se aplican elemento a elemento. Simplemente `array * escalar`.'
  },
  {
    id: 'dataScience-easy-6', topic: 'dataScience', title: 'Crear Array de Ceros NumPy',
    description: 'Crea un array de NumPy de 5 ceros. Devuelve el array.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: 'array([0., 0., 0., 0., 0.])' }],
    defaultCode: 'import numpy as np\n\ndef array_de_ceros():\n  # Tu código aquí\n  arr_ceros = np.zeros(5)\n  return arr_ceros\n\n# print(array_de_ceros())',
    datasets: [{input: "array_de_ceros().tolist()", expectedOutput: "[0.0, 0.0, 0.0, 0.0, 0.0]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa la función `np.zeros(tamaño)`.'
  },
  // Fácil - Matplotlib (conceptual)
  {
    id: 'dataScience-easy-7', topic: 'dataScience', title: 'Tipo de Gráfico para Comparar',
    description: '¿Qué tipo de gráfico de Matplotlib usarías principalmente para comparar cantidades entre diferentes categorías? (Ej: ventas por producto). Devuelve el nombre del gráfico.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'bar' o 'barplot' o 'gráfico de barras'" }],
    defaultCode: 'def tipo_grafico_comparacion():\n  # Devuelve el nombre del tipo de gráfico\n  return "gráfico de barras"',
    datasets: [{input: "tipo_grafico_comparacion().lower()", expectedOutput: "'gráfico de barras'"}],
    authorSignature: "<JGdev/>",
    hint: 'Piensa en cómo se representan visualmente las comparaciones categóricas. Las barras son una opción común.'
  },
  {
    id: 'dataScience-easy-8', topic: 'dataScience', title: 'Importar Matplotlib Pyplot',
    description: '¿Cuál es el alias común al importar `matplotlib.pyplot`? Devuelve el alias como string.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'plt'" }],
    defaultCode: 'def alias_matplotlib_pyplot():\n  # Devuelve el alias común\n  return "plt"',
    datasets: [{input: "alias_matplotlib_pyplot()", expectedOutput: "'plt'"}],
    authorSignature: "<JGdev/>",
    hint: 'La convención es `import matplotlib.pyplot as alias`.'
  },
  {
    id: 'dataScience-easy-9', topic: 'dataScience', title: 'Función para Mostrar Gráfico',
    description: '¿Qué función de `matplotlib.pyplot` (usando el alias `plt`) se usa para mostrar el gráfico una vez configurado?',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'plt.show()'" }],
    defaultCode: 'def funcion_mostrar_grafico():\n  # Devuelve la función como string\n  return "plt.show()"',
    datasets: [{input: "funcion_mostrar_grafico()", expectedOutput: "'plt.show()'"}],
    authorSignature: "<JGdev/>",
    hint: 'Después de crear y configurar tu gráfico, necesitas una función para que aparezca en pantalla.'
  },
  {
    id: 'dataScience-easy-10', topic: 'dataScience', title: 'Inspeccionar Primeras Filas DataFrame',
    description: '¿Qué método de DataFrame Pandas usarías para ver las primeras 5 filas? Devuelve el nombre del método (string).',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'head()'" }],
    defaultCode: 'def metodo_primeras_filas():\n  return "head()"',
    datasets: [{input: "metodo_primeras_filas()", expectedOutput: "'head()'"}],
    authorSignature: "<JGdev/>",
    hint: 'Este método es muy común para una vista rápida del inicio de tus datos.'
  },

  // Intermedio (5 problemas) - Pandas
  {
    id: 'dataScience-int-1', topic: 'dataScience', title: 'Filtrar Filas DataFrame Pandas',
    description: 'Dado un DataFrame con columnas "Nombre" (string) y "Edad" (int), filtra y devuelve las filas donde "Edad" sea mayor a 30.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "df = pd.DataFrame({'Nombre':['Ana','Luis','Eva'],'Edad':[25,35,40]})", output: 'DataFrame con Luis y Eva.' }],
    defaultCode: 'import pandas as pd\n\ndef filtrar_df_edad(df_entrada):\n  # df_entrada es un DataFrame con columnas "Nombre" y "Edad"\n  # Tu código aquí\n  filtrado = df_entrada[df_entrada["Edad"] > 30]\n  return filtrado\n\n# df_test = pd.DataFrame({"Nombre":["A","B","C"], "Edad":[20,40,33]})\n# print(filtrar_df_edad(df_test).to_dict())',
    datasets: [
      {input: "pd.DataFrame({'Nombre':['X','Y','Z'],'Edad':[22,33,44]})", expectedOutput: "{'Nombre': {1: 'Y', 2: 'Z'}, 'Edad': {1: 33, 2: 44}}"},
      {input: "pd.DataFrame({'Nombre':['K'],'Edad':[25]})", expectedOutput: "{'Nombre': {}, 'Edad': {}}"},
      {input: "pd.DataFrame({'Nombre':[],'Edad':[]}, dtype=object)", expectedOutput: "{'Nombre': {}, 'Edad': {}}"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Usa indexación booleana: `df[df["columna"] condicion]`. Por ejemplo, `df[df["Edad"] > 30]`.'
  },
  {
    id: 'dataScience-int-2', topic: 'dataScience', title: 'Agrupar y Calcular Media (Pandas)',
    description: 'Dado un DataFrame con "Categoria" (string) y "Valor" (int), agrupa por "Categoria" y calcula la media de "Valor" para cada categoría. Devuelve la Serie resultante.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "df = pd.DataFrame({'Categoria':['A','B','A','B'],'Valor':[10,20,12,22]})", output: 'Serie con A:11, B:21.' }],
    defaultCode: 'import pandas as pd\n\ndef agrupar_y_media(df_entrada):\n  # df_entrada con "Categoria" y "Valor"\n  # Tu código aquí\n  media_agrupada = df_entrada.groupby("Categoria")["Valor"].mean()\n  return media_agrupada\n\n# df_t = pd.DataFrame({"Categoria":["X","Y","X"],"Valor":[1,5,3]})\n# print(agrupar_y_media(df_t).to_dict())',
    datasets: [
      {input: "pd.DataFrame({'Categoria':['Fruta','Verdura','Fruta'],'Valor':[100,150,110]})", expectedOutput: "{'Fruta': 105.0, 'Verdura': 150.0}"},
      {input: "pd.DataFrame({'Categoria':['A'],'Valor':[10]})", expectedOutput: "{'A': 10.0}"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Usa el método `.groupby("columna_a_agrupar")` seguido de la selección de la columna a agregar y el método de agregación, como `.mean()`.'
  },
  // Intermedio - NumPy
  {
    id: 'dataScience-int-3', topic: 'dataScience', title: 'Crear Matriz Identidad NumPy',
    description: 'Crea una matriz identidad de NumPy de tamaño 3x3. Devuelve la matriz.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "N/A", output: 'array([[1.,0.,0.],[0.,1.,0.],[0.,0.,1.]])' }],
    defaultCode: 'import numpy as np\n\ndef matriz_identidad_np():\n  # Tu código aquí\n  identidad = np.eye(3)\n  return identidad\n\n# print(matriz_identidad_np().tolist())',
    datasets: [{input: "matriz_identidad_np().tolist()", expectedOutput: "[[1.0,0.0,0.0],[0.0,1.0,0.0],[0.0,0.0,1.0]]"}],
    authorSignature: "<JGdev/>",
    hint: 'NumPy tiene una función para esto: `np.eye(N)` crea una matriz identidad N x N.'
  },
  // Intermedio - Matplotlib (conceptual)
  {
    id: 'dataScience-int-4', topic: 'dataScience', title: 'Gráfico para Tendencia Temporal',
    description: 'Si tienes datos de ventas mensuales durante un año, ¿qué tipo de gráfico de Matplotlib es más adecuado para visualizar la tendencia temporal? Devuelve el nombre.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "N/A", output: "'plot' o 'line plot' o 'gráfico de líneas'" }],
    defaultCode: 'def grafico_tendencia_temporal():\n  return "gráfico de líneas"',
    datasets: [{input: "grafico_tendencia_temporal().lower()", expectedOutput: "'gráfico de líneas'"}],
    authorSignature: "<JGdev/>",
    hint: 'Para mostrar cómo una variable cambia a lo largo del tiempo, un tipo de gráfico específico es el más común.'
  },
  {
    id: 'dataScience-int-5', topic: 'dataScience', title: 'Añadir Título a Gráfico Matplotlib',
    description: '¿Qué función de `plt` (matplotlib.pyplot) usarías para añadir un título a un gráfico? Devuelve la función como string con un ejemplo de título.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "N/A", output: "'plt.title(\"Mi Gráfico\")'" }],
    defaultCode: 'def funcion_titulo_grafico():\n  return "plt.title(\\"Título de Ejemplo\\")"',
    datasets: [{input: "funcion_titulo_grafico()", expectedOutput: "'plt.title(\"Título de Ejemplo\")'"}],
    authorSignature: "<JGdev/>",
    hint: 'La función es bastante descriptiva: `plt.nombre_de_la_funcion("Texto del título")`.'
  },

  // Difícil (5 problemas) - Pandas
  {
    id: 'dataScience-hard-1', topic: 'dataScience', title: 'Combinar DataFrames (Merge Pandas)',
    description: 'Dados dos DataFrames, `df1` (con columnas "ID", "Nombre") y `df2` (con "ID", "Salario"), combínalos usando la columna "ID" (inner merge). Devuelve el DataFrame resultante.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "df1=pd.DataFrame({'ID':[1,2],'Nombre':['A','B']}), df2=pd.DataFrame({'ID':[1,3],'Salario':[50,60]})", output: 'DataFrame con ID 1, Nombre A, Salario 50.' }],
    defaultCode: 'import pandas as pd\n\ndef merge_dataframes(df_a, df_b):\n  # df_a tiene "ID", "Nombre"\n  # df_b tiene "ID", "Salario"\n  # Tu código aquí\n  merged_df = pd.merge(df_a, df_b, on="ID", how="inner")\n  return merged_df\n\n# d1=pd.DataFrame({"ID":[1,2,3],"Nombre":["X","Y","Z"]})\n# d2=pd.DataFrame({"ID":[1,2,4],"Salario":[100,200,300]})\n# print(merge_dataframes(d1,d2).to_dict("records"))',
    datasets: [
      {input: "[pd.DataFrame({'ID':[1,2],'Nombre':['A','B']}), pd.DataFrame({'ID':[1,3],'Salario':[500,600]})]", expectedOutput: "[{'ID': 1, 'Nombre': 'A', 'Salario': 500}]"},
      {input: "[pd.DataFrame({'ID':[1],'Nombre':['X']}), pd.DataFrame({'ID':[2],'Salario':[100]})]", expectedOutput: "[]"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Usa `pd.merge(df_izquierdo, df_derecho, on="columna_comun", how="tipo_de_merge")`.'
  },
  // Difícil - NumPy
  {
    id: 'dataScience-hard-2', topic: 'dataScience', title: 'Producto Punto de Vectores NumPy',
    description: 'Calcula el producto punto de dos vectores NumPy `v1 = np.array([1, 2, 3])` y `v2 = np.array([4, 5, 6])`. Devuelve el escalar resultante.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: '32 (1*4 + 2*5 + 3*6)' }],
    defaultCode: 'import numpy as np\n\ndef producto_punto_np():\n  v1 = np.array([1, 2, 3])\n  v2 = np.array([4, 5, 6])\n  # Tu código aquí\n  resultado = np.dot(v1, v2)\n  return resultado',
    datasets: [{input: "producto_punto_np()", expectedOutput: "32"}],
    authorSignature: "<JGdev/>",
    hint: 'NumPy ofrece varias formas: `np.dot(v1, v2)`, `v1.dot(v2)` o `v1 @ v2`.'
  },
  // Difícil - Matplotlib (conceptual/descriptivo)
  {
    id: 'dataScience-hard-3', topic: 'dataScience', title: 'Crear Scatter Plot (Matplotlib)',
    description: 'Describe los pasos básicos para crear un scatter plot (gráfico de dispersión) con Matplotlib para dos variables `x` e `y`. El output debe ser una cadena descriptiva.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: 'Importar plt, llamar plt.scatter(x,y), plt.xlabel(), plt.ylabel(), plt.title(), plt.show().' }],
    defaultCode: 'def describir_scatter_plot():\n  # Devuelve una descripción de los pasos\n  return "1. import matplotlib.pyplot as plt. 2. Preparar datos x, y. 3. plt.scatter(x, y). 4. Opcional: plt.xlabel(), plt.ylabel(), plt.title(). 5. plt.show()."',
    datasets: [{input: "describir_scatter_plot()", expectedOutput: "'1. import matplotlib.pyplot as plt. 2. Preparar datos x, y. 3. plt.scatter(x, y). 4. Opcional: plt.xlabel(), plt.ylabel(), plt.title(). 5. plt.show().'"}],
    authorSignature: "<JGdev/>",
    hint: 'Piensa en la secuencia: importar la librería, tener los datos, usar la función de scatter plot, etiquetar y titular, y finalmente mostrarlo.'
  },
  {
    id: 'dataScience-hard-4', topic: 'dataScience', title: 'Manejo de NaN en Pandas',
    description: 'Dado un DataFrame con valores NaN, ¿cómo reemplazarías todos los NaN en una columna "Edad" con la media de esa columna? Describe el método de Pandas.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: "df['Edad'].fillna(df['Edad'].mean(), inplace=True)" }],
    defaultCode: 'def manejo_nan_pandas():\n  # Devuelve el fragmento de código como string\n  return "df[\'Columna\'].fillna(df[\'Columna\'].mean(), inplace=True)"',
    datasets: [{input: "manejo_nan_pandas()", expectedOutput: "'df[\'Columna\'].fillna(df[\'Columna\'].mean(), inplace=True)'"}],
    authorSignature: "<JGdev/>",
    hint: 'Selecciona la columna, luego usa el método `.fillna()` con el valor de reemplazo (que sería la media de la columna, `df["Columna"].mean()`). Considera `inplace=True` si quieres modificar el DataFrame directamente.'
  },
  {
    id: 'dataScience-hard-5', topic: 'dataScience', title: 'Reshape Array NumPy',
    description: 'Dado un array NumPy `arr = np.arange(12)`, cómo lo remodelarías (reshape) a una matriz de 3x4? Devuelve la matriz resultante.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: "array([[0,1,2,3],[4,5,6,7],[8,9,10,11]])" }],
    defaultCode: 'import numpy as np\n\ndef reshape_array_np():\n  arr = np.arange(12)\n  # Tu código aquí\n  reshaped_arr = arr.reshape(3, 4)\n  return reshaped_arr\n\n# print(reshape_array_np().tolist())',
    datasets: [{input: "reshape_array_np().tolist()", expectedOutput: "[[0,1,2,3],[4,5,6,7],[8,9,10,11]]"}],
    authorSignature: "<JGdev/>",
    hint: 'Los arrays de NumPy tienen un método `.reshape(nuevas_dimensiones)`.'
  }
];