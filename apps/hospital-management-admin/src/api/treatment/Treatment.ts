import { Appointment } from "../appointment/Appointment";

export type Treatment = {
  appointment?: Appointment | null;
  cost: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  treatmentName: string | null;
  updatedAt: Date;
};
