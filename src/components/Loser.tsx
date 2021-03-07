import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Loser: React.FC = () => {
	return (
		<Flex w="100%" bg="gray.200" padding={5} justifyContent="center" alignItems="center" flexDirection="column">
			<Text>Has perdido</Text>
			<Text>Quedaste de 10 y ganaste 5 puntos</Text>
		</Flex>
	)
}

export default Loser;