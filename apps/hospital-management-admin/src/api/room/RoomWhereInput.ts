import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  availability?: BooleanNullableFilter;
  id?: StringFilter;
  roomNumber?: StringNullableFilter;
  typeField?: "Option1";
};
