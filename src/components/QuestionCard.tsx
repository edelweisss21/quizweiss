import { MouseEvent } from 'react';
import { AnswerObject } from '../App';

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
		<div>
			<p className='number'>
				Question: {questionNr} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div>
				{answers.map((answer) => (
					<div key={answer}>
						{/* !! - do type boolean */}
						<button disabled={!!userAnswer} onClick={callback}>
							<span dangerouslySetInnerHTML={{ __html: answer }} />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
