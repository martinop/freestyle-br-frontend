import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ROOM_EVENTS } from 'constant';
import useSocketEvent from 'hooks/useSocketEvent';
import { Question, QuestionType } from 'types';
import { Competition, CompleteRhyme, MatchPhoto, RapperRhyme, WhoIs, ThematicMatch } from 'components/Question';

const QuestionBox: React.FC = () => {
	const [question, setQuestion] = React.useState<Question>(null)
	const [isAnswerCorrect, setAnswerCorrect] = React.useState<boolean | null>(null);
	useSocketEvent(ROOM_EVENTS.QUESTION, ({ question: _question }) => setQuestion(_question))
	useSocketEvent(ROOM_EVENTS.ANSWER_RESPONSE, ({ correct }) => setAnswerCorrect(correct))

	console.log({ question, isAnswerCorrect })

	function getComponent() {
		switch(question?.type) {
			case QuestionType.COMPETITION: return <Competition imageUrl={question.photoUrl} />
			case QuestionType.COMPLETE_RHYME: return <CompleteRhyme title={question.title} />
			case QuestionType.MATCH_PHOTO: return <MatchPhoto imageUrl={question.photoUrl} />
			case QuestionType.RAPPER_RHYME: return <RapperRhyme title={question.title} />
			case QuestionType.THEMATIC_MATCH: return <ThematicMatch title={question.title} />
			case QuestionType.WHO_IS_PHOTO: return <WhoIs imageUrl={question.photoUrl} />
		}
	}
	return (
		<Box paddingY="3rem">
			<Text>Timer: </Text>
			{getComponent()}
		</Box>
	)
}

export default QuestionBox;