export default interface IMatch {
  id?: number;
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  homeTeam?: {
    teamName: string,
  },
}

export interface IStatMatch {
  id?: number;
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
  awayTeam: {
    teamName: string,
  },
  homeTeam: {
    teamName: string,
  }
}
