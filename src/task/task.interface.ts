export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
  description?: string;
  priority?: number;
  tags?: string[];
}
