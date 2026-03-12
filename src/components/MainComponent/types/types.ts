export interface FormInterface {
  name: string;
  description: string;
  image: File | null;
}

export interface TodoItem {
  id: string;
  name: string;
  description: string;
  image: string | null;
}
