import * as React from 'react';
import { Joined, Loser, Waiting, Question } from 'components/Room';
import useSocketEvent from 'hooks/useSocketEvent';
import { useRouter } from 'next/router';
import { RoomGame } from 'types';
import { ROOM_EVENTS, ROOM_STATUSSES } from 'constant';
function Room() {
	const router = useRouter()
	const roomId = router.query?.id;
	const [room, setRoom] = React.useState<RoomGame>({ permission: null, status: 'idle' })
	const { socket } = useSocketEvent(ROOM_EVENTS.UPDATED, (data)  => {
		console.log(data)
		const { status, permission } = data;
		setRoom({ permission: permission || room.permission, status })
	})

	React.useEffect(() => {
		if(socket && roomId){
			socket?.emit(ROOM_EVENTS.JOIN, { roomId, userId: "1creator" })
		}
	}, [socket, roomId]);

	switch(room?.status) {
		case ROOM_STATUSSES.JOINED: return <Joined permission={room.permission} />
		case ROOM_STATUSSES.LOSER: return <Loser />
		case ROOM_STATUSSES.WAITING: return <Waiting />
		case ROOM_STATUSSES.STARTED: return <Question />

		default: return null;
	}
}

export default Room;