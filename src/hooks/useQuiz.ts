import { MouseEvent, useState } from 'react';
import {
	Difficulties,
	QuestionsState,
	fetchDates,
} from '../services/API/fetchDates';

export type AnswerObject = {
	question: string;
	answer: string | null;
	correct: boolean;
	correctAnswer: string;
};

export const useQuiz = () => {
	const TOTAL_QUESTIONS = 10;
	const [isLoading, setIsLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionsState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [isGameOver, setIsGameOver] = useState(true);

	const startQuiz = async () => {
		try {
			setIsLoading(true);
			setIsGameOver(false);
			const newQuestions = await fetchDates(TOTAL_QUESTIONS, Difficulties.EASY);
			setQuestions(newQuestions);
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoading(false);
			setNumber(0);
			setScore(0);
			setUserAnswer([]);
		}
	};

	const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
		if (!isGameOver) {
			const answer = e.currentTarget.textContent;
			const correct = questions[number].correct_answer === answer;
			if (correct) setScore((prev) => prev + 1);
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswer((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;
		if (nextQuestion === TOTAL_QUESTIONS) {
			setIsGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return {
		nextQuestion,
		checkAnswer,
		startQuiz,
		score,
		userAnswer,
		isLoading,
		isGameOver,
		questions,
		TOTAL_QUESTIONS,
		number,
	};
};
