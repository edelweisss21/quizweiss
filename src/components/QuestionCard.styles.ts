import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1100px;
	width: 100%;
	background: rgba(255, 255, 255, 0.5);
	border-radius: 10px;
	border: 2px solid #0085a3;
	padding: 20px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;
	margin-top: 20px;

	.questionNum {
		color: #0085a3;
	}
`;

type ButtonWrapperProps = {
	$correct: boolean;
	$userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	:hover {
		opacity: 0.8;
	}

	.button {
		transition: all 0.3s ease;
		font-family: 'Poppins', sans-serif;
		cursor: pointer;
		user-select: none;
		width: 100%;
		height: 40px;
		margin: 5px 0;
		background: ${(
			{ $correct, $userClicked } //$ gives this props only for styled-components
		) =>
			$correct
				? 'linear-gradient(90deg, #56FFA4, #59BC86)'
				: !$correct && $userClicked
				? 'linear-gradient(90deg, #FF5656, #C16868)'
				: 'linear-gradient(90deg, #56ccff, #6eafb4)'};
		border: 1px solid #ffffff;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		color: #fff;
		font-size: 16px;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	}
`;
