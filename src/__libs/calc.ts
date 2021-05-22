import { frequencyConfig } from "../__config/frequency.config";

export function simpleCalculateCost(
  nbParticipants: number,
  averageSalary: number,
  meetingDuration: number,
  meetingFrequency: number): number {
  if(nbParticipants <= 0 || averageSalary <=0 || meetingDuration <= 0 || meetingFrequency <= 0){
    return 0;
  }

  let totalSalaries: number = nbParticipants * averageSalary;

  let meetingTimeHours: number = meetingDuration * meetingFrequency * nbParticipants;

  let totalHours: number = nbParticipants * frequencyConfig.dailyHours * frequencyConfig.daily;

  let percentage: number = meetingTimeHours / totalHours;

  let cost = totalSalaries * percentage;

  return cost;
}