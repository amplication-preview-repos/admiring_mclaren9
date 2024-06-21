import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
