import React, { useContext } from "react";
import { MoneyContext } from "../About";

const Vabi = () => {
  const money = useContext(MoneyContext);

  return (
    <div className="border-2 boder-green-500 rounded-lg p-10 m-10">
      <h1 className="text-center">Vabi {money} </h1>
    </div>
  );
};

export default Vabi;
