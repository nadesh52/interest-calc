"use client";
import { getDayDiff } from "@/utils/getDayDiff";
import { interestCalculator } from "@/utils/interestCalculator";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import MonthSelect from "./MonthSelect";
import DatePicker from "./DatePicker";
import Input from "./Input";

//ฝากประจำ

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

  return (
    <section className="mx-auto">
      FixedPlan
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
            <span>month</span>
          </label>

          <MonthSelect
            selectedValue={(e: any) => setSelectedMonth(e.target.value)}
          />
        </div>

        <div>
          <label>
            <span>start time</span>
          </label>
          <DatePicker
            selectedValue={(e: any) => setSelectedDate(e.target.value)}
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
