import { Button } from "../UI/Button";

export const Form = ({ dataId, children }) => {
  const handleSubmitItem = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmitItem} data-id={dataId}>
      {children}
      <Button id="submit" type="submit" text="Add" customClasses="cta add" />
    </form>
  );
};
