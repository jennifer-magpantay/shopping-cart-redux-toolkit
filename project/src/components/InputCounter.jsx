/* eslint-disable react/prop-types */
import { Button } from "./Button";

import { MinusCircle, PlusCircle } from "@phosphor-icons/react";

export const InputCounter = ({ itemAmount, itemId }) => {
  const handleManageItemAmount = (e) => {
    //const target = e.currentTarget;
    //manageAmount(target.id, itemId);
  };

  const handleSetAmountChange = (e) => {
    //const amount = e.target;
    //setAmount(Number(amount.value), itemId);
  };

  return (
    <div className="counter--container">
      <Button
        id="decrease"
        type="button"
        text="Remove item from order"
        customClasses="icon card"
        icon={<MinusCircle size={32} />}
        dataId={itemId}
        onClick={(e) => handleManageItemAmount(e)}
      />

      <input
        type="number"
        name="amount"
        id="amount"
        min={0}
        value={itemAmount}
        onChange={(e) => handleSetAmountChange(e)}
      />

      <Button
        id="increase"
        type="button"
        text="Add item to order"
        customClasses="icon card"
        icon={<PlusCircle size={32} />}
        dataId={itemId}
        onClick={(e) => handleManageItemAmount(e)}
      />
    </div>
  );
};
