import { SortOrder } from "../../util/SortOrder";

export type TreatmentOrderByInput = {
  appointmentId?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  treatmentName?: SortOrder;
  updatedAt?: SortOrder;
};
