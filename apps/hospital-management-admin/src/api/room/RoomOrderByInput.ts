import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  roomNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
