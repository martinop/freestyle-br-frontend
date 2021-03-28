import * as React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import AnswerInput from 'components/AnswerInput';

type MatchPhotoProps = {
	imageUrl?: string
};

const MatchPhoto: React.FC<MatchPhotoProps> = () => {
	return (
		<Box w="100%" bg="gray.200" padding={5}>
			<Text>De cual enfrentamiento es esta foto</Text>
			<AnswerInput />
		</Box>
	)
}

export default MatchPhoto;
