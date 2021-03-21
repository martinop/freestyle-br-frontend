import * as React from 'react';
import { Box, Button, Grid, Text } from '@chakra-ui/react';
import { Permission } from 'types';
import { useRouter } from 'next/router';
import { SocketIOContext } from 'contexts/socket';

type JoinedProps = {
	permission: Permission;
}

const Creator: React.FC = () => {
	const router = useRouter()
	const roomId = router.query?.id;
	const socket = React.useContext(SocketIOContext);

	function onStart() {
		socket?.emit("start-game", { roomId })
	}
	return (
		<Grid templateColumns="repeat(2, 1fr)" gap={1}>
			<Box w="100%" bg="gray.200" padding={5}>
				<Button
					colorScheme="blue"
					as="button" 
					onClick={onStart}
				>
					Iniciar Partida
				</Button>
			</Box>
			<Box w="100%" bg="blue.500" />
		</Grid>
	)
}

const Player: React.FC = () => (
	<Grid templateColumns="repeat(1, 1fr)" gap={1} width="50%" marginX="auto">
		<Box w="100%" bg="gray.200" padding={5}>
			<Text>Te has unido...</Text>
			<Text>Esperando el comienzo de la partida...</Text>
		</Box>
	</Grid>
)
const Joined: React.FC<JoinedProps> = ({ permission }) =>  permission === "creator" ? <Creator /> : <Player/>

export default Joined;