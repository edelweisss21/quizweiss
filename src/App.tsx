import { MouseEvent, useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {
	Difficulties,
	QuestionsState,
	fetchDates,
} from './services/API/fetchDates';

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionsState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswer, setUserAnswer] = useState([]);
	const [score, setScore] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);

	const startQuiz = async () => {
		try {
			setIsLoading(true);
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
	console.log('questions', questions);

	const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div>
			<h1 className='title'>Quizweiss</h1>
			<button className='start' onClick={startQuiz}>
				Start Quiz
			</button>
			<p className='score'>Your score: {score}</p>
			<p className='loading'>Loading questions...</p>
			{questions.length > 0 && (
				<QuestionCard
					totalQuestions={TOTAL_QUESTIONS}
					questionNr={number + 1}
					userAnswer={userAnswer ? userAnswer[number] : null}
					question={questions[number].question}
					answers={questions[number].answers}
					callback={checkAnswer}
				/>
			)}
			<button className='nextQuestion' onClick={nextQuestion}>
				Next question
			</button>
		</div>
	);
};

export default App;
