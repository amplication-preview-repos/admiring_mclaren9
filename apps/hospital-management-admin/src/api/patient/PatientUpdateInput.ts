import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
