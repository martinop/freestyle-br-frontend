import * as React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import AnswerInput from 'components/AnswerInput';


type WhoIsProps = {
	imageUrl?: string
};

const WhoIs: React.FC<WhoIsProps> = () => {
	return (
		<Box w="100%" bg="gray.200" padding={5}>
			<Text>Quien es?</Text>
			<AnswerInput />
		</Box>
	)
}

export default WhoIs;
