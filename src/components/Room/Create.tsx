import * as React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react'
import useSocketEvent from 'hooks/useSocketEvent';

const CreateRoom: React.FC = () => {
	const router = useRouter()
	const { socket } = useSocketEvent("room-created", (data)  => {
		router.push(`/room/${data.roomId}`)
	})
	function onCreate() {
		socket?.emit("create-room", { creator: "1creator" })
	}
	return (
		<div>
			<Button
				colorScheme="blue"
				marginTop="1rem"
				as="a" 
				onClick={onCreate}
			>
				Crear Partida
			</Button>
		</div>
	)
}

export default CreateRoom;