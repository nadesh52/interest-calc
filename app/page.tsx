import FixedPlan from "@/components/FixedPlan";
import SavingPlan from "@/components/SavingPlan";
import React from "react";

const Home = () => {
  return (
    <article>
      <SavingPlan />
      <hr />
      <FixedPlan />
    </article>
  );
};

export default Home;
