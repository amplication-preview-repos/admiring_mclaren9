import { Appointment } from "../appointment/Appointment";

export type Doctor = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  specialization: string | null;
  updatedAt: Date;
};
