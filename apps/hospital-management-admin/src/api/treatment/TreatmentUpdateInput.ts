import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type TreatmentUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  cost?: number | null;
  description?: string | null;
  treatmentName?: string | null;
};
