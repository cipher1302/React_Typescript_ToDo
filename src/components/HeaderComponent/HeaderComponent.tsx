import scss from "./HeaderComponent.module.scss";

const HeaderComponent = () => {
  return (
    <header className={scss.header_container}>
      <h2>Nikita Ivashchenko's ToDo App</h2>
    </header>
  );
};

export default HeaderComponent;
