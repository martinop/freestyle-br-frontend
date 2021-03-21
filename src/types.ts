export type RoomGame = {
	status: 'joined' | 'loser' | 'waiting' | 'idle'
	permission: Permission
}

export type Permission =  null | 'creator' | 'player'