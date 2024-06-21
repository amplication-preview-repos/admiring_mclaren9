import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentUpdateManyWithoutAppointmentsInput } from "./TreatmentUpdateManyWithoutAppointmentsInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  status?: "Option1" | null;
  treatments?: TreatmentUpdateManyWithoutAppointmentsInput;
};
