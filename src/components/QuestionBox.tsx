import { Box, Text, Button, Flex } from "@chakra-ui/react"

const QuestionBox: React.FC = () => {
	return (
		<Box paddingY="3rem">
  		<Text fontSize="xl">Quien dijo la rima?</Text>
			<Text fontSize="3xl" lineHeight="1.2" fontWeight="bold">Escucha como tengo todo el estilo pero siempre puede que este rival me la pifie. Y se ha vuelto tan yonki el compi que no es calvicie, lo normal es que esnifar la calvicie.</Text>
			<Flex direction="column" alignItems="flex-start" marginTop="5">
				<Button colorScheme="blue">Sweet Pain</Button>
				<Button colorScheme="blue" marginTop="2">Bnet</Button>
				<Button colorScheme="blue" marginTop="2">Valles-T</Button>
			</Flex>

		</Box>
	)
}

export default QuestionBox;