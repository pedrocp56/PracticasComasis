import { CampañaItem } from "../Campaña/CampañaItem";

export interface EventoBigCalendar {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  fondo?: string;
  id?: number;
  item?: CampañaItem;
}