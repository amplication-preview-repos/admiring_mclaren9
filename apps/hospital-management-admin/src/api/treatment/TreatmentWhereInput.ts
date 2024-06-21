import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TreatmentWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  cost?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  treatmentName?: StringNullableFilter;
};
