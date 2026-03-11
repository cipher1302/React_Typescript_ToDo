import FormComponent from "../FormComponent/FormComponent";
import type { FormInterface } from "./types/types";
import scss from "./MainComponent.module.scss";

interface Props {
  handleForm: (data: FormInterface) => void;
}

const MainComponent = ({ handleForm }: Props) => {
  return (
    <div className={scss.container_main}>
      <FormComponent onSubmit={handleForm} />
    </div>
  );
};

export default MainComponent;
