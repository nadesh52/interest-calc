"use client";
import { getDayDiff } from "@/utils/getDayDiff";
import { interestCalculator } from "@/utils/interestCalculator";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import DatePicker from "./DatePicker";
import ResetButton from "./ResetButton";
import Input from "./Input";

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
    <section className="select-none">
      saving
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>amount</span>
          </label>
          <Input
            type="number"
            min={0}
            step={0.01}
            required
            onChange={(e: any) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label>
            <span>rate</span>
          </label>
          <Input
            type="number"
            min={0}
            step={0.01}
            required
            onChange={(e: any) => setRate(e.target.value)}
          />
        </div>

        <div>
          <label>
            <span>start time</span>
          </label>
          <DatePicker
            selectedValue={(e: any) =>
              setStartDate(new Date(e.target.value).getTime())
            }
          />
        </div>

        <div>
          <label>
            <span>end time</span>
          </label>
          <DatePicker
            selectedValue={(e: any) =>
              setEndDate(new Date(e.target.value).getTime())
            }
          />
        </div>

        <div>
          <SubmitButton />
          <ResetButton />
        </div>

        <div>
          <input type="number" disabled value={results} />
        </div>
      </form>
    </section>
  );
};

export default SavingPlan;
