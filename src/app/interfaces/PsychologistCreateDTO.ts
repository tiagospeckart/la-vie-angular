export default interface PsychologistCreateDTO {
  name: string;
  email: string;
  password: string;
  phone?: string;
  licenseNumber: string;
  specializationArea?: string;
  biography?: string;
}