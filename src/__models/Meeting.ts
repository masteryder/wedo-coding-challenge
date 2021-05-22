import type { Participant } from "./Participant";

export class Meeting {
  frequency: number; // How many times a year the meeting takes place
  duration: number; // Duration in minutes of the meeting
  participants: Participant[]; // Array containing all the participants of the meeting

  constructor(frequency?: number, duration?: number, participants?: Participant[]){
    this.frequency = frequency;
    this.duration = duration;
    this.participants = participants;
  }

}