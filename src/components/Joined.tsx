import * as React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';

const Joined: React.FC = () => {
	return (
		<Grid templateColumns="repeat(2, 1fr)" gap={6}>
			<Box w="100%" bg="gray.200" padding={5}>
				<Text>Te has unido...</Text>
				<Text>Esperando el comienzo de la partida...</Text>
			</Box>
			<Box w="100%" bg="blue.500" />
		</Grid>
	)
}

export default Joined;