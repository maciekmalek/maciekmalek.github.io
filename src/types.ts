import { TechStackItems } from "@/const";

export type TechKey = keyof typeof TechStackItems;

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