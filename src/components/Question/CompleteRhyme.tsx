import * as React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import AnswerInput from 'components/AnswerInput';

type CompleteRhymeProps = {
	title?: string
};
const CompleteRhyme: React.FC<CompleteRhymeProps> = () => {
	return (
		<Box w="100%" bg="gray.200" padding={5}>
			<Text>Completa la rima</Text>
			<AnswerInput />
		</Box>
	)
}

export default CompleteRhyme;
