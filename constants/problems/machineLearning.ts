
import { Problem, Difficulty } from '../../types';

export const machineLearningProblems: Problem[] = [
  // Fácil (10 problemas)
  {
    id: 'machineLearning-easy-1', topic: 'machineLearning', title: 'Tipos de Aprendizaje',
    description: 'Nombra los dos tipos principales de aprendizaje automático supervisado.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'Clasificación y Regresión'" }],
    defaultCode: `def tipos_aprendizaje_supervisado():
  # Devuelve una cadena con los dos tipos principales
  return "Clasificación y Regresión"`,
    datasets: [{input: "tipos_aprendizaje_supervisado()", expectedOutput: "'Clasificación y Regresión'"}],
    authorSignature: "<JGdev/>",
    hint: "Uno predice categorías discretas, el otro valores continuos."
  },
  {
    id: 'machineLearning-easy-2', topic: 'machineLearning', title: 'Scikit-learn: Importar Modelo',
    description: '¿Cómo importarías el modelo de Regresión Lineal desde `sklearn.linear_model`?',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'from sklearn.linear_model import LinearRegression'" }],
    defaultCode: `def importar_regresion_lineal():
  # Devuelve el string de importación
  return "from sklearn.linear_model import LinearRegression"`,
    datasets: [{input: "importar_regresion_lineal()", expectedOutput: "'from sklearn.linear_model import LinearRegression'"}],
    authorSignature: "<JGdev/>",
    hint: "La estructura es `from modulo.submodulo import Clase`."
  },
  {
    id: 'machineLearning-easy-3', topic: 'machineLearning', title: '¿Qué es "Features"?',
    description: 'En aprendizaje automático, ¿qué son las "features" (características)? Devuelve una breve definición.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'Variables de entrada usadas para hacer predicciones.'" }],
    defaultCode: `def que_son_features():
  return "Variables de entrada o atributos usados por el modelo."`,
    datasets: [{input: "que_son_features().startswith('Variables de entrada')", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Son las columnas de datos que alimentas al modelo."
  },
  {
    id: 'machineLearning-easy-4', topic: 'machineLearning', title: '¿Qué es "Target"?',
    description: 'En aprendizaje supervisado, ¿qué es la variable "target" (objetivo)? Devuelve una breve definición.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'La variable que el modelo intenta predecir.'" }],
    defaultCode: `def que_es_target():
  return "La variable o resultado que el modelo intenta predecir."`,
    datasets: [{input: "que_es_target().endswith('predecir.')", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Es la columna de datos que quieres que el modelo aprenda a estimar."
  },
  {
    id: 'machineLearning-easy-5', topic: 'machineLearning', title: 'Instanciar un Modelo (Scikit-learn)',
    description: 'Dada la clase `LinearRegression` ya importada, ¿cómo crearías una instancia del modelo?',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'modelo = LinearRegression()'" }],
    defaultCode: `# from sklearn.linear_model import LinearRegression
def instanciar_modelo():
  # Devuelve el código como string para crear la instancia
  # modelo = LinearRegression()
  return "modelo = LinearRegression()"`,
    datasets: [{input: "instanciar_modelo()", expectedOutput: "'modelo = LinearRegression()'"}],
    authorSignature: "<JGdev/>",
    hint: "Similar a instanciar cualquier clase en Python: `nombre_variable = NombreClase()`."
  },
  {
    id: 'machineLearning-easy-6', topic: 'machineLearning', title: 'Método `fit`',
    description: 'En Scikit-learn, ¿qué método se usa para entrenar un modelo con datos `X` (features) e `y` (target)?',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'modelo.fit(X, y)'" }],
    defaultCode: `def metodo_fit():
  return "modelo.fit(X, y)"`,
    datasets: [{input: "metodo_fit()", expectedOutput: "'modelo.fit(X, y)'"}],
    authorSignature: "<JGdev/>",
    hint: "Este método 'ajusta' el modelo a los datos de entrenamiento."
  },
  {
    id: 'machineLearning-easy-7', topic: 'machineLearning', title: 'Método `predict`',
    description: 'Una vez entrenado un modelo en Scikit-learn, ¿qué método se usa para hacer predicciones sobre nuevos datos `X_nuevos`?',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'modelo.predict(X_nuevos)'" }],
    defaultCode: `def metodo_predict():
  return "modelo.predict(X_nuevos)"`,
    datasets: [{input: "metodo_predict()", expectedOutput: "'modelo.predict(X_nuevos)'"}],
    authorSignature: "<JGdev/>",
    hint: "Este método usa el modelo entrenado para generar salidas."
  },
  {
    id: 'machineLearning-easy-8', topic: 'machineLearning', title: 'División Train/Test',
    description: '¿Por qué es importante dividir los datos en conjuntos de entrenamiento (train) y prueba (test)? Breve respuesta.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'Para evaluar el rendimiento del modelo en datos no vistos.'" }],
    defaultCode: `def por_que_train_test():
  return "Para evaluar el rendimiento del modelo en datos que no ha visto durante el entrenamiento y evitar el overfitting."`,
    datasets: [{input: "por_que_train_test().count('evaluar') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Ayuda a verificar si el modelo puede generalizar o si solo memorizó los datos de entrenamiento."
  },
  {
    id: 'machineLearning-easy-9', topic: 'machineLearning', title: 'Ejemplo de Clasificación',
    description: 'Dar un ejemplo de un problema de clasificación en machine learning (ej: predecir si un email es spam o no).',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'Detección de spam en correos electrónicos.'" }],
    defaultCode: `def ejemplo_clasificacion():
  return "Determinar si un tumor es benigno o maligno."`,
    datasets: [{input: "ejemplo_clasificacion().count(' ') > 2", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Piensa en problemas donde la salida es una categoría o etiqueta."
  },
  {
    id: 'machineLearning-easy-10', topic: 'machineLearning', title: 'Ejemplo de Regresión',
    description: 'Dar un ejemplo de un problema de regresión en machine learning (ej: predecir el precio de una casa).',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: "'Predecir la temperatura de mañana.'" }],
    defaultCode: `def ejemplo_regresion():
  return "Estimar el precio de una acción en bolsa."`,
    datasets: [{input: "ejemplo_regresion().count(' ') > 2", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Piensa en problemas donde la salida es un valor numérico continuo."
  },

  // Intermedio (5 problemas)
  {
    id: 'machineLearning-int-1', topic: 'machineLearning', title: 'Métrica para Regresión: MSE',
    description: '¿Qué significa MSE (Mean Squared Error) y cómo se interpreta en un problema de regresión? (Breve explicación).',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "N/A", output: "'Error Cuadrático Medio. Mide el promedio de los errores al cuadrado; menor es mejor.'" }],
    defaultCode: `def explicacion_mse():
  return "MSE (Mean Squared Error) es el promedio de las diferencias al cuadrado entre los valores predichos y reales. Un MSE más bajo indica un mejor ajuste del modelo."`,
    datasets: [{input: "explicacion_mse().count('cuadrado') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Considera el impacto de los errores grandes debido al término cuadrático. ¿Es siempre la mejor métrica?"
  },
  {
    id: 'machineLearning-int-2', topic: 'machineLearning', title: 'Métrica para Clasificación: Accuracy',
    description: '¿Qué es el "Accuracy" (Exactitud) en un problema de clasificación y cómo se calcula? (Breve explicación).',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "N/A", output: "'Proporción de predicciones correctas sobre el total. (TP+TN)/(TP+TN+FP+FN).'" }],
    defaultCode: `def explicacion_accuracy():
  return "Accuracy es el porcentaje de predicciones correctas realizadas por el modelo. Se calcula como (Verdaderos Positivos + Verdaderos Negativos) / Total de Muestras."`,
    datasets: [{input: "explicacion_accuracy().count('correctas') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "El Accuracy es intuitivo, pero ¿cuándo podría ser engañoso? (Piensa en clases desbalanceadas)."
  },
  {
    id: 'machineLearning-int-3', topic: 'machineLearning', title: 'K-Means: ¿Supervisado o No Supervisado?',
    description: 'El algoritmo K-Means, ¿es un ejemplo de aprendizaje supervisado o no supervisado? Explica brevemente por qué.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "N/A", output: "'No supervisado, porque agrupa datos sin etiquetas predefinidas.'" }],
    defaultCode: `def kmeans_tipo_aprendizaje():
  return "K-Means es no supervisado porque su objetivo es encontrar estructura (clusters) en datos no etiquetados, sin una variable objetivo predefinida."`,
    datasets: [{input: "kmeans_tipo_aprendizaje().startswith('K-Means es no supervisado')", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "¿K-Means necesita una variable 'target' para funcionar?"
  },
  {
    id: 'machineLearning-int-4', topic: 'machineLearning', title: 'Árbol de Decisión: Concepto',
    description: 'Explica brevemente cómo funciona un Árbol de Decisión para clasificación.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "N/A", output: "'Divide los datos recursivamente basándose en las features para llegar a decisiones en las hojas.'" }],
    defaultCode: `def concepto_arbol_decision():
  return "Un Árbol de Decisión toma decisiones secuenciales basadas en los valores de las características para dividir el conjunto de datos en subconjuntos más puros, hasta llegar a una clasificación en los nodos hoja."`,
    datasets: [{input: "concepto_arbol_decision().count('divide') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Piensa en una serie de preguntas 'if-then-else' sobre las características de los datos."
  },
  {
    id: 'machineLearning-int-5', topic: 'machineLearning', title: 'Sobreajuste (Overfitting)',
    description: '¿Qué es el sobreajuste (overfitting) en machine learning y cuándo suele ocurrir?',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "N/A", output: "'El modelo aprende demasiado bien los datos de entrenamiento, incluyendo el ruido, y generaliza mal a datos nuevos.'" }],
    defaultCode: `def que_es_overfitting():
  return "Overfitting ocurre cuando un modelo se ajusta demasiado a los datos de entrenamiento, capturando ruido y detalles específicos, lo que resulta en un bajo rendimiento en datos no vistos. Suele pasar con modelos muy complejos o pocos datos."`,
    datasets: [{input: "que_es_overfitting().count('entrenamiento') > 0 && que_es_overfitting().count('ruido') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Imagina un estudiante que memoriza las respuestas exactas del examen de práctica pero no entiende los conceptos para un examen nuevo."
  },

  // Difícil (5 problemas)
  {
    id: 'machineLearning-hard-1', topic: 'machineLearning', title: 'Validación Cruzada (Cross-Validation)',
    description: 'Explica el propósito de la Validación Cruzada (Cross-Validation) y cómo funciona una k-Fold Cross-Validation.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: "'Evaluar el modelo de forma más robusta. K-Fold divide los datos en k partes, entrena en k-1 y prueba en la restante, repitiendo k veces.'" }],
    defaultCode: `def explicacion_cross_validation():
  return "La Validación Cruzada se usa para obtener una estimación más fiable del rendimiento del modelo. En k-Fold, los datos se dividen en k subconjuntos (folds); el modelo se entrena k veces, usando k-1 folds para entrenar y el fold restante para probar. El rendimiento final es el promedio."`,
    datasets: [{input: "explicacion_cross_validation().count('k-Fold') > 0 && explicacion_cross_validation().count('promedio') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Ayuda a reducir la varianza en la estimación del rendimiento del modelo comparado con una única división train/test."
  },
  {
    id: 'machineLearning-hard-2', topic: 'machineLearning', title: 'Reducción de Dimensionalidad: PCA',
    description: '¿Cuál es el objetivo principal de PCA (Principal Component Analysis) y cómo ayuda en machine learning?',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: "'Reducir el número de features reteniendo la mayor varianza posible. Ayuda a combatir la maldición de la dimensionalidad y puede mejorar el rendimiento.'" }],
    defaultCode: `def objetivo_pca():
  return "PCA busca transformar un conjunto de datos con muchas variables correlacionadas en un conjunto más pequeño de variables no correlacionadas (componentes principales) que retienen la máxima varianza. Ayuda a reducir la complejidad, visualizar datos y, a veces, mejorar modelos."`,
    datasets: [{input: "objetivo_pca().count('reducir') > 0 && objetivo_pca().count('varianza') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "PCA crea nuevas características (componentes principales) que son combinaciones lineales de las originales."
  },
  {
    id: 'machineLearning-hard-3', topic: 'machineLearning', title: 'SVM: Concepto Básico',
    description: 'Explica brevemente el concepto detrás de las Support Vector Machines (SVM) para clasificación.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: "'Buscan encontrar el hiperplano que mejor separe las clases en el espacio de features, maximizando el margen entre ellas.'" }],
    defaultCode: `def concepto_svm():
  return "Las SVM buscan el hiperplano óptimo que separa las clases de datos con el mayor margen posible. Los puntos de datos más cercanos al hiperplano se llaman vectores de soporte y son cruciales para definirlo."`,
    datasets: [{input: "concepto_svm().count('hiperplano') > 0 && concepto_svm().count('margen') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "Piensa en encontrar la 'calle' más ancha que separe dos grupos de puntos."
  },
  {
    id: 'machineLearning-hard-4', topic: 'machineLearning', title: 'Ensambles: Random Forest',
    description: '¿Qué es un Random Forest y por qué suele ser más robusto que un único Árbol de Decisión?',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: "'Es un ensamble de múltiples árboles de decisión. Reduce el overfitting promediando las predicciones de muchos árboles entrenados con subconjuntos de datos y features.'" }],
    defaultCode: `def que_es_random_forest():
  return "Un Random Forest es un método de ensamble que construye múltiples árboles de decisión durante el entrenamiento y produce la clase que es el modo de las clases (clasificación) o la predicción media (regresión) de los árboles individuales. Es más robusto porque reduce la varianza y el sobreajuste."`,
    datasets: [{input: "que_es_random_forest().count('ensamble') > 0 && que_es_random_forest().count('árboles') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "La 'sabiduría de la multitud' aplicada a los árboles de decisión. La aleatoriedad en la construcción de cada árbol es clave."
  },
  {
    id: 'machineLearning-hard-5', topic: 'machineLearning', title: 'Regularización L1 vs L2',
    description: '¿Cuál es la diferencia principal entre la regularización L1 (Lasso) y L2 (Ridge) en modelos lineales, especialmente en términos de selección de características?',
    difficulty: Difficulty.HARD,
    examples: [{ input: "N/A", output: "'L1 tiende a producir coeficientes dispersos (algunos a cero, haciendo selección de features), L2 reduce los coeficientes pero no los anula.'" }],
    defaultCode: `def l1_vs_l2_regularizacion():
  return "La regularización L1 (Lasso) puede llevar algunos coeficientes de características a cero, realizando selección de características. L2 (Ridge) penaliza los coeficientes grandes, reduciéndolos pero raramente a cero. Ambas ayudan a prevenir el overfitting."`,
    datasets: [{input: "l1_vs_l2_regularizacion().count('cero') > 1 && l1_vs_l2_regularizacion().count('Lasso') > 0", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: "L1 utiliza el valor absoluto de los coeficientes en la penalización, mientras que L2 utiliza el cuadrado de los coeficientes."
  }
];