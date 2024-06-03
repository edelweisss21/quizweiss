import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper } from './App.styles';
import { Loader } from './components/UI/Loader.styles';
import { useQuiz } from './hooks/useQuiz';

const App = () => {
	const {
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
	} = useQuiz();

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<h1 className='title'>Quizweiss</h1>
				{(isGameOver || userAnswer.length === TOTAL_QUESTIONS) && (
					<button className='start' onClick={startQuiz}>
						Start Quiz
					</button>
				)}
				{!isGameOver && <p className='score'>Your score: {score}</p>}
				{isLoading && <Loader />}
				{!isLoading && !isGameOver && (
					<QuestionCard
						totalQuestions={TOTAL_QUESTIONS}
						questionNr={number + 1}
						userAnswer={userAnswer ? userAnswer[number] : null}
						question={questions[number].question}
						answers={questions[number].answers}
						callback={checkAnswer}
					/>
				)}
				{!isGameOver &&
				!isLoading &&
				userAnswer.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 ? (
					<button className='nextQuestion' onClick={nextQuestion}>
						Next question
					</button>
				) : null}
			</Wrapper>
		</>
	);
};

export default App;
