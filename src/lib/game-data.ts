export type Question = {
  question: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
};

export const waterSavingQuestions: Question[] = [
  {
    question: '¿Cuántos litros de agua puede desperdiciar un grifo que gotea en un día?',
    answers: ['Hasta 10 litros', 'Hasta 30 litros', 'Hasta 50 litros', 'Hasta 100 litros'],
    correctAnswer: 1,
    explanation: 'Un grifo que gotea puede parecer poco, pero puede desperdiciar hasta 30 litros de agua al día. ¡Repáralo cuanto antes!',
  },
  {
    question: '¿Cuál de estas acciones ahorra más agua durante una ducha?',
    answers: ['Cantar una canción corta', 'Cerrar el grifo mientras te enjabonas', 'Usar un cabezal de ducha de bajo flujo', 'Ducharse con agua fría'],
    correctAnswer: 2,
    explanation: 'Instalar un cabezal de ducha de bajo flujo es la forma más efectiva y constante de ahorrar agua, reduciendo el consumo en hasta un 50% sin sacrificar la presión.',
  },
  {
    question: 'Al cepillarte los dientes, ¿cuál es la mejor manera de ahorrar agua?',
    answers: ['Usar un vaso de agua', 'Cerrar el grifo mientras te cepillas', 'Cepillarse más rápido', 'Usar enjuague bucal en lugar de agua'],
    correctAnswer: 1,
    explanation: 'Dejar el grifo abierto mientras te cepillas puede gastar hasta 6 litros de agua por minuto. Cerrarlo es un gesto simple con un gran impacto.',
  },
  {
    question: '¿En qué momento del día es mejor regar las plantas para minimizar la evaporación?',
    answers: ['Al mediodía, con el sol en su punto más alto', 'A primera hora de la mañana o al atardecer', 'Justo después de llover', 'No importa la hora'],
    correctAnswer: 1,
    explanation: 'Regar a primera hora de la mañana o al atardecer evita que el sol evapore el agua rápidamente, permitiendo que las raíces la absorban mejor.',
  },
    {
    question: 'Para lavar los platos a mano, ¿qué método es más eficiente en el uso del agua?',
    answers: ['Dejar el grifo corriendo', 'Llenar una pila para enjabonar y otra para enjuagar', 'Lavar cada plato por separado con el grifo abierto', 'Usar platos desechables'],
    correctAnswer: 1,
    explanation: 'Llenar el fregadero (una pila para lavar y otra para enjuagar) utiliza mucha menos agua que dejar el grifo corriendo continuamente.',
  },
];
