import React from "react";

const Uncle = ({ money }) => {
  money = 2000;
  return (
    <div className="border-2 boder-green-500 rounded-lg p-10 m-10">
      <h1 className="text-center">Uncle {money}Tk</h1>
    </div>
  );
};

export default Uncle;
