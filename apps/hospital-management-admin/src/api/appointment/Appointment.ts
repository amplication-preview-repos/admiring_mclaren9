import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";
import { Treatment } from "../treatment/Treatment";

export type Appointment = {
  appointmentDate: Date | null;
  createdAt: Date;
  doctor?: Doctor | null;
  id: string;
  patient?: Patient | null;
  status?: "Option1" | null;
  treatments?: Array<Treatment>;
  updatedAt: Date;
};
