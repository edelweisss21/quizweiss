import { MouseEvent } from 'react';
import { AnswerObject } from '../hooks/useQuiz';
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';
import parse from 'html-react-parser';

interface QuestionCardProps {
	question: string;
	answers: string[];
	callback: (e: MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | null;
	questionNr: number;
	totalQuestions: number;
}

const QuestionCard = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNr,
	totalQuestions,
}: QuestionCardProps) => {
	return (
		<Wrapper>
			<p className='number'>
				Question: <span className='questionNum'>{questionNr}</span> /
				{totalQuestions}
			</p>
			<p>{parse(question)}</p>
			<div>
				{answers.map((answer) => (
					<ButtonWrapper
						$correct={userAnswer?.correctAnswer === answer}
						$userClicked={userAnswer?.answer === answer}
						key={answer}
					>
						{/* !! - do type boolean */}
						<button
							className='button'
							disabled={!!userAnswer}
							onClick={callback}
						>
							<span>{parse(answer)}</span>
						</button>
					</ButtonWrapper>
				))}
			</div>
		</Wrapper>
	);
};

export default QuestionCard;
