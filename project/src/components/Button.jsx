/* eslint-disable react/prop-types */
export const Button = ({
  id,
  type,
  text,
  customClasses,
  icon,
  dataCount,
  dataId,
  onClick,
}) => {
  const _customClasses = ["button", customClasses].join(" ");

  const renderButtonContent = (customClasses) => {
    if (customClasses?.includes("icon")) {
      return (
        <>
          <span className="sr-only">{text}</span>
          {icon}
        </>
      );
    } else {
      return (
        <>
          {text}
          {icon && icon}
        </>
      );
    }
  };

  return (
    <>
      {customClasses?.includes("cart") ? (
        <button
          id={id}
          className={_customClasses}
          type={type}
          data-count={dataCount}
          onClick={onClick}
        >
          {customClasses && renderButtonContent(customClasses)}
        </button>
      ) : (
        <button
          id={id}
          className={_customClasses}
          type={type}
          data-id={dataId}
          onClick={onClick}
        >
          {customClasses && renderButtonContent(customClasses)}
        </button>
      )}
    </>
  );
};
