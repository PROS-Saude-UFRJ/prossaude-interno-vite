"use client";
import { createContext, useContext } from "react";
import { ScheduleCtx } from "./ScheduleForm";
import TrBSchedTab from "./TrBSchedTab";
import { ScheduleTbodyCtxProps } from "../../../src/lib/global/declarations/interfaces";
const ScheduleTbodyCtx = createContext<ScheduleTbodyCtxProps>({ entries: {} });
export default function ScheduleTbody(): JSX.Element {
  const hours = useContext(ScheduleCtx)?.nHrs;
  return (
    <ScheduleTbodyCtx.Provider value={{ entries: {} }}>
      <tbody id='tbSchedule'>
        {hours.map((nHr, i) => (
          <TrBSchedTab nHr={nHr} nRow={i + 1} key={`tr_${i + 1}__${nHr}`} />
        ))}
      </tbody>
    </ScheduleTbodyCtx.Provider>
  );
}
