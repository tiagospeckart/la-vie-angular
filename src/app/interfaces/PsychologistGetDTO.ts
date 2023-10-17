import { SessionInPsychologistListDTO } from "./SessionInPsychologistDTO";

export default interface PsychologistGetDTO {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  licenseNumber: string;
  specializationArea: string;
  biography: string;
  status: Status;

  sessions: SessionInPsychologistListDTO[];
  isDeleted: boolean;
}