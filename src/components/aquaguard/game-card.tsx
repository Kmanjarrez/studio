'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Trophy, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Question } from '@/lib/game-data';

type GameCardProps = {
  questions: Question[];
};

export default function GameCard({ questions }: GameCardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setGameFinished(true);
    }
  };

  const handleRestartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setGameFinished(false);
  };

  if (gameFinished) {
    return (
      <Card className="text-center">
        <CardHeader>
          <Trophy className="mx-auto size-16 text-yellow-500" />
          <CardTitle className="text-2xl">¡Juego Terminado!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Tu puntuación final es: <span className="font-bold text-primary">{score} de {questions.length}</span>
          </p>
          <p className="text-muted-foreground mb-6">
            ¡Sigue aprendiendo y ahorrando agua cada día!
          </p>
          <Button onClick={handleRestartGame}>Jugar de Nuevo</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Pregunta {currentQuestionIndex + 1}/{questions.length}</CardTitle>
          <div className="text-lg font-bold text-primary">Puntuación: {score}</div>
        </div>
        <CardDescription className="pt-4 text-base">{currentQuestion.question}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.answers.map((answer, index) => {
            const isCorrect = index === currentQuestion.correctAnswer;
            const isSelected = selectedAnswer === index;
            
            return (
              <Button
                key={index}
                variant="outline"
                className={cn(
                  "h-auto w-full justify-start text-left whitespace-normal py-3",
                  isAnswered && isSelected && !isCorrect && "bg-destructive/20 border-destructive text-destructive-foreground",
                  isAnswered && isCorrect && "bg-primary/20 border-primary text-primary-foreground"
                )}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
              >
                <div className="flex items-center w-full">
                    <span className="flex-1">{answer}</span>
                    {isAnswered && isSelected && !isCorrect && <XCircle className="ml-2 size-5" />}
                    {isAnswered && isCorrect && <CheckCircle2 className="ml-2 size-5" />}
                </div>
              </Button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-6 p-4 bg-accent/20 rounded-md">
            <div className="flex items-center gap-3">
              <Lightbulb className="size-5 text-accent-foreground" />
              <h4 className="font-semibold text-accent-foreground">Explicación</h4>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{currentQuestion.explanation}</p>
          </div>
        )}

        {isAnswered && (
          <div className="mt-6 text-center">
            <Button onClick={handleNextQuestion}>
              {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Juego'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
