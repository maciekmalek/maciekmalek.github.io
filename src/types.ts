import { techStackItems } from "@/const";

export type TechKey = keyof typeof techStackItems;

export type Experience = {
  position: string;
  company: string;
  description?: string;
  achivements: Array<string>;
  link: string;
  city: string;
  startDate:  string;
  technologies?: Array<TechKey>;
  endDate?:  string;
};