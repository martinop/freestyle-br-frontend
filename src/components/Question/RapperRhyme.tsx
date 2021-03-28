import * as React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import AnswerInput from 'components/AnswerInput';

type RapperRhymeProps = {
	title?: string
};
const RapperRhyme: React.FC<RapperRhymeProps> = () => {
	return (
		<Box w="100%" bg="gray.200" padding={5}>
			<Text>Quien dijo la rima?</Text>
			<AnswerInput />
		</Box>
	)
}

export default RapperRhyme;
