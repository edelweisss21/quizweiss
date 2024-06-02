import axios from 'axios';
import { shuffleArray } from '../../utils/shuffleArray';

export const enum Difficulties {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

export interface Question {
	category: string;
	correct_answer: string;
	difficulty: Difficulties;
	incorrect_answers: string[];
	question: string;
	type: string;
}

export interface QuestionsState extends Question {
	answers: string[];
}

export const fetchDates = async (
	amount: number,
	difficulty: Difficulties
): Promise<QuestionsState[]> => {
	const api = `https://opentdb.com/api.php`;
	const response = await axios.get(api, {
		params: {
			amount: amount,
			difficulty: difficulty,
			type: 'multiple',
		},
	});
	const data = response.data;
	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
