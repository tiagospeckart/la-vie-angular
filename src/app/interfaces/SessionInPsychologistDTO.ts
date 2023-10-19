import { SessionStatus } from "../enums/SessionStatus";

export interface SessionInPsychologistListDTO {
  clientName: string;
  dateAndTime: string;
  sessionNotes: string;
  sessionStatus: SessionStatus;
}