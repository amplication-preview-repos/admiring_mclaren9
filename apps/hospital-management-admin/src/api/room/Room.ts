export type Room = {
  availability: boolean | null;
  createdAt: Date;
  id: string;
  roomNumber: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
