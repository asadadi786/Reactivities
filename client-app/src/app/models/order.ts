export interface Order {
  id: string;
  ourRef: string;
  description: string;
  equipment: string;
  date: Date;
  category: string;
  supervisor: string;
  labor: string;
  estimated_duration: string;
  company: string;
}
