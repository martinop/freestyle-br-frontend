import * as React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import AnswerInput from 'components/AnswerInput';

type ThematicMatchProps = {
	title?: string
};
const ThematicMatch: React.FC<ThematicMatchProps> = () => {
	return (
		<Box w="100%" bg="gray.200" padding={5}>
			<Text>En cual enfrentamiento se uso la/s tematica/s?</Text>
			<AnswerInput />
		</Box>
	)
}

export default ThematicMatch;
