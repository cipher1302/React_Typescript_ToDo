import scss from "./ErrorComponent.module.scss";

interface Props {
  error: string | undefined;
}

const ErrorComponent = ({ error }: Props) => {
  return (
    <>
      <p className={scss.error}>{error}</p>
    </>
  );
};

export default ErrorComponent;
