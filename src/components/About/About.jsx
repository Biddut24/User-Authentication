import React, { createContext, useState } from "react";
import Father from "./Father/Father";
import Aunty from "./Aunty/Aunty";
import Uncle from "./Uncle/Uncle";

export const MoneyContext = createContext(500);

const About = () => {
  const money = 10000;

  return (
    <div className="border-2 boder-green-500 rounded-lg p-10 m-10">
      <h1 className="text-center">Grand Father {money}Tk</h1>
      <div className="flex justify-between gap-5">
        <MoneyContext.Provider value={money}>
          <Father></Father>
          <Aunty money={money}></Aunty>
          <Uncle money={money}></Uncle>
        </MoneyContext.Provider>
      </div>
    </div>
  );
};

export default About;
