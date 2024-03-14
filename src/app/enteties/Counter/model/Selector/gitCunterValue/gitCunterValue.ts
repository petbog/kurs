import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { CounterScema } from "../../Types/CounterScema";

//реселект

export const gitCunterValue = createSelector(
  getCounter,
  (counter:CounterScema) => counter.value
)