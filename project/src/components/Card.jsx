/* eslint-disable react/prop-types */

export const Card = ({ title, description, brand, price, quantity }) => {
  return (
    <div className="card">
      <span>{title}</span>
      <span>{description}</span>
      <span>{brand}</span>
      <span>{price}</span>
      {quantity && <span> ** {quantity}</span>}
    </div>
  );
};
