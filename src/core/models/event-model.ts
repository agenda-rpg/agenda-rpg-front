import { AddressModel } from "./address-model";

export class EventModel {
  "id"!: number;
  "name"!: string;
  "date"!: string;
  "local"!: AddressModel;
  "activities"!: number[]
}
