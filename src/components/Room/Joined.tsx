import * as React from 'react';
import { Box, Button, Grid, Badge, Text, Wrap } from '@chakra-ui/react';
import { Permission } from 'types';
import { useRouter } from 'next/router';
import useSocketEvent from 'hooks/useSocketEvent';

type JoinedProps = {
	permission: Permission;
}

const Creator: React.FC = () => {
	const router = useRouter()
	const roomId = router.query?.id;
	const [users, setUsers] = React.useState<string[]>([]);
	const { socket } = useSocketEvent("user-join", ({ userId }) => {
		console.log(userId)
		setUsers([...users, userId])
	})

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
			<Box w="100%" bg="blue.500">
				<Wrap padding="2">
					<Badge margin="1" colorScheme="green">1creator</Badge>
					{users.map(user => (
						<Badge margin="1">{user}</Badge>
					))}
				</Wrap>
			</Box>
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