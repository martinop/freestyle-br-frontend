import * as React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import AnswerInput from 'components/AnswerInput';

type CompetitionProps = {
	imageUrl?: string
};

const Competition: React.FC<CompetitionProps> = () => {
	return (
		<Box w="100%" bg="gray.200" padding={5}>
			<Text>Cual es la competicion</Text>
			<AnswerInput />
		</Box>
	)
}

export default Competition;
