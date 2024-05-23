"use client";
import { getDayDiff } from "@/utils/getDayDiff";
import { interestCalculator } from "@/utils/interestCalculator";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

const SavingPlan = () => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [results, setResults] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const dayDiff = getDayDiff(startDate, endDate);
    const res = interestCalculator(amount, rate, dayDiff);

    setResults(res);
  };

  return (
    <section>
      saving
      <form onSubmit={handleSubmit}>
        <div>
          amount
          <input
            name="amount"
            type="number"
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
          start time
          <input
            name="start-time"
            type="date"
            autoComplete="off"
            onChange={(e: any) =>
              setStartDate(new Date(e.target.value).getTime())
            }
            className="border border-primary m-3"
          />
        </div>

        <div>
          end time
          <input
            name="end-time"
            type="date"
            autoComplete="off"
            onChange={(e: any) =>
              setEndDate(new Date(e.target.value).getTime())
            }
            className="border border-primary m-3"
          />
        </div>
        <div>
          <SubmitButton />
        </div>
        <div>
          <input type="number" disabled value={results} />
        </div>
      </form>
    </section>
  );
};

export default SavingPlan;
