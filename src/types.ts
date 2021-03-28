export type RoomGame = {
	status: 'joined' | 'loser' | 'waiting' | 'idle'
	permission: Permission
}

export type Permission =  null | 'creator' | 'player'

export enum QuestionType {
  COMPLETE_RHYME = "complete_rhyme",
  RAPPER_RHYME = "rapper_rhyme",
  WHO_IS_PHOTO = "who_is_photo",
  COMPETITION = "competition",
  THEMATIC_MATCH = "thematic_match",
  MATCH_PHOTO = "match_photo"
}

enum Difficulty {
  VERY_EASY = "very_easy",
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
  EXTREME = "extreme"
}

export type Question = null | {
	type: QuestionType;
	difficulty: Difficulty;
	photoUrl?: string;
	title?: string;
}
