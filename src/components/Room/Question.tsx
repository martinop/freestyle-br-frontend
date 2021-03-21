import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ROOM_EVENTS } from 'constant';
import useSocketEvent from 'hooks/useSocketEvent';

const Question: React.FC = () => {
	const [question, setQuestion] = React.useState()
	useSocketEvent(ROOM_EVENTS.QUESTION, setQuestion)
	console.log(question)
	return (
		<Box paddingY="3rem">
  		<Text fontSize="xl">Quien dijo la rima?</Text>
			<Text fontSize="3xl" lineHeight="1.2" fontWeight="bold">Escucha como tengo todo el estilo pero siempre puede que este rival me la pifie. Y se ha vuelto tan yonki el compi que no es calvicie, lo normal es que esnifar la calvicie.</Text>
		</Box>
	)
}

export default Question;