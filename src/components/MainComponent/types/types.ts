export interface FormInterface {
  name: string;
  description: string;
}

export type TodoItem = FormInterface & { id: string };
