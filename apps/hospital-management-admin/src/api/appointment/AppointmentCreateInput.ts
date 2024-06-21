import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentCreateNestedManyWithoutAppointmentsInput } from "./TreatmentCreateNestedManyWithoutAppointmentsInput";

export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  status?: "Option1" | null;
  treatments?: TreatmentCreateNestedManyWithoutAppointmentsInput;
};
