import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Waiting: React.FC = () => {
	return (
		<Flex w="100%" bg="gray.200" padding={5} justifyContent="center" alignItems="center" flexDirection="column">
			<Text>ENHORABUENA!</Text>
			<Text>Esperando por la siguiene ronda</Text>
		</Flex>
	)
}

export default Waiting;