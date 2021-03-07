import * as React from 'react';
import { Joined, Loser, Waiting } from 'components';
import useSocketEvent from 'hooks/useSocketEvent';
function Room() {
	const [status, setStatus] = React.useState('')
	useSocketEvent("room-status", (data)  => {
		console.log(data)
		setStatus(data)
	})
	switch(status) {
		case 'joined': return <Joined />
		case 'loser': return <Loser />
		case 'waiting': return <Waiting />
		default: return null;
	}
}

export default Room;