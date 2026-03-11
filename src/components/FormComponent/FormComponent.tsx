import { useForm } from "react-hook-form";
import scss from "./FormComponent.module.scss";
import { FormSchema } from "./schema/FormSchema";
import type { FormInterface } from "../MainComponent/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

interface Props {
  onSubmit: (data: FormInterface) => void;
}

const FormComponent = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInterface>({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
  });

  const submitHandler = (data: FormInterface) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className={scss.form_box}>
      <h2>Create task</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={scss.user_box}>
          <input type="text" required {...register("name")} />

          <label>Task name</label>
        </div>
        {errors.name && <ErrorComponent error={errors.name.message} />}

        <div className={scss.user_box}>
          <input type="text" required {...register("description")} />
          <label>Description</label>
        </div>
        {errors.description && (
          <ErrorComponent error={errors.description.message} />
        )}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default FormComponent;
