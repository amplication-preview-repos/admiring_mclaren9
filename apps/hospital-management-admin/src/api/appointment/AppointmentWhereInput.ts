import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentListRelationFilter } from "../treatment/TreatmentListRelationFilter";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  status?: "Option1";
  treatments?: TreatmentListRelationFilter;
};
