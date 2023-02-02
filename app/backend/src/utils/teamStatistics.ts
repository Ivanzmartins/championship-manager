// import { TeamType } from '../Interfaces/TeamInterfaces';

export default class TeamStatistics {
  public name: string;
  public totalPoints = 0;
  public totalGames = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency : string;

  constructor(name: string) {
    this.name = name;
    this.efficiency = '0.00';
  }

  public addGame = (goalsFavor: number, goalsOwn: number) => {
    this.totalGames += 1;
    this.goalsFavor += goalsFavor;
    this.goalsOwn += goalsOwn;
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    if (goalsFavor > goalsOwn) {
      this.totalVictories += 1;
      this.totalPoints += 3;
    } else if (goalsFavor === goalsOwn) {
      this.totalDraws += 1;
      this.totalPoints += 1;
    } else {
      this.totalLosses += 1;
    }
    this.efficiency = (((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
  };
}
