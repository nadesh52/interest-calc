"use client";
import { getDayDiff } from "@/utils/getDayDiff";
import { interestCalculator } from "@/utils/interestCalculator";
import React, { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";

//ฝากประจำ
const months = [3, 6, 12, 24, 36];

const getDay = (date: any, _month: any) => {
  const month = Number(_month);
  const currentMonth = new Date(date).getMonth();

  const startD = date.getTime();
  const endD = new Date(date).setMonth(currentMonth + month);

  const dayDiff = getDayDiff(startD, endD);

  return dayDiff;
};

const FixedPlan = () => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [result, setResult] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const days = getDay(new Date(selectedDate), selectedMonth);

    const res = interestCalculator(amount, rate, days);
    setResult(res);
  };
  useEffect(() => {}, []);

  return (
    <section>
      FixedPlan
      <form onSubmit={handleSubmit}>
        <div>
          amount
          <input
            name="amount"
            type="number"
            min={0}
            step={0.01}
            autoComplete="off"
            onChange={(e: any) => setAmount(e.target.value)}
            className="border border-primary m-3"
          />
        </div>

        <div>
          rate
          <input
            name="rate"
            type="number"
            min={0}
            step={0.01}
            autoComplete="off"
            onChange={(e: any) => setRate(e.target.value)}
            className="border border-primary m-3"
          />
        </div>

        <div>
          month
          <select
            name="select-month"
            className="border border-primary rounded-md px-2 py-1"
            onChange={(e: any) => setSelectedMonth(e.target.value)}
            value={selectedMonth}
          >
            <option value="0" disabled>
              เลือกจำนวนเดือน
            </option>
            {months.map((m: any, idx: number) => (
              <option key={idx} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          start time
          <input
            name="start-time"
            type="date"
            autoComplete="off"
            onChange={(e: any) => setSelectedDate(e.target.value)}
            className="border border-primary m-3"
          />
        </div>

        <div>
          <SubmitButton />
        </div>
      </form>
      <div>{result}</div>
    </section>
  );
};

export default FixedPlan;
