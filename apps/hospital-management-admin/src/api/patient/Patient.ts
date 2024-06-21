import { Appointment } from "../appointment/Appointment";

export type Patient = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
