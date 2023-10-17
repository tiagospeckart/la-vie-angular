export default interface PsychologistDTO {
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
  isDeleted: boolean;
}